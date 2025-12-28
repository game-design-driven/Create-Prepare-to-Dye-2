//priority: 0
// Supplementaries - hide unwanted items and modify recipes

var SUPPLEMENTARIES_HIDDEN = [
  "supplementaries:flax_seeds",
  "supplementaries:flax",
  "supplementaries:sack",
  "supplementaries:rope",
  "supplementaries:bamboo_spikes",
  "supplementaries:bamboo_spikes_tipped",
];

ServerEvents.recipes(function(event) {
  // Remove recipes for hidden items
  for (var i = 0; i < SUPPLEMENTARIES_HIDDEN.length; i++) {
    event.remove({ output: SUPPLEMENTARIES_HIDDEN[i] });
  }

  // Doormat recipe - simpler version
  event.remove({ id: "supplementaries:doormat_2" });
  event.shaped("supplementaries:doormat", ["www"], { w: "#minecraft:wool" });
});

ServerEvents.tags("item", function(event) {
  for (var i = 0; i < SUPPLEMENTARIES_HIDDEN.length; i++) {
    event.removeAllTagsFrom(SUPPLEMENTARIES_HIDDEN[i]);
    event.add("c:hidden_from_recipe_viewers", SUPPLEMENTARIES_HIDDEN[i]);
    event.add("c:removed", SUPPLEMENTARIES_HIDDEN[i]);
  }
});
