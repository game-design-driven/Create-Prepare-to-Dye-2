declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstanceHandle {

 "setVisible"(arg0: boolean): void
 "setChanged"(): void
 "setDeleted"(): void
 "isVisible"(): boolean
}

export namespace $InstanceHandle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceHandle$Type = ($InstanceHandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceHandle_ = $InstanceHandle$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$TransformStack, $TransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$TransformStack"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export class $PoseTransformStack implements $TransformStack<($PoseTransformStack)> {

constructor(stack: $PoseStack$Type)

public "unwrap"(): $PoseStack
public "rotate"(quaternion: $Quaternionfc$Type): $PoseTransformStack
public "pushPose"(): $PoseTransformStack
public "popPose"(): $PoseTransformStack
public "mulPose"(pose: $Matrix4fc$Type): $PoseTransformStack
public "mulNormal"(normal: $Matrix3fc$Type): $PoseTransformStack
public static "of"(stack: $PoseStack$Type): $PoseTransformStack
public "transform"(pose: $PoseStack$Pose$Type): $PoseTransformStack
public "transform"(stack: $PoseStack$Type): $PoseTransformStack
public "transform"(pose: $Matrix4fc$Type, normal: $Matrix3fc$Type): $PoseTransformStack
public "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$Axis$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Vector3fc$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$Type): $PoseTransformStack
public "rotateCentered"(q: $Quaternionfc$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Axis$Type): $PoseTransformStack
public "rotateXCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateZCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateYCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): $PoseTransformStack
public "rotateXCentered"(radians: float): $PoseTransformStack
public "rotateYCentered"(radians: float): $PoseTransformStack
public "rotateZCentered"(radians: float): $PoseTransformStack
public "translate"(vec: $Vec3i$Type): $PoseTransformStack
public "translate"(vec: $Vector3ic$Type): $PoseTransformStack
public "translate"(vec: $Vector3fc$Type): $PoseTransformStack
public "translate"(vec: $Vec3$Type): $PoseTransformStack
public "translate"(v: float): $PoseTransformStack
public "translate"(x: double, y: double, z: double): $PoseTransformStack
public "center"(): $PoseTransformStack
public "translateBack"(vec: $Vector3ic$Type): $PoseTransformStack
public "translateBack"(vec: $Vec3i$Type): $PoseTransformStack
public "translateBack"(v: float): $PoseTransformStack
public "translateBack"(vec: $Vec3$Type): $PoseTransformStack
public "translateBack"(vec: $Vector3fc$Type): $PoseTransformStack
public "translateBack"(x: double, y: double, z: double): $PoseTransformStack
public "translateBack"(x: float, y: float, z: float): $PoseTransformStack
public "uncenter"(): $PoseTransformStack
public "translateY"(y: float): $PoseTransformStack
public "translateZ"(z: float): $PoseTransformStack
public "nudge"(seed: integer): $PoseTransformStack
public "translateX"(x: float): $PoseTransformStack
public "rotate"(radians: float, axis: $Axis$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Vector3fc$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$Axis$Type): $PoseTransformStack
public "rotate"(axisAngle: $AxisAngle4f$Type): $PoseTransformStack
public "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "self"(): $PoseTransformStack
public "rotateZDegrees"(degrees: float): $PoseTransformStack
public "rotateYDegrees"(degrees: float): $PoseTransformStack
public "rotateXDegrees"(degrees: float): $PoseTransformStack
public "rotateToFace"(facing: $Direction$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Axis$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$Type): $PoseTransformStack
public "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): $PoseTransformStack
public "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $PoseTransformStack
public "rotateTo"(from: $Direction$Type, to: $Direction$Type): $PoseTransformStack
public "rotateX"(radians: float): $PoseTransformStack
public "rotateY"(radians: float): $PoseTransformStack
public "rotateZ"(radians: float): $PoseTransformStack
public "scale"(factors: $Vector3fc$Type): $PoseTransformStack
public "scale"(factor: float): $PoseTransformStack
public "scaleX"(factor: float): $PoseTransformStack
public "scaleY"(factor: float): $PoseTransformStack
public "scaleZ"(factor: float): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseTransformStack$Type = ($PoseTransformStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseTransformStack_ = $PoseTransformStack$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceType" {
import {$Instance, $Instance$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instance"
import {$InstanceWriter, $InstanceWriter$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstanceWriter"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$InstanceHandle, $InstanceHandle$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstanceHandle"
import {$Layout, $Layout$Type} from "packages/dev/engine_room/flywheel/api/layout/$Layout"

export interface $InstanceType<I extends $Instance> {

 "writer"(): $InstanceWriter<(I)>
 "create"(arg0: $InstanceHandle$Type): I
 "layout"(): $Layout
 "vertexShader"(): $ResourceLocation
 "cullShader"(): $ResourceLocation
}

export namespace $InstanceType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceType$Type<I> = ($InstanceType<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceType_<I> = $InstanceType$Type<(I)>;
}}
declare module "packages/dev/engine_room/flywheel/api/model/$IndexSequence" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IndexSequence {

 "fill"(arg0: long, arg1: integer): void

(arg0: long, arg1: integer): void
}

export namespace $IndexSequence {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndexSequence$Type = ($IndexSequence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndexSequence_ = $IndexSequence$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualizationLevel" {
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
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
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
import {$TickPriority, $TickPriority$Type} from "packages/net/minecraft/world/ticks/$TickPriority"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LevelData, $LevelData$Type} from "packages/net/minecraft/world/level/storage/$LevelData"

export interface $VisualizationLevel extends $LevelAccessor {

 "supportsVisualization"(): boolean
 "addParticle"(arg0: $ParticleOptions$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "gameEvent"(arg0: $GameEvent$Type, arg1: $Vec3$Type, arg2: $GameEvent$Context$Type): void
 "getServer"(): $MinecraftServer
 "getChunkSource"(): $ChunkSource
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "levelEvent"(arg0: $Player$Type, arg1: integer, arg2: $BlockPos$Type, arg3: integer): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $Vec3$Type): void
 "dayTime"(): long
 "nextSubTickCount"(): long
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Block$Type, arg2: integer): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer, arg3: $TickPriority$Type): void
 "scheduleTick"(arg0: $BlockPos$Type, arg1: $Fluid$Type, arg2: integer): void
 "getCurrentDifficultyAt"(arg0: $BlockPos$Type): $DifficultyInstance
 "getRandom"(): $RandomSource
 "blockUpdated"(arg0: $BlockPos$Type, arg1: $Block$Type): void
 "neighborShapeChanged"(arg0: $Direction$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type): void
 "playSound"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $SoundEvent$Type, arg3: $SoundSource$Type, arg4: float, arg5: float): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$Type, arg2: integer): void
 "gameEvent"(arg0: $Entity$Type, arg1: $GameEvent$Type, arg2: $BlockPos$Type): void
 "gameEvent"(arg0: $GameEvent$Type, arg1: $BlockPos$Type, arg2: $GameEvent$Context$Type): void
 "getLevelData"(): $LevelData
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getEntityCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($VoxelShape)>
 "getHeightmapPos"(arg0: $Heightmap$Types$Type, arg1: $BlockPos$Type): $BlockPos
 "isUnobstructed"(arg0: $Entity$Type, arg1: $VoxelShape$Type): boolean
 "getMoonBrightness"(): float
 "getTimeOfDay"(arg0: float): float
 "getMoonPhase"(): integer
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type): $List<($Entity)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type): $List<(T)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$Type<($Entity$Type), (T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "getEntities"(arg0: $Entity$Type, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<($Entity)>
 "getPlayerByUUID"(arg0: $UUID$Type): $Player
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$Type<(T)>, arg1: $AABB$Type, arg2: $Predicate$Type<(any)>): $List<(T)>
 "players"(): $List<(any)>
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
 "isAreaLoaded"(arg0: $BlockPos$Type, arg1: integer): boolean
 "registryAccess"(): $RegistryAccess
 "isClientSide"(): boolean
 "getMinBuildHeight"(): integer
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$Type): boolean
 "containsAnyLiquid"(arg0: $AABB$Type): boolean
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type, arg3: boolean): $ChunkAccess
 "getHeight"(arg0: $Heightmap$Types$Type, arg1: integer, arg2: integer): integer
 "getSkyDarken"(): integer
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$Type): boolean
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$Type): float
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$Type): $ChunkAccess
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "isWaterAt"(arg0: $BlockPos$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "holderLookup"<T>(arg0: $ResourceKey$Type<(any)>): $HolderLookup<(T)>
 "getHeight"(): integer
 "getChunk"(arg0: $BlockPos$Type): $ChunkAccess
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
 "getBiomeManager"(): $BiomeManager
 "dimensionType"(): $DimensionType
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$Type): integer
 "enabledFeatures"(): $FeatureFlagSet
 "getBiome"(arg0: $BlockPos$Type): $Holder<($Biome)>
 "isEmptyBlock"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "getLightEngine"(): $LevelLightEngine
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "noCollision"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "noCollision"(arg0: $Entity$Type): boolean
 "isUnobstructed"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): boolean
 "isUnobstructed"(arg0: $Entity$Type): boolean
 "noCollision"(arg0: $AABB$Type): boolean
 "findSupportingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "collidesWithSuffocatingBlock"(arg0: $Entity$Type, arg1: $AABB$Type): boolean
 "getCollisions"(arg0: $Entity$Type, arg1: $AABB$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$Type, arg1: $VoxelShape$Type, arg2: $Vec3$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "getWorldBorder"(): $WorldBorder
 "getDirectSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: boolean): integer
 "hasSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): boolean
 "getSignal"(arg0: $BlockPos$Type, arg1: $Direction$Type): integer
 "hasNeighborSignal"(arg0: $BlockPos$Type): boolean
 "getBestNeighborSignal"(arg0: $BlockPos$Type): integer
 "isStateAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($BlockState$Type)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$Type, arg1: $Predicate$Type<($FluidState$Type)>): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$Type): boolean
 "setBlock"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: integer, arg3: integer): boolean
 "removeBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type): boolean
 "destroyBlock"(arg0: $BlockPos$Type, arg1: boolean, arg2: $Entity$Type, arg3: integer): boolean
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getSectionsCount"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxBuildHeight"(): integer
 "getModelDataManager"(): $ModelDataManager
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
}

export namespace $VisualizationLevel {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationLevel$Type = ($VisualizationLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualizationLevel_ = $VisualizationLevel$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$MaterialShaders" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $MaterialShaders {

 "vertexSource"(): $ResourceLocation
 "fragmentSource"(): $ResourceLocation
}

export namespace $MaterialShaders {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialShaders$Type = ($MaterialShaders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialShaders_ = $MaterialShaders$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/instance/$Instance" {
import {$InstanceType, $InstanceType$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstanceType"
import {$InstanceHandle, $InstanceHandle$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstanceHandle"

export interface $Instance {

 "type"(): $InstanceType<(any)>
 "delete"(): void
 "handle"(): $InstanceHandle
 "setVisible"(visible: boolean): void
 "setChanged"(): void
}

export namespace $Instance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instance$Type = ($Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instance_ = $Instance$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/model/baked/$PartialModel" {
import {$AccessorPartialModel, $AccessorPartialModel$Type} from "packages/com/railwayteam/railways/mixin/client/$AccessorPartialModel"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PartialModel implements $AccessorPartialModel {


public "get"(): $BakedModel
public static "of"(modelLocation: $ResourceLocation$Type): $PartialModel
public "modelLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialModel$Type = ($PartialModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartialModel_ = $PartialModel$Type;
}}
declare module "packages/dev/engine_room/flywheel/impl/mixin/$PoseStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {

 "flywheel$getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$Type = ($PoseStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visualization/$EntityVisualizer" {
import {$EntityVisual, $EntityVisual$Type} from "packages/dev/engine_room/flywheel/api/visual/$EntityVisual"
import {$VisualizationContext, $VisualizationContext$Type} from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityVisualizer<T extends $Entity> {

 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$Type, arg1: T, arg2: float): $EntityVisual<(any)>
}

export namespace $EntityVisualizer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisualizer$Type<T> = ($EntityVisualizer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityVisualizer_<T> = $EntityVisualizer$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/api/layout/$Layout$Element" {
import {$ElementType, $ElementType$Type} from "packages/dev/engine_room/flywheel/api/layout/$ElementType"

export interface $Layout$Element {

 "name"(): string
 "type"(): $ElementType
 "byteOffset"(): integer
 "paddingByteSize"(): integer
 "paddedByteSize"(): integer
}

export namespace $Layout$Element {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$Element$Type = ($Layout$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout$Element_ = $Layout$Element$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/vertex/$MutableVertexList" {
import {$VertexList, $VertexList$Type} from "packages/dev/engine_room/flywheel/api/vertex/$VertexList"

export interface $MutableVertexList extends $VertexList {

 "b"(arg0: integer, arg1: float): void
 "x"(arg0: integer, arg1: float): void
 "a"(arg0: integer, arg1: float): void
 "g"(arg0: integer, arg1: float): void
 "v"(arg0: integer, arg1: float): void
 "z"(arg0: integer, arg1: float): void
 "u"(arg0: integer, arg1: float): void
 "r"(arg0: integer, arg1: float): void
 "y"(arg0: integer, arg1: float): void
 "normalX"(arg0: integer, arg1: float): void
 "normalY"(arg0: integer, arg1: float): void
 "overlay"(arg0: integer, arg1: integer): void
 "normalZ"(arg0: integer, arg1: float): void
 "light"(arg0: integer, arg1: integer): void
 "isEmpty"(): boolean
 "b"(arg0: integer): float
 "x"(arg0: integer): float
 "a"(arg0: integer): float
 "write"(dst: $MutableVertexList$Type, srcStartIndex: integer, dstStartIndex: integer, vertexCount: integer): void
 "write"(dst: $MutableVertexList$Type, srcIndex: integer, dstIndex: integer): void
 "g"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "r"(arg0: integer): float
 "y"(arg0: integer): float
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "vertexCount"(): integer
 "overlay"(arg0: integer): integer
 "normalZ"(arg0: integer): float
 "light"(arg0: integer): integer
 "writeAll"(dst: $MutableVertexList$Type): void
}

export namespace $MutableVertexList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableVertexList$Type = ($MutableVertexList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableVertexList_ = $MutableVertexList$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$Material" {
import {$MaterialShaders, $MaterialShaders$Type} from "packages/dev/engine_room/flywheel/api/material/$MaterialShaders"
import {$DepthTest, $DepthTest$Type} from "packages/dev/engine_room/flywheel/api/material/$DepthTest"
import {$CutoutShader, $CutoutShader$Type} from "packages/dev/engine_room/flywheel/api/material/$CutoutShader"
import {$CardinalLightingMode, $CardinalLightingMode$Type} from "packages/dev/engine_room/flywheel/api/material/$CardinalLightingMode"
import {$Transparency, $Transparency$Type} from "packages/dev/engine_room/flywheel/api/material/$Transparency"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LightShader, $LightShader$Type} from "packages/dev/engine_room/flywheel/api/material/$LightShader"
import {$FogShader, $FogShader$Type} from "packages/dev/engine_room/flywheel/api/material/$FogShader"
import {$WriteMask, $WriteMask$Type} from "packages/dev/engine_room/flywheel/api/material/$WriteMask"

export interface $Material {

 "cardinalLightingMode"(): $CardinalLightingMode
 "backfaceCulling"(): boolean
 "shaders"(): $MaterialShaders
 "texture"(): $ResourceLocation
 "polygonOffset"(): boolean
 "transparency"(): $Transparency
 "depthTest"(): $DepthTest
 "blur"(): boolean
 "mipmap"(): boolean
 "light"(): $LightShader
 "cutout"(): $CutoutShader
 "fog"(): $FogShader
 "writeMask"(): $WriteMask
 "useOverlay"(): boolean
 "useLight"(): boolean
}

export namespace $Material {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$Type = ($Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Material_ = $Material$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$WriteMask" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WriteMask extends $Enum<($WriteMask)> {
static readonly "COLOR_DEPTH": $WriteMask
static readonly "COLOR": $WriteMask
static readonly "DEPTH": $WriteMask


public static "values"(): ($WriteMask)[]
public static "valueOf"(name: string): $WriteMask
public "depth"(): boolean
public "color"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriteMask$Type = (("depth") | ("color") | ("color_depth")) | ($WriteMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriteMask_ = $WriteMask$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$CutoutShader" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CutoutShader {

 "source"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $CutoutShader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CutoutShader$Type = ($CutoutShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CutoutShader_ = $CutoutShader$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$TransformStack" {
import {$Transform, $Transform$Type} from "packages/dev/engine_room/flywheel/lib/transform/$Transform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PoseTransformStack, $PoseTransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export interface $TransformStack<Self extends $TransformStack<(Self)>> extends $Transform<(Self)> {

 "pushPose"(): Self
 "popPose"(): Self
 "transform"(pose: $PoseStack$Pose$Type): Self
 "transform"(stack: $PoseStack$Type): Self
 "transform"(pose: $Matrix4fc$Type, normal: $Matrix3fc$Type): Self
 "mulPose"(arg0: $Matrix4fc$Type): Self
 "mulNormal"(arg0: $Matrix3fc$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$Type, x: float, y: float, z: float): Self
 "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Type): Self
 "rotateCentered"(q: $Quaternionfc$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Axis$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "translate"(vec: $Vec3i$Type): Self
 "translate"(vec: $Vector3ic$Type): Self
 "translate"(vec: $Vector3fc$Type): Self
 "translate"(vec: $Vec3$Type): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "center"(): Self
 "translateBack"(vec: $Vector3ic$Type): Self
 "translateBack"(vec: $Vec3i$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(vec: $Vec3$Type): Self
 "translateBack"(vec: $Vector3fc$Type): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateX"(x: float): Self
 "rotate"(radians: float, axis: $Axis$Type): Self
 "rotate"(radians: float, axis: $Vector3fc$Type): Self
 "rotate"(radians: float, axis: $Direction$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$Type): Self
 "rotate"(arg0: $Quaternionfc$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "self"(): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "scale"(factors: $Vector3fc$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scaleZ"(factor: float): Self
}

export namespace $TransformStack {
function of(stack: $PoseStack$Type): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformStack$Type<Self> = ($TransformStack<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformStack_<Self> = $TransformStack$Type<(Self)>;
}}
declare module "packages/dev/engine_room/flywheel/api/model/$Mesh" {
import {$IndexSequence, $IndexSequence$Type} from "packages/dev/engine_room/flywheel/api/model/$IndexSequence"
import {$MutableVertexList, $MutableVertexList$Type} from "packages/dev/engine_room/flywheel/api/vertex/$MutableVertexList"
import {$Vector4fc, $Vector4fc$Type} from "packages/org/joml/$Vector4fc"

export interface $Mesh {

 "write"(arg0: $MutableVertexList$Type): void
 "vertexCount"(): integer
 "boundingSphere"(): $Vector4fc
 "indexSequence"(): $IndexSequence
 "indexCount"(): integer
}

export namespace $Mesh {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$Type = ($Mesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$CardinalLightingMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CardinalLightingMode extends $Enum<($CardinalLightingMode)> {
static readonly "OFF": $CardinalLightingMode
static readonly "CHUNK": $CardinalLightingMode
static readonly "ENTITY": $CardinalLightingMode


public static "values"(): ($CardinalLightingMode)[]
public static "valueOf"(name: string): $CardinalLightingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CardinalLightingMode$Type = (("chunk") | ("off") | ("entity")) | ($CardinalLightingMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CardinalLightingMode_ = $CardinalLightingMode$Type;
}}
declare module "packages/dev/engine_room/flywheel/impl/extension/$EntityTypeExtension" {
import {$EntityVisualizer, $EntityVisualizer$Type} from "packages/dev/engine_room/flywheel/api/visualization/$EntityVisualizer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityTypeExtension<T extends $Entity> {

 "flywheel$getVisualizer"(): $EntityVisualizer<(any)>
 "flywheel$setVisualizer"(arg0: $EntityVisualizer$Type<(any)>): void
}

export namespace $EntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeExtension$Type<T> = ($EntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTypeExtension_<T> = $EntityTypeExtension$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$DepthTest" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DepthTest extends $Enum<($DepthTest)> {
static readonly "OFF": $DepthTest
static readonly "NEVER": $DepthTest
static readonly "LESS": $DepthTest
static readonly "EQUAL": $DepthTest
static readonly "LEQUAL": $DepthTest
static readonly "GREATER": $DepthTest
static readonly "NOTEQUAL": $DepthTest
static readonly "GEQUAL": $DepthTest
static readonly "ALWAYS": $DepthTest


public static "values"(): ($DepthTest)[]
public static "valueOf"(name: string): $DepthTest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepthTest$Type = (("equal") | ("always") | ("never") | ("lequal") | ("notequal") | ("gequal") | ("less") | ("greater") | ("off")) | ($DepthTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepthTest_ = $DepthTest$Type;
}}
declare module "packages/dev/engine_room/flywheel/impl/mixin/$ModelPartAccessor" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "flywheel$children"(): $Map<(string), ($ModelPart)>
 "flywheel$compile"(arg0: $PoseStack$Pose$Type, arg1: $VertexConsumer$Type, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: float, arg7: float): void
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/instance/$InstanceWriter" {
import {$Instance, $Instance$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instance"

export interface $InstanceWriter<I extends $Instance> {

 "write"(arg0: long, arg1: I): void

(arg0: long, arg1: I): void
}

export namespace $InstanceWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceWriter$Type<I> = ($InstanceWriter<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceWriter_<I> = $InstanceWriter$Type<(I)>;
}}
declare module "packages/dev/engine_room/flywheel/api/visualization/$BlockEntityVisualizer" {
import {$BlockEntityVisual, $BlockEntityVisual$Type} from "packages/dev/engine_room/flywheel/api/visual/$BlockEntityVisual"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$VisualizationContext, $VisualizationContext$Type} from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"

export interface $BlockEntityVisualizer<T extends $BlockEntity> {

 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$Type, arg1: T, arg2: float): $BlockEntityVisual<(any)>
}

export namespace $BlockEntityVisualizer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisualizer$Type<T> = ($BlockEntityVisualizer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityVisualizer_<T> = $BlockEntityVisualizer$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/api/layout/$ElementType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ElementType {

 "byteAlignment"(): integer
 "byteSize"(): integer
}

export namespace $ElementType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementType$Type = ($ElementType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementType_ = $ElementType$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$Rotate" {
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export interface $Rotate<Self extends $Rotate<(Self)>> {

 "rotate"(radians: float, axis: $Axis$Type): Self
 "rotate"(radians: float, axis: $Vector3fc$Type): Self
 "rotate"(radians: float, axis: $Direction$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$Type): Self
 "rotate"(arg0: $Quaternionfc$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "self"(): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self

(radians: float, axis: $Axis$Type): Self
}

export namespace $Rotate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotate$Type<Self> = ($Rotate<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotate_<Self> = $Rotate$Type<(Self)>;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$FogShader" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FogShader {

 "source"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $FogShader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogShader$Type = ($FogShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FogShader_ = $FogShader$Type;
}}
declare module "packages/dev/engine_room/flywheel/backend/mixin/$AbstractClientPlayerAccessor" {
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $AbstractClientPlayerAccessor {

 "flywheel$getPlayerInfo"(): $PlayerInfo

(): $PlayerInfo
}

export namespace $AbstractClientPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerAccessor$Type = ($AbstractClientPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientPlayerAccessor_ = $AbstractClientPlayerAccessor$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/model/$Model$ConfiguredMesh" {
import {$Mesh, $Mesh$Type} from "packages/dev/engine_room/flywheel/api/model/$Mesh"
import {$Material, $Material$Type} from "packages/dev/engine_room/flywheel/api/material/$Material"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Model$ConfiguredMesh extends $Record {

constructor(material: $Material$Type, mesh: $Mesh$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "material"(): $Material
public "mesh"(): $Mesh
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$ConfiguredMesh$Type = ($Model$ConfiguredMesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model$ConfiguredMesh_ = $Model$ConfiguredMesh$Type;
}}
declare module "packages/dev/engine_room/flywheel/impl/extension/$LevelExtension" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $LevelExtension {

 "flywheel$getAllLoadedEntities"(): $Iterable<($Entity)>

(): $Iterable<($Entity)>
}

export namespace $LevelExtension {
function getAllLoadedEntities(level: $Level$Type): $Iterable<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelExtension$Type = ($LevelExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelExtension_ = $LevelExtension$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$Transparency" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Transparency extends $Enum<($Transparency)> {
static readonly "OPAQUE": $Transparency
static readonly "ADDITIVE": $Transparency
static readonly "LIGHTNING": $Transparency
static readonly "GLINT": $Transparency
static readonly "CRUMBLING": $Transparency
static readonly "TRANSLUCENT": $Transparency
static readonly "ORDER_INDEPENDENT": $Transparency


public static "values"(): ($Transparency)[]
public static "valueOf"(name: string): $Transparency
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transparency$Type = (("lightning") | ("translucent") | ("opaque") | ("glint") | ("crumbling") | ("order_independent") | ("additive")) | ($Transparency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transparency_ = $Transparency$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visual/$Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Visual {

 "update"(arg0: float): void
 "delete"(): void
}

export namespace $Visual {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Visual$Type = ($Visual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Visual_ = $Visual$Type;
}}
declare module "packages/dev/engine_room/flywheel/impl/extension/$BlockEntityTypeExtension" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityVisualizer, $BlockEntityVisualizer$Type} from "packages/dev/engine_room/flywheel/api/visualization/$BlockEntityVisualizer"

export interface $BlockEntityTypeExtension<T extends $BlockEntity> {

 "flywheel$getVisualizer"(): $BlockEntityVisualizer<(any)>
 "flywheel$setVisualizer"(arg0: $BlockEntityVisualizer$Type<(any)>): void
}

export namespace $BlockEntityTypeExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeExtension$Type<T> = ($BlockEntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeExtension_<T> = $BlockEntityTypeExtension$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/backend/mixin/$LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {

 "flywheel$getTicks"(): integer

(): integer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$Translate" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $Translate<Self extends $Translate<(Self)>> {

 "translate"(vec: $Vec3i$Type): Self
 "translate"(vec: $Vector3ic$Type): Self
 "translate"(vec: $Vector3fc$Type): Self
 "translate"(vec: $Vec3$Type): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "center"(): Self
 "translateBack"(vec: $Vector3ic$Type): Self
 "translateBack"(vec: $Vec3i$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(vec: $Vec3$Type): Self
 "translateBack"(vec: $Vector3fc$Type): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateX"(x: float): Self

(vec: $Vec3i$Type): Self
}

export namespace $Translate {
const CENTER: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translate$Type<Self> = ($Translate<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translate_<Self> = $Translate$Type<(Self)>;
}}
declare module "packages/dev/engine_room/flywheel/impl/extension/$PoseStackExtension" {
import {$PoseTransformStack, $PoseTransformStack$Type} from "packages/dev/engine_room/flywheel/lib/transform/$PoseTransformStack"

export interface $PoseStackExtension {

 "flywheel$transformStack"(): $PoseTransformStack

(): $PoseTransformStack
}

export namespace $PoseStackExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExtension$Type = ($PoseStackExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackExtension_ = $PoseStackExtension$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/model/$Model" {
import {$Vector4fc, $Vector4fc$Type} from "packages/org/joml/$Vector4fc"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Model$ConfiguredMesh, $Model$ConfiguredMesh$Type} from "packages/dev/engine_room/flywheel/api/model/$Model$ConfiguredMesh"

export interface $Model {

 "boundingSphere"(): $Vector4fc
 "meshes"(): $List<($Model$ConfiguredMesh)>
}

export namespace $Model {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$Type = ($Model);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model_ = $Model$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/instance/$Instancer" {
import {$Instance, $Instance$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instance"

export interface $Instancer<I extends $Instance> {

 "createInstance"(): I
 "stealInstance"(arg0: I): void
 "createInstances"(arr: (I)[]): void
}

export namespace $Instancer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instancer$Type<I> = ($Instancer<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instancer_<I> = $Instancer$Type<(I)>;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$Transform" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Affine, $Affine$Type} from "packages/dev/engine_room/flywheel/lib/transform/$Affine"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"

export interface $Transform<Self extends $Transform<(Self)>> extends $Affine<(Self)> {

 "transform"(pose: $PoseStack$Pose$Type): Self
 "transform"(stack: $PoseStack$Type): Self
 "transform"(pose: $Matrix4fc$Type, normal: $Matrix3fc$Type): Self
 "mulPose"(arg0: $Matrix4fc$Type): Self
 "mulNormal"(arg0: $Matrix3fc$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$Type, x: float, y: float, z: float): Self
 "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Type): Self
 "rotateCentered"(q: $Quaternionfc$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Axis$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "translate"(vec: $Vec3i$Type): Self
 "translate"(vec: $Vector3ic$Type): Self
 "translate"(vec: $Vector3fc$Type): Self
 "translate"(vec: $Vec3$Type): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "center"(): Self
 "translateBack"(vec: $Vector3ic$Type): Self
 "translateBack"(vec: $Vec3i$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(vec: $Vec3$Type): Self
 "translateBack"(vec: $Vector3fc$Type): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateX"(x: float): Self
 "rotate"(radians: float, axis: $Axis$Type): Self
 "rotate"(radians: float, axis: $Vector3fc$Type): Self
 "rotate"(radians: float, axis: $Direction$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$Type): Self
 "rotate"(arg0: $Quaternionfc$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "self"(): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "scale"(factors: $Vector3fc$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scaleZ"(factor: float): Self
}

export namespace $Transform {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type<Self> = ($Transform<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_<Self> = $Transform$Type<(Self)>;
}}
declare module "packages/dev/engine_room/flywheel/api/layout/$Layout" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Layout$Element, $Layout$Element$Type} from "packages/dev/engine_room/flywheel/api/layout/$Layout$Element"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Layout {

 "elements"(): $List<($Layout$Element)>
 "asMap"(): $Map<(string), ($Layout$Element)>
 "byteAlignment"(): integer
 "byteSize"(): integer
}

export namespace $Layout {
const MAX_ELEMENT_NAME_LENGTH: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$Type = ($Layout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout_ = $Layout$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visual/$BlockEntityVisual" {
import {$Visual, $Visual$Type} from "packages/dev/engine_room/flywheel/api/visual/$Visual"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Instance, $Instance$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instance"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $BlockEntityVisual<T extends $BlockEntity> extends $Visual {

 "collectCrumblingInstances"(arg0: $Consumer$Type<($Instance$Type)>): void
 "update"(arg0: float): void
 "delete"(): void
}

export namespace $BlockEntityVisual {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisual$Type<T> = ($BlockEntityVisual<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityVisual_<T> = $BlockEntityVisual$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/api/vertex/$VertexList" {
import {$MutableVertexList, $MutableVertexList$Type} from "packages/dev/engine_room/flywheel/api/vertex/$MutableVertexList"

export interface $VertexList {

 "isEmpty"(): boolean
 "b"(arg0: integer): float
 "x"(arg0: integer): float
 "a"(arg0: integer): float
 "write"(dst: $MutableVertexList$Type, srcStartIndex: integer, dstStartIndex: integer, vertexCount: integer): void
 "write"(dst: $MutableVertexList$Type, srcIndex: integer, dstIndex: integer): void
 "g"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "r"(arg0: integer): float
 "y"(arg0: integer): float
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "vertexCount"(): integer
 "overlay"(arg0: integer): integer
 "normalZ"(arg0: integer): float
 "light"(arg0: integer): integer
 "writeAll"(dst: $MutableVertexList$Type): void
}

export namespace $VertexList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexList$Type = ($VertexList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexList_ = $VertexList$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualEmbedding" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$InstancerProvider, $InstancerProvider$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider"
import {$VisualizationContext, $VisualizationContext$Type} from "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext"
import {$Matrix4fc, $Matrix4fc$Type} from "packages/org/joml/$Matrix4fc"
import {$Matrix3fc, $Matrix3fc$Type} from "packages/org/joml/$Matrix3fc"

export interface $VisualEmbedding extends $VisualizationContext {

 "delete"(): void
 "transforms"(arg0: $Matrix4fc$Type, arg1: $Matrix3fc$Type): void
 "renderOrigin"(): $Vec3i
 "instancerProvider"(): $InstancerProvider
 "createEmbedding"(arg0: $Vec3i$Type): $VisualEmbedding
}

export namespace $VisualEmbedding {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualEmbedding$Type = ($VisualEmbedding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualEmbedding_ = $VisualEmbedding$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$Scale" {
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"

export interface $Scale<Self extends $Scale<(Self)>> {

 "scale"(factors: $Vector3fc$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scaleZ"(factor: float): Self

(factors: $Vector3fc$Type): Self
}

export namespace $Scale {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scale$Type<Self> = ($Scale<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scale_<Self> = $Scale$Type<(Self)>;
}}
declare module "packages/dev/engine_room/flywheel/api/material/$LightShader" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $LightShader {

 "source"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $LightShader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightShader$Type = ($LightShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightShader_ = $LightShader$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/visual/$EntityVisual" {
import {$Visual, $Visual$Type} from "packages/dev/engine_room/flywheel/api/visual/$Visual"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityVisual<T extends $Entity> extends $Visual {

 "update"(arg0: float): void
 "delete"(): void
}

export namespace $EntityVisual {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisual$Type<T> = ($EntityVisual<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityVisual_<T> = $EntityVisual$Type<(T)>;
}}
declare module "packages/dev/engine_room/flywheel/api/visualization/$VisualizationContext" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$InstancerProvider, $InstancerProvider$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider"
import {$VisualEmbedding, $VisualEmbedding$Type} from "packages/dev/engine_room/flywheel/api/visualization/$VisualEmbedding"

export interface $VisualizationContext {

 "renderOrigin"(): $Vec3i
 "instancerProvider"(): $InstancerProvider
 "createEmbedding"(arg0: $Vec3i$Type): $VisualEmbedding
}

export namespace $VisualizationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationContext$Type = ($VisualizationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualizationContext_ = $VisualizationContext$Type;
}}
declare module "packages/dev/engine_room/flywheel/api/instance/$InstancerProvider" {
import {$Instance, $Instance$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instance"
import {$Instancer, $Instancer$Type} from "packages/dev/engine_room/flywheel/api/instance/$Instancer"
import {$InstanceType, $InstanceType$Type} from "packages/dev/engine_room/flywheel/api/instance/$InstanceType"
import {$Model, $Model$Type} from "packages/dev/engine_room/flywheel/api/model/$Model"

export interface $InstancerProvider {

 "instancer"<I extends $Instance>(arg0: $InstanceType$Type<(I)>, arg1: $Model$Type, arg2: integer): $Instancer<(I)>
 "instancer"<I extends $Instance>(type: $InstanceType$Type<(I)>, model: $Model$Type): $Instancer<(I)>

(arg0: $InstanceType$Type<(I)>, arg1: $Model$Type, arg2: integer): $Instancer<(I)>
}

export namespace $InstancerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstancerProvider$Type = ($InstancerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstancerProvider_ = $InstancerProvider$Type;
}}
declare module "packages/dev/engine_room/flywheel/lib/transform/$Affine" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Vector3fc, $Vector3fc$Type} from "packages/org/joml/$Vector3fc"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AxisAngle4f, $AxisAngle4f$Type} from "packages/org/joml/$AxisAngle4f"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Rotate, $Rotate$Type} from "packages/dev/engine_room/flywheel/lib/transform/$Rotate"
import {$Scale, $Scale$Type} from "packages/dev/engine_room/flywheel/lib/transform/$Scale"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Quaternionfc, $Quaternionfc$Type} from "packages/org/joml/$Quaternionfc"
import {$Axis, $Axis$Type} from "packages/com/mojang/math/$Axis"
import {$Translate, $Translate$Type} from "packages/dev/engine_room/flywheel/lib/transform/$Translate"

export interface $Affine<Self extends $Affine<(Self)>> extends $Translate<(Self)>, $Rotate<(Self)>, $Scale<(Self)> {

 "rotateAround"(quaternion: $Quaternionfc$Type, x: float, y: float, z: float): Self
 "rotateAround"(quaternion: $Quaternionfc$Type, vec: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Type): Self
 "rotateCentered"(q: $Quaternionfc$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Axis$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "translate"(vec: $Vec3i$Type): Self
 "translate"(vec: $Vector3ic$Type): Self
 "translate"(vec: $Vector3fc$Type): Self
 "translate"(vec: $Vec3$Type): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "center"(): Self
 "translateBack"(vec: $Vector3ic$Type): Self
 "translateBack"(vec: $Vec3i$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(vec: $Vec3$Type): Self
 "translateBack"(vec: $Vector3fc$Type): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateX"(x: float): Self
 "rotate"(radians: float, axis: $Axis$Type): Self
 "rotate"(radians: float, axis: $Vector3fc$Type): Self
 "rotate"(radians: float, axis: $Direction$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$Type): Self
 "rotate"(arg0: $Quaternionfc$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "self"(): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Type): Self
 "rotateTo"(from: $Vector3fc$Type, to: $Vector3fc$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$Type, to: $Direction$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "scale"(factors: $Vector3fc$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scaleZ"(factor: float): Self
}

export namespace $Affine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Affine$Type<Self> = ($Affine<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Affine_<Self> = $Affine$Type<(Self)>;
}}
