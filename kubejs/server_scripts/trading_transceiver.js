// TEMP script - Trading Transceiver - Calls delivery table from the sky

ItemEvents.rightClicked('ptdye:trading_transceiver', function(event) {
    var player = event.player;
    var target = event.target;

    if (!target || target.type !== 'block') return;

    var block = target.block;
    var x = block.x + 0.5;
    var y = block.y + 50;
    var z = block.z + 0.5;
    var landY = block.y + 1;

    // Spawn falling block entity with lock
    event.server.runCommandSilent(
        'summon minecraft:falling_block ' + x + ' ' + y + ' ' + z +
        ' {BlockState:{Name:"wares:delivery_table"},Time:1,DropItem:0,TileEntityData:{AgreementLock:{Locked:true,UnlockBehavior:"completed_or_expired"}}}'
    );

    // Place agreement after landing (delay for fall time)
    var playerName = player.name.string;
    var landX = block.x, landZ = block.z;
    event.server.scheduleInTicks(120, function() {
        event.server.runCommandSilent(
            'item replace block ' + landX + ' ' + landY + ' ' + landZ + ' container.0 with wares:delivery_agreement{title:\'"Chunk Purchase"\',requestedItems:[{id:"minecraft:stick",Count:1b}],paymentItems:[],deliveryTime:60,commands:{onDelivery:"territory add_adjacent ' + playerName + ' 60",onCompletion:"territory add_adjacent ' + playerName + ' 60"}}'
        );
    });

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

    player.swing();
    event.cancel();
});

console.log('[transceiver] Trading transceiver loaded');
