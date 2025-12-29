//priority: 0
// Player Tweaks - player-related gameplay modifications

// Player invincibility - players cannot take damage except from void/kill
EntityEvents.hurt(function (event) {
  if (global.config_invincibility.get() && event.entity.player && !event.source.isBypassInvul()) {
    event.cancel();
  }
});

// =============================================================================
// HAND INTERACTIONS - Fill blocks directly with buckets
// =============================================================================

function fillBlockWithBucket(block, event) {
  var fluid;
  var amount = 1000;
  var heldItem = event.player.handSlots[0].id;

  if (heldItem === "minecraft:milk_bucket") {
    fluid = "minecraft:milk";
  } else {
    fluid = heldItem.replace("_bucket", "");
  }

  if (!event.player.isCreative()) {
    event.player.setMainHandItem("minecraft:bucket");
  }

  event.level.runCommandSilent(
    "playsound minecraft:item.bucket.empty block @a " +
      event.block.x + " " + event.block.y + " " + event.block.z + " 0.4 1.7"
  );

  block.mergeEntityData({
    Tanks: [
      {
        TankContent: {
          Amount: amount,
          FluidName: fluid,
        },
      },
    ],
  });
}

// Fill diesel engine with bucket
BlockEvents.rightClicked("createdieselgenerators:diesel_engine", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    fillBlockWithBucket(event.block, event);
    event.cancel();
  }
});

// Fill huge diesel engine with bucket
BlockEvents.rightClicked("createdieselgenerators:huge_diesel_engine", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    fillBlockWithBucket(event.block, event);
    event.cancel();
  }
});

// Fill spout with bucket
BlockEvents.rightClicked("create:spout", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    var amount = 1000;
    var fluid = heldItem.replace("_bucket", "");
    event.player.swing();

    Utils.server.runCommandSilent(
      "setblock " + event.block.x + " " + event.block.y + " " + event.block.z + " air"
    );
    Utils.server.runCommandSilent(
      "setblock " + event.block.x + " " + event.block.y + " " + event.block.z +
      " create:spout{Tanks:[{TankContent:{Amount:" + amount + ",FluidName:\"" + fluid + "\"}}]}"
    );

    if (!event.player.isCreative()) {
      event.player.setMainHandItem("minecraft:bucket");
    }
    event.cancel();
  }
});

// =============================================================================
// PET BETSY - Pet cows with empty hand, teleport back with command
// =============================================================================

// Pet cows with empty hand - stores last cow location
ItemEvents.entityInteracted("minecraft:air", function(event) {
  if (!event.player.mainHandItem.empty) return;
  if (event.player.persistentData.isEmpty()) return;
  if (event.target.type != "minecraft:cow") return;

  event.player.swing();
  event.player.persistentData.put("betsy_last_location_x", event.target.x);
  event.player.persistentData.put("betsy_last_location_z", event.target.z);
  Utils.server.runCommandSilent(
    "/particle minecraft:heart " + event.target.x + " " + (event.target.y + 1.5) + " " + event.target.z + " .25 .25 .25 .15 1"
  );
});

// =============================================================================
// MILK COOLDOWN - Cows can only be milked every 400 ticks (20 seconds)
// =============================================================================

function milkCow(event, currentTime) {
  var target = event.target;
  var player = event.player;

  target.persistentData.put("lastMilked", currentTime);

  var pitch = Math.random() + 0.8;
  Utils.server.runCommandSilent(
    "playsound minecraft:entity.cow.milk neutral @a " +
    target.x + " " + target.y + " " + target.z + " 1 " + pitch
  );

  if (player.mainHandItem.count === 1) {
    event.server.scheduleInTicks(1, function() {
      player.setMainHandItem("minecraft:milk_bucket");
    });
  } else {
    player.setMainHandItem(player.mainHandItem.withCount(player.mainHandItem.count - 1));
    player.give(Item.of("minecraft:milk_bucket"));
  }
}

ItemEvents.entityInteracted("minecraft:bucket", function(event) {
  if (event.target.type !== "minecraft:cow") return;

  var target = event.target;
  var player = event.player;
  var currentTime = target.level.time;

  // Advancement trigger for deployers (empty persistentData)
  if (player.persistentData.isEmpty()) {
    Utils.server.runCommandSilent("advancement grant " + player.name.string + " only ptd:milk");
  }

  player.swing();

  var lastMilked = target.persistentData.getLong("lastMilked");

  if (!lastMilked) {
    // First time milking this cow
    milkCow(event, currentTime);
    event.cancel();
  } else {
    var timeSinceLastMilked = currentTime - lastMilked;
    if (timeSinceLastMilked < 400) {
      // Cooldown not expired - show angry particles
      event.level.runCommandSilent(
        "/particle angry_villager " + target.x + " " + target.y + " " + target.z + " 0.3 0.7 0.3 1 4"
      );
      event.level.runCommandSilent(
        "/title " + player.displayName.string + " actionbar \"Betsy needs a break\""
      );
      event.cancel();
    } else {
      // Cooldown expired - milk the cow
      milkCow(event, currentTime);
      event.cancel();
    }
  }
});

