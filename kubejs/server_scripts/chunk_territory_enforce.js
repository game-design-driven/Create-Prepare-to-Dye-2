// Chunk Territory Enforcement
// Handles spectator mode, border visuals, block protection, and item containment

var playerWasOutside = {};
var lastBorderSound = {};

// BORDER VISIBILITY TUNING
// How close (in blocks) the player must be to a chunk edge before border particles appear.
// Increase to see borders from farther away; decrease to require getting closer.
var BORDER_VISIBILITY_DISTANCE_SURVIVAL = 3;
var BORDER_VISIBILITY_DISTANCE_SPECTATOR = 5;

// How far (in blocks) we raycast to find the block the player is looking at.
var BORDER_LOOK_RAY_DISTANCE = 64;

// When holding the trading transceiver, show a floor arrow pointing to the nearest unowned chunk.
// This limits how far (in chunks) we search for an unowned chunk.
var UNOWNED_CHUNK_ARROW_SEARCH_RADIUS = 10;
// Only show the arrow/border marker when the player is within this many blocks of an owned<->unowned border.
var ARROW_REQUIRE_DISTANCE_TO_BORDER = 5;
// How high above the base border line to place the green "top" marker particles.
var BORDER_TOP_MARKER_Y_OFFSET = 4;

// Lazy-loaded Java classes (avoid loadClass cost unless we need it)
var $HitResultType = null;
var $BlockHitResult = null;
var $ClipContext = null;
var $ClipContextBlock = null;
var $ClipContextFluid = null;

function ensureRaytraceClassesLoaded() {
    if ($HitResultType && $BlockHitResult && $ClipContext && $ClipContextBlock && $ClipContextFluid) return;
    $HitResultType = Java.loadClass('net.minecraft.world.phys.HitResult$Type');
    $BlockHitResult = Java.loadClass('net.minecraft.world.phys.BlockHitResult');
    $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext');
    $ClipContextBlock = Java.loadClass('net.minecraft.world.level.ClipContext$Block');
    $ClipContextFluid = Java.loadClass('net.minecraft.world.level.ClipContext$Fluid');
}

// Returns {x, y, z} of the block the player is looking at, or null.
function getLookedAtBlockPos(player, maxDistance) {
    try {
        ensureRaytraceClassesLoaded();

        // Preferred: KubeJS-native rayTrace (most consistent across mappings/wrappers)
        // Returns an object like: { type: 'block'|'miss'|..., block: {x,y,z,id}, ... }
        if (player && typeof player.rayTrace === 'function') {
            var tr = player.rayTrace(maxDistance);
            if (tr && tr.type === 'block' && tr.block) {
                return { x: tr.block.x, y: tr.block.y, z: tr.block.z };
            }
        }

        // KubeJS exposes the underlying MC entity as .minecraftEntity on some versions; fall back to the object itself.
        var ent = player.minecraftEntity || player;
        if (!ent) return null;

        // Preferred: server-side raycast via Level#clip(ClipContext) (more reliable than Entity#pick in some wrappers)
        if (typeof ent.getEyePosition === 'function' && typeof ent.getViewVector === 'function') {
            var start = ent.getEyePosition(1.0);
            var look = ent.getViewVector(1.0);
            if (start && look && typeof start.add === 'function') {
                var end = start.add(look.x * maxDistance, look.y * maxDistance, look.z * maxDistance);
                var ctx = new $ClipContext(start, end, $ClipContextBlock.OUTLINE, $ClipContextFluid.NONE, ent);

                // Some mappings expose it as level(), some as level
                var level = (typeof ent.level === 'function') ? ent.level() : ent.level;
                if (!level && typeof ent.getLevel === 'function') level = ent.getLevel();

                if (level && typeof level.clip === 'function') {
                    var hit0 = level.clip(ctx);
                    if (hit0 && hit0.getType && hit0.getType() === $HitResultType.BLOCK && hit0.getBlockPos) {
                        var bp0 = hit0.getBlockPos();
                        return { x: bp0.getX(), y: bp0.getY(), z: bp0.getZ() };
                    }
                }
            }
        }

        // Fallback: Entity#pick(distance, partialTick, hitFluids) -> HitResult
        if (typeof ent.pick !== 'function') return null;

        var hit = ent.pick(maxDistance, 1.0, false);
        if (!hit) return null;
        if (hit.getType && hit.getType() !== $HitResultType.BLOCK) return null;

        // Prefer direct BlockHitResult access if possible.
        if (hit instanceof $BlockHitResult) {
            var bp = hit.getBlockPos();
            return { x: bp.getX(), y: bp.getY(), z: bp.getZ() };
        }

        // Fallback if instanceof doesn't work in this environment.
        if (hit.getBlockPos) {
            var bp2 = hit.getBlockPos();
            return { x: bp2.getX(), y: bp2.getY(), z: bp2.getZ() };
        }
    } catch (e) {
        // Ignore raytrace failures; just don't highlight.
    }
    return null;
}

// UTILITY FUNCTIONS

function hasTerritory() {
    return global.ChunkTerritory &&
           global.ChunkTerritory.chunks &&
           Object.keys(global.ChunkTerritory.chunks).length > 0;
}

function isHoldingTradingTransceiver(player) {
    if (!player) return false;
    // Prefer handSlots for consistency with other scripts in this pack
    try {
        var mainId = player.handSlots && player.handSlots[0] ? (player.handSlots[0].id + '') : '';
        var offId = player.handSlots && player.handSlots[1] ? (player.handSlots[1].id + '') : '';
        return mainId === 'ptdye:trading_transceiver' || offId === 'ptdye:trading_transceiver';
    } catch (e) {
        // Fallback for API differences
        var mh = player.mainHandItem ? (player.mainHandItem.id + '') : '';
        var oh = player.offHandItem ? (player.offHandItem.id + '') : '';
        return mh === 'ptdye:trading_transceiver' || oh === 'ptdye:trading_transceiver';
    }
}

function isPassable(level, x, y, z) {
    var id = level.getBlock(x, y, z).id + '';
    return id.indexOf('air') !== -1 || id === 'minecraft:water';
}

function playSound(player, sound, x, y, z, volume, pitch) {
    player.server.runCommandSilent(
        'playsound ' + sound + ' master ' + player.name.string +
        ' ' + x + ' ' + y + ' ' + z + ' ' + volume + ' ' + pitch
    );
}

function actionbar(player, text) {
    player.server.runCommandSilent('title ' + player.name.string + ' actionbar {"text":"' + text + '"}');
}

function denyEffect(server, name, x, y, z) {
    server.runCommandSilent('particle angry_villager ' + x + ' ' + y + ' ' + z + ' 0.2 0.2 0.2 0 5 force ' + name);
    server.runCommandSilent('playsound minecraft:block.note_block.bass master ' + name + ' ' + x + ' ' + y + ' ' + z + ' 0.5 0.5');
}

function intArrayToUuid(arr) {
    function toHex(n) { return ((n >>> 0).toString(16)).padStart(8, '0'); }
    var hex = toHex(arr[0]) + toHex(arr[1]) + toHex(arr[2]) + toHex(arr[3]);
    return hex.substring(0,8) + '-' + hex.substring(8,12) + '-' + hex.substring(12,16) + '-' + hex.substring(16,20) + '-' + hex.substring(20,32);
}

// SPECTATOR MODE ENFORCEMENT
// Players in unowned chunks are forced into spectator mode

PlayerEvents.tick(function(event) {
    if (!global.ChunkTerritory) return;

    var player = event.player;
    if (player.creative) return;

    var uuid = player.uuid.toString();

    // Restore survival if no territory exists
    if (!hasTerritory()) {
        if (playerWasOutside[uuid] && player.spectator) {
            playerWasOutside[uuid] = false;
            player.setGameMode('survival');
            actionbar(player, 'Territory enforcement disabled');
        }
        return;
    }

    var cp = (player.chunkPosition && player.chunkPosition());
    if (!cp) return;
    var cx = cp.x;
    var cz = cp.z;
    var owns = global.ChunkTerritory.owns(uuid, cx, cz);
    var wasOutside = playerWasOutside[uuid] || false;

    // Entered unowned chunk -> spectator
    if (!owns && !wasOutside) {
        playerWasOutside[uuid] = true;
        player.setGameMode('spectator');
        actionbar(player, 'You do not own this chunk');
        playSound(player, 'minecraft:block.respawn_anchor.charge', player.x, player.y, player.z, 1, 0.5);
    }
    // Returned to owned chunk -> survival (with safe teleport)
    else if (owns && wasOutside) {
        playerWasOutside[uuid] = false;

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
        playSound(player, 'minecraft:block.respawn_anchor.charge', player.x, player.y, player.z, 1, 1.5);
    }
});

// BORDER PARTICLES
// Red dust particles at chunk boundaries between owned/unowned territory

PlayerEvents.tick(function(event) {
    if (!hasTerritory()) return;
    if (event.server.tickCount % 2 !== 0) return;

    var player = event.player;
    if (player.creative) return;

    var uuid = player.uuid.toString();
    var cp = (player.chunkPosition && player.chunkPosition());
    if (!cp) return;
    var cx = cp.x, cz = cp.z;
    var localX = player.x - cx * 16, localZ = player.z - cz * 16;
    var owns = global.ChunkTerritory.owns(uuid, cx, cz);

    if (!owns && !player.spectator) return;

    var dist = player.spectator ? BORDER_VISIBILITY_DISTANCE_SPECTATOR : BORDER_VISIBILITY_DISTANCE_SURVIVAL;
    var edges = [
        { check: localX < dist,      adj: [cx-1, cz], pos: cx * 16,     axis: 'z', dir: 'west',  near: localX < 1 },
        { check: localX > 16 - dist, adj: [cx+1, cz], pos: (cx+1) * 16, axis: 'z', dir: 'east',  near: localX > 15 },
        { check: localZ < dist,      adj: [cx, cz-1], pos: cz * 16,     axis: 'x', dir: 'north', near: localZ < 1 },
        { check: localZ > 16 - dist, adj: [cx, cz+1], pos: (cz+1) * 16, axis: 'x', dir: 'south', near: localZ > 15 }
    ];

    var minX = cx * 16, maxX = (cx+1) * 16;
    var minZ = cz * 16, maxZ = (cz+1) * 16;

    var holding = isHoldingTradingTransceiver(player);
    var highlightBorderDir = null;

    // Holding transceiver: draw a floor arrow pointing toward the nearest unowned chunk.
    if (holding) {
        var target = getLookedAtBlockPos(player, BORDER_LOOK_RAY_DISTANCE);
        if (target) {
            var startChunkX = Math.floor(target.x / 16);
            var startChunkZ = Math.floor(target.z / 16);

            // Don't draw if the targeted block is across the border (in a chunk the player doesn't own).
            if (!global.ChunkTerritory.owns(uuid, startChunkX, startChunkZ)) {
                // skip
            } else {
                // Only draw when player is close to a real border between owned and unowned chunks.
                // (and don't draw if player is currently across the border / spectator in unowned land)
                if (owns && !player.spectator) {
                    // Pick the border edge of the LOOKED-AT block's chunk that is closest to that block,
                    // but only if that edge borders an unowned chunk.
                    var localTX = (target.x + 0.5) - startChunkX * 16;
                    var localTZ = (target.z + 0.5) - startChunkZ * 16;

                    var bestBoundary = null;
                    var bestDist = 1e9;
                    var bestDirX = 0;
                    var bestDirZ = 0;

                    var candidates = [
                        { dir: 'west',  adj: [startChunkX - 1, startChunkZ], dist: localTX,        dx: -1, dz:  0 },
                        { dir: 'east',  adj: [startChunkX + 1, startChunkZ], dist: 16 - localTX,   dx:  1, dz:  0 },
                        { dir: 'north', adj: [startChunkX, startChunkZ - 1], dist: localTZ,        dx:  0, dz: -1 },
                        { dir: 'south', adj: [startChunkX, startChunkZ + 1], dist: 16 - localTZ,   dx:  0, dz:  1 }
                    ];

                    for (var ci = 0; ci < candidates.length; ci++) {
                        var c = candidates[ci];
                        var adjOwnsC = global.ChunkTerritory.owns(uuid, c.adj[0], c.adj[1]);
                        if (adjOwnsC) continue;
                        if (c.dist < bestDist) {
                            bestDist = c.dist;
                            bestBoundary = c;
                            bestDirX = c.dx;
                            bestDirZ = c.dz;
                        }
                    }

                    if (bestBoundary && bestDist <= ARROW_REQUIRE_DISTANCE_TO_BORDER) {
                        spawnBorderArrowAt(player, target.x, target.y, target.z, bestDirX, bestDirZ);
                        highlightBorderDir = bestBoundary.dir;
                    }
                }
            }
        }
    }

    for (var i = 0; i < edges.length; i++) {
        var e = edges[i];
        if (!e.check) continue;

        var adjOwns = global.ChunkTerritory.owns(uuid, e.adj[0], e.adj[1]);
        if (owns === adjOwns) continue;

        var rangeMin = (e.axis === 'x') ? minX : minZ;
        var rangeMax = (e.axis === 'x') ? maxX : maxZ;
        var highlightGreen = (highlightBorderDir !== null) && (e.dir === highlightBorderDir);
        spawnBorderLine(player, e.pos, player.y, rangeMin, rangeMax, e.axis, e.dir, e.near, highlightGreen);
    }
});

function spawnBorderLine(player, borderPos, y, rangeMin, rangeMax, axis, direction, doSound, highlightGreen) {
    var name = player.name.string;
    var server = player.server;
    var isX = (axis === 'x');
    var base = highlightGreen ? '0 1 0' : '1 0 0';
    var glow = highlightGreen ? '0.2 1 0.2' : '1 0.2 0.2';

    for (var i = rangeMin + 2; i < rangeMax - 1; i += 3) {
        var x = isX ? i : borderPos;
        var z = isX ? borderPos : i;
        var dx = isX ? 1.5 : 0.1;
        var dz = isX ? 0.1 : 1.5;
        server.runCommandSilent('particle dust ' + base + ' 2 ' + x + ' ' + y + ' ' + z + ' ' + dx + ' 3 ' + dz + ' 0 8 force ' + name);
        server.runCommandSilent('particle dust ' + glow + ' 1.5 ' + x + ' ' + (y+2) + ' ' + z + ' ' + dx + ' 2 ' + dz + ' 0 5 force ' + name);
    }

    if (!doSound) return;
    var key = player.uuid.toString() + '_' + direction;
    var now = Date.now();
    if ((now - (lastBorderSound[key] || 0)) > 600) {
        var sx = isX ? player.x : borderPos;
        var sz = isX ? borderPos : player.z;
        server.runCommandSilent('playsound minecraft:block.amethyst_block.chime master ' + name + ' ' + sx + ' ' + y + ' ' + sz + ' 1 ' + (0.5 + Math.random() * 0.3));
        lastBorderSound[key] = now;
    }
}

// Finds the nearest chunk (by euclidean distance in chunk coords) that the player does NOT own.
// Tie-break: prefer the one most aligned with (prefX, prefZ) in XZ (values in [-1..1]).
// Returns {x, z} or null.
function findNearestUnownedChunk(uuid, cx, cz, radius, prefX, prefZ) {
    // Allow calling without preference vector
    if (prefX === undefined || prefX === null) prefX = 0;
    if (prefZ === undefined || prefZ === null) prefZ = 0;

    var best = null;
    var bestD2 = 1e18;
    var bestAlign = -1e18;

    for (var dx = -radius; dx <= radius; dx++) {
        for (var dz = -radius; dz <= radius; dz++) {
            if (dx === 0 && dz === 0) continue;
            var x = cx + dx;
            var z = cz + dz;
            if (global.ChunkTerritory.owns(uuid, x, z)) continue;

            var d2 = dx * dx + dz * dz;
            if (d2 > bestD2) continue;

            // Alignment with preference (only meaningful when pref vector is non-zero)
            var align = 0;
            var clen = Math.sqrt(d2);
            if (clen > 0.0001) {
                align = (dx / clen) * prefX + (dz / clen) * prefZ;
            }

            if (d2 < bestD2 || align > bestAlign) {
                bestD2 = d2;
                bestAlign = align;
                best = { x: x, z: z };
            }
        }
    }
    return best;
}

// Draw a simple arrow on the floor at the looked-at block pointing in (dirX, dirZ).
// dirX/dirZ should be a direction in the XZ plane (doesn't need to be normalized).
function spawnBorderArrowAt(player, bx, by, bz, dirX, dirZ) {
    var server = player.server;
    var name = player.name.string;

    var dx = dirX;
    var dz = dirZ;
    var len = Math.sqrt(dx * dx + dz * dz);
    if (len <= 0.0001) return;
    dx /= len;
    dz /= len;

    // Perpendicular vector for arrow wings
    var px = -dz;
    var pz = dx;

    // Place arrow slightly above the TOP face of the looked-at block.
    var baseX = bx + 0.5;
    var baseY = by + 1.02;
    var baseZ = bz + 0.5;

    function dust(x, y, z, scale) {
        server.runCommandSilent('particle dust 0 1 0 ' + scale + ' ' + x + ' ' + y + ' ' + z + ' 0 0 0 0 1 force ' + name);
    }

    // Shaft
    dust(baseX, baseY, baseZ, 1.1);
    dust(baseX + dx * 0.30, baseY, baseZ + dz * 0.30, 1.1);
    dust(baseX + dx * 0.60, baseY, baseZ + dz * 0.60, 1.1);

    // Arrow head (tip) + wings
    var tipX = baseX + dx * 0.95;
    var tipZ = baseZ + dz * 0.95;
    dust(tipX, baseY, tipZ, 1.3);

    var backX = tipX - dx * 0.25;
    var backZ = tipZ - dz * 0.25;
    dust(backX + px * 0.20, baseY, backZ + pz * 0.20, 1.1);
    dust(backX - px * 0.20, baseY, backZ - pz * 0.20, 1.1);
}

// BLOCK PROTECTION
// Prevents placing, breaking, and interacting with blocks in unowned chunks

function checkBlockAccess(event) {
    if (!hasTerritory()) return true;
    var player = event.entity;
    if (!player || !player.isPlayer()) return true;
    if (player.creative) return true;

    var cx = Math.floor(event.block.x / 16);
    var cz = Math.floor(event.block.z / 16);
    return global.ChunkTerritory.owns(player.uuid.toString(), cx, cz);
}

function denyBlock(event, player) {
    var b = event.block;
    denyEffect(event.server, player.name.string, b.x + 0.5, b.y + 0.5, b.z + 0.5);
    event.server.scheduleInTicks(1, function() {
        player.inventoryMenu.broadcastFullState();
    });
    event.cancel();
}

BlockEvents.placed(function(event) {
    if (!checkBlockAccess(event)) {
        var player = event.entity;
        if (player && player.isPlayer()) denyBlock(event, player);
        else event.cancel();
    }
});

BlockEvents.broken(function(event) {
    if (!checkBlockAccess(event)) {
        event.cancel();
        var player = event.entity;
        if (player && player.isPlayer()) {
            var b = event.block;
            denyEffect(event.server, player.name.string, b.x + 0.5, b.y + 0.5, b.z + 0.5);
        }
    }
});

BlockEvents.rightClicked(function(event) {
    if (!hasTerritory()) return;
    var player = event.player;
    if (!player || player.creative) return;

    var cx = Math.floor(event.block.x / 16);
    var cz = Math.floor(event.block.z / 16);
    if (!global.ChunkTerritory.owns(player.uuid.toString(), cx, cz)) {
        denyBlock(event, player);
    }
});

// ITEM CONTAINMENT
// Bounces thrown items back when they would cross into unowned territory

EntityEvents.spawned('minecraft:item', function(event) {
    if (!hasTerritory()) return;

    var item = event.entity;
    if (item.level.isClientSide()) return;

    var nbt = item.nbt;
    if (!nbt || !nbt.Thrower || !nbt.Motion) return;

    var throwerUuid = intArrayToUuid(nbt.Thrower);
    var cx = Math.floor(item.x / 16);
    var cz = Math.floor(item.z / 16);

    if (!global.ChunkTerritory.owns(throwerUuid, cx, cz)) return;

    var motionX = nbt.Motion[0], motionZ = nbt.Motion[2];
    var localX = item.x - cx * 16, localZ = item.z - cz * 16;

    // Predict trajectory (8 ticks with drag)
    var predictX = localX + motionX * 8;
    var predictZ = localZ + motionZ * 8;

    var bounceX = false, bounceZ = false;

    if (predictX < 0.5 && !global.ChunkTerritory.owns(throwerUuid, cx - 1, cz)) bounceX = true;
    else if (predictX > 15.5 && !global.ChunkTerritory.owns(throwerUuid, cx + 1, cz)) bounceX = true;

    if (predictZ < 0.5 && !global.ChunkTerritory.owns(throwerUuid, cx, cz - 1)) bounceZ = true;
    else if (predictZ > 15.5 && !global.ChunkTerritory.owns(throwerUuid, cx, cz + 1)) bounceZ = true;

    if (!bounceX && !bounceZ) return;

    var server = event.server;
    var itemUuid = item.uuid.toString();

    // Monitor item and bounce when it reaches the border
    function checkBorder(tick) {
        if (tick > 40) return;

        server.scheduleInTicks(tick, function() {
            var entities = server.getLevel('minecraft:overworld').getEntities().filter(function(e) {
                return e.uuid.toString() === itemUuid;
            });
            if (entities.length === 0) return;

            var e = entities[0];
            var ecx = Math.floor(e.x / 16), ecz = Math.floor(e.z / 16);
            var elocalX = e.x - ecx * 16, elocalZ = e.z - ecz * 16;

            var atBorder = false, bX = false, bZ = false;

            if (bounceX && ((elocalX < 1 && motionX < 0) || (elocalX > 15 && motionX > 0))) { atBorder = true; bX = true; }
            if (bounceZ && ((elocalZ < 1 && motionZ < 0) || (elocalZ > 15 && motionZ > 0))) { atBorder = true; bZ = true; }

            if (atBorder) {
                var curMotion = e.nbt.Motion;
                if (!curMotion) return;
                var nx = bX ? (-curMotion[0] * 0.5) : curMotion[0];
                var nz = bZ ? (-curMotion[2] * 0.5) : curMotion[2];
                server.runCommandSilent('data modify entity ' + itemUuid + ' Motion set value [' + nx + 'd,' + (curMotion[1] + 0.1) + 'd,' + nz + 'd]');
                server.runCommandSilent('playsound minecraft:block.slime_block.hit block @a ' + e.x + ' ' + e.y + ' ' + e.z + ' 0.5 1.2');
            } else {
                checkBorder(tick + 2);
            }
        });
    }

    checkBorder(2);
});

console.log('[territory] Enforce script loaded');
