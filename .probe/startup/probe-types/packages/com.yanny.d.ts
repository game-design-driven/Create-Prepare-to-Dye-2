declare module "packages/com/yanny/ali/mixin/$MixinBushBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $MixinBushBlock {

 "invokeMayPlaceOn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean

(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}

export namespace $MixinBushBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinBushBlock$Type = ($MixinBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinBushBlock_ = $MixinBushBlock$Type;
}}
declare module "packages/com/yanny/ali/lootjs/mixin/$MixinLootEntry" {
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootEntry$Generator, $LootEntry$Generator$Type} from "packages/com/almostreliable/lootjs/core/$LootEntry$Generator"
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export interface $MixinLootEntry {

 "getConditions"(): $List<($LootItemCondition)>
 "getPostModifications"(): $List<($LootItemFunction)>
 "getWeight"(): integer
 "getGenerator"(): $LootEntry$Generator
}

export namespace $MixinLootEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinLootEntry$Type = ($MixinLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinLootEntry_ = $MixinLootEntry$Type;
}}
declare module "packages/com/yanny/ali/lootjs/mixin/$MixinGroupedLootAction" {
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $MixinGroupedLootAction {

 "getNumberProvider"(): $NumberProvider

(): $NumberProvider
}

export namespace $MixinGroupedLootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinGroupedLootAction$Type = ($MixinGroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinGroupedLootAction_ = $MixinGroupedLootAction$Type;
}}
declare module "packages/com/yanny/ali/lootjs/mixin/$MixinCompositeLootAction" {
import {$ILootHandler, $ILootHandler$Type} from "packages/com/almostreliable/lootjs/core/$ILootHandler"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $MixinCompositeLootAction {

 "getHandlers"(): $Collection<($ILootHandler)>

(): $Collection<($ILootHandler)>
}

export namespace $MixinCompositeLootAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinCompositeLootAction$Type = ($MixinCompositeLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinCompositeLootAction_ = $MixinCompositeLootAction$Type;
}}
declare module "packages/com/yanny/ali/forge/mixin/$MixinLootTableForge" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"

export interface $MixinLootTableForge {

 "getPools"(): $List<($LootPool)>

(): $List<($LootPool)>
}

export namespace $MixinLootTableForge {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinLootTableForge$Type = ($MixinLootTableForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinLootTableForge_ = $MixinLootTableForge$Type;
}}
declare module "packages/com/yanny/ali/lootjs/mixin/$MixinWeightedRandomList" {
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$WeightedEntry, $WeightedEntry$Type} from "packages/net/minecraft/util/random/$WeightedEntry"

export interface $MixinWeightedRandomList<T extends $WeightedEntry> {

 "getTotalWeight"(): integer
 "getItems"(): $ImmutableList<(T)>
}

export namespace $MixinWeightedRandomList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinWeightedRandomList$Type<T> = ($MixinWeightedRandomList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinWeightedRandomList_<T> = $MixinWeightedRandomList$Type<(T)>;
}}
