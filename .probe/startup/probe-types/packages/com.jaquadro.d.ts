declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeRedstone" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeRedstone extends $ItemUpgrade {
readonly "type": $EnumUpgradeRedstone
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $EnumUpgradeRedstone$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRedstone$Type = ($ItemUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRedstone_ = $ItemUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawerPuller" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawerPuller extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerPuller$Type = ($ItemDrawerPuller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerPuller_ = $ItemDrawerPuller$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockController extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock, $IFramedSourceBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityController
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "togglePersonal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: string): void
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $EnumKeyType$Type): void
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Item$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$Type): void
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockController$Type = ($BlockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockController_ = $BlockController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IFramedMaterials, $IFramedMaterials$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials"

export class $MaterialData extends $BlockEntityDataShim implements $IFramedMaterials {

constructor(arg0: $IFramedMaterials$Type)
constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type)
constructor()

public "clear"(): void
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getMaterial"(arg0: $FrameMaterial$Type): $ItemStack
public "setMaterial"(arg0: $FrameMaterial$Type, arg1: $ItemStack$Type): void
public "allMatOpaque"(): boolean
public "getFrameBase"(): $ItemStack
public "getHostBlock"(): $ItemStack
public "getEffectiveSide"(): $ItemStack
public "getEffectiveFront"(): $ItemStack
public "getEffectiveTrim"(): $ItemStack
public "isMatOpaque"(arg0: $ItemStack$Type): boolean
public "setFrameBase"(arg0: $ItemStack$Type): void
public "setHostBlock"(arg0: $ItemStack$Type): void
public "setSide"(arg0: $ItemStack$Type): void
public "getSide"(): $ItemStack
public "getFront"(): $ItemStack
public "getTrim"(): $ItemStack
public "setFront"(arg0: $ItemStack$Type): void
public "setTrim"(arg0: $ItemStack$Type): void
get "empty"(): boolean
get "frameBase"(): $ItemStack
get "hostBlock"(): $ItemStack
get "effectiveSide"(): $ItemStack
get "effectiveFront"(): $ItemStack
get "effectiveTrim"(): $ItemStack
set "frameBase"(value: $ItemStack$Type)
set "hostBlock"(value: $ItemStack$Type)
set "side"(value: $ItemStack$Type)
get "side"(): $ItemStack
get "front"(): $ItemStack
get "trim"(): $ItemStack
set "front"(value: $ItemStack$Type)
set "trim"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialData$Type = ($MaterialData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialData_ = $MaterialData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeMagnet" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeMagnet extends $Enum<($EnumUpgradeMagnet)> implements $StringRepresentable {
static readonly "LEVEL1": $EnumUpgradeMagnet
static readonly "LEVEL2": $EnumUpgradeMagnet
static readonly "LEVEL3": $EnumUpgradeMagnet


public "toString"(): string
public static "values"(): ($EnumUpgradeMagnet)[]
public static "valueOf"(arg0: string): $EnumUpgradeMagnet
public "getLevel"(): integer
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeMagnet
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "level"(): integer
get "unlocalizedName"(): string
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeMagnet$Type = (("level1") | ("level3") | ("level2")) | ($EnumUpgradeMagnet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeMagnet_ = $EnumUpgradeMagnet$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeConversion" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeConversion extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeConversion$Type = ($ItemUpgradeConversion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeConversion_ = $ItemUpgradeConversion$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradePortability" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradePortability extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradePortability$Type = ($ItemUpgradePortability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradePortability_ = $ItemUpgradePortability$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerConfig {

 "getUnitsPerSlot"(): integer

(): integer
}

export namespace $IDrawerConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerConfig$Type = ($IDrawerConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerConfig_ = $IDrawerConfig$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeBalance" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeBalance extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeBalance$Type = ($ItemUpgradeBalance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeBalance_ = $ItemUpgradeBalance$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemFramedTrim" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemTrim, $ItemTrim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemTrim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFramedTrim extends $ItemTrim {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedTrim$Type = ($ItemFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedTrim_ = $ItemFramedTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave" {
import {$ControllerData, $ControllerData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData"
import {$MaterialData, $MaterialData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IDrawerAttributesGroupControl, $IDrawerAttributesGroupControl$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesGroupControl"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChameleonCapability, $ChameleonCapability$Type} from "packages/com/texelsaurus/minecraft/chameleon/capabilities/$ChameleonCapability"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$IItemRepository, $IItemRepository$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository"

export class $BlockEntitySlave extends $BaseBlockEntity implements $IDrawerGroup, $IControlGroup, $IFramedBlockEntity {
readonly "controllerData": $ControllerData
readonly "materialData": $MaterialData
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getGroupControllableAttributes"(arg0: $Player$Type): $IDrawerAttributesGroupControl
public "getCapability"<T>(arg0: $ChameleonCapability$Type<(T)>): T
public "getController"(): $BlockEntityController
public "getDrawerCount"(): integer
public "invalidateRemoteNode"(arg0: $INetworked$Type): void
public "addRemoteNode"(arg0: $INetworked$Type): boolean
public "isGroupValid"(): boolean
public "getAccessibleDrawerSlots"(): (integer)[]
public "isSoftBindingValid"(arg0: $BlockPos$Type, arg1: $IDrawerGroup$Type): boolean
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "validateRemoteNode"(arg0: $INetworked$Type): void
public "getDrawerGroup"(): $IDrawerGroup
public "getBoundControlGroup"(): $IControlGroup
public "getControllerPos"(): $BlockPos
public "getItemRepository"(): $IItemRepository
public "bindController"(arg0: $BlockPos$Type): void
public "setChanged"(): void
public "getDrawer"(arg0: integer): $IDrawer
public "hasMissingDrawers"(): boolean
get "controller"(): $BlockEntityController
get "drawerCount"(): integer
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerGroup"(): $IDrawerGroup
get "boundControlGroup"(): $IControlGroup
get "controllerPos"(): $BlockPos
get "itemRepository"(): $IItemRepository
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySlave$Type = ($BlockEntitySlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySlave_ = $BlockEntitySlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IDrawerCapabilityProvider" {
import {$ChameleonCapability, $ChameleonCapability$Type} from "packages/com/texelsaurus/minecraft/chameleon/capabilities/$ChameleonCapability"

export interface $IDrawerCapabilityProvider {

 "getCapability"<T>(arg0: $ChameleonCapability$Type<(T)>): T
}

export namespace $IDrawerCapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerCapabilityProvider$Type = ($IDrawerCapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerCapabilityProvider_ = $IDrawerCapabilityProvider$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IDrawerGeometry, $IDrawerGeometry$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumCompDrawer extends $Enum<($EnumCompDrawer)> implements $IDrawerGeometry, $StringRepresentable {
static readonly "OPEN1": $EnumCompDrawer
static readonly "OPEN2": $EnumCompDrawer
static readonly "OPEN3": $EnumCompDrawer


public "toString"(): string
public static "values"(): ($EnumCompDrawer)[]
public static "valueOf"(arg0: string): $EnumCompDrawer
public "getMetadata"(): integer
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public static "byOpenSlots"(arg0: integer): $EnumCompDrawer
public "getOpenSlots"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumCompDrawer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "metadata"(): integer
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "openSlots"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCompDrawer$Type = (("open1") | ("open2") | ("open3")) | ($EnumCompDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumCompDrawer_ = $EnumCompDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockMetaFacing, $BlockMetaFacing$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacing"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSized extends $BlockMetaFacing {
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSized$Type = ($BlockMetaFacingSized);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSized_ = $BlockMetaFacingSized$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/state/$IntegerSetProperty" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $IntegerSetProperty extends $Property<(integer)> {


public "getName"(arg0: integer): string
public "equals"(arg0: any): boolean
public static "create"(arg0: string, arg1: string): $IntegerSetProperty
public "getPossibleValues"(): $Collection<(integer)>
public "getValue"(arg0: string): $Optional<(integer)>
public "generateHashCode"(): integer
get "possibleValues"(): $Collection<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerSetProperty$Type = ($IntegerSetProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerSetProperty_ = $IntegerSetProperty$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MaterialData, $MaterialData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$MaterialData"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$UpgradeData, $UpgradeData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$CustomNameData, $CustomNameData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$CustomNameData"
import {$IProtectable, $IProtectable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$ChameleonCapability, $ChameleonCapability$Type} from "packages/com/texelsaurus/minecraft/chameleon/capabilities/$ChameleonCapability"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEntityDrawers extends $BaseBlockEntity implements $IDrawerGroup, $IProtectable, $INetworked, $IFramedBlockEntity {
 "blockState": $BlockState


public "getOwner"(): $UUID
public "setOwner"(arg0: $UUID$Type): boolean
public "supportsDirectControllerLink"(): boolean
public "dataPacketRequiresRenderUpdate"(): boolean
public "interactPutCurrentInventoryIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "interactPutCurrentItemIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "getCapability"<T>(arg0: $ChameleonCapability$Type<(T)>): T
public "entityInside"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
/**
 * 
 * @deprecated
 */
public "getDrawerCount"(): integer
public "onEntityLoad"(): void
public "isGroupValid"(): boolean
public "getDrawerCapacity"(): integer
public "getSecurityProvider"(): $ISecurityProvider
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: integer): integer
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: integer, arg3: $Player$Type): integer
public "clientUpdateCount"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "getAccessibleDrawerSlots"(): (integer)[]
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$Type): void
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public static "getDrawerAttributes"(arg0: $BlockEntityDrawers$Type): $IDrawerAttributes
public "getDrawerAttributes"(): $IDrawerAttributes
public "readPortable"(arg0: $CompoundTag$Type): void
public "setSecurityProvider"(arg0: $ISecurityProvider$Type): boolean
public "interactPutItemsIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "takeItemsFromSlot"(arg0: integer, arg1: integer, arg2: $Player$Type): $ItemStack
public "takeItemsFromSlot"(arg0: integer, arg1: integer): $ItemStack
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getEffectiveDrawerCapacity"(): integer
public "getRedstoneLevel"(): integer
public "pushItemsTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "validateBoundController"(): void
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "customName"(): $CustomNameData
public "getGroup"(): $IDrawerGroup
public static "getGroup"(arg0: $BlockEntityDrawers$Type): $IDrawerGroup
public "setChanged"(): void
public "upgrades"(): $UpgradeData
public "material"(): $MaterialData
/**
 * 
 * @deprecated
 */
public "getDrawer"(arg0: integer): $IDrawer
public "isRedstone"(): boolean
public "hasMissingDrawers"(): boolean
get "owner"(): $UUID
set "owner"(value: $UUID$Type)
get "drawerCount"(): integer
get "groupValid"(): boolean
get "drawerCapacity"(): integer
get "securityProvider"(): $ISecurityProvider
get "accessibleDrawerSlots"(): (integer)[]
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
get "drawerAttributes"(): $IDrawerAttributes
set "securityProvider"(value: $ISecurityProvider$Type)
get "effectiveDrawerCapacity"(): integer
get "redstoneLevel"(): integer
get "group"(): $IDrawerGroup
get "redstone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDrawers$Type = ($BlockEntityDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDrawers_ = $BlockEntityDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumKeyType extends $Enum<($EnumKeyType)> implements $StringRepresentable {
static readonly "DRAWER": $EnumKeyType
static readonly "CONCEALMENT": $EnumKeyType
static readonly "PERSONAL": $EnumKeyType
static readonly "QUANTIFY": $EnumKeyType
static readonly "SUSPEND": $EnumKeyType


public "toString"(): string
public static "values"(): ($EnumKeyType)[]
public static "valueOf"(arg0: string): $EnumKeyType
public "isEnabled"(): boolean
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumKeyType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "enabled"(): boolean
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumKeyType$Type = (("suspend") | ("quantify") | ("concealment") | ("drawer") | ("personal")) | ($EnumKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumKeyType_ = $EnumKeyType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerGeometry {

 "isHalfDepth"(): boolean
 "getDrawerCount"(): integer
}

export namespace $IDrawerGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGeometry$Type = ($IDrawerGeometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGeometry_ = $IDrawerGeometry$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedCompDrawers" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$IDrawerConfig, $IDrawerConfig$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockCompDrawers, $BlockCompDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockCompDrawers"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedCompDrawers extends $BlockCompDrawers implements $IFramedBlock {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $Supplier$Type<($IDrawerConfig$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedCompDrawers$Type = ($BlockFramedCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedCompDrawers_ = $BlockFramedCompDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemControllerIO" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemControllerIO extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemControllerIO$Type = ($ItemControllerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemControllerIO_ = $ItemControllerIO$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IDrawerAttributesGroupControl, $IDrawerAttributesGroupControl$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesGroupControl"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IControlGroup {

 "getGroupControllableAttributes"(arg0: $Player$Type): $IDrawerAttributesGroupControl
 "invalidateRemoteNode"(arg0: $INetworked$Type): void
 "addRemoteNode"(arg0: $INetworked$Type): boolean
 "isSoftBindingValid"(arg0: $BlockPos$Type, arg1: $IDrawerGroup$Type): boolean
 "getBoundRemoteNodes"(): $List<($INetworked)>
 "validateRemoteNode"(arg0: $INetworked$Type): void
 "getDrawerGroup"(): $IDrawerGroup
 "getBoundControlGroup"(): $IControlGroup
}

export namespace $IControlGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControlGroup$Type = ($IControlGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControlGroup_ = $IControlGroup$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedController" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockController, $BlockController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedController extends $BlockController implements $IFramedBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedController$Type = ($BlockFramedController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedController_ = $BlockFramedController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked" {
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $INetworked {

 "supportsDirectControllerLink"(): boolean
 "getBoundControlGroup"(): $IControlGroup
 "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
 "softBindControlGroup"(arg0: $IControlGroup$Type): void
 "canRecurseSearch"(): boolean
 "unbindControlGroup"(): void
 "scheduleValidation"(): void
}

export namespace $INetworked {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworked$Type = ($INetworked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworked_ = $INetworked$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeFillLevel" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeFillLevel extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeFillLevel$Type = ($ItemUpgradeFillLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeFillLevel_ = $ItemUpgradeFillLevel$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeVoid" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeVoid extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeVoid$Type = ($ItemUpgradeVoid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeVoid_ = $ItemUpgradeVoid$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LockAttribute extends $Enum<($LockAttribute)> {
static readonly "LOCK_POPULATED": $LockAttribute
static readonly "LOCK_EMPTY": $LockAttribute


public static "values"(): ($LockAttribute)[]
public static "valueOf"(arg0: string): $LockAttribute
public static "getBitfield"(arg0: $EnumSet$Type<($LockAttribute$Type)>): integer
public "getFlagValue"(): integer
public static "getEnumSet"(arg0: integer): $EnumSet<($LockAttribute)>
get "flagValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockAttribute$Type = (("lock_populated") | ("lock_empty")) | ($LockAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockAttribute_ = $LockAttribute$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockFramingTable" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DoubleBlockCombiner$BlockType, $DoubleBlockCombiner$BlockType$Type} from "packages/net/minecraft/world/level/block/$DoubleBlockCombiner$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$EnumFramingTablePart, $EnumFramingTablePart$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumFramingTablePart"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockFramingTable extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "PART": $EnumProperty<($EnumFramingTablePart)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getConnectedDirection"(arg0: $BlockState$Type): $Direction
public static "getTableDirection"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Direction
public static "getBlockType"(arg0: $BlockState$Type): $DoubleBlockCombiner$BlockType
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramingTable$Type = ($BlockFramingTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramingTable_ = $BlockFramingTable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawerKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawerKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerKey$Type = ($ItemDrawerKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerKey_ = $ItemDrawerKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesGroupControl" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributesGroupControl {

 "setItemLocked"(arg0: $EnumSet$Type<($LockAttribute$Type)>, arg1: $LockAttribute$Type, arg2: boolean): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSuspended"(arg0: boolean): boolean
 "toggleIsSuspended"(): boolean
 "toggleConcealed"(): boolean
 "toggleIsShowingQuantity"(): boolean
 "toggleItemLocked"(arg0: $EnumSet$Type<($LockAttribute$Type)>, arg1: $LockAttribute$Type): boolean
}

export namespace $IDrawerAttributesGroupControl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesGroupControl$Type = ($IDrawerAttributesGroupControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesGroupControl_ = $IDrawerAttributesGroupControl$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemSuspendKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSuspendKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSuspendKey$Type = ($ItemSuspendKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSuspendKey_ = $ItemSuspendKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup" {
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$ChameleonCapability, $ChameleonCapability$Type} from "packages/com/texelsaurus/minecraft/chameleon/capabilities/$ChameleonCapability"
import {$IDrawerCapabilityProvider, $IDrawerCapabilityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IDrawerCapabilityProvider"

export interface $IDrawerGroup extends $IDrawerCapabilityProvider {

 "getDrawerCount"(): integer
 "isGroupValid"(): boolean
 "getAccessibleDrawerSlots"(): (integer)[]
 "hasMissingDrawers"(): boolean
 "getDrawer"(arg0: integer): $IDrawer
 "getCapability"<T>(arg0: $ChameleonCapability$Type<(T)>): T
}

export namespace $IDrawerGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGroup$Type = ($IDrawerGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGroup_ = $IDrawerGroup$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemPersonalKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPersonalKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: string, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getSecurityProviderKey"(): string
get "enabled"(): boolean
get "securityProviderKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPersonalKey$Type = ($ItemPersonalKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPersonalKey_ = $ItemPersonalKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerData extends $BlockEntityDataShim {

constructor()

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "bind"(arg0: $BlockEntityController$Type): boolean
public "getController"(arg0: $BlockEntity$Type): $BlockEntityController
public "setNeedsValidation"(arg0: boolean): void
public "needsValidation"(): boolean
public "getCoord"(): $BlockPos
public "bindCoord"(arg0: $BlockPos$Type): boolean
get "coord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerData$Type = ($ControllerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerData_ = $ControllerData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockCompDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$IDrawerConfig, $IDrawerConfig$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockCompDrawers extends $BlockDrawers implements $INetworked, $IFramedSourceBlock {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $Supplier$Type<($IDrawerConfig$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompDrawers$Type = ($BlockCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCompDrawers_ = $BlockCompDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedTrim" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockTrim, $BlockTrim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockTrim"

export class $BlockFramedTrim extends $BlockTrim implements $EntityBlock, $IFramedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "canUseForRetrim"(): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedTrim$Type = ($BlockFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedTrim_ = $BlockFramedTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FaceSlotBlock extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties


public "rightAction"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): $InteractionResult
public "getFaceSlot"(arg0: $BlockState$Type, arg1: $BlockHitResult$Type): integer
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "leftAction"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): $InteractionResult
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$Type): void
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$Type = ($FaceSlotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock_ = $FaceSlotBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IPortable {

 "isHeavy"(arg0: $ItemStack$Type): boolean

(arg0: $ItemStack$Type): boolean
}

export namespace $IPortable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortable$Type = ($IPortable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPortable_ = $IPortable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock" {
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IFramedBlock {

 "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
 "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
}

export namespace $IFramedBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlock$Type = ($IFramedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlock_ = $IFramedBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IItemRepository$ItemRecord, $IItemRepository$ItemRecord$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemRepository {

 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getStoredItemCount"(arg0: $ItemStack$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$Type): integer
 "getItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getItemCapacity"(arg0: $ItemStack$Type): integer
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
}

export namespace $IItemRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$Type = ($IItemRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository_ = $IItemRepository$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$MagnetDim" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MagnetDim extends $Enum<($MagnetDim)> {
static readonly "HORIZONTAL": $MagnetDim
static readonly "UP": $MagnetDim
static readonly "DOWN": $MagnetDim


public static "values"(): ($MagnetDim)[]
public static "valueOf"(arg0: string): $MagnetDim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetDim$Type = (("horizontal") | ("up") | ("down")) | ($MagnetDim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetDim_ = $MagnetDim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IDrawerAttributesGroupControl, $IDrawerAttributesGroupControl$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesGroupControl"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChameleonCapability, $ChameleonCapability$Type} from "packages/com/texelsaurus/minecraft/chameleon/capabilities/$ChameleonCapability"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockController, $BlockController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IItemRepository, $IItemRepository$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository"

export class $BlockEntityController extends $BaseBlockEntity implements $IDrawerGroup, $IControlGroup, $IFramedBlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "dataPacketRequiresRenderUpdate"(): boolean
public "interactPutItemsIntoInventory"(arg0: $Player$Type): integer
public "getGroupControllableAttributes"(arg0: $Player$Type): $IDrawerAttributesGroupControl
public "getCapability"<T>(arg0: $ChameleonCapability$Type<(T)>): T
public "getDrawerCount"(): integer
public "invalidateRemoteNode"(arg0: $INetworked$Type): void
public "addRemoteNode"(arg0: $INetworked$Type): boolean
public "onEntityLoad"(): void
public "isGroupValid"(): boolean
public "getAccessibleDrawerSlots"(): (integer)[]
public "isSoftBindingValid"(arg0: $BlockPos$Type, arg1: $IDrawerGroup$Type): boolean
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "validateRemoteNode"(arg0: $INetworked$Type): void
public "getDrawerGroup"(): $IDrawerGroup
public "getBoundControlGroup"(): $IControlGroup
public "clearProtection"(): void
public "printDebugInfo"(): void
public "updateCache"(): void
public "toggleProtection"(arg0: $GameProfile$Type, arg1: $ISecurityProvider$Type): void
public "getGroupForDrawerSlot"(arg0: integer): $IDrawerGroup
public "getItemRepository"(): $IItemRepository
public "getBalanceDrawers"(arg0: $ItemStack$Type, arg1: $Player$Type): $Stream<($IDrawer)>
public "setRemoved"(): void
public "getDrawer"(arg0: integer): $IDrawer
public "readFixed"(arg0: $CompoundTag$Type): void
public "isValidIO"(arg0: $BlockPos$Type): boolean
public "getBlock"(): $BlockController
public "hasMissingDrawers"(): boolean
get "drawerCount"(): integer
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerGroup"(): $IDrawerGroup
get "boundControlGroup"(): $IControlGroup
get "itemRepository"(): $IItemRepository
get "block"(): $BlockController
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityController$Type = ($BlockEntityController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityController_ = $BlockEntityController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawers" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$IPortable, $IPortable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawers extends $BlockItem implements $IPortable {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "canFitInsideContainerItems"(): boolean
public "isHeavy"(arg0: $ItemStack$Type): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawers$Type = ($ItemDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawers_ = $ItemDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BlockType extends $Enum<($BlockType)> {
static readonly "Drawers": $BlockType
static readonly "Trim": $BlockType


public static "values"(): ($BlockType)[]
public static "valueOf"(arg0: string): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = (("drawers") | ("trim")) | ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$CustomNameData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $CustomNameData extends $BlockEntityDataShim {

constructor()

public "getName"(): string
public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "setName"(arg0: $Component$Type): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
get "name"(): string
set "name"(value: $Component$Type)
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomNameData$Type = ($CustomNameData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomNameData_ = $CustomNameData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKey extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKey$Type = ($ItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKey_ = $ItemKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemShroudKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemShroudKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShroudKey$Type = ($ItemShroudKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShroudKey_ = $ItemShroudKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials" {
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFramedMaterials {

 "getMaterial"(arg0: $FrameMaterial$Type): $ItemStack
 "setMaterial"(arg0: $FrameMaterial$Type, arg1: $ItemStack$Type): void
 "getHostBlock"(): $ItemStack
 "setHostBlock"(arg0: $ItemStack$Type): void
}

export namespace $IFramedMaterials {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedMaterials$Type = ($IFramedMaterials);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedMaterials_ = $IFramedMaterials$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IItemRepository$ItemRecord {
readonly "itemPrototype": $ItemStack
readonly "count": integer

constructor(arg0: $ItemStack$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$ItemRecord$Type = ($IItemRepository$ItemRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository$ItemRecord_ = $IItemRepository$ItemRecord$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockMeta extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMeta$Type = ($BlockMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMeta_ = $BlockMeta$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockStandardDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IDrawerConfig, $IDrawerConfig$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStandardDrawers extends $BlockDrawers implements $IFramedSourceBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $Supplier$Type<($IDrawerConfig$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "retrimBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "repartitionBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getNameMatKey"(): string
public "setMatKey"(arg0: $ResourceLocation$Type): $BlockStandardDrawers
public "setMatKey"(arg0: string): $BlockStandardDrawers
public "getMatKey"(): string
get "nameMatKey"(): string
set "matKey"(value: $ResourceLocation$Type)
set "matKey"(value: string)
get "matKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStandardDrawers$Type = ($BlockStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStandardDrawers_ = $BlockStandardDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumFramingTablePart" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumFramingTablePart extends $Enum<($EnumFramingTablePart)> implements $StringRepresentable {
static readonly "LEFT": $EnumFramingTablePart
static readonly "RIGHT": $EnumFramingTablePart


public "toString"(): string
public static "values"(): ($EnumFramingTablePart)[]
public static "valueOf"(arg0: string): $EnumFramingTablePart
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFramingTablePart$Type = (("left") | ("right")) | ($EnumFramingTablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFramingTablePart_ = $EnumFramingTablePart$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKeyring" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/texelsaurus/minecraft/chameleon/registry/$RegistryEntry"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKeyring extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $RegistryEntry$Type<(any)>, arg1: $Item$Properties$Type)

public static "add"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "getKey"(): $ItemStack
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
public static "getKeyring"(arg0: $ItemStack$Type): $ItemStack
get "key"(): $ItemStack
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKeyring$Type = ($ItemKeyring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKeyring_ = $ItemKeyring$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDetachedDrawer" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPortable, $IPortable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IPortable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDetachedDrawer extends $Item implements $IPortable {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getDescriptionId"(): string
public "getDefaultInstance"(): $ItemStack
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "canFitInsideContainerItems"(): boolean
public "isHeavy"(arg0: $ItemStack$Type): boolean
get "descriptionId"(): string
get "defaultInstance"(): $ItemStack
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetachedDrawer$Type = ($ItemDetachedDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDetachedDrawer_ = $ItemDetachedDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes" {
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributes {

 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isConcealed"(): boolean
 "isBalancedFill"(): boolean
 "hasFillLevel"(): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
 "isDictConvertible"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedVending"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "isHopper"(): boolean
 "isMagnet"(): boolean
 "isSuspended"(): boolean
}

export namespace $IDrawerAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributes$Type = ($IDrawerAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributes_ = $IDrawerAttributes$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockType, $BlockType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$IDrawerConfig, $IDrawerConfig$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$FaceSlotBlock, $FaceSlotBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock"

export class $BlockDrawers extends $FaceSlotBlock implements $INetworked, $EntityBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: $Supplier$Type<($IDrawerConfig$Type)>, arg3: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)

public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "retrimBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "repartitionBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "getStorageUnits"(): integer
public "getNameTypeKey"(): string
public "interactPullDrawer"(arg0: $FaceSlotBlock$InteractContext$Type): boolean
public "interactReturnDrawer"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: $ItemStack$Type): boolean
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$Type, arg1: boolean): $InteractionResult
public "retrimType"(): $BlockType
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "storageUnits"(): integer
get "nameTypeKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDrawers$Type = ($BlockDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDrawers_ = $BlockDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFramedSourceBlock {

 "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack

(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
}

export namespace $IFramedSourceBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedSourceBlock$Type = ($IFramedSourceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedSourceBlock_ = $IFramedSourceBlock$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedStandardDrawers" {
import {$BlockStandardDrawers, $BlockStandardDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockStandardDrawers"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockType, $BlockType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IDrawerConfig, $IDrawerConfig$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/config/$IDrawerConfig"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockFramedStandardDrawers extends $BlockStandardDrawers implements $IFramedBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $Supplier$Type<($IDrawerConfig$Type)>, arg3: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "retrimType"(): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedStandardDrawers$Type = ($BlockFramedStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedStandardDrawers_ = $BlockFramedStandardDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $BlockEntityDataShim {

constructor()

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "invalidateCaps"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDataShim$Type = ($BlockEntityDataShim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDataShim_ = $BlockEntityDataShim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IProtectable {

 "getOwner"(): $UUID
 "setOwner"(arg0: $UUID$Type): boolean
 "getSecurityProvider"(): $ISecurityProvider
 "setSecurityProvider"(arg0: $ISecurityProvider$Type): boolean
}

export namespace $IProtectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProtectable$Type = ($IProtectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProtectable_ = $IProtectable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlockEntity extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "read"(arg0: $CompoundTag$Type): void
public "dataPacketRequiresRenderUpdate"(): boolean
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "readPortable"(arg0: $CompoundTag$Type): void
public "hasDataPacket"(): boolean
public "injectPortableData"(arg0: $BlockEntityDataShim$Type): void
public "markBlockForRenderUpdate"(): void
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "markBlockForUpdate"(): void
public "markBlockForUpdateClient"(): void
public "getUpdateTag"(): $CompoundTag
public "load"(arg0: $CompoundTag$Type): void
public "injectData"(arg0: $BlockEntityDataShim$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeStorage extends $Enum<($EnumUpgradeStorage)> implements $StringRepresentable {
static readonly "OBSIDIAN": $EnumUpgradeStorage
static readonly "IRON": $EnumUpgradeStorage
static readonly "GOLD": $EnumUpgradeStorage
static readonly "DIAMOND": $EnumUpgradeStorage
static readonly "EMERALD": $EnumUpgradeStorage
static readonly "COPPER": $EnumUpgradeStorage
static readonly "NETHERITE": $EnumUpgradeStorage


public "toString"(): string
public static "values"(): ($EnumUpgradeStorage)[]
public static "valueOf"(arg0: string): $EnumUpgradeStorage
public "getLevel"(): integer
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeStorage
public static "byLevel"(arg0: integer): $EnumUpgradeStorage
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "level"(): integer
get "unlocalizedName"(): string
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeStorage$Type = (("gold") | ("obsidian") | ("diamond") | ("iron") | ("copper") | ("emerald") | ("netherite")) | ($EnumUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeStorage_ = $EnumUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockTrim" {
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockTrim extends $Block implements $INetworked, $IFramedSourceBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "getNameTypeKey"(): string
public "getNameMatKey"(): string
public "canUseForRetrim"(): boolean
public "setMatKey"(arg0: string): $BlockTrim
public "setMatKey"(arg0: $ResourceLocation$Type): $BlockTrim
public "getMatKey"(): string
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$Type): void
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
get "nameTypeKey"(): string
get "nameMatKey"(): string
set "matKey"(value: string)
set "matKey"(value: $ResourceLocation$Type)
get "matKey"(): string
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrim$Type = ($BlockTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrim_ = $BlockTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemQuantifyKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemQuantifyKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuantifyKey$Type = ($ItemQuantifyKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemQuantifyKey_ = $ItemQuantifyKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeRedstone extends $Enum<($EnumUpgradeRedstone)> implements $StringRepresentable {
static readonly "COMBINED": $EnumUpgradeRedstone
static readonly "MAX": $EnumUpgradeRedstone
static readonly "MIN": $EnumUpgradeRedstone


public "toString"(): string
public static "values"(): ($EnumUpgradeRedstone)[]
public static "valueOf"(arg0: string): $EnumUpgradeRedstone
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeRedstone
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "unlocalizedName"(): string
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeRedstone$Type = (("min") | ("max") | ("combined")) | ($EnumUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeRedstone_ = $EnumUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedOpen$Open2" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"

export class $BlockMetaFacingSizedOpen$Open2 extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$Open2$Type = ($BlockMetaFacingSizedOpen$Open2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedOpen$Open2_ = $BlockMetaFacingSizedOpen$Open2$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedOpen$Open3" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"

export class $BlockMetaFacingSizedOpen$Open3 extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$Open3$Type = ($BlockMetaFacingSizedOpen$Open3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedOpen$Open3_ = $BlockMetaFacingSizedOpen$Open3$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedSlotted$Slots124" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IntegerSetProperty, $IntegerSetProperty$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/state/$IntegerSetProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSizedSlotted$Slots124 extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerSetProperty
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Slots124$Type = ($BlockMetaFacingSizedSlotted$Slots124);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedSlotted$Slots124_ = $BlockMetaFacingSizedSlotted$Slots124$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeOneStack" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeOneStack extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeOneStack$Type = ($ItemUpgradeOneStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeOneStack_ = $ItemUpgradeOneStack$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgrade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getUpgradeGroup"(): integer
public "setAllowMultiple"(arg0: boolean): void
public "getAllowMultiple"(): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "enabled"(): boolean
get "upgradeGroup"(): integer
set "allowMultiple"(value: boolean)
get "allowMultiple"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemPriorityKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPriorityKey extends $ItemKey {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: integer, arg1: integer, arg2: $Item$Properties$Type)

public "isEnabled"(): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getNextKey"(): $ItemPriorityKey
get "enabled"(): boolean
get "nextKey"(): $ItemPriorityKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPriorityKey$Type = ($ItemPriorityKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPriorityKey_ = $ItemPriorityKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemFramedDrawers" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemDrawers, $ItemDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawers"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFramedDrawers extends $ItemDrawers {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedDrawers$Type = ($ItemFramedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedDrawers_ = $ItemFramedDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockSlave" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFramedSourceBlock, $IFramedSourceBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedSourceBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IControlGroup, $IControlGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IControlGroup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockEntitySlave, $BlockEntitySlave$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave"

export class $BlockSlave extends $Block implements $INetworked, $EntityBlock, $IFramedSourceBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntitySlave
public "getController"(arg0: $Level$Type, arg1: $BlockPos$Type): $BlockEntityController
public "makeFramedItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type): $ItemStack
public "supportsDirectControllerLink"(): boolean
public "getBoundControlGroup"(): $IControlGroup
public "getSoftBoundControlGroups"(): $Set<($IControlGroup)>
public "softBindControlGroup"(arg0: $IControlGroup$Type): void
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "scheduleValidation"(): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "boundControlGroup"(): $IControlGroup
get "softBoundControlGroups"(): $Set<($IControlGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSlave$Type = ($BlockSlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSlave_ = $BlockSlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeMagnet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EnumUpgradeMagnet, $EnumUpgradeMagnet$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeMagnet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeMagnet extends $ItemUpgrade {
readonly "type": $EnumUpgradeMagnet
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $EnumUpgradeMagnet$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getActiveSpeed"(): integer
public "getHorzRange"(): integer
public "getDownRange"(): integer
public "getIdleSpeed"(): integer
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getUpRange"(): integer
get "enabled"(): boolean
get "activeSpeed"(): integer
get "horzRange"(): integer
get "downRange"(): integer
get "idleSpeed"(): integer
get "description"(): $Component
get "upRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeMagnet$Type = ($ItemUpgradeMagnet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeMagnet_ = $ItemUpgradeMagnet$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeRemote" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeRemote extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: boolean, arg1: boolean, arg2: $Item$Properties$Type)

public "isEnabled"(): boolean
public "isGroupUpgrade"(): boolean
public static "copyControllerBinding"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public static "getBoundController"(arg0: $ItemStack$Type, arg1: $LevelAccessor$Type): $BlockEntityController
public static "validateInventory"(arg0: $Inventory$Type, arg1: $Level$Type): void
public static "getBoundPosition"(arg0: $ItemStack$Type): $BlockPos
public static "setBoundController"(arg0: $ItemStack$Type, arg1: $BlockEntityController$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "setUnbound"(arg0: $ItemStack$Type): $ItemStack
public "isBound"(): boolean
get "enabled"(): boolean
get "groupUpgrade"(): boolean
set "unbound"(value: $ItemStack$Type)
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRemote$Type = ($ItemUpgradeRemote);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRemote_ = $ItemUpgradeRemote$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeStorage" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnumUpgradeStorage, $EnumUpgradeStorage$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeStorage extends $ItemUpgrade {
readonly "level": $EnumUpgradeStorage
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $EnumUpgradeStorage$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
public "getDescription"(): $Component
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeStorage$Type = ($ItemUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeStorage_ = $ItemUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider" {
import {$IProtectable, $IProtectable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"

export interface $ISecurityProvider {

 "getProviderID"(): string
 "hasOwnership"(arg0: $GameProfile$Type, arg1: $IProtectable$Type): boolean
 "hasAccess"(arg0: $Player$Type, arg1: $IProtectable$Type): boolean
}

export namespace $ISecurityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityProvider$Type = ($ISecurityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityProvider_ = $ISecurityProvider$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FrameMaterial extends $Enum<($FrameMaterial)> implements $StringRepresentable {
static readonly "SIDE": $FrameMaterial
static readonly "TRIM": $FrameMaterial
static readonly "FRONT": $FrameMaterial


public static "values"(): ($FrameMaterial)[]
public static "valueOf"(arg0: string): $FrameMaterial
public "getSerializedName"(): string
public "getTagKey"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "tagKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameMaterial$Type = (("side") | ("trim") | ("front")) | ($FrameMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameMaterial_ = $FrameMaterial$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity" {
import {$IFramedMaterials, $IFramedMaterials$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedMaterials"

export interface $IFramedBlockEntity {

 "material"(): $IFramedMaterials

(): $IFramedMaterials
}

export namespace $IFramedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlockEntity$Type = ($IFramedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlockEntity_ = $IFramedBlockEntity$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedSlotted$Label" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSizedSlotted$Label extends $BlockMetaFacingSized {
static readonly "SLOT": $IntegerProperty
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Label$Type = ($BlockMetaFacingSizedSlotted$Label);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedSlotted$Label_ = $BlockMetaFacingSizedSlotted$Label$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeHopper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeHopper extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeHopper$Type = ($ItemUpgradeHopper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeHopper_ = $ItemUpgradeHopper$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDrawer {

 "isEmpty"(): boolean
 "copy"(): $IDrawer
 "getAttributes"(): $IDrawerAttributes
 "isEnabled"(): boolean
 "getAcceptingRemainingCapacity"(): integer
 "adjustStoredItemCount"(arg0: integer): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$Type): integer
 "canItemBeExtracted"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "canItemBeExtracted"(arg0: $ItemStack$Type): boolean
 "getMaxCapacity"(arg0: $ItemStack$Type): integer
 "getMaxCapacity"(): integer
 "setStoredItemCount"(arg0: integer): void
 "canItemBeStoredManual"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "getRemainingCapacity"(): integer
 "getStoredItemStackSize"(): integer
 "setDetached"(arg0: boolean): void
 "getStoredItemPrototype"(): $ItemStack
 "getStoredItemCount"(): integer
 "setStoredItem"(arg0: $ItemStack$Type, arg1: integer): $IDrawer
 "setStoredItem"(arg0: $ItemStack$Type): $IDrawer
 "canItemBeStored"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "canItemBeStored"(arg0: $ItemStack$Type): boolean
 "isMissing"(): boolean
 "canDetach"(): boolean
}

export namespace $IDrawer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawer$Type = ($IDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawer_ = $IDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$FaceSlotBlock$InteractContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FaceSlotBlock$InteractContext {
 "state": $BlockState
 "level": $Level
 "pos": $BlockPos
 "player": $Player
 "hit": $BlockHitResult
 "slot": integer

constructor(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type, arg5: integer)

public "getCheckedEntity"<BE extends $BlockEntity>(arg0: $Class$Type<(BE)>): BE
public "getCheckedEntity"<BE extends $BlockEntity, B extends $Block>(arg0: $Class$Type<(BE)>, arg1: $Class$Type<(B)>): BE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$InteractContext$Type = ($FaceSlotBlock$InteractContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock$InteractContext_ = $FaceSlotBlock$InteractContext$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/framed/$BlockFramedControllerIO" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IFramedBlockEntity, $IFramedBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFramedBlock, $IFramedBlock$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$IFramedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockSlave, $BlockSlave$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockSlave"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FrameMaterial, $FrameMaterial$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/framing/$FrameMaterial"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFramedControllerIO extends $BlockSlave implements $IFramedBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getFramedBlockEntity"(arg0: $Level$Type, arg1: $BlockPos$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$Type): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedControllerIO$Type = ($BlockFramedControllerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedControllerIO_ = $BlockFramedControllerIO$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$MagnetDim, $MagnetDim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$MagnetDim"
import {$IDrawerAttributesModifiable, $IDrawerAttributesModifiable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable"

export class $UpgradeData extends $BlockEntityDataShim {

constructor(arg0: integer)

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getSlotCount"(): integer
public "setDrawerAttributes"(arg0: $IDrawerAttributesModifiable$Type): void
public "getRemoteUpgrade"(): $ItemStack
public "unbindRemoteUpgrade"(): void
public "hasOneStackUpgrade"(): boolean
public "hasMagnetUpgrade"(): boolean
public "getMagnetRange"(arg0: $MagnetDim$Type): integer
public "getRedstoneType"(): $EnumUpgradeRedstone
public "hasbalancedFillUpgrade"(): boolean
public "hasVendingUpgrade"(): boolean
public "hasHopperUpgrade"(): boolean
public "hasEmptySlot"(): boolean
public "canSwapUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "canRemoveUpgrade"(arg0: integer): boolean
public "hasConversionUpgrade"(): boolean
public "hasIlluminationUpgrade"(): boolean
public "hasUnlimitedUpgrade"(): boolean
public "hasRemoteUpgrade"(): boolean
public "updateRemoteUpgradeBinding"(arg0: $ItemStack$Type): void
public "canAddUpgrade"(arg0: $ItemStack$Type): boolean
public "getStorageMultiplier"(): integer
public "hasPortabilityUpgrade"(): boolean
public "getMagnetIdleRate"(): integer
public "getMagnetActiveRate"(): integer
public "getUpgrade"(arg0: integer): $ItemStack
public "setUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "addUpgrade"(arg0: $ItemStack$Type): boolean
get "slotCount"(): integer
set "drawerAttributes"(value: $IDrawerAttributesModifiable$Type)
get "remoteUpgrade"(): $ItemStack
get "redstoneType"(): $EnumUpgradeRedstone
get "storageMultiplier"(): integer
get "magnetIdleRate"(): integer
get "magnetActiveRate"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable" {
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributesModifiable extends $IDrawerAttributes {

 "setPriority"(arg0: integer): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsBalancedFill"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsHopper"(arg0: boolean): boolean
 "setIsMagnet"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$Type, arg1: boolean): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSuspended"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isConcealed"(): boolean
 "isBalancedFill"(): boolean
 "hasFillLevel"(): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
 "isDictConvertible"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedVending"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "isHopper"(): boolean
 "isMagnet"(): boolean
 "isSuspended"(): boolean
}

export namespace $IDrawerAttributesModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesModifiable$Type = ($IDrawerAttributesModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesModifiable_ = $IDrawerAttributesModifiable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemTrim" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTrim extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTrim$Type = ($ItemTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTrim_ = $ItemTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeCreative" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeCreative extends $Enum<($EnumUpgradeCreative)> implements $StringRepresentable {
static readonly "STORAGE": $EnumUpgradeCreative
static readonly "VENDING": $EnumUpgradeCreative


public "toString"(): string
public static "values"(): ($EnumUpgradeCreative)[]
public static "valueOf"(arg0: string): $EnumUpgradeCreative
public "getUnlocalizedName"(): string
public "getMetadata"(): integer
public "getSerializedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeCreative
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "unlocalizedName"(): string
get "metadata"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeCreative$Type = (("vending") | ("storage")) | ($EnumUpgradeCreative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeCreative_ = $EnumUpgradeCreative$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSizedSlotted$Slots23" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$IntegerSetProperty, $IntegerSetProperty$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/state/$IntegerSetProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacingSized"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacingSizedSlotted$Slots23 extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerSetProperty
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$Slots23$Type = ($BlockMetaFacingSizedSlotted$Slots23);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedSlotted$Slots23_ = $BlockMetaFacingSizedSlotted$Slots23$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockKeyButton" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$FaceAttachedHorizontalDirectionalBlock"

export class $BlockKeyButton extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $EnumKeyType$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "press"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyButton$Type = ($BlockKeyButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKeyButton_ = $BlockKeyButton$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeIllumination" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeIllumination extends $ItemUpgrade {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeIllumination$Type = ($ItemUpgradeIllumination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeIllumination_ = $ItemUpgradeIllumination$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaFacing" {
import {$BlockMeta, $BlockMeta$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaFacing extends $BlockMeta {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "descriptionId": string
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacing$Type = ($BlockMetaFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacing_ = $BlockMetaFacing$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeCreative" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumUpgradeCreative, $EnumUpgradeCreative$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeCreative"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeCreative extends $ItemUpgrade {
readonly "type": $EnumUpgradeCreative
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $EnumUpgradeCreative$Type, arg1: $Item$Properties$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeCreative$Type = ($ItemUpgradeCreative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeCreative_ = $ItemUpgradeCreative$Type;
}}
