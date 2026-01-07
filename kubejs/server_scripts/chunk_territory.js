// Chunk Territory - Ownership, enforcement, and commands

var IntegerArgumentType = Java.loadClass('com.mojang.brigadier.arguments.IntegerArgumentType');
var EntityArgument = Java.loadClass('net.minecraft.commands.arguments.EntityArgument');


// DATA LAYER


if (!global.ChunkTerritory) {
  global.ChunkTerritory = { chunks: {}, count: 0 };
}
var CT = global.ChunkTerritory;

CT.owns = function (uuid, cx, cz) {
  var data = CT.chunks[cx + ',' + cz];
  return data && data.uuid === uuid;
};

CT.getOwner = function (cx, cz) {
  var data = CT.chunks[cx + ',' + cz];
  return data ? data.uuid : null;
};

CT.save = function (server) {
  try {
    var level = server.getLevel('minecraft:overworld');
    if (level) level.persistentData.putString('chunkTerritory', JSON.stringify(CT.chunks));
  } catch (e) {}
};

CT.load = function (server) {
  try {
    var level = server.getLevel('minecraft:overworld');
    if (level && level.persistentData.contains('chunkTerritory')) {
      CT.chunks = JSON.parse(level.persistentData.getString('chunkTerritory'));
      CT.count = Object.keys(CT.chunks).length;
    }
  } catch (e) {}
};

CT.claim = function (server, uuid, cx, cz, ticks, srcX, srcY, srcZ) {
  var key = cx + ',' + cz;
  var renewed = !!CT.chunks[key];
  CT.chunks[key] = { uuid: uuid, expiry: ticks > 0 ? server.tickCount + ticks : null };
  if (!renewed) CT.count++;

  if (!renewed) {
    var srcCx = Math.floor(srcX / 16), srcCz = Math.floor(srcZ / 16);
    var alongX = srcCx !== cx;
    var borderPos = alongX
      ? (srcCx < cx ? cx * 16 : (cx + 1) * 16)
      : (srcCz < cz ? cz * 16 : (cz + 1) * 16);
    var rangeMin = alongX ? cz * 16 : cx * 16;
    var rangeMax = alongX ? (cz + 1) * 16 : (cx + 1) * 16;

    for (var i = rangeMin + 2; i < rangeMax - 1; i += 3) {
      var px = alongX ? borderPos : i, pz = alongX ? i : borderPos;
      var pdx = alongX ? 0.1 : 1.5, pdz = alongX ? 1.5 : 0.1;
      server.runCommandSilent('particle dust 0 1 0 2 ' + px + ' ' + srcY + ' ' + pz + ' ' + pdx + ' 3 ' + pdz + ' 0 8 force');
      server.runCommandSilent('particle dust 0.2 1 0.2 1.5 ' + px + ' ' + (srcY + 2) + ' ' + pz + ' ' + pdx + ' 2 ' + pdz + ' 0 5 force');
    }
    server.runCommandSilent('playsound minecraft:block.beacon.activate block @a ' + srcX + ' ' + srcY + ' ' + srcZ + ' 1 1.2');
  }
  return { cx: cx, cz: cz, renewed: renewed };
};

CT.remove = function (cx, cz) {
  var key = cx + ',' + cz;
  if (CT.chunks[key]) {
    delete CT.chunks[key];
    CT.count--;
    return true;
  }
  return false;
};

CT.clear = function () {
  var count = CT.count;
  CT.chunks = {};
  CT.count = 0;
  return count;
};

CT.claimAdjacent = function (server, uuid, x, y, z, ticks) {
  var cx = Math.floor(x / 16), cz = Math.floor(z / 16);
  var localX = x - cx * 16, localZ = z - cz * 16;
  var dists = [
    { dx: -1, dz: 0, d: localX },
    { dx: 1, dz: 0, d: 16 - localX },
    { dx: 0, dz: -1, d: localZ },
    { dx: 0, dz: 1, d: 16 - localZ }
  ];
  var nearest = dists[0];
  for (var i = 1; i < 4; i++) if (dists[i].d < nearest.d) nearest = dists[i];
  return CT.claim(server, uuid, cx + nearest.dx, cz + nearest.dz, ticks, x, y, z);
};


// CONFIG


var BORDER_DIST_SURVIVAL = 3;
var BORDER_DIST_SPECTATOR = 5;
var BORDER_LOOK_DISTANCE = 64;
var ARROW_BORDER_DISTANCE = 5;


// UTILITIES


var playerState = {};
var lastBorderSound = {};

function actionbar(player, text) {
  player.server.runCommandSilent('title ' + player.name.string + ' actionbar {"text":"' + text + '"}');
}

function playSound(server, name, x, y, z, sound, vol, pitch) {
  server.runCommandSilent('playsound ' + sound + ' master ' + name + ' ' + x + ' ' + y + ' ' + z + ' ' + vol + ' ' + pitch);
}

function isPassable(level, x, y, z) {
  var id = level.getBlock(x, y, z).id + '';
  return id.indexOf('air') !== -1 || id === 'minecraft:water';
}

function isHoldingTransceiver(player) {
  try {
    var main = player.handSlots[0] ? (player.handSlots[0].id + '') : '';
    var off = player.handSlots[1] ? (player.handSlots[1].id + '') : '';
    return main === 'ptdye:trading_transceiver' || off === 'ptdye:trading_transceiver';
  } catch (e) {
    return false;
  }
}

var $ClipContext, $ClipContextBlock, $ClipContextFluid, $HitResultType;

function getLookedAtBlock(player, maxDist) {
  try {
    if (typeof player.rayTrace === 'function') {
      var tr = player.rayTrace(maxDist);
      if (tr && tr.type === 'block' && tr.block) return { x: tr.block.x, y: tr.block.y, z: tr.block.z };
    }
    if (!$ClipContext) {
      $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext');
      $ClipContextBlock = Java.loadClass('net.minecraft.world.level.ClipContext$Block');
      $ClipContextFluid = Java.loadClass('net.minecraft.world.level.ClipContext$Fluid');
      $HitResultType = Java.loadClass('net.minecraft.world.phys.HitResult$Type');
    }
    var ent = player.minecraftEntity || player;
    if (!ent.getEyePosition || !ent.getViewVector) return null;
    var start = ent.getEyePosition(1.0), look = ent.getViewVector(1.0);
    if (!start || !look || !start.add) return null;
    var end = start.add(look.x * maxDist, look.y * maxDist, look.z * maxDist);
    var level = typeof ent.level === 'function' ? ent.level() : ent.level;
    if (!level && ent.getLevel) level = ent.getLevel();
    if (!level || !level.clip) return null;
    var hit = level.clip(new $ClipContext(start, end, $ClipContextBlock.OUTLINE, $ClipContextFluid.NONE, ent));
    if (hit && hit.getType && hit.getType() === $HitResultType.BLOCK && hit.getBlockPos) {
      var bp = hit.getBlockPos();
      return { x: bp.getX(), y: bp.getY(), z: bp.getZ() };
    }
  } catch (e) {}
  return null;
}

function intArrayToUuid(arr) {
  var hex = '';
  for (var i = 0; i < 4; i++) hex += ((arr[i] >>> 0).toString(16)).padStart(8, '0');
  return hex.slice(0,8) + '-' + hex.slice(8,12) + '-' + hex.slice(12,16) + '-' + hex.slice(16,20) + '-' + hex.slice(20);
}


// SERVER EVENTS


ServerEvents.loaded(function (event) {
  CT.load(event.server);
});

var lastSaveTick = 0;
ServerEvents.tick(function (event) {
  var tick = event.server.tickCount;

  if (tick - lastSaveTick >= 6000) {
    CT.save(event.server);
    lastSaveTick = tick;
  }

  if (tick % 20 !== 0 || CT.count === 0) return;

  var expired = false;
  for (var key in CT.chunks) {
    var data = CT.chunks[key];
    if (data.expiry && tick >= data.expiry) {
      delete CT.chunks[key];
      CT.count--;
      expired = true;
      var parts = key.split(',');
      var players = event.server.players;
      for (var i = 0; i < players.size(); i++) {
        var p = players.get(i);
        if (p.uuid.toString() === data.uuid) {
          event.server.runCommandSilent('title ' + p.name.string + ' actionbar {"text":"Chunk [' + parts[0] + ', ' + parts[1] + '] expired"}');
          break;
        }
      }
    }
  }
  if (expired) CT.save(event.server);
});

// Clean up player state on disconnect
PlayerEvents.loggedOut(function (event) {
  var uuid = event.player.uuid.toString();
  delete playerState[uuid];
  for (var key in lastBorderSound) {
    if (key.indexOf(uuid) === 0) delete lastBorderSound[key];
  }
});


// PLAYER TICK - ENFORCEMENT + BORDER PARTICLES


PlayerEvents.tick(function (event) {
  var player = event.player;
  if (player.creative) return;

  var uuid = player.uuid.toString();
  var cp = player.chunkPosition && player.chunkPosition();
  if (!cp) return;

  var cx = cp.x, cz = cp.z;
  var owns = CT.owns(uuid, cx, cz);
  var state = playerState[uuid] || { outside: player.spectator };

  // --- Enforcement ---
  if (CT.count === 0) {
    if (state.outside && player.spectator) {
      state.outside = false;
      player.setGameMode('survival');
      actionbar(player, 'Territory enforcement disabled');
    }
  } else if (!owns && !state.outside) {
    state.outside = true;
    player.setGameMode('spectator');
    actionbar(player, 'You do not own this chunk');
    playSound(player.server, player.name.string, player.x, player.y, player.z, 'minecraft:block.respawn_anchor.charge', 1, 0.5);
  } else if (owns && state.outside) {
    state.outside = false;
    var px = Math.floor(player.x), py = Math.floor(player.y), pz = Math.floor(player.z);
    if (!isPassable(player.level, px, py, pz) || !isPassable(player.level, px, py + 1, pz)) {
      for (var y = py; y < py + 50; y++) {
        if (isPassable(player.level, px, y, pz) && isPassable(player.level, px, y + 1, pz)) {
          player.teleportTo(player.x, y, player.z);
          break;
        }
      }
    }
    player.setGameMode('survival');
    actionbar(player, 'Welcome back');
    playSound(player.server, player.name.string, player.x, player.y, player.z, 'minecraft:block.respawn_anchor.charge', 1, 1.5);
  }
  playerState[uuid] = state;

  // --- Border particles (every 2 ticks) ---
  if (CT.count === 0 || event.server.tickCount % 2 !== 0) return;
  if (!owns && !player.spectator) return;

  var localX = player.x - cx * 16, localZ = player.z - cz * 16;
  var dist = player.spectator ? BORDER_DIST_SPECTATOR : BORDER_DIST_SURVIVAL;
  var minX = cx * 16, maxX = (cx + 1) * 16, minZ = cz * 16, maxZ = (cz + 1) * 16;
  var holding = isHoldingTransceiver(player);
  var highlightDir = null;

  if (holding && owns && !player.spectator) {
    var target = getLookedAtBlock(player, BORDER_LOOK_DISTANCE);
    if (target && CT.owns(uuid, Math.floor(target.x / 16), Math.floor(target.z / 16))) {
      var tcx = Math.floor(target.x / 16), tcz = Math.floor(target.z / 16);
      var ltx = (target.x + 0.5) - tcx * 16, ltz = (target.z + 0.5) - tcz * 16;
      var candidates = [
        { dir: 'west',  adj: [tcx - 1, tcz], dist: ltx },
        { dir: 'east',  adj: [tcx + 1, tcz], dist: 16 - ltx },
        { dir: 'north', adj: [tcx, tcz - 1], dist: ltz },
        { dir: 'south', adj: [tcx, tcz + 1], dist: 16 - ltz }
      ];
      var best = null, bestDist = ARROW_BORDER_DISTANCE + 1;
      for (var i = 0; i < candidates.length; i++) {
        var c = candidates[i];
        if (!CT.owns(uuid, c.adj[0], c.adj[1]) && c.dist < bestDist) {
          bestDist = c.dist;
          best = c;
        }
      }
      if (best) {
        var dx = best.dir === 'east' ? 1 : best.dir === 'west' ? -1 : 0;
        var dz = best.dir === 'south' ? 1 : best.dir === 'north' ? -1 : 0;
        spawnArrow(player, target.x, target.y, target.z, dx, dz);
        highlightDir = best.dir;
      }
    }
  }

  var edges = [
    { check: localX < dist,      adj: [cx - 1, cz], pos: minX, axis: 'z', dir: 'west',  near: localX < 1 },
    { check: localX > 16 - dist, adj: [cx + 1, cz], pos: maxX, axis: 'z', dir: 'east',  near: localX > 15 },
    { check: localZ < dist,      adj: [cx, cz - 1], pos: minZ, axis: 'x', dir: 'north', near: localZ < 1 },
    { check: localZ > 16 - dist, adj: [cx, cz + 1], pos: maxZ, axis: 'x', dir: 'south', near: localZ > 15 }
  ];

  for (var i = 0; i < edges.length; i++) {
    var e = edges[i];
    if (!e.check || owns === CT.owns(uuid, e.adj[0], e.adj[1])) continue;
    spawnBorderLine(player, e.pos, player.y, e.axis === 'x' ? minX : minZ, e.axis === 'x' ? maxX : maxZ, e.axis, e.dir, e.near, highlightDir === e.dir);
  }
});

function spawnBorderLine(player, borderPos, y, rangeMin, rangeMax, axis, dir, doSound, green) {
  var server = player.server, name = player.name.string;
  var isX = axis === 'x';
  var base = green ? '0 1 0' : '1 0 0';
  var glow = green ? '0.2 1 0.2' : '1 0.2 0.2';

  for (var i = rangeMin + 2; i < rangeMax - 1; i += 3) {
    var x = isX ? i : borderPos, z = isX ? borderPos : i;
    var dx = isX ? 1.5 : 0.1, dz = isX ? 0.1 : 1.5;
    server.runCommandSilent('particle dust ' + base + ' 2 ' + x + ' ' + y + ' ' + z + ' ' + dx + ' 3 ' + dz + ' 0 8 force ' + name);
    server.runCommandSilent('particle dust ' + glow + ' 1.5 ' + x + ' ' + (y + 2) + ' ' + z + ' ' + dx + ' 2 ' + dz + ' 0 5 force ' + name);
  }

  if (doSound) {
    var key = player.uuid.toString() + '_' + dir;
    var now = Date.now();
    if (now - (lastBorderSound[key] || 0) > 600) {
      var sx = isX ? player.x : borderPos, sz = isX ? borderPos : player.z;
      server.runCommandSilent('playsound minecraft:block.amethyst_block.chime master ' + name + ' ' + sx + ' ' + y + ' ' + sz + ' 1 ' + (0.5 + Math.random() * 0.3));
      lastBorderSound[key] = now;
    }
  }
}

function spawnArrow(player, bx, by, bz, dirX, dirZ) {
  var server = player.server, name = player.name.string;
  var baseX = bx + 0.5, baseY = by + 1.02, baseZ = bz + 0.5;
  var px = -dirZ, pz = dirX;

  function dust(ox, oz, s) {
    server.runCommandSilent('particle dust 0 1 0 ' + s + ' ' + (baseX + ox) + ' ' + baseY + ' ' + (baseZ + oz) + ' 0 0 0 0 1 force ' + name);
  }
  dust(0, 0, 1.1);
  dust(dirX * 0.3, dirZ * 0.3, 1.1);
  dust(dirX * 0.6, dirZ * 0.6, 1.1);
  dust(dirX * 0.95, dirZ * 0.95, 1.3);
  dust(dirX * 0.7 + px * 0.2, dirZ * 0.7 + pz * 0.2, 1.1);
  dust(dirX * 0.7 - px * 0.2, dirZ * 0.7 - pz * 0.2, 1.1);
}


// BLOCK PROTECTION


function checkBlockAccess(event) {
  if (CT.count === 0) return true;
  var player = event.entity;
  if (!player || !player.isPlayer() || player.creative) return true;
  return CT.owns(player.uuid.toString(), Math.floor(event.block.x / 16), Math.floor(event.block.z / 16));
}

function denyBlock(event, player) {
  var b = event.block;
  event.server.runCommandSilent('particle angry_villager ' + (b.x + 0.5) + ' ' + (b.y + 0.5) + ' ' + (b.z + 0.5) + ' 0.2 0.2 0.2 0 5 force ' + player.name.string);
  event.server.runCommandSilent('playsound minecraft:block.note_block.bass master ' + player.name.string + ' ' + b.x + ' ' + b.y + ' ' + b.z + ' 0.5 0.5');
  event.server.scheduleInTicks(1, function () { player.inventoryMenu.broadcastFullState(); });
  event.cancel();
}

BlockEvents.placed(function (event) {
  if (!checkBlockAccess(event)) {
    var player = event.entity;
    if (player && player.isPlayer()) denyBlock(event, player);
    else event.cancel();
  }
});

BlockEvents.broken(function (event) {
  if (!checkBlockAccess(event)) {
    event.cancel();
    var player = event.entity;
    if (player && player.isPlayer()) {
      var b = event.block;
      event.server.runCommandSilent('particle angry_villager ' + (b.x + 0.5) + ' ' + (b.y + 0.5) + ' ' + (b.z + 0.5) + ' 0.2 0.2 0.2 0 5 force ' + player.name.string);
    }
  }
});

BlockEvents.rightClicked(function (event) {
  if (CT.count === 0) return;
  var player = event.player;
  if (!player || player.creative) return;
  if (!CT.owns(player.uuid.toString(), Math.floor(event.block.x / 16), Math.floor(event.block.z / 16))) {
    denyBlock(event, player);
  }
});


// ITEM CONTAINMENT


EntityEvents.spawned('minecraft:item', function (event) {
  if (CT.count === 0) return;
  var item = event.entity;
  if (item.level.isClientSide()) return;

  var nbt = item.nbt;
  if (!nbt || !nbt.Thrower || !nbt.Motion) return;

  var uuid = intArrayToUuid(nbt.Thrower);
  var cx = Math.floor(item.x / 16), cz = Math.floor(item.z / 16);
  if (!CT.owns(uuid, cx, cz)) return;

  var motionX = nbt.Motion[0], motionZ = nbt.Motion[2];
  var localX = item.x - cx * 16, localZ = item.z - cz * 16;
  var predictX = localX + motionX * 8, predictZ = localZ + motionZ * 8;

  var bounceX = (predictX < 0.5 && !CT.owns(uuid, cx - 1, cz)) || (predictX > 15.5 && !CT.owns(uuid, cx + 1, cz));
  var bounceZ = (predictZ < 0.5 && !CT.owns(uuid, cx, cz - 1)) || (predictZ > 15.5 && !CT.owns(uuid, cx, cz + 1));
  if (!bounceX && !bounceZ) return;

  var server = event.server, itemUuid = item.uuid.toString();
  var tick = 2;

  function checkBorder() {
    if (tick > 40) return;
    server.scheduleInTicks(tick, function () {
      var level = server.getLevel('minecraft:overworld');
      var e = null;
      var entities = level.getEntities();
      for (var i = 0; i < entities.size(); i++) {
        var ent = entities.get(i);
        if (ent.uuid.toString() === itemUuid) { e = ent; break; }
      }
      if (!e) return;

      var elocalX = e.x - Math.floor(e.x / 16) * 16;
      var elocalZ = e.z - Math.floor(e.z / 16) * 16;
      var bX = bounceX && ((elocalX < 1 && motionX < 0) || (elocalX > 15 && motionX > 0));
      var bZ = bounceZ && ((elocalZ < 1 && motionZ < 0) || (elocalZ > 15 && motionZ > 0));

      if (bX || bZ) {
        var cur = e.nbt.Motion;
        if (!cur) return;
        var nx = bX ? -cur[0] * 0.5 : cur[0];
        var nz = bZ ? -cur[2] * 0.5 : cur[2];
        server.runCommandSilent('data modify entity ' + itemUuid + ' Motion set value [' + nx + 'd,' + (cur[1] + 0.1) + 'd,' + nz + 'd]');
        server.runCommandSilent('playsound minecraft:block.slime_block.hit block @a ' + e.x + ' ' + e.y + ' ' + e.z + ' 0.5 1.2');
      } else {
        tick += 2;
        checkBorder();
      }
    });
  }
  checkBorder();
});

// COMMANDS

var DIRECTIONS = { north: [0, -1], south: [0, 1], east: [1, 0], west: [-1, 0] };

function getChunk(pos) {
  return { x: Math.floor(pos.x() / 16), z: Math.floor(pos.z() / 16) };
}

function claimCmd(ctx, target, dx, dz, ticks) {
  var pos = ctx.source.position;
  var chunk = getChunk(pos);
  var result = CT.claim(ctx.source.server, target.uuid.toString(), chunk.x + dx, chunk.z + dz, ticks, pos.x(), pos.y(), pos.z());
  var msg = (result.renewed ? 'Renewed' : 'Added') + ' chunk [' + result.cx + ', ' + result.cz + '] for ' + target.name.string;
  if (ticks > 0) msg += ' for ' + ticks + ' ticks';
  ctx.source.sendSuccess(msg, true);
  CT.save(ctx.source.server);
  return 1;
}

function claimAdjacentCmd(ctx, target, ticks) {
  var pos = ctx.source.position;
  var result = CT.claimAdjacent(ctx.source.server, target.uuid.toString(), pos.x(), pos.y(), pos.z(), ticks);
  var msg = (result.renewed ? 'Renewed' : 'Added') + ' chunk [' + result.cx + ', ' + result.cz + '] for ' + target.name.string;
  if (ticks > 0) msg += ' for ' + ticks + ' ticks';
  ctx.source.sendSuccess(msg, true);
  CT.save(ctx.source.server);
  return 1;
}

ServerEvents.commandRegistry(function (event) {
  var C = event.commands;
  function playerArg() { return C.argument('player', EntityArgument.player()); }
  function ticksArg() { return C.argument('ticks', IntegerArgumentType.integer(1)); }
  function getTarget(ctx) { return EntityArgument.getPlayer(ctx, 'player'); }
  function getTicks(ctx) { return IntegerArgumentType.getInteger(ctx, 'ticks'); }

  var base = C.literal('territory').requires(function (s) { return s.hasPermission(2); });

  base = base
    .then(C.literal('add').then(playerArg().executes(function (ctx) { return claimCmd(ctx, getTarget(ctx), 0, 0, 0); })))
    .then(C.literal('add_adjacent').then(playerArg()
      .executes(function (ctx) { return claimAdjacentCmd(ctx, getTarget(ctx), 0); })
      .then(ticksArg().executes(function (ctx) { return claimAdjacentCmd(ctx, getTarget(ctx), getTicks(ctx)); }))
    ));

  for (var dir in DIRECTIONS) {
    (function (d, offset) {
      base = base.then(C.literal('add_' + d).then(playerArg().executes(function (ctx) {
        return claimCmd(ctx, getTarget(ctx), offset[0], offset[1], 0);
      })));
    })(dir, DIRECTIONS[dir]);
  }

  base = base
    .then(C.literal('remove').executes(function (ctx) {
      var chunk = getChunk(ctx.source.position);
      CT.remove(chunk.x, chunk.z);
      ctx.source.sendSuccess('Removed chunk [' + chunk.x + ', ' + chunk.z + ']', true);
      CT.save(ctx.source.server);
      return 1;
    }))
    .then(C.literal('clear').executes(function (ctx) {
      var count = CT.clear();
      ctx.source.sendSuccess('Cleared ' + count + ' chunks', true);
      CT.save(ctx.source.server);
      return 1;
    }))
    .then(C.literal('info').executes(function (ctx) {
      var chunk = getChunk(ctx.source.position);
      var data = CT.chunks[chunk.x + ',' + chunk.z];
      var msg = 'Chunk [' + chunk.x + ', ' + chunk.z + ']: ' + (data ? data.uuid : 'unowned');
      if (data && data.expiry) msg += ' (expires tick ' + data.expiry + ')';
      ctx.source.sendSuccess(msg, false);
      return 1;
    }))
    .then(C.literal('list').executes(function (ctx) {
      ctx.source.sendSuccess('Owned chunks: ' + CT.count, false);
      for (var key in CT.chunks) {
        var data = CT.chunks[key];
        ctx.source.sendSuccess('  ' + key + ' -> ' + data.uuid + (data.expiry ? ' (expires ' + data.expiry + ')' : ''), false);
      }
      return 1;
    }));

  event.register(base);
});
