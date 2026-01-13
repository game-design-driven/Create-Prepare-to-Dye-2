declare module "packages/dev/architectury/core/block/$ArchitecturyLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"

export class $ArchitecturyLiquidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(fluid: $Supplier$Type<(any)>, properties: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyLiquidBlock$Type = ($ArchitecturyLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyLiquidBlock_ = $ArchitecturyLiquidBlock$Type;
}}
declare module "packages/dev/architectury/utils/$OptionalSupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $OptionalSupplier<T> extends $Supplier<(T)> {

 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "get"(): T
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalSupplier_<T> = $OptionalSupplier$Type<(T)>;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrarBuilder" {
import {$RegistrarOption, $RegistrarOption$Type} from "packages/dev/architectury/registry/registries/options/$RegistrarOption"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrarBuilder<T> {

 "option"(arg0: $RegistrarOption$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
 "saveToDisc"(): $RegistrarBuilder<(T)>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarBuilder$Type<T> = ($RegistrarBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarBuilder_<T> = $RegistrarBuilder$Type<(T)>;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes"
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid$Flowing extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Flowing$Type = ($ArchitecturyFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Flowing_ = $ArchitecturyFlowingFluid$Flowing$Type;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrarManager" {
import {$RegistrarBuilder, $RegistrarBuilder$Type} from "packages/dev/architectury/registry/registries/$RegistrarBuilder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export class $RegistrarManager {


/**
 * 
 * @deprecated
 */
public "get"<T>(registry: $Registry$Type<(T)>): $Registrar<(T)>
public static "get"(modId: string): $RegistrarManager
public "get"<T>(key: $ResourceKey$Type<($Registry$Type<(T)>)>): $Registrar<(T)>
public "builder"<T>(registryId: $ResourceLocation$Type, ...typeGetter: (T)[]): $RegistrarBuilder<(T)>
/**
 * 
 * @deprecated
 */
public static "getId"<T>(object: T, fallback: $Registry$Type<(T)>): $ResourceLocation
public static "getId"<T>(object: T, fallback: $ResourceKey$Type<($Registry$Type<(T)>)>): $ResourceLocation
public "forRegistry"<T>(key: $ResourceKey$Type<($Registry$Type<(T)>)>, callback: $Consumer$Type<($Registrar$Type<(T)>)>): void
public "getModId"(): string
get "modId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarManager$Type = ($RegistrarManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarManager_ = $RegistrarManager$Type;
}}
declare module "packages/dev/architectury/registry/registries/$DeferredSupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$OptionalSupplier, $OptionalSupplier$Type} from "packages/dev/architectury/utils/$OptionalSupplier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $DeferredSupplier<T> extends $OptionalSupplier<(T)> {

 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "get"(): T
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredSupplier_<T> = $DeferredSupplier$Type<(T)>;
}}
declare module "packages/dev/architectury/event/events/common/$CommandPerformEvent" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Event, $Event$Type} from "packages/dev/architectury/event/$Event"
import {$EventActor, $EventActor$Type} from "packages/dev/architectury/event/$EventActor"
import {$ParseResults, $ParseResults$Type} from "packages/com/mojang/brigadier/$ParseResults"

export class $CommandPerformEvent {
static readonly "EVENT": $Event<($EventActor<($CommandPerformEvent)>)>

constructor(results: $ParseResults$Type<($CommandSourceStack$Type)>, throwable: $Throwable$Type)

public "setThrowable"(throwable: $Throwable$Type): void
public "getThrowable"(): $Throwable
public "getResults"(): $ParseResults<($CommandSourceStack)>
public "setResults"(results: $ParseResults$Type<($CommandSourceStack$Type)>): void
set "throwable"(value: $Throwable$Type)
get "throwable"(): $Throwable
get "results"(): $ParseResults<($CommandSourceStack)>
set "results"(value: $ParseResults$Type<($CommandSourceStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandPerformEvent$Type = ($CommandPerformEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandPerformEvent_ = $CommandPerformEvent$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedLiquidBlockExtension" {
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"

export interface $InjectedLiquidBlockExtension {

 "arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedLiquidBlockExtension$Type = ($InjectedLiquidBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedLiquidBlockExtension_ = $InjectedLiquidBlockExtension$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$SpawnProperties" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SpawnProperties {

 "getCreatureProbability"(): float
 "getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
 "getSpawners"(): $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
}

export namespace $SpawnProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnProperties$Type = ($SpawnProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnProperties_ = $SpawnProperties$Type;
}}
declare module "packages/dev/architectury/fluid/$FluidStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FluidStack {


public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public static "init"(): void
public "write"(tag: $CompoundTag$Type): $CompoundTag
public "write"(buf: $FriendlyByteBuf$Type): void
public static "read"(buf: $FriendlyByteBuf$Type): $FluidStack
public static "read"(tag: $CompoundTag$Type): $FluidStack
public "copy"(): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public static "create"(fluid: $Supplier$Type<($Fluid$Type)>, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, tag: $CompoundTag$Type): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public static "create"(fluid: $Supplier$Type<($Fluid$Type)>, amount: long, tag: $CompoundTag$Type): $FluidStack
public "grow"(amount: long): void
public "getTag"(): $CompoundTag
public "getRawFluidSupplier"(): $Supplier<($Fluid)>
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public "getTranslationKey"(): string
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "getRawFluid"(): $Fluid
public "copyWithAmount"(amount: long): $FluidStack
public static "bucketAmount"(): long
public "getOrCreateTag"(): $CompoundTag
public "getChildTag"(childName: string): $CompoundTag
public "getOrCreateChildTag"(childName: string): $CompoundTag
public "removeChildTag"(childName: string): void
public "shrink"(amount: long): void
public "setTag"(tag: $CompoundTag$Type): void
public "getFluid"(): $Fluid
public "getAmount"(): long
public "hasTag"(): boolean
public "setAmount"(amount: long): void
public "isTagEqual"(other: $FluidStack$Type): boolean
get "name"(): $Component
get "tag"(): $CompoundTag
get "rawFluidSupplier"(): $Supplier<($Fluid)>
get "translationKey"(): string
get "rawFluid"(): $Fluid
get "orCreateTag"(): $CompoundTag
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
get "amount"(): long
set "amount"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/dev/architectury/event/events/client/$ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {

 "arch$sendSuccess"(arg0: $Supplier$Type<($Component$Type)>, arg1: boolean): void
 "arch$sendFailure"(arg0: $Component$Type): void
 "arch$getPlayer"(): $LocalPlayer
 "arch$getPosition"(): $Vec3
 "arch$getRotation"(): $Vec2
 "arch$getLevel"(): $ClientLevel
 "getAllTeams"(): $Collection<(string)>
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "suggestRegistryElements"(arg0: $ResourceKey$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type, arg3: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getOnlinePlayerNames"(): $Collection<(string)>
 "getSelectedEntities"(): $Collection<(string)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "customSuggestion"(arg0: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "hasPermission"(arg0: integer): boolean
 "registryAccess"(): $RegistryAccess
 "suggestRegistryElements"(arg0: $Registry$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type): void
 "getCustomTabSugggestions"(): $Collection<(string)>
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "enabledFeatures"(): $FeatureFlagSet
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest(arg0: (string)[], arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Consumer$Type<(T)>): void
function matchesSubStr(arg0: string, arg1: string): boolean
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: string, arg3: $Function$Type<(T), ($ResourceLocation$Type)>, arg4: $Consumer$Type<(T)>): void
function suggestResource<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Stream$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggest<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), (string)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack_ = $ClientCommandRegistrationEvent$ClientCommandSourceStack$Type;
}}
declare module "packages/dev/architectury/event/$CompoundEventResult" {
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"

export class $CompoundEventResult<T> {


public "value"(): boolean
public "isEmpty"(): boolean
public "result"(): $EventResult
public "isPresent"(): boolean
public static "interrupt"<T>(value: boolean, object: T): $CompoundEventResult<(T)>
public "object"(): T
public static "pass"<T>(): $CompoundEventResult<(T)>
public "interruptsFurtherEvaluation"(): boolean
public static "interruptFalse"<T>(object: T): $CompoundEventResult<(T)>
public static "interruptTrue"<T>(object: T): $CompoundEventResult<(T)>
public static "interruptDefault"<T>(object: T): $CompoundEventResult<(T)>
public "asMinecraft"(): $InteractionResultHolder<(T)>
public "isTrue"(): boolean
public "isFalse"(): boolean
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompoundEventResult$Type<T> = ($CompoundEventResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompoundEventResult_<T> = $CompoundEventResult$Type<(T)>;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedGameEventExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedGameEventExtension extends $InjectedRegistryEntryExtension<($GameEvent)> {

 "arch$holder"(): $Holder<($GameEvent)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedGameEventExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedGameEventExtension$Type = ($InjectedGameEventExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedGameEventExtension_ = $InjectedGameEventExtension$Type;
}}
declare module "packages/dev/architectury/registry/menu/$MenuRegistry$ScreenFactory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$MenuAccess, $MenuAccess$Type} from "packages/net/minecraft/client/gui/screens/inventory/$MenuAccess"

export interface $MenuRegistry$ScreenFactory<H extends $AbstractContainerMenu, S extends ($Screen) & ($MenuAccess<(H)>)> {

 "create"(arg0: H, arg1: $Inventory$Type, arg2: $Component$Type): S

(arg0: H, arg1: $Inventory$Type, arg2: $Component$Type): S
}

export namespace $MenuRegistry$ScreenFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuRegistry$ScreenFactory$Type<H, S> = ($MenuRegistry$ScreenFactory<(H), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuRegistry$ScreenFactory_<H, S> = $MenuRegistry$ScreenFactory$Type<(H), (S)>;
}}
declare module "packages/dev/architectury/hooks/level/biome/$GenerationProperties" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$GenerationStep$Carving, $GenerationStep$Carving$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $GenerationProperties {

 "getFeatures"(arg0: $GenerationStep$Decoration$Type): $Iterable<($Holder<($PlacedFeature)>)>
 "getFeatures"(): $List<($Iterable<($Holder<($PlacedFeature)>)>)>
 "getCarvers"(arg0: $GenerationStep$Carving$Type): $Iterable<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}

export namespace $GenerationProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationProperties$Type = ($GenerationProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationProperties_ = $GenerationProperties$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedEntityTypeExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<($EntityType<(any)>)> {

 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedEntityTypeExtension$Type = ($InjectedEntityTypeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedEntityTypeExtension_ = $InjectedEntityTypeExtension$Type;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getBucket"(): $Item
public "getTickDelay"(level: $LevelReader$Type): integer
public "isSame"(fluid: $Fluid$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Type = ($ArchitecturyFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid_ = $ArchitecturyFlowingFluid$Type;
}}
declare module "packages/dev/architectury/event/$EventResult" {
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export class $EventResult {


public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public static "interrupt"(value: boolean): $EventResult
public static "pass"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
public static "interruptFalse"(): $EventResult
public static "interruptTrue"(): $EventResult
public static "interruptDefault"(): $EventResult
public "asMinecraft"(): $InteractionResult
public "isTrue"(): boolean
public "isFalse"(): boolean
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$Type = ($EventResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult_ = $EventResult$Type;
}}
declare module "packages/dev/architectury/event/$Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Event<T> {

 "isRegistered"(arg0: T): boolean
 "register"(arg0: T): void
 "invoker"(): T
 "unregister"(arg0: T): void
 "clearListeners"(): void
}

export namespace $Event {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$Type<(T)>;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes"
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$Type} from "packages/dev/architectury/core/fluid/$ArchitecturyFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ArchitecturyFlowingFluid$Source extends $ArchitecturyFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(attributes: $ArchitecturyFluidAttributes$Type)

public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Source$Type = ($ArchitecturyFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Source_ = $ArchitecturyFlowingFluid$Source$Type;
}}
declare module "packages/dev/architectury/event/$EventActor" {
import {$EventResult, $EventResult$Type} from "packages/dev/architectury/event/$EventResult"

export interface $EventActor<T> {

 "act"(arg0: T): $EventResult

(arg0: T): $EventResult
}

export namespace $EventActor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventActor$Type<T> = ($EventActor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventActor_<T> = $EventActor$Type<(T)>;
}}
declare module "packages/dev/architectury/utils/value/$IntValue" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import {$Value, $Value$Type} from "packages/dev/architectury/utils/value/$Value"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export interface $IntValue extends $Value<(integer)>, $IntSupplier, $IntConsumer {

 "get"(): integer
 "getAsInt"(): integer
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(integer)>
 "andThen"(arg0: $IntConsumer$Type): $IntConsumer
 "accept"(arg0: integer): void
}

export namespace $IntValue {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntValue$Type = ($IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntValue_ = $IntValue$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$ClimateProperties" {
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$Type} from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export interface $ClimateProperties {

 "getTemperatureModifier"(): $Biome$TemperatureModifier
 "hasPrecipitation"(): boolean
 "getDownfall"(): float
 "getTemperature"(): float
}

export namespace $ClimateProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateProperties$Type = ($ClimateProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateProperties_ = $ClimateProperties$Type;
}}
declare module "packages/dev/architectury/impl/$ItemPropertiesExtensionImpl" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"

export interface $ItemPropertiesExtensionImpl {

 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertiesExtensionImpl$Type = ($ItemPropertiesExtensionImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPropertiesExtensionImpl_ = $ItemPropertiesExtensionImpl$Type;
}}
declare module "packages/dev/architectury/core/fluid/$ArchitecturyFluidAttributes" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/dev/architectury/fluid/$FluidStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ArchitecturyFluidAttributes {

 "getName"(stack: $FluidStack$Type): $Component
 "getName"(): $Component
 "getEmptySound"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $SoundEvent
 "getEmptySound"(): $SoundEvent
 "getEmptySound"(stack: $FluidStack$Type): $SoundEvent
 "canConvertToSource"(): boolean
 "getTranslationKey"(arg0: $FluidStack$Type): string
 "getTranslationKey"(): string
 "getLuminosity"(stack: $FluidStack$Type): integer
 "getLuminosity"(): integer
 "getLuminosity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getFillSound"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $SoundEvent
 "getFillSound"(stack: $FluidStack$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getBucketItem"(): $Item
 "getSourceFluid"(): $Fluid
 "getFlowingFluid"(): $Fluid
 "getSlopeFindDistance"(arg0: $LevelReader$Type): integer
 "getSlopeFindDistance"(): integer
 "getTickDelay"(arg0: $LevelReader$Type): integer
 "getTickDelay"(): integer
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getSourceTexture"(): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$Type): $ResourceLocation
 "getSourceTexture"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ResourceLocation
 "getTemperature"(stack: $FluidStack$Type): integer
 "getTemperature"(): integer
 "getTemperature"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getViscosity"(stack: $FluidStack$Type): integer
 "getViscosity"(): integer
 "getViscosity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "isLighterThanAir"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$Type): boolean
 "isLighterThanAir"(): boolean
 "getExplosionResistance"(): float
 "getDensity"(): integer
 "getDensity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getDensity"(stack: $FluidStack$Type): integer
 "getRarity"(stack: $FluidStack$Type): $Rarity
 "getRarity"(): $Rarity
 "getRarity"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $Rarity
 "getDropOff"(arg0: $LevelReader$Type): integer
 "getDropOff"(): integer
 "getColor"(state: $FluidState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): integer
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getColor"(): integer
 "getColor"(stack: $FluidStack$Type): integer
 "getBlock"(): $LiquidBlock
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributes$Type = ($ArchitecturyFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFluidAttributes_ = $ArchitecturyFluidAttributes$Type;
}}
declare module "packages/dev/architectury/registry/registries/$Registrar" {
import {$RegistrySupplier, $RegistrySupplier$Type} from "packages/dev/architectury/registry/registries/$RegistrySupplier"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $Registrar<T> extends $Iterable<(T)> {

 "get"(arg0: $ResourceLocation$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<(any)>
 "listen"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<(T)>): void
 "listen"<R extends T>(supplier: $RegistrySupplier$Type<(R)>, callback: $Consumer$Type<(R)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "delegate"(arg0: $ResourceLocation$Type): $RegistrySupplier<(T)>
 "getRawId"(arg0: T): integer
 "byRawId"(arg0: integer): T
 "getIds"(): $Set<($ResourceLocation)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Registrar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registrar$Type<T> = ($Registrar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registrar_<T> = $Registrar$Type<(T)>;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedFluidExtension" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<($Fluid)> {

 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedFluidExtension$Type = ($InjectedFluidExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedFluidExtension_ = $InjectedFluidExtension$Type;
}}
declare module "packages/dev/architectury/utils/value/$Value" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Value<T> extends $Supplier<(T)>, $Consumer<(T)> {

 "get"(): T
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(T)>
}

export namespace $Value {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$Type<T> = ($Value<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Value_<T> = $Value$Type<(T)>;
}}
declare module "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment {

 "architectury$getAttachedLevel"(): $LevelAccessor
 "architectury$attachLevel"(arg0: $LevelAccessor$Type): void
}

export namespace $EventHandlerImplCommon$LevelEventAttachment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerImplCommon$LevelEventAttachment$Type = ($EventHandlerImplCommon$LevelEventAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandlerImplCommon$LevelEventAttachment_ = $EventHandlerImplCommon$LevelEventAttachment$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedItemExtension" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<($Item)> {

 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemExtension$Type = ($InjectedItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemExtension_ = $InjectedItemExtension$Type;
}}
declare module "packages/dev/architectury/registry/registries/options/$RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {

}

export namespace $RegistrarOption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarOption$Type = ($RegistrarOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarOption_ = $RegistrarOption$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$BiomeProperties" {
import {$SpawnProperties, $SpawnProperties$Type} from "packages/dev/architectury/hooks/level/biome/$SpawnProperties"
import {$ClimateProperties, $ClimateProperties$Type} from "packages/dev/architectury/hooks/level/biome/$ClimateProperties"
import {$EffectsProperties, $EffectsProperties$Type} from "packages/dev/architectury/hooks/level/biome/$EffectsProperties"
import {$GenerationProperties, $GenerationProperties$Type} from "packages/dev/architectury/hooks/level/biome/$GenerationProperties"

export interface $BiomeProperties {

 "getClimateProperties"(): $ClimateProperties
 "getEffectsProperties"(): $EffectsProperties
 "getSpawnProperties"(): $SpawnProperties
 "getGenerationProperties"(): $GenerationProperties
}

export namespace $BiomeProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeProperties$Type = ($BiomeProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeProperties_ = $BiomeProperties$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedBlockExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$Type} from "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<($Block)> {

 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBlockExtension$Type = ($InjectedBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBlockExtension_ = $InjectedBlockExtension$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedBucketItemExtension" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"

export interface $InjectedBucketItemExtension {

 "arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBucketItemExtension$Type = ($InjectedBucketItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBucketItemExtension_ = $InjectedBucketItemExtension$Type;
}}
declare module "packages/dev/architectury/event/events/common/$ChatEvent$ChatComponent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $ChatEvent$ChatComponent {

 "get"(): $Component
 "set"(arg0: $Component$Type): void
}

export namespace $ChatEvent$ChatComponent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatEvent$ChatComponent$Type = ($ChatEvent$ChatComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatEvent$ChatComponent_ = $ChatEvent$ChatComponent$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedRegistryEntryExtension" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $InjectedRegistryEntryExtension<T> {

 "arch$registryName"(): $ResourceLocation
 "arch$holder"(): $Holder<(T)>

(): $ResourceLocation
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedRegistryEntryExtension$Type<T> = ($InjectedRegistryEntryExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedRegistryEntryExtension_<T> = $InjectedRegistryEntryExtension$Type<(T)>;
}}
declare module "packages/dev/architectury/core/item/$ArchitecturyBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ArchitecturyBucketItem extends $BucketItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(fluid: $Supplier$Type<(any)>, properties: $Item$Properties$Type)

public "getContainedFluid"(): $Fluid
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
get "containedFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyBucketItem$Type = ($ArchitecturyBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyBucketItem_ = $ArchitecturyBucketItem$Type;
}}
declare module "packages/dev/architectury/extensions/injected/$InjectedItemPropertiesExtension" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $InjectedItemPropertiesExtension {

 "arch$tab"(tab: $CreativeModeTab$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$Type<($CreativeModeTab$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$Type<($CreativeModeTab$Type)>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemPropertiesExtension$Type = ($InjectedItemPropertiesExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemPropertiesExtension_ = $InjectedItemPropertiesExtension$Type;
}}
declare module "packages/dev/architectury/registry/level/biome/$BiomeModifications$BiomeContext" {
import {$BiomeProperties, $BiomeProperties$Type} from "packages/dev/architectury/hooks/level/biome/$BiomeProperties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $BiomeModifications$BiomeContext {

 "getKey"(): $Optional<($ResourceLocation)>
 "getProperties"(): $BiomeProperties
 "hasTag"(arg0: $TagKey$Type<($Biome$Type)>): boolean
}

export namespace $BiomeModifications$BiomeContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifications$BiomeContext$Type = ($BiomeModifications$BiomeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifications$BiomeContext_ = $BiomeModifications$BiomeContext$Type;
}}
declare module "packages/dev/architectury/hooks/level/biome/$EffectsProperties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export interface $EffectsProperties {

 "getSkyColor"(): integer
 "getWaterFogColor"(): integer
 "getBackgroundMusic"(): $Optional<($Music)>
 "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
 "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
 "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
 "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
 "getGrassColorOverride"(): $OptionalInt
 "getFoliageColorOverride"(): $OptionalInt
 "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
 "getWaterColor"(): integer
 "getFogColor"(): integer
}

export namespace $EffectsProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectsProperties$Type = ($EffectsProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectsProperties_ = $EffectsProperties$Type;
}}
declare module "packages/dev/architectury/registry/registries/$RegistrySupplier" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegistrarManager, $RegistrarManager$Type} from "packages/dev/architectury/registry/registries/$RegistrarManager"
import {$DeferredSupplier, $DeferredSupplier$Type} from "packages/dev/architectury/registry/registries/$DeferredSupplier"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Registrar, $Registrar$Type} from "packages/dev/architectury/registry/registries/$Registrar"

export interface $RegistrySupplier<T> extends $DeferredSupplier<(T)> {

 "listen"(callback: $Consumer$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresent"(action: $Consumer$Type<(any)>): void
 "ifPresentOrElse"(action: $Consumer$Type<(any)>, emptyAction: $Runnable$Type): void
 "orElseGet"(supplier: $Supplier$Type<(any)>): T
 "getOrNull"(): T
 "toOptional"(): $Optional<(T)>
 "get"(): T
}

export namespace $RegistrySupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySupplier$Type<T> = ($RegistrySupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrySupplier_<T> = $RegistrySupplier$Type<(T)>;
}}
