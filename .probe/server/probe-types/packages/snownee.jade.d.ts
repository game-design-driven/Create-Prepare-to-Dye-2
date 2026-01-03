declare module "packages/snownee/jade/impl/$Tooltip$Line" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$IElement$Align, $IElement$Align$Type} from "packages/snownee/jade/api/ui/$IElement$Align"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Tooltip$Line {

constructor()

public "getSize"(): $Vec2
public "getAlignedElements"(arg0: $IElement$Align$Type): $List<($IElement)>
public "render"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
get "size"(): $Vec2
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$Line$Type = ($Tooltip$Line);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tooltip$Line_ = $Tooltip$Line$Type;
}}
declare module "packages/snownee/jade/api/$IWailaClientRegistration" {
import {$JadeItemModNameCallback, $JadeItemModNameCallback$Type} from "packages/snownee/jade/api/callback/$JadeItemModNameCallback"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$JadeAfterRenderCallback, $JadeAfterRenderCallback$Type} from "packages/snownee/jade/api/callback/$JadeAfterRenderCallback"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockAccessor$Builder, $BlockAccessor$Builder$Type} from "packages/snownee/jade/api/$BlockAccessor$Builder"
import {$JadeRayTraceCallback, $JadeRayTraceCallback$Type} from "packages/snownee/jade/api/callback/$JadeRayTraceCallback"
import {$JadeTooltipCollectedCallback, $JadeTooltipCollectedCallback$Type} from "packages/snownee/jade/api/callback/$JadeTooltipCollectedCallback"
import {$JadeRenderBackgroundCallback, $JadeRenderBackgroundCallback$Type} from "packages/snownee/jade/api/callback/$JadeRenderBackgroundCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CustomEnchantPower, $CustomEnchantPower$Type} from "packages/snownee/jade/api/platform/$CustomEnchantPower"
import {$ItemView, $ItemView$Type} from "packages/snownee/jade/api/view/$ItemView"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityAccessor$Builder, $EntityAccessor$Builder$Type} from "packages/snownee/jade/api/$EntityAccessor$Builder"
import {$Accessor$ClientHandler, $Accessor$ClientHandler$Type} from "packages/snownee/jade/api/$Accessor$ClientHandler"
import {$JadeBeforeRenderCallback, $JadeBeforeRenderCallback$Type} from "packages/snownee/jade/api/callback/$JadeBeforeRenderCallback"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$PlatformWailaClientRegistration, $PlatformWailaClientRegistration$Type} from "packages/snownee/jade/api/platform/$PlatformWailaClientRegistration"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ProgressView, $ProgressView$Type} from "packages/snownee/jade/api/view/$ProgressView"
import {$IClientExtensionProvider, $IClientExtensionProvider$Type} from "packages/snownee/jade/api/view/$IClientExtensionProvider"
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IBlockComponentProvider, $IBlockComponentProvider$Type} from "packages/snownee/jade/api/$IBlockComponentProvider"
import {$EnergyView, $EnergyView$Type} from "packages/snownee/jade/api/view/$EnergyView"
import {$IEntityComponentProvider, $IEntityComponentProvider$Type} from "packages/snownee/jade/api/$IEntityComponentProvider"
import {$FluidView, $FluidView$Type} from "packages/snownee/jade/api/view/$FluidView"

export interface $IWailaClientRegistration extends $PlatformWailaClientRegistration {

 "addTooltipCollectedCallback"(arg0: $JadeTooltipCollectedCallback$Type): void
 "addTooltipCollectedCallback"(arg0: integer, arg1: $JadeTooltipCollectedCallback$Type): void
 "addRenderBackgroundCallback"(arg0: $JadeRenderBackgroundCallback$Type): void
 "addRenderBackgroundCallback"(arg0: integer, arg1: $JadeRenderBackgroundCallback$Type): void
 "registerEnergyStorageClient"(arg0: $IClientExtensionProvider$Type<($CompoundTag$Type), ($EnergyView$Type)>): void
 "addConfig"(arg0: $ResourceLocation$Type, arg1: boolean): void
 "addConfig"(arg0: $ResourceLocation$Type, arg1: string, arg2: $Predicate$Type<(string)>): void
 "addConfig"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): void
 "addConfig"(arg0: $ResourceLocation$Type, arg1: $Enum$Type<(any)>): void
 "addConfig"(arg0: $ResourceLocation$Type, arg1: float, arg2: float, arg3: float, arg4: boolean): void
 "registerEntityComponent"(arg0: $IEntityComponentProvider$Type, arg1: $Class$Type<(any)>): void
 "registerBlockComponent"(arg0: $IBlockComponentProvider$Type, arg1: $Class$Type<(any)>): void
 "usePickedResult"(arg0: $EntityType$Type<(any)>): void
 "usePickedResult"(arg0: $Block$Type): void
 "blockAccessor"(): $BlockAccessor$Builder
 "registerBlockIcon"(arg0: $IBlockComponentProvider$Type, arg1: $Class$Type<(any)>): void
 "registerEntityIcon"(arg0: $IEntityComponentProvider$Type, arg1: $Class$Type<(any)>): void
 "entityAccessor"(): $EntityAccessor$Builder
 "addConfigListener"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<($ResourceLocation$Type)>): void
 "isServerConnected"(): boolean
 "registerProgressClient"(arg0: $IClientExtensionProvider$Type<($CompoundTag$Type), ($ProgressView$Type)>): void
 "registerFluidStorageClient"(arg0: $IClientExtensionProvider$Type<($CompoundTag$Type), ($FluidView$Type)>): void
 "registerItemStorageClient"(arg0: $IClientExtensionProvider$Type<($ItemStack$Type), ($ItemView$Type)>): void
 "createPluginConfigScreen"(arg0: $Screen$Type, arg1: string): $Screen
 "addRayTraceCallback"(arg0: integer, arg1: $JadeRayTraceCallback$Type): void
 "addRayTraceCallback"(arg0: $JadeRayTraceCallback$Type): void
 "addBeforeRenderCallback"(arg0: $JadeBeforeRenderCallback$Type): void
 "addBeforeRenderCallback"(arg0: integer, arg1: $JadeBeforeRenderCallback$Type): void
 "addAfterRenderCallback"(arg0: $JadeAfterRenderCallback$Type): void
 "addAfterRenderCallback"(arg0: integer, arg1: $JadeAfterRenderCallback$Type): void
 "addItemModNameCallback"(arg0: integer, arg1: $JadeItemModNameCallback$Type): void
 "addItemModNameCallback"(arg0: $JadeItemModNameCallback$Type): void
 "setServerData"(arg0: $CompoundTag$Type): void
 "getBlockCamouflage"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $ItemStack
 "getServerData"(): $CompoundTag
 "maybeLowVisionUser"(): boolean
 "isShowDetailsPressed"(): boolean
 "markAsClientFeature"(arg0: $ResourceLocation$Type): void
 "registerAccessorHandler"<T extends $Accessor<(any)>>(arg0: $Class$Type<(T)>, arg1: $Accessor$ClientHandler$Type<(T)>): void
 "isClientFeature"(arg0: $ResourceLocation$Type): boolean
 "getAccessorHandler"(arg0: $Class$Type<(any)>): $Accessor$ClientHandler<($Accessor<(any)>)>
 "markAsServerFeature"(arg0: $ResourceLocation$Type): void
 "hideTarget"(arg0: $Block$Type): void
 "hideTarget"(arg0: $EntityType$Type<(any)>): void
 "shouldHide"(arg0: $Entity$Type): boolean
 "shouldHide"(arg0: $BlockState$Type): boolean
 "shouldPick"(arg0: $Entity$Type): boolean
 "shouldPick"(arg0: $BlockState$Type): boolean
 "registerCustomEnchantPower"(arg0: $Block$Type, arg1: $CustomEnchantPower$Type): void
}

export namespace $IWailaClientRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWailaClientRegistration$Type = ($IWailaClientRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWailaClientRegistration_ = $IWailaClientRegistration$Type;
}}
declare module "packages/snownee/jade/api/$BlockAccessor$Builder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockAccessor, $BlockAccessor$Type} from "packages/snownee/jade/api/$BlockAccessor"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $BlockAccessor$Builder {

 "from"(arg0: $BlockAccessor$Type): $BlockAccessor$Builder
 "build"(): $BlockAccessor
 "level"(arg0: $Level$Type): $BlockAccessor$Builder
 "hit"(arg0: $BlockHitResult$Type): $BlockAccessor$Builder
 "requireVerification"(): $BlockAccessor$Builder
 "blockEntity"(arg0: $BlockEntity$Type): $BlockAccessor$Builder
 "blockEntity"(arg0: $Supplier$Type<($BlockEntity$Type)>): $BlockAccessor$Builder
 "serverConnected"(arg0: boolean): $BlockAccessor$Builder
 "showDetails"(arg0: boolean): $BlockAccessor$Builder
 "blockState"(arg0: $BlockState$Type): $BlockAccessor$Builder
 "player"(arg0: $Player$Type): $BlockAccessor$Builder
 "serverData"(arg0: $CompoundTag$Type): $BlockAccessor$Builder
 "fakeBlock"(arg0: $ItemStack$Type): $BlockAccessor$Builder
}

export namespace $BlockAccessor$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$Builder$Type = ($BlockAccessor$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor$Builder_ = $BlockAccessor$Builder$Type;
}}
declare module "packages/snownee/jade/api/$Accessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Accessor<T extends $HitResult> {

 "getTarget"(): any
 "getLevel"(): $Level
 "getAccessorType"(): $Class<(any)>
 "isServerConnected"(): boolean
 "getServerData"(): $CompoundTag
 "getPickedResult"(): $ItemStack
 "getHitResult"(): T
 "showDetails"(): boolean
 "getPlayer"(): $Player
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
 "verifyData"(arg0: $CompoundTag$Type): boolean
}

export namespace $Accessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessor$Type<T> = ($Accessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessor_<T> = $Accessor$Type<(T)>;
}}
declare module "packages/snownee/jade/api/theme/$Theme" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Theme {
static readonly "DARK": $Theme
 "id": $ResourceLocation
 "backgroundColor": integer
readonly "borderColor": (integer)[]
 "titleColor": integer
 "normalColor": integer
 "infoColor": integer
 "successColor": integer
 "warningColor": integer
 "dangerColor": integer
 "failureColor": integer
 "boxBorderColor": integer
 "itemAmountColor": integer
 "textShadow": boolean
 "backgroundTexture": $ResourceLocation
 "backgroundTextureUV": (integer)[]
 "backgroundTexture_withIcon": $ResourceLocation
 "backgroundTextureUV_withIcon": (integer)[]
readonly "padding": (integer)[]
 "squareBorder": boolean
 "opacity": float
 "bottomProgressOffset": (integer)[]
 "bottomProgressNormalColor": integer
 "bottomProgressFailureColor": integer
 "lightColorScheme": boolean
 "hidden": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$Type = ($Theme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Theme_ = $Theme$Type;
}}
declare module "packages/snownee/jade/api/callback/$JadeBeforeRenderCallback" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$JadeBeforeRenderCallback$ColorSetting, $JadeBeforeRenderCallback$ColorSetting$Type} from "packages/snownee/jade/api/callback/$JadeBeforeRenderCallback$ColorSetting"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $JadeBeforeRenderCallback {

 "beforeRender"(arg0: $ITooltip$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>, arg4: $JadeBeforeRenderCallback$ColorSetting$Type): boolean

(arg0: $ITooltip$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>, arg4: $JadeBeforeRenderCallback$ColorSetting$Type): boolean
}

export namespace $JadeBeforeRenderCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeBeforeRenderCallback$Type = ($JadeBeforeRenderCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeBeforeRenderCallback_ = $JadeBeforeRenderCallback$Type;
}}
declare module "packages/snownee/jade/api/$IBlockComponentProvider" {
import {$IPluginConfig, $IPluginConfig$Type} from "packages/snownee/jade/api/config/$IPluginConfig"
import {$BlockAccessor, $BlockAccessor$Type} from "packages/snownee/jade/api/$BlockAccessor"
import {$IToggleableProvider, $IToggleableProvider$Type} from "packages/snownee/jade/api/$IToggleableProvider"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $IBlockComponentProvider extends $IToggleableProvider {

 "appendTooltip"(arg0: $ITooltip$Type, arg1: $BlockAccessor$Type, arg2: $IPluginConfig$Type): void
 "getIcon"(arg0: $BlockAccessor$Type, arg1: $IPluginConfig$Type, arg2: $IElement$Type): $IElement
 "isRequired"(): boolean
 "enabledByDefault"(): boolean
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation
}

export namespace $IBlockComponentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockComponentProvider$Type = ($IBlockComponentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockComponentProvider_ = $IBlockComponentProvider$Type;
}}
declare module "packages/snownee/jade/api/view/$IClientExtensionProvider" {
import {$ClientViewGroup, $ClientViewGroup$Type} from "packages/snownee/jade/api/view/$ClientViewGroup"
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$IJadeProvider, $IJadeProvider$Type} from "packages/snownee/jade/api/$IJadeProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ViewGroup, $ViewGroup$Type} from "packages/snownee/jade/api/view/$ViewGroup"

export interface $IClientExtensionProvider<IN, OUT> extends $IJadeProvider {

 "getClientGroups"(arg0: $Accessor$Type<(any)>, arg1: $List$Type<($ViewGroup$Type<(IN)>)>): $List<($ClientViewGroup<(OUT)>)>
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation
}

export namespace $IClientExtensionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientExtensionProvider$Type<IN, OUT> = ($IClientExtensionProvider<(IN), (OUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientExtensionProvider_<IN, OUT> = $IClientExtensionProvider$Type<(IN), (OUT)>;
}}
declare module "packages/snownee/jade/api/view/$EnergyView" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export class $EnergyView {
 "current": string
 "max": string
 "ratio": float
 "overrideText": $Component

constructor()

public static "of"(arg0: long, arg1: long): $CompoundTag
public static "read"(arg0: $CompoundTag$Type, arg1: string): $EnergyView
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyView$Type = ($EnergyView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyView_ = $EnergyView$Type;
}}
declare module "packages/snownee/jade/api/ui/$IElement" {
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$IElement$Align, $IElement$Align$Type} from "packages/snownee/jade/api/ui/$IElement$Align"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IElement {

 "size"(arg0: $Vec2$Type): $IElement
 "getMessage"(): string
 "message"(arg0: string): $IElement
 "getSize"(): $Vec2
 "tag"(arg0: $ResourceLocation$Type): $IElement
 "getTag"(): $ResourceLocation
 "render"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
 "translate"(arg0: $Vec2$Type): $IElement
 "align"(arg0: $IElement$Align$Type): $IElement
 "getAlignment"(): $IElement$Align
 "getTranslation"(): $Vec2
 "getCachedSize"(): $Vec2
 "getCachedMessage"(): string
 "clearCachedMessage"(): $IElement
}

export namespace $IElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElement$Type = ($IElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElement_ = $IElement$Type;
}}
declare module "packages/snownee/jade/api/view/$FluidView" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$JadeFluidObject, $JadeFluidObject$Type} from "packages/snownee/jade/api/fluid/$JadeFluidObject"

export class $FluidView {
static readonly "EMPTY_FLUID": $Component
 "overlay": $IElement
 "current": string
 "max": string
 "ratio": float
 "fluidName": $Component
 "overrideText": $Component

constructor(arg0: $IElement$Type)

public static "readDefault"(arg0: $CompoundTag$Type): $FluidView
public static "writeDefault"(arg0: $JadeFluidObject$Type, arg1: long): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidView$Type = ($FluidView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidView_ = $FluidView$Type;
}}
declare module "packages/snownee/jade/api/ui/$IBoxStyle" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IBoxStyle {

 "tag"(arg0: $ResourceLocation$Type): void
 "render"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
 "borderWidth"(): float
}

export namespace $IBoxStyle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBoxStyle$Type = ($IBoxStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBoxStyle_ = $IBoxStyle$Type;
}}
declare module "packages/snownee/jade/impl/$Tooltip" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IElement$Align, $IElement$Align$Type} from "packages/snownee/jade/api/ui/$IElement$Align"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$Tooltip$Line, $Tooltip$Line$Type} from "packages/snownee/jade/impl/$Tooltip$Line"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IElementHelper, $IElementHelper$Type} from "packages/snownee/jade/api/ui/$IElementHelper"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export class $Tooltip implements $ITooltip {
readonly "lines": $List<($Tooltip$Line)>
 "sneakyDetails": boolean

constructor()

public "add"(arg0: integer, arg1: $IElement$Type): void
public "remove"(arg0: $ResourceLocation$Type): void
public "get"(arg0: $ResourceLocation$Type): $List<($IElement)>
public "get"(arg0: integer, arg1: $IElement$Align$Type): $List<($IElement)>
public "append"(arg0: integer, arg1: $IElement$Type): void
public "clear"(): void
public "size"(): integer
public "getMessage"(): string
public "getElementHelper"(): $IElementHelper
public static "drawBorder"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: $IElement$Type): void
public "add"(arg0: integer, arg1: $Component$Type): void
public "add"(arg0: integer, arg1: $Component$Type, arg2: $ResourceLocation$Type): void
public "add"(arg0: $IElement$Type): void
public "add"(arg0: integer, arg1: $List$Type<($IElement$Type)>): void
public "add"(arg0: $List$Type<($IElement$Type)>): void
public "add"(arg0: $Component$Type): void
public "add"(arg0: $Component$Type, arg1: $ResourceLocation$Type): void
public "append"(arg0: $IElement$Type): void
public "append"(arg0: $Component$Type, arg1: $ResourceLocation$Type): void
public "append"(arg0: integer, arg1: $List$Type<($IElement$Type)>): void
public "append"(arg0: $Component$Type): void
public "isEmpty"(): boolean
public "addAll"(arg0: $List$Type<($Component$Type)>): void
get "message"(): string
get "elementHelper"(): $IElementHelper
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tooltip$Type = ($Tooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tooltip_ = $Tooltip$Type;
}}
declare module "packages/snownee/jade/api/view/$ProgressView" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IProgressStyle, $IProgressStyle$Type} from "packages/snownee/jade/api/ui/$IProgressStyle"

export class $ProgressView {
 "style": $IProgressStyle
 "progress": float
 "text": $Component

constructor(arg0: $IProgressStyle$Type)

public static "read"(arg0: $CompoundTag$Type): $ProgressView
public static "create"(arg0: float): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressView$Type = ($ProgressView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressView_ = $ProgressView$Type;
}}
declare module "packages/snownee/jade/api/view/$ClientViewGroup" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ViewGroup, $ViewGroup$Type} from "packages/snownee/jade/api/view/$ViewGroup"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export class $ClientViewGroup<T> {
readonly "views": $List<(T)>
 "title": $Component
 "bgColor": integer
 "progressColor": integer
 "progress": float
 "extraData": $CompoundTag

constructor(arg0: $List$Type<(T)>)

public static "map"<IN, OUT>(arg0: $List$Type<($ViewGroup$Type<(IN)>)>, arg1: $Function$Type<(IN), (OUT)>, arg2: $BiConsumer$Type<($ViewGroup$Type<(IN)>), ($ClientViewGroup$Type<(OUT)>)>): $List<($ClientViewGroup<(OUT)>)>
public "renderHeader"(arg0: $ITooltip$Type): void
public "shouldRenderGroup"(): boolean
public static "tooltip"<T>(arg0: $ITooltip$Type, arg1: $List$Type<($ClientViewGroup$Type<(T)>)>, arg2: boolean, arg3: $BiConsumer$Type<($ITooltip$Type), ($ClientViewGroup$Type<(T)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientViewGroup$Type<T> = ($ClientViewGroup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientViewGroup_<T> = $ClientViewGroup$Type<(T)>;
}}
declare module "packages/snownee/jade/api/callback/$JadeRenderBackgroundCallback" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$JadeBeforeRenderCallback$ColorSetting, $JadeBeforeRenderCallback$ColorSetting$Type} from "packages/snownee/jade/api/callback/$JadeBeforeRenderCallback$ColorSetting"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ITooltipRenderer, $ITooltipRenderer$Type} from "packages/snownee/jade/api/ui/$ITooltipRenderer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $JadeRenderBackgroundCallback {

 "onRender"(arg0: $ITooltipRenderer$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>, arg4: $JadeBeforeRenderCallback$ColorSetting$Type): boolean

(arg0: $ITooltipRenderer$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>, arg4: $JadeBeforeRenderCallback$ColorSetting$Type): boolean
}

export namespace $JadeRenderBackgroundCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeRenderBackgroundCallback$Type = ($JadeRenderBackgroundCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeRenderBackgroundCallback_ = $JadeRenderBackgroundCallback$Type;
}}
declare module "packages/snownee/jade/api/$IEntityComponentProvider" {
import {$IPluginConfig, $IPluginConfig$Type} from "packages/snownee/jade/api/config/$IPluginConfig"
import {$IToggleableProvider, $IToggleableProvider$Type} from "packages/snownee/jade/api/$IToggleableProvider"
import {$EntityAccessor, $EntityAccessor$Type} from "packages/snownee/jade/api/$EntityAccessor"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $IEntityComponentProvider extends $IToggleableProvider {

 "appendTooltip"(arg0: $ITooltip$Type, arg1: $EntityAccessor$Type, arg2: $IPluginConfig$Type): void
 "getIcon"(arg0: $EntityAccessor$Type, arg1: $IPluginConfig$Type, arg2: $IElement$Type): $IElement
 "isRequired"(): boolean
 "enabledByDefault"(): boolean
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation
}

export namespace $IEntityComponentProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityComponentProvider$Type = ($IEntityComponentProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityComponentProvider_ = $IEntityComponentProvider$Type;
}}
declare module "packages/snownee/jade/api/$BlockAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockAccessor extends $Accessor<($BlockHitResult)> {

 "isFakeBlock"(): boolean
 "getFakeBlock"(): $ItemStack
 "getSide"(): $Direction
 "getAccessorType"(): $Class<(any)>
 "getBlockState"(): $BlockState
 "getBlockEntity"(): $BlockEntity
 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getTarget"(): any
 "getLevel"(): $Level
 "isServerConnected"(): boolean
 "getServerData"(): $CompoundTag
 "getPickedResult"(): $ItemStack
 "getHitResult"(): $BlockHitResult
 "showDetails"(): boolean
 "getPlayer"(): $Player
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
 "verifyData"(arg0: $CompoundTag$Type): boolean
}

export namespace $BlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAccessor$Type = ($BlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAccessor_ = $BlockAccessor$Type;
}}
declare module "packages/snownee/jade/api/$Accessor$ClientHandler" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IJadeProvider, $IJadeProvider$Type} from "packages/snownee/jade/api/$IJadeProvider"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $Accessor$ClientHandler<T extends $Accessor<(any)>> {

 "shouldDisplay"(arg0: T): boolean
 "shouldRequestData"(arg0: T): boolean
 "requestData"(arg0: T): void
 "gatherComponents"(arg0: T, arg1: $Function$Type<($IJadeProvider$Type), ($ITooltip$Type)>): void
 "getIcon"(arg0: T): $IElement
}

export namespace $Accessor$ClientHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessor$ClientHandler$Type<T> = ($Accessor$ClientHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessor$ClientHandler_<T> = $Accessor$ClientHandler$Type<(T)>;
}}
declare module "packages/snownee/jade/api/ui/$IElement$Align" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IElement$Align extends $Enum<($IElement$Align)> {
static readonly "LEFT": $IElement$Align
static readonly "RIGHT": $IElement$Align


public static "values"(): ($IElement$Align)[]
public static "valueOf"(arg0: string): $IElement$Align
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElement$Align$Type = (("left") | ("right")) | ($IElement$Align);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElement$Align_ = $IElement$Align$Type;
}}
declare module "packages/snownee/jade/api/callback/$JadeRayTraceCallback" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"

export interface $JadeRayTraceCallback {

 "onRayTrace"(arg0: $HitResult$Type, arg1: $Accessor$Type<(any)>, arg2: $Accessor$Type<(any)>): $Accessor<(any)>

(arg0: $HitResult$Type, arg1: $Accessor$Type<(any)>, arg2: $Accessor$Type<(any)>): $Accessor<(any)>
}

export namespace $JadeRayTraceCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeRayTraceCallback$Type = ($JadeRayTraceCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeRayTraceCallback_ = $JadeRayTraceCallback$Type;
}}
declare module "packages/snownee/jade/api/platform/$CustomEnchantPower" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CustomEnchantPower {

 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): float

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): float
}

export namespace $CustomEnchantPower {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomEnchantPower$Type = ($CustomEnchantPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomEnchantPower_ = $CustomEnchantPower$Type;
}}
declare module "packages/snownee/jade/api/$IToggleableProvider" {
import {$IJadeProvider, $IJadeProvider$Type} from "packages/snownee/jade/api/$IJadeProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IToggleableProvider extends $IJadeProvider {

 "isRequired"(): boolean
 "enabledByDefault"(): boolean
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation

(): boolean
}

export namespace $IToggleableProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IToggleableProvider$Type = ($IToggleableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IToggleableProvider_ = $IToggleableProvider$Type;
}}
declare module "packages/snownee/jade/api/ui/$ITooltipRenderer" {
import {$Tooltip, $Tooltip$Type} from "packages/snownee/jade/impl/$Tooltip"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $ITooltipRenderer {

 "getSize"(): $Vec2
 "setSize"(arg0: $Vec2$Type): void
 "recalculateSize"(): void
 "getRealRect"(): $Rect2i
 "recalculateRealRect"(): void
 "getRealScale"(): float
 "getTooltip"(): $Tooltip
 "getIcon"(): $IElement
 "setIcon"(arg0: $IElement$Type): void
 "getPadding"(arg0: integer): integer
 "hasIcon"(): boolean
 "getPosition"(): $Rect2i
/**
 * 
 * @deprecated
 */
 "setPadding"(arg0: integer, arg1: float): void
 "setPadding"(arg0: integer, arg1: integer): void
}

export namespace $ITooltipRenderer {
const TOP: integer
const RIGHT: integer
const BOTTOM: integer
const LEFT: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipRenderer$Type = ($ITooltipRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipRenderer_ = $ITooltipRenderer$Type;
}}
declare module "packages/snownee/jade/api/config/$IPluginConfig" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IToggleableProvider, $IToggleableProvider$Type} from "packages/snownee/jade/api/$IToggleableProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPluginConfig {

 "get"(arg0: $ResourceLocation$Type): boolean
 "get"(arg0: $IToggleableProvider$Type): boolean
 "getInt"(arg0: $ResourceLocation$Type): integer
 "getFloat"(arg0: $ResourceLocation$Type): float
 "getKeys"(): $Set<($ResourceLocation)>
 "getKeys"(arg0: string): $Set<($ResourceLocation)>
 "getString"(arg0: $ResourceLocation$Type): string
 "getEnum"<T extends $Enum<(T)>>(arg0: $ResourceLocation$Type): T
}

export namespace $IPluginConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPluginConfig$Type = ($IPluginConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPluginConfig_ = $IPluginConfig$Type;
}}
declare module "packages/snownee/jade/api/$IServerDataProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$IJadeProvider, $IJadeProvider$Type} from "packages/snownee/jade/api/$IJadeProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IServerDataProvider<T extends $Accessor<(any)>> extends $IJadeProvider {

 "appendServerData"(arg0: $CompoundTag$Type, arg1: T): void
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation
}

export namespace $IServerDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerDataProvider$Type<T> = ($IServerDataProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerDataProvider_<T> = $IServerDataProvider$Type<(T)>;
}}
declare module "packages/snownee/jade/api/view/$ItemView" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ViewGroup, $ViewGroup$Type} from "packages/snownee/jade/api/view/$ViewGroup"

export class $ItemView {
 "item": $ItemStack
 "text": string

constructor(arg0: $ItemStack$Type)
constructor(arg0: $ItemStack$Type, arg1: string)

/**
 * 
 * @deprecated
 */
public static "fromContainer"(arg0: $Container$Type, arg1: integer, arg2: integer): $ViewGroup<($ItemStack)>
/**
 * 
 * @deprecated
 */
public static "compacted"(arg0: $Stream$Type<($ItemStack$Type)>, arg1: integer): $ViewGroup<($ItemStack)>
public static "groupOf"(arg0: any, arg1: $Accessor$Type<(any)>): $List<($ViewGroup<($ItemStack)>)>
public static "groupOf"(arg0: $Container$Type, arg1: $Accessor$Type<(any)>): $List<($ViewGroup<($ItemStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemView$Type = ($ItemView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemView_ = $ItemView$Type;
}}
declare module "packages/snownee/jade/api/view/$ViewGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ViewGroup<T> {
readonly "views": $List<(T)>
 "id": string

constructor(arg0: $List$Type<(T)>)

public static "read"<T>(arg0: $CompoundTag$Type, arg1: $Function$Type<($CompoundTag$Type), (T)>): $ViewGroup<(T)>
public "save"(arg0: $CompoundTag$Type, arg1: $Function$Type<(T), ($CompoundTag$Type)>): void
public "setProgress"(arg0: float): void
public "getExtraData"(): $CompoundTag
public static "readList"<T>(arg0: $CompoundTag$Type, arg1: string, arg2: $Function$Type<($CompoundTag$Type), (T)>): $List<($ViewGroup<(T)>)>
public static "saveList"<T>(arg0: $CompoundTag$Type, arg1: string, arg2: $List$Type<($ViewGroup$Type<(T)>)>, arg3: $Function$Type<(T), ($CompoundTag$Type)>): boolean
set "progress"(value: float)
get "extraData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewGroup$Type<T> = ($ViewGroup<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewGroup_<T> = $ViewGroup$Type<(T)>;
}}
declare module "packages/snownee/jade/api/view/$IServerExtensionProvider" {
import {$IJadeProvider, $IJadeProvider$Type} from "packages/snownee/jade/api/$IJadeProvider"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ViewGroup, $ViewGroup$Type} from "packages/snownee/jade/api/view/$ViewGroup"

export interface $IServerExtensionProvider<IN, OUT> extends $IJadeProvider {

 "getGroups"(arg0: $ServerPlayer$Type, arg1: $ServerLevel$Type, arg2: IN, arg3: boolean): $List<($ViewGroup<(OUT)>)>
 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation
}

export namespace $IServerExtensionProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerExtensionProvider$Type<IN, OUT> = ($IServerExtensionProvider<(IN), (OUT)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerExtensionProvider_<IN, OUT> = $IServerExtensionProvider$Type<(IN), (OUT)>;
}}
declare module "packages/snownee/jade/api/callback/$JadeBeforeRenderCallback$ColorSetting" {
import {$Theme, $Theme$Type} from "packages/snownee/jade/api/theme/$Theme"
import {$MutableObject, $MutableObject$Type} from "packages/org/apache/commons/lang3/mutable/$MutableObject"

export class $JadeBeforeRenderCallback$ColorSetting {
 "alpha": float
 "theme": $MutableObject<($Theme)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeBeforeRenderCallback$ColorSetting$Type = ($JadeBeforeRenderCallback$ColorSetting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeBeforeRenderCallback$ColorSetting_ = $JadeBeforeRenderCallback$ColorSetting$Type;
}}
declare module "packages/snownee/jade/addon/mixin/create/$FilterItemAccess" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $FilterItemAccess {

 "callMakeSummary"(arg0: $ItemStack$Type): $List<($Component)>

(arg0: $ItemStack$Type): $List<($Component)>
}

export namespace $FilterItemAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemAccess$Type = ($FilterItemAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemAccess_ = $FilterItemAccess$Type;
}}
declare module "packages/snownee/jade/api/callback/$JadeTooltipCollectedCallback" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $JadeTooltipCollectedCallback {

 "onTooltipCollected"(arg0: $ITooltip$Type, arg1: $Accessor$Type<(any)>): void

(arg0: $ITooltip$Type, arg1: $Accessor$Type<(any)>): void
}

export namespace $JadeTooltipCollectedCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeTooltipCollectedCallback$Type = ($JadeTooltipCollectedCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeTooltipCollectedCallback_ = $JadeTooltipCollectedCallback$Type;
}}
declare module "packages/snownee/jade/api/$ITooltip" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IElement$Align, $IElement$Align$Type} from "packages/snownee/jade/api/ui/$IElement$Align"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IElementHelper, $IElementHelper$Type} from "packages/snownee/jade/api/ui/$IElementHelper"

export interface $ITooltip {

 "add"(arg0: integer, arg1: $Component$Type): void
 "add"(arg0: integer, arg1: $Component$Type, arg2: $ResourceLocation$Type): void
 "add"(arg0: $IElement$Type): void
 "add"(arg0: integer, arg1: $List$Type<($IElement$Type)>): void
 "add"(arg0: $List$Type<($IElement$Type)>): void
 "add"(arg0: integer, arg1: $IElement$Type): void
 "add"(arg0: $Component$Type): void
 "add"(arg0: $Component$Type, arg1: $ResourceLocation$Type): void
 "remove"(arg0: $ResourceLocation$Type): void
 "get"(arg0: integer, arg1: $IElement$Align$Type): $List<($IElement)>
 "get"(arg0: $ResourceLocation$Type): $List<($IElement)>
 "append"(arg0: $IElement$Type): void
 "append"(arg0: $Component$Type, arg1: $ResourceLocation$Type): void
 "append"(arg0: integer, arg1: $List$Type<($IElement$Type)>): void
 "append"(arg0: $Component$Type): void
 "append"(arg0: integer, arg1: $IElement$Type): void
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "addAll"(arg0: $List$Type<($Component$Type)>): void
 "getMessage"(): string
 "getElementHelper"(): $IElementHelper
}

export namespace $ITooltip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltip$Type = ($ITooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltip_ = $ITooltip$Type;
}}
declare module "packages/snownee/jade/api/callback/$JadeItemModNameCallback" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $JadeItemModNameCallback {

 "gatherItemModName"(arg0: $ItemStack$Type): string

(arg0: $ItemStack$Type): string
}

export namespace $JadeItemModNameCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeItemModNameCallback$Type = ($JadeItemModNameCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeItemModNameCallback_ = $JadeItemModNameCallback$Type;
}}
declare module "packages/snownee/jade/api/ui/$IElementHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IProgressStyle, $IProgressStyle$Type} from "packages/snownee/jade/api/ui/$IProgressStyle"
import {$IBoxElement, $IBoxElement$Type} from "packages/snownee/jade/api/ui/$IBoxElement"
import {$IBoxStyle, $IBoxStyle$Type} from "packages/snownee/jade/api/ui/$IBoxStyle"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$JadeFluidObject, $JadeFluidObject$Type} from "packages/snownee/jade/api/fluid/$JadeFluidObject"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $IElementHelper {

 "box"(arg0: $ITooltip$Type, arg1: $IBoxStyle$Type): $IBoxElement
 "text"(arg0: $Component$Type): $IElement
 "item"(arg0: $ItemStack$Type, arg1: float, arg2: string): $IElement
 "item"(arg0: $ItemStack$Type, arg1: float): $IElement
 "item"(arg0: $ItemStack$Type): $IElement
 "progressStyle"(): $IProgressStyle
 "tooltip"(): $ITooltip
 "fluid"(arg0: $JadeFluidObject$Type): $IElement
 "spacer"(arg0: integer, arg1: integer): $IElement
 "smallItem"(arg0: $ItemStack$Type): $IElement
 "progress"(arg0: float, arg1: $Component$Type, arg2: $IProgressStyle$Type, arg3: $IBoxStyle$Type, arg4: boolean): $IElement
}

export namespace $IElementHelper {
function get(): $IElementHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementHelper$Type = ($IElementHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementHelper_ = $IElementHelper$Type;
}}
declare module "packages/snownee/jade/api/callback/$JadeAfterRenderCallback" {
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$ITooltip, $ITooltip$Type} from "packages/snownee/jade/api/$ITooltip"

export interface $JadeAfterRenderCallback {

 "afterRender"(arg0: $ITooltip$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>): void

(arg0: $ITooltip$Type, arg1: $Rect2i$Type, arg2: $GuiGraphics$Type, arg3: $Accessor$Type<(any)>): void
}

export namespace $JadeAfterRenderCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeAfterRenderCallback$Type = ($JadeAfterRenderCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeAfterRenderCallback_ = $JadeAfterRenderCallback$Type;
}}
declare module "packages/snownee/jade/api/fluid/$JadeFluidObject" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $JadeFluidObject {


public "isEmpty"(): boolean
public static "of"(arg0: $Fluid$Type, arg1: long): $JadeFluidObject
public static "of"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): $JadeFluidObject
public static "of"(arg0: $Fluid$Type): $JadeFluidObject
public static "empty"(): $JadeFluidObject
public "getType"(): $Fluid
public "getTag"(): $CompoundTag
public static "bucketVolume"(): long
public "getAmount"(): long
public static "blockVolume"(): long
get "type"(): $Fluid
get "tag"(): $CompoundTag
get "amount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeFluidObject$Type = ($JadeFluidObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeFluidObject_ = $JadeFluidObject$Type;
}}
declare module "packages/snownee/jade/api/$IWailaCommonRegistration" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockAccessor, $BlockAccessor$Type} from "packages/snownee/jade/api/$BlockAccessor"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IServerExtensionProvider, $IServerExtensionProvider$Type} from "packages/snownee/jade/api/view/$IServerExtensionProvider"
import {$EntityAccessor, $EntityAccessor$Type} from "packages/snownee/jade/api/$EntityAccessor"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IServerDataProvider, $IServerDataProvider$Type} from "packages/snownee/jade/api/$IServerDataProvider"

export interface $IWailaCommonRegistration {

 "registerProgress"<T>(arg0: $IServerExtensionProvider$Type<(T), ($CompoundTag$Type)>, arg1: $Class$Type<(any)>): void
 "registerEnergyStorage"<T>(arg0: $IServerExtensionProvider$Type<(T), ($CompoundTag$Type)>, arg1: $Class$Type<(any)>): void
 "registerEntityDataProvider"(arg0: $IServerDataProvider$Type<($EntityAccessor$Type)>, arg1: $Class$Type<(any)>): void
 "registerItemStorage"<T>(arg0: $IServerExtensionProvider$Type<(T), ($ItemStack$Type)>, arg1: $Class$Type<(any)>): void
 "registerFluidStorage"<T>(arg0: $IServerExtensionProvider$Type<(T), ($CompoundTag$Type)>, arg1: $Class$Type<(any)>): void
 "registerBlockDataProvider"(arg0: $IServerDataProvider$Type<($BlockAccessor$Type)>, arg1: $Class$Type<(any)>): void
}

export namespace $IWailaCommonRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWailaCommonRegistration$Type = ($IWailaCommonRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWailaCommonRegistration_ = $IWailaCommonRegistration$Type;
}}
declare module "packages/snownee/jade/api/$EntityAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Accessor, $Accessor$Type} from "packages/snownee/jade/api/$Accessor"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityAccessor extends $Accessor<($EntityHitResult)> {

 "getRawEntity"(): $Entity
 "getAccessorType"(): $Class<(any)>
 "getEntity"(): $Entity
 "getTarget"(): any
 "getLevel"(): $Level
 "isServerConnected"(): boolean
 "getServerData"(): $CompoundTag
 "getPickedResult"(): $ItemStack
 "getHitResult"(): $EntityHitResult
 "showDetails"(): boolean
 "getPlayer"(): $Player
 "toNetwork"(arg0: $FriendlyByteBuf$Type): void
 "verifyData"(arg0: $CompoundTag$Type): boolean
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
declare module "packages/snownee/jade/api/$EntityAccessor$Builder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EntityAccessor, $EntityAccessor$Type} from "packages/snownee/jade/api/$EntityAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityAccessor$Builder {

 "from"(arg0: $EntityAccessor$Type): $EntityAccessor$Builder
 "build"(): $EntityAccessor
 "level"(arg0: $Level$Type): $EntityAccessor$Builder
 "hit"(arg0: $Supplier$Type<($EntityHitResult$Type)>): $EntityAccessor$Builder
 "hit"(arg0: $EntityHitResult$Type): $EntityAccessor$Builder
 "requireVerification"(): $EntityAccessor$Builder
 "serverConnected"(arg0: boolean): $EntityAccessor$Builder
 "showDetails"(arg0: boolean): $EntityAccessor$Builder
 "player"(arg0: $Player$Type): $EntityAccessor$Builder
 "serverData"(arg0: $CompoundTag$Type): $EntityAccessor$Builder
 "entity"(arg0: $Supplier$Type<($Entity$Type)>): $EntityAccessor$Builder
 "entity"(arg0: $Entity$Type): $EntityAccessor$Builder
}

export namespace $EntityAccessor$Builder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Builder$Type = ($EntityAccessor$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor$Builder_ = $EntityAccessor$Builder$Type;
}}
declare module "packages/snownee/jade/api/$IJadeProvider" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJadeProvider {

 "getDefaultPriority"(): integer
 "getUid"(): $ResourceLocation

(): integer
}

export namespace $IJadeProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJadeProvider$Type = ($IJadeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJadeProvider_ = $IJadeProvider$Type;
}}
declare module "packages/snownee/jade/addon/mixin/create/$BacktankBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BacktankBlockEntityAccess {

 "getCapacityEnchantLevel"(): integer

(): integer
}

export namespace $BacktankBlockEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BacktankBlockEntityAccess$Type = ($BacktankBlockEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BacktankBlockEntityAccess_ = $BacktankBlockEntityAccess$Type;
}}
declare module "packages/snownee/jade/api/ui/$IBoxElement" {
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$IElement$Align, $IElement$Align$Type} from "packages/snownee/jade/api/ui/$IElement$Align"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ITooltipRenderer, $ITooltipRenderer$Type} from "packages/snownee/jade/api/ui/$ITooltipRenderer"

export interface $IBoxElement extends $IElement {

 "getTooltipRenderer"(): $ITooltipRenderer
 "size"(arg0: $Vec2$Type): $IElement
 "getMessage"(): string
 "message"(arg0: string): $IElement
 "getSize"(): $Vec2
 "tag"(arg0: $ResourceLocation$Type): $IElement
 "getTag"(): $ResourceLocation
 "render"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: float, arg4: float): void
 "translate"(arg0: $Vec2$Type): $IElement
 "align"(arg0: $IElement$Align$Type): $IElement
 "getAlignment"(): $IElement$Align
 "getTranslation"(): $Vec2
 "getCachedSize"(): $Vec2
 "getCachedMessage"(): string
 "clearCachedMessage"(): $IElement
}

export namespace $IBoxElement {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBoxElement$Type = ($IBoxElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBoxElement_ = $IBoxElement$Type;
}}
declare module "packages/snownee/jade/api/ui/$IProgressStyle" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IElement, $IElement$Type} from "packages/snownee/jade/api/ui/$IElement"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IProgressStyle {

 "color"(arg0: integer): $IProgressStyle
 "color"(arg0: integer, arg1: integer): $IProgressStyle
 "render"(arg0: $GuiGraphics$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Component$Type): void
 "overlay"(arg0: $IElement$Type): $IProgressStyle
 "textColor"(arg0: integer): $IProgressStyle
 "vertical"(arg0: boolean): $IProgressStyle
}

export namespace $IProgressStyle {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgressStyle$Type = ($IProgressStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProgressStyle_ = $IProgressStyle$Type;
}}
declare module "packages/snownee/jade/api/platform/$PlatformWailaClientRegistration" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CustomEnchantPower, $CustomEnchantPower$Type} from "packages/snownee/jade/api/platform/$CustomEnchantPower"

export interface $PlatformWailaClientRegistration {

 "registerCustomEnchantPower"(arg0: $Block$Type, arg1: $CustomEnchantPower$Type): void

(arg0: $Block$Type, arg1: $CustomEnchantPower$Type): void
}

export namespace $PlatformWailaClientRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlatformWailaClientRegistration$Type = ($PlatformWailaClientRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlatformWailaClientRegistration_ = $PlatformWailaClientRegistration$Type;
}}
