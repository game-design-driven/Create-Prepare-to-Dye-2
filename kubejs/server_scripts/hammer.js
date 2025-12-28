//priority: 0
// Hammer - Device deconstruction and block pickup

function hammerGetGenericDevice(block) {
  // Get the item form of this block to check item tags
  var blockItem = Item.of(block.id);
  if (blockItem.isEmpty()) return null;

  // Find device tag on this item (ptd:devices/* but not ptd:devices/generics)
  var itemTags = blockItem.getTags().toArray();
  var deviceTag = null;

  for (var i = 0; i < itemTags.length; i++) {
    var tag = itemTags[i].location().toString();
    if (tag.startsWith("ptd:devices/") && tag !== "ptd:devices/generics") {
      deviceTag = tag;
      break;
    }
  }

  if (!deviceTag) return null;

  // Find item that has both this device tag AND generics tag
  var generics = Ingredient.of("#ptd:devices/generics").stacks.toArray();
  for (var i = 0; i < generics.length; i++) {
    if (generics[i].hasTag(deviceTag)) {
      return generics[i].id;
    }
  }

  return null;
}

function hammerBreakDevice(block, player) {
  var generic = hammerGetGenericDevice(block);
  if (!generic) return false;

  var x = block.x;
  var y = block.y;
  var z = block.z;

  // Give extra drops (not the block itself)
  var drops = block.getDrops();
  if (drops.size() > 1) {
    drops.removeIf(function(drop) { return drop.is(block.id); });
    for (var i = 0; i < drops.size(); i++) {
      player.give(drops.get(i));
    }
  }

  player.give(generic);
  block.set("air");

  player.level.runCommandSilent(
    "playsound ptdye:hammer player @a[dx=1,dy=1,dz=1] " + x + " " + y + " " + z + " 1 1 .3"
  );
  player.level.runCommandSilent(
    "particle minecraft:wax_off " + x + " " + (y + 0.5) + " " + z + " .25 .25 .25 .15 25"
  );

  return true;
}

// Hammer right-click: deconstruct device blocks
BlockEvents.rightClicked(function(event) {
  var item = event.player.getMainHandItem();
  if (item.id !== "ptdye:hammer") return;
  if (!event.player.getOffHandItem().isEmpty()) return;

  var block = event.block;
  if (hammerBreakDevice(block, event.player)) {
    event.player.swing();
    event.cancel();
  }
});

// Hammer block break: deconstruct device OR pick up drops
BlockEvents.broken(function(event) {
  var item = event.player.getMainHandItem();
  if (item.id !== "ptdye:hammer") return;
  if (!event.player.getOffHandItem().isEmpty()) return;

  var block = event.block;

  // Try device deconstruction first
  if (hammerBreakDevice(block, event.player)) {
    event.cancel();
    return;
  }

  // Otherwise pick up all drops directly
  if (!event.player.creative) {
    block.getDrops(event.player, item).forEach(function(drop) {
      event.player.give(drop);
    });
    block.set("minecraft:air");
    event.cancel();
  }
});
