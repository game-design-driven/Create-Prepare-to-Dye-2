// Stack Sizes - Modify max stack sizes for various items

ItemEvents.modification((event) => {
  const toolPatterns = [
    /.*_sword$/,
    /.*_shovel$/,
    /.*_pickaxe$/,
    /.*_axe$/,
    /.*_hoe$/,
  ];
  const armorPatterns = [
    /.*_helmet$/,
    /.*_chestplate$/,
    /.*_leggings$/,
    /.*_boots$/,
  ];

  toolPatterns
    .concat(armorPatterns)
    .forEach((pattern) => event.modify(pattern, (item) => item.setMaxStackSize(16)));

  event.modify("minecraft:bow", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:potion", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:oak_boat", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:enchanted_book", (item) => item.setMaxStackSize(16));
  event.modify("create:wrench", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:fishing_rod", (item) => item.setMaxStackSize(16));
  event.modify("minecraft:cake", (item) => item.setMaxStackSize(64));
  event.modify("minecraft:shulker_box", (item) => item.setMaxStackSize(8));
});
