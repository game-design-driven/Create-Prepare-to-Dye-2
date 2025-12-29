//priority: 0
// Block Tweaks - block-related gameplay modifications

// =============================================================================
// INDESTRUCTIBLE ITEMS - Never despawn
// =============================================================================

var NEVER_DESPAWN_ITEMS = [
  "wares:delivery_agreement",
  "wares:completed_delivery_agreement",
  "wares:sealed_delivery_agreement",
  "create:brass_casing",
  "create:copper_casing",
  "create:andesite_casing",
  "ptdye:cobblestone_casing",
  "ptdye:redstone_casing",
  "create:controller_rail",
  "create:railway_casing"
];

EntityEvents.spawned(function(event) {
  if (!event.entity.item) return;

  var itemId = event.entity.item.id;

  // Check explicit list
  for (var i = 0; i < NEVER_DESPAWN_ITEMS.length; i++) {
    if (NEVER_DESPAWN_ITEMS[i] === itemId) {
      event.entity.age = -32768; // Never despawn
      return;
    }
  }

  // Check tag
  if (event.entity.item.hasTag("forge:indestructible")) {
    event.entity.age = -32768;
  }
});

// =============================================================================
// DIAMOND TOOLS SILK TOUCH
// =============================================================================

// Diamond tools have built-in silk touch
var SILKY_TOOLS = [
  "minecraft:diamond_pickaxe",
  "minecraft:diamond_axe",
  "minecraft:diamond_shovel",
  "minecraft:diamond_hoe",
  "minecraft:diamond_sword"
];

BlockEvents.broken(function(event) {
  var toolId = event.player.mainHandItem.id;

  var isSilkyTool = false;
  for (var i = 0; i < SILKY_TOOLS.length; i++) {
    if (SILKY_TOOLS[i] === toolId) {
      isSilkyTool = true;
      break;
    }
  }

  if (!isSilkyTool) return;
  if (Item.of(event.block.id).isEmpty()) return;

  event.block.popItem(event.block.id);
  event.block.set("air");
});

// Schematicannon requires no fuel (configurable)
BlockEvents.placed(function(event) {
  if (event.block.id !== "create:schematicannon") return;
  if (!global.config_schematicannonFreeFuel.get()) return;

  var data = event.block.entityData;
  data.putFloat("Fuel", 1);
  event.block.setEntityData(data);
});

// Glass bottles cannot be filled from water source blocks
ItemEvents.rightClicked("minecraft:glass_bottle", function(event) {
  if (event.target && event.target.block && event.target.block.id === "minecraft:water") {
    event.cancel();
  }
});

// Spaceship structure spawns on first world load
ServerEvents.loaded(function(event) {
  if (!event.server.persistentData.getBoolean("crashLanded")) {
    event.server.persistentData.putBoolean("crashLanded", true);
    event.server.runCommandSilent("place structure minecraft:spaceship_wreck_main 0 64 0");
  }
});

// Botania rods only work when placed in avatars, not used manually
BlockEvents.rightClicked(function(event) {
  if (!event.item.hasTag("botania:rods")) return;

  // Allow inserting rods into avatars
  if (event.block.id === "botania:avatar") {
    event.server.runCommandSilent(
      `playsound minecraft:entity.glow_item_frame.add_item block @a ${event.block.x} ${event.block.y} ${event.block.z}`
    );
    return;
  }

  // Block manual rod use
  event.server.runCommandSilent(
    `playsound minecraft:block.fire.extinguish block @a ${event.player.x} ${event.player.y} ${event.player.z}`
  );
  event.server.runCommandSilent(
    `title ${event.player.name.string} actionbar ${Text.of("Your metallic grips can't even get a spark...").red().toJson()}`
  );
  event.player.addItemCooldown(event.item, 20);
  event.cancel();
});
