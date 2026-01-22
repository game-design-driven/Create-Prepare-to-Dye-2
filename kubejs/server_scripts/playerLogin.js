//priority: 0
//Create Prepare to Dye 2 - Player Login Events

function getExtraPlayerItems() {
  var amount = global.config_additionalPlayerDevices.get();
  return [
    Item.of("ptdye:mechanical_device", amount),
    Item.of("ptdye:smart_device", amount),
    Item.of("ptdye:sealed_device", amount),
    Item.of("ptdye:sturdy_device", amount),
    Item.of("ptdye:logic_device", amount),
  ];
}


/**
 * @param {Object} player
 * @returns {void}
 */
function applyAutomatonAttributes(player) {
  player.setAttributeBaseValue("forge:swim_speed", global.config_swimSpeed.get());
  player.setAttributeBaseValue("forge:reach_distance", global.config_reachDistance.get());
  player.setAttributeBaseValue("forge:attack_range", global.config_attackRange.get());
  player.setAttributeBaseValue("minecraft:generic.attack_damage", global.config_attackDamage.get());
  Utils.server.runCommandSilent(
    `curios replace charm 0 ${player.displayName.getString()} with botania:monocle`
  );
  Utils.server.runCommandSilent(
    `curios replace head 0 ${player.displayName.getString()} with create:goggles`
  );
}

function disableRain() {
  Utils.server.runCommandSilent("weather clear");
  Utils.server.runCommandSilent("gamerule doWeatherCycle false");
}

PlayerEvents.loggedIn((event) => {
  applyAutomatonAttributes(event.player);
  disableRain();

  if (!event.player.persistentData.getBoolean("starter")) {
    event.player.give(Item.of("create:wrench", 1));
    event.player.persistentData.putBoolean("starter", true);

    if (event.server.persistentData.getBoolean("existing_world")) {
      var extraItems = getExtraPlayerItems();
      for (var i = 0; i < extraItems.length; i++) {
        event.player.give(extraItems[i]);
      }
    }
    event.server.persistentData.putBoolean("existing_world", true);
  }
});

PlayerEvents.respawned((event) => {
  applyAutomatonAttributes(event.player);
});
