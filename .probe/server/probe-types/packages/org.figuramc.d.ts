declare module "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaGroupPart" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$VanillaPart, $VanillaPart$Type} from "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaPart"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"

export class $VanillaGroupPart extends $VanillaPart {

constructor(owner: $Avatar$Type, name: string, ...parts: ($VanillaPart$Type)[])

public "toString"(): string
public "save"(model: $EntityModel$Type<(any)>): void
public "setScale"(x: any, y: double, z: double): $VanillaPart
public "setOffsetRot"(x: any, y: double, z: double): $VanillaPart
public "setOffsetScale"(x: any, y: double, z: double): $VanillaPart
public "preTransform"(model: $EntityModel$Type<(any)>): void
public "posTransform"(model: $EntityModel$Type<(any)>): void
public "setVisible"(visible: boolean): $VanillaPart
public "setPos"(x: any, y: double, z: double): $VanillaPart
public "__index"(key: string): any
public "setRot"(x: any, y: double, z: double): $VanillaPart
public "restore"(model: $EntityModel$Type<(any)>): void
set "visible"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaGroupPart$Type = ($VanillaGroupPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaGroupPart_ = $VanillaGroupPart$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Animation$PlayState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Animation$PlayState extends $Enum<($Animation$PlayState)> {
static readonly "STOPPED": $Animation$PlayState
static readonly "PAUSED": $Animation$PlayState
static readonly "PLAYING": $Animation$PlayState
static readonly "HOLDING": $Animation$PlayState


public static "values"(): ($Animation$PlayState)[]
public static "valueOf"(name: string): $Animation$PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$PlayState$Type = (("holding") | ("stopped") | ("paused") | ("playing")) | ($Animation$PlayState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$PlayState_ = $Animation$PlayState$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/nameplate/$NameplateAPI" {
import {$NameplateCustomizationGroup, $NameplateCustomizationGroup$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomizationGroup"
import {$NameplateCustomization, $NameplateCustomization$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomization"
import {$EntityNameplateCustomization, $EntityNameplateCustomization$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$EntityNameplateCustomization"

export class $NameplateAPI {
readonly "CHAT": $NameplateCustomization
readonly "ENTITY": $EntityNameplateCustomization
readonly "LIST": $NameplateCustomization
readonly "ALL": $NameplateCustomizationGroup

constructor()

public "toString"(): string
public "__index"(arg: string): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameplateAPI$Type = ($NameplateAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameplateAPI_ = $NameplateAPI$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaModelPart" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$VanillaPart, $VanillaPart$Type} from "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaPart"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $VanillaModelPart extends $VanillaPart {

constructor(owner: $Avatar$Type, name: string, parentType: $ParentType$Type, provider: $Function$Type<($EntityModel$Type<(any)>), ($ModelPart$Type)>)

public "toString"(): string
public "save"(model: $EntityModel$Type<(any)>): void
public "getOriginScale"(): $FiguraVec3
public "getOriginPos"(): $FiguraVec3
public "getOriginRot"(): $FiguraVec3
public "getOriginVisible"(): boolean
public "preTransform"(model: $EntityModel$Type<(any)>): void
public "posTransform"(model: $EntityModel$Type<(any)>): void
public "restore"(model: $EntityModel$Type<(any)>): void
get "originScale"(): $FiguraVec3
get "originPos"(): $FiguraVec3
get "originRot"(): $FiguraVec3
get "originVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelPart$Type = ($VanillaModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelPart_ = $VanillaModelPart$Type;
}}
declare module "packages/org/figuramc/figura/model/$VanillaModelData" {
import {$LivingEntityRenderer, $LivingEntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$VanillaModelData$PartData, $VanillaModelData$PartData$Type} from "packages/org/figuramc/figura/model/$VanillaModelData$PartData"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VanillaModelData {
readonly "partMap": $Map<($ParentType), ($VanillaModelData$PartData)>

constructor()

public "update"(parent: $ParentType$Type, part: $ModelPart$Type): void
public "update"(parent: $ParentType$Type, model: $EntityModel$Type<(any)>): void
public "update"(entityRenderer: $LivingEntityRenderer$Type<(any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelData$Type = ($VanillaModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelData_ = $VanillaModelData$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$SoundEngineAccessor" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Library$Pool, $Library$Pool$Type} from "packages/com/mojang/blaze3d/audio/$Library$Pool"
import {$SoundBufferLibrary, $SoundBufferLibrary$Type} from "packages/net/minecraft/client/sounds/$SoundBufferLibrary"
import {$LuaSound, $LuaSound$Type} from "packages/org/figuramc/figura/lua/api/sound/$LuaSound"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$Type} from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"

export interface $SoundEngineAccessor {

 "figura$stopAllSounds"(): void
 "figura$addSound"(arg0: $LuaSound$Type): void
 "figura$createHandle"(arg0: $UUID$Type, arg1: string, arg2: $Library$Pool$Type): $ChannelAccess$ChannelHandle
 "figura$getVolume"(arg0: $SoundSource$Type): float
 "figura$getSoundBuffers"(): $SoundBufferLibrary
 "figura$isPlaying"(arg0: $UUID$Type): boolean
 "figura$stopSound"(arg0: $UUID$Type, arg1: string): void
 "figura$isEngineActive"(): boolean
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineAccessor$Type = ($SoundEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEngineAccessor_ = $SoundEngineAccessor$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Animation$LoopMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Animation$LoopMode extends $Enum<($Animation$LoopMode)> {
static readonly "LOOP": $Animation$LoopMode
static readonly "ONCE": $Animation$LoopMode
static readonly "HOLD": $Animation$LoopMode


public static "values"(): ($Animation$LoopMode)[]
public static "valueOf"(name: string): $Animation$LoopMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopMode$Type = (("once") | ("loop") | ("hold")) | ($Animation$LoopMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$LoopMode_ = $Animation$LoopMode$Type;
}}
declare module "packages/org/figuramc/figura/animation/$TransformType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $TransformType extends $Enum<($TransformType)> {
static readonly "POSITION": $TransformType
static readonly "ROTATION": $TransformType
static readonly "GLOBAL_ROT": $TransformType
static readonly "SCALE": $TransformType


public static "values"(): ($TransformType)[]
public static "valueOf"(name: string): $TransformType
public "apply"(part: $FiguraModelPart$Type, vec: $FiguraVec3$Type, merge: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformType$Type = (("rotation") | ("scale") | ("position") | ("global_rot")) | ($TransformType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformType_ = $TransformType$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "getLevel"(): $Level
 "getPermissionLevel"(): integer
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
declare module "packages/org/figuramc/figura/ducks/$BakedGlyphAccessor" {
import {$EmojiContainer, $EmojiContainer$Type} from "packages/org/figuramc/figura/font/$EmojiContainer"

export interface $BakedGlyphAccessor {

 "figura$setupEmoji"(arg0: $EmojiContainer$Type, arg1: integer): void

(arg0: $EmojiContainer$Type, arg1: integer): void
}

export namespace $BakedGlyphAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGlyphAccessor$Type = ($BakedGlyphAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGlyphAccessor_ = $BakedGlyphAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/particle/$ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {

 "setHasPhysics"(arg0: boolean): void
 "getHasPhysics"(): boolean
 "setParticleAlpha"(arg0: float): void
 "getZ"(): double
 "setGravity"(arg0: float): void
 "getGravity"(): float
 "setXo"(arg0: double): void
 "setYo"(arg0: double): void
 "setZo"(arg0: double): void
 "getBbWidth"(): float
 "getRCol"(): float
 "getGCol"(): float
 "getBCol"(): float
 "getXd"(): double
 "getYd"(): double
 "getZd"(): double
 "getX"(): double
 "getAlpha"(): float
 "getY"(): double
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleAccessor$Type = ($ParticleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleAccessor_ = $ParticleAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/world/$BlockStateAPI" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$ItemStackAPI, $ItemStackAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$ItemStackAPI"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockStateAPI {
readonly "blockState": $BlockState
readonly "id": string
readonly "properties": $LuaTable

constructor(blockstate: $BlockState$Type, pos: $BlockPos$Type)

public "toString"(): string
public "getProperties"(): $LuaTable
public "pos"(x: any, y: double, z: double): $BlockStateAPI
public "isOpaque"(): boolean
public "getID"(): string
public "getLuminance"(): integer
public "isSolidBlock"(): boolean
public "hasEmissiveLighting"(): boolean
public "hasBlockEntity"(): boolean
public "emitsRedstonePower"(): boolean
public "getVelocityMultiplier"(): float
public "getJumpVelocityMultiplier"(): float
public "getBlastResistance"(): float
public "getOutlineShape"(): $List<($List<($FiguraVec3)>)>
public "getFluidTags"(): $List<(string)>
public "toStateString"(): string
public "getFriction"(): float
public "hasCollision"(): boolean
public "getCollisionShape"(): $List<($List<($FiguraVec3)>)>
public "getTextures"(): $HashMap<(string), ($Set<(string)>)>
public "getHardness"(): float
public "getComparatorOutput"(): integer
public "isTranslucent"(): boolean
public "getEntityData"(): $LuaTable
public "getMapColor"(): $FiguraVec3
public "asItem"(): $ItemStackAPI
public "isAir"(): boolean
public "setPos"(x: any, y: double, z: double): $BlockStateAPI
public "getTags"(): $List<(string)>
public "getPos"(): $FiguraVec3
public "isFullCube"(): boolean
public "__eq"(other: $BlockStateAPI$Type): boolean
public "__index"(arg: string): any
public "getSounds"(): $Map<(string), (any)>
public "getOpacity"(): integer
get "properties"(): $LuaTable
get "opaque"(): boolean
get "iD"(): string
get "luminance"(): integer
get "solidBlock"(): boolean
get "velocityMultiplier"(): float
get "jumpVelocityMultiplier"(): float
get "blastResistance"(): float
get "outlineShape"(): $List<($List<($FiguraVec3)>)>
get "fluidTags"(): $List<(string)>
get "friction"(): float
get "collisionShape"(): $List<($List<($FiguraVec3)>)>
get "textures"(): $HashMap<(string), ($Set<(string)>)>
get "hardness"(): float
get "comparatorOutput"(): integer
get "translucent"(): boolean
get "entityData"(): $LuaTable
get "mapColor"(): $FiguraVec3
get "air"(): boolean
get "tags"(): $List<(string)>
get "fullCube"(): boolean
get "sounds"(): $Map<(string), (any)>
get "opacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateAPI$Type = ($BlockStateAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateAPI_ = $BlockStateAPI$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$TextTask" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $TextTask extends $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "toString"(): string
public "wrap"(wrap: boolean): $TextTask
public "text"(text: string): $TextTask
public "width"(width: integer): $TextTask
public "getText"(): string
public "setText"(text: string): $TextTask
public "getComplexity"(): integer
public "getOutlineColor"(): $FiguraVec3
public "setOutlineColor"(x: any, y: double, z: double): $TextTask
public "isSeeThrough"(): boolean
public "setSeeThrough"(seeThrough: boolean): $TextTask
public "hasBackground"(): boolean
public "shouldRender"(): boolean
public "getBackgroundColor"(): $FiguraVec4
public "backgroundColor"(r: any, g: double, b: double, a: double): $TextTask
public "setBackgroundColor"(r: any, g: double, b: double, a: double): $TextTask
public "outlineColor"(x: any, y: double, z: double): $TextTask
public "setAlignment"(alignment: string): $TextTask
public "render"(poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "opacity"(opacity: float): $TextTask
public "background"(background: boolean): $TextTask
public "getAlignment"(): string
public "outline"(outline: boolean): $TextTask
public "setWidth"(width: integer): $TextTask
public "setWrap"(wrap: boolean): $TextTask
public "seeThrough"(seeThrough: boolean): $TextTask
public "hasShadow"(): boolean
public "hasOutline"(): boolean
public "setOutline"(outline: boolean): $TextTask
public "hasWrap"(): boolean
public "getWidth"(): integer
public "setBackground"(background: boolean): $TextTask
public "getOpacity"(): float
public "setOpacity"(opacity: float): $TextTask
public "setShadow"(shadow: boolean): $TextTask
public "alignment"(alignment: string): $TextTask
public "shadow"(shadow: boolean): $TextTask
get "complexity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTask$Type = ($TextTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTask_ = $TextTask$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/$TextureAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export class $TextureAPI {
static readonly "TEXTURE_LIMIT": integer

constructor(owner: $Avatar$Type)

public "get"(name: string): $FiguraTexture
public "toString"(): string
public "register"(name: string, image: $NativeImage$Type, ignoreSize: boolean): $FiguraTexture
public "read"(name: string, object: any): $FiguraTexture
public "copy"(name: string, texture: $FiguraTexture$Type): $FiguraTexture
public "getTextures"(): $List<($FiguraTexture)>
public "fromVanilla"(name: string, path: string): $FiguraTexture
public "__index"(name: string): $FiguraTexture
public "newTexture"(name: string, width: integer, height: integer): $FiguraTexture
get "textures"(): $List<($FiguraTexture)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAPI$Type = ($TextureAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAPI_ = $TextureAPI$Type;
}}
declare module "packages/org/figuramc/figura/permissions/$PermissionPack$PlayerPermissionPack" {
import {$Permissions, $Permissions$Type} from "packages/org/figuramc/figura/permissions/$Permissions"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PermissionPack$CategoryPermissionPack, $PermissionPack$CategoryPermissionPack$Type} from "packages/org/figuramc/figura/permissions/$PermissionPack$CategoryPermissionPack"
import {$Permissions$Category, $Permissions$Category$Type} from "packages/org/figuramc/figura/permissions/$Permissions$Category"
import {$PermissionPack, $PermissionPack$Type} from "packages/org/figuramc/figura/permissions/$PermissionPack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PermissionPack$PlayerPermissionPack extends $PermissionPack {
 "category": $PermissionPack$CategoryPermissionPack
 "name": string

constructor(category: $PermissionPack$CategoryPermissionPack$Type, name: string)

public "get"(permissions: $Permissions$Type): integer
public "getCategoryName"(): $MutableComponent
public "setCategory"(newParent: $PermissionPack$CategoryPermissionPack$Type): void
public "getCategory"(): $Permissions$Category
public "writeNbt"(nbt: $CompoundTag$Type): void
public "isVisible"(): boolean
public "getColor"(): integer
get "categoryName"(): $MutableComponent
set "category"(value: $PermissionPack$CategoryPermissionPack$Type)
get "category"(): $Permissions$Category
get "visible"(): boolean
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionPack$PlayerPermissionPack$Type = ($PermissionPack$PlayerPermissionPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionPack$PlayerPermissionPack_ = $PermissionPack$PlayerPermissionPack$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomizationGroup" {
import {$NameplateCustomization, $NameplateCustomization$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomization"

export class $NameplateCustomizationGroup {

constructor(...customizations: ($NameplateCustomization$Type)[])

public "toString"(): string
public "setText"(text: string): $NameplateCustomizationGroup
set "text"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameplateCustomizationGroup$Type = ($NameplateCustomizationGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameplateCustomizationGroup_ = $NameplateCustomizationGroup$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/world/$ItemStackAPI" {
import {$BlockStateAPI, $BlockStateAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$BlockStateAPI"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $ItemStackAPI {
readonly "itemStack": $ItemStack
readonly "id": string
readonly "tag": $LuaTable

constructor(itemStack: $ItemStack$Type)

public "getName"(): string
public "toString"(): string
public "copy"(): $ItemStackAPI
public static "verify"(itemStack: $ItemStack$Type): $ItemStackAPI
public "getCount"(): integer
public "getTag"(): $LuaTable
public "getID"(): string
public "getBlockstate"(): $BlockStateAPI
public "toStackString"(): string
public "isBlockItem"(): boolean
public "getUseAction"(): string
public "getMaxCount"(): integer
public "isEnchantable"(): boolean
public "getRepairCost"(): integer
public "getUseDuration"(): integer
public "getEquipmentSlot"(): string
public "getMaxDamage"(): integer
public "isDamageable"(): boolean
public "isStackable"(): boolean
public "getDamage"(): integer
public "getTags"(): $List<(string)>
public "getRarity"(): string
public "isTool"(): boolean
public "__eq"(other: $ItemStackAPI$Type): boolean
public "__index"(arg: string): any
public "isFood"(): boolean
public "hasGlint"(): boolean
public "getPopTime"(): integer
public "isArmor"(): boolean
get "name"(): string
get "count"(): integer
get "tag"(): $LuaTable
get "iD"(): string
get "blockstate"(): $BlockStateAPI
get "blockItem"(): boolean
get "useAction"(): string
get "maxCount"(): integer
get "enchantable"(): boolean
get "repairCost"(): integer
get "useDuration"(): integer
get "equipmentSlot"(): string
get "maxDamage"(): integer
get "damageable"(): boolean
get "stackable"(): boolean
get "damage"(): integer
get "tags"(): $List<(string)>
get "rarity"(): string
get "tool"(): boolean
get "food"(): boolean
get "popTime"(): integer
get "armor"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAPI$Type = ($ItemStackAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackAPI_ = $ItemStackAPI$Type;
}}
declare module "packages/org/figuramc/figura/mixin/render/layers/$HumanoidArmorLayerAccessor" {
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ArmorTrim, $ArmorTrim$Type} from "packages/net/minecraft/world/item/armortrim/$ArmorTrim"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $HumanoidArmorLayerAccessor<T extends $LivingEntity, M extends $HumanoidModel<(T)>, A extends $HumanoidModel<(T)>> {

 "renderGlint"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: A): void
 "usesInnerModel"(arg0: $EquipmentSlot$Type): boolean
 "invokeGetArmorLocation"(arg0: $ArmorItem$Type, arg1: boolean, arg2: string): $ResourceLocation
 "renderModel"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: $ArmorItem$Type, arg4: A, arg5: boolean, arg6: float, arg7: float, arg8: float, arg9: string): void
 "renderTrim"(arg0: $ArmorMaterial$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: integer, arg4: $ArmorTrim$Type, arg5: A, arg6: boolean): void
}

export namespace $HumanoidArmorLayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidArmorLayerAccessor$Type<T, M, A> = ($HumanoidArmorLayerAccessor<(T), (M), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HumanoidArmorLayerAccessor_<T, M, A> = $HumanoidArmorLayerAccessor$Type<(T), (M), (A)>;
}}
declare module "packages/org/figuramc/figura/lua/api/data/$FiguraInputStream" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$FiguraFuture, $FiguraFuture$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraFuture"

export class $FiguraInputStream extends $InputStream {

constructor(parent: $Avatar$Type, sourceStream: $InputStream$Type)
constructor(parent: $Avatar$Type, sourceStream: $InputStream$Type, asyncOnly: boolean)

public "toString"(): string
public "read"(): integer
public "close"(): void
public "mark"(readlimit: integer): void
public "transferTo"(out: $OutputStream$Type): long
public "skip"(n: long): long
public "available"(): integer
public "markSupported"(): boolean
public "reset"(): void
public "isAsyncOnly"(): boolean
public "readAsync"(limit: integer): $FiguraFuture<($LuaString)>
get "asyncOnly"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraInputStream$Type = ($FiguraInputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraInputStream_ = $FiguraInputStream$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/action_wheel/$ActionWheelAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$Page, $Page$Type} from "packages/org/figuramc/figura/lua/api/action_wheel/$Page"
import {$Action, $Action$Type} from "packages/org/figuramc/figura/lua/api/action_wheel/$Action"

export class $ActionWheelAPI {
 "currentPage": $Page
 "leftClick": $LuaFunction
 "rightClick": $LuaFunction
 "scroll": $LuaFunction

constructor(owner: $Avatar$Type)

public "toString"(): string
public "execute"(index: integer, right: boolean): $ActionWheelAPI
public "execute"(avatar: $Avatar$Type, left: boolean): boolean
public "newAction"(): $Action
public "isEnabled"(): boolean
public "getCurrentPage"(): $Page
public "mouseScroll"(avatar: $Avatar$Type, delta: double): boolean
public "getSelectedAction"(): $Action
public "getSelected"(): integer
public "getPage"(pageTitle: string): any
public "__index"(arg: string): any
public "__newindex"(key: string, value: any): void
public "newPage"(title: string): $Page
public "setPage"(page: any): $ActionWheelAPI
get "enabled"(): boolean
get "currentPage"(): $Page
get "selectedAction"(): $Action
get "selected"(): integer
set "page"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionWheelAPI$Type = ($ActionWheelAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionWheelAPI_ = $ActionWheelAPI$Type;
}}
declare module "packages/org/figuramc/figura/entries/$FiguraEvent" {
import {$LuaEvent, $LuaEvent$Type} from "packages/org/figuramc/figura/lua/api/event/$LuaEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export interface $FiguraEvent {

 "getID"(): string
 "getEvents"(): $Collection<($Pair<(string), ($LuaEvent)>)>
}

export namespace $FiguraEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraEvent$Type = ($FiguraEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraEvent_ = $FiguraEvent$Type;
}}
declare module "packages/org/figuramc/figura/mixin/render/$GameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRendererAccessor {

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
declare module "packages/org/figuramc/figura/mixin/render/$TextureManagerAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractTexture, $AbstractTexture$Type} from "packages/net/minecraft/client/renderer/texture/$AbstractTexture"

export interface $TextureManagerAccessor {

 "getByPath"(): $Map<($ResourceLocation), ($AbstractTexture)>

(): $Map<($ResourceLocation), ($AbstractTexture)>
}

export namespace $TextureManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureManagerAccessor$Type = ($TextureManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureManagerAccessor_ = $TextureManagerAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/$RendererAPI" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $RendererAPI {
 "shadowRadius": float
 "fov": float
 "renderFire": boolean
 "renderVehicle": boolean
 "renderCrosshair": boolean
 "forcePaperdoll": boolean
 "renderHUD": boolean
 "cameraPos": $FiguraVec3
 "cameraPivot": $FiguraVec3
 "cameraOffsetPivot": $FiguraVec3
 "cameraRot": $FiguraVec3
 "cameraOffsetRot": $FiguraVec3
 "cameraMat": $FiguraMat4
 "cameraNormal": $FiguraMat3
 "postShader": $ResourceLocation
 "crosshairOffset": $FiguraVec2
 "outlineColor": $FiguraVec3
 "fireLayer1": $ResourceLocation
 "fireLayer2": $ResourceLocation
 "renderLeftArm": boolean
 "renderRightArm": boolean
 "eyeOffset": $FiguraVec3
 "blockOutlineColor": $FiguraVec4
 "upsideDown": boolean
 "rootRotation": boolean

constructor(owner: $Avatar$Type)

public "toString"(): string
public "renderLeftArm"(bool: boolean): $RendererAPI
public "renderRightArm"(bool: boolean): $RendererAPI
public "getOutlineColor"(): $FiguraVec3
public "setOutlineColor"(r: any, g: double, b: double): $RendererAPI
public "shouldRenderFire"(): boolean
public "setRenderFire"(renderFire: boolean): $RendererAPI
public "shouldRenderVehicle"(): boolean
public "setRenderVehicle"(renderVehicle: boolean): $RendererAPI
public "shouldRenderCrosshair"(): boolean
public "setRenderCrosshair"(renderCrosshair: boolean): $RendererAPI
public "shouldForcePaperdoll"(): boolean
public "setForcePaperdoll"(forcePaperdoll: boolean): $RendererAPI
public "shouldRenderHUD"(): boolean
public "setRenderHUD"(renderHUD: boolean): $RendererAPI
public "setUpsideDown"(upsideDown: boolean): $RendererAPI
public "setShadowRadius"(shadowRadius: float): $RendererAPI
public "getShadowRadius"(): float
public "isFirstPerson"(): boolean
public "isCameraBackwards"(): boolean
public "getCameraPos"(): $FiguraVec3
public "setCameraPos"(x: any, y: double, z: double): $RendererAPI
public "getCameraPivot"(): $FiguraVec3
public "setCameraPivot"(x: any, y: double, z: double): $RendererAPI
public "getCameraOffsetPivot"(): $FiguraVec3
public "setOffsetCameraPivot"(x: any, y: double, z: double): $RendererAPI
public "offsetCameraPivot"(x: any, y: double, z: double): $RendererAPI
public "getCameraRot"(): $FiguraVec3
public "setCameraRot"(x: any, y: double, z: double): $RendererAPI
public "getCameraOffsetRot"(): $FiguraVec3
public "setOffsetCameraRot"(x: any, y: double, z: double): $RendererAPI
public "offsetCameraRot"(x: any, y: double, z: double): $RendererAPI
public "getCameraMatrix"(): $FiguraMat4
public "setCameraMatrix"(matrix: $FiguraMat4$Type): $RendererAPI
public "cameraMatrix"(matrix: $FiguraMat4$Type): $RendererAPI
public "getCameraNormal"(): $FiguraMat3
public "setCameraNormal"(matrix: $FiguraMat3$Type): $RendererAPI
public "setPostEffect"(effect: string): $RendererAPI
public "getCrosshairOffset"(): $FiguraVec2
public "setCrosshairOffset"(x: any, y: double): $RendererAPI
public "getPrimaryFireTexture"(): string
public "getSecondaryFireTexture"(): string
public "setPrimaryFireTexture"(id: string): $RendererAPI
public "primaryFireTexture"(id: string): $RendererAPI
public "setSecondaryFireTexture"(id: string): $RendererAPI
public "secondaryFireTexture"(id: string): $RendererAPI
public "setRenderLeftArm"(bool: boolean): $RendererAPI
public "getRenderLeftArm"(): boolean
public "setRenderRightArm"(bool: boolean): $RendererAPI
public "getRenderRightArm"(): boolean
public "setEyeOffset"(x: any, y: double, z: double): $RendererAPI
public "getEyeOffset"(): $FiguraVec3
public "setBlockOutlineColor"(r: any, g: double, b: double, a: double): $RendererAPI
public "getBlockOutlineColor"(): $FiguraVec4
public "setRootRotationAllowed"(bool: boolean): $RendererAPI
public "rootRotationAllowed"(bool: boolean): $RendererAPI
public "crosshairOffset"(x: any, y: double): $RendererAPI
public "cameraNormal"(matrix: $FiguraMat3$Type): $RendererAPI
public "cameraPivot"(x: any, y: double, z: double): $RendererAPI
public "isUpsideDown"(): boolean
public "outlineColor"(r: any, g: double, b: double): $RendererAPI
public "blockOutlineColor"(r: any, g: double, b: double, a: double): $RendererAPI
public "getRootRotationAllowed"(): boolean
public "shadowRadius"(shadowRadius: float): $RendererAPI
public "eyeOffset"(x: any, y: double, z: double): $RendererAPI
public "cameraPos"(x: any, y: double, z: double): $RendererAPI
public "__index"(arg: string): any
public "__newindex"(key: string, value: boolean): void
public "fov"(fov: float): $RendererAPI
public "cameraRot"(x: any, y: double, z: double): $RendererAPI
public "getFOV"(): float
public "setFOV"(fov: float): $RendererAPI
public "upsideDown"(upsideDown: boolean): $RendererAPI
public "postEffect"(effect: string): $RendererAPI
set "renderFire"(value: boolean)
set "renderVehicle"(value: boolean)
set "renderCrosshair"(value: boolean)
set "forcePaperdoll"(value: boolean)
set "renderHUD"(value: boolean)
get "firstPerson"(): boolean
get "cameraBackwards"(): boolean
get "cameraOffsetPivot"(): $FiguraVec3
get "cameraOffsetRot"(): $FiguraVec3
get "fOV"(): float
set "fOV"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererAPI$Type = ($RendererAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererAPI_ = $RendererAPI$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/ping/$PingFunction" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $PingFunction extends $LuaFunction {
readonly "func": $LuaFunction
static "s_metatable": $LuaValue
static readonly "TINT": integer
static readonly "TNONE": integer
static readonly "TNIL": integer
static readonly "TBOOLEAN": integer
static readonly "TLIGHTUSERDATA": integer
static readonly "TNUMBER": integer
static readonly "TSTRING": integer
static readonly "TTABLE": integer
static readonly "TFUNCTION": integer
static readonly "TUSERDATA": integer
static readonly "TTHREAD": integer
static readonly "TVALUE": integer
static readonly "TYPE_NAMES": (string)[]
static readonly "NIL": $LuaValue
static readonly "TRUE": $LuaBoolean
static readonly "FALSE": $LuaBoolean
static readonly "NONE": $LuaValue
static readonly "ZERO": $LuaNumber
static readonly "ONE": $LuaNumber
static readonly "MINUSONE": $LuaNumber
static readonly "NOVALS": ($LuaValue)[]
static "ENV": $LuaString
static readonly "INDEX": $LuaString
static readonly "NEWINDEX": $LuaString
static readonly "CALL": $LuaString
static readonly "MODE": $LuaString
static readonly "METATABLE": $LuaString
static readonly "ADD": $LuaString
static readonly "SUB": $LuaString
static readonly "DIV": $LuaString
static readonly "MUL": $LuaString
static readonly "POW": $LuaString
static readonly "MOD": $LuaString
static readonly "UNM": $LuaString
static readonly "LEN": $LuaString
static readonly "EQ": $LuaString
static readonly "LT": $LuaString
static readonly "LE": $LuaString
static readonly "TOSTRING": $LuaString
static readonly "CONCAT": $LuaString
static readonly "EMPTYSTRING": $LuaString
static readonly "NILS": ($LuaValue)[]

constructor(id: integer, owner: $Avatar$Type, func: $LuaFunction$Type)

public "invoke"(args: $Varargs$Type): $Varargs
public "toString"(): string
public "call"(arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
public "call"(arg1: $LuaValue$Type, arg2: $LuaValue$Type, arg3: $LuaValue$Type): $LuaValue
public "call"(arg: $LuaValue$Type): $LuaValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingFunction$Type = ($PingFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingFunction_ = $PingFunction$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Animation" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$Animation$AnimationChannel, $Animation$AnimationChannel$Type} from "packages/org/figuramc/figura/animation/$Animation$AnimationChannel"
import {$Animation$PlayState, $Animation$PlayState$Type} from "packages/org/figuramc/figura/animation/$Animation$PlayState"
import {$Animation$LoopMode, $Animation$LoopMode$Type} from "packages/org/figuramc/figura/animation/$Animation$LoopMode"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"

export class $Animation {
readonly "modelName": string
readonly "name": string
 "playState": $Animation$PlayState

constructor(owner: $Avatar$Type, modelName: string, name: string, loop: $Animation$LoopMode$Type, override: boolean, length: float, offset: float, blend: float, startDelay: float, loopDelay: float)

public "getName"(): string
public "priority"(priority: integer): $Animation
public "length"(length: float): $Animation
public "toString"(): string
public "getLength"(): float
public "blend"(blend: float): $Animation
public "offset"(offset: float): $Animation
public "code"(time: float, data: string): $Animation
public "setPriority"(priority: integer): $Animation
public "getPriority"(): integer
public "stop"(): $Animation
public "setLength"(length: float): $Animation
public "override"(override: boolean): $Animation
public "loop"(loop: string): $Animation
public "getOffset"(): float
public "setOffset"(offset: float): $Animation
public "time"(time: float): $Animation
public "getTime"(): float
public "setTime"(time: float): $Animation
public "tick"(): void
public "addAnimation"(part: $FiguraModelPart$Type, anim: $Animation$AnimationChannel$Type): void
public "getPlayState"(): string
public "getStartDelay"(): float
public "setStartDelay"(delay: float): $Animation
public "getLoopDelay"(): float
public "setLoopDelay"(delay: float): $Animation
public "setOverride"(override: boolean): $Animation
public "getOverrideRot"(): boolean
public "getOverridePos"(): boolean
public "getOverrideScale"(): boolean
public "setOverrideRot"(override: boolean): $Animation
public "overrideRot"(override: boolean): $Animation
public "setOverridePos"(override: boolean): $Animation
public "overridePos"(override: boolean): $Animation
public "setOverrideScale"(override: boolean): $Animation
public "overrideScale"(override: boolean): $Animation
public "isStopped"(): boolean
public "play"(): $Animation
public "isPlaying"(): boolean
public "speed"(speed: float): $Animation
public "pause"(): $Animation
public "__index"(arg: string): any
public "getSpeed"(): float
public "setSpeed"(speed: float): $Animation
public "restart"(): $Animation
public "isPaused"(): boolean
public "newCode"(time: float, data: string): $Animation
public "playing"(bool: boolean): $Animation
public "getLoop"(): string
public "setLoop"(loop: string): $Animation
public "isHolding"(): boolean
public "setPlaying"(bool: boolean): $Animation
public "startDelay"(delay: float): $Animation
public "loopDelay"(delay: float): $Animation
public "playCode"(minTime: float, maxTime: float): void
public "getBlend"(): float
public "setBlend"(blend: float): $Animation
get "name"(): string
get "playState"(): string
get "stopped"(): boolean
get "paused"(): boolean
get "holding"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$GuiMessageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GuiMessageAccessor {

 "figura$setColor"(arg0: integer): void
 "figura$getColor"(): integer
}

export namespace $GuiMessageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageAccessor$Type = ($GuiMessageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiMessageAccessor_ = $GuiMessageAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/input/$KeyMappingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyMappingAccessor {

}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$Type = ($KeyMappingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/gui/$PlayerTabOverlayAccessor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $PlayerTabOverlayAccessor {

 "getHeader"(): $Component
 "getThePlayerInfos"(): $List<($PlayerInfo)>
 "getFooter"(): $Component
}

export namespace $PlayerTabOverlayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTabOverlayAccessor$Type = ($PlayerTabOverlayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTabOverlayAccessor_ = $PlayerTabOverlayAccessor$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$ParticleEngineAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpriteSet, $SpriteSet$Type} from "packages/net/minecraft/client/particle/$SpriteSet"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngineAccessor {

 "figura$spawnParticle"(arg0: $Particle$Type, arg1: $UUID$Type): void
 "figura$clearParticles"(arg0: $UUID$Type): void
 "figura$getParticleSprite"(arg0: $ResourceLocation$Type): $SpriteSet
 "figura$makeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
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
declare module "packages/org/figuramc/figura/lua/api/action_wheel/$Page" {
import {$Action, $Action$Type} from "packages/org/figuramc/figura/lua/api/action_wheel/$Action"

export class $Page {
 "keepSlots": boolean

constructor(title: string)

public "toString"(): string
public "getActions"(shift: integer): any
public "action"(index: integer, action: $Action$Type): $Page
public "getSize"(): integer
public "slots"(): ($Action)[]
public "slots"(shift: integer): ($Action)[]
public "newAction"(index: integer): $Action
public "setSlotsShift"(shift: integer): $Page
public "getGreatestSlot"(): integer
public "getGroupCount"(): integer
public "shouldKeepSlots"(): boolean
public "setKeepSlots"(bool: boolean): $Page
public "getSlotsShift"(): integer
public "getTitle"(): string
public "getAction"(index: integer): $Action
public "__index"(arg: string): any
public "__newindex"(key: string, value: boolean): void
public "setAction"(index: integer, action: $Action$Type): $Page
public "slotsShift"(shift: integer): $Page
get "size"(): integer
get "greatestSlot"(): integer
get "groupCount"(): integer
set "keepSlots"(value: boolean)
get "title"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Page$Type = ($Page);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Page_ = $Page$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$ChannelHandleAccessor" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $ChannelHandleAccessor {

 "getName"(): string
 "setName"(arg0: string): void
 "getOwner"(): $UUID
 "setOwner"(arg0: $UUID$Type): void
}

export namespace $ChannelHandleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelHandleAccessor$Type = ($ChannelHandleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelHandleAccessor_ = $ChannelHandleAccessor$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$SpriteTask" {
import {$Vertex, $Vertex$Type} from "packages/org/figuramc/figura/model/rendering/$Vertex"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"

export class $SpriteTask extends $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "toString"(): string
public "size"(w: any, h: double): $SpriteTask
public "dimensions"(w: any, h: double): $SpriteTask
public "getSize"(): $FiguraVec2
public "color"(r: any, g: double, b: double, a: double): $SpriteTask
public "region"(w: any, h: double): $SpriteTask
public "getRegion"(): $FiguraVec2
public "getDimensions"(): $FiguraVec2
public "setSize"(w: any, h: double): $SpriteTask
public "setColor"(r: any, g: double, b: double, a: double): $SpriteTask
public "setRegion"(w: any, h: double): $SpriteTask
public "getComplexity"(): integer
public "getVertices"(): $List<($Vertex)>
public "setDimensions"(w: any, h: double): $SpriteTask
public "setRenderType"(renderType: string): $SpriteTask
public "setUVPixels"(u: any, v: double): $SpriteTask
public "getUVPixels"(): $FiguraVec2
public "shouldRender"(): boolean
public "getRenderType"(): string
public "render"(poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "getTexture"(): string
public "texture"(texture: any, width: integer, height: integer): $SpriteTask
public "uv"(u: any, v: double): $SpriteTask
public "renderType"(renderType: string): $SpriteTask
public "setTexture"(texture: any, width: any, height: integer): $SpriteTask
public "uvPixels"(u: any, v: double): $SpriteTask
public "getUV"(): $FiguraVec2
public "setUV"(u: any, v: double): $SpriteTask
public "getColor"(): $FiguraVec4
get "complexity"(): integer
get "vertices"(): $List<($Vertex)>
get "uVPixels"(): $FiguraVec2
get "uV"(): $FiguraVec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTask$Type = ($SpriteTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteTask_ = $SpriteTask$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/action_wheel/$Action$TextureData" {
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"

export class $Action$TextureData {
readonly "texture": $FiguraTexture
readonly "u": double
readonly "v": double
readonly "scale": double
readonly "width": integer
readonly "height": integer

constructor(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$TextureData$Type = ($Action$TextureData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action$TextureData_ = $Action$TextureData$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/nameplate/$EntityNameplateCustomization" {
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$NameplateCustomization, $NameplateCustomization$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomization"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $EntityNameplateCustomization extends $NameplateCustomization {
 "background": integer
 "outlineColor": integer
 "light": integer
 "visible": boolean
 "shadow": boolean
 "outline": boolean

constructor()

public "toString"(): string
public "scale"(x: any, y: double, z: double): $EntityNameplateCustomization
public "pos"(x: any, y: double, z: double): $EntityNameplateCustomization
public "visible"(visible: boolean): $EntityNameplateCustomization
public "setScale"(x: any, y: double, z: double): $EntityNameplateCustomization
public "pivot"(x: any, y: double, z: double): $EntityNameplateCustomization
public "setOutlineColor"(x: any, y: double, z: double): $EntityNameplateCustomization
public "getBackgroundColor"(): $FiguraVec4
public "backgroundColor"(r: any, g: double, b: double, a: double): $EntityNameplateCustomization
public "setBackgroundColor"(r: any, g: double, b: double, a: double): $EntityNameplateCustomization
public "outlineColor"(x: any, y: double, z: double): $EntityNameplateCustomization
public "setVisible"(visible: boolean): $EntityNameplateCustomization
public "getScale"(): $FiguraVec3
public "light"(light: any, skyLight: double): $EntityNameplateCustomization
public "setPos"(x: any, y: double, z: double): $EntityNameplateCustomization
public "getPos"(): $FiguraVec3
public "getPivot"(): $FiguraVec3
public "outline"(outline: boolean): $EntityNameplateCustomization
public "getLight"(): $FiguraVec2
public "hasShadow"(): boolean
public "hasOutline"(): boolean
public "setOutline"(outline: boolean): $EntityNameplateCustomization
public "setPivot"(x: any, y: double, z: double): $EntityNameplateCustomization
public "setLight"(light: any, skyLight: double): $EntityNameplateCustomization
public "isVisible"(): boolean
public "setShadow"(shadow: boolean): $EntityNameplateCustomization
public "shadow"(shadow: boolean): $EntityNameplateCustomization
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityNameplateCustomization$Type = ($EntityNameplateCustomization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityNameplateCustomization_ = $EntityNameplateCustomization$Type;
}}
declare module "packages/org/figuramc/figura/mixin/render/$ModelManagerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelManagerAccessor {

}

export namespace $ModelManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelManagerAccessor$Type = ($ModelManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelManagerAccessor_ = $ModelManagerAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/keybind/$FiguraKeybind" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $FiguraKeybind {
 "press": $LuaFunction
 "release": $LuaFunction

constructor(owner: $Avatar$Type, name: string, key: $InputConstants$Key$Type)

public "getName"(): string
public "toString"(): string
public "getKey"(): string
public "enabled"(bool: boolean): $FiguraKeybind
public static "set"(bindings: $List$Type<($FiguraKeybind$Type)>, key: $InputConstants$Key$Type, pressed: boolean, modifiers: integer): boolean
public "key"(key: string): $FiguraKeybind
public "isDefault"(): boolean
public "getID"(): integer
public "isEnabled"(): boolean
public "setOnRelease"(arg0: $LuaFunction$Type): $FiguraKeybind
public "resetDefaultKey"(): void
public "isGuiEnabled"(): boolean
public static "overridesKey"(bindings: $List$Type<($FiguraKeybind$Type)>, key: $InputConstants$Key$Type): boolean
public static "parseStringKey"(key: string): $InputConstants$Key
public "getTranslatedKeyMessage"(): $Component
public "getKeyName"(): string
public "gui"(bool: boolean): $FiguraKeybind
public "onPress"(arg0: $LuaFunction$Type): $FiguraKeybind
public static "releaseAll"(bindings: $List$Type<($FiguraKeybind$Type)>): void
public "setOnPress"(arg0: $LuaFunction$Type): $FiguraKeybind
public static "updateAll"(bindings: $List$Type<($FiguraKeybind$Type)>): void
public "__index"(arg: string): any
public "__newindex"(key: string, value: $LuaFunction$Type): void
public "isPressed"(): boolean
public "setDown"(pressed: boolean, modifiers: integer): boolean
public "onRelease"(arg0: $LuaFunction$Type): $FiguraKeybind
public "setGUI"(bool: boolean): $FiguraKeybind
public "setEnabled"(bool: boolean): $FiguraKeybind
public "setKey"(key: string): $FiguraKeybind
public "setKey"(key: $InputConstants$Key$Type): void
get "name"(): string
get "default"(): boolean
get "iD"(): integer
get "guiEnabled"(): boolean
get "translatedKeyMessage"(): $Component
get "keyName"(): string
get "pressed"(): boolean
set "gUI"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraKeybind$Type = ($FiguraKeybind);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraKeybind_ = $FiguraKeybind$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/action_wheel/$Action" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Action$TextureData, $Action$TextureData$Type} from "packages/org/figuramc/figura/lua/api/action_wheel/$Action$TextureData"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $Action {
static readonly "HOVER_COLOR": $FiguraVec3
static readonly "TOGGLE_COLOR": $FiguraVec3
 "leftClick": $LuaFunction
 "rightClick": $LuaFunction
 "toggle": $LuaFunction
 "untoggle": $LuaFunction
 "scroll": $LuaFunction

constructor()

public "toString"(): string
public "execute"(avatar: $Avatar$Type, left: boolean): void
public "color"(x: any, y: double, z: double): $Action
public "getItem"(selected: boolean): $ItemStack
public "item"(item: any): $Action
public "setColor"(x: any, y: double, z: double): $Action
public "hoverTexture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "toggleTitle"(title: string): $Action
public "toggleColor"(x: any, y: double, z: double): $Action
public "toggleTexture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "getHoverColor"(): $FiguraVec3
public "setHoverColor"(x: any, y: double, z: double): $Action
public "setHoverItem"(item: any): $Action
public "setHoverTexture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "setOnLeftClick"(arg0: $LuaFunction$Type): $Action
public "setOnRightClick"(arg0: $LuaFunction$Type): $Action
public "setOnToggle"(arg0: $LuaFunction$Type): $Action
public "setOnUntoggle"(arg0: $LuaFunction$Type): $Action
public "setOnScroll"(arg0: $LuaFunction$Type): $Action
public "getToggleTitle"(): string
public "setToggleTitle"(title: string): $Action
public "getToggleColor"(): $FiguraVec3
public "setToggleColor"(x: any, y: double, z: double): $Action
public "setToggleItem"(item: any): $Action
public "setToggleTexture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "mouseScroll"(avatar: $Avatar$Type, delta: double): void
public "onLeftClick"(arg0: $LuaFunction$Type): $Action
public "onRightClick"(arg0: $LuaFunction$Type): $Action
public "title"(title: string): $Action
public "getTitle"(): string
public "getTexture"(selected: boolean): $Action$TextureData
public "texture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "setItem"(item: any): $Action
public "__index"(arg: string): any
public "__newindex"(key: string, value: any): void
public "onScroll"(arg0: $LuaFunction$Type): $Action
public "setTexture"(texture: $FiguraTexture$Type, u: double, v: double, width: integer, height: integer, scale: double): $Action
public "hoverItem"(item: any): $Action
public "toggleItem"(item: any): $Action
public "hoverColor"(x: any, y: double, z: double): $Action
public "toggled"(bool: boolean): $Action
public "onToggle"(arg0: $LuaFunction$Type): $Action
public "onUntoggle"(arg0: $LuaFunction$Type): $Action
public "isToggled"(): boolean
public "setToggled"(bool: boolean): $Action
public "getColor"(): $FiguraVec3
public "getColor"(selected: boolean): $FiguraVec3
public "setTitle"(title: string): $Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Action$Type = ($Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Action_ = $Action$Type;
}}
declare module "packages/org/figuramc/figura/permissions/$Permissions" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Permissions$Category, $Permissions$Category$Type} from "packages/org/figuramc/figura/permissions/$Permissions$Category"

export class $Permissions {
static readonly "INIT_INST": $Permissions
static readonly "WORLD_TICK_INST": $Permissions
static readonly "TICK_INST": $Permissions
static readonly "WORLD_RENDER_INST": $Permissions
static readonly "RENDER_INST": $Permissions
static readonly "COMPLEXITY": $Permissions
static readonly "PARTICLES": $Permissions
static readonly "SOUNDS": $Permissions
static readonly "VOLUME": $Permissions
static readonly "BB_ANIMATIONS": $Permissions
static readonly "ANIMATION_INST": $Permissions
static readonly "TEXTURE_SIZE": $Permissions
static readonly "VANILLA_MODEL_EDIT": $Permissions
static readonly "NAMEPLATE_EDIT": $Permissions
static readonly "OFFSCREEN_RENDERING": $Permissions
static readonly "CUSTOM_SOUNDS": $Permissions
static readonly "CANCEL_SOUNDS": $Permissions
static readonly "CUSTOM_SKULL": $Permissions
static readonly "BUFFER_SIZE": $Permissions
static readonly "BUFFERS_COUNT": $Permissions
static readonly "NETWORKING": $Permissions
static readonly "DEFAULT": $List<($Permissions)>
readonly "name": string
readonly "isToggle": boolean
readonly "min": integer
readonly "max": integer
readonly "stepSize": integer

constructor(name: string, sliderMin: integer, sliderMax: integer, stepSize: integer, blocked: integer, low: integer, def: integer, high: integer, max: integer)
constructor(name: string, sliderMin: integer, sliderMax: integer, blocked: integer, low: integer, def: integer, high: integer, max: integer)
constructor(name: string, blocked: integer, low: integer, def: integer, high: integer, max: integer)

public "getDefault"(category: $Permissions$Category$Type): integer
public "checkInfinity"(value: integer): boolean
public "asBoolean"(value: integer): boolean
public "showSteps"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Permissions$Type = ($Permissions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Permissions_ = $Permissions$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$BlockBehaviourAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockBehaviourAccessor {

 "hasCollision"(): boolean

(): boolean
}

export namespace $BlockBehaviourAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$Type = ($BlockBehaviourAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourAccessor_ = $BlockBehaviourAccessor$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$BlockTask" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $BlockTask extends $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "toString"(): string
public "block"(block: any): $BlockTask
public "getComplexity"(): integer
public "shouldRender"(): boolean
public "render"(poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "setBlock"(block: any): $BlockTask
get "complexity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTask$Type = ($BlockTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTask_ = $BlockTask$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$EntityRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRendererAccessor {

 "figura$isRenderingName"(): boolean
 "figura$hasScore"(): boolean
}

export namespace $EntityRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererAccessor$Type = ($EntityRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererAccessor_ = $EntityRendererAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$AABBInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AABBInvoker {

}

export namespace $AABBInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AABBInvoker$Type = ($AABBInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AABBInvoker_ = $AABBInvoker$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/ping/$PingAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$PingFunction, $PingFunction$Type} from "packages/org/figuramc/figura/lua/api/ping/$PingFunction"

export class $PingAPI {

constructor(owner: $Avatar$Type)

public "getName"(id: integer): string
public "get"(arg: string): $PingFunction
public "toString"(): string
public "__index"(arg: string): any
public "__newindex"(key: string, value: $LuaFunction$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingAPI$Type = ($PingAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingAPI_ = $PingAPI$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/$ImmediateAvatarRenderer" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VanillaModelData, $VanillaModelData$Type} from "packages/org/figuramc/figura/model/$VanillaModelData"
import {$PartFilterScheme, $PartFilterScheme$Type} from "packages/org/figuramc/figura/model/rendering/$PartFilterScheme"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$ConcurrentLinkedQueue, $ConcurrentLinkedQueue$Type} from "packages/java/util/concurrent/$ConcurrentLinkedQueue"
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$Vertex, $Vertex$Type} from "packages/org/figuramc/figura/model/rendering/$Vertex"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraTextureSet, $FiguraTextureSet$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet"
import {$AvatarRenderer, $AvatarRenderer$Type} from "packages/org/figuramc/figura/model/rendering/$AvatarRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ImmediateAvatarRenderer extends $AvatarRenderer {
static readonly "VIEW_TO_WORLD_MATRIX": $FiguraMat4
 "root": $FiguraModelPart
 "entity": $Entity
 "yaw": float
 "tickDelta": float
 "light": integer
 "overlay": integer
 "alpha": float
 "translucent": boolean
 "glowing": boolean
 "posMat": $FiguraMat4
 "normalMat": $FiguraMat3
 "bufferSource": $MultiBufferSource
 "vanillaModelData": $VanillaModelData
 "currentFilterScheme": $PartFilterScheme
readonly "pivotCustomizations": $HashMap<($ParentType), ($ConcurrentLinkedQueue<($Pair<($FiguraMat4), ($FiguraMat3)>)>)>
readonly "textures": $HashMap<(string), ($FiguraTexture)>
readonly "customTextures": $HashMap<(string), ($FiguraTexture)>
 "allowMatrixUpdate": boolean
 "allowHiddenTransforms": boolean
 "interceptRendersIntoFigura": boolean
 "allowPivotParts": boolean
 "updateLight": boolean
 "doIrisEmissiveFix": boolean
 "offsetRenderLayers": boolean
 "ignoreVanillaVisibility": boolean
 "itemToRender": $FiguraModelPart

constructor(avatar: $Avatar$Type)

public "updateMatrices"(): void
public "renderSpecialParts"(): integer
public "render"(): integer
public "checkEmpty"(): void
public "pushFaces"(faceCount: integer, remainingComplexity: (integer)[], textureSet: $FiguraTextureSet$Type, vertices: $List$Type<($Vertex$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmediateAvatarRenderer$Type = ($ImmediateAvatarRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmediateAvatarRenderer_ = $ImmediateAvatarRenderer$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaPart" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $VanillaPart {

constructor(owner: $Avatar$Type, name: string)

public "toString"(): string
public "scale"(x: any, y: double, z: double): $VanillaPart
public "save"(arg0: $EntityModel$Type<(any)>): void
public "pos"(x: any, y: double, z: double): $VanillaPart
public "visible"(visible: boolean): $VanillaPart
public "setScale"(x: any, y: double, z: double): $VanillaPart
public "offsetScale"(x: any, y: double, z: double): $VanillaPart
public "getOffsetRot"(): $FiguraVec3
public "setOffsetRot"(x: any, y: double, z: double): $VanillaPart
public "getOffsetScale"(): $FiguraVec3
public "setOffsetScale"(x: any, y: double, z: double): $VanillaPart
public "preTransform"(arg0: $EntityModel$Type<(any)>): void
public "posTransform"(arg0: $EntityModel$Type<(any)>): void
public "checkVisible"(): boolean
public "setVisible"(visible: boolean): $VanillaPart
public "getVisible"(): boolean
public "getScale"(): $FiguraVec3
public "setPos"(x: any, y: double, z: double): $VanillaPart
public "getPos"(): $FiguraVec3
public "rot"(x: any, y: double, z: double): $VanillaPart
public "setRot"(x: any, y: double, z: double): $VanillaPart
public "getRot"(): $FiguraVec3
public "offsetRot"(x: any, y: double, z: double): $VanillaPart
public "restore"(arg0: $EntityModel$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPart$Type = ($VanillaPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPart_ = $VanillaPart$Type;
}}
declare module "packages/org/figuramc/figura/mixin/render/$PoseStackAccessor" {
import {$Deque, $Deque$Type} from "packages/java/util/$Deque"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

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
declare module "packages/org/figuramc/figura/model/$TextureCustomization" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$FiguraTextureSet, $FiguraTextureSet$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet"
import {$FiguraTextureSet$OverrideType, $FiguraTextureSet$OverrideType$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet$OverrideType"

export class $TextureCustomization {

constructor(first: $FiguraTextureSet$OverrideType$Type, second: any)

public "getValue"(): any
public "getOverrideType"(): $FiguraTextureSet$OverrideType
public "getTexture"(avatar: $Avatar$Type, textureSet: $FiguraTextureSet$Type): $FiguraTexture
get "value"(): any
get "overrideType"(): $FiguraTextureSet$OverrideType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureCustomization$Type = ($TextureCustomization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureCustomization_ = $TextureCustomization$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$EntityTask" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EntityAPI, $EntityAPI$Type} from "packages/org/figuramc/figura/lua/api/entity/$EntityAPI"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"

export class $EntityTask extends $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "getComplexity"(): integer
public "updateWalkingDistance"(distance: float): $EntityTask
public "setHeadRotation"(vec2: $FiguraVec2$Type): $EntityTask
public "shouldRender"(): boolean
public "render"(stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "setNbt"(nbtOrId: string, nullOrNbt: string): $EntityTask
public "asEntity"(): $EntityAPI<(any)>
get "complexity"(): integer
set "headRotation"(value: $FiguraVec2$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTask$Type = ($EntityTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTask_ = $EntityTask$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/sound/$LuaSound" {
import {$Sound, $Sound$Type} from "packages/net/minecraft/client/resources/sounds/$Sound"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$SoundBuffer, $SoundBuffer$Type} from "packages/com/mojang/blaze3d/audio/$SoundBuffer"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$Type} from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $LuaSound {

constructor(sound: $Sound$Type, id: string, subtitle: $Component$Type, owner: $Avatar$Type)
constructor(buffer: $SoundBuffer$Type, id: string, owner: $Avatar$Type)

public "toString"(): string
public "stop"(): $LuaSound
public "getId"(): string
public "pos"(x: any, y: double, z: double): $LuaSound
public "loop"(loop: boolean): $LuaSound
public "getHandle"(): $ChannelAccess$ChannelHandle
public "getSubtitleText"(): $Component
public "attenuation"(attenuation: float): $LuaSound
public "getAttenuation"(): float
public "setAttenuation"(attenuation: float): $LuaSound
public "setSubtitle"(subtitle: string): $LuaSound
public "getSubtitle"(): string
public "play"(): $LuaSound
public "isPlaying"(): boolean
public "pitch"(pitch: float): $LuaSound
public "volume"(volume: float): $LuaSound
public "subtitle"(subtitle: string): $LuaSound
public "setPos"(x: any, y: double, z: double): $LuaSound
public "getPitch"(): float
public "setPitch"(pitch: float): $LuaSound
public "getPos"(): $FiguraVec3
public "pause"(): $LuaSound
public "setVolume"(volume: float): $LuaSound
public "getVolume"(): float
public "setLoop"(loop: boolean): $LuaSound
public "isLooping"(): boolean
get "id"(): string
get "handle"(): $ChannelAccess$ChannelHandle
get "subtitleText"(): $Component
get "playing"(): boolean
get "looping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaSound$Type = ($LuaSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaSound_ = $LuaSound$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/texture/$RenderTypes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderTypes extends $Enum<($RenderTypes)> {
static readonly "NONE": $RenderTypes
static readonly "CUTOUT": $RenderTypes
static readonly "CUTOUT_CULL": $RenderTypes
static readonly "CUTOUT_EMISSIVE_SOLID": $RenderTypes
static readonly "TRANSLUCENT": $RenderTypes
static readonly "TRANSLUCENT_CULL": $RenderTypes
static readonly "EMISSIVE": $RenderTypes
static readonly "EMISSIVE_SOLID": $RenderTypes
static readonly "EYES": $RenderTypes
static readonly "END_PORTAL": $RenderTypes
static readonly "END_GATEWAY": $RenderTypes
static readonly "TEXTURED_PORTAL": $RenderTypes
static readonly "GLINT": $RenderTypes
static readonly "GLINT2": $RenderTypes
static readonly "TEXTURED_GLINT": $RenderTypes
static readonly "LINES": $RenderTypes
static readonly "LINES_STRIP": $RenderTypes
static readonly "SOLID": $RenderTypes
static readonly "BLURRY": $RenderTypes


public "get"(id: $ResourceLocation$Type): $RenderType
public static "values"(): ($RenderTypes)[]
public static "valueOf"(name: string): $RenderTypes
public "isOffset"(): boolean
get "offset"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypes$Type = (("translucent") | ("emissive") | ("solid") | ("cutout_emissive_solid") | ("textured_portal") | ("end_portal") | ("none") | ("translucent_cull") | ("eyes") | ("blurry") | ("end_gateway") | ("glint2") | ("emissive_solid") | ("glint") | ("textured_glint") | ("lines_strip") | ("cutout") | ("lines") | ("cutout_cull")) | ($RenderTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypes_ = $RenderTypes$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/$AvatarAPI" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $AvatarAPI {
readonly "storedStuff": $LuaTable

constructor(avatar: $Avatar$Type)

public "getName"(): string
public "toString"(): string
public "store"(key: string, value: $LuaValue$Type): $AvatarAPI
public "getSize"(): double
public "color"(r: any, g: any, b: double, badge: string): $AvatarAPI
public "getVersion"(): string
public "setColor"(r: any, g: any, b: double, badge: string): $AvatarAPI
public "getComplexity"(): integer
public "getCurrentInstructions"(): integer
public "hasScriptError"(): boolean
public "getEntityInitCount"(): integer
public "getMaxInitCount"(): integer
public "getTickCount"(): integer
public "getMaxTickCount"(): integer
public "getRenderCount"(): integer
public "getMaxRenderCount"(): integer
public "getWorldTickCount"(): integer
public "getMaxWorldTickCount"(): integer
public "getWorldRenderCount"(): integer
public "getMaxWorldRenderCount"(): integer
public "getMaxComplexity"(): integer
public "getRemainingParticles"(): integer
public "getMaxParticles"(): integer
public "getRemainingSounds"(): integer
public "getMaxSounds"(): integer
public "getAnimationComplexity"(): integer
public "getMaxAnimationComplexity"(): integer
public "getAnimationCount"(): integer
public "getMaxAnimationCount"(): integer
public "getBuffersCount"(): integer
public "getMaxBuffersCount"(): integer
public "getMaxTextureSize"(): integer
public "getMaxBufferSize"(): integer
public "canEditVanillaModel"(): boolean
public "canEditNameplate"(): boolean
public "canRenderOffscreen"(): boolean
public "canUseCustomSounds"(): boolean
public "canHaveCustomSkull"(): boolean
public "getPermissionLevel"(): string
public "getInitCount"(): integer
public "getAuthors"(): string
public "getVolume"(): integer
public "getNBT"(): $LuaTable
public "hasTexture"(): boolean
public "getBadges"(): string
public "getUUID"(): string
public "getColor"(): string
public "getEntityName"(): string
get "name"(): string
get "size"(): double
get "version"(): string
get "complexity"(): integer
get "currentInstructions"(): integer
get "entityInitCount"(): integer
get "maxInitCount"(): integer
get "tickCount"(): integer
get "maxTickCount"(): integer
get "renderCount"(): integer
get "maxRenderCount"(): integer
get "worldTickCount"(): integer
get "maxWorldTickCount"(): integer
get "worldRenderCount"(): integer
get "maxWorldRenderCount"(): integer
get "maxComplexity"(): integer
get "remainingParticles"(): integer
get "maxParticles"(): integer
get "remainingSounds"(): integer
get "maxSounds"(): integer
get "animationComplexity"(): integer
get "maxAnimationComplexity"(): integer
get "animationCount"(): integer
get "maxAnimationCount"(): integer
get "buffersCount"(): integer
get "maxBuffersCount"(): integer
get "maxTextureSize"(): integer
get "maxBufferSize"(): integer
get "permissionLevel"(): string
get "initCount"(): integer
get "authors"(): string
get "volume"(): integer
get "nBT"(): $LuaTable
get "badges"(): string
get "uUID"(): string
get "entityName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AvatarAPI$Type = ($AvatarAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AvatarAPI_ = $AvatarAPI$Type;
}}
declare module "packages/org/figuramc/figura/utils/$Version" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export class $Version implements $Comparable<($Version)> {
readonly "major": integer
readonly "minor": integer
readonly "patch": integer
readonly "pre": string
readonly "build": string
readonly "invalid": boolean

constructor(version: string)

public "toString"(): string
public "compareTo"(o: $Version$Type): integer
public "noBuildString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Version$Type = ($Version);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Version_ = $Version$Type;
}}
declare module "packages/org/figuramc/figura/avatar/$Avatar" {
import {$FiguraBuffer, $FiguraBuffer$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraBuffer"
import {$FiguraInputStream, $FiguraInputStream$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraInputStream"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PartFilterScheme, $PartFilterScheme$Type} from "packages/org/figuramc/figura/model/rendering/$PartFilterScheme"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Permissions, $Permissions$Type} from "packages/org/figuramc/figura/permissions/$Permissions"
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockStateAPI, $BlockStateAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$BlockStateAPI"
import {$SoundBuffer, $SoundBuffer$Type} from "packages/com/mojang/blaze3d/audio/$SoundBuffer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$AvatarRenderer, $AvatarRenderer$Type} from "packages/org/figuramc/figura/model/rendering/$AvatarRenderer"
import {$PlayerRenderer, $PlayerRenderer$Type} from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import {$EntityRenderMode, $EntityRenderMode$Type} from "packages/org/figuramc/figura/model/rendering/$EntityRenderMode"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$RefilledNumber, $RefilledNumber$Type} from "packages/org/figuramc/figura/utils/$RefilledNumber"
import {$LivingEntityRenderer, $LivingEntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$LivingEntityRenderer"
import {$FiguraLuaRuntime, $FiguraLuaRuntime$Type} from "packages/org/figuramc/figura/lua/$FiguraLuaRuntime"
import {$EntityAPI, $EntityAPI$Type} from "packages/org/figuramc/figura/lua/api/entity/$EntityAPI"
import {$ItemStackAPI, $ItemStackAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$ItemStackAPI"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Animation, $Animation$Type} from "packages/org/figuramc/figura/animation/$Animation"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$PermissionPack$PlayerPermissionPack, $PermissionPack$PlayerPermissionPack$Type} from "packages/org/figuramc/figura/permissions/$PermissionPack$PlayerPermissionPack"
import {$Avatar$Instructions, $Avatar$Instructions$Type} from "packages/org/figuramc/figura/avatar/$Avatar$Instructions"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$Version, $Version$Type} from "packages/org/figuramc/figura/utils/$Version"
import {$FiguraOutputStream, $FiguraOutputStream$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraOutputStream"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Avatar {
static "firstPerson": boolean
readonly "owner": $UUID
readonly "entityType": $EntityType<(any)>
 "nbt": $CompoundTag
 "loaded": boolean
readonly "isHost": boolean
 "name": string
 "entityName": string
 "authors": string
 "version": $Version
 "id": string
 "fileSize": integer
 "color": string
 "badgeToColor": $Map<(string), (string)>
 "resources": $Map<(string), ((byte)[])>
 "minify": boolean
readonly "openBuffers": $ArrayList<($FiguraBuffer)>
readonly "openInputStreams": $ArrayList<($FiguraInputStream)>
readonly "openOutputStreams": $ArrayList<($FiguraOutputStream)>
 "renderer": $AvatarRenderer
 "luaRuntime": $FiguraLuaRuntime
 "renderMode": $EntityRenderMode
readonly "permissions": $PermissionPack$PlayerPermissionPack
readonly "customSounds": $Map<(string), ($SoundBuffer)>
readonly "animations": $Map<(integer), ($Animation)>
 "hasTexture": boolean
 "scriptError": boolean
 "errorText": $Component
 "noPermissions": $Set<($Permissions)>
 "permissionsToTick": $Set<($Permissions)>
 "lastPlayingSound": integer
 "versionStatus": integer
 "animationComplexity": integer
readonly "complexity": $Avatar$Instructions
readonly "init": $Avatar$Instructions
readonly "render": $Avatar$Instructions
readonly "worldRender": $Avatar$Instructions
readonly "tick": $Avatar$Instructions
readonly "worldTick": $Avatar$Instructions
readonly "animation": $Avatar$Instructions
readonly "customInstructions": $Map<(string), ($Avatar$Instructions)>
readonly "particlesRemaining": $RefilledNumber
readonly "soundsRemaining": $RefilledNumber

constructor(entity: $Entity$Type)
constructor(owner: $UUID$Type)

public "run"(toRun: any, limit: $Avatar$Instructions$Type, ...args: (any)[]): $Varargs
public "load"(nbt: $CompoundTag$Type): void
public "clean"(): void
public "tick"(): void
public "applyAnimations"(): void
public "clearAnimations"(): void
public "chatSendMessageEvent"(message: string): string
public "useItemEvent"(stack: $ItemStackAPI$Type, type: string, particleCount: integer): boolean
public "damageEvent"(sourceType: string, sourceCause: $EntityAPI$Type<(any)>, sourceDirect: $EntityAPI$Type<(any)>, sourcePosition: $FiguraVec3$Type): void
public "mousePressEvent"(button: integer, action: integer, modifiers: integer): boolean
public "mouseScrollEvent"(delta: double): boolean
public "mouseMoveEvent"(x: double, y: double): boolean
public "chatReceivedMessageEvent"(message: string, json: string): $Pair<(string), (integer)>
public "renderArrow"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, delta: float, light: integer): boolean
public "updateMatrices"(entityRenderer: $LivingEntityRenderer$Type<(any), (any)>, stack: $PoseStack$Type): void
public "renderEvent"(delta: float, poseMatrix: $FiguraMat4$Type): void
public "postRenderEvent"(delta: float, poseMatrix: $FiguraMat4$Type): void
public "worldRender"(entity: $Entity$Type, camX: double, camY: double, camZ: double, stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, lightFallback: integer, tickDelta: float, mode: $EntityRenderMode$Type): void
public "firstPersonWorldRender"(watcher: $Entity$Type, bufferSource: $MultiBufferSource$Type, matrices: $PoseStack$Type, camera: $Camera$Type, tickDelta: float): void
public "postWorldRenderEvent"(delta: float): void
public "skullRenderEvent"(delta: float, block: $BlockStateAPI$Type, item: $ItemStackAPI$Type, entity: $EntityAPI$Type<(any)>, mode: string): boolean
public "arrowRenderEvent"(delta: float, arrow: $EntityAPI$Type<(any)>): boolean
public "tridentRenderEvent"(delta: float, trident: $EntityAPI$Type<(any)>): boolean
public "playSoundEvent"(id: string, pos: $FiguraVec3$Type, vol: float, pitch: float, loop: boolean, category: string, file: string): boolean
public "resourceReloadEvent"(): void
public "elytraRender"(entity: $Entity$Type, bufferSource: $MultiBufferSource$Type, stack: $PoseStack$Type, light: integer, tickDelta: float, model: $EntityModel$Type<(any)>): void
public "firstPersonRender"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, player: $Player$Type, playerRenderer: $PlayerRenderer$Type, arm: $ModelPart$Type, light: integer, tickDelta: float): void
public "skullRender"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer, direction: $Direction$Type, yaw: float): boolean
public "pivotPartRender"(parent: $ParentType$Type, consumer: $Consumer$Type<($PoseStack$Type)>): boolean
public "renderPortrait"(gui: $GuiGraphics$Type, x: integer, y: integer, size: integer, modelScale: float, upsideDown: boolean): boolean
public "renderTrident"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, delta: float, light: integer): boolean
public "clearSounds"(): void
public "clearParticles"(): void
public "closeBuffers"(): void
public "closeStreams"(): void
public "registerTexture"(name: string, image: $NativeImage$Type, ignoreSize: boolean): $FiguraTexture
public "render"(delta: float): void
public "render"(entity: $Entity$Type, yaw: float, delta: float, alpha: float, stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer, overlay: integer, entityRenderer: $LivingEntityRenderer$Type<(any), (any)>, filter: $PartFilterScheme$Type, translucent: boolean, glowing: boolean): void
public "loadScript"(name: string, chunk: string): $LuaValue
public "keyPressEvent"(key: integer, action: integer, modifiers: integer): boolean
public "charTypedEvent"(chars: string, modifiers: integer, codePoint: integer): void
public "itemRenderEvent"(item: $ItemStackAPI$Type, mode: string, pos: $FiguraVec3$Type, rot: $FiguraVec3$Type, scale: $FiguraVec3$Type, leftHanded: boolean, stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer, overlay: integer): boolean
public "renderItem"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, part: $FiguraModelPart$Type, light: integer, overlay: integer): boolean
public "tickEvent"(): void
public "runPing"(id: integer, data: (byte)[]): void
public "punish"(amount: integer): void
public "totemEvent"(): boolean
public "capeRender"(entity: $Entity$Type, bufferSource: $MultiBufferSource$Type, stack: $PoseStack$Type, light: integer, tickDelta: float, cloak: $ModelPart$Type): void
public "hudRender"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, entity: $Entity$Type, tickDelta: float): void
public "headRender"(stack: $PoseStack$Type, bufferSource: $MultiBufferSource$Type, light: integer, useComplexity: boolean): boolean
public "loadSound"(name: string, data: (byte)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Avatar$Type = ($Avatar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Avatar_ = $Avatar$Type;
}}
declare module "packages/org/figuramc/figura/model/$PartCustomization" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$PartCustomization$PartType, $PartCustomization$PartType$Type} from "packages/org/figuramc/figura/model/$PartCustomization$PartType"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$TextureCustomization, $TextureCustomization$Type} from "packages/org/figuramc/figura/model/$TextureCustomization"
import {$RenderTypes, $RenderTypes$Type} from "packages/org/figuramc/figura/model/rendering/texture/$RenderTypes"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $PartCustomization {
 "partType": $PartCustomization$PartType
readonly "positionMatrix": $FiguraMat4
readonly "uvMatrix": $FiguraMat3
readonly "normalMatrix": $FiguraMat3
 "needsMatrixRecalculation": boolean
 "visible": boolean
 "vanillaVisible": boolean
readonly "stackScale": $FiguraVec3
readonly "color": $FiguraVec3
readonly "color2": $FiguraVec3
 "alpha": float
 "light": integer
 "overlay": integer
 "primaryTexture": $TextureCustomization
 "secondaryTexture": $TextureCustomization
static readonly "GLOBAL_CUSTOMIZATION_POSE_STACK": $PoseStack

constructor()

public "setScale"(scale: $FiguraVec3$Type): void
public "setScale"(x: double, y: double, z: double): void
public "recalculate"(): void
public "offsetScale"(x: double, y: double, z: double): void
public "offsetScale"(scale: $FiguraVec3$Type): void
public "getOffsetRot"(): $FiguraVec3
public "getOffsetScale"(): $FiguraVec3
public "getNormalMatrix"(): $FiguraMat3
public "setPrimaryRenderType"(type: $RenderTypes$Type): void
public "setSecondaryRenderType"(type: $RenderTypes$Type): void
public "getOffsetPivot"(): $FiguraVec3
public "getPositionMatrix"(): $FiguraMat4
public "getPrimaryRenderType"(): $RenderTypes
public "getSecondaryRenderType"(): $RenderTypes
public "addOffsetPivot"(x: double, y: double, z: double): void
public "addOffsetPivot"(pivot: $FiguraVec3$Type): void
public "addOffsetPos"(x: double, y: double, z: double): void
public "addOffsetPos"(pos: $FiguraVec3$Type): void
public "addOffsetRot"(x: double, y: double, z: double): void
public "addOffsetRot"(rot: $FiguraVec3$Type): void
public "offsetPivot"(x: double, y: double, z: double): void
public "offsetPivot"(pivot: $FiguraVec3$Type): void
public "getOffsetPos"(): $FiguraVec3
public "getAnimScale"(): $FiguraVec3
public "setAnimScale"(x: double, y: double, z: double): void
public "applyToStack"(stack: $PoseStack$Type): void
public "addOffsetScale"(x: double, y: double, z: double): void
public "addOffsetScale"(scale: $FiguraVec3$Type): void
public "setPositionMatrix"(matrix: $FiguraMat4$Type): void
public "setNormalMatrix"(matrix: $FiguraMat3$Type): void
public "copyIntoGlobalPoseStack"(): $PoseStack
public "modify"(other: $PartCustomization$Type): void
public "getScale"(): $FiguraVec3
public "setPos"(pos: $FiguraVec3$Type): void
public "setPos"(x: double, y: double, z: double): void
public "getPos"(): $FiguraVec3
public "offsetPos"(x: double, y: double, z: double): void
public "offsetPos"(pos: $FiguraVec3$Type): void
public "getPivot"(): $FiguraVec3
public "setRot"(rot: $FiguraVec3$Type): void
public "setRot"(x: double, y: double, z: double): void
public "getRot"(): $FiguraVec3
public "offsetRot"(rot: $FiguraVec3$Type): void
public "offsetRot"(x: double, y: double, z: double): void
public "setMatrix"(matrix: $FiguraMat4$Type): void
public "getAnimPos"(): $FiguraVec3
public "setAnimPos"(x: double, y: double, z: double): void
public "getAnimRot"(): $FiguraVec3
public "setAnimRot"(x: double, y: double, z: double): void
public "setPivot"(pivot: $FiguraVec3$Type): void
public "setPivot"(x: double, y: double, z: double): void
public "copyTo"(target: $PartCustomization$Type): void
set "scale"(value: $FiguraVec3$Type)
get "normalMatrix"(): $FiguraMat3
set "primaryRenderType"(value: $RenderTypes$Type)
set "secondaryRenderType"(value: $RenderTypes$Type)
get "positionMatrix"(): $FiguraMat4
get "primaryRenderType"(): $RenderTypes
get "secondaryRenderType"(): $RenderTypes
get "animScale"(): $FiguraVec3
set "positionMatrix"(value: $FiguraMat4$Type)
set "normalMatrix"(value: $FiguraMat3$Type)
get "scale"(): $FiguraVec3
set "pos"(value: $FiguraVec3$Type)
get "pos"(): $FiguraVec3
get "pivot"(): $FiguraVec3
set "rot"(value: $FiguraVec3$Type)
get "rot"(): $FiguraVec3
set "matrix"(value: $FiguraMat4$Type)
get "animPos"(): $FiguraVec3
get "animRot"(): $FiguraVec3
set "pivot"(value: $FiguraVec3$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartCustomization$Type = ($PartCustomization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartCustomization_ = $PartCustomization$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$SubtitleOverlayAccessor" {
import {$LuaSound, $LuaSound$Type} from "packages/org/figuramc/figura/lua/api/sound/$LuaSound"

export interface $SubtitleOverlayAccessor {

 "figura$PlaySound"(arg0: $LuaSound$Type): void

(arg0: $LuaSound$Type): void
}

export namespace $SubtitleOverlayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubtitleOverlayAccessor$Type = ($SubtitleOverlayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubtitleOverlayAccessor_ = $SubtitleOverlayAccessor$Type;
}}
declare module "packages/org/figuramc/figura/permissions/$PermissionPack$CategoryPermissionPack" {
import {$Permissions, $Permissions$Type} from "packages/org/figuramc/figura/permissions/$Permissions"
import {$Permissions$Category, $Permissions$Category$Type} from "packages/org/figuramc/figura/permissions/$Permissions$Category"
import {$PermissionPack, $PermissionPack$Type} from "packages/org/figuramc/figura/permissions/$PermissionPack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $PermissionPack$CategoryPermissionPack extends $PermissionPack {
readonly "category": $Permissions$Category
 "name": string

constructor(category: $Permissions$Category$Type)

public "get"(permissions: $Permissions$Type): integer
public "getCategoryName"(): $MutableComponent
public "setCategory"(newParent: $PermissionPack$CategoryPermissionPack$Type): void
public "getCategory"(): $Permissions$Category
public "getColor"(): integer
get "categoryName"(): $MutableComponent
set "category"(value: $PermissionPack$CategoryPermissionPack$Type)
get "category"(): $Permissions$Category
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionPack$CategoryPermissionPack$Type = ($PermissionPack$CategoryPermissionPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionPack$CategoryPermissionPack_ = $PermissionPack$CategoryPermissionPack$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/data/$FiguraFuture" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

export class $FiguraFuture<T> {

constructor()

public "toString"(): string
public "getValue"(): T
public "handle"(value: T, error: $Throwable$Type): void
public "error"(t: $Throwable$Type): void
public "complete"(value: T): void
public "isDone"(): boolean
public "hasError"(): boolean
public "throwError"(): void
public "getOrError"(): T
get "value"(): T
get "done"(): boolean
get "orError"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraFuture$Type<T> = ($FiguraFuture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraFuture_<T> = $FiguraFuture$Type<(T)>;
}}
declare module "packages/org/figuramc/figura/permissions/$Permissions$Category" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $Permissions$Category extends $Enum<($Permissions$Category)> {
static readonly "BLOCKED": $Permissions$Category
static readonly "LOW": $Permissions$Category
static readonly "DEFAULT": $Permissions$Category
static readonly "HIGH": $Permissions$Category
static readonly "MAX": $Permissions$Category
readonly "index": integer
readonly "color": integer
readonly "text": $MutableComponent
readonly "info": $MutableComponent


public static "values"(): ($Permissions$Category)[]
public static "indexOf"(i: integer): $Permissions$Category
public static "valueOf"(name: string): $Permissions$Category
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Permissions$Category$Type = (("default") | ("high") | ("blocked") | ("low") | ("max")) | ($Permissions$Category);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Permissions$Category_ = $Permissions$Category$Type;
}}
declare module "packages/org/figuramc/figura/model/$VanillaModelProvider" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $VanillaModelProvider extends $Enum<($VanillaModelProvider)> {
static readonly "HEAD": $VanillaModelProvider
static readonly "BODY": $VanillaModelProvider
static readonly "LEFT_ARM": $VanillaModelProvider
static readonly "RIGHT_ARM": $VanillaModelProvider
static readonly "LEFT_LEG": $VanillaModelProvider
static readonly "RIGHT_LEG": $VanillaModelProvider
static readonly "HAT": $VanillaModelProvider
static readonly "JACKET": $VanillaModelProvider
static readonly "LEFT_SLEEVE": $VanillaModelProvider
static readonly "RIGHT_SLEEVE": $VanillaModelProvider
static readonly "LEFT_PANTS": $VanillaModelProvider
static readonly "RIGHT_PANTS": $VanillaModelProvider
static readonly "CAPE": $VanillaModelProvider
static readonly "FAKE_CAPE": $VanillaModelProvider
static readonly "LEFT_ELYTRON": $VanillaModelProvider
static readonly "RIGHT_ELYTRON": $VanillaModelProvider
readonly "func": $Function<($EntityModel<(any)>), ($ModelPart)>


public static "values"(): ($VanillaModelProvider)[]
public static "valueOf"(name: string): $VanillaModelProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelProvider$Type = (("right_arm") | ("left_leg") | ("jacket") | ("body") | ("right_elytron") | ("fake_cape") | ("head") | ("left_sleeve") | ("right_sleeve") | ("left_arm") | ("right_leg") | ("left_elytron") | ("right_pants") | ("hat") | ("cape") | ("left_pants")) | ($VanillaModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelProvider_ = $VanillaModelProvider$Type;
}}
declare module "packages/org/figuramc/figura/font/$EmojiMetadata" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export class $EmojiMetadata {
readonly "frames": integer
readonly "frameTime": integer
readonly "width": integer

constructor(frames: integer, frameTime: integer, width: integer)
constructor(entry: $JsonObject$Type)

public "getCurrentFrame"(): integer
public "tickAnimation"(): void
get "currentFrame"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmojiMetadata$Type = ($EmojiMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmojiMetadata_ = $EmojiMetadata$Type;
}}
declare module "packages/org/figuramc/figura/model/$ParentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$VanillaModelProvider, $VanillaModelProvider$Type} from "packages/org/figuramc/figura/model/$VanillaModelProvider"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $ParentType extends $Enum<($ParentType)> {
static readonly "None": $ParentType
static readonly "Head": $ParentType
static readonly "Body": $ParentType
static readonly "LeftArm": $ParentType
static readonly "RightArm": $ParentType
static readonly "LeftLeggingPivot": $ParentType
static readonly "RightLeggingPivot": $ParentType
static readonly "LeftLeg": $ParentType
static readonly "RightLeg": $ParentType
static readonly "LeftElytraPivot": $ParentType
static readonly "RightElytraPivot": $ParentType
static readonly "LeftElytra": $ParentType
static readonly "RightElytra": $ParentType
static readonly "Cape": $ParentType
static readonly "World": $ParentType
static readonly "Hud": $ParentType
static readonly "Camera": $ParentType
static readonly "Skull": $ParentType
static readonly "Portrait": $ParentType
static readonly "Arrow": $ParentType
static readonly "Trident": $ParentType
static readonly "Item": $ParentType
static readonly "LeftItemPivot": $ParentType
static readonly "RightItemPivot": $ParentType
static readonly "LeftSpyglassPivot": $ParentType
static readonly "RightSpyglassPivot": $ParentType
static readonly "LeftParrotPivot": $ParentType
static readonly "RightParrotPivot": $ParentType
static readonly "HelmetItemPivot": $ParentType
static readonly "HelmetPivot": $ParentType
static readonly "ChestplatePivot": $ParentType
static readonly "LeftShoulderPivot": $ParentType
static readonly "RightShoulderPivot": $ParentType
static readonly "LeggingsPivot": $ParentType
static readonly "LeftBootPivot": $ParentType
static readonly "RightBootPivot": $ParentType
readonly "provider": $VanillaModelProvider
readonly "offset": $FiguraVec3
readonly "aliases": (string)[]
readonly "isSeparate": boolean
readonly "isPivot": boolean
readonly "isRenderLayer": boolean


public static "get"(name: string): $ParentType
public static "values"(): ($ParentType)[]
public static "valueOf"(name: string): $ParentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentType$Type = (("leftleggingpivot") | ("rightshoulderpivot") | ("rightspyglasspivot") | ("chestplatepivot") | ("arrow") | ("rightitempivot") | ("leftspyglasspivot") | ("leftshoulderpivot") | ("none") | ("body") | ("leftparrotpivot") | ("leftelytrapivot") | ("head") | ("world") | ("leftbootpivot") | ("rightleg") | ("rightbootpivot") | ("helmetitempivot") | ("skull") | ("camera") | ("rightelytra") | ("item") | ("trident") | ("leggingspivot") | ("leftitempivot") | ("rightarm") | ("leftleg") | ("portrait") | ("helmetpivot") | ("leftelytra") | ("hud") | ("rightleggingpivot") | ("leftarm") | ("rightparrotpivot") | ("rightelytrapivot") | ("cape")) | ($ParentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParentType_ = $ParentType$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$PlayerModelAccessor" {
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $PlayerModelAccessor {

 "figura$getFakeCloak"(): $ModelPart
 "figura$getCloak"(): $ModelPart
}

export namespace $PlayerModelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$Type = ($PlayerModelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerModelAccessor_ = $PlayerModelAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$BiomeAccessor" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BiomeAccessor {

 "getClimateSettings"(): $Biome$ClimateSettings
 "getTheTemperature"(arg0: $BlockPos$Type): float
}

export namespace $BiomeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeAccessor$Type = ($BiomeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeAccessor_ = $BiomeAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/$LuaTypeManager" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$VarArgFunction, $VarArgFunction$Type} from "packages/org/luaj/vm2/lib/$VarArgFunction"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaTypeManager {

constructor()

public "getTypeName"(clazz: $Class$Type<(any)>): string
public "dumpMetatables"(table: $LuaTable$Type): void
public "generateMetatableFor"(clazz: $Class$Type<(any)>): void
public "getWrapper"(method: $Method$Type): $VarArgFunction
public "luaVarargToJava"(args: $Varargs$Type, argIndex: integer, argumentType: $Class$Type<(any)>): any
public "javaToLua"(val: any): $Varargs
public "luaToJava"(val: $LuaValue$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTypeManager$Type = ($LuaTypeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTypeManager_ = $LuaTypeManager$Type;
}}
declare module "packages/org/figuramc/figura/mixin/render/$TextureAtlasAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $TextureAtlasAccessor {

 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$Type = ($TextureAtlasAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasAccessor_ = $TextureAtlasAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/data/$FiguraBuffer$FiguraBufferInputStream" {
import {$FiguraBuffer, $FiguraBuffer$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraBuffer"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export class $FiguraBuffer$FiguraBufferInputStream extends $InputStream {

constructor(figuraBuffer: $FiguraBuffer$Type)

public "read"(): integer
public "mark"(readlimit: integer): void
public "skip"(n: long): long
public "available"(): integer
public "markSupported"(): boolean
public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraBuffer$FiguraBufferInputStream$Type = ($FiguraBuffer$FiguraBufferInputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraBuffer$FiguraBufferInputStream_ = $FiguraBuffer$FiguraBufferInputStream$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/keybind/$KeybindAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FiguraKeybind, $FiguraKeybind$Type} from "packages/org/figuramc/figura/lua/api/keybind/$FiguraKeybind"

export class $KeybindAPI {
readonly "keyBindings": $List<($FiguraKeybind)>
readonly "owner": $Avatar

constructor(owner: $Avatar$Type)

public "toString"(): string
public "of"(name: string, key: string, gui: boolean): $FiguraKeybind
public "getVanillaKey"(id: string): string
public "getKeybinds"(): $HashMap<(string), ($FiguraKeybind)>
public "fromVanilla"(id: string): $FiguraKeybind
public "newKeybind"(name: string, key: string, gui: boolean): $FiguraKeybind
get "keybinds"(): $HashMap<(string), ($FiguraKeybind)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeybindAPI$Type = ($KeybindAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeybindAPI_ = $KeybindAPI$Type;
}}
declare module "packages/org/figuramc/figura/permissions/$PermissionPack" {
import {$Permissions, $Permissions$Type} from "packages/org/figuramc/figura/permissions/$Permissions"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$PermissionPack$CategoryPermissionPack, $PermissionPack$CategoryPermissionPack$Type} from "packages/org/figuramc/figura/permissions/$PermissionPack$CategoryPermissionPack"
import {$Permissions$Category, $Permissions$Category$Type} from "packages/org/figuramc/figura/permissions/$Permissions$Category"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PermissionPack {
 "name": string

constructor(name: string)

public "get"(permissions: $Permissions$Type): integer
public "insert"(permissions: $Permissions$Type, value: integer, id: string): void
public "clear"(): void
public "getPermissions"(): $Map<($Permissions), (integer)>
public "reset"(permissions: $Permissions$Type): void
public "getCategoryName"(): $MutableComponent
public "getCustomPermissions"(): $Map<(string), ($Map<($Permissions), (integer)>)>
public "setVisible"(visible: boolean): void
public "setCategory"(arg0: $PermissionPack$CategoryPermissionPack$Type): void
public "getCategory"(): $Permissions$Category
public "hasChanges"(): boolean
public "writeNbt"(nbt: $CompoundTag$Type): void
public "loadNbt"(nbt: $CompoundTag$Type): void
public "isChanged"(permissions: $Permissions$Type): boolean
public "isVisible"(): boolean
public "getColor"(): integer
get "permissions"(): $Map<($Permissions), (integer)>
get "categoryName"(): $MutableComponent
get "customPermissions"(): $Map<(string), ($Map<($Permissions), (integer)>)>
set "visible"(value: boolean)
set "category"(value: $PermissionPack$CategoryPermissionPack$Type)
get "category"(): $Permissions$Category
get "visible"(): boolean
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionPack$Type = ($PermissionPack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionPack_ = $PermissionPack$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$GameRendererAccessor" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"

export interface $GameRendererAccessor {

 "figura$getFov"(arg0: $Camera$Type, arg1: float, arg2: boolean): double

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
declare module "packages/org/figuramc/figura/model/$FiguraModelPart" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$SpriteTask, $SpriteTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$SpriteTask"
import {$VanillaModelData, $VanillaModelData$Type} from "packages/org/figuramc/figura/model/$VanillaModelData"
import {$PartCustomization, $PartCustomization$Type} from "packages/org/figuramc/figura/model/$PartCustomization"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$TextTask, $TextTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$TextTask"
import {$EntityTask, $EntityTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$EntityTask"
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$Vertex, $Vertex$Type} from "packages/org/figuramc/figura/model/rendering/$Vertex"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$ItemTask, $ItemTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$ItemTask"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$ImmediateAvatarRenderer, $ImmediateAvatarRenderer$Type} from "packages/org/figuramc/figura/model/rendering/$ImmediateAvatarRenderer"
import {$FiguraTextureSet, $FiguraTextureSet$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet"
import {$BlockTask, $BlockTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$BlockTask"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $FiguraModelPart implements $Comparable<($FiguraModelPart)> {
readonly "name": string
 "parent": $FiguraModelPart
readonly "customization": $PartCustomization
 "savedCustomization": $PartCustomization
 "parentType": $ParentType
 "playerCustomization": $PartCustomization
readonly "children": $List<($FiguraModelPart)>
 "facesByTexture": $List<(integer)>
 "renderTasks": $Map<(string), ($RenderTask)>
 "textures": $List<($FiguraTextureSet)>
 "textureWidth": integer
 "textureHeight": integer
 "animated": boolean
 "animationOverride": integer
 "lastAnimationPriority": integer
readonly "savedPartToWorldMat": $FiguraMat4
readonly "vertices": $Map<(integer), ($List<($Vertex)>)>
 "preRender": $LuaFunction
 "midRender": $LuaFunction
 "postRender": $LuaFunction

constructor(owner: $Avatar$Type, name: string, customization: $PartCustomization$Type, vertices: $Map$Type<(integer), ($List$Type<($Vertex$Type)>)>, children: $List$Type<($FiguraModelPart$Type)>)

public "getName"(): string
public "remove"(): $FiguraModelPart
public "toString"(): string
public "compareTo"(o: $FiguraModelPart$Type): integer
public "scale"(x: any, y: double, z: double): $FiguraModelPart
public "getParent"(): $FiguraModelPart
public "getType"(): string
public "copy"(name: string): $FiguraModelPart
public "pos"(x: any, y: double, z: double): $FiguraModelPart
public "color"(r: any, g: double, b: double): $FiguraModelPart
public "visible"(bool: boolean): $FiguraModelPart
public "getChildren"(): $Map<(integer), ($FiguraModelPart)>
public "setColor"(r: any, g: double, b: double): $FiguraModelPart
public "setScale"(x: any, y: double, z: double): $FiguraModelPart
public "pivot"(x: any, y: double, z: double): $FiguraModelPart
public "getSecondaryDefinedTextures"(value: integer): any
public "offsetScale"(x: any, y: double, z: double): $FiguraModelPart
public "getOffsetRot"(): $FiguraVec3
public "setOffsetRot"(x: any, y: double, z: double): $FiguraModelPart
public "getOffsetScale"(): $FiguraVec3
public "setOffsetScale"(x: any, y: double, z: double): $FiguraModelPart
public "getNormalMatrix"(): $FiguraMat3
public "setPrimaryRenderType"(type: string): $FiguraModelPart
public "setSecondaryRenderType"(type: string): $FiguraModelPart
public "primaryTexture"(type: string, x: any): $FiguraModelPart
public "secondaryTexture"(type: string, x: any): $FiguraModelPart
public "applyVanillaTransforms"(vanillaModelData: $VanillaModelData$Type): void
public "applyExtraTransforms"(currentTransforms: $PartCustomization$Type): void
public "resetVanillaTransforms"(): void
public "pushVerticesImmediate"(avatarRenderer: $ImmediateAvatarRenderer$Type, remainingComplexity: (integer)[]): boolean
public "getOffsetPivot"(): $FiguraVec3
public "getPositionMatrix"(): $FiguraMat4
public "getPrimaryRenderType"(): string
public "getSecondaryRenderType"(): string
public "getParentType"(): string
public "setParentType"(parent: string): $FiguraModelPart
public "getAllVertices"(): $Map<(string), ($List<($Vertex)>)>
public "getVertices"(textureID: string): $List<($Vertex)>
public "overrideVanillaScale"(): boolean
public "overrideVanillaPos"(): boolean
public "overrideVanillaRot"(): boolean
public "offsetPivot"(x: any, y: double, z: double): $FiguraModelPart
public "animPosition"(vec: $FiguraVec3$Type, merge: boolean): void
public "animRotation"(vec: $FiguraVec3$Type, merge: boolean): void
public "globalAnimRot"(vec: $FiguraVec3$Type, merge: boolean): void
public "getAnimScale"(): $FiguraVec3
public "setPreRender"(arg0: $LuaFunction$Type): $FiguraModelPart
public "setMidRender"(arg0: $LuaFunction$Type): $FiguraModelPart
public "setPostRender"(arg0: $LuaFunction$Type): $FiguraModelPart
public "getTrueScale"(): $FiguraVec3
public "setOffsetPivot"(x: any, y: double, z: double): $FiguraModelPart
public "getTruePivot"(): $FiguraVec3
public "getPositionMatrixRaw"(): $FiguraMat4
public "getNormalMatrixRaw"(): $FiguraMat3
public "primaryRenderType"(type: string): $FiguraModelPart
public "secondaryRenderType"(type: string): $FiguraModelPart
public "getPrimaryTexture"(): $Varargs
public "getSecondaryTexture"(): any
public "getPrimaryDefinedTextures"(value: integer): any
public "setPrimaryTexture"(type: string, x: any): $FiguraModelPart
public "setSecondaryTexture"(type: string, x: any): $FiguraModelPart
public "partToWorldMatrix"(): $FiguraMat4
public "getTextureSize"(): $FiguraVec2
public "setUVPixels"(x: any, y: double): $FiguraModelPart
public "getUVPixels"(): $FiguraVec2
public "setUVMatrix"(matrix: $FiguraMat3$Type): $FiguraModelPart
public "getUVMatrix"(): $FiguraMat3
public "setSecondaryColor"(r: any, g: double, b: double): $FiguraModelPart
public "setPrimaryColor"(r: any, g: double, b: double): $FiguraModelPart
public "getPrimaryColor"(): $FiguraVec3
public "getSecondaryColor"(): $FiguraVec3
public "primaryColor"(r: any, g: double, b: double): $FiguraModelPart
public "secondaryColor"(r: any, g: double, b: double): $FiguraModelPart
public "getTextures"(): $List<($FiguraTexture)>
public "parentType"(parent: string): $FiguraModelPart
public "opacity"(opacity: float): $FiguraModelPart
public "overlay"(whiteOverlay: any, hurtOverlay: double): $FiguraModelPart
public "uv"(x: any, y: double): $FiguraModelPart
public "getOverlay"(): $FiguraVec2
public "newBlock"(name: string): $BlockTask
public "addChild"(part: $FiguraModelPart$Type): $FiguraModelPart
public "setVisible"(bool: boolean): $FiguraModelPart
public "getVisible"(): boolean
public "getScale"(): $FiguraVec3
public "light"(light: any, skyLight: double): $FiguraModelPart
public "setPos"(x: any, y: double, z: double): $FiguraModelPart
public "getPos"(): $FiguraVec3
public "newItem"(name: string): $ItemTask
public "getPivot"(): $FiguraVec3
public "newPart"(name: string, parentType: string): $FiguraModelPart
public "setOverlay"(whiteOverlay: any, hurtOverlay: double): $FiguraModelPart
public "__index"(key: string): any
public "__newindex"(key: string, value: $LuaFunction$Type): void
public "rot"(x: any, y: double, z: double): $FiguraModelPart
public "matrix"(matrix: $FiguraMat4$Type): $FiguraModelPart
public "newEntity"(name: string): $EntityTask
public "isChildOf"(part: $FiguraModelPart$Type): boolean
public "getLight"(): $FiguraVec2
public "moveTo"(part: $FiguraModelPart$Type): $FiguraModelPart
public "setRot"(x: any, y: double, z: double): $FiguraModelPart
public "getRot"(): $FiguraVec3
public "newSprite"(name: string): $SpriteTask
public "getTruePos"(): $FiguraVec3
public "offsetRot"(x: any, y: double, z: double): $FiguraModelPart
public "uvMatrix"(matrix: $FiguraMat3$Type): $FiguraModelPart
public "setMatrix"(matrix: $FiguraMat4$Type): $FiguraModelPart
public "getAnimPos"(): $FiguraVec3
public "getAnimRot"(): $FiguraVec3
public "animScale"(vec: $FiguraVec3$Type, merge: boolean): void
public "getTrueRot"(): $FiguraVec3
public "setPivot"(x: any, y: double, z: double): $FiguraModelPart
public "uvPixels"(x: any, y: double): $FiguraModelPart
public "setLight"(light: any, skyLight: double): $FiguraModelPart
public "addTask"(renderTask: $RenderTask$Type): $RenderTask
public "removeTask"(x: any): $FiguraModelPart
public "getUV"(): $FiguraVec2
public "setUV"(x: any, y: double): $FiguraModelPart
public "getColor"(): $FiguraVec3
public "removeChild"(part: $FiguraModelPart$Type): $FiguraModelPart
public "getOpacity"(): float
public "setOpacity"(opacity: float): $FiguraModelPart
public "newText"(name: string): $TextTask
public "getTask"(name: string): any
get "name"(): string
get "parent"(): $FiguraModelPart
get "type"(): string
get "children"(): $Map<(integer), ($FiguraModelPart)>
get "normalMatrix"(): $FiguraMat3
get "positionMatrix"(): $FiguraMat4
get "allVertices"(): $Map<(string), ($List<($Vertex)>)>
set "preRender"(value: $LuaFunction$Type)
set "midRender"(value: $LuaFunction$Type)
set "postRender"(value: $LuaFunction$Type)
get "trueScale"(): $FiguraVec3
get "truePivot"(): $FiguraVec3
get "positionMatrixRaw"(): $FiguraMat4
get "normalMatrixRaw"(): $FiguraMat3
get "textureSize"(): $FiguraVec2
get "uVPixels"(): $FiguraVec2
set "uVMatrix"(value: $FiguraMat3$Type)
get "uVMatrix"(): $FiguraMat3
get "textures"(): $List<($FiguraTexture)>
get "truePos"(): $FiguraVec3
get "animPos"(): $FiguraVec3
get "animRot"(): $FiguraVec3
get "trueRot"(): $FiguraVec3
get "uV"(): $FiguraVec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraModelPart$Type = ($FiguraModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraModelPart_ = $FiguraModelPart$Type;
}}
declare module "packages/org/figuramc/figura/lua/$FiguraLuaRuntime" {
import {$EventsAPI, $EventsAPI$Type} from "packages/org/figuramc/figura/lua/api/event/$EventsAPI"
import {$LuaError, $LuaError$Type} from "packages/org/luaj/vm2/$LuaError"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$LuaTypeManager, $LuaTypeManager$Type} from "packages/org/figuramc/figura/lua/$LuaTypeManager"
import {$ActionWheelAPI, $ActionWheelAPI$Type} from "packages/org/figuramc/figura/lua/api/action_wheel/$ActionWheelAPI"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntityAPI, $EntityAPI$Type} from "packages/org/figuramc/figura/lua/api/entity/$EntityAPI"
import {$NameplateAPI, $NameplateAPI$Type} from "packages/org/figuramc/figura/lua/api/nameplate/$NameplateAPI"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$RendererAPI, $RendererAPI$Type} from "packages/org/figuramc/figura/lua/api/$RendererAPI"
import {$AvatarAPI, $AvatarAPI$Type} from "packages/org/figuramc/figura/lua/api/$AvatarAPI"
import {$TextureAPI, $TextureAPI$Type} from "packages/org/figuramc/figura/lua/api/$TextureAPI"
import {$VanillaModelAPI, $VanillaModelAPI$Type} from "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaModelAPI"
import {$KeybindAPI, $KeybindAPI$Type} from "packages/org/figuramc/figura/lua/api/keybind/$KeybindAPI"
import {$Avatar$Instructions, $Avatar$Instructions$Type} from "packages/org/figuramc/figura/avatar/$Avatar$Instructions"
import {$PingAPI, $PingAPI$Type} from "packages/org/figuramc/figura/lua/api/ping/$PingAPI"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"
import {$HostAPI, $HostAPI$Type} from "packages/org/figuramc/figura/lua/api/$HostAPI"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FiguraLuaRuntime {
 "entityAPI": $EntityAPI<(any)>
 "events": $EventsAPI
 "vanilla_model": $VanillaModelAPI
 "keybinds": $KeybindAPI
 "host": $HostAPI
 "nameplate": $NameplateAPI
 "renderer": $RendererAPI
 "action_wheel": $ActionWheelAPI
 "avatar_meta": $AvatarAPI
 "ping": $PingAPI
 "texture": $TextureAPI
readonly "owner": $Avatar
readonly "typeManager": $LuaTypeManager

constructor(avatar: $Avatar$Type, scripts: $Map$Type<(string), (string)>)

public "run"(toRun: any, limit: $Avatar$Instructions$Type, ...args: (any)[]): $Varargs
public "load"(name: string, src: string): $LuaValue
public "init"(autoScripts: $ListTag$Type): boolean
public "error"(e: $Throwable$Type): void
public static "parseError"(e: $Throwable$Type): $LuaError
public "registerClass"(clazz: $Class$Type<(any)>): void
public "takeInstructions"(amount: integer): void
public "setInstructionLimit"(limit: integer): void
public "getInstructions"(): integer
public "setGlobal"(name: string, obj: any): void
public "getUser"(): $Entity
public "setUser"(user: $Entity$Type): void
set "instructionLimit"(value: integer)
get "instructions"(): integer
get "user"(): $Entity
set "user"(value: $Entity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraLuaRuntime$Type = ($FiguraLuaRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraLuaRuntime_ = $FiguraLuaRuntime$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/entity/$EntityAPI" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStackAPI, $ItemStackAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$ItemStackAPI"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $EntityAPI<T extends $Entity> {

constructor(entity: T)

public "getName"(): string
public "toString"(): string
public static "wrap"(e: $Entity$Type): $EntityAPI<(any)>
public "isAlive"(): boolean
public "getType"(): string
public "isLoaded"(): boolean
public "getItem"(index: integer): $ItemStackAPI
public "getVelocity"(): $FiguraVec3
public "getVariable"(key: string): $LuaValue
public "getDimensionName"(): string
public "getFrozenTicks"(): integer
public "getEyeHeight"(): float
public "isUnderwater"(): boolean
public "isCrouching"(): boolean
public "getPassengers"(): $List<($EntityAPI<(any)>)>
public "getControllingPassenger"(): $EntityAPI<(any)>
public "getControlledVehicle"(): $EntityAPI<(any)>
public "hasContainer"(): boolean
public "getTargetedBlock"(ignoreLiquids: boolean, distance: double): (any)[]
public "getTargetedEntity"(distance: double): (any)[]
public "getNearestEntity"(type: string, radius: double): $EntityAPI<(any)>
public "getPermissionLevel"(): integer
public "getBoundingBox"(): $FiguraVec3
public "hasInventory"(): boolean
public "isInvisible"(): boolean
public "isSprinting"(): boolean
public "isGlowing"(): boolean
public "getPos"(delta: float): $FiguraVec3
public "isMoving"(ignoreY: boolean): boolean
public "getNbt"(): $LuaTable
public "__eq"(rhs: $EntityAPI$Type<(any)>): boolean
public "__tostring"(): string
public "isPlayer"(): boolean
public "getRot"(delta: float): $FiguraVec2
public "getPose"(): string
public "isSneaking"(): boolean
public "isLiving"(): boolean
public "getUUID"(): string
public "getLookDir"(): $FiguraVec3
public "getMaxAir"(): integer
public "getVehicle"(): $EntityAPI<(any)>
public "isOnGround"(): boolean
public "isWet"(): boolean
public "isInWater"(): boolean
public "isInLava"(): boolean
public "isInRain"(): boolean
public "hasAvatar"(): boolean
public "getEyeY"(): double
public "isSilent"(): boolean
public "isFalling"(): boolean
public "isOnFire"(): boolean
public "getEntity"(): T
get "name"(): string
get "alive"(): boolean
get "type"(): string
get "loaded"(): boolean
get "velocity"(): $FiguraVec3
get "dimensionName"(): string
get "frozenTicks"(): integer
get "eyeHeight"(): float
get "underwater"(): boolean
get "crouching"(): boolean
get "passengers"(): $List<($EntityAPI<(any)>)>
get "controllingPassenger"(): $EntityAPI<(any)>
get "controlledVehicle"(): $EntityAPI<(any)>
get "permissionLevel"(): integer
get "boundingBox"(): $FiguraVec3
get "invisible"(): boolean
get "sprinting"(): boolean
get "glowing"(): boolean
get "nbt"(): $LuaTable
get "player"(): boolean
get "pose"(): string
get "sneaking"(): boolean
get "living"(): boolean
get "uUID"(): string
get "lookDir"(): $FiguraVec3
get "maxAir"(): integer
get "vehicle"(): $EntityAPI<(any)>
get "onGround"(): boolean
get "wet"(): boolean
get "inWater"(): boolean
get "inLava"(): boolean
get "inRain"(): boolean
get "eyeY"(): double
get "silent"(): boolean
get "falling"(): boolean
get "onFire"(): boolean
get "entity"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAPI$Type<T> = ($EntityAPI<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAPI_<T> = $EntityAPI$Type<(T)>;
}}
declare module "packages/org/figuramc/figura/math/matrix/$FiguraMatrix" {
import {$FiguraVector, $FiguraVector$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVector"

export class $FiguraMatrix<T extends $FiguraMatrix<(T), (V)>, V extends $FiguraVector<(V), (T)>> {


public "add"(arg0: T): T
public "equals"(arg0: T): boolean
public "set"(arg0: T): T
public "copy"(): T
public "reset"(): T
public "multiply"(arg0: T): T
public "sub"(arg0: T): T
public "plus"(o: T): T
public "minus"(o: T): T
public "rightMultiply"(arg0: T): T
public "transpose"(): T
public "invert"(): T
public "getColumn"(arg0: integer): V
public "inverted"(): T
public "det"(): double
public "getRow"(arg0: integer): V
public "cols"(): integer
public "transposed"(): T
public "rows"(): integer
public "times"(vec: V): V
public "times"(o: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraMatrix$Type<T, V> = ($FiguraMatrix<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraMatrix_<T, V> = $FiguraMatrix$Type<(T), (V)>;
}}
declare module "packages/org/figuramc/figura/math/vector/$FiguraVector" {
import {$FiguraMatrix, $FiguraMatrix$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMatrix"

export class $FiguraVector<T extends $FiguraVector<(T), (M)>, M extends $FiguraMatrix<(M), (T)>> {

constructor()

public "index"(arg0: integer): double
public "add"(arg0: T): T
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): string
public "scale"(arg0: double): T
public "size"(): integer
public "offset"(arg0: double): T
public "x"(): double
public "transform"(arg0: M): T
public "dot"(arg0: T): double
public "set"(arg0: T): T
public "copy"(): T
public "mod"(other: T): T
public "z"(): double
public "normalize"(): T
public "w"(): double
public "reduce"(arg0: T): T
public "y"(): double
public "multiply"(arg0: T): T
public "normalized"(): T
public "plus"(other: T): T
public "divide"(arg0: T): T
public "minus"(other: T): T
public "dividedBy"(other: T): T
public "subtract"(arg0: T): T
public "lengthSquared"(): double
public "clampLength"(minLength: double, maxLength: double): T
public "unpack"(): (double)[]
public "clamped"(minLength: double, maxLength: double): T
public "offseted"(factor: double): T
public "scaled"(factor: double): T
public "toRad"(): T
public "toDeg"(): T
public "times"(other: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraVector$Type<T, M> = ($FiguraVector<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraVector_<T, M> = $FiguraVector$Type<(T), (M)>;
}}
declare module "packages/org/figuramc/figura/model/rendering/$AvatarRenderer" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$VanillaModelData, $VanillaModelData$Type} from "packages/org/figuramc/figura/model/$VanillaModelData"
import {$PartFilterScheme, $PartFilterScheme$Type} from "packages/org/figuramc/figura/model/rendering/$PartFilterScheme"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$ConcurrentLinkedQueue, $ConcurrentLinkedQueue$Type} from "packages/java/util/concurrent/$ConcurrentLinkedQueue"
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AvatarRenderer {
 "root": $FiguraModelPart
 "entity": $Entity
 "yaw": float
 "tickDelta": float
 "light": integer
 "overlay": integer
 "alpha": float
 "translucent": boolean
 "glowing": boolean
 "posMat": $FiguraMat4
 "normalMat": $FiguraMat3
 "bufferSource": $MultiBufferSource
 "vanillaModelData": $VanillaModelData
 "currentFilterScheme": $PartFilterScheme
readonly "pivotCustomizations": $HashMap<($ParentType), ($ConcurrentLinkedQueue<($Pair<($FiguraMat4), ($FiguraMat3)>)>)>
readonly "textures": $HashMap<(string), ($FiguraTexture)>
readonly "customTextures": $HashMap<(string), ($FiguraTexture)>
 "allowMatrixUpdate": boolean
 "allowHiddenTransforms": boolean
 "interceptRendersIntoFigura": boolean
 "allowPivotParts": boolean
 "updateLight": boolean
 "doIrisEmissiveFix": boolean
 "offsetRenderLayers": boolean
 "ignoreVanillaVisibility": boolean
 "itemToRender": $FiguraModelPart

constructor(avatar: $Avatar$Type)

public static "entityToWorldMatrix"(e: $Entity$Type, delta: float): $FiguraMat4
public static "getYawOffsetRot"(e: $Entity$Type, delta: float): double
public static "worldToViewMatrix"(): $FiguraMat4
public "updateMatrices"(): void
public "setupRenderer"(currentFilterScheme: $PartFilterScheme$Type, bufferSource: $MultiBufferSource$Type, matrices: $PoseStack$Type, tickDelta: float, light: integer, alpha: float, overlay: integer, translucent: boolean, glowing: boolean): void
public "setupRenderer"(currentFilterScheme: $PartFilterScheme$Type, bufferSource: $MultiBufferSource$Type, matrices: $PoseStack$Type, tickDelta: float, light: integer, alpha: float, overlay: integer, translucent: boolean, glowing: boolean, camX: double, camY: double, camZ: double): void
public "renderSpecialParts"(): integer
public "setMatrices"(matrices: $PoseStack$Type): void
public "setMatrices"(camX: double, camY: double, camZ: double, matrices: $PoseStack$Type): void
public "render"(): integer
public "getTexture"(name: string): $FiguraTexture
public "sortParts"(): void
public "invalidate"(): void
set "matrices"(value: $PoseStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AvatarRenderer$Type = ($AvatarRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AvatarRenderer_ = $AvatarRenderer$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {

 "getSwingDuration"(): integer
 "invokeUpdateWalkAnimation"(arg0: float): void
 "isJumping"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet$OverrideType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $FiguraTextureSet$OverrideType extends $Enum<($FiguraTextureSet$OverrideType)> {
static readonly "SKIN": $FiguraTextureSet$OverrideType
static readonly "CAPE": $FiguraTextureSet$OverrideType
static readonly "ELYTRA": $FiguraTextureSet$OverrideType
static readonly "RESOURCE": $FiguraTextureSet$OverrideType
static readonly "PRIMARY": $FiguraTextureSet$OverrideType
static readonly "SECONDARY": $FiguraTextureSet$OverrideType
static readonly "SPECULAR": $FiguraTextureSet$OverrideType
static readonly "NORMAL": $FiguraTextureSet$OverrideType
static readonly "CUSTOM": $FiguraTextureSet$OverrideType
readonly "argumentType": $Type
readonly "typeName": string


public static "values"(): ($FiguraTextureSet$OverrideType)[]
public static "valueOf"(name: string): $FiguraTextureSet$OverrideType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraTextureSet$OverrideType$Type = (("secondary") | ("normal") | ("elytra") | ("resource") | ("specular") | ("custom") | ("skin") | ("cape") | ("primary")) | ($FiguraTextureSet$OverrideType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraTextureSet$OverrideType_ = $FiguraTextureSet$OverrideType$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Interpolation" {
import {$Keyframe, $Keyframe$Type} from "packages/org/figuramc/figura/animation/$Keyframe"
import {$TransformType, $TransformType$Type} from "packages/org/figuramc/figura/animation/$TransformType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $Interpolation extends $Enum<($Interpolation)> {
static readonly "LINEAR": $Interpolation
static readonly "CATMULLROM": $Interpolation
static readonly "BEZIER": $Interpolation
static readonly "STEP": $Interpolation


public static "values"(): ($Interpolation)[]
public static "valueOf"(name: string): $Interpolation
public "generate"(keyframes: ($Keyframe$Type)[], currentFrame: integer, targetFrame: integer, strength: float, delta: float, type: $TransformType$Type): $FiguraVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interpolation$Type = (("catmullrom") | ("linear") | ("step") | ("bezier")) | ($Interpolation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Interpolation_ = $Interpolation$Type;
}}
declare module "packages/org/figuramc/figura/mixin/gui/$ChatComponentAccessor" {
import {$GuiMessage, $GuiMessage$Type} from "packages/net/minecraft/client/$GuiMessage"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ChatComponentAccessor {

 "getAllMessages"(): $List<($GuiMessage)>

(): $List<($GuiMessage)>
}

export namespace $ChatComponentAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatComponentAccessor$Type = ($ChatComponentAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatComponentAccessor_ = $ChatComponentAccessor$Type;
}}
declare module "packages/org/figuramc/figura/entries/$FiguraVanillaPart" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export interface $FiguraVanillaPart {

 "getID"(): string
 "getPartsWithParent"(): $Collection<($Pair<(string), ($Pair<($Function<($EntityModel<(any)>), ($ModelPart)>), ($ParentType)>)>)>
 "getParts"(): $Collection<($Pair<(string), ($Function<($EntityModel<(any)>), ($ModelPart)>)>)>
}

export namespace $FiguraVanillaPart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraVanillaPart$Type = ($FiguraVanillaPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraVanillaPart_ = $FiguraVanillaPart$Type;
}}
declare module "packages/org/figuramc/figura/model/$VanillaModelData$PartData" {
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $VanillaModelData$PartData {
readonly "pos": $FiguraVec3
readonly "rot": $FiguraVec3
readonly "scale": $FiguraVec3
 "visible": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelData$PartData$Type = ($VanillaModelData$PartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelData$PartData_ = $VanillaModelData$PartData$Type;
}}
declare module "packages/org/figuramc/figura/math/matrix/$FiguraMat4" {
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$Matrix4d, $Matrix4d$Type} from "packages/org/joml/$Matrix4d"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$FiguraMatrix, $FiguraMatrix$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMatrix"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $FiguraMat4 extends $FiguraMatrix<($FiguraMat4), ($FiguraVec4)> {
 "v11": double
 "v12": double
 "v13": double
 "v14": double
 "v21": double
 "v22": double
 "v23": double
 "v24": double
 "v31": double
 "v32": double
 "v33": double
 "v34": double
 "v41": double
 "v42": double
 "v43": double
 "v44": double

constructor()

public "add"(o: $FiguraMat4$Type): $FiguraMat4
public "equals"(o: $FiguraMat4$Type): boolean
public "equals"(other: any): boolean
public "toString"(): string
public "scale"(x: double, y: double, z: double): $FiguraMat4
public "scale"(x: any, y: double, z: double): $FiguraMat4
public "scale"(vec: $FiguraVec3$Type): $FiguraMat4
public "apply"(vec: $FiguraVec4$Type): $FiguraVec3
public "apply"(x: any, y: double, z: double): $FiguraVec3
public static "of"(n11: double, n21: double, n31: double, n41: double, n12: double, n22: double, n32: double, n42: double, n13: double, n23: double, n33: double, n43: double, n14: double, n24: double, n34: double, n44: double): $FiguraMat4
public static "of"(): $FiguraMat4
public "set"(n11: double, n21: double, n31: double, n41: double, n12: double, n22: double, n32: double, n42: double, n13: double, n23: double, n33: double, n43: double, n14: double, n24: double, n34: double, n44: double): $FiguraMat4
public "set"(o: $FiguraMat4$Type): $FiguraMat4
public "set"(mat: $Matrix4f$Type): $FiguraMat4
public "set"(mat: $Matrix4d$Type): $FiguraMat4
public "multiply"(o: $FiguraMat4$Type): $FiguraMat4
public "rotate"(x: any, y: double, z: double): $FiguraMat4
public "sub"(o: $FiguraMat4$Type): $FiguraMat4
public "rightMultiply"(o: $FiguraMat4$Type): $FiguraMat4
public "deaugmented"(): $FiguraMat3
public "resetIdentity"(): void
public "translateFirst"(x: double, y: double, z: double): $FiguraMat4
public "translate"(x: any, y: double, z: double): $FiguraMat4
public "translate"(amount: $FiguraVec3$Type): $FiguraMat4
public "translate"(amount: $Vec3$Type): $FiguraMat4
public "translate"(x: double, y: double, z: double): $FiguraMat4
public "transpose"(): $FiguraMat4
public "det"(): double
public "getRow"(row: integer): $FiguraVec4
public "rotateZYX"(vec: $FiguraVec3$Type): void
public "rotateZYX"(x: double, y: double, z: double): void
public "rotateX"(degrees: double): $FiguraMat4
public "rotateY"(degrees: double): $FiguraMat4
public "rotateZ"(degrees: double): $FiguraMat4
public "__add"(mat: $FiguraMat4$Type): $FiguraMat4
public "__sub"(mat: $FiguraMat4$Type): $FiguraMat4
public "__mul"(o: any): any
public "__eq"(o: any): boolean
public "__len"(): integer
public "__tostring"(): string
public "__index"(string: string): any
public "__newindex"(string: string, value: any): void
public "toMatrix4f"(): $Matrix4f
public "cols"(): integer
public "transposed"(): $FiguraMat4
public "applyDir"(x: any, y: double, z: double): $FiguraVec3
public "copyDataTo"(vanillaMatrix: $Matrix4f$Type): void
public "rows"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraMat4$Type = ($FiguraMat4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraMat4_ = $FiguraMat4$Type;
}}
declare module "packages/org/figuramc/figura/math/matrix/$FiguraMat3" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$FiguraMat2, $FiguraMat2$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat2"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$FiguraMatrix, $FiguraMatrix$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMatrix"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $FiguraMat3 extends $FiguraMatrix<($FiguraMat3), ($FiguraVec3)> {
 "v11": double
 "v12": double
 "v13": double
 "v21": double
 "v22": double
 "v23": double
 "v31": double
 "v32": double
 "v33": double

constructor()

public "add"(o: $FiguraMat3$Type): $FiguraMat3
public "equals"(other: any): boolean
public "equals"(o: $FiguraMat3$Type): boolean
public "toString"(): string
public "scale"(vec: $FiguraVec3$Type): $FiguraMat3
public "scale"(x: double, y: double, z: double): $FiguraMat3
public "scale"(x: any, y: double, z: double): $FiguraMat3
public "apply"(x: any, y: double): $FiguraVec2
public "apply"(vec: $FiguraVec3$Type): $FiguraVec2
public static "of"(): $FiguraMat3
public static "of"(n11: double, n21: double, n31: double, n12: double, n22: double, n32: double, n13: double, n23: double, n33: double): $FiguraMat3
public "set"(n11: double, n21: double, n31: double, n12: double, n22: double, n32: double, n13: double, n23: double, n33: double): $FiguraMat3
public "set"(o: $FiguraMat3$Type): $FiguraMat3
public "set"(mat: $Matrix3f$Type): $FiguraMat3
public "reset"(): $FiguraMat3
public "multiply"(o: $FiguraMat3$Type): $FiguraMat3
public "rotate"(x: any, y: double, z: double): $FiguraMat3
public "sub"(o: $FiguraMat3$Type): $FiguraMat3
public "rightMultiply"(o: $FiguraMat3$Type): $FiguraMat3
public "deaugmented"(): $FiguraMat2
public "resetIdentity"(): void
public "translate"(x: any, y: double): $FiguraMat3
public "translate"(amount: $FiguraVec2$Type): $FiguraMat3
public "translate"(x: double, y: double): $FiguraMat3
public "getColumn"(col: integer): $FiguraVec3
public "inverted"(): $FiguraMat3
public "det"(): double
public "getRow"(row: integer): $FiguraVec3
public "rotateZYX"(x: double, y: double, z: double): void
public "rotateZYX"(vec: $FiguraVec3$Type): void
public "rotateX"(degrees: double): $FiguraMat3
public "rotateY"(degrees: double): $FiguraMat3
public "rotateZ"(degrees: double): $FiguraMat3
public "augmented"(): $FiguraMat4
public "__add"(mat: $FiguraMat3$Type): $FiguraMat3
public "__sub"(mat: $FiguraMat3$Type): $FiguraMat3
public "__mul"(o: any): any
public "__eq"(o: any): boolean
public "__len"(): integer
public "__tostring"(): string
public "__index"(string: string): any
public "__newindex"(string: string, value: any): void
public "toMatrix3f"(): $Matrix3f
public "cols"(): integer
public "applyDir"(x: any, y: double, z: double): $FiguraVec2
public "copyDataTo"(vanillaMatrix: $Matrix3f$Type): void
public "rows"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraMat3$Type = ($FiguraMat3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraMat3_ = $FiguraMat3$Type;
}}
declare module "packages/org/figuramc/figura/math/matrix/$FiguraMat2" {
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$FiguraMatrix, $FiguraMatrix$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMatrix"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"

export class $FiguraMat2 extends $FiguraMatrix<($FiguraMat2), ($FiguraVec2)> {
 "v11": double
 "v12": double
 "v21": double
 "v22": double

constructor()

public "add"(o: $FiguraMat2$Type): $FiguraMat2
public "equals"(other: any): boolean
public "equals"(o: $FiguraMat2$Type): boolean
public "toString"(): string
public "scale"(x: double, y: double): $FiguraMat2
public "scale"(x: any, y: double): $FiguraMat2
public "scale"(vec: $FiguraVec2$Type): $FiguraMat2
public "apply"(vec: $FiguraVec2$Type): double
public "apply"(x: double): double
public static "of"(n11: double, n21: double, n12: double, n22: double): $FiguraMat2
public static "of"(): $FiguraMat2
public "set"(n11: double, n21: double, n12: double, n22: double): $FiguraMat2
public "set"(o: $FiguraMat2$Type): $FiguraMat2
public "copy"(): $FiguraMat2
public "reset"(): $FiguraMat2
public "multiply"(o: $FiguraMat2$Type): $FiguraMat2
public "rotate"(degrees: double): $FiguraMat2
public "sub"(o: $FiguraMat2$Type): $FiguraMat2
public "rightMultiply"(o: $FiguraMat2$Type): $FiguraMat2
public "resetIdentity"(): void
public "inverted"(): $FiguraMat2
public "det"(): double
public "augmented"(): $FiguraMat3
public "__add"(mat: $FiguraMat2$Type): $FiguraMat2
public "__sub"(mat: $FiguraMat2$Type): $FiguraMat2
public "__mul"(o: any): any
public "__eq"(o: any): boolean
public "__len"(): integer
public "__tostring"(): string
public "__index"(string: string): any
public "__newindex"(string: string, value: any): void
public "cols"(): integer
public "transposed"(): $FiguraMat2
public "applyDir"(x: double): double
public "rows"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraMat2$Type = ($FiguraMat2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraMat2_ = $FiguraMat2$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/$PartFilterScheme" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$PartFilterScheme$SchemeFunction, $PartFilterScheme$SchemeFunction$Type} from "packages/org/figuramc/figura/model/rendering/$PartFilterScheme$SchemeFunction"
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"

export class $PartFilterScheme extends $Enum<($PartFilterScheme)> {
static readonly "MODEL": $PartFilterScheme
static readonly "HEAD": $PartFilterScheme
static readonly "LEFT_ARM": $PartFilterScheme
static readonly "RIGHT_ARM": $PartFilterScheme
static readonly "CAPE": $PartFilterScheme
static readonly "LEFT_ELYTRA": $PartFilterScheme
static readonly "RIGHT_ELYTRA": $PartFilterScheme
static readonly "WORLD": $PartFilterScheme
static readonly "HUD": $PartFilterScheme
static readonly "SKULL": $PartFilterScheme
static readonly "PORTRAIT": $PartFilterScheme
static readonly "ARROW": $PartFilterScheme
static readonly "TRIDENT": $PartFilterScheme
static readonly "ITEM": $PartFilterScheme
static readonly "PIVOTS": $PartFilterScheme
readonly "initialValue": boolean
readonly "predicate": $PartFilterScheme$SchemeFunction
readonly "parentType": $ParentType


public static "values"(): ($PartFilterScheme)[]
public "test"(toTest: $ParentType$Type, prevResult: boolean): boolean
public static "valueOf"(name: string): $PartFilterScheme
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartFilterScheme$Type = (("item") | ("trident") | ("right_arm") | ("arrow") | ("right_elytra") | ("portrait") | ("pivots") | ("head") | ("world") | ("left_arm") | ("hud") | ("model") | ("skull") | ("left_elytra") | ("cape")) | ($PartFilterScheme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartFilterScheme_ = $PartFilterScheme$Type;
}}
declare module "packages/org/figuramc/figura/font/$EmojiContainer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EmojiUnicodeLookup, $EmojiUnicodeLookup$Type} from "packages/org/figuramc/figura/font/$EmojiUnicodeLookup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $EmojiContainer {
static readonly "JSON_KEY_FRAMES": string
static readonly "JSON_KEY_FRAME_TIME": string
static readonly "JSON_KEY_WIDTH": string
static readonly "JSON_KEY_NAMES": string
static readonly "JSON_KEY_SHORTCUTS": string
readonly "name": string

constructor(containerName: string, data: $JsonObject$Type)

public "getShortcutComponent"(shortcut: string): $Component
public "getEmojiComponent"(key: string, hover: $MutableComponent$Type): $Component
public "getEmojiComponent"(key: string): $Component
public "tickAnimations"(): void
public "blacklist"(text: $Component$Type): $Component
public "getFont"(): $ResourceLocation
public "getLookup"(): $EmojiUnicodeLookup
get "font"(): $ResourceLocation
get "lookup"(): $EmojiUnicodeLookup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmojiContainer$Type = ($EmojiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmojiContainer_ = $EmojiContainer$Type;
}}
declare module "packages/org/figuramc/figura/avatar/$Avatar$Instructions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Avatar$Instructions {
 "max": integer
 "remaining": integer
 "pre": integer
 "post": integer

constructor(remaining: integer)

public "reset"(remaining: integer): void
public "post"(): $Avatar$Instructions
public "getTotal"(): integer
public "use"(amount: integer): void
get "total"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Avatar$Instructions$Type = ($Avatar$Instructions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Avatar$Instructions_ = $Avatar$Instructions$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$ItemTask" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$RenderTask, $RenderTask$Type} from "packages/org/figuramc/figura/model/rendertasks/$RenderTask"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $ItemTask extends $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "toString"(): string
public "item"(item: any): $ItemTask
public "getDisplayMode"(): string
public "getComplexity"(): integer
public "setDisplayMode"(mode: string): $ItemTask
public "shouldRender"(): boolean
public "displayMode"(mode: string): $ItemTask
public "render"(poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "setItem"(item: any): $ItemTask
get "complexity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTask$Type = ($ItemTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTask_ = $ItemTask$Type;
}}
declare module "packages/org/figuramc/figura/font/$EmojiUnicodeLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EmojiMetadata, $EmojiMetadata$Type} from "packages/org/figuramc/figura/font/$EmojiMetadata"

export class $EmojiUnicodeLookup {

constructor()

public "getShortcuts"(unicode: string): (string)[]
public "getShortcuts"(): $Collection<(string)>
public "unicodeValues"(): $Collection<(string)>
public "putMetadata"(codepoint: integer, metadata: $EmojiMetadata$Type): void
public "putShortcuts"(shortcuts: (string)[], unicode: string): void
public "metadataValues"(): $Collection<($EmojiMetadata)>
public "getUnicodeForShortcut"(shortcut: string): string
public "getMetadata"(codepoint: integer): $EmojiMetadata
public "getNames"(unicode: string): (string)[]
public "getNames"(): $Collection<(string)>
public "putAliases"(aliases: (string)[], unicode: string): void
public "getUnicode"(emojiAlias: string): string
get "shortcuts"(): $Collection<(string)>
get "names"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmojiUnicodeLookup$Type = ($EmojiUnicodeLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmojiUnicodeLookup_ = $EmojiUnicodeLookup$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/data/$FiguraOutputStream" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$OutputStream, $OutputStream$Type} from "packages/java/io/$OutputStream"

export class $FiguraOutputStream extends $OutputStream {

constructor(parent: $Avatar$Type, destinationStream: $OutputStream$Type)

public "toString"(): string
public "flush"(): void
public "write"(b: integer): void
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraOutputStream$Type = ($FiguraOutputStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraOutputStream_ = $FiguraOutputStream$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/$PartFilterScheme$SchemeFunction" {
import {$ParentType, $ParentType$Type} from "packages/org/figuramc/figura/model/$ParentType"

export interface $PartFilterScheme$SchemeFunction {

 "test"(arg0: $ParentType$Type, arg1: boolean): boolean

(arg0: $ParentType$Type, arg1: boolean): boolean
}

export namespace $PartFilterScheme$SchemeFunction {
function onlyPivotsAndCancelOnSeparate(): $PartFilterScheme$SchemeFunction
function onlyThisSeparate(typeToAllow: $ParentType$Type): $PartFilterScheme$SchemeFunction
function cancelOnSeparate(): $PartFilterScheme$SchemeFunction
function onlyThis(typeToAllow: $ParentType$Type): $PartFilterScheme$SchemeFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartFilterScheme$SchemeFunction$Type = ($PartFilterScheme$SchemeFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartFilterScheme$SchemeFunction_ = $PartFilterScheme$SchemeFunction$Type;
}}
declare module "packages/org/figuramc/figura/mixin/gui/$ScreenAccessor" {
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $ScreenAccessor {

 "getRenderables"(): $List<($Renderable)>

(): $List<($Renderable)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaModelAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$VanillaModelPart, $VanillaModelPart$Type} from "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaModelPart"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FiguraVanillaPart, $FiguraVanillaPart$Type} from "packages/org/figuramc/figura/entries/$FiguraVanillaPart"
import {$VanillaGroupPart, $VanillaGroupPart$Type} from "packages/org/figuramc/figura/lua/api/vanilla_model/$VanillaGroupPart"

export class $VanillaModelAPI {
readonly "HEAD": $VanillaModelPart
readonly "BODY": $VanillaModelPart
readonly "LEFT_ARM": $VanillaModelPart
readonly "RIGHT_ARM": $VanillaModelPart
readonly "LEFT_LEG": $VanillaModelPart
readonly "RIGHT_LEG": $VanillaModelPart
readonly "HAT": $VanillaModelPart
readonly "JACKET": $VanillaModelPart
readonly "LEFT_SLEEVE": $VanillaModelPart
readonly "RIGHT_SLEEVE": $VanillaModelPart
readonly "LEFT_PANTS": $VanillaModelPart
readonly "RIGHT_PANTS": $VanillaModelPart
readonly "CAPE_MODEL": $VanillaModelPart
readonly "FAKE_CAPE": $VanillaModelPart
readonly "HELMET_ITEM": $VanillaModelPart
readonly "HELMET_HEAD": $VanillaModelPart
readonly "HELMET_HAT": $VanillaModelPart
readonly "CHESTPLATE_BODY": $VanillaModelPart
readonly "CHESTPLATE_LEFT_ARM": $VanillaModelPart
readonly "CHESTPLATE_RIGHT_ARM": $VanillaModelPart
readonly "LEGGINGS_BODY": $VanillaModelPart
readonly "LEGGINGS_LEFT_LEG": $VanillaModelPart
readonly "LEGGINGS_RIGHT_LEG": $VanillaModelPart
readonly "BOOTS_LEFT_LEG": $VanillaModelPart
readonly "BOOTS_RIGHT_LEG": $VanillaModelPart
readonly "LEFT_ELYTRA": $VanillaModelPart
readonly "RIGHT_ELYTRA": $VanillaModelPart
readonly "LEFT_ITEM": $VanillaModelPart
readonly "RIGHT_ITEM": $VanillaModelPart
readonly "LEFT_PARROT": $VanillaModelPart
readonly "RIGHT_PARROT": $VanillaModelPart
readonly "ALL": $VanillaGroupPart
readonly "PLAYER": $VanillaGroupPart
readonly "OUTER_LAYER": $VanillaGroupPart
readonly "INNER_LAYER": $VanillaGroupPart
readonly "CAPE": $VanillaGroupPart
readonly "ARMOR": $VanillaGroupPart
readonly "HELMET": $VanillaGroupPart
readonly "CHESTPLATE": $VanillaGroupPart
readonly "LEGGINGS": $VanillaGroupPart
readonly "BOOTS": $VanillaGroupPart
readonly "ELYTRA": $VanillaGroupPart
readonly "HELD_ITEMS": $VanillaGroupPart
readonly "PARROTS": $VanillaGroupPart

constructor(owner: $Avatar$Type)

public "toString"(): string
public static "initEntryPoints"(set: $Set$Type<($FiguraVanillaPart$Type)>): void
public "__index"(key: string): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaModelAPI$Type = ($VanillaModelAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaModelAPI_ = $VanillaModelAPI$Type;
}}
declare module "packages/org/figuramc/figura/utils/$RefilledNumber" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RefilledNumber {

constructor(max: double, initial: double)
constructor(max: double)
constructor()

public "set"(max: double): void
public "peek"(): integer
public "check"(): boolean
public "tick"(): void
public "use"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefilledNumber$Type = ($RefilledNumber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefilledNumber_ = $RefilledNumber$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/$HostAPI" {
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityAPI, $EntityAPI$Type} from "packages/org/figuramc/figura/lua/api/entity/$EntityAPI"
import {$ItemStackAPI, $ItemStackAPI$Type} from "packages/org/figuramc/figura/lua/api/world/$ItemStackAPI"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $HostAPI {
 "unlockCursor": boolean
 "chatColor": integer

constructor(owner: $Avatar$Type)

public "toString"(): string
public "getSlot"(slot: any): $ItemStackAPI
public "setSubtitle"(text: string): $HostAPI
public "getAttackCharge"(): float
public "getStatusEffects"(): $List<($Map<(string), (any)>)>
public "isCursorUnlocked"(): boolean
public "setUnlockCursor"(bool: boolean): $HostAPI
public "setTitleTimes"(x: any, y: double, z: double): $HostAPI
public "setActionbar"(text: string, animated: boolean): $HostAPI
public "sendChatCommand"(command: string): $HostAPI
public "appendChatHistory"(message: string): $HostAPI
public "getChatMessage"(index: integer): $Map<(string), (any)>
public "setChatMessage"(index: integer, newMessage: string, backgroundColor: $FiguraVec3$Type): $HostAPI
public "getChatColor"(): integer
public "setChatColor"(x: any, y: double, z: double): $HostAPI
public "getChatText"(): string
public "setChatText"(text: string): $HostAPI
public "getScreenSlotCount"(): integer
public "getScreenSlot"(slot: any): $ItemStackAPI
public "isContainerOpen"(): boolean
public "isAvatarUploaded"(): boolean
public "getPickBlock"(): (any)[]
public "getPickEntity"(): $EntityAPI<(any)>
public "isChatVerified"(): boolean
public "getReachDistance"(): double
public "sendChatMessage"(message: string): $HostAPI
public "getClipboard"(): string
public "setClipboard"(text: string): $HostAPI
public "title"(text: string): $HostAPI
public "setSlot"(slot: any, item: any): $HostAPI
public "getScreen"(): string
public "screenshot"(name: string): $FiguraTexture
public "subtitle"(text: string): $HostAPI
public "isJumping"(): boolean
public "chatColor"(x: any, y: double, z: double): $HostAPI
public "__index"(arg: string): any
public "__newindex"(key: string, value: any): void
public "clipboard"(text: string): $HostAPI
public "isFlying"(): boolean
public "isHost"(): boolean
public "getAir"(): integer
public "badge"(index: integer, value: boolean, pride: boolean): $HostAPI
public "titleTimes"(x: any, y: double, z: double): $HostAPI
public "clearTitle"(): $HostAPI
public "actionbar"(text: string, animated: boolean): $HostAPI
public "swingArm"(offhand: boolean): $HostAPI
public "setBadge"(index: integer, value: boolean, pride: boolean): $HostAPI
public "chatText"(text: string): $HostAPI
public "isChatOpen"(): boolean
public "writeToLog"(string: string): void
public "warnToLog"(string: string): void
public "setTitle"(text: string): $HostAPI
get "attackCharge"(): float
get "statusEffects"(): $List<($Map<(string), (any)>)>
get "cursorUnlocked"(): boolean
set "unlockCursor"(value: boolean)
get "screenSlotCount"(): integer
get "containerOpen"(): boolean
get "avatarUploaded"(): boolean
get "pickBlock"(): (any)[]
get "pickEntity"(): $EntityAPI<(any)>
get "chatVerified"(): boolean
get "reachDistance"(): double
get "screen"(): string
get "jumping"(): boolean
get "flying"(): boolean
get "host"(): boolean
get "air"(): integer
get "chatOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostAPI$Type = ($HostAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostAPI_ = $HostAPI$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/event/$EventsAPI" {
import {$LuaEvent, $LuaEvent$Type} from "packages/org/figuramc/figura/lua/api/event/$LuaEvent"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$FiguraEvent, $FiguraEvent$Type} from "packages/org/figuramc/figura/entries/$FiguraEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EventsAPI {
readonly "ENTITY_INIT": $LuaEvent
readonly "TICK": $LuaEvent
readonly "WORLD_TICK": $LuaEvent
readonly "RENDER": $LuaEvent
readonly "POST_RENDER": $LuaEvent
readonly "WORLD_RENDER": $LuaEvent
readonly "POST_WORLD_RENDER": $LuaEvent
readonly "CHAT_SEND_MESSAGE": $LuaEvent
readonly "CHAT_RECEIVE_MESSAGE": $LuaEvent
readonly "SKULL_RENDER": $LuaEvent
readonly "MOUSE_SCROLL": $LuaEvent
readonly "MOUSE_MOVE": $LuaEvent
readonly "MOUSE_PRESS": $LuaEvent
readonly "KEY_PRESS": $LuaEvent
readonly "CHAR_TYPED": $LuaEvent
readonly "USE_ITEM": $LuaEvent
readonly "ARROW_RENDER": $LuaEvent
readonly "TRIDENT_RENDER": $LuaEvent
readonly "ITEM_RENDER": $LuaEvent
readonly "ON_PLAY_SOUND": $LuaEvent
readonly "RESOURCE_RELOAD": $LuaEvent
readonly "TOTEM": $LuaEvent
readonly "DAMAGE": $LuaEvent

constructor()

public "toString"(): string
public static "initEntryPoints"(set: $Set$Type<($FiguraEvent$Type)>): void
public "getEvents"(): $Map<(string), ($LuaEvent)>
public "__index"(key: string): $LuaEvent
public "__newindex"(key: string, func: $LuaFunction$Type): void
get "events"(): $Map<(string), ($LuaEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventsAPI$Type = ($EventsAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventsAPI_ = $EventsAPI$Type;
}}
declare module "packages/org/figuramc/figura/utils/$FiguraClientCommandSource" {
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
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export interface $FiguraClientCommandSource extends $SharedSuggestionProvider {

 "figura$sendFeedback"(arg0: $Component$Type): void
 "figura$sendError"(arg0: $Component$Type): void
 "figura$getClient"(): $Minecraft
 "figura$getPlayer"(): $LocalPlayer
 "figura$getWorld"(): $ClientLevel
 "figura$getEntity"(): $Entity
 "figura$getPosition"(): $Vec3
 "figura$getRotation"(): $Vec2
 "figura$getMeta"(key: string): any
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

export namespace $FiguraClientCommandSource {
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
export type $FiguraClientCommandSource$Type = ($FiguraClientCommandSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraClientCommandSource_ = $FiguraClientCommandSource$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/event/$LuaEvent" {
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaEvent {

constructor()
constructor(piped: boolean)

public "remove"(toRemove: any): integer
public "toString"(): string
public "clear"(): void
public "register"(func: $LuaFunction$Type, name: string): $LuaEvent
public "call"(args: $Varargs$Type): $Varargs
public "getRegisteredCount"(name: string): integer
public "__len"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaEvent$Type = ($LuaEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaEvent_ = $LuaEvent$Type;
}}
declare module "packages/org/figuramc/figura/mixin/gui/$GuiAccessor" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $GuiAccessor {

 "getTime"(): integer
 "getActionbar"(): $Component
 "getSubtitle"(): $Component
 "getActionbarTime"(): integer
 "getTitle"(): $Component
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$Type = ($GuiAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiAccessor_ = $GuiAccessor$Type;
}}
declare module "packages/org/figuramc/figura/mixin/sound/$SoundManagerAccessor" {
import {$SoundEngine, $SoundEngine$Type} from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $SoundManagerAccessor {

 "getSoundEngine"(): $SoundEngine

(): $SoundEngine
}

export namespace $SoundManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManagerAccessor$Type = ($SoundManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundManagerAccessor_ = $SoundManagerAccessor$Type;
}}
declare module "packages/org/figuramc/figura/model/$PartCustomization$PartType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PartCustomization$PartType extends $Enum<($PartCustomization$PartType)> {
static readonly "MESH": $PartCustomization$PartType
static readonly "CUBE": $PartCustomization$PartType
static readonly "GROUP": $PartCustomization$PartType


public static "values"(): ($PartCustomization$PartType)[]
public static "valueOf"(name: string): $PartCustomization$PartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartCustomization$PartType$Type = (("cube") | ("mesh") | ("group")) | ($PartCustomization$PartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartCustomization$PartType_ = $PartCustomization$PartType$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/data/$FiguraBuffer" {
import {$FiguraInputStream, $FiguraInputStream$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraInputStream"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$FiguraOutputStream, $FiguraOutputStream$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraOutputStream"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$FiguraBuffer$FiguraBufferInputStream, $FiguraBuffer$FiguraBufferInputStream$Type} from "packages/org/figuramc/figura/lua/api/data/$FiguraBuffer$FiguraBufferInputStream"

export class $FiguraBuffer implements $AutoCloseable {

constructor(parent: $Avatar$Type)
constructor(parent: $Avatar$Type, cap: integer)

public "toString"(): string
public "getLength"(): integer
public "clear"(): void
public "write"(val: integer): void
public "read"(): integer
public "close"(): void
public "writeInt"(val: integer): void
public "readInt"(): integer
public "available"(): integer
public "writeFloat"(val: float): void
public "readFloat"(): float
public "readLong"(): long
public "readShort"(): integer
public "readString"(length: integer, encoding: string): string
public "writeString"(val: string, encoding: string): integer
public "writeShort"(val: integer): void
public "writeLong"(val: long): void
public "writeDouble"(val: double): void
public "readDouble"(): double
public "asInputStream"(): $FiguraBuffer$FiguraBufferInputStream
public "readUShortLE"(): integer
public "readByteArray"(length: integer): $LuaString
public "writeUShort"(val: integer): void
public "writeUShortLE"(val: integer): void
public "writeBase64"(base64String: string): integer
public "writeByteArray"(val: $LuaValue$Type): integer
public "writeLongLE"(val: long): void
public "writeShortLE"(val: integer): void
public "readShortLE"(): integer
public "readFloatLE"(): float
public "readDoubleLE"(): double
public "writeFloatLE"(val: float): void
public "writeDoubleLE"(val: double): void
public "writeToStream"(stream: $FiguraOutputStream$Type, amount: integer): integer
public "readFromStream"(stream: $FiguraInputStream$Type, amount: integer): integer
public "setPosition"(position: integer): void
public "getMaxCapacity"(): integer
public "readIntLE"(): integer
public "readLongLE"(): long
public "writeIntLE"(val: integer): void
public "baseClose"(): void
public "readBase64"(length: integer): string
public "readUShort"(): integer
public "isClosed"(): boolean
public "getPosition"(): integer
get "length"(): integer
set "position"(value: integer)
get "maxCapacity"(): integer
get "closed"(): boolean
get "position"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraBuffer$Type = ($FiguraBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraBuffer_ = $FiguraBuffer$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/$Vertex" {
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $Vertex {
 "x": float
 "y": float
 "z": float
 "u": float
 "v": float
 "nx": float
 "ny": float
 "nz": float

constructor(x: float, y: float, z: float, u: float, v: float, nx: float, ny: float, nz: float)

public "toString"(): string
public "copy"(): $Vertex
public "pos"(x: any, y: double, z: double): $Vertex
public "normal"(x: any, y: double, z: double): $Vertex
public "uv"(x: any, y: double): $Vertex
public "setPos"(x: any, y: double, z: double): $Vertex
public "getPos"(): $FiguraVec3
public "getNormal"(): $FiguraVec3
public "getUV"(): $FiguraVec2
public "setUV"(x: any, y: double): $Vertex
public "setNormal"(x: any, y: double, z: double): $Vertex
public "setNormal"(vec: $FiguraVec3$Type): void
get "uV"(): $FiguraVec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vertex$Type = ($Vertex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vertex_ = $Vertex$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$ClientLevelInvoker" {
import {$LevelEntityGetter, $LevelEntityGetter$Type} from "packages/net/minecraft/world/level/entity/$LevelEntityGetter"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientLevelInvoker {

 "getEntityGetter"(): $LevelEntityGetter<($Entity)>

(): $LevelEntityGetter<($Entity)>
}

export namespace $ClientLevelInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelInvoker$Type = ($ClientLevelInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelInvoker_ = $ClientLevelInvoker$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/texture/$FiguraTextureSet" {
import {$FiguraTexture, $FiguraTexture$Type} from "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TextureCustomization, $TextureCustomization$Type} from "packages/org/figuramc/figura/model/$TextureCustomization"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $FiguraTextureSet {
readonly "name": string
readonly "textures": ($FiguraTexture)[]

constructor(name: string, mainData: $FiguraTexture$Type, emissiveData: $FiguraTexture$Type, specularData: $FiguraTexture$Type, normalData: $FiguraTexture$Type)

public "clean"(): void
public "uploadIfNeeded"(): void
public "getOverrideTexture"(owner: $UUID$Type, pair: $TextureCustomization$Type): $ResourceLocation
public "getWidth"(): integer
public "getHeight"(): integer
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraTextureSet$Type = ($FiguraTextureSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraTextureSet_ = $FiguraTextureSet$Type;
}}
declare module "packages/org/figuramc/figura/model/rendertasks/$RenderTask" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$PartCustomization$PartCustomizationStack, $PartCustomization$PartCustomizationStack$Type} from "packages/org/figuramc/figura/model/$PartCustomization$PartCustomizationStack"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$FiguraModelPart, $FiguraModelPart$Type} from "packages/org/figuramc/figura/model/$FiguraModelPart"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $RenderTask {

constructor(name: string, owner: $Avatar$Type, parent: $FiguraModelPart$Type)

public "getName"(): string
public "remove"(): $RenderTask
public "toString"(): string
public "scale"(x: any, y: double, z: double): $RenderTask
public "pos"(x: any, y: double, z: double): $RenderTask
public "visible"(visible: boolean): $RenderTask
public "setScale"(x: any, y: double, z: double): $RenderTask
public "getNormalMatrix"(): $FiguraMat3
public "getComplexity"(): integer
public "getPositionMatrix"(): $FiguraMat4
public "getPositionMatrixRaw"(): $FiguraMat4
public "getNormalMatrixRaw"(): $FiguraMat3
public "shouldRender"(): boolean
public "render"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: integer, arg3: integer): void
public "render"(stack: $PartCustomization$PartCustomizationStack$Type, buffer: $MultiBufferSource$Type, light: integer, overlay: integer): void
public "overlay"(whiteOverlay: any, hurtOverlay: double): $RenderTask
public "getOverlay"(): $FiguraVec2
public "setVisible"(visible: boolean): $RenderTask
public "getScale"(): $FiguraVec3
public "light"(blockLight: any, skyLight: double): $RenderTask
public "setPos"(x: any, y: double, z: double): $RenderTask
public "getPos"(): $FiguraVec3
public "setOverlay"(whiteOverlay: any, hurtOverlay: double): $RenderTask
public "rot"(x: any, y: double, z: double): $RenderTask
public "matrix"(mat: $FiguraMat4$Type): $RenderTask
public "getLight"(): $FiguraVec2
public "setRot"(x: any, y: double, z: double): $RenderTask
public "getRot"(): $FiguraVec3
public "setMatrix"(matrix: $FiguraMat4$Type): $RenderTask
public "setLight"(blockLight: any, skyLight: double): $RenderTask
public "isVisible"(): boolean
get "name"(): string
get "normalMatrix"(): $FiguraMat3
get "complexity"(): integer
get "positionMatrix"(): $FiguraMat4
get "positionMatrixRaw"(): $FiguraMat4
get "normalMatrixRaw"(): $FiguraMat3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTask$Type = ($RenderTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTask_ = $RenderTask$Type;
}}
declare module "packages/org/figuramc/figura/model/$PartCustomization$PartCustomizationStack" {
import {$PartCustomization, $PartCustomization$Type} from "packages/org/figuramc/figura/model/$PartCustomization"

export class $PartCustomization$PartCustomizationStack {

constructor()

public "isEmpty"(): boolean
public "peek"(): $PartCustomization
public "push"(customization: $PartCustomization$Type): void
public "pop"(): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartCustomization$PartCustomizationStack$Type = ($PartCustomization$PartCustomizationStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartCustomization$PartCustomizationStack_ = $PartCustomization$PartCustomizationStack$Type;
}}
declare module "packages/org/figuramc/figura/ducks/$SingleQuadParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SingleQuadParticleAccessor {

 "figura$fixQuadSize"(): void

(): void
}

export namespace $SingleQuadParticleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleQuadParticleAccessor$Type = ($SingleQuadParticleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleQuadParticleAccessor_ = $SingleQuadParticleAccessor$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Keyframe" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$Animation, $Animation$Type} from "packages/org/figuramc/figura/animation/$Animation"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Interpolation, $Interpolation$Type} from "packages/org/figuramc/figura/animation/$Interpolation"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $Keyframe implements $Comparable<($Keyframe)> {

constructor(owner: $Avatar$Type, animation: $Animation$Type, time: float, interpolation: $Interpolation$Type, a: $Pair$Type<($FiguraVec3$Type), ((string)[])>, b: $Pair$Type<($FiguraVec3$Type), ((string)[])>, bezierLeft: $FiguraVec3$Type, bezierRight: $FiguraVec3$Type, bezierLeftTime: $FiguraVec3$Type, bezierRightTime: $FiguraVec3$Type)

public "compareTo"(other: $Keyframe$Type): integer
public "getTime"(): float
public "getBezierRightTime"(): $FiguraVec3
public "getBezierLeftTime"(): $FiguraVec3
public "getBezierRight"(): $FiguraVec3
public "getBezierLeft"(): $FiguraVec3
public "getInterpolation"(): $Interpolation
public "getTargetA"(delta: float): $FiguraVec3
public "getTargetB"(delta: float): $FiguraVec3
get "time"(): float
get "bezierRightTime"(): $FiguraVec3
get "bezierLeftTime"(): $FiguraVec3
get "bezierRight"(): $FiguraVec3
get "bezierLeft"(): $FiguraVec3
get "interpolation"(): $Interpolation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type = ($Keyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_ = $Keyframe$Type;
}}
declare module "packages/org/figuramc/figura/lua/api/nameplate/$NameplateCustomization" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $NameplateCustomization {

constructor()

public "toString"(): string
public "getText"(): string
public "setText"(text: string): $NameplateCustomization
public "getJson"(): $Component
get "text"(): string
set "text"(value: string)
get "json"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameplateCustomization$Type = ($NameplateCustomization);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameplateCustomization_ = $NameplateCustomization$Type;
}}
declare module "packages/org/figuramc/figura/mixin/$SkullBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SkullBlockEntityAccessor {

}

export namespace $SkullBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkullBlockEntityAccessor$Type = ($SkullBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkullBlockEntityAccessor_ = $SkullBlockEntityAccessor$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/$EntityRenderMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EntityRenderMode extends $Enum<($EntityRenderMode)> {
static readonly "FIGURA_GUI": $EntityRenderMode
static readonly "PAPERDOLL": $EntityRenderMode
static readonly "MINECRAFT_GUI": $EntityRenderMode
static readonly "FIRST_PERSON": $EntityRenderMode
static readonly "FIRST_PERSON_WORLD": $EntityRenderMode
static readonly "RENDER": $EntityRenderMode
static readonly "WORLD": $EntityRenderMode
static readonly "OTHER": $EntityRenderMode


public static "values"(): ($EntityRenderMode)[]
public static "valueOf"(name: string): $EntityRenderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderMode$Type = (("other") | ("world") | ("minecraft_gui") | ("first_person_world") | ("first_person") | ("paperdoll") | ("render") | ("figura_gui")) | ($EntityRenderMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderMode_ = $EntityRenderMode$Type;
}}
declare module "packages/org/figuramc/figura/model/rendering/texture/$FiguraTexture" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$Avatar, $Avatar$Type} from "packages/org/figuramc/figura/avatar/$Avatar"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$SimpleTexture, $SimpleTexture$Type} from "packages/net/minecraft/client/renderer/texture/$SimpleTexture"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FiguraVec2, $FiguraVec2$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec2"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $FiguraTexture extends $SimpleTexture {
static readonly "NOT_ASSIGNED": integer

constructor(owner: $Avatar$Type, name: string, data: (byte)[])
constructor(owner: $Avatar$Type, name: string, image: $NativeImage$Type)
constructor(owner: $Avatar$Type, name: string, width: integer, height: integer)

public "getName"(): string
public "toString"(): string
public "update"(): $FiguraTexture
public "fill"(x: integer, y: integer, width: integer, height: integer, r: any, g: double, b: double, a: double): $FiguraTexture
public "getLocation"(): $ResourceLocation
public "close"(): void
public "save"(): string
public "copy"(): $NativeImage
public "getPath"(): string
public "getDimensions"(): $FiguraVec2
public "applyMatrix"(x: integer, y: integer, width: integer, height: integer, matrix: $FiguraMat4$Type, clip: boolean): $FiguraTexture
public "uploadIfDirty"(): void
public "writeTexture"(dest: $Path$Type): void
public "load"(manager: $ResourceManager$Type): void
public "applyFunc"(x: integer, y: integer, width: integer, height: integer, arg4: $LuaFunction$Type): $FiguraTexture
public "__index"(arg: string): any
public "getPixel"(x: integer, y: integer): $FiguraVec4
public "setPixel"(x: integer, y: integer, r: any, g: double, b: double, a: double): $FiguraTexture
public "pixel"(x: integer, y: integer, r: any, g: double, b: double, a: double): $FiguraTexture
public "getWidth"(): integer
public "getHeight"(): integer
public "restore"(): $FiguraTexture
get "name"(): string
get "location"(): $ResourceLocation
get "path"(): string
get "dimensions"(): $FiguraVec2
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraTexture$Type = ($FiguraTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraTexture_ = $FiguraTexture$Type;
}}
declare module "packages/org/figuramc/figura/animation/$Animation$AnimationChannel" {
import {$TransformType, $TransformType$Type} from "packages/org/figuramc/figura/animation/$TransformType"
import {$Keyframe, $Keyframe$Type} from "packages/org/figuramc/figura/animation/$Keyframe"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $Animation$AnimationChannel extends $Record {

constructor(type: $TransformType$Type, ...keyframes: ($Keyframe$Type)[])

public "type"(): $TransformType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "keyframes"(): ($Keyframe)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$AnimationChannel$Type = ($Animation$AnimationChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$AnimationChannel_ = $Animation$AnimationChannel$Type;
}}
declare module "packages/org/figuramc/figura/math/vector/$FiguraVec4" {
import {$FiguraMat4, $FiguraMat4$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat4"
import {$FiguraVector, $FiguraVector$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVector"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"

export class $FiguraVec4 extends $FiguraVector<($FiguraVec4), ($FiguraMat4)> {
 "x": double
 "y": double
 "z": double
 "w": double

constructor()

public "index"(i: integer): double
public "add"(other: $FiguraVec4$Type): $FiguraVec4
public "add"(x: any, y: double, z: double, w: double): $FiguraVec4
public "add"(x: double, y: double, z: double, w: double): $FiguraVec4
public "equals"(other: any): boolean
public "length"(): double
public "toString"(): string
public "floor"(): $FiguraVec4
public "ceil"(): $FiguraVec4
public "size"(): integer
public static "of"(): $FiguraVec4
public static "of"(x: double, y: double, z: double, w: double): $FiguraVec4
public "offset"(factor: double): $FiguraVec4
public "x"(): double
public "transform"(mat: $FiguraMat4$Type): $FiguraVec4
public "dot"(other: $FiguraVec4$Type): double
public "set"(x: double, y: double, z: double, w: double): $FiguraVec4
public "set"(other: $FiguraVec4$Type): $FiguraVec4
public "set"(x: any, y: double, z: double, w: double): $FiguraVec4
public "z"(): double
public "normalize"(): $FiguraVec4
public "w"(): double
public "reset"(): $FiguraVec4
public "reduce"(other: $FiguraVec4$Type): $FiguraVec4
public "reduce"(x: any, y: double, z: double, w: double): $FiguraVec4
public "reduce"(x: double, y: double, z: double, w: double): $FiguraVec4
public "y"(): double
public "multiply"(x: double, y: double, z: double, w: double): $FiguraVec4
public "multiply"(other: $FiguraVec4$Type): $FiguraVec4
public "sub"(x: any, y: double, z: double, w: double): $FiguraVec4
public "mul"(x: any, y: double, z: double, w: double): $FiguraVec4
public "divide"(other: $FiguraVec4$Type): $FiguraVec4
public "divide"(x: double, y: double, z: double, w: double): $FiguraVec4
public "subtract"(x: double, y: double, z: double, w: double): $FiguraVec4
public "subtract"(other: $FiguraVec4$Type): $FiguraVec4
public "div"(x: any, y: double, z: double, w: double): $FiguraVec4
public "lengthSquared"(): double
public "unpack"(): (double)[]
public "toDeg"(): $FiguraVec4
public "applyFunc"(arg0: $LuaFunction$Type): $FiguraVec4
public static "__add"(a: any, b: any): $FiguraVec4
public static "__sub"(a: any, b: any): $FiguraVec4
public static "__mul"(a: any, b: any): $FiguraVec4
public "__div"(rhs: any): $FiguraVec4
public "__mod"(rhs: any): $FiguraVec4
public "__eq"(other: $FiguraVec4$Type): boolean
public "__unm"(): $FiguraVec4
public "__len"(): integer
public "__lt"(r: $FiguraVec4$Type): boolean
public "__le"(r: $FiguraVec4$Type): boolean
public "__tostring"(): string
public "__index"(arg: any): any
public "__newindex"(key: string, value: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraVec4$Type = ($FiguraVec4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraVec4_ = $FiguraVec4$Type;
}}
declare module "packages/org/figuramc/figura/math/vector/$FiguraVec2" {
import {$FiguraVector, $FiguraVector$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVector"
import {$FiguraMat2, $FiguraMat2$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat2"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$FiguraVec3, $FiguraVec3$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec3"

export class $FiguraVec2 extends $FiguraVector<($FiguraVec2), ($FiguraMat2)> {
 "x": double
 "y": double

constructor()

public "index"(i: integer): double
public "add"(other: $FiguraVec2$Type): $FiguraVec2
public "add"(x: any, y: double): $FiguraVec2
public "add"(x: double, y: double): $FiguraVec2
public "equals"(other: any): boolean
public "length"(): double
public "toString"(): string
public "floor"(): $FiguraVec2
public "ceil"(): $FiguraVec2
public "size"(): integer
public static "of"(): $FiguraVec2
public static "of"(x: double, y: double): $FiguraVec2
public "offset"(factor: double): $FiguraVec2
public "x"(): double
public "transform"(mat: $FiguraMat2$Type): $FiguraVec2
public "dot"(other: $FiguraVec2$Type): double
public "set"(x: double, y: double): $FiguraVec2
public "set"(other: $FiguraVec2$Type): $FiguraVec2
public "set"(x: any, y: double): $FiguraVec2
public "reset"(): $FiguraVec2
public "reduce"(x: double, y: double): $FiguraVec2
public "reduce"(x: any, y: double): $FiguraVec2
public "reduce"(other: $FiguraVec2$Type): $FiguraVec2
public "y"(): double
public "multiply"(x: double, y: double): $FiguraVec2
public "multiply"(other: $FiguraVec2$Type): $FiguraVec2
public "normalized"(): $FiguraVec2
public "sub"(x: any, y: double): $FiguraVec2
public "mul"(x: any, y: double): $FiguraVec2
public "divide"(x: double, y: double): $FiguraVec2
public "divide"(other: $FiguraVec2$Type): $FiguraVec2
public "subtract"(x: double, y: double): $FiguraVec2
public "subtract"(other: $FiguraVec2$Type): $FiguraVec2
public "div"(x: any, y: double): $FiguraVec2
public "lengthSquared"(): double
public "unpack"(): (double)[]
public "applyFunc"(arg0: $LuaFunction$Type): $FiguraVec2
public "augmented"(d: double): $FiguraVec3
public static "__add"(a: any, b: any): $FiguraVec2
public static "__sub"(a: any, b: any): $FiguraVec2
public static "__mul"(a: any, b: any): $FiguraVec2
public "__div"(rhs: any): $FiguraVec2
public "__mod"(rhs: any): $FiguraVec2
public "__eq"(other: $FiguraVec2$Type): boolean
public "__unm"(): $FiguraVec2
public "__len"(): integer
public "__lt"(r: $FiguraVec2$Type): boolean
public "__le"(r: $FiguraVec2$Type): boolean
public "__tostring"(): string
public "__index"(arg: any): any
public "__newindex"(key: string, value: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraVec2$Type = ($FiguraVec2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraVec2_ = $FiguraVec2$Type;
}}
declare module "packages/org/figuramc/figura/math/vector/$FiguraVec3" {
import {$FiguraMat3, $FiguraMat3$Type} from "packages/org/figuramc/figura/math/matrix/$FiguraMat3"
import {$FiguraVector, $FiguraVector$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVector"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$FiguraVec4, $FiguraVec4$Type} from "packages/org/figuramc/figura/math/vector/$FiguraVec4"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FiguraVec3 extends $FiguraVector<($FiguraVec3), ($FiguraMat3)> {
 "x": double
 "y": double
 "z": double

constructor()

public "index"(i: integer): double
public "add"(other: $FiguraVec3$Type): $FiguraVec3
public "add"(x: any, y: double, z: double): $FiguraVec3
public "add"(x: double, y: double, z: double): $FiguraVec3
public "equals"(other: any): boolean
public "length"(): double
public "toString"(): string
public "floor"(): $FiguraVec3
public "ceil"(): $FiguraVec3
public "size"(): integer
public static "of"(): $FiguraVec3
public static "of"(x: double, y: double, z: double): $FiguraVec3
public "offset"(factor: double): $FiguraVec3
public "x"(): double
public "transform"(mat: $FiguraMat3$Type): $FiguraVec3
public "dot"(other: $FiguraVec3$Type): double
public "set"(other: $FiguraVec3$Type): $FiguraVec3
public "set"(x: double, y: double, z: double): $FiguraVec3
public "set"(x: any, y: double, z: double): $FiguraVec3
public "z"(): double
public "reset"(): $FiguraVec3
public "reduce"(x: double, y: double, z: double): $FiguraVec3
public "reduce"(x: any, y: double, z: double): $FiguraVec3
public "reduce"(other: $FiguraVec3$Type): $FiguraVec3
public "y"(): double
public "multiply"(x: double, y: double, z: double): $FiguraVec3
public "multiply"(other: $FiguraVec3$Type): $FiguraVec3
public "sub"(x: any, y: double, z: double): $FiguraVec3
public "mul"(x: any, y: double, z: double): $FiguraVec3
public "divide"(other: $FiguraVec3$Type): $FiguraVec3
public "divide"(x: double, y: double, z: double): $FiguraVec3
public "subtract"(x: double, y: double, z: double): $FiguraVec3
public "subtract"(other: $FiguraVec3$Type): $FiguraVec3
public "div"(x: any, y: double, z: double): $FiguraVec3
public "lengthSquared"(): double
public "clampLength"(min: double, max: double): $FiguraVec3
public static "fromBlockPos"(pos: $BlockPos$Type): $FiguraVec3
public "unpack"(): (double)[]
public "cross"(other: $FiguraVec3$Type): $FiguraVec3
public "asVec3"(): $Vec3
public static "fromVec3"(vec: $Vec3$Type): $FiguraVec3
public "notNaN"(): boolean
public "toRad"(): $FiguraVec3
public "toDeg"(): $FiguraVec3
public "applyFunc"(arg0: $LuaFunction$Type): $FiguraVec3
public "augmented"(d: double): $FiguraVec4
public "crossed"(other: $FiguraVec3$Type): $FiguraVec3
public "asBlockPos"(): $BlockPos
public "asVec3f"(): $Vector3f
public static "fromVec3f"(vec: $Vector3f$Type): $FiguraVec3
public static "__add"(a: any, b: any): $FiguraVec3
public static "__sub"(a: any, b: any): $FiguraVec3
public static "__mul"(a: any, b: any): $FiguraVec3
public "__div"(rhs: any): $FiguraVec3
public "__mod"(rhs: any): $FiguraVec3
public "__eq"(other: $FiguraVec3$Type): boolean
public "__unm"(): $FiguraVec3
public "__len"(): integer
public "__lt"(r: $FiguraVec3$Type): boolean
public "__le"(r: $FiguraVec3$Type): boolean
public "__tostring"(): string
public "__index"(arg: any): any
public "__newindex"(key: string, value: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FiguraVec3$Type = ($FiguraVec3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FiguraVec3_ = $FiguraVec3$Type;
}}
