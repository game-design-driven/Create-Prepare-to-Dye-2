declare module "packages/net/createmod/ponder/api/scene/$OverlayInstructions" {
import {$PonderPalette, $PonderPalette$Type} from "packages/net/createmod/ponder/api/$PonderPalette"
import {$TextElementBuilder, $TextElementBuilder$Type} from "packages/net/createmod/ponder/api/element/$TextElementBuilder"
import {$InputElementBuilder, $InputElementBuilder$Type} from "packages/net/createmod/ponder/api/element/$InputElementBuilder"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Pointing, $Pointing$Type} from "packages/net/createmod/catnip/math/$Pointing"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Selection, $Selection$Type} from "packages/net/createmod/ponder/api/scene/$Selection"

export interface $OverlayInstructions {

 "showOutline"(arg0: $PonderPalette$Type, arg1: any, arg2: $Selection$Type, arg3: integer): void
 "showControls"(arg0: $Vec3$Type, arg1: $Pointing$Type, arg2: integer): $InputElementBuilder
 "showCenteredScrollInput"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: integer): void
 "chaseBoundingBoxOutline"(arg0: $PonderPalette$Type, arg1: any, arg2: $AABB$Type, arg3: integer): void
 "showFilterSlotInput"(arg0: $Vec3$Type, arg1: $Direction$Type, arg2: integer): void
 "showFilterSlotInput"(arg0: $Vec3$Type, arg1: integer): void
 "showOutlineWithText"(arg0: $Selection$Type, arg1: integer): $TextElementBuilder
 "showRepeaterScrollInput"(arg0: $BlockPos$Type, arg1: integer): void
 "showBigLine"(arg0: $PonderPalette$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: integer): void
 "showScrollInput"(arg0: $Vec3$Type, arg1: $Direction$Type, arg2: integer): void
 "showLine"(arg0: $PonderPalette$Type, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: integer): void
 "showText"(arg0: integer): $TextElementBuilder
}

export namespace $OverlayInstructions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayInstructions$Type = ($OverlayInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayInstructions_ = $OverlayInstructions$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$DebugInstructions" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PonderInstruction, $PonderInstruction$Type} from "packages/net/createmod/ponder/foundation/instruction/$PonderInstruction"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $DebugInstructions {

 "enqueueCallback"(arg0: $Consumer$Type<($PonderScene$Type)>): void
 "debugSchematic"(): void
 "addInstructionInstance"(arg0: $PonderInstruction$Type): void
}

export namespace $DebugInstructions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugInstructions$Type = ($DebugInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugInstructions_ = $DebugInstructions$Type;
}}
declare module "packages/net/createmod/ponder/api/level/$PonderLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SchematicLevel, $SchematicLevel$Type} from "packages/net/createmod/catnip/levelWrappers/$SchematicLevel"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Selection, $Selection$Type} from "packages/net/createmod/ponder/api/scene/$Selection"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$PonderWorldAccessor, $PonderWorldAccessor$Type} from "packages/com/almostreliable/ponderjs/mixin/$PonderWorldAccessor"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$SuperRenderTypeBuffer, $SuperRenderTypeBuffer$Type} from "packages/net/createmod/catnip/render/$SuperRenderTypeBuffer"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export class $PonderLevel extends $SchematicLevel implements $PonderWorldAccessor {
 "scene": $PonderScene
 "anchor": $BlockPos
 "renderMode": boolean
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $BlockPos$Type, arg1: $Level$Type)

public "tick"(): void
public "getBlockBreakingProgressions"(): $Map<($BlockPos), (integer)>
public "renderEntities"(arg0: $PoseStack$Type, arg1: $SuperRenderTypeBuffer$Type, arg2: $Camera$Type, arg3: float): void
public "restoreBlocks"(arg0: $Selection$Type): void
public "pushFakeLight"(arg0: integer): void
public "setBlockBreakingProgress"(arg0: $BlockPos$Type, arg1: integer): void
public "addBlockDestroyEffects"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "createBackup"(): void
public "addParticle"(arg0: $Particle$Type): void
public "renderParticles"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $Camera$Type, arg3: float): void
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "hasChunkAt"(arg0: $BlockPos$Type): boolean
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
public "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "hasChunk"(arg0: integer, arg1: integer): boolean
public "addAlwaysVisibleParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "isLoaded"(arg0: $BlockPos$Type): boolean
public "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
public "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
public "popLight"(): void
public "setMask"(arg0: $Selection$Type): void
public "clearMask"(): void
public "restore"(): void
public "getLevelData"(): $LevelData
public "getServer"(): $MinecraftServer
public "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
public "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
public "getRandom"(): $RandomSource
public "nextSubTickCount"(): long
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "blockBreakingProgressions"(): $Map<($BlockPos), (integer)>
set "mask"(value: $Selection$Type)
get "levelData"(): $LevelData
get "server"(): $MinecraftServer
get "random"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderLevel$Type = ($PonderLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderLevel_ = $PonderLevel$Type;
}}
declare module "packages/net/createmod/ponder/api/$VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity {

 "isVirtual"(): boolean
 "markVirtual"(): void
}

export namespace $VirtualBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualBlockEntity$Type = ($VirtualBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualBlockEntity_ = $VirtualBlockEntity$Type;
}}
declare module "packages/net/createmod/catnip/levelWrappers/$WrappedLevel" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $WrappedLevel extends $Level {
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $Level$Type)

public "getLevel"(): $Level
public "setChunkSource"(arg0: $ChunkSource$Type): void
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getRecipeManager"(): $RecipeManager
public "addFreshEntity"(arg0: $Entity$Type): boolean
public "getChunkSource"(): $ChunkSource
public "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
public "getScoreboard"(): $Scoreboard
public "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
public "registryAccess"(): $RegistryAccess
public "playSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$Type, arg5: $SoundSource$Type, arg6: float, arg7: float): void
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public "sendBlockUpdated"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: integer): void
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$Type, arg1: $Block$Type): void
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(arg0: $Player$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$Type<($SoundEvent$Type)>, arg5: $SoundSource$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $Holder$Type<($SoundEvent$Type)>, arg3: $SoundSource$Type, arg4: float, arg5: float, arg6: long): void
public "playSound"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "gatherChunkSourceStats"(): string
public "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
public "getEntity"(arg0: integer): $Entity
public "getMapData"(arg0: string): $MapItemSavedData
public "setMapData"(arg0: string, arg1: $MapItemSavedData$Type): void
public "getFreeMapId"(): integer
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
public "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
public "players"(): $List<(any)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "level"(): $Level
set "chunkSource"(value: $ChunkSource$Type)
get "recipeManager"(): $RecipeManager
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
get "maxBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "freeMapId"(): integer
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedLevel$Type = ($WrappedLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedLevel_ = $WrappedLevel$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$WorldSectionElement" {
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$AnimatedSceneElement, $AnimatedSceneElement$Type} from "packages/net/createmod/ponder/api/element/$AnimatedSceneElement"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Selection, $Selection$Type} from "packages/net/createmod/ponder/api/scene/$Selection"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $WorldSectionElement extends $AnimatedSceneElement {

 "add"(arg0: $Selection$Type): void
 "isEmpty"(): boolean
 "set"(arg0: $Selection$Type): void
 "erase"(arg0: $Selection$Type): void
 "queueRedraw"(): void
 "resetSelectedBlock"(): void
 "setCenterOfRotation"(arg0: $Vec3$Type): void
 "stabilizeRotation"(arg0: $Vec3$Type): void
 "setAnimatedRotation"(arg0: $Vec3$Type, arg1: boolean): void
 "getAnimatedRotation"(): $Vec3
 "getAnimatedOffset"(): $Vec3
 "setAnimatedOffset"(arg0: $Vec3$Type, arg1: boolean): void
 "selectBlock"(arg0: $BlockPos$Type): void
 "setEmpty"(): void
 "rayTrace"(arg0: $PonderLevel$Type, arg1: $Vec3$Type, arg2: $Vec3$Type): $Pair<($Vec3), ($BlockHitResult)>
 "mergeOnto"(arg0: $WorldSectionElement$Type): void
 "forceApplyFade"(arg0: float): void
 "setFade"(arg0: float): void
 "setFadeVec"(arg0: $Vec3$Type): void
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $WorldSectionElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSectionElement$Type = ($WorldSectionElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSectionElement_ = $WorldSectionElement$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$PonderOverlayElement" {
import {$PonderUI, $PonderUI$Type} from "packages/net/createmod/ponder/foundation/ui/$PonderUI"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$PonderElement, $PonderElement$Type} from "packages/net/createmod/ponder/api/element/$PonderElement"

export interface $PonderOverlayElement extends $PonderElement {

 "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $PonderOverlayElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderOverlayElement$Type = ($PonderOverlayElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderOverlayElement_ = $PonderOverlayElement$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$ParrotElement" {
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$AnimatedSceneElement, $AnimatedSceneElement$Type} from "packages/net/createmod/ponder/api/element/$AnimatedSceneElement"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ParrotPose, $ParrotPose$Type} from "packages/net/createmod/ponder/api/element/$ParrotPose"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $ParrotElement extends $AnimatedSceneElement {

 "setPositionOffset"(arg0: $Vec3$Type, arg1: boolean): void
 "getRotation"(): $Vec3
 "setRotation"(arg0: $Vec3$Type, arg1: boolean): void
 "getPositionOffset"(): $Vec3
 "setPose"(arg0: $ParrotPose$Type): void
 "forceApplyFade"(arg0: float): void
 "setFade"(arg0: float): void
 "setFadeVec"(arg0: $Vec3$Type): void
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $ParrotElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParrotElement$Type = ($ParrotElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParrotElement_ = $ParrotElement$Type;
}}
declare module "packages/net/createmod/ponder/foundation/$PonderTag" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $PonderTag implements $ScreenElement {

constructor(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "getId"(): $ResourceLocation
public "getMainItem"(): $ItemStack
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
public "getTitle"(): string
public "getDescription"(): string
get "id"(): $ResourceLocation
get "mainItem"(): $ItemStack
get "title"(): string
get "description"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderTag$Type = ($PonderTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderTag_ = $PonderTag$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$RenderElement" {
import {$FadableScreenElement, $FadableScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$FadableScreenElement"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $RenderElement extends $FadableScreenElement {

 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "render"(arg0: $GuiGraphics$Type): void
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "getZ"(): float
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "getX"(): float
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $RenderElement {
function of(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderElement$Type = ($RenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderElement_ = $RenderElement$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigInt" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"

export class $ConfigBase$ConfigInt extends $ConfigBase$CValue<(integer), ($ForgeConfigSpec$IntValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: integer, arg3: integer, arg4: integer, ...arg5: (string)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigInt$Type = ($ConfigBase$ConfigInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigInt_ = $ConfigBase$ConfigInt$Type;
}}
declare module "packages/net/createmod/catnip/levelWrappers/$SchematicLevelAccessor" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Difficulty, $Difficulty$Type} from "packages/net/minecraft/world/$Difficulty"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Heightmap$Types, $Heightmap$Types$Type} from "packages/net/minecraft/world/level/levelgen/$Heightmap$Types"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$TargetingConditions, $TargetingConditions$Type} from "packages/net/minecraft/world/entity/ai/targeting/$TargetingConditions"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ChunkStatus, $ChunkStatus$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$HolderLookup, $HolderLookup$Type} from "packages/net/minecraft/core/$HolderLookup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $SchematicLevelAccessor extends $LevelAccessor {

 "getBounds"(): $BoundingBox
 "getBlockEntities"(): $Iterable<($BlockEntity)>
 "getAllPositions"(): $Set<($BlockPos)>
 "getEntityList"(): $List<($Entity)>
 "getBlockMap"(): $Map<($BlockPos), ($BlockState)>
 "getRenderedBlockEntities"(): $Iterable<($BlockEntity)>
 "setBounds"(arg0: $BoundingBox$Type): void
 "getLevelData"(): $LevelData
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "getRandom"(): $RandomSource
 "nextSubTickCount"(): long
 "dayTime"(): long
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "players"(): $List<(any)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$Type<($Entity$Type)>): $Player
 "getNearestPlayer"(arg0: $Entity$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double): T
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$Type<(any)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$Type): T
 "getNearbyPlayers"(arg0: $TargetingConditions$Type, arg1: $LivingEntity$Type, arg2: $AABB$Type): $List<($Player)>
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$Type<(T)>, arg1: $TargetingConditions$Type, arg2: $LivingEntity$Type, arg3: $AABB$Type): $List<(T)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "enabledFeatures"(): $FeatureFlagSet
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "getMinBuildHeight"(): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "isClientSide"(): boolean
 "registryAccess"(): $RegistryAccess
 "getBiomeManager"(): $BiomeManager
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getBlockStatesIfLoaded"(arg0: $AABB$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$Type): float
 "getSkyDarken"(): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getHeight"(): integer
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getWorldBorder"(): $WorldBorder
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "noCollision"(arg0: $Entity$Type): boolean
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getMaxLightLevel"(): integer
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getSectionsCount"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $SchematicLevelAccessor {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicLevelAccessor$Type = ($SchematicLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicLevelAccessor_ = $SchematicLevelAccessor$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$PonderElement" {
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $PonderElement {

 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $PonderElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderElement$Type = ($PonderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderElement_ = $PonderElement$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$StoryBoardEntry$SceneOrderingEntry" {
import {$StoryBoardEntry$SceneOrderingType, $StoryBoardEntry$SceneOrderingType$Type} from "packages/net/createmod/ponder/api/registration/$StoryBoardEntry$SceneOrderingType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $StoryBoardEntry$SceneOrderingEntry extends $Record {

constructor(type: $StoryBoardEntry$SceneOrderingType$Type, sceneId: $ResourceLocation$Type)

public "type"(): $StoryBoardEntry$SceneOrderingType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "before"(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry
public static "after"(arg0: string, arg1: string): $StoryBoardEntry$SceneOrderingEntry
public "sceneId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoryBoardEntry$SceneOrderingEntry$Type = ($StoryBoardEntry$SceneOrderingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoryBoardEntry$SceneOrderingEntry_ = $StoryBoardEntry$SceneOrderingEntry$Type;
}}
declare module "packages/net/createmod/ponder/api/$ParticleEmitter" {
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"

export interface $ParticleEmitter {

 "create"(arg0: $PonderLevel$Type, arg1: double, arg2: double, arg3: double): void

(arg0: $PonderLevel$Type, arg1: double, arg2: double, arg3: double): void
}

export namespace $ParticleEmitter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitter$Type = ($ParticleEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEmitter_ = $ParticleEmitter$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$SceneBuilder" {
import {$SpecialInstructions, $SpecialInstructions$Type} from "packages/net/createmod/ponder/api/scene/$SpecialInstructions"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DebugInstructions, $DebugInstructions$Type} from "packages/net/createmod/ponder/api/scene/$DebugInstructions"
import {$WorldInstructions, $WorldInstructions$Type} from "packages/net/createmod/ponder/api/scene/$WorldInstructions"
import {$EffectInstructions, $EffectInstructions$Type} from "packages/net/createmod/ponder/api/scene/$EffectInstructions"
import {$PonderInstruction, $PonderInstruction$Type} from "packages/net/createmod/ponder/foundation/instruction/$PonderInstruction"
import {$OverlayInstructions, $OverlayInstructions$Type} from "packages/net/createmod/ponder/api/scene/$OverlayInstructions"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $SceneBuilder {

 "debug"(): $DebugInstructions
 "configureBasePlate"(arg0: integer, arg1: integer, arg2: integer): void
 "scaleSceneView"(arg0: float): void
 "removeShadow"(): void
 "setSceneOffsetY"(arg0: float): void
 "showBasePlate"(): void
 "addInstruction"(arg0: $Consumer$Type<($PonderScene$Type)>): void
 "addInstruction"(arg0: $PonderInstruction$Type): void
 "idleSeconds"(arg0: integer): void
 "markAsFinished"(): void
 "rotateCameraY"(arg0: float): void
 "addKeyframe"(): void
 "addLazyKeyframe"(): void
 "setNextUpEnabled"(arg0: boolean): void
 "title"(arg0: string, arg1: string): void
 "overlay"(): $OverlayInstructions
 "special"(): $SpecialInstructions
 "world"(): $WorldInstructions
 "idle"(arg0: integer): void
 "effects"(): $EffectInstructions
 "getScene"(): $PonderScene
}

export namespace $SceneBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuilder$Type = ($SceneBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuilder_ = $SceneBuilder$Type;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LerpedFloat$Interpolator, $LerpedFloat$Interpolator$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator"
import {$LerpedFloat$Chaser, $LerpedFloat$Chaser$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser"

export class $LerpedFloat {

constructor(arg0: $LerpedFloat$Interpolator$Type)

public "getValue"(): float
public "getValue"(arg0: float): float
public "setValue"(arg0: double): void
public "startWithValue"(arg0: double): $LerpedFloat
public "getChaseTarget"(): float
public "updateChaseTarget"(arg0: float): void
public "disableSmartAngleChasing"(): $LerpedFloat
public "updateChaseSpeed"(arg0: double): boolean
public "setValueNoUpdate"(arg0: double): void
public "forceNextSync"(): void
public static "linear"(): $LerpedFloat
public "tickChaser"(): void
public "chase"(arg0: double, arg1: double, arg2: $LerpedFloat$Chaser$Type): $LerpedFloat
public "writeNBT"(): $CompoundTag
public "readNBT"(arg0: $CompoundTag$Type, arg1: boolean): void
public static "angular"(): $LerpedFloat
public "settled"(): boolean
public "chaseTimed"(arg0: double, arg1: integer): $LerpedFloat
get "value"(): float
set "value"(value: double)
get "chaseTarget"(): float
set "valueNoUpdate"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Type = ($LerpedFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat_ = $LerpedFloat$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$PonderTagRegistrationHelper" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MultiTagBuilder$Component, $MultiTagBuilder$Component$Type} from "packages/net/createmod/ponder/api/registration/$MultiTagBuilder$Component"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/createmod/ponder/api/registration/$TagBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MultiTagBuilder$Tag, $MultiTagBuilder$Tag$Type} from "packages/net/createmod/ponder/api/registration/$MultiTagBuilder$Tag"

export interface $PonderTagRegistrationHelper<T> {

 "withKeyFunction"<S>(arg0: $Function$Type<(S), (T)>): $PonderTagRegistrationHelper<(S)>
 "registerTag"(arg0: string): $TagBuilder
 "registerTag"(arg0: $ResourceLocation$Type): $TagBuilder
 "addTagToComponent"(arg0: T, arg1: $ResourceLocation$Type): void
 "addToComponent"(arg0: T): $MultiTagBuilder$Component
 "addToComponent"(...arg0: (T)[]): $MultiTagBuilder$Component
 "addToTag"(...arg0: ($ResourceLocation$Type)[]): $MultiTagBuilder$Tag<(T)>
 "addToTag"(arg0: $ResourceLocation$Type): $MultiTagBuilder$Tag<(T)>
}

export namespace $PonderTagRegistrationHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderTagRegistrationHelper$Type<T> = ($PonderTagRegistrationHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderTagRegistrationHelper_<T> = $PonderTagRegistrationHelper$Type<(T)>;
}}
declare module "packages/net/createmod/catnip/render/$BindableTexture" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $BindableTexture {

 "getLocation"(): $ResourceLocation
 "bind"(): void

(): $ResourceLocation
}

export namespace $BindableTexture {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BindableTexture$Type = ($BindableTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BindableTexture_ = $BindableTexture$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$StoryBoardEntry" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$StoryBoardEntry$SceneOrderingEntry, $StoryBoardEntry$SceneOrderingEntry$Type} from "packages/net/createmod/ponder/api/registration/$StoryBoardEntry$SceneOrderingEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PonderStoryBoard, $PonderStoryBoard$Type} from "packages/net/createmod/ponder/api/scene/$PonderStoryBoard"

export interface $StoryBoardEntry {

 "highlightTags"(...arg0: ($ResourceLocation$Type)[]): $StoryBoardEntry
 "highlightTag"(arg0: $ResourceLocation$Type): $StoryBoardEntry
 "orderBefore"(arg0: string, arg1: string): $StoryBoardEntry
 "orderBefore"(arg0: string): $StoryBoardEntry
 "highlightAllTags"(): $StoryBoardEntry
 "getSchematicLocation"(): $ResourceLocation
 "getOrderingEntries"(): $List<($StoryBoardEntry$SceneOrderingEntry)>
 "getComponent"(): $ResourceLocation
 "getTags"(): $List<($ResourceLocation)>
 "getBoard"(): $PonderStoryBoard
 "orderAfter"(arg0: string): $StoryBoardEntry
 "orderAfter"(arg0: string, arg1: string): $StoryBoardEntry
 "getNamespace"(): string
}

export namespace $StoryBoardEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoryBoardEntry$Type = ($StoryBoardEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoryBoardEntry_ = $StoryBoardEntry$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$ScreenElement" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ScreenElement {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $ScreenElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenElement$Type = ($ScreenElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenElement_ = $ScreenElement$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$SceneBuildingUtil" {
import {$PositionUtil, $PositionUtil$Type} from "packages/net/createmod/ponder/api/scene/$PositionUtil"
import {$VectorUtil, $VectorUtil$Type} from "packages/net/createmod/ponder/api/scene/$VectorUtil"
import {$SelectionUtil, $SelectionUtil$Type} from "packages/net/createmod/ponder/api/scene/$SelectionUtil"

export interface $SceneBuildingUtil {

 "grid"(): $PositionUtil
 "vector"(): $VectorUtil
 "select"(): $SelectionUtil
}

export namespace $SceneBuildingUtil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneBuildingUtil$Type = ($SceneBuildingUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneBuildingUtil_ = $SceneBuildingUtil$Type;
}}
declare module "packages/net/createmod/catnip/outliner/$Outline$OutlineParams" {
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BindableTexture, $BindableTexture$Type} from "packages/net/createmod/catnip/render/$BindableTexture"

export class $Outline$OutlineParams {

constructor()

public "disableCull"(): $Outline$OutlineParams
public "highlightFace"(arg0: $Direction$Type): $Outline$OutlineParams
public "withFaceTextures"(arg0: $BindableTexture$Type, arg1: $BindableTexture$Type): $Outline$OutlineParams
public "withFaceTexture"(arg0: $BindableTexture$Type): $Outline$OutlineParams
public "clearTextures"(): $Outline$OutlineParams
public "disableLineNormals"(): $Outline$OutlineParams
public "getHighlightedFace"(): $Direction
public "getLineWidth"(): float
public "lineWidth"(arg0: float): $Outline$OutlineParams
public "lightmap"(arg0: integer): $Outline$OutlineParams
public "colored"(arg0: integer): $Outline$OutlineParams
public "colored"(arg0: $Color$Type): $Outline$OutlineParams
public "loadColor"(arg0: $Vector4f$Type): void
get "highlightedFace"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Outline$OutlineParams$Type = ($Outline$OutlineParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Outline$OutlineParams_ = $Outline$OutlineParams$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$TagBuilder" {
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TagBuilder {

 "register"(): void
 "item"(arg0: $ItemLike$Type, arg1: boolean, arg2: boolean): $TagBuilder
 "item"(arg0: $ItemLike$Type): $TagBuilder
 "description"(arg0: string): $TagBuilder
 "title"(arg0: string): $TagBuilder
 "addToIndex"(): $TagBuilder
 "idAsIcon"(): $TagBuilder
 "icon"(arg0: $ResourceLocation$Type): $TagBuilder
 "icon"(arg0: string): $TagBuilder
}

export namespace $TagBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagBuilder$Type = ($TagBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagBuilder_ = $TagBuilder$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$MultiTagBuilder$Component" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MultiTagBuilder$Component {

 "add"(arg0: $ResourceLocation$Type): $MultiTagBuilder$Component

(arg0: $ResourceLocation$Type): $MultiTagBuilder$Component
}

export namespace $MultiTagBuilder$Component {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTagBuilder$Component$Type = ($MultiTagBuilder$Component);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTagBuilder$Component_ = $MultiTagBuilder$Component$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$MultiTagBuilder$Tag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MultiTagBuilder$Tag<T> {

 "add"(arg0: T): $MultiTagBuilder$Tag<(T)>

(arg0: T): $MultiTagBuilder$Tag<(T)>
}

export namespace $MultiTagBuilder$Tag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTagBuilder$Tag$Type<T> = ($MultiTagBuilder$Tag<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTagBuilder$Tag_<T> = $MultiTagBuilder$Tag$Type<(T)>;
}}
declare module "packages/net/createmod/ponder/api/element/$EntityElement" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$TrackedElement, $TrackedElement$Type} from "packages/net/createmod/ponder/api/element/$TrackedElement"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $EntityElement extends $TrackedElement<($Entity)> {

 "ifPresent"(arg0: $Consumer$Type<($Entity$Type)>): void
 "isStillValid"(arg0: $Entity$Type): boolean
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $EntityElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityElement$Type = ($EntityElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityElement_ = $EntityElement$Type;
}}
declare module "packages/net/createmod/catnip/render/$SuperByteBuffer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PoseTransformStack, $PoseTransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"
import {$TransformStack, $TransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$TransformStack"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"
import {$SpriteShiftEntry, $SpriteShiftEntry$Type} from "packages/net/createmod/catnip/render/$SpriteShiftEntry"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $SuperByteBuffer extends $TransformStack<($SuperByteBuffer)> {

 "isEmpty"(): boolean
 "delete"(): void
 "reset"<Self extends $SuperByteBuffer>(): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: $Color$Type): Self
 "rotate"<Self extends $SuperByteBuffer>(arg0: $Direction$Axis$Type, arg1: float): Self
 "disableDiffuse"<Self extends $SuperByteBuffer>(): Self
 "shiftUVtoSheet"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float, arg2: float, arg3: integer): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$Type): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$Type, arg1: $Matrix4f$Type): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type, arg1: float, arg2: float): Self
 "overlay"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "light"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "renderInto"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type): void
 "shiftUV"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$Type): Self
 "getTransforms"(): $PoseStack
 "pushPose"(): $SuperByteBuffer
 "popPose"(): $SuperByteBuffer
 "transform"(pose: $PoseStack$Pose$Type): $SuperByteBuffer
 "transform"(stack: $PoseStack$Type): $SuperByteBuffer
 "transform"(pose: $Matrix4fc$Type, normal: $Matrix3fc$Type): $SuperByteBuffer
 "mulPose"(arg0: $Matrix4fc$Type): $SuperByteBuffer
 "mulNormal"(arg0: $Matrix3fc$Type): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$Type, x: float, y: float, z: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateCentered"(q: $Quaternionfc$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateXCentered"(radians: float): $SuperByteBuffer
 "rotateYCentered"(radians: float): $SuperByteBuffer
 "rotateZCentered"(radians: float): $SuperByteBuffer
 "rotateXCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateYCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateZCenteredDegrees"(degrees: float): $SuperByteBuffer
 "center"(): $SuperByteBuffer
 "translate"(vec: $Vec3i$Type): $SuperByteBuffer
 "translate"(vec: $Vector3ic$Type): $SuperByteBuffer
 "translate"(vec: $Vector3fc$Type): $SuperByteBuffer
 "translate"(vec: $Vec3$Type): $SuperByteBuffer
 "translate"(x: double, y: double, z: double): $SuperByteBuffer
 "translate"(v: float): $SuperByteBuffer
 "translate"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "translateBack"(vec: $Vector3ic$Type): $SuperByteBuffer
 "translateBack"(vec: $Vec3i$Type): $SuperByteBuffer
 "translateBack"(v: float): $SuperByteBuffer
 "translateBack"(vec: $Vector3fc$Type): $SuperByteBuffer
 "translateBack"(vec: $Vec3$Type): $SuperByteBuffer
 "translateBack"(x: double, y: double, z: double): $SuperByteBuffer
 "translateBack"(x: float, y: float, z: float): $SuperByteBuffer
 "uncenter"(): $SuperByteBuffer
 "translateY"(y: float): $SuperByteBuffer
 "nudge"(seed: integer): $SuperByteBuffer
 "translateZ"(z: float): $SuperByteBuffer
 "translateX"(x: float): $SuperByteBuffer
 "rotate"(radians: float, axis: $Axis$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotate"(arg0: $Quaternionfc$Type): $SuperByteBuffer
 "rotate"(axisAngle: $AxisAngle4f$Type): $SuperByteBuffer
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "self"(): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Axis$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): $SuperByteBuffer
 "rotateToFace"(facing: $Direction$Type): $SuperByteBuffer
 "rotateXDegrees"(degrees: float): $SuperByteBuffer
 "rotateZDegrees"(degrees: float): $SuperByteBuffer
 "rotateYDegrees"(degrees: float): $SuperByteBuffer
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): $SuperByteBuffer
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $SuperByteBuffer
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): $SuperByteBuffer
 "rotateX"(radians: float): $SuperByteBuffer
 "rotateY"(radians: float): $SuperByteBuffer
 "rotateZ"(radians: float): $SuperByteBuffer
 "scale"(factors: $Vector3fc$Type): $SuperByteBuffer
 "scale"(factor: float): $SuperByteBuffer
 "scale"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "scaleX"(factor: float): $SuperByteBuffer
 "scaleY"(factor: float): $SuperByteBuffer
 "scaleZ"(factor: float): $SuperByteBuffer
}

export namespace $SuperByteBuffer {
function maxLight(arg0: integer, arg1: integer): integer
function of(stack: $PoseStack$Type): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperByteBuffer$Type = ($SuperByteBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperByteBuffer_ = $SuperByteBuffer$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigBool" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"

export class $ConfigBase$ConfigBool extends $ConfigBase$CValue<(boolean), ($ForgeConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: boolean, ...arg3: (string)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigBool$Type = ($ConfigBase$ConfigBool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigBool_ = $ConfigBase$ConfigBool$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$AnimatedOverlayElement" {
import {$PonderOverlayElement, $PonderOverlayElement$Type} from "packages/net/createmod/ponder/api/element/$PonderOverlayElement"
import {$PonderUI, $PonderUI$Type} from "packages/net/createmod/ponder/foundation/ui/$PonderUI"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $AnimatedOverlayElement extends $PonderOverlayElement {

 "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float): void
 "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "getFade"(arg0: float): float
 "setFade"(arg0: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $AnimatedOverlayElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedOverlayElement$Type = ($AnimatedOverlayElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedOverlayElement_ = $AnimatedOverlayElement$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$ParrotPose" {
import {$Parrot, $Parrot$Type} from "packages/net/minecraft/world/entity/animal/$Parrot"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export class $ParrotPose {

constructor()

public "create"(arg0: $PonderLevel$Type): $Parrot
public "tick"(arg0: $PonderScene$Type, arg1: $Parrot$Type, arg2: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParrotPose$Type = ($ParrotPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParrotPose_ = $ParrotPose$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$ParticleEngineAccessor" {
import {$ParticleProvider, $ParticleProvider$Type} from "packages/net/minecraft/client/particle/$ParticleProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ParticleEngineAccessor {

 "ponder$getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>

(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$SelectionUtil" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Selection, $Selection$Type} from "packages/net/createmod/ponder/api/scene/$Selection"

export interface $SelectionUtil {

 "position"(arg0: $BlockPos$Type): $Selection
 "position"(arg0: integer, arg1: integer, arg2: integer): $Selection
 "layer"(arg0: integer): $Selection
 "layers"(arg0: integer, arg1: integer): $Selection
 "column"(arg0: integer, arg1: integer): $Selection
 "everywhere"(): $Selection
 "cuboid"(arg0: $BlockPos$Type, arg1: $Vec3i$Type): $Selection
 "fromTo"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $Selection
 "fromTo"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $Selection
 "layersFrom"(arg0: integer): $Selection
}

export namespace $SelectionUtil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectionUtil$Type = ($SelectionUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectionUtil_ = $SelectionUtil$Type;
}}
declare module "packages/net/createmod/catnip/gui/$TickableGuiEventListener" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$ComponentPath, $ComponentPath$Type} from "packages/net/minecraft/client/gui/$ComponentPath"
import {$FocusNavigationEvent, $FocusNavigationEvent$Type} from "packages/net/minecraft/client/gui/navigation/$FocusNavigationEvent"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $TickableGuiEventListener extends $GuiEventListener {

 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "mouseMoved"(arg0: double, arg1: double): void
 "setFocused"(arg0: boolean): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "getTabOrderGroup"(): integer
}

export namespace $TickableGuiEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableGuiEventListener$Type = ($TickableGuiEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableGuiEventListener_ = $TickableGuiEventListener$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$PositionUtil" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $PositionUtil {

 "at"(arg0: integer, arg1: integer, arg2: integer): $BlockPos
 "zero"(): $BlockPos
}

export namespace $PositionUtil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionUtil$Type = ($PositionUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionUtil_ = $PositionUtil$Type;
}}
declare module "packages/net/createmod/ponder/foundation/element/$PonderElementBase" {
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$PonderElement, $PonderElement$Type} from "packages/net/createmod/ponder/api/element/$PonderElement"

export class $PonderElementBase implements $PonderElement {

constructor()

public "setVisible"(arg0: boolean): void
public "isVisible"(): boolean
public "reset"(arg0: $PonderScene$Type): void
public "tick"(arg0: $PonderScene$Type): void
public "whileSkipping"(arg0: $PonderScene$Type): void
set "visible"(value: boolean)
get "visible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderElementBase$Type = ($PonderElementBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderElementBase_ = $PonderElementBase$Type;
}}
declare module "packages/net/createmod/catnip/math/$BlockFace" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockFace extends $Pair<($BlockPos), ($Direction)> {

constructor(arg0: $BlockPos$Type, arg1: $Direction$Type)

public "serializeNBT"(): $CompoundTag
public "getConnectedPos"(): $BlockPos
public "getOpposite"(): $BlockFace
public "getOppositeFace"(): $Direction
public "isEquivalent"(arg0: $BlockFace$Type): boolean
public "getPos"(): $BlockPos
public "getFace"(): $Direction
public static "fromNBT"(arg0: $CompoundTag$Type): $BlockFace
get "connectedPos"(): $BlockPos
get "opposite"(): $BlockFace
get "oppositeFace"(): $Direction
get "pos"(): $BlockPos
get "face"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$Type = ($BlockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFace_ = $BlockFace$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$DelegatedStencilElement" {
import {$StencilElement, $StencilElement$Type} from "packages/net/createmod/catnip/gui/element/$StencilElement"
import {$FadableScreenElement, $FadableScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$FadableScreenElement"
import {$AbstractRenderElement, $AbstractRenderElement$Type} from "packages/net/createmod/catnip/gui/element/$AbstractRenderElement"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export class $DelegatedStencilElement extends $AbstractRenderElement implements $StencilElement {
static "EMPTY": $RenderElement

constructor()
constructor(arg0: $FadableScreenElement$Type, arg1: $FadableScreenElement$Type)

public "renderElement"(arg0: $GuiGraphics$Type): void
public "renderStencil"(arg0: $GuiGraphics$Type): void
public "withElementRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$Type): T
public "withStencilRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$Type): T
public "transform"(arg0: $GuiGraphics$Type): void
public "prepareStencil"(arg0: $GuiGraphics$Type): void
public "prepareElement"(arg0: $GuiGraphics$Type): void
public "render"(arg0: $GuiGraphics$Type): void
public "cleanUp"(arg0: $GuiGraphics$Type): void
public static "of"(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatedStencilElement$Type = ($DelegatedStencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatedStencilElement_ = $DelegatedStencilElement$Type;
}}
declare module "packages/net/createmod/ponder/foundation/element/$InputWindowElement" {
import {$InputElementBuilder, $InputElementBuilder$Type} from "packages/net/createmod/ponder/api/element/$InputElementBuilder"
import {$Pointing, $Pointing$Type} from "packages/net/createmod/catnip/math/$Pointing"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$AnimatedOverlayElementBase, $AnimatedOverlayElementBase$Type} from "packages/net/createmod/ponder/foundation/element/$AnimatedOverlayElementBase"
import {$PonderUI, $PonderUI$Type} from "packages/net/createmod/ponder/foundation/ui/$PonderUI"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export class $InputWindowElement extends $AnimatedOverlayElementBase {

constructor(arg0: $Vec3$Type, arg1: $Pointing$Type)

public "builder"(): $InputElementBuilder
public "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputWindowElement$Type = ($InputWindowElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputWindowElement_ = $InputWindowElement$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$AbstractRenderElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export class $AbstractRenderElement implements $RenderElement {
static "EMPTY": $RenderElement

constructor()

public "at"<T extends $RenderElement>(arg0: float, arg1: float): T
public "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
public "getZ"(): float
public "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
public "withAlpha"<T extends $RenderElement>(arg0: float): T
public "getX"(): float
public "getWidth"(): integer
public "getHeight"(): integer
public "getY"(): float
public static "of"(arg0: $ScreenElement$Type): $RenderElement
public "render"(arg0: $GuiGraphics$Type): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
get "z"(): float
get "x"(): float
get "width"(): integer
get "height"(): integer
get "y"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRenderElement$Type = ($AbstractRenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRenderElement_ = $AbstractRenderElement$Type;
}}
declare module "packages/net/createmod/catnip/math/$VoxelShaper" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"

export class $VoxelShaper {

constructor()

public "get"(arg0: $Direction$Axis$Type): $VoxelShape
public "get"(arg0: $Direction$Type): $VoxelShape
public static "forHorizontal"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
public static "forDirectional"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
public static "forHorizontalAxis"(arg0: $VoxelShape$Type, arg1: $Direction$Axis$Type): $VoxelShaper
public "withVerticalShapes"(arg0: $VoxelShape$Type): $VoxelShaper
public static "axisAsFace"(arg0: $Direction$Axis$Type): $Direction
public static "forAxis"(arg0: $VoxelShape$Type, arg1: $Direction$Axis$Type): $VoxelShaper
public "withShape"(arg0: $VoxelShape$Type, arg1: $Direction$Type): $VoxelShaper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShaper$Type = ($VoxelShaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShaper_ = $VoxelShaper$Type;
}}
declare module "packages/net/createmod/ponder/foundation/ui/$AbstractPonderScreen" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$NavigatableSimiScreen, $NavigatableSimiScreen$Type} from "packages/net/createmod/catnip/gui/$NavigatableSimiScreen"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$Type} from "packages/net/minecraft/client/gui/screens/$Screen$DeferredTooltipRendering"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"

export class $AbstractPonderScreen extends $NavigatableSimiScreen {
static readonly "INDEX_TITLE": string
static readonly "WELCOME": string
static readonly "CATEGORIES": string
static readonly "DESCRIPTION": string
static readonly "PONDERING": string
static readonly "PONDERING_TAG": string
static readonly "IDENTIFY_MODE": string
static readonly "IN_CHAPTER": string
static readonly "IDENTIFY": string
static readonly "PREVIOUS": string
static readonly "CLOSE": string
static readonly "NEXT": string
static readonly "NEXT_UP": string
static readonly "REPLAY": string
static readonly "SLOW_TEXT": string
static readonly "THINK_BACK": string
static readonly "EXIT": string
static readonly "ASSOCIATED": string
static readonly "COLOR_NAV_ARROW": $Couple<($Color)>
readonly "transition": $LerpedFloat
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPonderScreen$Type = ($AbstractPonderScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPonderScreen_ = $AbstractPonderScreen$Type;
}}
declare module "packages/net/createmod/ponder/foundation/registration/$PonderLocalization" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LangRegistryAccess, $LangRegistryAccess$Type} from "packages/net/createmod/ponder/api/registration/$LangRegistryAccess"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PonderLocalization implements $LangRegistryAccess {
static readonly "LANG_PREFIX": string
static readonly "UI_PREFIX": string
readonly "shared": $Map<($ResourceLocation), (string)>
readonly "tag": $Map<($ResourceLocation), ($Couple<(string)>)>
readonly "specific": $Map<($ResourceLocation), ($Map<(string), (string)>)>

constructor()

public "provideLang"(arg0: string, arg1: $BiConsumer$Type<(string), (string)>): void
public "clearShared"(): void
public "getTagDescription"(arg0: $ResourceLocation$Type): string
public "getSpecific"(arg0: $ResourceLocation$Type, arg1: string, ...arg2: (any)[]): string
public "getSpecific"(arg0: $ResourceLocation$Type, arg1: string): string
public "registerShared"(arg0: $ResourceLocation$Type, arg1: string): void
public "registerSpecific"(arg0: $ResourceLocation$Type, arg1: string, arg2: string): void
public "generateSceneLang"(): void
public "registerTag"(arg0: $ResourceLocation$Type, arg1: string, arg2: string): void
public "clearAll"(): void
public "getTagName"(arg0: $ResourceLocation$Type): string
public "getShared"(arg0: $ResourceLocation$Type): string
public "getShared"(arg0: $ResourceLocation$Type, ...arg1: (any)[]): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderLocalization$Type = ($PonderLocalization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderLocalization_ = $PonderLocalization$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$LangRegistryAccess" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $LangRegistryAccess {

 "provideLang"(arg0: string, arg1: $BiConsumer$Type<(string), (string)>): void
 "getTagDescription"(arg0: $ResourceLocation$Type): string
 "getSpecific"(arg0: $ResourceLocation$Type, arg1: string): string
 "getSpecific"(arg0: $ResourceLocation$Type, arg1: string, ...arg2: (any)[]): string
 "getTagName"(arg0: $ResourceLocation$Type): string
 "getShared"(arg0: $ResourceLocation$Type): string
 "getShared"(arg0: $ResourceLocation$Type, ...arg1: (any)[]): string
}

export namespace $LangRegistryAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangRegistryAccess$Type = ($LangRegistryAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangRegistryAccess_ = $LangRegistryAccess$Type;
}}
declare module "packages/net/createmod/catnip/data/$WorldAttached" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $WorldAttached<T> {

constructor(arg0: $Function$Type<($LevelAccessor$Type), (T)>)

public "get"(arg0: $LevelAccessor$Type): T
public "put"(arg0: $LevelAccessor$Type, arg1: T): void
public "replace"(arg0: $LevelAccessor$Type, arg1: $Consumer$Type<(T)>): T
public "replace"(arg0: $LevelAccessor$Type): T
public "empty"(arg0: $BiConsumer$Type<($LevelAccessor$Type), (T)>): void
public "empty"(arg0: $Consumer$Type<(T)>): void
public static "invalidateWorld"(arg0: $LevelAccessor$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldAttached$Type<T> = ($WorldAttached<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldAttached_<T> = $WorldAttached$Type<(T)>;
}}
declare module "packages/net/createmod/catnip/lang/$LangBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(arg0: string)

public "add"(arg0: $LangBuilder$Type): $LangBuilder
public "add"(arg0: $MutableComponent$Type): $LangBuilder
public "add"(arg0: $Component$Type): $LangBuilder
public "component"(): $MutableComponent
public "newLine"(): $LangBuilder
public "color"(arg0: integer): $LangBuilder
public "color"(arg0: $Color$Type): $LangBuilder
public "text"(arg0: $ChatFormatting$Type, arg1: string): $LangBuilder
public "text"(arg0: string): $LangBuilder
public "text"(arg0: integer, arg1: string): $LangBuilder
public "space"(): $LangBuilder
public "string"(): string
public "style"(arg0: $ChatFormatting$Type): $LangBuilder
public "addTo"(arg0: $List$Type<(any)>): void
public static "resolveBuilders"(arg0: (any)[]): (any)[]
public "json"(): string
public "translate"(arg0: string, ...arg1: (any)[]): $LangBuilder
public "sendStatus"(arg0: $Player$Type): void
public "sendChat"(arg0: $Player$Type): void
public "forGoggles"(arg0: $List$Type<(any)>, arg1: integer): void
public "forGoggles"(arg0: $List$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$Type = ($LangBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangBuilder_ = $LangBuilder$Type;
}}
declare module "packages/net/createmod/ponder/api/$PonderPalette" {
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PonderPalette extends $Enum<($PonderPalette)> {
static readonly "WHITE": $PonderPalette
static readonly "BLACK": $PonderPalette
static readonly "RED": $PonderPalette
static readonly "GREEN": $PonderPalette
static readonly "BLUE": $PonderPalette
static readonly "SLOW": $PonderPalette
static readonly "MEDIUM": $PonderPalette
static readonly "FAST": $PonderPalette
static readonly "INPUT": $PonderPalette
static readonly "OUTPUT": $PonderPalette


public static "values"(): ($PonderPalette)[]
public static "valueOf"(arg0: string): $PonderPalette
public "getColorObject"(): $Color
public "getColor"(): integer
get "colorObject"(): $Color
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderPalette$Type = (("red") | ("output") | ("input") | ("green") | ("fast") | ("white") | ("blue") | ("slow") | ("black") | ("medium")) | ($PonderPalette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderPalette_ = $PonderPalette$Type;
}}
declare module "packages/net/createmod/catnip/data/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<F, S> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public "swap"(): $Pair<(S), (F)>
public "getFirst"(): F
public "getSecond"(): S
public "setSecond"(arg0: S): void
public "setFirst"(arg0: F): void
get "first"(): F
get "second"(): S
set "second"(value: S)
set "first"(value: F)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$Type<(F), (S)>;
}}
declare module "packages/net/createmod/ponder/api/scene/$Selection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Outline$OutlineParams, $Outline$OutlineParams$Type} from "packages/net/createmod/catnip/outliner/$Outline$OutlineParams"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Outliner, $Outliner$Type} from "packages/net/createmod/catnip/outliner/$Outliner"

export interface $Selection extends $Iterable<($BlockPos)>, $Predicate<($BlockPos)> {

 "add"(arg0: $Selection$Type): $Selection
 "copy"(): $Selection
 "makeOutline"(arg0: $Outliner$Type, arg1: any): $Outline$OutlineParams
 "makeOutline"(arg0: $Outliner$Type): $Outline$OutlineParams
 "substract"(arg0: $Selection$Type): $Selection
 "getCenter"(): $Vec3
 "iterator"(): $Iterator<($BlockPos)>
 "spliterator"(): $Spliterator<($BlockPos)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "test"(arg0: $BlockPos$Type): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockPos)>
 "negate"(): $Predicate<($BlockPos)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockPos)>
}

export namespace $Selection {
function isEqual<T>(arg0: any): $Predicate<($BlockPos)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Selection$Type = ($Selection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Selection_ = $Selection$Type;
}}
declare module "packages/net/createmod/catnip/math/$Pointing" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Pointing extends $Enum<($Pointing)> implements $StringRepresentable {
static readonly "UP": $Pointing
static readonly "LEFT": $Pointing
static readonly "DOWN": $Pointing
static readonly "RIGHT": $Pointing


public static "values"(): ($Pointing)[]
public static "valueOf"(arg0: string): $Pointing
public "getXRotation"(): integer
public "getCombinedDirection"(arg0: $Direction$Type): $Direction
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "xRotation"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointing$Type = (("left") | ("up") | ("right") | ("down")) | ($Pointing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointing_ = $Pointing$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$ConfigGroup" {
import {$ConfigBase$CValue, $ConfigBase$CValue$Type} from "packages/net/createmod/catnip/config/$ConfigBase$CValue"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigBase$ConfigGroup extends $ConfigBase$CValue<(boolean), ($ForgeConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: integer, ...arg3: (string)[])

public "register"(arg0: $ForgeConfigSpec$Builder$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigGroup$Type = ($ConfigBase$ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigGroup_ = $ConfigBase$ConfigGroup$Type;
}}
declare module "packages/net/createmod/catnip/outliner/$Outline" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$SuperRenderTypeBuffer, $SuperRenderTypeBuffer$Type} from "packages/net/createmod/catnip/render/$SuperRenderTypeBuffer"
import {$Outline$OutlineParams, $Outline$OutlineParams$Type} from "packages/net/createmod/catnip/outliner/$Outline$OutlineParams"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"

export class $Outline {

constructor()

public "tick"(): void
public "bufferCuboidLine"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: $Vector3f$Type, arg3: $Direction$Type, arg4: float, arg5: float, arg6: $Vector4f$Type, arg7: integer, arg8: boolean): void
public "bufferCuboidLine"(arg0: $PoseStack$Type, arg1: $VertexConsumer$Type, arg2: $Vec3$Type, arg3: $Vector3d$Type, arg4: $Vector3d$Type, arg5: float, arg6: $Vector4f$Type, arg7: integer, arg8: boolean): void
public "bufferCuboid"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: $Vector3f$Type, arg3: $Vector3f$Type, arg4: $Vector4f$Type, arg5: integer, arg6: boolean): void
public "render"(arg0: $PoseStack$Type, arg1: $SuperRenderTypeBuffer$Type, arg2: $Vec3$Type, arg3: float): void
public "bufferQuad"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: $Vector3f$Type, arg3: $Vector3f$Type, arg4: $Vector3f$Type, arg5: $Vector3f$Type, arg6: $Vector4f$Type, arg7: integer, arg8: $Vector3f$Type): void
public "bufferQuad"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: $Vector3f$Type, arg3: $Vector3f$Type, arg4: $Vector3f$Type, arg5: $Vector3f$Type, arg6: $Vector4f$Type, arg7: float, arg8: float, arg9: float, arg10: float, arg11: integer, arg12: $Vector3f$Type): void
public "getParams"(): $Outline$OutlineParams
get "params"(): $Outline$OutlineParams
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Outline$Type = ($Outline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Outline_ = $Outline$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$EffectInstructions" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ParticleEmitter, $ParticleEmitter$Type} from "packages/net/createmod/ponder/api/$ParticleEmitter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $EffectInstructions {

 "particleEmitterWithinBlockSpace"<T extends $ParticleOptions>(arg0: T, arg1: $Vec3$Type): $ParticleEmitter
 "simpleParticleEmitter"<T extends $ParticleOptions>(arg0: T, arg1: $Vec3$Type): $ParticleEmitter
 "indicateRedstone"(arg0: $BlockPos$Type): void
 "indicateSuccess"(arg0: $BlockPos$Type): void
 "createRedstoneParticles"(arg0: $BlockPos$Type, arg1: integer, arg2: integer): void
 "emitParticles"(arg0: $Vec3$Type, arg1: $ParticleEmitter$Type, arg2: float, arg3: integer): void
}

export namespace $EffectInstructions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectInstructions$Type = ($EffectInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectInstructions_ = $EffectInstructions$Type;
}}
declare module "packages/net/createmod/catnip/gui/$AbstractSimiScreen" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$Type} from "packages/net/minecraft/client/gui/screens/$Screen$DeferredTooltipRendering"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractSimiScreenMixin, $AbstractSimiScreenMixin$Type} from "packages/net/liukrast/schematicdisplay/mixin/$AbstractSimiScreenMixin"

export class $AbstractSimiScreen extends $Screen implements $AbstractSimiScreenMixin {
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering


public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "isPauseScreen"(): boolean
public "tick"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getFocused"(): $GuiEventListener
get "pauseScreen"(): boolean
get "focused"(): $GuiEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimiScreen$Type = ($AbstractSimiScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimiScreen_ = $AbstractSimiScreen$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$WorldInstructions" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WorldSectionElement, $WorldSectionElement$Type} from "packages/net/createmod/ponder/api/element/$WorldSectionElement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ElementLink, $ElementLink$Type} from "packages/net/createmod/ponder/api/element/$ElementLink"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EntityElement, $EntityElement$Type} from "packages/net/createmod/ponder/api/element/$EntityElement"
import {$Selection, $Selection$Type} from "packages/net/createmod/ponder/api/scene/$Selection"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $WorldInstructions {

 "showIndependentSectionImmediately"(arg0: $Selection$Type): $ElementLink<($WorldSectionElement)>
 "incrementBlockBreakingProgress"(arg0: $BlockPos$Type): void
 "restoreBlocks"(arg0: $Selection$Type): void
 "modifyBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $Class$Type<(T)>, arg2: $Consumer$Type<(T)>): void
 "hideIndependentSection"(arg0: $ElementLink$Type<($WorldSectionElement$Type)>, arg1: $Direction$Type): void
 "showSection"(arg0: $Selection$Type, arg1: $Direction$Type): void
 "showIndependentSection"(arg0: $Selection$Type, arg1: $Direction$Type): $ElementLink<($WorldSectionElement)>
 "toggleRedstonePower"(arg0: $Selection$Type): void
 "modifyBlock"(arg0: $BlockPos$Type, arg1: $UnaryOperator$Type<($BlockState$Type)>, arg2: boolean): void
 "moveSection"(arg0: $ElementLink$Type<($WorldSectionElement$Type)>, arg1: $Vec3$Type, arg2: integer): void
 "createItemEntity"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $ItemStack$Type): $ElementLink<($EntityElement)>
 "modifyEntity"(arg0: $ElementLink$Type<($EntityElement$Type)>, arg1: $Consumer$Type<($Entity$Type)>): void
 "modifyEntities"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
 "rotateSection"(arg0: $ElementLink$Type<($WorldSectionElement$Type)>, arg1: double, arg2: double, arg3: double, arg4: integer): void
 "cycleBlockProperty"(arg0: $BlockPos$Type, arg1: $Property$Type<(any)>): void
 "makeSectionIndependent"(arg0: $Selection$Type): $ElementLink<($WorldSectionElement)>
 "hideSection"(arg0: $Selection$Type, arg1: $Direction$Type): void
 "configureCenterOfRotation"(arg0: $ElementLink$Type<($WorldSectionElement$Type)>, arg1: $Vec3$Type): void
 "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: $Class$Type<(any)>, arg2: $Consumer$Type<($CompoundTag$Type)>): void
 "modifyBlockEntityNBT"(arg0: $Selection$Type, arg1: $Class$Type<(any)>, arg2: $Consumer$Type<($CompoundTag$Type)>, arg3: boolean): void
 "showSectionAndMerge"(arg0: $Selection$Type, arg1: $Direction$Type, arg2: $ElementLink$Type<($WorldSectionElement$Type)>): void
 "modifyBlocks"(arg0: $Selection$Type, arg1: $UnaryOperator$Type<($BlockState$Type)>, arg2: boolean): void
 "glueBlockOnto"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $ElementLink$Type<($WorldSectionElement$Type)>): void
 "configureStabilization"(arg0: $ElementLink$Type<($WorldSectionElement$Type)>, arg1: $Vec3$Type): void
 "replaceBlocks"(arg0: $Selection$Type, arg1: $BlockState$Type, arg2: boolean): void
 "destroyBlock"(arg0: $BlockPos$Type): void
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: boolean): void
 "modifyEntitiesInside"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $Selection$Type, arg2: $Consumer$Type<(T)>): void
 "setBlocks"(arg0: $Selection$Type, arg1: $BlockState$Type, arg2: boolean): void
 "createEntity"(arg0: $Function$Type<($Level$Type), ($Entity$Type)>): $ElementLink<($EntityElement)>
}

export namespace $WorldInstructions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldInstructions$Type = ($WorldInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldInstructions_ = $WorldInstructions$Type;
}}
declare module "packages/net/createmod/ponder/foundation/ui/$PonderUI" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$NavigatableSimiScreen, $NavigatableSimiScreen$Type} from "packages/net/createmod/catnip/gui/$NavigatableSimiScreen"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Pointing, $Pointing$Type} from "packages/net/createmod/catnip/math/$Pointing"
import {$AbstractPonderScreen, $AbstractPonderScreen$Type} from "packages/net/createmod/ponder/foundation/ui/$AbstractPonderScreen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$Type} from "packages/net/minecraft/client/gui/screens/$Screen$DeferredTooltipRendering"
import {$PonderTag, $PonderTag$Type} from "packages/net/createmod/ponder/foundation/$PonderTag"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"

export class $PonderUI extends $AbstractPonderScreen {
static "ponderTicks": integer
static "ponderPartialTicksPaused": float
static readonly "BACKGROUND_TRANSPARENT": $Color
static readonly "BACKGROUND_FLAT": $Color
static readonly "BACKGROUND_IMPORTANT": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
static readonly "COLOR_HOVER": $Couple<($Color)>
static readonly "COLOR_HIGHLIGHT": $Couple<($Color)>
static readonly "MISSING_VANILLA_ENTRY": $Couple<($Color)>
static readonly "MISSING_MODDED_ENTRY": $Couple<($Color)>
static readonly "INDEX_TITLE": string
static readonly "WELCOME": string
static readonly "CATEGORIES": string
static readonly "DESCRIPTION": string
static readonly "PONDERING": string
static readonly "PONDERING_TAG": string
static readonly "IDENTIFY_MODE": string
static readonly "IN_CHAPTER": string
static readonly "IDENTIFY": string
static readonly "PREVIOUS": string
static readonly "CLOSE": string
static readonly "NEXT": string
static readonly "NEXT_UP": string
static readonly "REPLAY": string
static readonly "SLOW_TEXT": string
static readonly "THINK_BACK": string
static readonly "EXIT": string
static readonly "ASSOCIATED": string
static readonly "COLOR_NAV_ARROW": $Couple<($Color)>
readonly "transition": $LerpedFloat
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering


public static "of"(arg0: $ResourceLocation$Type): $PonderUI
public static "of"(arg0: $ItemStack$Type, arg1: $PonderTag$Type): $PonderUI
public static "of"(arg0: $ItemStack$Type): $PonderUI
public "isComfyReadingEnabled"(): boolean
public "updateIdentifiedItem"(arg0: $PonderScene$Type): void
public "getActiveScene"(): $PonderScene
public "coolDownAfterSkip"(): void
public "getHoveredTooltipItem"(): $ItemStack
public "setComfyReadingEnabled"(arg0: boolean): void
public "shareContextWith"(arg0: $NavigatableSimiScreen$Type): void
public static "getPartialTicks"(): float
public "getFontRenderer"(): $Font
public static "renderSpeechBox"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean, arg6: $Pointing$Type, arg7: boolean): void
public "isEquivalentTo"(arg0: $NavigatableSimiScreen$Type): boolean
public "removed"(): void
public "isPauseScreen"(): boolean
public "tick"(): void
public "renderBackground"(arg0: $GuiGraphics$Type): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
public "seekToTime"(arg0: integer): void
public "getSubject"(): $ItemStack
get "comfyReadingEnabled"(): boolean
get "activeScene"(): $PonderScene
get "hoveredTooltipItem"(): $ItemStack
set "comfyReadingEnabled"(value: boolean)
get "partialTicks"(): float
get "fontRenderer"(): $Font
get "pauseScreen"(): boolean
get "subject"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderUI$Type = ($PonderUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderUI_ = $PonderUI$Type;
}}
declare module "packages/net/createmod/ponder/mixin/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "catnip$callSetLevel"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/net/createmod/ponder/foundation/registration/$PonderSceneRegistry" {
import {$SceneRegistryAccess, $SceneRegistryAccess$Type} from "packages/net/createmod/ponder/api/registration/$SceneRegistryAccess"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PonderLocalization, $PonderLocalization$Type} from "packages/net/createmod/ponder/foundation/registration/$PonderLocalization"
import {$StructureTemplate, $StructureTemplate$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$StoryBoardEntry, $StoryBoardEntry$Type} from "packages/net/createmod/ponder/api/registration/$StoryBoardEntry"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $PonderSceneRegistry implements $SceneRegistryAccess {

constructor(arg0: $PonderLocalization$Type)

public "compile"(arg0: $Collection$Type<($StoryBoardEntry$Type)>): $List<($PonderScene)>
public "compile"(arg0: $ResourceLocation$Type): $List<($PonderScene)>
public "clearRegistry"(): void
public static "loadSchematic"(arg0: $ResourceManager$Type, arg1: $ResourceLocation$Type): $StructureTemplate
public static "loadSchematic"(arg0: $InputStream$Type): $StructureTemplate
public static "loadSchematic"(arg0: $ResourceLocation$Type): $StructureTemplate
public "addStoryBoard"(arg0: $StoryBoardEntry$Type): void
public static "compileScene"(arg0: $PonderLocalization$Type, arg1: $StoryBoardEntry$Type, arg2: $PonderLevel$Type): $PonderScene
public "doScenesExistForId"(arg0: $ResourceLocation$Type): boolean
public "getRegisteredEntries"(): $Collection<($Map$Entry<($ResourceLocation), ($StoryBoardEntry)>)>
get "registeredEntries"(): $Collection<($Map$Entry<($ResourceLocation), ($StoryBoardEntry)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderSceneRegistry$Type = ($PonderSceneRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderSceneRegistry_ = $PonderSceneRegistry$Type;
}}
declare module "packages/net/createmod/ponder/foundation/$PonderScene$SceneTransform" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export class $PonderScene$SceneTransform {
 "xRotation": $LerpedFloat
 "yRotation": $LerpedFloat

constructor(arg0: $PonderScene$Type)

public "apply"(arg0: $PoseStack$Type, arg1: float): $PoseStack
public "apply"(arg0: $PoseStack$Type): $PoseStack
public "tick"(): void
public "screenToScene"(arg0: double, arg1: double, arg2: integer, arg3: float): $Vec3
public "updateScreenParams"(arg0: integer, arg1: integer, arg2: double): void
public "updateSceneRVE"(arg0: float): void
public "sceneToScreen"(arg0: $Vec3$Type, arg1: float): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderScene$SceneTransform$Type = ($PonderScene$SceneTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderScene$SceneTransform_ = $PonderScene$SceneTransform$Type;
}}
declare module "packages/net/createmod/catnip/gui/widget/$AbstractSimiWidget" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$TickableGuiEventListener, $TickableGuiEventListener$Type} from "packages/net/createmod/catnip/gui/$TickableGuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"
import {$NarrationElementOutput, $NarrationElementOutput$Type} from "packages/net/minecraft/client/gui/narration/$NarrationElementOutput"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
static readonly "HEADER_RGB": $Color
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
static readonly "COLOR_HOVER": $Couple<($Color)>
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_SUCCESS": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>
 "lockedTooltipX": integer
 "lockedTooltipY": integer
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "ACCESSIBILITY_TEXTURE": $ResourceLocation
 "height": integer
 "x": integer
 "y": integer
 "active": boolean
 "visible": boolean
static readonly "UNSET_FG_COLOR": integer


public "tick"(): void
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $BiConsumer$Type<(integer), (integer)>): T
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $Runnable$Type): T
public "runCallback"(arg0: double, arg1: double): void
public "setActive"<T extends $AbstractSimiWidget>(arg0: boolean): T
public "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
public "setHeight"(arg0: integer): void
public "onClick"(arg0: double, arg1: double): void
public "m_168797_"(arg0: $NarrationElementOutput$Type): void
public "getToolTip"(): $List<($Component)>
public "atZLevel"<T extends $AbstractSimiWidget>(arg0: float): T
set "active"(value: boolean)
set "height"(value: integer)
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimiWidget$Type = ($AbstractSimiWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimiWidget_ = $AbstractSimiWidget$Type;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser {

 "chase"(arg0: double, arg1: double, arg2: double): float

(arg0: double): $LerpedFloat$Chaser
}

export namespace $LerpedFloat$Chaser {
const IDLE: $LerpedFloat$Chaser
const EXP: $LerpedFloat$Chaser
const LINEAR: $LerpedFloat$Chaser
function exp(arg0: double): $LerpedFloat$Chaser
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Chaser$Type = ($LerpedFloat$Chaser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Chaser_ = $LerpedFloat$Chaser$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$InputElementBuilder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"

export interface $InputElementBuilder {

 "whileSneaking"(): $InputElementBuilder
 "leftClick"(): $InputElementBuilder
 "rightClick"(): $InputElementBuilder
 "scroll"(): $InputElementBuilder
 "withItem"(arg0: $ItemStack$Type): $InputElementBuilder
 "showing"(arg0: $ScreenElement$Type): $InputElementBuilder
 "whileCTRL"(): $InputElementBuilder
}

export namespace $InputElementBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputElementBuilder$Type = ($InputElementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputElementBuilder_ = $InputElementBuilder$Type;
}}
declare module "packages/net/createmod/catnip/render/$SpriteShiftEntry" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $SpriteShiftEntry {

constructor()

public "set"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): void
public "getTarget"(): $TextureAtlasSprite
public "getOriginalResourceLocation"(): $ResourceLocation
public "getOriginal"(): $TextureAtlasSprite
public static "getUnInterpolatedV"(arg0: $TextureAtlasSprite$Type, arg1: float): float
public static "getUnInterpolatedU"(arg0: $TextureAtlasSprite$Type, arg1: float): float
public "getTargetResourceLocation"(): $ResourceLocation
public "getTargetU"(arg0: float): float
public "getTargetV"(arg0: float): float
get "target"(): $TextureAtlasSprite
get "originalResourceLocation"(): $ResourceLocation
get "original"(): $TextureAtlasSprite
get "targetResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteShiftEntry$Type = ($SpriteShiftEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteShiftEntry_ = $SpriteShiftEntry$Type;
}}
declare module "packages/net/createmod/catnip/data/$Couple" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $Couple<T> extends $Pair<(T), (T)> implements $Iterable<(T)> {


public "get"(arg0: boolean): T
public "replace"(arg0: $Function$Type<(T), (T)>): void
public "iterator"(): $Iterator<(T)>
public "map"<S>(arg0: $Function$Type<(T), (S)>): $Couple<(S)>
public "stream"(): $Stream<(T)>
public "set"(arg0: boolean, arg1: T): void
public "forEach"(arg0: $Consumer$Type<(any)>): void
public static "create"<T>(arg0: $Supplier$Type<(T)>): $Couple<(T)>
public static "create"<T>(arg0: T, arg1: T): $Couple<(T)>
public static "createWithContext"<T>(arg0: $Function$Type<(boolean), (T)>): $Couple<(T)>
public "mapWithContext"<S>(arg0: $BiFunction$Type<(T), (boolean), (S)>): $Couple<(S)>
public "mapWithParams"<S, R>(arg0: $BiFunction$Type<(T), (R), (S)>, arg1: $Couple$Type<(R)>): $Couple<(S)>
public "mapNotNullWithParam"<S, R>(arg0: $BiFunction$Type<(T), (R), (S)>, arg1: R): $Couple<(S)>
public "replaceWithContext"(arg0: $BiFunction$Type<(T), (boolean), (T)>): void
public "replaceWithParams"<S>(arg0: $BiFunction$Type<(T), (S), (T)>, arg1: $Couple$Type<(S)>): void
public "forEachWithContext"(arg0: $BiConsumer$Type<(T), (boolean)>): void
public "forEachWithParams"<S>(arg0: $BiConsumer$Type<(T), (S)>, arg1: $Couple$Type<(S)>): void
public "serializeEach"(arg0: $Function$Type<(T), ($CompoundTag$Type)>): $ListTag
public static "deserializeEach"<S>(arg0: $ListTag$Type, arg1: $Function$Type<($CompoundTag$Type), (S)>): $Couple<(S)>
public "mapNotNull"<S>(arg0: $Function$Type<(T), (S)>): $Couple<(S)>
public "both"(arg0: $Predicate$Type<(T)>): boolean
public "either"(arg0: $Predicate$Type<(T)>): boolean
public "spliterator"(): $Spliterator<(T)>
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Couple$Type<T> = ($Couple<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Couple_<T> = $Couple$Type<(T)>;
}}
declare module "packages/net/createmod/catnip/outliner/$Outliner" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Outline$OutlineParams, $Outline$OutlineParams$Type} from "packages/net/createmod/catnip/outliner/$Outline$OutlineParams"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$SuperRenderTypeBuffer, $SuperRenderTypeBuffer$Type} from "packages/net/createmod/catnip/render/$SuperRenderTypeBuffer"
import {$Outliner$OutlineEntry, $Outliner$OutlineEntry$Type} from "packages/net/createmod/catnip/outliner/$Outliner$OutlineEntry"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Outline, $Outline$Type} from "packages/net/createmod/catnip/outliner/$Outline"

export class $Outliner {

constructor()

public "remove"(arg0: any): void
public static "getInstance"(): $Outliner
public "keep"(arg0: any): void
public "getOutlines"(): $Map<(any), ($Outliner$OutlineEntry)>
public "showOutline"(arg0: any, arg1: $Outline$Type): $Outline$OutlineParams
public "showCluster"(arg0: any, arg1: $Iterable$Type<($BlockPos$Type)>): $Outline$OutlineParams
public "endChasingLine"(arg0: any, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: float, arg4: boolean): $Outline$OutlineParams
public "renderOutlines"(arg0: $PoseStack$Type, arg1: $SuperRenderTypeBuffer$Type, arg2: $Vec3$Type, arg3: float): void
public "tickOutlines"(): void
public "showLine"(arg0: any, arg1: $Vec3$Type, arg2: $Vec3$Type): $Outline$OutlineParams
public "showAABB"(arg0: any, arg1: $AABB$Type): $Outline$OutlineParams
public "showAABB"(arg0: any, arg1: $AABB$Type, arg2: integer): $Outline$OutlineParams
public "chaseAABB"(arg0: any, arg1: $AABB$Type): $Outline$OutlineParams
public "showItem"(arg0: any, arg1: $Vec3$Type, arg2: $ItemStack$Type): $Outline$OutlineParams
public "edit"(arg0: any): $Optional<($Outline$OutlineParams)>
get "instance"(): $Outliner
get "outlines"(): $Map<(any), ($Outliner$OutlineEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Outliner$Type = ($Outliner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Outliner_ = $Outliner$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$ElementLink" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PonderElement, $PonderElement$Type} from "packages/net/createmod/ponder/api/element/$PonderElement"

export interface $ElementLink<T extends $PonderElement> {

 "cast"(arg0: $PonderElement$Type): T
 "getId"(): $UUID
}

export namespace $ElementLink {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementLink$Type<T> = ($ElementLink<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementLink_<T> = $ElementLink$Type<(T)>;
}}
declare module "packages/net/createmod/ponder/foundation/element/$AnimatedOverlayElementBase" {
import {$AnimatedOverlayElement, $AnimatedOverlayElement$Type} from "packages/net/createmod/ponder/api/element/$AnimatedOverlayElement"
import {$PonderElementBase, $PonderElementBase$Type} from "packages/net/createmod/ponder/foundation/element/$PonderElementBase"
import {$PonderUI, $PonderUI$Type} from "packages/net/createmod/ponder/foundation/ui/$PonderUI"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export class $AnimatedOverlayElementBase extends $PonderElementBase implements $AnimatedOverlayElement {

constructor()

public "getFade"(arg0: float): float
public "setFade"(arg0: float): void
public "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float): void
public "render"(arg0: $PonderScene$Type, arg1: $PonderUI$Type, arg2: $GuiGraphics$Type, arg3: float): void
set "fade"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedOverlayElementBase$Type = ($AnimatedOverlayElementBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedOverlayElementBase_ = $AnimatedOverlayElementBase$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$StencilElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderElement, $RenderElement$Type} from "packages/net/createmod/catnip/gui/element/$RenderElement"

export interface $StencilElement extends $RenderElement {

 "transform"(arg0: $GuiGraphics$Type): void
 "renderElement"(arg0: $GuiGraphics$Type): void
 "renderStencil"(arg0: $GuiGraphics$Type): void
 "prepareStencil"(arg0: $GuiGraphics$Type): void
 "prepareElement"(arg0: $GuiGraphics$Type): void
 "render"(arg0: $GuiGraphics$Type): void
 "cleanUp"(arg0: $GuiGraphics$Type): void
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void
 "getZ"(): float
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "getX"(): float
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $StencilElement {
function of(arg0: $ScreenElement$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StencilElement$Type = ($StencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StencilElement_ = $StencilElement$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase" {
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigBase {
 "specification": $ForgeConfigSpec

constructor()

public "getName"(): string
public "registerAll"(arg0: $ForgeConfigSpec$Builder$Type): void
public "onLoad"(): void
public "onReload"(): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$Type = ($ConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase_ = $ConfigBase$Type;
}}
declare module "packages/net/createmod/ponder/foundation/$PonderScene" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$StoryBoardEntry$SceneOrderingEntry, $StoryBoardEntry$SceneOrderingEntry$Type} from "packages/net/createmod/ponder/api/registration/$StoryBoardEntry$SceneOrderingEntry"
import {$ElementLink, $ElementLink$Type} from "packages/net/createmod/ponder/api/element/$ElementLink"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderScene$SceneTransform, $PonderScene$SceneTransform$Type} from "packages/net/createmod/ponder/foundation/$PonderScene$SceneTransform"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SceneBuildingUtil, $SceneBuildingUtil$Type} from "packages/net/createmod/ponder/api/scene/$SceneBuildingUtil"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$WorldSectionElement, $WorldSectionElement$Type} from "packages/net/createmod/ponder/api/element/$WorldSectionElement"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SceneBuilder, $SceneBuilder$Type} from "packages/net/createmod/ponder/api/scene/$SceneBuilder"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Outliner, $Outliner$Type} from "packages/net/createmod/catnip/outliner/$Outliner"
import {$PonderLocalization, $PonderLocalization$Type} from "packages/net/createmod/ponder/foundation/registration/$PonderLocalization"
import {$PonderTag, $PonderTag$Type} from "packages/net/createmod/ponder/foundation/$PonderTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SuperRenderTypeBuffer, $SuperRenderTypeBuffer$Type} from "packages/net/createmod/catnip/render/$SuperRenderTypeBuffer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PonderUI, $PonderUI$Type} from "packages/net/createmod/ponder/foundation/ui/$PonderUI"
import {$PonderElement, $PonderElement$Type} from "packages/net/createmod/ponder/api/element/$PonderElement"

export class $PonderScene {
static readonly "TITLE_KEY": string

constructor(arg0: $PonderLevel$Type, arg1: $PonderLocalization$Type, arg2: string, arg3: $ResourceLocation$Type, arg4: $Collection$Type<($ResourceLocation$Type)>, arg5: $Collection$Type<($StoryBoardEntry$SceneOrderingEntry$Type)>)

public "builder"(): $SceneBuilder
public "begin"(): void
public "getBounds"(): $BoundingBox
public "getLocation"(): $ResourceLocation
public "resolve"<E extends $PonderElement>(arg0: $ElementLink$Type<(E)>): E
public "forEach"<T extends $PonderElement>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "getId"(): $ResourceLocation
public "reset"(): void
public "getString"(arg0: string): string
public "tick"(): void
public "rayTraceScene"(arg0: $Vec3$Type, arg1: $Vec3$Type): $Pair<($ItemStack), ($BlockPos)>
public "setPointOfInterest"(arg0: $Vec3$Type): void
public "getOrderingEntries"(): $List<($StoryBoardEntry$SceneOrderingEntry)>
public "getSceneBuildingUtil"(): $SceneBuildingUtil
public "renderOverlay"(arg0: $PonderUI$Type, arg1: $GuiGraphics$Type, arg2: float): void
public "resolveOptional"<E extends $PonderElement>(arg0: $ElementLink$Type<(E)>): $Optional<(E)>
public "linkElement"<E extends $PonderElement>(arg0: E, arg1: $ElementLink$Type<(E)>): void
public "registerText"(arg0: string, ...arg1: (any)[]): $Supplier<(string)>
public "registerText"(arg0: string): $Supplier<(string)>
public "forEachWorldEntity"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "getPointOfInterest"(): $Vec3
public "stopCounting"(): void
public "addToSceneTime"(arg0: integer): void
public "renderScene"(arg0: $SuperRenderTypeBuffer$Type, arg1: $GuiGraphics$Type, arg2: float): void
public "markKeyframe"(arg0: integer): void
public "forEachVisible"<T extends $PonderElement>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "getSceneProgress"(): float
public "getBaseWorldSection"(): $WorldSectionElement
public "getKeyframeCount"(): integer
public "getKeyframeTime"(arg0: integer): integer
public "getOutliner"(): $Outliner
public "setFinished"(arg0: boolean): void
public "getBasePlateOffsetX"(): integer
public "getBasePlateOffsetZ"(): integer
public "shouldHidePlatformShadow"(): boolean
public "getBasePlateSize"(): integer
public "getScaleFactor"(): float
public "getCurrentTime"(): integer
public "setNextUpEnabled"(arg0: boolean): void
public "isNextUpEnabled"(): boolean
public "getTitle"(): string
public "getTotalTime"(): integer
public "getTags"(): $List<($PonderTag)>
public "getWorld"(): $PonderLevel
public "isFinished"(): boolean
public "fadeOut"(): void
public "deselect"(): void
public "seekToTime"(arg0: integer): void
public "runWith"<E extends $PonderElement>(arg0: $ElementLink$Type<(E)>, arg1: $Consumer$Type<(E)>): void
public "applyTo"<E extends $PonderElement, F>(arg0: $ElementLink$Type<(E)>, arg1: $Function$Type<(E), (F)>): F
public "getYOffset"(): float
public "getTransform"(): $PonderScene$SceneTransform
public "getNamespace"(): string
public "addElement"(arg0: $PonderElement$Type): void
public "getElements"(): $Set<($PonderElement)>
get "bounds"(): $BoundingBox
get "location"(): $ResourceLocation
get "id"(): $ResourceLocation
set "pointOfInterest"(value: $Vec3$Type)
get "orderingEntries"(): $List<($StoryBoardEntry$SceneOrderingEntry)>
get "sceneBuildingUtil"(): $SceneBuildingUtil
get "pointOfInterest"(): $Vec3
get "sceneProgress"(): float
get "baseWorldSection"(): $WorldSectionElement
get "keyframeCount"(): integer
get "outliner"(): $Outliner
set "finished"(value: boolean)
get "basePlateOffsetX"(): integer
get "basePlateOffsetZ"(): integer
get "basePlateSize"(): integer
get "scaleFactor"(): float
get "currentTime"(): integer
set "nextUpEnabled"(value: boolean)
get "nextUpEnabled"(): boolean
get "title"(): string
get "totalTime"(): integer
get "tags"(): $List<($PonderTag)>
get "world"(): $PonderLevel
get "finished"(): boolean
get "yOffset"(): float
get "transform"(): $PonderScene$SceneTransform
get "namespace"(): string
get "elements"(): $Set<($PonderElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderScene$Type = ($PonderScene);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderScene_ = $PonderScene$Type;
}}
declare module "packages/net/createmod/catnip/gui/$NavigatableSimiScreen" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSimiScreen, $AbstractSimiScreen$Type} from "packages/net/createmod/catnip/gui/$AbstractSimiScreen"
import {$Color, $Color$Type} from "packages/net/createmod/catnip/theme/$Color"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$Type} from "packages/net/minecraft/client/gui/screens/$Screen$DeferredTooltipRendering"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"

export class $NavigatableSimiScreen extends $AbstractSimiScreen {
static readonly "COLOR_NAV_ARROW": $Couple<($Color)>
readonly "transition": $LerpedFloat
static readonly "BACKGROUND_LOCATION": $ResourceLocation
 "title": $Component
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering

constructor()

public static "isCurrentlyRenderingPreviousScreen"(): boolean
public "centerScalingOnMouse"(): void
public "centerScalingOn"(arg0: integer, arg1: integer): void
public "shareContextWith"(arg0: $NavigatableSimiScreen$Type): void
public "isEquivalentTo"(arg0: $NavigatableSimiScreen$Type): boolean
public "tick"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "onClose"(): void
public "renderBackground"(arg0: $GuiGraphics$Type): void
get "currentlyRenderingPreviousScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatableSimiScreen$Type = ($NavigatableSimiScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigatableSimiScreen_ = $NavigatableSimiScreen$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$VectorUtil" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $VectorUtil {

 "of"(arg0: double, arg1: double, arg2: double): $Vec3
 "blockSurface"(arg0: $BlockPos$Type, arg1: $Direction$Type): $Vec3
 "blockSurface"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: float): $Vec3
 "centerOf"(arg0: integer, arg1: integer, arg2: integer): $Vec3
 "centerOf"(arg0: $BlockPos$Type): $Vec3
 "topOf"(arg0: integer, arg1: integer, arg2: integer): $Vec3
 "topOf"(arg0: $BlockPos$Type): $Vec3
}

export namespace $VectorUtil {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VectorUtil$Type = ($VectorUtil);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VectorUtil_ = $VectorUtil$Type;
}}
declare module "packages/net/createmod/catnip/data/$IntAttached" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pair, $Pair$Type} from "packages/net/createmod/catnip/data/$Pair"

export class $IntAttached<V> extends $Pair<(integer), (V)> {


public "getValue"(): V
public "increment"(): void
public static "read"<T>(arg0: $CompoundTag$Type, arg1: $Function$Type<($CompoundTag$Type), (T)>): $IntAttached<(T)>
public static "comparator"(): $Comparator<(any)>
public "decrement"(): void
public "isZero"(): boolean
public static "with"<V>(arg0: integer, arg1: V): $IntAttached<(V)>
public "serializeNBT"(arg0: $Function$Type<(V), ($CompoundTag$Type)>): $CompoundTag
public "isOrBelowZero"(): boolean
public "exceeds"(arg0: integer): boolean
public static "withZero"<V>(arg0: V): $IntAttached<(V)>
get "value"(): V
get "zero"(): boolean
get "orBelowZero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntAttached$Type<V> = ($IntAttached<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntAttached_<V> = $IntAttached$Type<(V)>;
}}
declare module "packages/net/createmod/catnip/data/$TriState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "DEFAULT": $TriState
static readonly "FALSE": $TriState


public static "values"(): ($TriState)[]
public static "valueOf"(arg0: string): $TriState
public "getValue"(): boolean
public "isDefault"(): boolean
public "isTrue"(): boolean
public "isFalse"(): boolean
get "value"(): boolean
get "default"(): boolean
get "true"(): boolean
get "false"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$Type = (("default") | ("true") | ("false")) | ($TriState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$Type;
}}
declare module "packages/net/createmod/ponder/api/scene/$SpecialInstructions" {
import {$MinecartElement$MinecartConstructor, $MinecartElement$MinecartConstructor$Type} from "packages/net/createmod/ponder/api/element/$MinecartElement$MinecartConstructor"
import {$AnimatedSceneElement, $AnimatedSceneElement$Type} from "packages/net/createmod/ponder/api/element/$AnimatedSceneElement"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ElementLink, $ElementLink$Type} from "packages/net/createmod/ponder/api/element/$ElementLink"
import {$MinecartElement, $MinecartElement$Type} from "packages/net/createmod/ponder/api/element/$MinecartElement"
import {$ParrotElement, $ParrotElement$Type} from "packages/net/createmod/ponder/api/element/$ParrotElement"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $SpecialInstructions {

 "changeBirbPose"(arg0: $ElementLink$Type<($ParrotElement$Type)>, arg1: $Supplier$Type<(any)>): void
 "rotateParrot"(arg0: $ElementLink$Type<($ParrotElement$Type)>, arg1: double, arg2: double, arg3: double, arg4: integer): void
 "hideElement"<T extends $AnimatedSceneElement>(arg0: $ElementLink$Type<(T)>, arg1: $Direction$Type): void
 "movePointOfInterest"(arg0: $BlockPos$Type): void
 "movePointOfInterest"(arg0: $Vec3$Type): void
 "createBirb"(arg0: $Vec3$Type, arg1: $Supplier$Type<(any)>): $ElementLink<($ParrotElement)>
 "moveParrot"(arg0: $ElementLink$Type<($ParrotElement$Type)>, arg1: $Vec3$Type, arg2: integer): void
 "createCart"(arg0: $Vec3$Type, arg1: float, arg2: $MinecartElement$MinecartConstructor$Type): $ElementLink<($MinecartElement)>
 "moveCart"(arg0: $ElementLink$Type<($MinecartElement$Type)>, arg1: $Vec3$Type, arg2: integer): void
 "rotateCart"(arg0: $ElementLink$Type<($MinecartElement$Type)>, arg1: float, arg2: integer): void
}

export namespace $SpecialInstructions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialInstructions$Type = ($SpecialInstructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialInstructions_ = $SpecialInstructions$Type;
}}
declare module "packages/net/createmod/catnip/outliner/$Outliner$OutlineEntry" {
import {$Outline, $Outline$Type} from "packages/net/createmod/catnip/outliner/$Outline"

export class $Outliner$OutlineEntry {
static readonly "FADE_TICKS": integer

constructor(arg0: $Outline$Type)

public "isAlive"(): boolean
public "tick"(): void
public "getTicksTillRemoval"(): integer
public "getOutline"(): $Outline
public "isFading"(): boolean
get "alive"(): boolean
get "ticksTillRemoval"(): integer
get "outline"(): $Outline
get "fading"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Outliner$OutlineEntry$Type = ($Outliner$OutlineEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Outliner$OutlineEntry_ = $Outliner$OutlineEntry$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor {

 "catnip$getVertices"(): integer

(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$Type;
}}
declare module "packages/net/createmod/catnip/theme/$Color" {
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Style, $Style$Type} from "packages/net/minecraft/network/chat/$Style"
import {$Couple, $Couple$Type} from "packages/net/createmod/catnip/data/$Couple"

export class $Color {
static readonly "TRANSPARENT_BLACK": $Color
static readonly "BLACK": $Color
static readonly "WHITE": $Color
static readonly "RED": $Color
static readonly "GREEN": $Color
static readonly "PURPLE": $Color
static readonly "SPRING_GREEN": $Color

constructor(arg0: integer, arg1: boolean)
constructor(arg0: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)

public "setValue"(arg0: integer): $Color
public "copy"(): $Color
public "copy"(arg0: boolean): $Color
public static "generateFromLong"(arg0: long): $Color
public "modifyValue"(arg0: $UnaryOperator$Type<(integer)>): $Color
public "ensureMutable"(): $Color
public "scaleAlphaForText"(arg0: float): $Color
public static "rainbowColor"(arg0: integer): $Color
public "getRedAsFloat"(): float
public "getGreenAsFloat"(): float
public "getBlueAsFloat"(): float
public "getAlphaAsFloat"(): float
public "setAlpha"(arg0: float): $Color
public "setAlpha"(arg0: integer): $Color
public "getRGB"(): integer
public "setRed"(arg0: integer): $Color
public "setRed"(arg0: float): $Color
public "setGreen"(arg0: integer): $Color
public "setGreen"(arg0: float): $Color
public "setBlue"(arg0: float): $Color
public "setBlue"(arg0: integer): $Color
public "asVectorF"(): $Vector3f
public "mixWith"(arg0: $Color$Type, arg1: float): $Color
public static "mixColors"(arg0: $Color$Type, arg1: $Color$Type, arg2: float): $Color
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public static "mixColors"(arg0: $Couple$Type<($Color$Type)>, arg1: float): $Color
public "asVector"(): $Vec3
public "asStyle"(): $Style
public "scaleAlpha"(arg0: float): $Color
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "brighter"(): $Color
public "darker"(): $Color
public "getAlpha"(): integer
public "setImmutable"(): $Color
set "value"(value: integer)
get "redAsFloat"(): float
get "greenAsFloat"(): float
get "blueAsFloat"(): float
get "alphaAsFloat"(): float
set "alpha"(value: float)
set "alpha"(value: integer)
get "rGB"(): integer
set "red"(value: integer)
set "red"(value: float)
set "green"(value: integer)
set "green"(value: float)
set "blue"(value: float)
set "blue"(value: integer)
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {

}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$Type = ($RenderTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$Type;
}}
declare module "packages/net/createmod/catnip/levelWrappers/$SchematicLevel" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$WrappedLevel, $WrappedLevel$Type} from "packages/net/createmod/catnip/levelWrappers/$WrappedLevel"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SchematicLevelAccessor, $SchematicLevelAccessor$Type} from "packages/net/createmod/catnip/levelWrappers/$SchematicLevelAccessor"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export class $SchematicLevel extends $WrappedLevel implements $ServerLevelAccessor, $SchematicLevelAccessor {
 "anchor": $BlockPos
 "renderMode": boolean
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(arg0: $Level$Type)
constructor(arg0: $BlockPos$Type, arg1: $Level$Type)

public "getBounds"(): $BoundingBox
public "getBlockEntities"(): $Iterable<($BlockEntity)>
public "getAllPositions"(): $Set<($BlockPos)>
public "getEntityList"(): $List<($Entity)>
public "getBlockMap"(): $Map<($BlockPos), ($BlockState)>
public "getRenderedBlockEntities"(): $Iterable<($BlockEntity)>
public "getBlockState"(arg0: $BlockPos$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
public "addFreshEntity"(arg0: $Entity$Type): boolean
public "getFluidState"(arg0: $BlockPos$Type): $FluidState
public "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
public "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
public "sendBlockUpdated"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $BlockState$Type, arg3: integer): void
public "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
public "getSkyDarken"(): integer
public "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
public "players"(): $List<(any)>
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
public "getShade"(arg0: $Direction$Type, arg1: boolean): float
public "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
public "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
public "getLevel"(): $ServerLevel
public "setBounds"(arg0: $BoundingBox$Type): void
public "addFreshEntityWithPassengers"(arg0: $Entity$Type): void
public "getLevelData"(): $LevelData
public "getServer"(): $MinecraftServer
public "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
public "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
public "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
public "getRandom"(): $RandomSource
public "nextSubTickCount"(): long
public static "getAllLoadedEntities"(level: $Level$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "bounds"(): $BoundingBox
get "blockEntities"(): $Iterable<($BlockEntity)>
get "allPositions"(): $Set<($BlockPos)>
get "entityList"(): $List<($Entity)>
get "blockMap"(): $Map<($BlockPos), ($BlockState)>
get "renderedBlockEntities"(): $Iterable<($BlockEntity)>
get "skyDarken"(): integer
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "level"(): $ServerLevel
set "bounds"(value: $BoundingBox$Type)
get "levelData"(): $LevelData
get "server"(): $MinecraftServer
get "random"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchematicLevel$Type = ($SchematicLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchematicLevel_ = $SchematicLevel$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$MinecartElement" {
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$AnimatedSceneElement, $AnimatedSceneElement$Type} from "packages/net/createmod/ponder/api/element/$AnimatedSceneElement"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $MinecartElement extends $AnimatedSceneElement {

 "setPositionOffset"(arg0: $Vec3$Type, arg1: boolean): void
 "getRotation"(): $Vec3
 "setRotation"(arg0: float, arg1: boolean): void
 "getPositionOffset"(): $Vec3
 "forceApplyFade"(arg0: float): void
 "setFade"(arg0: float): void
 "setFadeVec"(arg0: $Vec3$Type): void
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $MinecartElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartElement$Type = ($MinecartElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartElement_ = $MinecartElement$Type;
}}
declare module "packages/net/createmod/ponder/foundation/instruction/$PonderInstruction" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export class $PonderInstruction {

constructor()

public "reset"(arg0: $PonderScene$Type): void
public "tick"(arg0: $PonderScene$Type): void
public "onScheduled"(arg0: $PonderScene$Type): void
public "isComplete"(): boolean
public static "simple"(arg0: $Consumer$Type<($PonderScene$Type)>): $PonderInstruction
public "isBlocking"(): boolean
get "complete"(): boolean
get "blocking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderInstruction$Type = ($PonderInstruction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderInstruction_ = $PonderInstruction$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$TextElementBuilder" {
import {$PonderPalette, $PonderPalette$Type} from "packages/net/createmod/ponder/api/$PonderPalette"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TextElementBuilder {

 "text"(arg0: string): $TextElementBuilder
 "text"(arg0: string, ...arg1: (any)[]): $TextElementBuilder
 "independent"(): $TextElementBuilder
 "independent"(arg0: integer): $TextElementBuilder
 "attachKeyFrame"(): $TextElementBuilder
 "placeNearTarget"(): $TextElementBuilder
 "colored"(arg0: $PonderPalette$Type): $TextElementBuilder
 "pointAt"(arg0: $Vec3$Type): $TextElementBuilder
 "sharedText"(arg0: $ResourceLocation$Type): $TextElementBuilder
 "sharedText"(arg0: string, ...arg1: (any)[]): $TextElementBuilder
 "sharedText"(arg0: string): $TextElementBuilder
 "sharedText"(arg0: $ResourceLocation$Type, ...arg1: (any)[]): $TextElementBuilder
}

export namespace $TextElementBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextElementBuilder$Type = ($TextElementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextElementBuilder_ = $TextElementBuilder$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$MinecartElement$MinecartConstructor" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $MinecartElement$MinecartConstructor {

 "create"(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractMinecart

(arg0: $Level$Type, arg1: double, arg2: double, arg3: double): $AbstractMinecart
}

export namespace $MinecartElement$MinecartConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartElement$MinecartConstructor$Type = ($MinecartElement$MinecartConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecartElement$MinecartConstructor_ = $MinecartElement$MinecartConstructor$Type;
}}
declare module "packages/net/createmod/catnip/gui/element/$FadableScreenElement" {
import {$ScreenElement, $ScreenElement$Type} from "packages/net/createmod/catnip/gui/element/$ScreenElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $FadableScreenElement extends $ScreenElement {

 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $FadableScreenElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FadableScreenElement$Type = ($FadableScreenElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FadableScreenElement_ = $FadableScreenElement$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$AnimatedSceneElement" {
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderSceneElement, $PonderSceneElement$Type} from "packages/net/createmod/ponder/api/element/$PonderSceneElement"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $AnimatedSceneElement extends $PonderSceneElement {

 "forceApplyFade"(arg0: float): void
 "setFade"(arg0: float): void
 "setFadeVec"(arg0: $Vec3$Type): void
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $AnimatedSceneElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedSceneElement$Type = ($AnimatedSceneElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedSceneElement_ = $AnimatedSceneElement$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$StoryBoardEntry$SceneOrderingType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StoryBoardEntry$SceneOrderingType extends $Enum<($StoryBoardEntry$SceneOrderingType)> {
static readonly "BEFORE": $StoryBoardEntry$SceneOrderingType
static readonly "AFTER": $StoryBoardEntry$SceneOrderingType


public static "values"(): ($StoryBoardEntry$SceneOrderingType)[]
public static "valueOf"(arg0: string): $StoryBoardEntry$SceneOrderingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoryBoardEntry$SceneOrderingType$Type = (("before") | ("after")) | ($StoryBoardEntry$SceneOrderingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoryBoardEntry$SceneOrderingType_ = $StoryBoardEntry$SceneOrderingType$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$CValue" {
import {$ConfigBase, $ConfigBase$Type} from "packages/net/createmod/catnip/config/$ConfigBase"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ConfigBase$IValueProvider, $ConfigBase$IValueProvider$Type} from "packages/net/createmod/catnip/config/$ConfigBase$IValueProvider"

export class $ConfigBase$CValue<V, T extends $ForgeConfigSpec$ConfigValue<(V)>> {

constructor(arg0: $ConfigBase$Type, arg1: string, arg2: $ConfigBase$IValueProvider$Type<(any), (any)>, ...arg3: (string)[])

public "getName"(): string
public "get"(): V
public "register"(arg0: $ForgeConfigSpec$Builder$Type): void
public "set"(arg0: V): void
public "addComments"(arg0: $ForgeConfigSpec$Builder$Type, ...arg1: (string)[]): void
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$CValue$Type<V, T> = ($ConfigBase$CValue<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$CValue_<V, T> = $ConfigBase$CValue$Type<(V), (T)>;
}}
declare module "packages/net/createmod/catnip/render/$SuperRenderTypeBuffer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SuperRenderTypeBuffer extends $MultiBufferSource {

 "getLateBuffer"(arg0: $RenderType$Type): $VertexConsumer
 "getEarlyBuffer"(arg0: $RenderType$Type): $VertexConsumer
 "draw"(): void
 "draw"(arg0: $RenderType$Type): void
 "getBuffer"(arg0: $RenderType$Type): $VertexConsumer
}

export namespace $SuperRenderTypeBuffer {
function immediate(arg0: $BufferBuilder$Type): $MultiBufferSource$BufferSource
function immediateWithBuffers(arg0: $Map$Type<($RenderType$Type), ($BufferBuilder$Type)>, arg1: $BufferBuilder$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperRenderTypeBuffer$Type = ($SuperRenderTypeBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperRenderTypeBuffer_ = $SuperRenderTypeBuffer$Type;
}}
declare module "packages/net/createmod/ponder/api/element/$TrackedElement" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$PonderSceneElement, $PonderSceneElement$Type} from "packages/net/createmod/ponder/api/element/$PonderSceneElement"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"

export interface $TrackedElement<T> extends $PonderSceneElement {

 "ifPresent"(arg0: $Consumer$Type<(T)>): void
 "isStillValid"(arg0: T): boolean
 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $TrackedElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedElement$Type<T> = ($TrackedElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedElement_<T> = $TrackedElement$Type<(T)>;
}}
declare module "packages/net/createmod/ponder/api/element/$PonderSceneElement" {
import {$PonderLevel, $PonderLevel$Type} from "packages/net/createmod/ponder/api/level/$PonderLevel"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$PonderElement, $PonderElement$Type} from "packages/net/createmod/ponder/api/element/$PonderElement"

export interface $PonderSceneElement extends $PonderElement {

 "renderLayer"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $RenderType$Type, arg3: $GuiGraphics$Type, arg4: float): void
 "renderFirst"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "renderLast"(arg0: $PonderLevel$Type, arg1: $MultiBufferSource$Type, arg2: $GuiGraphics$Type, arg3: float): void
 "reset"(arg0: $PonderScene$Type): void
 "tick"(arg0: $PonderScene$Type): void
 "whileSkipping"(arg0: $PonderScene$Type): void
 "setVisible"(arg0: boolean): void
 "isVisible"(): boolean
}

export namespace $PonderSceneElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderSceneElement$Type = ($PonderSceneElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderSceneElement_ = $PonderSceneElement$Type;
}}
declare module "packages/net/createmod/ponder/mixin/client/accessor/$GameRendererAccessor" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {

 "catnip$callGetFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double

(arg0: $Camera$Type, arg1: float, arg2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/net/createmod/ponder/api/registration/$SceneRegistryAccess" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StoryBoardEntry, $StoryBoardEntry$Type} from "packages/net/createmod/ponder/api/registration/$StoryBoardEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PonderScene, $PonderScene$Type} from "packages/net/createmod/ponder/foundation/$PonderScene"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $SceneRegistryAccess {

 "compile"(arg0: $Collection$Type<($StoryBoardEntry$Type)>): $List<($PonderScene)>
 "compile"(arg0: $ResourceLocation$Type): $List<($PonderScene)>
 "doScenesExistForId"(arg0: $ResourceLocation$Type): boolean
 "getRegisteredEntries"(): $Collection<($Map$Entry<($ResourceLocation), ($StoryBoardEntry)>)>
}

export namespace $SceneRegistryAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneRegistryAccess$Type = ($SceneRegistryAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneRegistryAccess_ = $SceneRegistryAccess$Type;
}}
declare module "packages/net/createmod/catnip/config/$ConfigBase$IValueProvider" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $ConfigBase$IValueProvider<V, T extends $ForgeConfigSpec$ConfigValue<(V)>> extends $Function<($ForgeConfigSpec$Builder), (T)> {

 "apply"(arg0: $ForgeConfigSpec$Builder$Type): $ForgeConfigSpec$Builder
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($ForgeConfigSpec$Builder)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ForgeConfigSpec$Builder), (V)>

(arg0: $ForgeConfigSpec$Builder$Type): $ForgeConfigSpec$Builder
}

export namespace $ConfigBase$IValueProvider {
function identity<T>(): $Function<($ForgeConfigSpec$Builder), ($ForgeConfigSpec$Builder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$IValueProvider$Type<V, T> = ($ConfigBase$IValueProvider<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$IValueProvider_<V, T> = $ConfigBase$IValueProvider$Type<(V), (T)>;
}}
declare module "packages/net/createmod/ponder/api/scene/$PonderStoryBoard" {
import {$SceneBuilder, $SceneBuilder$Type} from "packages/net/createmod/ponder/api/scene/$SceneBuilder"
import {$SceneBuildingUtil, $SceneBuildingUtil$Type} from "packages/net/createmod/ponder/api/scene/$SceneBuildingUtil"

export interface $PonderStoryBoard {

 "program"(arg0: $SceneBuilder$Type, arg1: $SceneBuildingUtil$Type): void

(arg0: $SceneBuilder$Type, arg1: $SceneBuildingUtil$Type): void
}

export namespace $PonderStoryBoard {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PonderStoryBoard$Type = ($PonderStoryBoard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PonderStoryBoard_ = $PonderStoryBoard$Type;
}}
declare module "packages/net/createmod/catnip/animation/$LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator {

 "interpolate"(arg0: double, arg1: double, arg2: double): float

(arg0: double, arg1: double, arg2: double): float
}

export namespace $LerpedFloat$Interpolator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Interpolator$Type = ($LerpedFloat$Interpolator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Interpolator_ = $LerpedFloat$Interpolator$Type;
}}
