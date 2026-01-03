declare module "packages/com/cak/pattern_schematics/foundation/mixin_accessors/$SchematicTableBlockEntityMixinAccessor" {
import {$SchematicUploadItemSource, $SchematicUploadItemSource$Type} from "packages/com/cak/pattern_schematics/foundation/$SchematicUploadItemSource"

export interface $SchematicTableBlockEntityMixinAccessor {

 "getSchematicSource"(): $SchematicUploadItemSource

(): $SchematicUploadItemSource
}

export namespace $SchematicTableBlockEntityMixinAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicTableBlockEntityMixinAccessor$Type = ($SchematicTableBlockEntityMixinAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicTableBlockEntityMixinAccessor_ = $SchematicTableBlockEntityMixinAccessor$Type;
}}
declare module "packages/com/cak/pattern_schematics/foundation/$SchematicUploadItemSource$SchematicItemFactory" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SchematicUploadItemSource$SchematicItemFactory {

 "create"(arg0: $Level$Type, arg1: string, arg2: string): $ItemStack

(arg0: $Level$Type, arg1: string, arg2: string): $ItemStack
}

export namespace $SchematicUploadItemSource$SchematicItemFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicUploadItemSource$SchematicItemFactory$Type = ($SchematicUploadItemSource$SchematicItemFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicUploadItemSource$SchematicItemFactory_ = $SchematicUploadItemSource$SchematicItemFactory$Type;
}}
declare module "packages/com/cak/pattern_schematics/foundation/$SchematicUploadItemSource" {
import {$SchematicUploadItemSource$SchematicItemFactory, $SchematicUploadItemSource$SchematicItemFactory$Type} from "packages/com/cak/pattern_schematics/foundation/$SchematicUploadItemSource$SchematicItemFactory"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $SchematicUploadItemSource extends $Enum<($SchematicUploadItemSource)> {
static readonly "DEFAULT": $SchematicUploadItemSource
static readonly "PATTERN": $SchematicUploadItemSource


public static "values"(): ($SchematicUploadItemSource)[]
public static "valueOf"(arg0: string): $SchematicUploadItemSource
public "getFactory"(): $SchematicUploadItemSource$SchematicItemFactory
public "getSchematicSourceItems"(): $List<($ItemEntry<(any)>)>
public static "tryFromItemStack"(arg0: $ItemStack$Type): $SchematicUploadItemSource
public "getNbtValue"(): integer
public static "tryFromInt"(arg0: integer): $SchematicUploadItemSource
get "factory"(): $SchematicUploadItemSource$SchematicItemFactory
get "schematicSourceItems"(): $List<($ItemEntry<(any)>)>
get "nbtValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicUploadItemSource$Type = (("default") | ("pattern")) | ($SchematicUploadItemSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicUploadItemSource_ = $SchematicUploadItemSource$Type;
}}
declare module "packages/com/cak/pattern_schematics/foundation/mixin_accessors/$MovementContextAccessor" {
import {$FilterItemStack, $FilterItemStack$Type} from "packages/com/simibubi/create/content/logistics/filter/$FilterItemStack"

export interface $MovementContextAccessor {

 "pattern_schematics$setFilter"(arg0: $FilterItemStack$Type): void

(arg0: $FilterItemStack$Type): void
}

export namespace $MovementContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementContextAccessor$Type = ($MovementContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementContextAccessor_ = $MovementContextAccessor$Type;
}}
declare module "packages/com/cak/pattern_schematics/content/item/$PatternSchematicItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SchematicItem, $SchematicItem$Type} from "packages/com/simibubi/create/content/schematics/$SchematicItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PatternSchematicItem extends $SchematicItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public static "create"(arg0: $Level$Type, arg1: string, arg2: string): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternSchematicItem$Type = ($PatternSchematicItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternSchematicItem_ = $PatternSchematicItem$Type;
}}
