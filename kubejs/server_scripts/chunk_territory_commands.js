// Chunk Territory Commands

var IntegerArgumentType = Java.loadClass('com.mojang.brigadier.arguments.IntegerArgumentType');
var EntityArgument = Java.loadClass('net.minecraft.commands.arguments.EntityArgument');

// Initialize/update ChunkTerritory
if (!global.ChunkTerritory) {
    global.ChunkTerritory = { chunks: {} };
}

var CT = global.ChunkTerritory;

CT.owns = function(playerUuid, cx, cz) {
    var data = CT.chunks[cx + ',' + cz];
    return data && data.uuid === playerUuid;
};

CT.getOwner = function(cx, cz) {
    var data = CT.chunks[cx + ',' + cz];
    return data ? data.uuid : null;
};

CT.save = function(server) {
    try {
        var level = server.getLevel('minecraft:overworld');
        if (level) level.persistentData.putString('chunkTerritory', JSON.stringify(CT.chunks));
    } catch (e) {
        console.log('[territory] Save error: ' + e);
    }
};

CT.load = function(server) {
    try {
        var level = server.getLevel('minecraft:overworld');
        if (level && level.persistentData.contains('chunkTerritory')) {
            CT.chunks = JSON.parse(level.persistentData.getString('chunkTerritory'));
            console.log('[territory] Loaded ' + Object.keys(CT.chunks).length + ' chunks');
        }
    } catch (e) {
        console.log('[territory] Load error: ' + e);
    }
};

ServerEvents.loaded(function (event) {
    CT.load(event.server);
});

// Expire chunks every second
ServerEvents.tick(function (event) {
    if (event.server.tickCount % 20 !== 0) return;

    var currentTick = event.server.tickCount;
    for (var key in CT.chunks) {
        var data = CT.chunks[key];
        if (data.expiry && currentTick >= data.expiry) {
            delete CT.chunks[key];
            var parts = key.split(',');
            var players = event.server.players;
            for (var i = 0; i < players.size(); i++) {
                var p = players.get(i);
                if (p.uuid.toString() === data.uuid) {
                    p.tell('Chunk [' + parts[0] + ', ' + parts[1] + '] expired');
                    break;
                }
            }
        }
    }
});

// Helpers
function getChunk(pos) {
    return { x: Math.floor(pos.x() / 16), z: Math.floor(pos.z() / 16) };
}

function addChunk(uuid, cx, cz, expiryTick) {
    CT.chunks[cx + ',' + cz] = { uuid: uuid, expiry: expiryTick || null };
}

function spawnClaimParticles(server, cx, cz, srcX, srcY, srcZ) {
    var srcCx = Math.floor(srcX / 16), srcCz = Math.floor(srcZ / 16);
    var alongX = (srcCx !== cx); // border runs along X if chunks differ in X
    var borderPos, rangeMin, rangeMax;

    if (alongX) {
        borderPos = srcCx < cx ? cx * 16 : (cx + 1) * 16;
        rangeMin = cz * 16;
        rangeMax = (cz + 1) * 16;
    } else {
        borderPos = srcCz < cz ? cz * 16 : (cz + 1) * 16;
        rangeMin = cx * 16;
        rangeMax = (cx + 1) * 16;
    }

    for (var i = rangeMin + 2; i < rangeMax - 1; i += 3) {
        var x = alongX ? borderPos : i;
        var z = alongX ? i : borderPos;
        var dx = alongX ? 0.1 : 1.5, dz = alongX ? 1.5 : 0.1;
        server.runCommandSilent('particle dust 0 1 0 2 ' + x + ' ' + srcY + ' ' + z + ' ' + dx + ' 3 ' + dz + ' 0 8 force');
        server.runCommandSilent('particle dust 0.2 1 0.2 1.5 ' + x + ' ' + (srcY + 2) + ' ' + z + ' ' + dx + ' 2 ' + dz + ' 0 5 force');
    }
    server.runCommandSilent('playsound minecraft:block.beacon.activate block @a ' + srcX + ' ' + srcY + ' ' + srcZ + ' 1 1.2');
}

function claimChunk(ctx, target, dx, dz, ticks) {
    var pos = ctx.source.position;
    var chunk = getChunk(pos);
    var cx = chunk.x + dx, cz = chunk.z + dz;
    var expiryTick = ticks > 0 ? ctx.source.server.tickCount + ticks : null;

    addChunk(target.uuid.toString(), cx, cz, expiryTick);
    spawnClaimParticles(ctx.source.server, cx, cz, pos.x(), pos.y(), pos.z());

    var msg = 'Added chunk [' + cx + ', ' + cz + '] for ' + target.name.string;
    if (ticks > 0) msg += ' for ' + ticks + ' ticks';
    ctx.source.sendSuccess(msg, true);
    return 1;
}

function claimAdjacentChunk(ctx, target, ticks) {
    var pos = ctx.source.position;
    var chunk = getChunk(pos);
    var localX = pos.x() - chunk.x * 16, localZ = pos.z() - chunk.z * 16;

    // Find nearest edge
    var dists = [
        { dx: -1, dz: 0, d: localX },
        { dx: 1, dz: 0, d: 16 - localX },
        { dx: 0, dz: -1, d: localZ },
        { dx: 0, dz: 1, d: 16 - localZ }
    ];
    var nearest = dists[0];
    for (var i = 1; i < 4; i++) {
        if (dists[i].d < nearest.d) nearest = dists[i];
    }

    return claimChunk(ctx, target, nearest.dx, nearest.dz, ticks);
}

ServerEvents.commandRegistry(function (event) {
    var C = event.commands;

    function playerArg() { return C.argument('player', EntityArgument.player()); }
    function ticksArg() { return C.argument('ticks', IntegerArgumentType.integer(1)); }
    function getTarget(ctx) { return EntityArgument.getPlayer(ctx, 'player'); }
    function getTicks(ctx) { return IntegerArgumentType.getInteger(ctx, 'ticks'); }

    event.register(
        C.literal('territory').requires(function (s) { return s.hasPermission(2); })

            .then(C.literal('add').then(playerArg().executes(function (ctx) {
                return claimChunk(ctx, getTarget(ctx), 0, 0, 0);
            })))

            .then(C.literal('add_adjacent').then(playerArg()
                .executes(function (ctx) { return claimAdjacentChunk(ctx, getTarget(ctx), 0); })
                .then(ticksArg().executes(function (ctx) {
                    return claimAdjacentChunk(ctx, getTarget(ctx), getTicks(ctx));
                }))
            ))

            .then(C.literal('add_north').then(playerArg().executes(function (ctx) {
                return claimChunk(ctx, getTarget(ctx), 0, -1, 0);
            })))
            .then(C.literal('add_south').then(playerArg().executes(function (ctx) {
                return claimChunk(ctx, getTarget(ctx), 0, 1, 0);
            })))
            .then(C.literal('add_east').then(playerArg().executes(function (ctx) {
                return claimChunk(ctx, getTarget(ctx), 1, 0, 0);
            })))
            .then(C.literal('add_west').then(playerArg().executes(function (ctx) {
                return claimChunk(ctx, getTarget(ctx), -1, 0, 0);
            })))

            .then(C.literal('remove').executes(function (ctx) {
                var chunk = getChunk(ctx.source.position);
                delete CT.chunks[chunk.x + ',' + chunk.z];
                ctx.source.sendSuccess('Removed chunk [' + chunk.x + ', ' + chunk.z + ']', true);
                return 1;
            }))

            .then(C.literal('clear').executes(function (ctx) {
                var count = Object.keys(CT.chunks).length;
                CT.chunks = {};
                ctx.source.sendSuccess('Cleared ' + count + ' chunks', true);
                return 1;
            }))

            .then(C.literal('info').executes(function (ctx) {
                var chunk = getChunk(ctx.source.position);
                var data = CT.chunks[chunk.x + ',' + chunk.z];
                var msg = 'Chunk [' + chunk.x + ', ' + chunk.z + ']: ';
                msg += data ? data.uuid : 'unowned';
                if (data && data.expiry) msg += ' (expires tick ' + data.expiry + ')';
                ctx.source.sendSuccess(msg, false);
                return 1;
            }))

            .then(C.literal('list').executes(function (ctx) {
                var keys = Object.keys(CT.chunks);
                ctx.source.sendSuccess('Owned chunks: ' + keys.length, false);
                for (var i = 0; i < keys.length; i++) {
                    var data = CT.chunks[keys[i]];
                    var info = data.uuid + (data.expiry ? ' (expires ' + data.expiry + ')' : '');
                    ctx.source.sendSuccess('  ' + keys[i] + ' -> ' + info, false);
                }
                return 1;
            }))
    );
});

console.log('[territory] Commands loaded');
