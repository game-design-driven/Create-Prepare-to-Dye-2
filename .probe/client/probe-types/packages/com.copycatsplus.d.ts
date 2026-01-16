declare module "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock$Byte" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"

export class $CopycatByteBlock$Byte extends $Record {

constructor(x: boolean, y: boolean, z: boolean)

public "get"(axis: $Direction$Axis$Type): boolean
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): boolean
public "set"(axis: $Direction$Axis$Type, value: boolean): $CopycatByteBlock$Byte
public "copy"(): $CopycatByteBlock$Byte
public "z"(): boolean
public "y"(): boolean
public "relative"(direction: $Direction$Type): $CopycatByteBlock$Byte
public "mirror"(mirror: $Mirror$Type): $CopycatByteBlock$Byte
public "rotateX"(rotation: $Rotation$Type): $CopycatByteBlock$Byte
public "rotateY"(rotation: $Rotation$Type): $CopycatByteBlock$Byte
public "rotateZ"(rotation: $Rotation$Type): $CopycatByteBlock$Byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Byte$Type = ($CopycatByteBlock$Byte);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock$Byte_ = $CopycatByteBlock$Byte$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape" {
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $CopycatStairsBlock$FaceShape {
 "topNegative": boolean
 "topPositive": boolean
 "bottomNegative": boolean
 "bottomPositive": boolean

constructor()

public "equals"(obj: any): boolean
public "set"(bottomNegative: boolean, bottomPositive: boolean, topNegative: boolean, topPositive: boolean): $CopycatStairsBlock$FaceShape
public "rotate"(angle: integer): $CopycatStairsBlock$FaceShape
public "rotate"(angle: float): $CopycatStairsBlock$FaceShape
public "countBlocks"(): integer
public "fillPositive"(): $CopycatStairsBlock$FaceShape
public "fillNegative"(): $CopycatStairsBlock$FaceShape
public "fillAll"(): $CopycatStairsBlock$FaceShape
public "fillTop"(): $CopycatStairsBlock$FaceShape
public "fillTop"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean, direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(): $CopycatStairsBlock$FaceShape
public "canConnect"(): boolean
public "fillRight"(relativeTo: $Direction$Type): $CopycatStairsBlock$FaceShape
public "fillLeft"(relativeTo: $Direction$Type): $CopycatStairsBlock$FaceShape
public "fillColumn"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "isFull"(): boolean
get "full"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$FaceShape$Type = ($CopycatStairsBlock$FaceShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock$FaceShape_ = $CopycatStairsBlock$FaceShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$CopycatSlabBlock$FaceShape, $CopycatSlabBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock$FaceShape"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem"
import {$CopycatTransformableState, $CopycatTransformableState$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatTransformableState"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSlabBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "SLAB_TYPE": $EnumProperty<($SlabType)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public static "fromTransformableState"(state: $BlockState$Type, transformableState: $CopycatTransformableState$Type<(void)>): $BlockState
public static "toTransformableState"(state: $BlockState$Type): $CopycatTransformableState<(void)>
public static "toTransformableStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "setApparentDirection"(state: $BlockState$Type, direction: $Direction$Type): $BlockState
public static "getApparentDirection"(state: $BlockState$Type): $Direction
public static "fromTransformableStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transformableState: $CopycatTransformableState$Type<($MaterialItemStorage$MaterialItem$Type)>): void
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatSlabBlock$FaceShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$Type = ($CopycatSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock_ = $CopycatSlabBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fluid_pipe/$CopycatGlassFluidPipeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GlassFluidPipeBlock, $GlassFluidPipeBlock$Type} from "packages/com/simibubi/create/content/fluids/pipes/$GlassFluidPipeBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatGlassFluidPipeBlock extends $GlassFluidPipeBlock implements $ICopycatBlock {
static readonly "ALT": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "toRegularPipe"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAxisOf"(arg0: $BlockState$Type): $Direction$Axis
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGlassFluidPipeBlock$Type = ($CopycatGlassFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGlassFluidPipeBlock_ = $CopycatGlassFluidPipeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/shaft/$CopycatShaftBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ShaftBlock, $ShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ShaftBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatShaftBlock extends $ShaftBlock implements $ICopycatBlock, $ICustomCTBlocking {
static readonly "placementHelperId": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatShaftBlock$Type = ($CopycatShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatShaftBlock_ = $CopycatShaftBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatTransformableState" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$CopycatTransformableState$Part, $CopycatTransformableState$Part$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatTransformableState$Part"
import {$List, $List$Type} from "packages/java/util/$List"

export class $CopycatTransformableState<T> {
 "parts": $List<($CopycatTransformableState$Part<(T)>)>

constructor()

public "transform"(transform: $StructureTransform$Type): $CopycatTransformableState<(T)>
public static "create"<T>(consumer: $Consumer$Type<($CopycatTransformableState$Type<(T)>)>): $CopycatTransformableState<(T)>
public "untransform"(transform: $StructureTransform$Type): $CopycatTransformableState<(T)>
public "addPart"(x: integer, y: integer, z: integer): $CopycatTransformableState$Part<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$Type<T> = ($CopycatTransformableState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTransformableState_<T> = $CopycatTransformableState$Type<(T)>;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/layer/$CopycatLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLayerBlock$Type = ($CopycatLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLayerBlock_ = $CopycatLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/pressure_plate/$CopycatPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatPressurePlateBlock extends $PressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "POWERED": $BooleanProperty
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

constructor(sensitivity: $PressurePlateBlock$Sensitivity$Type, properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPressurePlateBlock$Type = ($CopycatPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatPressurePlateBlock_ = $CopycatPressurePlateBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/ladder/$CopycatLadderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$LadderBlock, $LadderBlock$Type} from "packages/net/minecraft/world/level/block/$LadderBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CopycatLadderBlock extends $LadderBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static "RAILS": $BooleanProperty
static "STEPS": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$Type, blockPos: $BlockPos$Type, blockPos1: $BlockPos$Type, blockState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLadderBlock$Type = ($CopycatLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLadderBlock_ = $CopycatLadderBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ICopycatBlock$OnRemoveHandler {

 "handle"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}

export namespace $ICopycatBlock$OnRemoveHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$OnRemoveHandler$Type = ($ICopycatBlock$OnRemoveHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlock$OnRemoveHandler_ = $ICopycatBlock$OnRemoveHandler$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$CopycatByteBlock$Byte, $CopycatByteBlock$Byte$Type} from "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock$Byte"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatByteBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static "TOP_NE": $BooleanProperty
static "TOP_NW": $BooleanProperty
static "TOP_SE": $BooleanProperty
static "TOP_SW": $BooleanProperty
static "BOTTOM_NE": $BooleanProperty
static "BOTTOM_NW": $BooleanProperty
static "BOTTOM_SE": $BooleanProperty
static "BOTTOM_SW": $BooleanProperty
static readonly "allBytes": $List<($CopycatByteBlock$Byte)>
static readonly "byteMap": $Map<(string), ($CopycatByteBlock$Byte)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getByteFromVec"(vec: $Vec3$Type, pos: $BlockPos$Type): $CopycatByteBlock$Byte
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public static "byByte"(x: boolean, y: boolean, z: boolean): $BooleanProperty
public static "byByte"(bite: $CopycatByteBlock$Byte$Type): $BooleanProperty
public static "bite"(x: boolean, y: boolean, z: boolean): $CopycatByteBlock$Byte
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Type = ($CopycatByteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock_ = $CopycatByteBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slope_layer/$CopycatSlopeLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSlopeLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeLayerBlock$Type = ($CopycatSlopeLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeLayerBlock_ = $CopycatSlopeLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/pane/$CopycatPaneBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ConnectedGlassPaneBlock, $ConnectedGlassPaneBlock$Type} from "packages/com/simibubi/create/content/decoration/palettes/$ConnectedGlassPaneBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatPaneBlock extends $ConnectedGlassPaneBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType, $ICustomCTBlocking {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "propertyForDirection"(direction: $Direction$Type): $BooleanProperty
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPaneBlock$Type = ($CopycatPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatPaneBlock_ = $CopycatPaneBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MaterialItemStorage$MaterialItem {

constructor(material: $BlockState$Type, consumedItem: $ItemStack$Type)
constructor(material: $BlockState$Type, consumedItem: $ItemStack$Type, enableCT: boolean)

public "hasCustomMaterial"(): boolean
public "setEnableCT"(enableCT: boolean): void
public "consumedItem"(): $ItemStack
public "setConsumedItem"(stack: $ItemStack$Type): void
public "setMaterial"(material: $BlockState$Type): void
public "serializeSafe"(): $CompoundTag
public "serialize"(): $CompoundTag
public static "deserialize"(tag: $CompoundTag$Type): $MaterialItemStorage$MaterialItem
public "material"(): $BlockState
public "enableCT"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$MaterialItem$Type = ($MaterialItemStorage$MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage$MaterialItem_ = $MaterialItemStorage$MaterialItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/pressure_plate/$CopycatWeightedPressurePlate" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$WeightedPressurePlateBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatWeightedPressurePlate extends $WeightedPressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "POWER": $IntegerProperty
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

constructor(maxWeight: integer, pProperties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWeightedPressurePlate$Type = ($CopycatWeightedPressurePlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWeightedPressurePlate_ = $CopycatWeightedPressurePlate$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatCatwalkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatCatwalkItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(builder: $Item$Properties$Type)

public "getDescriptionId"(): string
public "registerBlocks"(map: $Map$Type<($Block$Type), ($Item$Type)>, self: $Item$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCatwalkItem$Type = ($CopycatCatwalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCatwalkItem_ = $CopycatCatwalkItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/$CCBlockStateProperties$VerticalStairShape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CCBlockStateProperties$VerticalStairShape extends $Enum<($CCBlockStateProperties$VerticalStairShape)> implements $StringRepresentable {
static readonly "STRAIGHT": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_BOTTOM": $CCBlockStateProperties$VerticalStairShape


public static "values"(): ($CCBlockStateProperties$VerticalStairShape)[]
public static "valueOf"(name: string): $CCBlockStateProperties$VerticalStairShape
public "isTop"(): boolean
public "getSerializedName"(): string
public "isOuter"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "top"(): boolean
get "serializedName"(): string
get "outer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$VerticalStairShape$Type = (("straight") | ("inner_top") | ("outer_top") | ("inner_bottom") | ("outer_bottom")) | ($CCBlockStateProperties$VerticalStairShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$VerticalStairShape_ = $CCBlockStateProperties$VerticalStairShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock$FaceShape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"

export class $CopycatSlabBlock$FaceShape extends $Enum<($CopycatSlabBlock$FaceShape)> {
static readonly "FULL": $CopycatSlabBlock$FaceShape
static readonly "TOP": $CopycatSlabBlock$FaceShape
static readonly "BOTTOM": $CopycatSlabBlock$FaceShape
static readonly "NONE": $CopycatSlabBlock$FaceShape


public static "values"(): ($CopycatSlabBlock$FaceShape)[]
public static "valueOf"(name: string): $CopycatSlabBlock$FaceShape
public static "forSlabSide"(type: $SlabType$Type): $CopycatSlabBlock$FaceShape
public static "fullOrNone"(value: boolean): $CopycatSlabBlock$FaceShape
public static "canConnect"(shape1: $CopycatSlabBlock$FaceShape$Type, shape2: $CopycatSlabBlock$FaceShape$Type): boolean
public "hasContact"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$FaceShape$Type = (("top") | ("bottom") | ("none") | ("full")) | ($CopycatSlabBlock$FaceShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock$FaceShape_ = $CopycatSlabBlock$FaceShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterialItemStorage {


public static "create"(properties: $Set$Type<(string)>): $MaterialItemStorage
public "getAllProperties"(): $Set<(string)>
public "getAllMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
public "getAllMaterials"(): $Set<($BlockState)>
public "hasCustomMaterial"(property: string): boolean
public "getMaterialItem"(property: string): $MaterialItemStorage$MaterialItem
public "getAllConsumedItems"(): $List<($ItemStack)>
public "storeMaterialItem"(property: string, materialItem: $MaterialItemStorage$MaterialItem$Type): void
public "remapStorage"(keyMapper: $Function$Type<(string), (string)>): void
public "serializeSafe"(): $CompoundTag
public "getMaterialMap"(): $Map<(string), ($BlockState)>
public "serialize"(): $CompoundTag
public "deserialize"(tag: $CompoundTag$Type): boolean
get "allProperties"(): $Set<(string)>
get "allMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
get "allMaterials"(): $Set<($BlockState)>
get "allConsumedItems"(): $List<($ItemStack)>
get "materialMap"(): $Map<(string), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$Type = ($MaterialItemStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage_ = $MaterialItemStorage$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/ghost_block/$CopycatGhostBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatGhostBlock extends $CCCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$Type, blockPos: $BlockPos$Type, blockPos1: $BlockPos$Type, blockState: $BlockState$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGhostBlock$Type = ($CopycatGhostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGhostBlock_ = $CopycatGhostBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/door/$CopycatDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatDoorBlock extends $DoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static "CT": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$Type, p_153213_: $BlockState$Type, p_153214_: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatDoorBlock$Type = ($CopycatDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatDoorBlock_ = $CopycatDoorBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_slice/$CopycatVerticalSliceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSliceBlock$Type = ($CopycatVerticalSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSliceBlock_ = $CopycatVerticalSliceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/block/$CopycatBlockBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatBlockBlock extends $CCCopycatBlock implements $IStateType {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBlockBlock$Type = ($CopycatBlockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBlockBlock_ = $CopycatBlockBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/half_layer/$CopycatHalfLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem"
import {$CopycatTransformableState, $CopycatTransformableState$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatTransformableState"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POSITIVE_LAYERS": $IntegerProperty
static readonly "NEGATIVE_LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public static "fromTransformableState"(state: $BlockState$Type, transformableState: $CopycatTransformableState$Type<(integer)>): $BlockState
public static "toTransformableState"(state: $BlockState$Type): $CopycatTransformableState<(integer)>
public static "toTransformableStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "fromTransformableStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transformableState: $CopycatTransformableState$Type<($MaterialItemStorage$MaterialItem$Type)>): void
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfLayerBlock$Type = ($CopycatHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfLayerBlock_ = $CopycatHalfLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MaterialItemStorage, $MaterialItemStorage$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export class $MultiStateCopycatBlockEntity extends $SmartBlockEntity implements $IMultiStateCopycatBlockEntity {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$Type): void
public "getModelData"(): $ModelData
public "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getMaterialItemStorage"(): $MaterialItemStorage
public "migrateData"(copycatBlockEntity: $ICopycatBlockEntity$Type): void
public "writeSafe"(tag: $CompoundTag$Type): void
public "invalidate"(): void
public "transform"(blockEntity: $BlockEntity$Type, transform: $StructureTransform$Type): void
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
public "hasCustomMaterial"(): boolean
public "setEnableCT"(property: string, value: boolean): void
public "setConsumedItem"(property: string, itemStack: $ItemStack$Type): void
public "setMaterial"(property: string, blockState: $BlockState$Type): void
public "cycleMaterial"(property: string): boolean
public "isCTEnabled"(): boolean
public "getConsumedItem"(): $ItemStack
public "setMaterialInternal"(material: $BlockState$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
public "setCTEnabledInternal"(value: boolean): void
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type): void
public static "write"(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$Type): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "notifyUpdate"(): void
public "setConsumedItem"(stack: $ItemStack$Type): void
public "setMaterial"(blockState: $BlockState$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "getBlockPos"(): $BlockPos
public "getLevel"(): $Level
public "getBlockState"(): $BlockState
public "setLevel"(arg0: $Level$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public static "writeSafe"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
set "materialItemStorageInternal"(value: $MaterialItemStorage$Type)
get "modelData"(): $ModelData
get "materialItemStorage"(): $MaterialItemStorage
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$Type)
set "consumedItemInternal"(value: $ItemStack$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItem"(value: $ItemStack$Type)
set "material"(value: $BlockState$Type)
set "cTEnabled"(value: boolean)
get "blockPos"(): $BlockPos
get "level"(): $Level
get "blockState"(): $BlockState
set "level"(value: $Level$Type)
set "blockState"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlockEntity$Type = ($MultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlockEntity_ = $MultiStateCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatBoxItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatBoxItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string

constructor(builder: $Item$Properties$Type)

public "getDescriptionId"(): string
public "registerBlocks"(map: $Map$Type<($Block$Type), ($Item$Type)>, self: $Item$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoxItem$Type = ($CopycatBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoxItem_ = $CopycatBoxItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/beam/$CopycatBeamBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatBeamBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBeamBlock$Type = ($CopycatBeamBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBeamBlock_ = $CopycatBeamBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$MultiStateCopycatBlockEntity, $MultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $MultiStateCopycatBlock extends $Block implements $IMultiStateCopycatBlock, $IBE<($MultiStateCopycatBlockEntity)>, $IForgeBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
public "getAppearance"(state: $BlockState$Type, renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "fallOn"(pLevel: $Level$Type, state: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$Type, p_153213_: $BlockState$Type, p_153214_: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public "getPropertyFromInteraction"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $Vec3i$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
public "vectorScale"(arg0: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(arg0: string): integer
public "getVectorFromProperty"(arg0: $BlockState$Type, arg1: string): $Vec3i
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $BlockGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public "getAcceptedBlockState"(property: string, pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
public "getPartialFaceShape"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: string, arg3: $Direction$Type): $VoxelShape
public "transformStorage"(arg0: $BlockState$Type, arg1: $IMultiStateCopycatBlockEntity$Type, arg2: $StructureTransform$Type): void
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "stateType"(): $StateType
public "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "partExists"(arg0: $BlockState$Type, arg1: string): boolean
public "defaultProperty"(): string
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MultiStateCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MultiStateCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MultiStateCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MultiStateCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlock$Type = ($MultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlock_ = $MultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/half_panel/$CopycatHalfPanelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatHalfPanelBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "OFFSET": $DirectionProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getOffsetAxis"(facing: $Direction$Type, offset: $Direction$Type): $Direction$Axis
public static "getOffsetFacing"(facing: $Direction$Type, offset: $Direction$Type): $Direction
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfPanelBlock$Type = ($CopycatHalfPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfPanelBlock_ = $CopycatHalfPanelBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/$CCBlockStateProperties$Side" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CCBlockStateProperties$Side extends $Enum<($CCBlockStateProperties$Side)> implements $StringRepresentable {
static readonly "LEFT": $CCBlockStateProperties$Side
static readonly "RIGHT": $CCBlockStateProperties$Side


public static "values"(): ($CCBlockStateProperties$Side)[]
public static "valueOf"(name: string): $CCBlockStateProperties$Side
public "getOpposite"(): $CCBlockStateProperties$Side
public "getSerializedName"(): string
public "isRight"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "opposite"(): $CCBlockStateProperties$Side
get "serializedName"(): string
get "right"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$Side$Type = (("left") | ("right")) | ($CCBlockStateProperties$Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$Side_ = $CCBlockStateProperties$Side$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slope/$CopycatSlopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeBlock$Type = ($CopycatSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeBlock_ = $CopycatSlopeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ICustomCTBlocking {

 "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
 "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
}

export namespace $ICustomCTBlocking {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCTBlocking$Type = ($ICustomCTBlocking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomCTBlocking_ = $ICustomCTBlocking$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatBaseBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CopycatBaseBlock extends $Block {
static readonly "BASE_TYPE_COUNT": integer
static readonly "BASE_TYPE": $IntegerProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBaseBlock$Type = ($CopycatBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBaseBlock_ = $CopycatBaseBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/stacked_half_layer/$CopycatStackedHalfLayerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatStackedHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static readonly "FACING": $EnumProperty<($Direction)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStackedHalfLayerBlock$Type = ($CopycatStackedHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStackedHalfLayerBlock_ = $CopycatStackedHalfLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$WrappedCopycatBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CopycatBlock, $CopycatBlock$Type} from "packages/com/simibubi/create/content/decoration/copycat/$CopycatBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WrappedCopycatBlock extends $CopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "setWrapped"(wrapped: $ICopycatBlock$Type): void
public "getWrapped"(): $ICopycatBlock
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
set "wrapped"(value: $ICopycatBlock$Type)
get "wrapped"(): $ICopycatBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedCopycatBlock$Type = ($WrappedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedCopycatBlock_ = $WrappedCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/mixin/foundation/copycat/$BlockEntityAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $BlockEntityAccessor {

 "callSaveMetadata"(arg0: $CompoundTag$Type): void

(arg0: $CompoundTag$Type): void
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$Type = ($BlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityAccessor_ = $BlockEntityAccessor$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fence/$CopycatFenceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatFenceBlock extends $FenceBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $BooleanProperty
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceBlock$Type = ($CopycatFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceBlock_ = $CopycatFenceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_stairs/$CopycatVerticalStairBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$CCBlockStateProperties$VerticalStairShape, $CCBlockStateProperties$VerticalStairShape$Type} from "packages/com/copycatsplus/copycats/$CCBlockStateProperties$VerticalStairShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$CCBlockStateProperties$Side, $CCBlockStateProperties$Side$Type} from "packages/com/copycatsplus/copycats/$CCBlockStateProperties$Side"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalStairBlock extends $CCWaterloggedCopycatBlock implements $ICustomCTBlocking, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "SIDE": $EnumProperty<($CCBlockStateProperties$Side)>
static readonly "SHAPE": $EnumProperty<($CCBlockStateProperties$VerticalStairShape)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatStairsBlock$FaceShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(pState: $BlockState$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "isStairs"(state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStairBlock$Type = ($CopycatVerticalStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStairBlock_ = $CopycatVerticalStairBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CopycatStairsBlock extends $StairBlock implements $ICopycatBlock, $ICustomCTBlocking, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatStairsBlock$FaceShape
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$Type = ($CopycatStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock_ = $CopycatStairsBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CCCopycatBlock extends $Block implements $IBE<($CCCopycatBlockEntity)>, $ICopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(arg0: $BlockState$Type, arg1: $StructureTransform$Type): $BlockState
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public static "getMaterial"(level: $BlockGetter$Type, pos: $BlockPos$Type): $BlockState
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "stateType"(): $StateType
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlock$Type = ($CCCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlock_ = $CCCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$MultiStateCopycatBlock, $MultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlock"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WaterloggedMultiStateCopycatBlock extends $MultiStateCopycatBlock implements $ProperWaterloggedBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "fluidState"(arg0: $BlockState$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedMultiStateCopycatBlock$Type = ($WaterloggedMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterloggedMultiStateCopycatBlock_ = $WaterloggedMultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slice/$CopycatSliceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "HALF": $EnumProperty<($Half)>
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSliceBlock$Type = ($CopycatSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSliceBlock_ = $CopycatSliceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/corner_slice/$CopycatCornerSliceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatCornerSliceBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $SpecialBlockItemRequirement {
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCornerSliceBlock$Type = ($CopycatCornerSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCornerSliceBlock_ = $CopycatCornerSliceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/flat_pane/$CopycatFlatPaneBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatFlatPaneBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFlatPaneBlock$Type = ($CopycatFlatPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFlatPaneBlock_ = $CopycatFlatPaneBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/button/$CopycatButtonBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatButtonBlock extends $ButtonBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type, ticksToStayPressed: integer, arrowsCanPress: boolean)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatButtonBlock$Type = ($CopycatButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatButtonBlock_ = $CopycatButtonBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/mixin/copycat/sliding_door/$SlidingDoorBlockEntityAccessor" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/net/createmod/catnip/animation/$LerpedFloat"

export interface $SlidingDoorBlockEntityAccessor {

 "getAnimation"(): $LerpedFloat

(): $LerpedFloat
}

export namespace $SlidingDoorBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorBlockEntityAccessor$Type = ($SlidingDoorBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorBlockEntityAccessor_ = $SlidingDoorBlockEntityAccessor$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$TransformableBlock, $TransformableBlock$Type} from "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ICopycatBlock extends $IWrenchable, $IStateType, $TransformableBlock {

 "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
 "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
 "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
 "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
 "isAcceptedRegardless"(material: $BlockState$Type): boolean
 "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
 "m_6402_"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
 "m_5707_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
 "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "m_6227_"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
 "m_6843_"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
 "m_6943_"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
 "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
 "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "stateType"(): $StateType
}

export namespace $ICopycatBlock {
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
function wrappedColor(): $BlockColor
function getRequiredItemsForLayer(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
function getAppearance(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function hidesNeighborFace(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
function playRotateSound(arg0: $Level$Type, arg1: $BlockPos$Type): void
function playRemoveSound(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$Type = ($ICopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlock_ = $ICopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/wall/$CopycatWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CopycatWallBlock extends $WallBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $EnumProperty<($WallSide)>
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWallBlock$Type = ($CopycatWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWallBlock_ = $CopycatWallBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/sliding_door/$CopycatSlidingDoorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SlidingDoorBlock, $SlidingDoorBlock$Type} from "packages/com/simibubi/create/content/decoration/slidingDoor/$SlidingDoorBlock"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatSlidingDoorBlock extends $SlidingDoorBlock implements $ICopycatBlock {
static "CT": $BooleanProperty
static readonly "TRAIN_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "GLASS_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "STONE_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "VISIBLE": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type, folds: boolean)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "metal"(properties: $BlockBehaviour$Properties$Type, folds: boolean): $CopycatSlidingDoorBlock
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlidingDoorBlock$Type = ($CopycatSlidingDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlidingDoorBlock_ = $CopycatSlidingDoorBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export class $CCCopycatBlockEntity extends $SmartBlockEntity implements $ICopycatBlockEntity {
 "blockState": $BlockState

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "getModelData"(): $ModelData
public "getMaterial"(): $BlockState
public "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "isCTEnabled"(): boolean
public "getConsumedItem"(): $ItemStack
public "setMaterialInternal"(material: $BlockState$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "getBlockPos"(): $BlockPos
public "getLevel"(): $Level
public "getBlockState"(): $BlockState
public "setLevel"(level: $Level$Type): void
public "setBlockState"(blockState: $BlockState$Type): void
public "writeSafe"(tag: $CompoundTag$Type): void
public "invalidate"(): void
public "transform"(blockEntity: $BlockEntity$Type, transform: $StructureTransform$Type): void
public "init"(): void
public static "write"(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$Type): void
public "notifyUpdate"(): void
public "hasCustomMaterial"(): boolean
public "setConsumedItem"(stack: $ItemStack$Type): void
public "setMaterial"(blockState: $BlockState$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public static "writeSafe"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
public "getBlock"(): $ICopycatBlock
get "modelData"(): $ModelData
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$Type)
set "consumedItemInternal"(value: $ItemStack$Type)
set "cTEnabledInternal"(value: boolean)
get "blockPos"(): $BlockPos
get "level"(): $Level
get "blockState"(): $BlockState
set "level"(value: $Level$Type)
set "blockState"(value: $BlockState$Type)
set "consumedItem"(value: $ItemStack$Type)
set "material"(value: $BlockState$Type)
set "cTEnabled"(value: boolean)
get "block"(): $ICopycatBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlockEntity$Type = ($CCCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlockEntity_ = $CCCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MaterialItemStorage, $MaterialItemStorage$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export interface $IMultiStateCopycatBlockEntity extends $ICopycatBlockEntity {

 "transform"(blockEntity: $BlockEntity$Type, transform: $StructureTransform$Type): void
 "init"(): void
 "setMaterialItemStorageInternal"(arg0: $MaterialItemStorage$Type): void
 "getMaterial"(): $BlockState
 "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
 "getMaterialItemStorage"(): $MaterialItemStorage
 "hasCustomMaterial"(): boolean
 "setEnableCT"(property: string, value: boolean): void
 "setConsumedItem"(property: string, itemStack: $ItemStack$Type): void
 "setMaterial"(property: string, blockState: $BlockState$Type): void
 "cycleMaterial"(property: string): boolean
 "isCTEnabled"(): boolean
 "getConsumedItem"(): $ItemStack
 "setMaterialInternal"(material: $BlockState$Type): void
 "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
 "setCTEnabledInternal"(value: boolean): void
 "accept"(other: $BlockEntity$Type): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "notifyUpdate"(): void
 "setConsumedItem"(stack: $ItemStack$Type): void
 "setMaterial"(blockState: $BlockState$Type): void
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "m_58899_"(): $BlockPos
 "m_58904_"(): $Level
 "m_58900_"(): $BlockState
 "m_142339_"(arg0: $Level$Type): void
 "m_155250_"(arg0: $BlockState$Type): void
 "invalidate"(): void
 "writeSafe"(arg0: $CompoundTag$Type): void
}

export namespace $IMultiStateCopycatBlockEntity {
function write(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type): void
function write(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlockEntity$Type = ($IMultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlockEntity_ = $IMultiStateCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType" {
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"

/**
 * 
 * @deprecated
 */
export interface $IStateType {

 "stateType"(): $StateType
}

export namespace $IStateType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateType$Type = ($IStateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateType_ = $IStateType$Type;
}}
declare module "packages/com/copycatsplus/copycats/mixin/copycat/$VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$DoubleList, $DoubleList$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleList"

export interface $VoxelShapeAccessor {

 "copycats$getShape"(): $DiscreteVoxelShape
 "copycats$callGetCoords"(arg0: $Direction$Axis$Type): $DoubleList
 "copycats$setShape"(arg0: $DiscreteVoxelShape$Type): void
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/byte_panel/$CopycatBytePanelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$Vector2i, $Vector2i$Type} from "packages/org/joml/$Vector2i"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatBytePanelBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static "BOTTOM_LEFT": $BooleanProperty
static "BOTTOM_RIGHT": $BooleanProperty
static "TOP_LEFT": $BooleanProperty
static "TOP_RIGHT": $BooleanProperty
static "FACING": $DirectionProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public static "getProperty"(horizontal: integer, vertical: integer): string
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "getHorizontal"(facing: $Direction$Type): $Direction
public static "getVertical"(facing: $Direction$Type): $Direction
public static "fromProperty"(property: string): $BooleanProperty
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public static "getVector"(property: string): $Vector2i
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBytePanelBlock$Type = ($CopycatBytePanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBytePanelBlock_ = $CopycatBytePanelBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_slope/$CopycatVerticalSlopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSlopeBlock$Type = ($CopycatVerticalSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSlopeBlock_ = $CopycatVerticalSlopeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IMultiStateCopycatBlock extends $ICopycatBlock, $IStateType {

 "getPropertyFromInteraction"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $Vec3i$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): string
 "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
 "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
 "vectorScale"(arg0: $BlockState$Type): $Vec3i
 "storageProperties"(): $Set<(string)>
 "getColorIndex"(arg0: string): integer
 "getVectorFromProperty"(arg0: $BlockState$Type, arg1: string): $Vec3i
 "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $BlockGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
 "getAcceptedBlockState"(property: string, pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
 "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
 "getPartialFaceShape"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: string, arg3: $Direction$Type): $VoxelShape
 "transformStorage"(arg0: $BlockState$Type, arg1: $IMultiStateCopycatBlockEntity$Type, arg2: $StructureTransform$Type): void
 "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
 "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
 "m_6402_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
 "m_5707_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
 "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "m_6227_"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
 "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
 "stateType"(): $StateType
 "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
 "partExists"(arg0: $BlockState$Type, arg1: string): boolean
 "defaultProperty"(): string
 "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
 "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, fromState: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
 "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
 "isAcceptedRegardless"(material: $BlockState$Type): boolean
 "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "m_6843_"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
 "m_6943_"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
}

export namespace $IMultiStateCopycatBlock {
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
function wrappedColor(): $BlockColor
function getRequiredItemsForParts(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
function getAppearance(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
function getRequiredItemsForLayer(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
function getAppearance(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function hidesNeighborFace(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
function playRotateSound(arg0: $Level$Type, arg1: $BlockPos$Type): void
function playRemoveSound(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlock$Type = ($IMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlock_ = $IMultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$StateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

/**
 * 
 * @deprecated
 */
export class $StateType extends $Enum<($StateType)> {
static readonly "SINGULAR": $StateType
static readonly "MULTI": $StateType


public static "values"(): ($StateType)[]
public static "valueOf"(name: string): $StateType
public static "getTypeFromBlock"(block: $Block$Type): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateType$Type = (("singular") | ("multi")) | ($StateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateType_ = $StateType$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_step/$CopycatVerticalStepBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalStepBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStepBlock$Type = ($CopycatVerticalStepBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStepBlock_ = $CopycatVerticalStepBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fence_gate/$CopycatFenceGateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatFenceGateBlock extends $FenceGateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceGateBlock$Type = ($CopycatFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceGateBlock_ = $CopycatFenceGateBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/mixin/foundation/copycat/$ChunkAccessAccessor" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ChunkAccessAccessor {

 "getBlockEntities"(): $Map<($BlockPos), ($BlockEntity)>

(): $Map<($BlockPos), ($BlockEntity)>
}

export namespace $ChunkAccessAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAccessAccessor$Type = ($ChunkAccessAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkAccessAccessor_ = $ChunkAccessAccessor$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/trapdoor/$CopycatTrapdoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatTrapdoorBlock extends $TrapDoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "stateType"(): $StateType
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTrapdoorBlock$Type = ($CopycatTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTrapdoorBlock_ = $CopycatTrapdoorBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/cogwheel/$CopycatCogWheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $CopycatCogWheelBlock extends $CogWheelBlock implements $IMultiStateCopycatBlock, $IForgeBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
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


public static "small"(properties: $BlockBehaviour$Properties$Type): $CopycatCogWheelBlock
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getAcceptedBlockState"(property: string, pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "fallOn"(pLevel: $Level$Type, state: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public static "large"(properties: $BlockBehaviour$Properties$Type): $CopycatCogWheelBlock
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $BlockGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "stateType"(): $StateType
public "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCogWheelBlock$Type = ($CopycatCogWheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCogWheelBlock_ = $CopycatCogWheelBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CCWaterloggedCopycatBlock extends $CCCopycatBlock implements $ProperWaterloggedBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public "fluidState"(arg0: $BlockState$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCWaterloggedCopycatBlock$Type = ($CCWaterloggedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCWaterloggedCopycatBlock_ = $CCWaterloggedCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatBoardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatBoardBlock extends $WaterloggedMultiStateCopycatBlock implements $ICustomCTBlocking, $SpecialBlockItemRequirement {
static "UP": $BooleanProperty
static "DOWN": $BooleanProperty
static "NORTH": $BooleanProperty
static "SOUTH": $BooleanProperty
static "EAST": $BooleanProperty
static "WEST": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $BlockGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $BooleanProperty
public static "directionToProperty"(direction: $Direction$Type): string
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoardBlock$Type = ($CopycatBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoardBlock_ = $CopycatBoardBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_half_layer/$CopycatVerticalHalfLayerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockItemRequirement"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static readonly "FACING": $EnumProperty<($Direction)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "storageProperties"(): $Set<(string)>
public "getColorIndex"(property: string): integer
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPartialFaceShape"(level: $BlockGetter$Type, state: $BlockState$Type, property: string, face: $Direction$Type): $VoxelShape
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$Type, ...property: ($BooleanProperty$Type)[]): $ItemRequirement
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalHalfLayerBlock$Type = ($CopycatVerticalHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalHalfLayerBlock_ = $CopycatVerticalHalfLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TransformableBlockEntity, $TransformableBlockEntity$Type} from "packages/com/simibubi/create/api/contraption/transformable/$TransformableBlockEntity"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$SpecialBlockEntityItemRequirement, $SpecialBlockEntityItemRequirement$Type} from "packages/com/simibubi/create/api/schematic/requirement/$SpecialBlockEntityItemRequirement"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMergeableBE, $IMergeableBE$Type} from "packages/com/simibubi/create/foundation/blockEntity/$IMergeableBE"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"
import {$PartialSafeNBT, $PartialSafeNBT$Type} from "packages/com/simibubi/create/api/schematic/nbt/$PartialSafeNBT"

export interface $ICopycatBlockEntity extends $SpecialBlockEntityItemRequirement, $TransformableBlockEntity, $PartialSafeNBT, $IMergeableBE {

 "transform"(blockEntity: $BlockEntity$Type, transform: $StructureTransform$Type): void
 "init"(): void
 "accept"(other: $BlockEntity$Type): void
 "getMaterial"(): $BlockState
 "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "notifyUpdate"(): void
 "hasCustomMaterial"(): boolean
 "setConsumedItem"(stack: $ItemStack$Type): void
 "setMaterial"(blockState: $BlockState$Type): void
 "cycleMaterial"(): boolean
 "isCTEnabled"(): boolean
 "setCTEnabled"(value: boolean): void
 "getConsumedItem"(): $ItemStack
 "setMaterialInternal"(arg0: $BlockState$Type): void
 "setConsumedItemInternal"(arg0: $ItemStack$Type): void
 "setCTEnabledInternal"(arg0: boolean): void
 "m_58899_"(): $BlockPos
 "m_58904_"(): $Level
 "m_58900_"(): $BlockState
 "m_142339_"(arg0: $Level$Type): void
 "m_155250_"(arg0: $BlockState$Type): void
 "invalidate"(): void
 "getBlock"(): $ICopycatBlock
 "writeSafe"(arg0: $CompoundTag$Type): void
}

export namespace $ICopycatBlockEntity {
function write(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlockEntity$Type = ($ICopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlockEntity_ = $ICopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatTransformableState$Part" {
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $CopycatTransformableState$Part<T> {
 "vector": $Vec3i
 "data": T

constructor(x: integer, y: integer, z: integer)

public "transform"(transform: $StructureTransform$Type): $CopycatTransformableState$Part<(T)>
public "getHorizontalFacing"(): $Direction
public "untransform"(transform: $StructureTransform$Type): $CopycatTransformableState$Part<(T)>
public "getData"(): T
public "setData"(data: T): $CopycatTransformableState$Part<(T)>
public "isTop"(): boolean
public "rotateY"(facing: $Direction$Type): $CopycatTransformableState$Part<(T)>
public "rotateY"(facing: $Direction$Type, origin: $Direction$Type): $CopycatTransformableState$Part<(T)>
public "getFacing"(): $Direction
public "isRight"(facing: $Direction$Type): boolean
get "horizontalFacing"(): $Direction
get "data"(): T
set "data"(value: T)
get "top"(): boolean
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$Part$Type<T> = ($CopycatTransformableState$Part<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTransformableState$Part_<T> = $CopycatTransformableState$Part$Type<(T)>;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fluid_pipe/$CopycatFluidPipeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidPipeBlock, $FluidPipeBlock$Type} from "packages/com/simibubi/create/content/fluids/pipes/$FluidPipeBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock$OnRemoveHandler"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatFluidPipeBlock extends $FluidPipeBlock implements $ICopycatBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, toState: $BlockState$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "checkConnection"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, fromState: $BlockState$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$Type, property: $IntegerProperty$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborPos: $BlockPos$Type, dir: $Direction$Type): $Optional<(boolean)>
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$Type): void
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public static "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFluidPipeBlock$Type = ($CopycatFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFluidPipeBlock_ = $CopycatFluidPipeBlock$Type;
}}
