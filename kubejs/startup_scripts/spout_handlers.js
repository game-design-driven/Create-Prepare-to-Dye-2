// Spout Handlers - Custom spout filling behaviors

CreateEvents.spoutHandler((event) => {
  // Fill empty cauldron with water
  event.add("fill_cauldron_water", "minecraft:cauldron", (block, fluid, simulate) => {
    if (fluid.id === "minecraft:water" && fluid.amount >= 1000) {
      if (!simulate) {
        block.set("minecraft:water_cauldron", { level: "3" });
      }
      return 1000;
    }
    return 0;
  });

  // Fill empty cauldron with lava
  event.add("fill_cauldron_lava", "minecraft:cauldron", (block, fluid, simulate) => {
    if (fluid.id === "minecraft:lava" && fluid.amount >= 1000) {
      if (!simulate) {
        block.set("minecraft:lava_cauldron");
      }
      return 1000;
    }
    return 0;
  });

  // Fill AE2 energy cell with milk
  var energyPerMilk = 10000;
  var maxEnergy = 200000.0;
  event.add("fill_energy_cell", "ae2:energy_cell", (block, fluid, simulate) => {
    if (fluid.id === "minecraft:milk" && fluid.amount >= 250) {
      var currentEnergy = block.entityData.internalCurrentPower;
      if (currentEnergy < maxEnergy - energyPerMilk - 1) {
        if (!simulate) {
          Utils.server.runCommandSilent(
            "setblock " + block.x + " " + block.y + " " + block.z + " minecraft:air"
          );
          Utils.server.runCommandSilent(
            "setblock " + block.x + " " + block.y + " " + block.z +
            " ae2:energy_cell[fullness=4]{ForgeCaps:{},internalCurrentPower:" +
            (currentEnergy + energyPerMilk) + "}"
          );
        }
        return 250;
      }
    }
    return 0;
  });

  // Grow quartz buds with water
  var quartzGrowthStages = [
    "ae2:small_quartz_bud",
    "ae2:medium_quartz_bud",
    "ae2:large_quartz_bud",
    "ae2:quartz_cluster",
  ];
  event.add("grow_quartz_bud", /.*_quartz_bud$/, (block, fluid, simulate) => {
    if (fluid.id === "minecraft:water" && fluid.amount >= 1000) {
      var nextStage = quartzGrowthStages[quartzGrowthStages.indexOf(block.id) + 1];
      if (nextStage) {
        if (!simulate) {
          Utils.server.runCommandSilent(
            "setblock " + block.x + " " + block.y + " " + block.z + " " + nextStage
          );
        }
        return 1000;
      }
    }
    return 0;
  });
});
