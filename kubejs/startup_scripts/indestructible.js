// Indestructible - Fire resistant items

const FIRE_RESISTANT_ITEMS = [
  "wares:delivery_agreement",
  "wares:completed_delivery_agreement",
  "wares:sealed_delivery_agreement",
  "create:brass_casing",
  "create:copper_casing",
  "create:andesite_casing",
  "ptdye:cobblestone_casing",
  "ptdye:redstone_casing",
  "create:controller_rail",
  "create:railway_casing",
];

ItemEvents.modification((event) => {
  FIRE_RESISTANT_ITEMS.forEach((id) => {
    event.modify(id, (item) => item.setFireResistant(true));
  });
  event.modify("#forge:indestructible", (item) => item.setFireResistant(true));
});
