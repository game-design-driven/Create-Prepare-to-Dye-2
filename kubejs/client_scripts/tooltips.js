//priority: 0
// Client Tooltips - item tooltip additions

// Converts _text_ syntax to gold colored text
function formatTooltipText(text) {
  var parts = text.split("_");
  var result = Text.of("");
  for (var i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      result = result.append(Text.gray(parts[i]));
    } else {
      result = result.append(Text.gold(parts[i]));
    }
  }
  return result;
}

// Static tooltip mappings (item ID -> lang key)
var TOOLTIP_MAPPINGS = {
  // AE2 tooltips
  "ae2:toggle_bus": "ptd.tooltip.ae2.toggle_bus",
  "ae2:inverted_toggle_bus": "ptd.tooltip.ae2.toggle_bus",
  "ae2:storage_bus": "ptd.tooltip.ae2.storage_bus",
  "ae2:terminal": "ptd.tooltip.ae2.terminal",
  "ae2:energy_cell": "ptd.tooltip.ae2.energy_cell",
  "ae2:flawed_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:chipped_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:damaged_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:small_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:medium_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:large_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "minecraft:quartz": "ptd.tooltip.ae2.budding_quartz",

  // Critical tooltips
  "minecraft:water_bucket": "ptd.tooltip.minecraft.water_bucket",
  "minecraft:white_concrete_powder": "ptd.tooltip.minecraft.white_concrete_powder",
  "minecraft:lava_bucket": "ptd.tooltip.minecraft.lava_bucket",
  "create:scoria": "ptd.tooltip.create.scoria",
  "minecraft:cobblestone": "ptd.tooltip.minecraft.cobblestone",
  "create:limestone": "ptd.tooltip.create.limestone",
  "minecraft:milk_bucket": "ptd.tooltip.minecraft.milk_bucket",
  "minecraft:cauldron": "ptd.tooltip.minecraft.cauldron",
  "createdieselgenerators:diesel_engine": "ptd.tooltip.createdieselgenerators.diesel_engine",
  "wares:delivery_agreement": "ptd.tooltip.wares.delivery_agreement",
  "wares:completed_delivery_agreement": "ptd.tooltip.wares.completed_delivery_agreement",
  "create:blaze_burner": "ptd.tooltip.create.blaze_burner",
  "supplementaries:ash": "ptd.tooltip.supplementaries.ash",
  "crafting_on_a_stick:stonecutter": "ptd.tooltip.crafting_on_a_stick.stonecutter",
  "minecraft:bone_meal": "ptd.tooltip.minecraft.bone_meal",
  "createdieselgenerators:distillation_controller": "ptd.tooltip.createdieselgenerators.distillation_controller",
  "minecraft:egg": "ptd.tooltip.minecraft.egg",

  // Dyeing tooltips
  "minecraft:redstone": "ptd.tooltip.dyeing.redstone",
  "minecraft:redstone_ore": "ptd.tooltip.dyeing.redstone",
  "minecraft:iron_ore": "ptd.tooltip.dyeing.iron_ore",
  "minecraft:iron_ingot": "ptd.tooltip.dyeing.iron_ingot",
  "minecraft:raw_iron": "ptd.tooltip.dyeing.iron_ingot",
  "minecraft:copper_ore": "ptd.tooltip.dyeing.copper_ore",
  "minecraft:copper_ingot": "ptd.tooltip.dyeing.copper_ingot",
  "minecraft:raw_copper": "ptd.tooltip.dyeing.copper_ingot",
  "minecraft:deepslate_diamond_ore": "ptd.tooltip.dyeing.deepslate_diamond_ore",
  "minecraft:deepslate_emerald_ore": "ptd.tooltip.dyeing.deepslate_emerald_ore",
  "minecraft:deepslate_lapis_ore": "ptd.tooltip.dyeing.deepslate_lapis_ore",
  "minecraft:deepslate_coal_ore": "ptd.tooltip.dyeing.deepslate_coal_ore",
  "minecraft:deepslate_iron_ore": "ptd.tooltip.dyeing.deepslate_iron_ore",
  "minecraft:deepslate_copper_ore": "ptd.tooltip.dyeing.deepslate_copper_ore",
  "minecraft:deepslate_gold_ore": "ptd.tooltip.dyeing.deepslate_gold_ore",
  "minecraft:deepslate_redstone_ore": "ptd.tooltip.dyeing.deepslate_redstone_ore",

  // PTDye custom items
  "ptdye:trading_transceiver": "ptd.tooltip.ptdye.trading_transceiver",
  "ptdye:postage_stamp_transceiver": "ptd.tooltip.ptdye.postage_stamp_transceiver",
  "ptdye:mechanical_device": "ptd.tooltip.ptdye.mechanical_device",
  "ptdye:sturdy_device": "ptd.tooltip.ptdye.sturdy_device",
  "ptdye:smart_device": "ptd.tooltip.ptdye.smart_device",
  "ptdye:sealed_device": "ptd.tooltip.ptdye.sealed_device",
  "ptdye:logic_device": "ptd.tooltip.ptdye.logic_device",
  "ptdye:locomotive_device": "ptd.tooltip.ptdye.locomotive_device",
  "ptdye:red_stringed_device": "ptd.tooltip.ptdye.red_stringed_device",
  "ptdye:furnished_device": "ptd.tooltip.ptdye.furnished_device",
  "ptdye:hammer": "ptd.tooltip.ptdye.hammer",

  // Forgery tweaks tooltips
  "minecraft:campfire": "ptd.tooltip.forgery.campfire",
  "minecraft:soul_campfire": "ptd.tooltip.forgery.campfire",
  "minecraft:cobweb": "ptd.tooltip.forgery.cobweb",
  "minecraft:farmland": "ptd.tooltip.forgery.farmland",
  "minecraft:note_block": "ptd.tooltip.forgery.note_block",
  "minecraft:moss_block": "ptd.tooltip.forgery.moss",
  "minecraft:anvil": "ptd.tooltip.forgery.anvil",
  "minecraft:chipped_anvil": "ptd.tooltip.forgery.anvil",
  "minecraft:damaged_anvil": "ptd.tooltip.forgery.anvil",
  "minecraft:grindstone": "ptd.tooltip.forgery.grindstone",
  "minecraft:powered_rail": "ptd.tooltip.forgery.powered_rail",
  "minecraft:detector_rail": "ptd.tooltip.forgery.detector_rail",
  "minecraft:furnace_minecart": "ptd.tooltip.forgery.furnace_minecart",
  "minecraft:blaze_powder": "ptd.tooltip.forgery.blaze_powder"
};

// AE2 smart cables - all colors
var AE2_SMART_CABLES = [
  "ae2:fluix_smart_cable",
  "ae2:red_smart_cable",
  "ae2:blue_smart_cable",
  "ae2:green_smart_cable",
  "ae2:purple_smart_cable",
  "ae2:white_smart_cable",
  "ae2:orange_smart_cable",
  "ae2:yellow_smart_cable",
  "ae2:lime_smart_cable",
  "ae2:pink_smart_cable",
  "ae2:gray_smart_cable",
  "ae2:light_gray_smart_cable",
  "ae2:cyan_smart_cable",
  "ae2:light_blue_smart_cable",
  "ae2:magenta_smart_cable",
  "ae2:brown_smart_cable",
  "ae2:black_smart_cable"
];
for (var i = 0; i < AE2_SMART_CABLES.length; i++) {
  TOOLTIP_MAPPINGS[AE2_SMART_CABLES[i]] = "ptd.tooltip.ae2.smart_cable";
}

// Golden tools - Fortune
var GOLDEN_TOOLS = [
  "minecraft:golden_pickaxe",
  "minecraft:golden_shovel",
  "minecraft:golden_axe",
  "minecraft:golden_sword",
  "minecraft:golden_hoe"
];

// Diamond tools - Silk Touch
var DIAMOND_TOOLS = [
  "minecraft:diamond_pickaxe",
  "minecraft:diamond_shovel",
  "minecraft:diamond_axe",
  "minecraft:diamond_hoe"
];

// Wood logs tooltip
var WOOD_LOGS = [
  "minecraft:oak_wood",
  "minecraft:spruce_wood",
  "minecraft:birch_wood",
  "minecraft:jungle_wood",
  "minecraft:acacia_wood",
  "minecraft:dark_oak_wood",
  "minecraft:crimson_hyphae",
  "minecraft:warped_hyphae",
  "minecraft:stripped_oak_wood",
  "minecraft:stripped_spruce_wood",
  "minecraft:stripped_birch_wood",
  "minecraft:stripped_jungle_wood",
  "minecraft:stripped_acacia_wood",
  "minecraft:stripped_dark_oak_wood",
  "minecraft:stripped_crimson_hyphae",
  "minecraft:stripped_warped_hyphae",
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:acacia_log",
  "minecraft:dark_oak_log",
  "minecraft:crimson_stem",
  "minecraft:warped_stem",
  "botania:livingwood_log",
  "botania:livingwood",
  "botania:dreamwood_log",
  "botania:dreamwood",
  "botania:glimmering_livingwood_log",
  "botania:glimmering_livingwood",
  "botania:glimmering_dreamwood_log",
  "botania:glimmering_dreamwood",
  "quark:blossom_log",
  "quark:blossom_wood",
  "quark:stripped_blossom_log",
  "quark:stripped_blossom_wood"
];
for (var i = 0; i < WOOD_LOGS.length; i++) {
  TOOLTIP_MAPPINGS[WOOD_LOGS[i]] = "ptd.tooltip.wood_logs";
}

ItemEvents.tooltip(function(event) {
  // Static tooltips from lang file
  var mappingKeys = Object.keys(TOOLTIP_MAPPINGS);
  for (var i = 0; i < mappingKeys.length; i++) {
    var itemId = mappingKeys[i];
    var langKey = TOOLTIP_MAPPINGS[itemId];
    var translated = Text.translate(langKey).getString();
    if (translated !== langKey) {
      event.add(itemId, formatTooltipText(translated));
    }
  }

  // Golden tools - Fortune tooltip
  for (var i = 0; i < GOLDEN_TOOLS.length; i++) {
    var translated = Text.translate("ptd.tooltip.golden_tools").getString();
    event.add(GOLDEN_TOOLS[i], formatTooltipText(translated));
  }

  // Diamond tools - Silk Touch tooltips
  for (var i = 0; i < DIAMOND_TOOLS.length; i++) {
    event.add(DIAMOND_TOOLS[i], Text.of(Text.translate("ptd.tooltip.diamond_silk_touch").getString()).italic().gray());
    var translated = Text.translate("ptd.tooltip.diamond_tools").getString();
    event.add(DIAMOND_TOOLS[i], formatTooltipText(translated));
  }

  // Disabled items tooltip
  event.addAdvanced("#c:removed", function(item, advanced, text) {
    var translated = Text.translate("ptd.tooltip.disabled_item").getString();
    text.add(Text.red(translated));
  });

  // Food nutrition and saturation tooltips
  event.addAdvanced(Ingredient.all, function(item, advanced, text) {
    var foodProps = item.getFoodProperties(null);
    if (!foodProps) return;
    var nutrition = foodProps.getNutrition();
    var saturationMod = foodProps.getSaturationModifier();
    var saturation = Math.round(nutrition * saturationMod * 2 * 10) / 10;
    text.add(Text.darkGreen("Saturation").append(Text.green(" " + saturation)));
    text.add(Text.darkGreen("Nutrition").append(Text.green(" " + nutrition)));
  });

  // Burn time tooltips
  var $ForgeHooks = Java.loadClass("net.minecraftforge.common.ForgeHooks");
  event.addAdvanced(Ingredient.all, function(item, advanced, text) {
    var burnTime = $ForgeHooks.getBurnTime(item, null);
    if (burnTime <= 0) return;
    text.add(
      Text.darkGray("Burn Time").append(Text.gray(" " + Math.round((burnTime / 20) * 10) / 10 + " Seconds"))
    );
  });

  // Category and device type tooltips
  event.addAdvanced(Ingredient.all, function(item, advanced, text) {
    var itemObj = Item.of(item);

    // Show mod name on Ctrl
    if (advanced) {
      var modId = itemObj.mod;
      if (modId && modId !== "minecraft") {
        text.add(
          Text.darkGray("[").append(
            Text.blue(Utils.toTitleCase(modId.trim())).append(Text.darkGray("]"))
          )
        );
      }
    }

    // Device type tooltip
    if (itemObj.hasTag("ptd:devices/generic_devices") || itemObj.hasTag("forge:devices")) {
      var tags = itemObj.getTags().toArray();
      var deviceTag = null;
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].location().toString().indexOf("devices/") !== -1) {
          deviceTag = tags[i];
          break;
        }
      }
      if (deviceTag) {
        var devicePath = deviceTag.location().path;
        var deviceType = devicePath.split("/").pop().replace(/_/g, " ");
        text.add(Text.aqua(Utils.toTitleCase(deviceType)).append(Text.aqua(" Device")));
      }
    }
  });
});
