//priority: 0
// Bulk Recycle Command - compacts device items into generic forms
// Usage: /bulkrecycle (keep 1 of each), /bulkrecycle all (keep none)

// Lazy-initialized map from global.DEVICE_GROUPS (defined in devices.js)
var DEVICE_GENERICS = null;

function getDeviceGenerics() {
  if (DEVICE_GENERICS === null) {
    DEVICE_GENERICS = {};
    var groupNames = Object.keys(global.DEVICE_GROUPS);
    for (var i = 0; i < groupNames.length; i++) {
      var group = global.DEVICE_GROUPS[groupNames[i]];
      // Extract device type from tag (e.g., "ptd:devices/sturdy_devices" -> "sturdy_devices")
      var tagParts = group.tag.split("/");
      if (tagParts.length === 2) {
        DEVICE_GENERICS[tagParts[1]] = group.generic;
      }
    }
  }
  return DEVICE_GENERICS;
}

function getDeviceType(item) {
  if (item.isEmpty()) return null;
  if (item.hasNBT()) return null;

  var tags = item.getTags().toArray();

  // Check for none_recycleable tag first
  for (var i = 0; i < tags.length; i++) {
    var tagStr = "" + tags[i];
    if (tagStr.indexOf("ptdye:none_recycleable") !== -1) {
      return null;
    }
  }

  for (var i = 0; i < tags.length; i++) {
    var tagStr = "" + tags[i];

    var slashIndex = tagStr.indexOf(" / ");
    if (slashIndex === -1) continue;

    var endIndex = tagStr.lastIndexOf("]");
    if (endIndex === -1) continue;

    var cleanTag = tagStr.substring(slashIndex + 3, endIndex);

    if (cleanTag.indexOf("ptd:devices/") === 0) {
      var deviceType = cleanTag.substring(12);
      if (deviceType === "generic_devices") continue;
      if (getDeviceGenerics()[deviceType]) {
        return deviceType;
      }
    }
  }

  return null;
}

function compactItems(player, keepOne) {
  var limit = keepOne ? 1 : 0;
  var tallies = {};
  var inventory = player.inventory.allItems.toArray();

  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var deviceType = getDeviceType(item);

    if (deviceType) {
      if (!tallies[deviceType]) {
        tallies[deviceType] = { count: 0, items: [], usedItems: {} };
      }
      tallies[deviceType].count += item.count;
      tallies[deviceType].items.push(item);
    }
  }

  var anySucceeded = false;
  var types = Object.keys(tallies);

  for (var t = 0; t < types.length; t++) {
    var deviceType = types[t];
    var tally = tallies[deviceType];
    var usedItems = {};
    var totalDevices = 0;

    for (var j = 0; j < tally.items.length; j++) {
      var item = tally.items[j];
      var itemId = item.id;

      if (!usedItems[itemId]) {
        usedItems[itemId] = { count: 0, name: item.displayName };
      }

      var individualLimit = usedItems[itemId].count > 0 ? 0 : limit;
      var available = item.count - individualLimit;

      if (available > 0) {
        totalDevices += available;
        usedItems[itemId].count += available;
        item.count = individualLimit;
      }
    }

    if (totalDevices > 0) {
      var usedText = [Text.of("Used items:\n").gray()];
      var usedIds = Object.keys(usedItems);

      for (var u = 0; u < usedIds.length; u++) {
        var usedItem = usedItems[usedIds[u]];
        if (usedItem.count === 0) continue;
        usedText.push(Text.of(usedItem.name).yellow());
        usedText.push(Text.of(" x ").gold());
        usedText.push(Text.of(usedItem.count).yellow());
        usedText.push(Text.of("\n"));
      }

      player.tell(Text.of([
        Text.of(totalDevices).yellow(),
        Text.of("x ").gold(),
        Text.of(deviceType).yellow(),
        Text.of(" devices created! ").gold(),
        Text.of("(").darkGray(),
        Text.of("used").gray().hover(Text.of(usedText)),
        Text.of(")").darkGray()
      ]));

      player.give(Item.of(getDeviceGenerics()[deviceType], totalDevices));
      anySucceeded = true;
    }
  }

  if (!anySucceeded) {
    player.displayClientMessage("Nothing to compact!", true);
  }
}

ServerEvents.commandRegistry(function(event) {
  var Commands = event.commands;

  event.register(
    Commands.literal("bulkrecycle")
      .executes(function(ctx) {
        try {
          compactItems(ctx.source.player, true);
        } catch (e) {
          console.log("[BulkRecycle] Error: " + e);
        }
        return 1;
      })
      .then(
        Commands.literal("all")
          .executes(function(ctx) {
            try {
              compactItems(ctx.source.player, false);
            } catch (e) {
              console.log("[BulkRecycle] Error: " + e);
            }
            return 1;
          })
      )
  );
});
