# KubeJS Scripts - Create: Prepare to Dye 2

Code conventions and patterns for this modpack's KubeJS scripts.

## File Header Format

Every script file should start with:

```javascript
//priority: N
//Create Prepare to Dye 2 - Short Description
```

**Priority values:**
- `100` - Config definitions (must load first)
- `1` - Standard recipes and features
- `0` - Player events, tweaks
- `-1` - Scripts that depend on other scripts running first

## File Organization

### Recipe Files by Type

Recipe files live in `server_scripts/recipes/`, named after their recipe type:
- `crushing.js` - Create crushing wheel recipes
- `milling.js` - Create millstone recipes
- `mixing.js` - Create mixer recipes
- `pressing.js` - Create press recipes
- `cutting.js` - Create saw recipes
etc...

### Systematic Logic in Separate Files or Other Specialized Files

When recipes follow a pattern or require special logic, extract them to dedicated files:
- `variants.js` - Color/wood/material variant generation (loops over variant lists)
- `trees.js` - Tree-related recipes across multiple types (mark with `// TREES -` comments)
- `manapool.js` - Mana pool automation recipes
- `potions.js` - Dynamic potion filling recipes
- `wood.js` - Log/wood conversion recipes
- `recipe_removals.js` - All `event.remove()` calls
- `tags.js` - All tag additions/removals
- `block_tweaks.js` - Block behavior modifications
- `player_tweaks.js` - Player event handlers
- `loot.js` - Loot table modifications
etc..


This allows `grep -r "MODNAME"` to find all related recipes across files.

## Using Config Values

Configs are defined in `startup_scripts/config.js`. Generated file: `config/create-prepare-to-dye-2.toml`.

**Adding a config entry** (in `startup_scripts/config.js`):
```javascript
// Inside an existing section (between push/pop)
event.comment("Description shown in the toml file");
global.config_myValue = event.intValue("myValue", 10, 1, 100);

// Available types:
// event.intValue(name, default, min, max)
// event.doubleValue(name, default, min, max)
// event.booleanValue(name, default)
```

**Using in server scripts:**
```javascript
let value = global.config_myValue.get();
```

## Comment Conventions

### Searchable Section Headers:
don't use box comments or other special formatting or symbols
```javascript
// SECTION NAME - searchable description
```

### Inline Comments
```javascript
// TODO: needs implementation
// FIXME: broken when X happens
// NOTE: important context for future readers
```

## Rhino JavaScript Limitations

KubeJS uses the Rhino JavaScript engine which has limited ES6 support. Avoid:

**Arrow functions with `.forEach()`:**
```javascript
// BAD - will fail
["a", "b", "c"].forEach((item) => { ... });
Object.entries(obj).forEach(([key, val]) => { ... });

// GOOD - use standard for loops
var items = ["a", "b", "c"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  ...
}

var keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var val = obj[key];
  ...
}
```

**Template literals with complex expressions:**
```javascript
// RISKY - may fail in some contexts
`minecraft:${ore}`

// SAFE - use string concatenation
"minecraft:" + ore
```

**`let` and `const`:**
```javascript
// RISKY - use var instead for maximum compatibility
let x = 1;
const Y = 2;

// SAFE
var x = 1;
var Y = 2;
```

**Note:** Arrow functions work in event handler registration (e.g., `ServerEvents.recipes((event) => {...})`) but fail when called on array methods.

## Code Style

### Variable Naming
```javascript
// Constants - UPPER_SNAKE_CASE
var DEVICE_GROUPS = { ... };
var EXTRA_PLAYER_ITEMS = [ ... ];

// Local variables - camelCase
var outputAmount = 8;
var fadingMult = global.config_fadingMultiplier.get();

// Config globals - config_ prefix
global.config_swimSpeed = event.doubleValue(...);
```

### Functions
```javascript
// Use descriptive names, never abbreviations, characters don't cost salt
function applyAutomatonAttributes(player) { ... }
function getExtraPlayerItems() { ... }
function fillBlockWithBucket(block, event) { ... }
```


## Adding Tooltips

Tooltips are defined in `client_scripts/tooltips.js`.

### Static Tooltips (lang file based)

Add item ID to `TOOLTIP_ITEMS` array:
```javascript
var TOOLTIP_ITEMS = [
  // ...
  "modid:item_name",
];
```

Lang key is auto-derived: `modid:item_name` -> `ptd.tooltip.modid.item_name`

Then add the lang entry:
```json
"ptd.tooltip.modid.item_name": "Your tooltip with _highlighted_ parts"
```

Text wrapped in `_underscores_` renders as gold, rest is gray. Shows on Shift.

For shared/custom lang keys, use `TOOLTIP_MAPPINGS` instead:
```javascript
var TOOLTIP_MAPPINGS = {
  "modid:item_name": "ptd.tooltip.custom.shared_key",
};
```

### Dynamic Tooltips (code based)

Add directly in `ItemEvents.tooltip()`:
```javascript
event.addAdvanced("modid:item_name", function(item, advanced, text) {
  if (shiftHint(text)) return;  // or ctrlHint(text, "Details")
  text.add(Text.gray("Your tooltip text"));
});
```

Use `shiftHint(text)` for Shift gating, `ctrlHint(text, "Label")` for Ctrl gating.

## Tips

1. **Test incrementally** - Add a few recipes, reload, verify
2. **Check logs** - `logs/kubejs/` for errors
3. **Use `/reload`** - Reloads server scripts without restart
4. **Use `/kubejs errors`** - Shows script errors in-game
5. **Prefer tags** - Use `#forge:ingots/iron` over `minecraft:iron_ingot` when possible
