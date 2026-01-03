declare module "packages/appeng/parts/automation/$AnnihilationPlanePart" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PlaneConnections, $PlaneConnections$Type} from "packages/appeng/parts/automation/$PlaneConnections"
import {$AEBasePart, $AEBasePart$Type} from "packages/appeng/parts/$AEBasePart"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$Type<(any)>)

public "onEntityCollision"(arg0: $Entity$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "getModelData"(): $ModelData
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onUpdateShape"(arg0: $Direction$Type): void
public "getStaticModels"(): $IPartModel
public "getConnections"(): $PlaneConnections
public "getEnchantments"(): $Map<($Enchantment), (integer)>
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public static "getModels"(): $List<($IPartModel)>
public static "tryClear"(arg0: any): void
get "modelData"(): $ModelData
get "staticModels"(): $IPartModel
get "connections"(): $PlaneConnections
get "enchantments"(): $Map<($Enchantment), (integer)>
get "models"(): $List<($IPartModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$Type = ($AnnihilationPlanePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePart_ = $AnnihilationPlanePart$Type;
}}
declare module "packages/appeng/parts/automation/$AnnihilationPlanePartItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$PartItem, $PartItem$Type} from "packages/appeng/items/parts/$PartItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$Type} from "packages/appeng/parts/automation/$AnnihilationPlanePart"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "CALLING_DAMAGEABLE_FROM_ANVIL": $ThreadLocal<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "addToMainCreativeTab"(arg0: $CreativeModeTab$Output$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "getId"(arg0: $IPartItem$Type<(any)>): $ResourceLocation
public static "getNetworkId"(arg0: $IPartItem$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public static "byId"(arg0: $ResourceLocation$Type): $IPartItem<(any)>
public "asItem"(): $Item
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$Type = ($AnnihilationPlanePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePartItem_ = $AnnihilationPlanePartItem$Type;
}}
declare module "packages/appeng/parts/$ICableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ICableBusContainer {

 "isEmpty"(): boolean
 "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
 "onEntityCollision"(arg0: $Entity$Type): void
 "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
 "canConnectRedstone"(arg0: $Direction$Type): boolean
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getLightValue"(): integer
 "getRenderState"(): $CableBusRenderState
 "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
 "isProvidingStrongPower"(arg0: $Direction$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$Type): integer
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
 "isLadder"(arg0: $LivingEntity$Type): boolean
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$Type = ($ICableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBusContainer_ = $ICableBusContainer$Type;
}}
declare module "packages/appeng/parts/$CableBusContainer" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$ICableBusContainer, $ICableBusContainer$Type} from "packages/appeng/parts/$ICableBusContainer"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$Type} from "packages/appeng/helpers/$AEMultiBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$CableBusRenderState, $CableBusRenderState$Type} from "packages/appeng/client/render/cablebus/$CableBusRenderState"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "activate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "setHost"(arg0: $IPartHost$Type): void
public "isRequiresDynamicRender"(): boolean
public "markForUpdate"(): void
public "onEntityCollision"(arg0: $Entity$Type): void
public "removeFromWorld"(): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getBlockEntity"(): $BlockEntity
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "canConnectRedstone"(arg0: $Direction$Type): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "addPartDrops"(arg0: $List$Type<($ItemStack$Type)>): $List<($ItemStack)>
public "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
public "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
public "getLightValue"(): integer
public "getRenderState"(): $CableBusRenderState
public "removePartFromSide"(arg0: $Direction$Type): void
public "clearContainer"(): void
public "partChanged"(): void
public "notifyNeighborNow"(arg0: $Direction$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "onUpdateShape"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "isProvidingStrongPower"(arg0: $Direction$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$Type): integer
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "getGridNode"(arg0: $Direction$Type): $IGridNode
public "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
public "markForSave"(): void
public "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
public "getFacadeContainer"(): $IFacadeContainer
public "hasRedstone"(): boolean
public "notifyNeighbors"(): void
public "clearContent"(): void
public "updateConnections"(): void
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "getPart"(arg0: $Direction$Type): $IPart
public "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
public "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
public "removePart"(arg0: $IPart$Type): boolean
public "isBlocked"(arg0: $Direction$Type): boolean
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "isInWorld"(): boolean
public "getColor"(): $AEColor
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
set "host"(value: $IPartHost$Type)
get "requiresDynamicRender"(): boolean
get "blockEntity"(): $BlockEntity
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
get "color"(): $AEColor
get "shape"(): $VoxelShape
get "loading"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$Type = ($CableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusContainer_ = $CableBusContainer$Type;
}}
declare module "packages/appeng/parts/automation/$PlaneConnections" {
import {$List, $List$Type} from "packages/java/util/$List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isUp"(): boolean
public "isLeft"(): boolean
public "isRight"(): boolean
public "isDown"(): boolean
get "index"(): integer
get "up"(): boolean
get "left"(): boolean
get "right"(): boolean
get "down"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$Type = ($PlaneConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaneConnections_ = $PlaneConnections$Type;
}}
declare module "packages/appeng/parts/$AEBasePart" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BusSupport, $BusSupport$Type} from "packages/appeng/api/parts/$BusSupport"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ISegmentedInventory, $ISegmentedInventory$Type} from "packages/appeng/api/inventories/$ISegmentedInventory"
import {$CrashReportCategory, $CrashReportCategory$Type} from "packages/net/minecraft/$CrashReportCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IPartCollisionHelper, $IPartCollisionHelper$Type} from "packages/appeng/api/parts/$IPartCollisionHelper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IPartModel, $IPartModel$Type} from "packages/appeng/api/parts/$IPartModel"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable {

constructor(arg0: $IPartItem$Type<(any)>)

public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getLevel"(): $Level
public "getSide"(): $Direction
public "onPartActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onPlacement"(arg0: $Player$Type): void
public "onShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "onPartShiftActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "useStandardMemoryCard"(): boolean
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "setPartHostInfo"(arg0: $Direction$Type, arg1: $IPartHost$Type, arg2: $BlockEntity$Type): void
public "removeFromWorld"(): void
public "getActionableNode"(): $IGridNode
public "writeVisualStateToNBT"(arg0: $CompoundTag$Type): void
public "getMainNode"(): $IManagedGridNode
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "getBlockEntity"(): $BlockEntity
public "isMissingChannel"(): boolean
public "isClientSide"(): boolean
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
public "getPartItem"(): $IPartItem<(any)>
public "readVisualStateFromNBT"(arg0: $CompoundTag$Type): void
public "getCableConnectionLength"(arg0: $AECableType$Type): float
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "readFromStream"(arg0: $FriendlyByteBuf$Type): boolean
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type): void
public "addEntityCrashInfo"(arg0: $CrashReportCategory$Type): void
public "getGridNode"(): $IGridNode
public "getName"(): $Component
public "getCustomName"(): $Component
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "addToWorld"(): void
public "onActivate"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Vec3$Type): boolean
public "isPowered"(): boolean
public "getExternalCableConnectionType"(): $AECableType
public "onEntityCollision"(arg0: $Entity$Type): void
public "animateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
public "canConnectRedstone"(): boolean
public "getModelData"(): $ModelData
public "getLightLevel"(): integer
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "renderDynamic"(arg0: float, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: integer): void
public "onNeighborChanged"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
public "requireDynamicRender"(): boolean
public "onUpdateShape"(arg0: $Direction$Type): void
public "isProvidingStrongPower"(): integer
public "isProvidingWeakPower"(): integer
public "getExternalFacingNode"(): $IGridNode
public "onShiftClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "addPartDrop"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "addAdditionalDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: boolean): void
public "canBePlacedOn"(arg0: $BusSupport$Type): boolean
public "getStaticModels"(): $IPartModel
public "getDesiredConnectionType"(): $AECableType
public "clearContent"(): void
public "isLadder"(arg0: $LivingEntity$Type): boolean
public "onClicked"(arg0: $Player$Type, arg1: $Vec3$Type): boolean
public "isSolid"(): boolean
public "getBoxes"(arg0: $IPartCollisionHelper$Type): void
public "hasCustomName"(): boolean
public "getDisplayName"(): $Component
public static "tryClear"(arg0: any): void
get "host"(): $IPartHost
get "active"(): boolean
get "level"(): $Level
get "side"(): $Direction
get "actionableNode"(): $IGridNode
get "mainNode"(): $IManagedGridNode
get "blockEntity"(): $BlockEntity
get "missingChannel"(): boolean
get "clientSide"(): boolean
get "partItem"(): $IPartItem<(any)>
get "gridNode"(): $IGridNode
get "name"(): $Component
get "customName"(): $Component
get "powered"(): boolean
get "externalCableConnectionType"(): $AECableType
get "modelData"(): $ModelData
get "lightLevel"(): integer
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalFacingNode"(): $IGridNode
get "staticModels"(): $IPartModel
get "desiredConnectionType"(): $AECableType
get "solid"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$Type = ($AEBasePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePart_ = $AEBasePart$Type;
}}
