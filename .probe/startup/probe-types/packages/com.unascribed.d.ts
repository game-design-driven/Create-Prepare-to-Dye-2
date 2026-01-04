declare module "packages/com/unascribed/fabrication/interfaces/$SetItemDespawnAware" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetItemDespawnAware {

 "fabrication$setItemDespawnAware"(arg0: boolean): void
 "fabrication$isItemDespawnAware"(): boolean
}

export namespace $SetItemDespawnAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetItemDespawnAware$Type = ($SetItemDespawnAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetItemDespawnAware_ = $SetItemDespawnAware$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$NoHungerAdd" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NoHungerAdd {

 "setFabrication$noHungerHeal"(arg0: integer, arg1: float): void

(arg0: integer, arg1: float): void
}

export namespace $NoHungerAdd {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoHungerAdd$Type = ($NoHungerAdd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoHungerAdd_ = $NoHungerAdd$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$DidJustAbsorp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DidJustAbsorp {

 "fabrication$didJustAbsorp"(): boolean

(): boolean
}

export namespace $DidJustAbsorp {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DidJustAbsorp$Type = ($DidJustAbsorp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DidJustAbsorp_ = $DidJustAbsorp$Type;
}}
declare module "packages/com/unascribed/fabrication/mixin/e_mechanics/detecting_powered_rails/$AccessorDetectorRailBlock" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $AccessorDetectorRailBlock {

 "fabrication$getCarts"<T extends $AbstractMinecart>(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Class$Type<(T)>, arg3: $Predicate$Type<($Entity$Type)>): $List<(T)>

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Class$Type<(T)>, arg3: $Predicate$Type<($Entity$Type)>): $List<(T)>
}

export namespace $AccessorDetectorRailBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorDetectorRailBlock$Type = ($AccessorDetectorRailBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorDetectorRailBlock_ = $AccessorDetectorRailBlock$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$MarkWet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MarkWet {

 "fabrication$markWet"(): void

(): void
}

export namespace $MarkWet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkWet$Type = ($MarkWet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkWet_ = $MarkWet$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GetSuppressedSlots" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export interface $GetSuppressedSlots {

 "fabrication$getSuppressedSlots"(): $Set<($EquipmentSlot)>

(): $Set<($EquipmentSlot)>
}

export namespace $GetSuppressedSlots {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetSuppressedSlots$Type = ($GetSuppressedSlots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GetSuppressedSlots_ = $GetSuppressedSlots$Type;
}}
declare module "packages/com/unascribed/fabrication/mixin/b_utility/lenient_command_suggestions/$MixinCommandSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinCommandSource {

}

export namespace $MixinCommandSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinCommandSource$Type = ($MixinCommandSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinCommandSource_ = $MixinCommandSource$Type;
}}
declare module "packages/com/unascribed/fabrication/mixin/b_utility/rmb_clears_text_fields/$AccessorTextFieldWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorTextFieldWidget {

 "fabrication$clear$isEditable"(): boolean
 "fabrication$clear$getFocusUnlocked"(): boolean
}

export namespace $AccessorTextFieldWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTextFieldWidget$Type = ($AccessorTextFieldWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorTextFieldWidget_ = $AccessorTextFieldWidget$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GenerationSettingsAddEmeralds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GenerationSettingsAddEmeralds {

 "fabrication$addEmeralds"(): void

(): void
}

export namespace $GenerationSettingsAddEmeralds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationSettingsAddEmeralds$Type = ($GenerationSettingsAddEmeralds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationSettingsAddEmeralds_ = $GenerationSettingsAddEmeralds$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetCanHitList" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"

export interface $SetCanHitList {

 "fabrication$setCanHitLists"(arg0: $ListTag$Type, arg1: $ListTag$Type): void
 "fabrication$getCanHitList2"(): $ListTag
 "fabrication$getCanHitList"(): $ListTag
}

export namespace $SetCanHitList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetCanHitList$Type = ($SetCanHitList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetCanHitList_ = $SetCanHitList$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$RenderingAgeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderingAgeAccess {

 "fabrication$getRenderingAge"(): integer
 "fabrication$setRenderingAge"(arg0: integer): void
}

export namespace $RenderingAgeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderingAgeAccess$Type = ($RenderingAgeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderingAgeAccess_ = $RenderingAgeAccess$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$TaggablePlayer" {
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $TaggablePlayer {

 "fabrication$clearTags"(): void
 "fabrication$setTag"(arg0: string, arg1: boolean): void
 "fabrication$hasTag"(arg0: string): boolean
 "fabrication$getTags"(): $Set<(string)>
}

export namespace $TaggablePlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaggablePlayer$Type = ($TaggablePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaggablePlayer_ = $TaggablePlayer$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$TickSourceIFrames" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickSourceIFrames {

 "fabrication$tickSourceDependentIFrames"(): void

(): void
}

export namespace $TickSourceIFrames {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickSourceIFrames$Type = ($TickSourceIFrames);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickSourceIFrames_ = $TickSourceIFrames$Type;
}}
declare module "packages/com/unascribed/fabrication/support/$ConfigValues$ResolvedFeature" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfigValues$Feature, $ConfigValues$Feature$Type} from "packages/com/unascribed/fabrication/support/$ConfigValues$Feature"

export class $ConfigValues$ResolvedFeature extends $Enum<($ConfigValues$ResolvedFeature)> {
static readonly "TRUE": $ConfigValues$ResolvedFeature
static readonly "FALSE": $ConfigValues$ResolvedFeature
static readonly "DEFAULT_TRUE": $ConfigValues$ResolvedFeature
static readonly "DEFAULT_FALSE": $ConfigValues$ResolvedFeature
static readonly "BANNED": $ConfigValues$ResolvedFeature
readonly "value": boolean
readonly "feature": $ConfigValues$Feature


public static "values"(): ($ConfigValues$ResolvedFeature)[]
public static "valueOf"(name: string): $ConfigValues$ResolvedFeature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValues$ResolvedFeature$Type = (("default_true") | ("default_false") | ("true") | ("false") | ("banned")) | ($ConfigValues$ResolvedFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValues$ResolvedFeature_ = $ConfigValues$ResolvedFeature$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetPreZombified" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"

export interface $SetPreZombified {

 "fabrication$setPreZombifiedType"(arg0: $EntityType$Type<(any)>): void

(arg0: $EntityType$Type<(any)>): void
}

export namespace $SetPreZombified {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetPreZombified$Type = ($SetPreZombified);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetPreZombified_ = $SetPreZombified$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GhastAttackTime" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GhastAttackTime {

 "getAttackTime"(): integer

(): integer
}

export namespace $GhastAttackTime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhastAttackTime$Type = ($GhastAttackTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GhastAttackTime_ = $GhastAttackTime$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$ResupplyingFurnaceCart" {
import {$FurnaceResupplierFakeInventory, $FurnaceResupplierFakeInventory$Type} from "packages/com/unascribed/fabrication/util/$FurnaceResupplierFakeInventory"

export interface $ResupplyingFurnaceCart {

 "fabrication$getResupplyingFurnaceCart"(): $FurnaceResupplierFakeInventory

(): $FurnaceResupplierFakeInventory
}

export namespace $ResupplyingFurnaceCart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResupplyingFurnaceCart$Type = ($ResupplyingFurnaceCart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResupplyingFurnaceCart_ = $ResupplyingFurnaceCart$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$TagStrayArrow" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TagStrayArrow {

 "fabrication$firedByStray"(): void

(): void
}

export namespace $TagStrayArrow {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagStrayArrow$Type = ($TagStrayArrow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagStrayArrow_ = $TagStrayArrow$Type;
}}
declare module "packages/com/unascribed/fabrication/util/$FurnaceResupplierFakeInventory" {
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FurnaceResupplierFakeInventory extends $Entity implements $WorldlyContainer {
 "stack": $ItemStack
static "SLOTS": (integer)[]
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "wasTouchingWater": boolean
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "isInsidePortal": boolean
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "create_diesel_generators$turretPos": $BlockPos

constructor(world: $Level$Type)

public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "setChanged"(): void
public "getContainerSize"(): integer
public "getItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "stillValid"(player: $Player$Type): boolean
public "getSlotsForFace"(side: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(slot: integer, stack: $ItemStack$Type, dir: $Direction$Type): boolean
public "canTakeItemThroughFace"(slot: integer, stack: $ItemStack$Type, dir: $Direction$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "self"(): $Container
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "countItem"(arg0: $Item$Type): integer
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "clear"(): void
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public "clear"(ingredient: $Ingredient$Type): void
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "empty"(): boolean
get "containerSize"(): integer
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceResupplierFakeInventory$Type = ($FurnaceResupplierFakeInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnaceResupplierFakeInventory_ = $FurnaceResupplierFakeInventory$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$WasShoved" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WasShoved {

 "fabrication$wasShoved"(): boolean

(): boolean
}

export namespace $WasShoved {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WasShoved$Type = ($WasShoved);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WasShoved_ = $WasShoved$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetCrawling" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetCrawling {

 "fabrication$setCrawling"(arg0: boolean): void
 "fabrication$isCrawling"(): boolean
}

export namespace $SetCrawling {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetCrawling$Type = ($SetCrawling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetCrawling_ = $SetCrawling$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$PortalRenderFix" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PortalRenderFix {

 "fabrication$shouldRenderPortal"(): boolean
 "fabrication$getPortalRenderProgress"(arg0: float): float
}

export namespace $PortalRenderFix {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortalRenderFix$Type = ($PortalRenderFix);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortalRenderFix_ = $PortalRenderFix$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GetKillMessage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GetKillMessage {

 "fabrication$getKillMessage"(): string

(): string
}

export namespace $GetKillMessage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetKillMessage$Type = ($GetKillMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GetKillMessage_ = $GetKillMessage$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$ToggleableFurnaceCart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToggleableFurnaceCart {

 "fabrication$tgfc$setFuel"(arg0: integer): void
 "fabrication$tgfc$getPauseFuel"(): integer
}

export namespace $ToggleableFurnaceCart {
function get(o: any): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToggleableFurnaceCart$Type = ($ToggleableFurnaceCart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToggleableFurnaceCart_ = $ToggleableFurnaceCart$Type;
}}
declare module "packages/com/unascribed/fabrication/support/injection/$HijackReturn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HijackReturn {
static readonly "TRUE": $HijackReturn
static readonly "FALSE": $HijackReturn
static readonly "OPTIONAL_EMPTY": $HijackReturn
static readonly "NULL": $HijackReturn
 "object": any

constructor(object: any)

public static "of"(b: boolean): $HijackReturn
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HijackReturn$Type = ($HijackReturn);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HijackReturn_ = $HijackReturn$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetFromPlayerDeath" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetFromPlayerDeath {

 "fabrication$setFromPlayerDeath"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $SetFromPlayerDeath {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetFromPlayerDeath$Type = ($SetFromPlayerDeath);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetFromPlayerDeath_ = $SetFromPlayerDeath$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$ZombImmunizableEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombImmunizableEntity {

 "fabrication$isZombImmune"(): boolean
 "fabrication$setZombImmune"(arg0: boolean): void
}

export namespace $ZombImmunizableEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombImmunizableEntity$Type = ($ZombImmunizableEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombImmunizableEntity_ = $ZombImmunizableEntity$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetInvisNoGravReversible" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetInvisNoGravReversible {

 "fabrication$isInvisibilityReversible"(): boolean
 "fabrication$isNoGravityReversible"(): boolean
 "fabrication$setInvisibilityReversible"(arg0: boolean): void
 "fabrication$setNoGravityReversible"(arg0: boolean): void
}

export namespace $SetInvisNoGravReversible {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetInvisNoGravReversible$Type = ($SetInvisNoGravReversible);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetInvisNoGravReversible_ = $SetInvisNoGravReversible$Type;
}}
declare module "packages/com/unascribed/fabrication/support/$ConfigValues$Feature" {
import {$ConfigValues$ResolvedFeature, $ConfigValues$ResolvedFeature$Type} from "packages/com/unascribed/fabrication/support/$ConfigValues$ResolvedFeature"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigValues$Feature extends $Enum<($ConfigValues$Feature)> {
static readonly "UNSET": $ConfigValues$Feature
static readonly "TRUE": $ConfigValues$Feature
static readonly "FALSE": $ConfigValues$Feature
static readonly "BANNED": $ConfigValues$Feature
static readonly "vals_true_false": (string)[]
static readonly "vals_unset_true_false": (string)[]
static readonly "vals_unset_true_false_banned": (string)[]


public static "values"(): ($ConfigValues$Feature)[]
public static "valueOf"(name: string): $ConfigValues$Feature
public "resolve"(def: boolean): boolean
public static "parse"(s: string): $ConfigValues$Feature
public "resolveSemantically"(def: boolean): $ConfigValues$ResolvedFeature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValues$Feature$Type = (("true") | ("false") | ("banned") | ("unset")) | ($ConfigValues$Feature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValues$Feature_ = $ConfigValues$Feature$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GetPreZombified" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"

export interface $GetPreZombified {

 "fabrication$getPreZombifiedType"(): $EntityType<(any)>

(): $EntityType<(any)>
}

export namespace $GetPreZombified {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetPreZombified$Type = ($GetPreZombified);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GetPreZombified_ = $GetPreZombified$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetFabricationConfigAware" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetFabricationConfigAware {

 "fabrication$setReqVer"(arg0: integer): void
 "fabrication$getReqVer"(): integer
}

export namespace $SetFabricationConfigAware {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetFabricationConfigAware$Type = ($SetFabricationConfigAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetFabricationConfigAware_ = $SetFabricationConfigAware$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$GetServerConfig" {
import {$ConfigValues$ResolvedFeature, $ConfigValues$ResolvedFeature$Type} from "packages/com/unascribed/fabrication/support/$ConfigValues$ResolvedFeature"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $GetServerConfig {

 "fabrication$hasHandshook"(): boolean
 "fabrication$getLaunchId"(): long
 "fabrication$getServerBanned"(): $Set<(string)>
 "fabrication$getServerTrileanConfig"(): $Map<(string), ($ConfigValues$ResolvedFeature)>
 "fabrication$getServerStringConfig"(): $Map<(string), (string)>
 "fabrication$getServerVersion"(): string
 "fabrication$getServerFailedConfig"(): $Map<(string), (string)>
}

export namespace $GetServerConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetServerConfig$Type = ($GetServerConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GetServerConfig_ = $GetServerConfig$Type;
}}
declare module "packages/com/unascribed/fabrication/mixin/c_tweaks/no_sneak_bypass/$MixinVibrationListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MixinVibrationListener {

}

export namespace $MixinVibrationListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinVibrationListener$Type = ($MixinVibrationListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinVibrationListener_ = $MixinVibrationListener$Type;
}}
declare module "packages/com/unascribed/fabrication/interfaces/$SetActualBypassState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetActualBypassState {

 "fabrication$setActualBypassesStepOn"(): void

(): void
}

export namespace $SetActualBypassState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetActualBypassState$Type = ($SetActualBypassState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetActualBypassState_ = $SetActualBypassState$Type;
}}
declare module "packages/com/unascribed/fabrication/mixin/i_woina/old_sheep_shear/$AccessorSheepEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorSheepEntity {

}

export namespace $AccessorSheepEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSheepEntity$Type = ($AccessorSheepEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSheepEntity_ = $AccessorSheepEntity$Type;
}}
