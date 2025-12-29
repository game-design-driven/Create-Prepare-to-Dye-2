//priority: 0
// Client Tweaks - client-side event cancellations to match server-side handlers

// Glass bottle cannot fill from water source (server handles in block_tweaks.js)
ItemEvents.rightClicked("minecraft:glass_bottle", function(event) {
  if (event.target && event.target.block && event.target.block.id === "minecraft:water") {
    event.cancel();
  }
});

// Bucket interactions with diesel engine cancelled (server handles filling)
BlockEvents.rightClicked("createdieselgenerators:diesel_engine", function(event) {
  var heldItem = event.player.mainHandItem.id;
  if (heldItem.endsWith("_bucket")) {
    event.cancel();
  }
});

// Bucket interactions with huge diesel engine cancelled
BlockEvents.rightClicked("createdieselgenerators:huge_diesel_engine", function(event) {
  var heldItem = event.player.mainHandItem.id;
  if (heldItem.endsWith("_bucket")) {
    event.cancel();
  }
});

// Bucket interactions with spout cancelled (server handles filling)
BlockEvents.rightClicked("create:spout", function(event) {
  var heldItem = event.player.mainHandItem.id;
  if (heldItem.endsWith("_bucket")) {
    event.cancel();
  }
});

// Bucket entity interactions cancelled (server handles milk cooldown)
ItemEvents.entityInteracted("minecraft:bucket", function(event) {
  event.cancel();
});
