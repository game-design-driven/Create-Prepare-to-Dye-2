declare module "packages/dev/emi/emi/mixin/accessor/$ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccessor {

}

export namespace $ShovelItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccessor$Type = ($ShovelItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccessor_ = $ShovelItemAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$SmithingTransformRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $SmithingTransformRecipeAccessor {

 "getBase"(): $Ingredient
 "getAddition"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $SmithingTransformRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTransformRecipeAccessor$Type = ($SmithingTransformRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTransformRecipeAccessor_ = $SmithingTransformRecipeAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$ItemRendererAccessor" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ItemRendererAccessor {

 "invokeRenderBakedItemModel"(arg0: $BakedModel$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer, arg4: $PoseStack$Type, arg5: $VertexConsumer$Type): void

(arg0: $BakedModel$Type, arg1: $ItemStack$Type, arg2: integer, arg3: integer, arg4: $PoseStack$Type, arg5: $VertexConsumer$Type): void
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$Type = ($ItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$HoeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccessor {

}

export namespace $HoeItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeItemAccessor$Type = ($HoeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoeItemAccessor_ = $HoeItemAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$DrawContextAccessor" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ClientTooltipComponent, $ClientTooltipComponent$Type} from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipComponent"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$Type} from "packages/net/minecraft/client/gui/screens/inventory/tooltip/$ClientTooltipPositioner"

export interface $DrawContextAccessor {

 "invokeDrawTooltip"(arg0: $Font$Type, arg1: $List$Type<($ClientTooltipComponent$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$Type): void

(arg0: $Font$Type, arg1: $List$Type<($ClientTooltipComponent$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$Type): void
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextAccessor$Type = ($DrawContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextAccessor_ = $DrawContextAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccessor {

}

export namespace $AxeItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccessor$Type = ($AxeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccessor_ = $AxeItemAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$BakedModelManagerAccessor" {
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BakedModelManagerAccessor {

 "getModels"(): $Map<($ResourceLocation), ($BakedModel)>

(): $Map<($ResourceLocation), ($BakedModel)>
}

export namespace $BakedModelManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelManagerAccessor$Type = ($BakedModelManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelManagerAccessor_ = $BakedModelManagerAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$SmithingTrimRecipeAccessor" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $SmithingTrimRecipeAccessor {

 "getBase"(): $Ingredient
 "getAddition"(): $Ingredient
 "getTemplate"(): $Ingredient
}

export namespace $SmithingTrimRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingTrimRecipeAccessor$Type = ($SmithingTrimRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingTrimRecipeAccessor_ = $SmithingTrimRecipeAccessor$Type;
}}
declare module "packages/dev/emi/emi/mixin/accessor/$HandledScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"

export interface $HandledScreenAccessor {

 "invokeGetSlotAt"(arg0: double, arg1: double): $Slot
 "getBackgroundWidth"(): integer
 "getFocusedSlot"(): $Slot
 "getBackgroundHeight"(): integer
 "getX"(): integer
 "getY"(): integer
}

export namespace $HandledScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$Type = ($HandledScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandledScreenAccessor_ = $HandledScreenAccessor$Type;
}}
