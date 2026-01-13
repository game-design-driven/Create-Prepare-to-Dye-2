//priority: 0
// EMI/JEI - Item hiding and info page generation

var COLORS = [
  "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink",
  "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
];

// ITEM HIDING - hide colored variants to reduce clutter

JEIEvents.hideItems(function(event) {
  for (var i = 0; i < COLORS.length; i++) {
    var color = COLORS[i];

    // Valve handles - hide all
    event.hide("create:" + color + "_valve_handle");

    // Toolboxes - keep brown
    if (color !== "brown") {
      event.hide("create:" + color + "_toolbox");
    }

    // Seats - keep white
    if (color !== "white") {
      event.hide("create:" + color + "_seat");
    }

    // Beds - keep white
    if (color !== "white") {
      event.hide("minecraft:" + color + "_bed");
    }

    // Flags - keep white
    if (color !== "white") {
      event.hide("supplementaries:flag_" + color);
    }

    // Banners - keep white
    if (color !== "white") {
      event.hide("minecraft:" + color + "_banner");
    }

    // Stools - keep white
    if (color !== "white") {
      event.hide("quark:" + color + "_stool");
    }

    // Candles - hide all
    event.hide("minecraft:" + color + "_candle");

    // Shulker boxes - hide all
    event.hide("minecraft:" + color + "_shulker_box");

    // Candle holders - hide all
    event.hide("supplementaries:candle_holder_" + color);
  }
});

// INFO PAGE GENERATION - auto-generates EMI info recipes for items with .emi.info translations

ClientEvents.lang("en_us", function(event) {
  var infoPages = {};
  var itemIds = Ingredient.all.itemIds.toArray();

  for (var i = 0; i < itemIds.length; i++) {
    var id = itemIds[i];
    var key = Item.of(id).descriptionId + ".emi.info";
    var translated = Text.translate(key).string;

    if (translated !== key) {
      infoPages[id] = {
        type: "emi:info",
        stacks: ["item:" + id],
        text: key
      };
    }
  }

  var pageIds = Object.keys(infoPages);
  for (var i = 0; i < pageIds.length; i++) {
    var id = pageIds[i];
    var filename = "kubejs/assets/emi/recipe/additions/generated." + id.replace(":", ".") + ".json";
    JsonIO.write(filename, infoPages[id]);
  }

  console.info("[EMI] Generated " + pageIds.length + " info pages");
});
