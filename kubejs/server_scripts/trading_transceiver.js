// Trading Transceiver - Calls delivery table from the sky
// Postage Stamp Transceiver - Picks up delivery table, stores agreement state

// Helper to check territory ownership
function checkTerritoryAccess(player, block) {
    if (!global.ChunkTerritory || !global.ChunkTerritory.chunks || Object.keys(global.ChunkTerritory.chunks).length === 0) {
        return true;
    }
    var uuid = player.uuid.toString();
    var pcx = player.chunkPosition().x;
    var pcz = player.chunkPosition().z;
    var bcx = Math.floor(block.x / 16);
    var bcz = Math.floor(block.z / 16);
    return global.ChunkTerritory.owns(uuid, pcx, pcz) && global.ChunkTerritory.owns(uuid, bcx, bcz);
}

function showTerritoryError(event, player, block) {
    var bx = block.x + 0.5, by = block.y + 0.5, bz = block.z + 0.5;
    event.server.runCommandSilent('particle angry_villager ' + bx + ' ' + by + ' ' + bz + ' 0.2 0.2 0.2 0 6 force ' + player.name.string);
    event.server.runCommandSilent('playsound minecraft:block.note_block.bass master ' + player.name.string + ' ' + bx + ' ' + by + ' ' + bz + ' 0.6 0.7');
}


// Trading Transceiver - Call down delivery table

ItemEvents.rightClicked('ptdye:trading_transceiver', function(event) {
    var player = event.player;
    var target = event.target;

    if (!target || target.type !== 'block') return;

    var block = target.block;

    if (!checkTerritoryAccess(player, block)) {
        showTerritoryError(event, player, block);
        player.tell('You must be inside your territory to use the Trading Transceiver');
        event.cancel();
        return;
    }

    var x = block.x + 0.5;
    var y = block.y + 50;
    var z = block.z + 0.5;
    var landX = block.x;
    var landY = block.y + 1;
    var landZ = block.z;

    // Check if transceiver has stored agreement data
    var itemNbt = player.mainHandItem.getNbt();
    var storedAgreement = itemNbt ? itemNbt.get('StoredAgreement') : null;
    var storedLock = itemNbt ? itemNbt.get('StoredLock') : null;

    // Spawn falling block entity
    var tileData = storedLock
        ? '{AgreementLock:' + storedLock + '}'
        : '{AgreementLock:{Locked:true,UnlockBehavior:"completed_or_expired"}}';

    event.server.runCommandSilent(
        'summon minecraft:falling_block ' + x + ' ' + y + ' ' + z +
        ' {BlockState:{Name:"wares:delivery_table"},Time:1,DropItem:0,TileEntityData:' + tileData + '}'
    );

    // Place agreement after landing
    var playerName = player.name.string;
    var server = event.server;

    if (storedAgreement) {
        // Restore stored agreement using item replace (same as default)
        var itemId = storedAgreement.getString('id');
        var itemTag = storedAgreement.get('tag');
        var tagString = itemTag ? itemTag.toString() : '';

        var cmd = 'item replace block ' + landX + ' ' + landY + ' ' + landZ + ' container.0 with ' + itemId + tagString;
        console.log('[transceiver] Restoring: ' + cmd);

        server.scheduleInTicks(120, function() {
            server.runCommandSilent(cmd);
        });
    } else {
        // Default agreement for new transceivers
        var itemstring = 'item replace block ' + landX + ' ' + landY + ' ' + landZ + ' container.0 with wares:delivery_agreement{title:\'"Chunk Purchase"\',requestedItems:[{id:"minecraft:stick",Count:1b}],paymentItems:[],deliveryTime:90, territoryExpandTime:100}';
        server.scheduleInTicks(120, function() {
            server.runCommand(itemstring);
        });
    }

    // Sound effects
    event.server.runCommandSilent(
        'playsound minecraft:entity.lightning_bolt.thunder weather ' + player.name.string +
        ' ' + x + ' ' + landY + ' ' + z + ' 0.5 1.5'
    );
    event.server.runCommandSilent(
        'playsound minecraft:block.beacon.activate block ' + player.name.string +
        ' ' + x + ' ' + y + ' ' + z + ' 1 0.5'
    );

    // Visual trail particles
    for (var i = 0; i < 10; i++) {
        var py = landY + (y - landY) * (i / 10);
        event.server.runCommandSilent(
            'particle end_rod ' + x + ' ' + py + ' ' + z + ' 0.1 0.5 0.1 0.02 5 force ' + player.name.string
        );
    }

    // Consume item
    player.mainHandItem.count--;
    player.swing();
    event.cancel();
});


// Postage Stamp Transceiver - Pick up delivery table

BlockEvents.rightClicked('wares:delivery_table', function(event) {
    if (event.hand !== 'main_hand') return;
    if (event.player.mainHandItem.id !== 'ptdye:postage_stamp_transceiver') return;

    var player = event.player;
    var block = event.block;

    if (!checkTerritoryAccess(player, block)) {
        showTerritoryError(event, player, block);
        player.tell('You must be inside your territory to pick up this terminal');
        event.cancel();
        return;
    }

    // Get block entity data
    var beNbt = block.getEntityData();
    if (!beNbt) {
        event.cancel();
        return;
    }

    // Get agreement item directly from inventory
    var blockEntity = block.getEntity();
    var agreementItem = null;
    var agreementNbt = null;

    // Try to get item from slot 0 via inventory
    if (blockEntity && blockEntity.getItem) {
        agreementItem = blockEntity.getItem(0);
        console.log('[postage] Item from slot 0: ' + agreementItem);
        if (agreementItem && !agreementItem.isEmpty()) {
            // Convert to NBT format for storage
            agreementNbt = {
                id: agreementItem.getId(),
                Count: agreementItem.getCount(),
                tag: agreementItem.getNbt()
            };
            console.log('[postage] Agreement NBT: ' + JSON.stringify(agreementNbt));
        }
    }

    // Fallback to block entity NBT
    if (!agreementNbt) {
        console.log('[postage] Full NBT: ' + beNbt);
        var allKeys = beNbt.getAllKeys();
        console.log('[postage] Keys: ' + allKeys);

        var items = beNbt.get('Items');
        if (items && items.size() > 0) {
            agreementNbt = items.get(0);
            console.log('[postage] Found in Items: ' + agreementNbt);
        }
    }

    // Extract lock data
    var lockNbt = beNbt.get('AgreementLock');

    // Create trading transceiver with stored data
    var transceiverNbt = {};
    if (agreementNbt) {
        transceiverNbt.StoredAgreement = agreementNbt;
    }
    if (lockNbt) {
        transceiverNbt.StoredLock = lockNbt;
    }

    var transceiver = Item.of('ptdye:trading_transceiver', transceiverNbt);

    // Clear container before removing block to prevent item drops
    if (blockEntity && blockEntity.clearContent) {
        blockEntity.clearContent();
    } else {
        // Fallback: set slot to empty via command
        event.server.runCommandSilent('item replace block ' + block.x + ' ' + block.y + ' ' + block.z + ' container.0 with minecraft:air');
    }

    // Remove delivery table
    var bx = block.x, by = block.y, bz = block.z;
    block.set('minecraft:air');

    // Check for bedrock platform below and remove it
    var below = event.level.getBlock(bx, by - 1, bz);
    if (below.id === 'minecraft:bedrock') {
        below.set('minecraft:air');
    }

    // Consume postage stamp
    player.mainHandItem.count--;

    // Effects
    event.server.runCommandSilent('playsound minecraft:entity.enderman.teleport block @a ' + bx + ' ' + by + ' ' + bz + ' 1.0 2.0');
    event.server.runCommandSilent('playsound minecraft:block.gilded_blackstone.break ambient @a ' + bx + ' ' + by + ' ' + bz + ' 1 1.2');
    event.server.runCommandSilent('particle minecraft:portal ' + bx + ' ' + by + ' ' + bz + ' 0 -100 0 0.1 10000 force @a');
    event.server.runCommandSilent('particle minecraft:portal ' + bx + ' ' + by + ' ' + bz + ' 0.1 0 0.1 0.1 1000 normal @a');

    // Drop trading transceiver after delay
    var level = event.level;
    event.server.scheduleInTicks(50, function() {
        level.getBlock(bx, by, bz).popItem(transceiver);
    });

    player.swing();
    event.cancel();
});

console.log('[transceiver] Trading transceiver and postage stamp loaded');
