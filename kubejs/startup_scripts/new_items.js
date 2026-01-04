// Item registrations for Create: Prepare to Dye 2

StartupEvents.registry("item", (event) => {
  // Sequenced assembly intermediate items (no creative tab - intermediates)
  event.create("ptdye:incomplete_rail", "create:sequenced_assembly").unstackable();
  event
    .create("ptdye:incomplete_pancake", "create:sequenced_assembly")
    .food((food) => food.hunger(2).saturation(1))
    .unstackable();
  event
    .create("ptdye:incomplete_pizza", "create:sequenced_assembly")
    .food((food) => food.hunger(2).saturation(1))
    .unstackable();
  event
    .create("ptdye:pizza_base", "create:sequenced_assembly")
    .food((food) => food.hunger(1).saturation(1))
    .unstackable();

  event.create("ptdye:incomplete_sturdy_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_mechanical_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_sealed_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_smart_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_locomotive_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_logic_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_red_stringed_device", "create:sequenced_assembly");
  event.create("ptdye:incomplete_furnished_device", "create:sequenced_assembly");

  // Food items
  event
    .create("ptdye:fermented_blob")
    .tag("c:foods")
    .food((food) => {
      food.hunger(5).saturation(1.4).fastToEat().meat();
    });

  event
    .create("ptdye:tomato")
    .tag("c:foods")
    .tag("c:foods/vegetable")
    .food((food) => {
      food.hunger(3).saturation(1);
    });

  event
    .create("ptdye:pizza")
    .tag("c:foods")
    .food((food) => {
      food.hunger(3).saturation(1);
    });

  // Crafting components
  event.create("ptdye:orange_tubes");
  event.create("ptdye:tool_parts");

  event.create("ptdye:salt_granule");
  event.create("ptdye:salt");
  event.create("ptdye:salt_shaker");
  event.create("ptdye:shaker");
  // Device generic items (convertible to specialized devices via stonecutter)
  // event.create("ptdye:sturdy_device");
  // event.create("ptdye:mechanical_device");
  // event.create("ptdye:sealed_device");
  // event.create("ptdye:smart_device");
  // event.create("ptdye:locomotive_device");
  // event.create("ptdye:logic_device");
  // event.create("ptdye:red_stringed_device");
  // event.create("ptdye:furnished_device");

  // Tools and misc items
  event.create("ptdye:hammer").unstackable();

  // Animation anchors (anchor_set hidden via no tab addition)
  event.create("ptdye:animation_anchor").unstackable();
  event.create("ptdye:animation_anchor_set").unstackable().glow(true);
  
  // Trading platform items
  event
    .create("ptdye:trading_transceiver")
    .displayName(
      "United SPACE consumer union plus plus\u00ae Oscar-Delta\u2122 class Trading Platform\u00ae request transceiver"
    )
    .unstackable()
    .rarity("epic");
  event
    .create("ptdye:postage_stamp_transceiver")
    .displayName("Intergalactic Postage Stamp Transceiver")
    .unstackable()
    .rarity("epic");
});

// Add items to creative tabs
StartupEvents.modifyCreativeTab("minecraft:food_and_drinks", (event) => {
  event.add("ptdye:fermented_blob");
  event.add("ptdye:tomato");
  event.add("ptdye:pizza");
});

StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", (event) => {
  event.add("ptdye:hammer");
  event.add("ptdye:animation_anchor");
  event.add("ptdye:trading_transceiver");
  event.add("ptdye:postage_stamp_transceiver");
});

StartupEvents.modifyCreativeTab("minecraft:ingredients", (event) => {
  event.add("ptdye:orange_tubes");
  event.add("ptdye:tool_parts");
  // Device generics
  event.add("ptdye:sturdy_device");
  event.add("ptdye:mechanical_device");
  event.add("ptdye:sealed_device");
  event.add("ptdye:smart_device");
  event.add("ptdye:locomotive_device");
  event.add("ptdye:logic_device");
  event.add("ptdye:red_stringed_device");
  event.add("ptdye:furnished_device");
});

