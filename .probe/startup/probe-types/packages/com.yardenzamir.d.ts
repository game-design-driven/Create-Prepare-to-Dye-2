declare module "packages/com/yardenzamir/simchat/condition/$TeamContext" {
import {$TeamData, $TeamData$Type} from "packages/com/yardenzamir/simchat/team/$TeamData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TeamContext {

constructor(arg0: $TeamData$Type)

public static "of"(arg0: $TeamData$Type): $TeamContext
public "getId"(): string
public "getMemberCount"(): integer
public "getData"(arg0: string): any
public "getData"(): $Map<(string), (any)>
public "getTitle"(): string
public "getColor"(): integer
public "hasData"(arg0: string): boolean
get "id"(): string
get "memberCount"(): integer
get "data"(): $Map<(string), (any)>
get "title"(): string
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamContext$Type = ($TeamContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamContext_ = $TeamContext$Type;
}}
declare module "packages/com/yardenzamir/simchat/condition/$EntityContext" {
import {$TeamData, $TeamData$Type} from "packages/com/yardenzamir/simchat/team/$TeamData"

export class $EntityContext {

constructor(arg0: $TeamData$Type, arg1: string)

public static "of"(arg0: $TeamData$Type, arg1: string): $EntityContext
public "getId"(): string
public "getDisplayName"(): string
public "getSubtitle"(): string
public "getMessageCount"(): integer
public "getLastMessage"(): string
public "isTyping"(): boolean
public "getImageId"(): string
get "id"(): string
get "displayName"(): string
get "subtitle"(): string
get "messageCount"(): integer
get "lastMessage"(): string
get "typing"(): boolean
get "imageId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityContext$Type = ($EntityContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityContext_ = $EntityContext$Type;
}}
declare module "packages/com/yardenzamir/simchat/data/$ChatMessage" {
import {$ChatAction, $ChatAction$Type} from "packages/com/yardenzamir/simchat/data/$ChatAction"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MessageType, $MessageType$Type} from "packages/com/yardenzamir/simchat/data/$MessageType"
import {$ChatAction$ActionItem, $ChatAction$ActionItem$Type} from "packages/com/yardenzamir/simchat/data/$ChatAction$ActionItem"

export class $ChatMessage {


public "type"(): $MessageType
public "timestamp"(): long
public "actions"(): $List<($ChatAction)>
public "content"(): string
public static "systemMessage"(arg0: string, arg1: string, arg2: long): $ChatMessage
public "senderSubtitle"(): string
public "transactionInput"(): $List<($ChatAction$ActionItem)>
public "transactionOutput"(): $List<($ChatAction$ActionItem)>
public "senderImageId"(): string
public static "transactionMessage"(arg0: string, arg1: long, arg2: $List$Type<($ChatAction$ActionItem$Type)>, arg3: $List$Type<($ChatAction$ActionItem$Type)>): $ChatMessage
public "isPlayerMessage"(): boolean
public "isSystemMessage"(): boolean
public "isEntityMessage"(): boolean
public "withoutActions"(): $ChatMessage
public "playerUuid"(): $UUID
public "entityId"(): string
public "senderName"(): string
public static "fromPlayer"(arg0: string, arg1: $UUID$Type, arg2: string, arg3: string, arg4: string, arg5: long): $ChatMessage
public "toNbt"(): $CompoundTag
public static "fromNbt"(arg0: $CompoundTag$Type): $ChatMessage
public "worldDay"(): long
public static "fromEntity"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: long, arg6: $List$Type<($ChatAction$Type)>): $ChatMessage
get "playerMessage"(): boolean
get "entityMessage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatMessage$Type = ($ChatMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatMessage_ = $ChatMessage$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlockEntity$RecipeDisplay" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CommunicationRelayBlockEntity$RecipeDisplay extends $Record {

constructor(inputs: $List$Type<(string)>, outputs: $List$Type<(string)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "inputs"(): $List<(string)>
public "outputs"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationRelayBlockEntity$RecipeDisplay$Type = ($CommunicationRelayBlockEntity$RecipeDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationRelayBlockEntity$RecipeDisplay_ = $CommunicationRelayBlockEntity$RecipeDisplay$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlock$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CommunicationRelayBlock$State extends $Enum<($CommunicationRelayBlock$State)> implements $StringRepresentable {
static readonly "OFF": $CommunicationRelayBlock$State
static readonly "ON": $CommunicationRelayBlock$State
static readonly "HAS_CHANNEL": $CommunicationRelayBlock$State


public static "values"(): ($CommunicationRelayBlock$State)[]
public static "valueOf"(arg0: string): $CommunicationRelayBlock$State
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
export type $CommunicationRelayBlock$State$Type = (("has_channel") | ("off") | ("on")) | ($CommunicationRelayBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationRelayBlock$State_ = $CommunicationRelayBlock$State$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/item/$PersonalWirelessTerminalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ICurioItem, $ICurioItem$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurioItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$WirelessTerminalItem, $WirelessTerminalItem$Type} from "packages/appeng/items/tools/powered/$WirelessTerminalItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PersonalWirelessTerminalItem extends $WirelessTerminalItem implements $ICurioItem {
static readonly "LINKABLE_HANDLER": $IGridLinkableHandler
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Item$Properties$Type)

public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "canEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "hasPower"(arg0: $Player$Type, arg1: double, arg2: $ItemStack$Type): boolean
public "usePower"(arg0: $Player$Type, arg1: double, arg2: $ItemStack$Type): boolean
public "canUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer, arg4: $ItemStack$Type): integer
public "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type, arg2: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: string, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type, arg2: $ItemStack$Type): boolean
public "canWalkOnPowderedSnow"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type, arg2: $ItemStack$Type): integer
/**
 * 
 * @deprecated
 */
public "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
public "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
public "hasCurioCapability"(arg0: $ItemStack$Type): boolean
public "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getTagsTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
public "onEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "playRightClickEquipSound"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "getEquipSound"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $ICurio$SoundInfo
public "canEquipFromUse"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canRightClickEquip"(arg0: $ItemStack$Type): boolean
public "writeSyncData"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
public "writeSyncData"(arg0: $ItemStack$Type): $CompoundTag
public "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "readSyncData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): $ICurio$DropRule
public "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>, arg1: $ItemStack$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "showAttributesTooltip"(arg0: string, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canEquip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "canUnequip"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
public "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "curioTick"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
public "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "curioBreak"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type, arg3: $ItemStack$Type): boolean
public "canSync"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): boolean
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersonalWirelessTerminalItem$Type = ($PersonalWirelessTerminalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersonalWirelessTerminalItem_ = $PersonalWirelessTerminalItem$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/virtualcraft/$VirtualPatternInput$InputSpec" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $VirtualPatternInput$InputSpec {

constructor(arg0: $GenericStack$Type)
constructor(arg0: $TagKey$Type<($Item$Type)>, arg1: long)

public "matches"(arg0: $AEKey$Type): boolean
public "getCount"(): long
public "getDisplayString"(): string
public "getPossibleItems"(): $List<($GenericStack)>
public "getSpecificItem"(): $GenericStack
public "isTag"(): boolean
public "getItemTag"(): $TagKey<($Item)>
get "count"(): long
get "displayString"(): string
get "possibleItems"(): $List<($GenericStack)>
get "specificItem"(): $GenericStack
get "tag"(): boolean
get "itemTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualPatternInput$InputSpec$Type = ($VirtualPatternInput$InputSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualPatternInput$InputSpec_ = $VirtualPatternInput$InputSpec$Type;
}}
declare module "packages/com/yardenzamir/simchat/team/$TeamData" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChatMessage, $ChatMessage$Type} from "packages/com/yardenzamir/simchat/data/$ChatMessage"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TeamData {

constructor(arg0: string, arg1: string)

public "getId"(): string
public "getMembers"(): $Set<($UUID)>
public "setColor"(arg0: integer): void
public "consumeActions"(arg0: string, arg1: integer): boolean
public "getEntityDisplayName"(arg0: string): string
public "getEntityIds"(): $List<(string)>
public "getEntityImageId"(arg0: string): string
public "getMessageCount"(arg0: string): integer
public "hasConversations"(): boolean
public "getEntitySubtitle"(arg0: string): string
public "getMemberCount"(): integer
public "clearConversation"(arg0: string): void
public "getDataNumber"(arg0: string, arg1: double): double
public "getData"(arg0: string): any
public static "fromJson"(arg0: $JsonObject$Type): $TeamData
public "toJson"(): $JsonObject
public "setData"(arg0: string, arg1: any): void
public "getTitle"(): string
public "clearAll"(): void
public "addMessage"(arg0: $ChatMessage$Type): void
public "getAllData"(): $Map<(string), (any)>
public "addMember"(arg0: $UUID$Type): void
public "getMessages"(arg0: string): $List<($ChatMessage)>
public "removeMember"(arg0: $UUID$Type): void
public "getRevision"(): integer
public "getLastMessage"(arg0: string): $ChatMessage
public "getDataString"(arg0: string, arg1: string): string
public "getDataKeys"(): $Set<(string)>
public "isMember"(arg0: $UUID$Type): boolean
public "toNbt"(): $CompoundTag
public static "fromNbt"(arg0: $CompoundTag$Type): $TeamData
public "addData"(arg0: string, arg1: double): void
public "isTyping"(arg0: string): boolean
public "setTyping"(arg0: string, arg1: boolean): void
public static "generateId"(): string
public "getDataInt"(arg0: string, arg1: integer): integer
public "getColor"(): integer
public "removeData"(arg0: string): void
public "setTitle"(arg0: string): void
public "hasData"(arg0: string): boolean
get "id"(): string
get "members"(): $Set<($UUID)>
set "color"(value: integer)
get "entityIds"(): $List<(string)>
get "memberCount"(): integer
get "title"(): string
get "allData"(): $Map<(string), (any)>
get "revision"(): integer
get "dataKeys"(): $Set<(string)>
get "color"(): integer
set "title"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$Type = ($TeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamData_ = $TeamData$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CommunicationRelayBlock$State, $CommunicationRelayBlock$State$Type} from "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlock$State"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CommunicationRelayBlockEntity, $CommunicationRelayBlockEntity$Type} from "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $CommunicationRelayBlock extends $AEBaseEntityBlock<($CommunicationRelayBlockEntity)> implements $SimpleWaterloggedBlock {
static readonly "STATE": $EnumProperty<($CommunicationRelayBlock$State)>
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

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationRelayBlock$Type = ($CommunicationRelayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationRelayBlock_ = $CommunicationRelayBlock$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/item/$CommunicationRelayItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommunicationRelayItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationRelayItem$Type = ($CommunicationRelayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationRelayItem_ = $CommunicationRelayItem$Type;
}}
declare module "packages/com/yardenzamir/simchat/integration/kubejs/$RegisterCallbacksKubeEvent" {
import {$CallbackContext, $CallbackContext$Type} from "packages/com/yardenzamir/simchat/condition/$CallbackContext"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export class $RegisterCallbacksKubeEvent extends $EventJS {

constructor()

public "register"(arg0: string, arg1: $Function$Type<($CallbackContext$Type), (any)>): void
public "unregister"(arg0: string): void
public "has"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCallbacksKubeEvent$Type = ($RegisterCallbacksKubeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterCallbacksKubeEvent_ = $RegisterCallbacksKubeEvent$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/virtualcraft/$VirtualRecipe" {
import {$VirtualPatternInput$InputSpec, $VirtualPatternInput$InputSpec$Type} from "packages/com/yardenzamir/personalmesystem/virtualcraft/$VirtualPatternInput$InputSpec"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $VirtualRecipe extends $Record {

constructor(id: $ResourceLocation$Type, inputs: $List$Type<($VirtualPatternInput$InputSpec$Type)>, outputs: $List$Type<($GenericStack$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "inputs"(): $List<($VirtualPatternInput$InputSpec)>
public "outputs"(): $List<($GenericStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualRecipe$Type = ($VirtualRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualRecipe_ = $VirtualRecipe$Type;
}}
declare module "packages/com/yardenzamir/simchat/integration/kubejs/$SimChatBindings" {
import {$CallbackContext, $CallbackContext$Type} from "packages/com/yardenzamir/simchat/condition/$CallbackContext"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"

export class $SimChatBindings {

constructor()

public static "registerCallback"(arg0: string, arg1: $Function$Type<($CallbackContext$Type), (any)>): void
public static "getCallbackCount"(): integer
public static "clearCallbacks"(): void
public static "notifyScriptsLoading"(): void
public static "logStatus"(): void
get "callbackCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimChatBindings$Type = ($SimChatBindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimChatBindings_ = $SimChatBindings$Type;
}}
declare module "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$VirtualRecipe, $VirtualRecipe$Type} from "packages/com/yardenzamir/personalmesystem/virtualcraft/$VirtualRecipe"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICraftingProvider, $ICraftingProvider$Type} from "packages/appeng/api/networking/crafting/$ICraftingProvider"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$CommunicationRelayBlockEntity$RecipeDisplay, $CommunicationRelayBlockEntity$RecipeDisplay$Type} from "packages/com/yardenzamir/personalmesystem/block/$CommunicationRelayBlockEntity$RecipeDisplay"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $CommunicationRelayBlockEntity extends $AENetworkBlockEntity implements $ICraftingProvider, $IPowerChannelState, $Nameable {
static readonly "POWERED_FLAG": integer
static readonly "CHANNEL_FLAG": integer
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "create"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $CommunicationRelayBlockEntity
public "isActive"(): boolean
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "setDescription"(arg0: $List$Type<($Component$Type)>): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "setCustomName"(arg0: $Component$Type): void
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "getEmitableItems"(): $Set<($AEKey)>
public "getPatternPriority"(): integer
public static "parseRecipesFromItemTag"(arg0: $CompoundTag$Type): $List<($CommunicationRelayBlockEntity$RecipeDisplay)>
public "getName"(): $Component
public "getCustomName"(): $Component
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "isPowered"(): boolean
public "isBusy"(): boolean
public "getRecipes"(): $List<($VirtualRecipe)>
public "getDescription"(): $List<($Component)>
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "active"(): boolean
set "description"(value: $List$Type<($Component$Type)>)
set "customName"(value: $Component$Type)
get "availablePatterns"(): $List<($IPatternDetails)>
get "emitableItems"(): $Set<($AEKey)>
get "patternPriority"(): integer
get "name"(): $Component
get "customName"(): $Component
get "powered"(): boolean
get "busy"(): boolean
get "recipes"(): $List<($VirtualRecipe)>
get "description"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationRelayBlockEntity$Type = ($CommunicationRelayBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationRelayBlockEntity_ = $CommunicationRelayBlockEntity$Type;
}}
declare module "packages/com/yardenzamir/simchat/condition/$CallbackContext" {
import {$TeamData, $TeamData$Type} from "packages/com/yardenzamir/simchat/team/$TeamData"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$TeamContext, $TeamContext$Type} from "packages/com/yardenzamir/simchat/condition/$TeamContext"
import {$EntityContext, $EntityContext$Type} from "packages/com/yardenzamir/simchat/condition/$EntityContext"

export class $CallbackContext {

constructor(arg0: $ServerPlayer$Type, arg1: $TeamData$Type, arg2: string)

public static "of"(arg0: $ServerPlayer$Type, arg1: $TeamData$Type, arg2: string): $CallbackContext
public "player"(): $ServerPlayer
public "team"(): $TeamData
public "getPlayer"(): $ServerPlayer
public static "ofPlayer"(arg0: $ServerPlayer$Type): $CallbackContext
public "getTeam"(): $TeamContext
public "getEntity"(): $EntityContext
get "entity"(): $EntityContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CallbackContext$Type = ($CallbackContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallbackContext_ = $CallbackContext$Type;
}}
declare module "packages/com/yardenzamir/simchat/data/$ChatAction" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChatAction$ActionItem, $ChatAction$ActionItem$Type} from "packages/com/yardenzamir/simchat/data/$ChatAction$ActionItem"

export class $ChatAction extends $Record {

constructor(label: string, commands: $List$Type<(string)>, replyText: string, itemsVisual: $List$Type<($ChatAction$ActionItem$Type)>, itemsInput: $List$Type<($ChatAction$ActionItem$Type)>, itemsOutput: $List$Type<($ChatAction$ActionItem$Type)>, nextState: string, condition: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "condition"(): string
public "label"(): string
public "itemsOutput"(): $List<($ChatAction$ActionItem)>
public "itemsVisual"(): $List<($ChatAction$ActionItem)>
public "hasAnyItems"(): boolean
public "commands"(): $List<(string)>
public "nextState"(): string
public "toNbt"(): $CompoundTag
public static "fromNbt"(arg0: $CompoundTag$Type): $ChatAction
public "itemsInput"(): $List<($ChatAction$ActionItem)>
public "replyText"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatAction$Type = ($ChatAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatAction_ = $ChatAction$Type;
}}
declare module "packages/com/yardenzamir/simchat/data/$MessageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MessageType extends $Enum<($MessageType)> {
static readonly "ENTITY": $MessageType
static readonly "PLAYER": $MessageType
static readonly "SYSTEM": $MessageType


public static "values"(): ($MessageType)[]
public static "valueOf"(arg0: string): $MessageType
public static "fromOrdinal"(arg0: integer): $MessageType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageType$Type = (("system") | ("entity") | ("player")) | ($MessageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageType_ = $MessageType$Type;
}}
declare module "packages/com/yardenzamir/simchat/data/$ChatAction$ActionItem" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ChatAction$ActionItem extends $Record {

constructor(item: string, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "count"(): integer
public "item"(): string
public "toItemStack"(): $ItemStack
public static "fromJson"(arg0: $JsonObject$Type): $ChatAction$ActionItem
public "toNbt"(): $CompoundTag
public static "fromNbt"(arg0: $CompoundTag$Type): $ChatAction$ActionItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatAction$ActionItem$Type = ($ChatAction$ActionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatAction$ActionItem_ = $ChatAction$ActionItem$Type;
}}
