//priority: 0
// Client Tooltips - item tooltip additions

// Java class for shift key detection
var $Screen = Java.loadClass("net.minecraft.client.gui.screens.Screen");

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

// Returns true if shift not held (adds hint and caller should return early)
function shiftHint(text, hint) {
  if ($Screen.hasShiftDown()) return false;
  text.add(Text.darkGray("Hold ").append(Text.gray("[Shift]")).append(Text.darkGray(" for " + (hint || "Summary"))));
  return true;
}

// Returns true if ctrl not held (adds hint and caller should return early)
function ctrlHint(text, hint) {
  if ($Screen.hasControlDown()) return false;
  text.add(Text.darkGray("Hold ").append(Text.gray("[Ctrl]")).append(Text.darkGray(" for " + (hint || "Details"))));
  return true;
}

// Derives lang key from item ID: "modid:item_name" -> "ptd.tooltip.modid.item_name"
function getLangKey(itemId) {
  return "ptd.tooltip." + itemId.replace(":", ".");
}

// Simple tooltip items (lang key auto-derived from item ID)
var TOOLTIP_ITEMS = [
  // AE2
  "ae2:toggle_bus",
  "ae2:storage_bus",
  "ae2:terminal",
  "ae2:energy_cell",
  // Critical
  "minecraft:water_bucket",
  "minecraft:white_concrete_powder",
  "minecraft:lava_bucket",
  "minecraft:cobblestone",
  "minecraft:milk_bucket",
  "minecraft:cauldron",
  "minecraft:bone_meal",
  "minecraft:egg",
  "create:scoria",
  "create:limestone",
  "create:blaze_burner",
  "createdieselgenerators:diesel_engine",
  "createdieselgenerators:distillation_controller",
  "wares:delivery_agreement",
  "wares:completed_delivery_agreement",
  "supplementaries:ash",
  "crafting_on_a_stick:stonecutter",
  // Dyeing
  "minecraft:redstone",
  "minecraft:redstone_ore",
  "minecraft:iron_ore",
  "minecraft:iron_ingot",
  "minecraft:raw_iron",
  "minecraft:copper_ore",
  "minecraft:copper_ingot",
  "minecraft:raw_copper",
  "minecraft:deepslate_diamond_ore",
  "minecraft:deepslate_emerald_ore",
  "minecraft:deepslate_lapis_ore",
  "minecraft:deepslate_coal_ore",
  "minecraft:deepslate_iron_ore",
  "minecraft:deepslate_copper_ore",
  "minecraft:deepslate_gold_ore",
  "minecraft:deepslate_redstone_ore",
  // PTDye
  "ptdye:trading_transceiver",
  "ptdye:postage_stamp_transceiver",
  "ptdye:mechanical_device",
  "ptdye:sturdy_device",
  "ptdye:smart_device",
  "ptdye:sealed_device",
  "ptdye:logic_device",
  "ptdye:locomotive_device",
  "ptdye:red_stringed_device",
  "ptdye:furnished_device",
  "ptdye:hammer",
  // Forgery
  "minecraft:cobweb",
  "minecraft:farmland",
  "minecraft:note_block",
  "minecraft:moss_block",
  "minecraft:grindstone",
  "minecraft:powered_rail",
  "minecraft:detector_rail",
  "minecraft:furnace_minecart",
  "minecraft:blaze_powder"
];

// Custom mappings for shared/non-standard lang keys (item ID -> lang key)
var TOOLTIP_MAPPINGS = {
  // AE2 shared tooltips
  "ae2:inverted_toggle_bus": "ptd.tooltip.ae2.toggle_bus",
  "ae2:flawed_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:chipped_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:damaged_budding_quartz": "ptd.tooltip.ae2.budding_quartz",
  "ae2:small_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:medium_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "ae2:large_quartz_bud": "ptd.tooltip.ae2.budding_quartz",
  "minecraft:quartz": "ptd.tooltip.ae2.budding_quartz",
  // Forgery shared tooltips
  "minecraft:campfire": "ptd.tooltip.minecraft.campfire",
  "minecraft:soul_campfire": "ptd.tooltip.minecraft.campfire",
  "minecraft:anvil": "ptd.tooltip.minecraft.anvil",
  "minecraft:chipped_anvil": "ptd.tooltip.minecraft.anvil",
  "minecraft:damaged_anvil": "ptd.tooltip.minecraft.anvil"
};

// Build final mappings: start with auto-derived, then add custom overrides
var FINAL_TOOLTIP_MAPPINGS = {};
for (var i = 0; i < TOOLTIP_ITEMS.length; i++) {
  var itemId = TOOLTIP_ITEMS[i];
  FINAL_TOOLTIP_MAPPINGS[itemId] = getLangKey(itemId);
}
var customKeys = Object.keys(TOOLTIP_MAPPINGS);
for (var i = 0; i < customKeys.length; i++) {
  var itemId = customKeys[i];
  FINAL_TOOLTIP_MAPPINGS[itemId] = TOOLTIP_MAPPINGS[itemId];
}

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
  FINAL_TOOLTIP_MAPPINGS[AE2_SMART_CABLES[i]] = "ptd.tooltip.ae2.smart_cable";
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
  FINAL_TOOLTIP_MAPPINGS[WOOD_LOGS[i]] = "ptd.tooltip.wood_logs";
}

ItemEvents.tooltip(function(event) {
  // Static tooltips from lang file (shift to show)
  var mappingKeys = Object.keys(FINAL_TOOLTIP_MAPPINGS);
  for (var i = 0; i < mappingKeys.length; i++) {
    var itemId = mappingKeys[i];
    event.addAdvanced(itemId, function(item, advanced, text) {
      var key = FINAL_TOOLTIP_MAPPINGS[item.getId()];
      var translated = Text.translate(key).getString();
      if (translated === key) return;
      if (shiftHint(text)) return;
      text.add(formatTooltipText(translated));
    });
  }

  // Golden tools - Fortune tooltip (shift to show)
  for (var i = 0; i < GOLDEN_TOOLS.length; i++) {
    event.addAdvanced(GOLDEN_TOOLS[i], function(item, advanced, text) {
      if (shiftHint(text)) return;
      var translated = Text.translate("ptd.tooltip.golden_tools").getString();
      text.add(formatTooltipText(translated));
    });
  }

  // Diamond tools - Silk Touch tooltips (shift to show)
  for (var i = 0; i < DIAMOND_TOOLS.length; i++) {
    event.addAdvanced(DIAMOND_TOOLS[i], function(item, advanced, text) {
      if (shiftHint(text)) return;
      text.add(Text.of(Text.translate("ptd.tooltip.diamond_silk_touch").getString()).italic().gray());
      var translated = Text.translate("ptd.tooltip.diamond_tools").getString();
      text.add(formatTooltipText(translated));
    });
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
    // if (itemObj.hasTag("ptd:devices/generic_devices") || itemObj.hasTag("forge:devices")) {
    //   var tags = itemObj.getTags().toArray();
    //   var deviceTag = null;
    //   for (var i = 0; i < tags.length; i++) {
    //     if (tags[i].location().toString().indexOf("devices/") !== -1) {
    //       deviceTag = tags[i];
    //       break;
    //     }
    //   }
    //   if (deviceTag) {
    //     var devicePath = deviceTag.location().path;
    //     var deviceType = devicePath.split("/").pop().replace(/_/g, " ");
    //     text.add(Text.aqua(Utils.toTitleCase(deviceType)).append(Text.aqua(" Device")));
    //   }
    // }
  });

  // Wares trade contents tooltip helper
  function getItemName(id) {
    return Item.of(id).getHoverName().getString();
  }

  function addTradeTooltip(text, requestedItems, paymentItems) {
    if (requestedItems && requestedItems.size() > 0) {
      var requestedMap = {};
      for (var i = 0; i < requestedItems.size(); i++) {
        var entry = requestedItems.get(i);
        var id = entry.getString("id");
        var count = entry.getInt("Count");
        requestedMap[id] = (requestedMap[id] || 0) + count;
      }
      var reqKeys = Object.keys(requestedMap);
      for (var i = 0; i < reqKeys.length; i++) {
        var id = reqKeys[i];
        text.add(Text.red("▼ ").append(Text.gray(requestedMap[id] + "x " + getItemName(id))));
      }
    }

    if (paymentItems && paymentItems.size() > 0) {
      var paymentMap = {};
      for (var i = 0; i < paymentItems.size(); i++) {
        var entry = paymentItems.get(i);
        var id = entry.getString("id");
        var count = entry.getInt("Count");
        paymentMap[id] = (paymentMap[id] || 0) + count;
      }
      var payKeys = Object.keys(paymentMap);
      for (var i = 0; i < payKeys.length; i++) {
        var id = payKeys[i];
        text.add(Text.green("▲ ").append(Text.gray(paymentMap[id] + "x " + getItemName(id))));
      }
    }
  }

  // Wares delivery agreement - show trade details on ctrl
  event.addAdvanced("wares:delivery_agreement", function(item, advanced, text) {
    var nbt = item.getNbt();
    if (!nbt) return;
    if (ctrlHint(text, "Trade Details")) return;

    // Repeat count
    var ordered = nbt.getInt("ordered");
    if (ordered === 0) {
      text.add(Text.darkGray("Can be repeated ").append(Text.gray("infinitely")));
    } else if (ordered > 0) {
      text.add(Text.darkGray("Can be repeated ").append(Text.gray(ordered + " times")));
    }

    // Trade contents
    addTradeTooltip(text, nbt.get("requestedItems"), nbt.get("paymentItems"));
  });

  // Wares completed delivery agreement - show details on ctrl
  event.addAdvanced("wares:completed_delivery_agreement", function(item, advanced, text) {
    var nbt = item.getNbt();
    if (!nbt) return;
    if (ctrlHint(text, "Trade Details")) return;

    var ordered = nbt.getInt("ordered");
    if (ordered > 0) {
      text.add(Text.darkGray("Was repeated ").append(Text.gray(ordered + " times")));
    }

    addTradeTooltip(text, nbt.get("requestedItems"), nbt.get("paymentItems"));
  });

  // Trading transceiver with stored agreement - show trade contents
  event.addAdvanced("ptdye:trading_transceiver", function(item, advanced, text) {
    var nbt = item.getNbt();
    if (!nbt) return;
    var stored = nbt.get("StoredAgreement");
    if (!stored) return;
    if (ctrlHint(text, "Trade Details")) return;

    // The stored agreement has structure: {Count, id, tag:{requestedItems, paymentItems}}
    var tag = stored.get("tag");
    if (!tag) {
      // Maybe it's stored directly without the tag wrapper
      var reqItems = stored.get("requestedItems");
      var payItems = stored.get("paymentItems");
      if (reqItems || payItems) {
        text.add(Text.gold("Trade:"));
        addTradeTooltip(text, reqItems, payItems);
      }
      return;
    }

    text.add(Text.gold("Trade:"));
    addTradeTooltip(text, tag.get("requestedItems"), tag.get("paymentItems"));
  });

  // ---------------------------------------------------------------------------
  // Botania "debookified" summaries
  // Shows the generated `.tooltip.summary` text while holding Shift.
  // (We can't rely on Create's ItemDescription integration here because `global.create`
  // is not available in this environment, see logs.)
  // ---------------------------------------------------------------------------
  event.addAdvanced(Ingredient.of(/^botania:/), function(item, advanced, text) {
    var itemObj = Item.of(item);
    var key = itemObj.getDescriptionId() + ".tooltip.summary";
    var translated = Text.translate(key).getString();
    if (translated === key) return;
    if (shiftHint(text)) return;
    text.add(formatTooltipText(translated));
  });
});

// Generate EMI info pages for all tooltips
ClientEvents.lang("en_us", function(event) {
  // Read lang file directly since Text.translate() doesn't work during lang event
  var langFile = JsonIO.read("kubejs/assets/ptd/lang/en_us.json");
  if (!langFile) return;

  var mappingKeys = Object.keys(FINAL_TOOLTIP_MAPPINGS);
  for (var i = 0; i < mappingKeys.length; i++) {
    var itemId = mappingKeys[i];
    var langKey = FINAL_TOOLTIP_MAPPINGS[itemId];
    var translated = langFile[langKey];
    if (!translated) continue;

    // Strip underscores for EMI (doesn't support formatting)
    var strippedText = String(translated).split("_").join("");

    // Add EMI info lang entry
    var item = Item.of(itemId);
    var emiLangKey = item.getDescriptionId() + ".emi.info";
    event.add(emiLangKey, strippedText);

    // Generate EMI info JSON referencing the lang key
    var jsonPath = "kubejs/assets/emi/recipe/additions/generated." + itemId.replace(":", ".") + ".json";
    JsonIO.write(jsonPath, {
      type: "emi:info",
      stacks: ["item:" + itemId],
      text: emiLangKey
    });
  }
});
