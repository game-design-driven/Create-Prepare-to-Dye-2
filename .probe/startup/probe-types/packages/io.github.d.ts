declare module "packages/io/github/mortuusars/wares/data/agreement/$AgreementType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AgreementType extends $Enum<($AgreementType)> implements $StringRepresentable {
static readonly "NONE": $AgreementType
static readonly "SEALED": $AgreementType
static readonly "REGULAR": $AgreementType
static readonly "COMPLETED": $AgreementType
static readonly "EXPIRED": $AgreementType


public static "values"(): ($AgreementType)[]
public static "valueOf"(arg0: string): $AgreementType
public static "fromItemStack"(arg0: $ItemStack$Type): $AgreementType
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
export type $AgreementType$Type = (("expired") | ("sealed") | ("none") | ("completed") | ("regular")) | ($AgreementType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgreementType_ = $AgreementType$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement" {
import {$AgreementBuilder, $AgreementBuilder$Type} from "packages/io/github/mortuusars/wares/data/agreement/$AgreementBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RequestedItem, $RequestedItem$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $DeliveryAgreement {
static readonly "CODEC": $Codec<($DeliveryAgreement)>
static readonly "MAX_REQUESTED_STACKS": integer
static readonly "MAX_PAYMENT_STACKS": integer
static readonly "EMPTY": $DeliveryAgreement

constructor(arg0: string, arg1: $Component$Type, arg2: $Component$Type, arg3: $Component$Type, arg4: $Component$Type, arg5: string, arg6: $List$Type<($RequestedItem$Type)>, arg7: $List$Type<($ItemStack$Type)>, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: long, arg13: boolean, arg14: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "builder"(): $AgreementBuilder
public "getMessage"(): $Component
public "getId"(): string
public "isInfinite"(): boolean
public "complete"(): void
public "isCompleted"(): boolean
public "getDeliveryTime"(): integer
public "getDeliveryTimeOrDefault"(): integer
public "getRequested"(): $List<($RequestedItem)>
public "getExpireTimestamp"(): long
public "getIsExpired"(): boolean
public "addDelivered"(arg0: integer): void
public "setDelivered"(arg0: integer): void
public "getBuyerName"(): $Component
public "getBuyerAddress"(): $Component
public static "fromItemStack"(arg0: $ItemStack$Type): $Optional<($DeliveryAgreement)>
public "getDelivered"(): integer
public "toItemStack"(arg0: $ItemStack$Type): boolean
public "getExperience"(): integer
public "getTitle"(): $Component
public "isExpired"(arg0: long): boolean
public "getOrdered"(): integer
public "expire"(): void
public "getPayment"(): $List<($ItemStack)>
public "onDeliver"(): void
public "canExpire"(): boolean
public "canDeliver"(arg0: long): boolean
public "getSeal"(): string
get "empty"(): boolean
get "message"(): $Component
get "id"(): string
get "infinite"(): boolean
get "completed"(): boolean
get "deliveryTime"(): integer
get "deliveryTimeOrDefault"(): integer
get "requested"(): $List<($RequestedItem)>
get "expireTimestamp"(): long
set "delivered"(value: integer)
get "buyerName"(): $Component
get "buyerAddress"(): $Component
get "delivered"(): integer
get "experience"(): integer
get "title"(): $Component
get "ordered"(): integer
get "payment"(): $List<($ItemStack)>
get "seal"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreement$Type = ($DeliveryAgreement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreement_ = $DeliveryAgreement$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$CardboardBoxItem" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CardboardBoxItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardboardBoxItem$Type = ($CardboardBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardboardBoxItem_ = $CardboardBoxItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/entity/$DeliveryTableBlockEntity" {
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$DeliveryTableTrigger, $DeliveryTableTrigger$Type} from "packages/io/github/mortuusars/wares/advancement/$DeliveryTableTrigger"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $DeliveryTableBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
static readonly "SLOTS": integer
static readonly "AGREEMENT_SLOT": integer
static readonly "BOX_SLOT": integer
static readonly "AGREEMENT_SLOTS": (integer)[]
static readonly "AGREEMENT_PLUS_PACKAGES_SLOTS": (integer)[]
static readonly "INPUT_PLUS_AGREEMENT_PLUS_PACKAGES_SLOTS": (integer)[]
static readonly "INPUT_PLUS_PACKAGES_SLOTS": (integer)[]
static readonly "INPUT_SLOTS": (integer)[]
static readonly "OUTPUT_SLOTS": (integer)[]
static readonly "INPUT_PLUS_OUTPUT_SLOTS": (integer)[]
static readonly "PACKAGER_WORK_RADIUS": integer
static readonly "PACKAGER_LAST_WORK_THRESHOLD": integer
static readonly "CONTAINER_DATA_SIZE": integer
static readonly "CONTAINER_DATA_PROGRESS": integer
static readonly "CONTAINER_DATA_DURATION": integer
static readonly "CONTAINER_DATA_CAN_DELIVER_MANUALLY": integer
 "lockKey": $LockCode
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getBatchSize"(): integer
public "getPackagerWorker"(arg0: integer): $Optional<($Villager)>
public "triggerAdvancement"(arg0: $DeliveryTableTrigger$Type, arg1: $ServerPlayer$Type): void
public "startManualDelivery"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "invalidateCaps"(): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "getInventory"(): $IItemHandlerModifiable
public "trySetOwner"(arg0: $ServerPlayer$Type): boolean
public "getAgreementItem"(): $ItemStack
public "setAgreementItem"(arg0: $ItemStack$Type): void
public "isAgreementLocked"(): boolean
public "extractAgreementItem"(): $ItemStack
public "getAgreement"(): $DeliveryAgreement
public "shouldVoidAgreementOnBreak"(): boolean
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "reviveCaps"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "serverTick"(): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(): $CompoundTag
public "load"(arg0: $CompoundTag$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "onPlacedBy"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "tryClear"(arg0: any): void
get "batchSize"(): integer
get "inventory"(): $IItemHandlerModifiable
get "agreementItem"(): $ItemStack
set "agreementItem"(value: $ItemStack$Type)
get "agreementLocked"(): boolean
get "agreement"(): $DeliveryAgreement
get "containerSize"(): integer
get "empty"(): boolean
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "updateTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryTableBlockEntity$Type = ($DeliveryTableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryTableBlockEntity_ = $DeliveryTableBlockEntity$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$PackageItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PackageItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEatingSound"(): $SoundEvent
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageItem$Type = ($PackageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageItem_ = $PackageItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/advancement/$AgreementPredicate" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"

export class $AgreementPredicate {
static readonly "ANY": $AgreementPredicate

constructor(arg0: string, arg1: string, arg2: $MinMaxBounds$Ints$Type, arg3: $MinMaxBounds$Ints$Type, arg4: $MinMaxBounds$Ints$Type, arg5: $MinMaxBounds$Ints$Type)

public "matches"(arg0: $DeliveryAgreement$Type): boolean
public "serializeToJson"(): $JsonElement
public static "fromJson"(arg0: $JsonElement$Type): $AgreementPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgreementPredicate$Type = ($AgreementPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgreementPredicate_ = $AgreementPredicate$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem$AgreementError" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DeliveryAgreementItem$AgreementError extends $Enum<($DeliveryAgreementItem$AgreementError)> {
static readonly "NO_TAG": $DeliveryAgreementItem$AgreementError
static readonly "EMPTY": $DeliveryAgreementItem$AgreementError
static readonly "DAMAGED": $DeliveryAgreementItem$AgreementError


public static "values"(): ($DeliveryAgreementItem$AgreementError)[]
public static "valueOf"(arg0: string): $DeliveryAgreementItem$AgreementError
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreementItem$AgreementError$Type = (("no_tag") | ("damaged") | ("empty")) | ($DeliveryAgreementItem$AgreementError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreementItem$AgreementError_ = $DeliveryAgreementItem$AgreementError$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$CardboardBoxBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $CardboardBoxBlock extends $Block {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "BOXES": $IntegerProperty
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardboardBoxBlock$Type = ($CardboardBoxBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardboardBoxBlock_ = $CardboardBoxBlock$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/$AgreementBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RequestedItem, $RequestedItem$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem"

export class $AgreementBuilder {

constructor()

public "id"(arg0: string): $AgreementBuilder
public "message"(arg0: $Component$Type): $AgreementBuilder
public "build"(): $DeliveryAgreement
public "requested"(arg0: $List$Type<($RequestedItem$Type)>): $AgreementBuilder
public "ordered"(arg0: integer): $AgreementBuilder
public "buyerAddress"(arg0: $Component$Type): $AgreementBuilder
public "deliveryTime"(arg0: integer): $AgreementBuilder
public "addPaymentItem"(arg0: $ItemStack$Type): $AgreementBuilder
public "addRequestedItem"(arg0: $RequestedItem$Type): $AgreementBuilder
public "expireTime"(arg0: long): $AgreementBuilder
public "title"(arg0: $Component$Type): $AgreementBuilder
public "seal"(arg0: string): $AgreementBuilder
public "experience"(arg0: integer): $AgreementBuilder
public "payment"(arg0: $List$Type<($ItemStack$Type)>): $AgreementBuilder
public "delivered"(arg0: integer): $AgreementBuilder
public "buyerName"(arg0: $Component$Type): $AgreementBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgreementBuilder$Type = ($AgreementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgreementBuilder_ = $AgreementBuilder$Type;
}}
declare module "packages/io/github/mortuusars/wares/integration/kubejs/event/$DeliveryEventJS" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DeliveryTableBlockEntity, $DeliveryTableBlockEntity$Type} from "packages/io/github/mortuusars/wares/block/entity/$DeliveryTableBlockEntity"
import {$SimpleLevelEventJS, $SimpleLevelEventJS$Type} from "packages/dev/latvian/mods/kubejs/level/$SimpleLevelEventJS"

export class $DeliveryEventJS extends $SimpleLevelEventJS {

constructor(arg0: $DeliveryTableBlockEntity$Type, arg1: $ServerPlayer$Type)

public "getBlockEntity"(): $DeliveryTableBlockEntity
public "getPlayer"(): $ServerPlayer
get "blockEntity"(): $DeliveryTableBlockEntity
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryEventJS$Type = ($DeliveryEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryEventJS_ = $DeliveryEventJS$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$SealedDeliveryAgreementItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SealedDeliveryAgreementItem extends $Item {
static readonly "DAMAGED_TAG": string
static readonly "UNOPENABLE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getUseDuration"(arg0: $ItemStack$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getEatingSound"(): $SoundEvent
public "inspect"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SealedDeliveryAgreementItem$Type = ($SealedDeliveryAgreementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SealedDeliveryAgreementItem_ = $SealedDeliveryAgreementItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/advancement/$DeliveryTableTrigger" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DeliveryTableTrigger$TriggerInstance, $DeliveryTableTrigger$TriggerInstance$Type} from "packages/io/github/mortuusars/wares/advancement/$DeliveryTableTrigger$TriggerInstance"
import {$DeliveryTableBlockEntity, $DeliveryTableBlockEntity$Type} from "packages/io/github/mortuusars/wares/block/entity/$DeliveryTableBlockEntity"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$Type} from "packages/net/minecraft/advancements/critereon/$SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DeliveryTableTrigger extends $SimpleCriterionTrigger<($DeliveryTableTrigger$TriggerInstance)> {

constructor(arg0: $ResourceLocation$Type)

public "trigger"(arg0: $ServerPlayer$Type, arg1: $DeliveryTableBlockEntity$Type): void
public "getId"(): $ResourceLocation
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryTableTrigger$Type = ($DeliveryTableTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryTableTrigger_ = $DeliveryTableTrigger$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$DeliveryTableBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AgreementType, $AgreementType$Type} from "packages/io/github/mortuusars/wares/data/agreement/$AgreementType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DeliveryTableBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "AGREEMENT": $EnumProperty<($AgreementType)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryTableBlock$Type = ($DeliveryTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryTableBlock_ = $DeliveryTableBlock$Type;
}}
declare module "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$DeliveryAgreement, $DeliveryAgreement$Type} from "packages/io/github/mortuusars/wares/data/agreement/$DeliveryAgreement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$DeliveryAgreementItem$AgreementError, $DeliveryAgreementItem$AgreementError$Type} from "packages/io/github/mortuusars/wares/item/$DeliveryAgreementItem$AgreementError"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DeliveryAgreementItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public static "convertToExpired"(arg0: $ItemStack$Type): $ItemStack
public static "convertToCompleted"(arg0: $ItemStack$Type): $ItemStack
public "getAgreementFromStack"(arg0: $ItemStack$Type): $Either<($DeliveryAgreement), ($DeliveryAgreementItem$AgreementError)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryAgreementItem$Type = ($DeliveryAgreementItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryAgreementItem_ = $DeliveryAgreementItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/component/$RequestedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CompoundTagCompareBehavior, $CompoundTagCompareBehavior$Type} from "packages/io/github/mortuusars/wares/data/agreement/component/$CompoundTagCompareBehavior"

export class $RequestedItem {
static readonly "CODEC": $Codec<($RequestedItem)>
static readonly "EMPTY": $RequestedItem

constructor(arg0: $ItemStack$Type)
constructor(arg0: $Item$Type, arg1: integer)
constructor(arg0: $Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>, arg1: integer, arg2: $CompoundTag$Type, arg3: $CompoundTagCompareBehavior$Type)
constructor(arg0: $Either$Type<($TagKey$Type<($Item$Type)>), ($Item$Type)>, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $ItemStack$Type): boolean
public "getCount"(): integer
public "getTag"(): $CompoundTag
public "getTagCompareBehavior"(): $CompoundTagCompareBehavior
public "getTagOrItem"(): $Either<($TagKey<($Item)>), ($Item)>
public "matchesWithCount"(arg0: $ItemStack$Type): boolean
public "getStacks"(): $List<($ItemStack)>
public "tagMatches"(arg0: $ItemStack$Type): boolean
get "empty"(): boolean
get "count"(): integer
get "tag"(): $CompoundTag
get "tagCompareBehavior"(): $CompoundTagCompareBehavior
get "tagOrItem"(): $Either<($TagKey<($Item)>), ($Item)>
get "stacks"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RequestedItem$Type = ($RequestedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RequestedItem_ = $RequestedItem$Type;
}}
declare module "packages/io/github/mortuusars/wares/advancement/$DeliveryTableTrigger$TriggerInstance" {
import {$LocationPredicate, $LocationPredicate$Type} from "packages/net/minecraft/advancements/critereon/$LocationPredicate"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$DeliveryTableBlockEntity, $DeliveryTableBlockEntity$Type} from "packages/io/github/mortuusars/wares/block/entity/$DeliveryTableBlockEntity"
import {$AbstractCriterionTriggerInstance, $AbstractCriterionTriggerInstance$Type} from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import {$NbtPredicate, $NbtPredicate$Type} from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SerializationContext, $SerializationContext$Type} from "packages/net/minecraft/advancements/critereon/$SerializationContext"
import {$ContextAwarePredicate, $ContextAwarePredicate$Type} from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"
import {$AgreementPredicate, $AgreementPredicate$Type} from "packages/io/github/mortuusars/wares/advancement/$AgreementPredicate"

export class $DeliveryTableTrigger$TriggerInstance extends $AbstractCriterionTriggerInstance {

constructor(arg0: $ResourceLocation$Type, arg1: $ContextAwarePredicate$Type, arg2: $AgreementPredicate$Type, arg3: $NbtPredicate$Type, arg4: $LocationPredicate$Type)

public "matches"(arg0: $ServerPlayer$Type, arg1: $DeliveryTableBlockEntity$Type): boolean
public "serializeToJson"(arg0: $SerializationContext$Type): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeliveryTableTrigger$TriggerInstance$Type = ($DeliveryTableTrigger$TriggerInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeliveryTableTrigger$TriggerInstance_ = $DeliveryTableTrigger$TriggerInstance$Type;
}}
declare module "packages/io/github/mortuusars/wares/block/$PackageBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PackageBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_X": $VoxelShape
static readonly "SHAPE_Y": $VoxelShape
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

public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageBlock$Type = ($PackageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageBlock_ = $PackageBlock$Type;
}}
declare module "packages/io/github/mortuusars/wares/data/agreement/component/$CompoundTagCompareBehavior" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CompoundTagCompareBehavior extends $Enum<($CompoundTagCompareBehavior)> implements $StringRepresentable {
static readonly "IGNORE": $CompoundTagCompareBehavior
static readonly "WEAK": $CompoundTagCompareBehavior
static readonly "STRONG": $CompoundTagCompareBehavior


public static "values"(): ($CompoundTagCompareBehavior)[]
public static "valueOf"(arg0: string): $CompoundTagCompareBehavior
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
export type $CompoundTagCompareBehavior$Type = (("strong") | ("ignore") | ("weak")) | ($CompoundTagCompareBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundTagCompareBehavior_ = $CompoundTagCompareBehavior$Type;
}}
