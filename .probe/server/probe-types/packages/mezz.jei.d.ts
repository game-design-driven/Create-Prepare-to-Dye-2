declare module "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$IRecipeSlotRichTooltipCallback, $IRecipeSlotRichTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<($IRecipeSlotBuilder)>, $IPlaceable<($IRecipeSlotBuilder)> {

/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): $IRecipeSlotBuilder
 "setOutputSlotBackground"(): $IRecipeSlotBuilder
 "setStandardSlotBackground"(): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $IIngredientRenderer$Type<(T)>): $IRecipeSlotBuilder
 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
 "addRichTooltipCallback"(arg0: $IRecipeSlotRichTooltipCallback$Type): $IRecipeSlotBuilder
 "setOverlay"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type): $IRecipeSlotBuilder
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IRecipeSlotBuilder
 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
 "setPosition"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): $IRecipeSlotBuilder
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$Type = ($IRecipeSlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotBuilder_ = $IRecipeSlotBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeWidget" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeWidget {

 "tick"(): void
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getPosition"(): $ScreenPosition

(): void
}

export namespace $IRecipeWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeWidget$Type = ($IRecipeWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeWidget_ = $IRecipeWidget$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IRecipeRegistration {

 "addItemStackInfo"(arg0: $List$Type<($ItemStack$Type)>, ...arg1: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $ItemStack$Type, ...arg1: ($Component$Type)[]): void
 "addIngredientInfo"<T>(arg0: $List$Type<(T)>, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"<T>(arg0: T, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"(arg0: $ItemLike$Type, ...arg1: ($Component$Type)[]): void
 "getJeiHelpers"(): $IJeiHelpers
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "getIngredientManager"(): $IIngredientManager
/**
 * 
 * @deprecated
 */
 "getIngredientVisibility"(): $IIngredientVisibility
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
}

export namespace $IRecipeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeRegistration$Type = ($IRecipeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeRegistration_ = $IRecipeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeSlotView {

 "isEmpty"(): boolean
 "getSlotName"(): $Optional<(string)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getRole"(): $RecipeIngredientRole
}

export namespace $IRecipeSlotView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotView$Type = ($IRecipeSlotView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotView_ = $IRecipeSlotView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeManager" {
import {$IRecipeCatalystLookup, $IRecipeCatalystLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeLookup, $IRecipeLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeLookup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeLayoutDrawable, $IRecipeLayoutDrawable$Type} from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeCategoriesLookup, $IRecipeCategoriesLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IScalableDrawable, $IScalableDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeManager {

 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "getRecipeType"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>): $Optional<($RecipeType<(T)>)>
 "hideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "hideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "createRecipeCategoryLookup"(): $IRecipeCategoriesLookup
 "createRecipeCatalystLookup"(arg0: $RecipeType$Type<(any)>): $IRecipeCatalystLookup
 "createRecipeLookup"<R>(arg0: $RecipeType$Type<(R)>): $IRecipeLookup<(R)>
 "getRecipeCategory"<T>(arg0: $RecipeType$Type<(T)>): $IRecipeCategory<(T)>
 "unhideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "unhideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type, arg3: $IScalableDrawable$Type, arg4: integer): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer): $IRecipeSlotDrawable
/**
 * 
 * @deprecated
 */
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer, arg4: integer, arg5: integer): $IRecipeSlotDrawable
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
}

export namespace $IRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManager$Type = ($IRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManager_ = $IRecipeManager$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeCategoryRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"

export interface $IRecipeCategoryRegistration {

 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeCategories"(...arg0: ($IRecipeCategory$Type<(any)>)[]): void
}

export namespace $IRecipeCategoryRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryRegistration$Type = ($IRecipeCategoryRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryRegistration_ = $IRecipeCategoryRegistration$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IRecipesGui" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipesGui {

 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "showRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: $List$Type<(T)>, arg2: $List$Type<($IFocus$Type<(any)>)>): void
 "showTypes"(arg0: $List$Type<($RecipeType$Type<(any)>)>): void
 "show"(arg0: $List$Type<($IFocus$Type<(any)>)>): void
 "show"<V>(arg0: $IFocus$Type<(V)>): void
}

export namespace $IRecipesGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipesGui$Type = ($IRecipesGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipesGui_ = $IRecipesGui$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IJeiHelpers" {
import {$IModIdHelper, $IModIdHelper$Type} from "packages/mezz/jei/api/helpers/$IModIdHelper"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"
import {$IGuiHelper, $IGuiHelper$Type} from "packages/mezz/jei/api/helpers/$IGuiHelper"
import {$IPlatformFluidHelper, $IPlatformFluidHelper$Type} from "packages/mezz/jei/api/helpers/$IPlatformFluidHelper"
import {$IStackHelper, $IStackHelper$Type} from "packages/mezz/jei/api/helpers/$IStackHelper"

export interface $IJeiHelpers {

 "getRecipeType"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>): $Optional<($RecipeType<(T)>)>
/**
 * 
 * @deprecated
 */
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "getModIdHelper"(): $IModIdHelper
 "getFocusFactory"(): $IFocusFactory
 "getGuiHelper"(): $IGuiHelper
 "getPlatformFluidHelper"(): $IPlatformFluidHelper<(any)>
 "getColorHelper"(): $IColorHelper
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "getStackHelper"(): $IStackHelper
 "getAllRecipeTypes"(): $Stream<($RecipeType<(any)>)>
 "getIngredientManager"(): $IIngredientManager
 "getIngredientVisibility"(): $IIngredientVisibility
}

export namespace $IJeiHelpers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiHelpers$Type = ($IJeiHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiHelpers_ = $IJeiHelpers$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IColorHelper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IColorHelper {

 "getClosestColorName"(arg0: integer): string
 "getColors"(arg0: $ItemStack$Type, arg1: integer): $List<(integer)>
 "getColors"(arg0: $TextureAtlasSprite$Type, arg1: integer, arg2: integer): $List<(integer)>
}

export namespace $IColorHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorHelper$Type = ($IColorHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorHelper_ = $IColorHelper$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IStackHelper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IStackHelper {

 "isEquivalent"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $UidContext$Type): boolean
 "getUniqueIdentifierForStack"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
}

export namespace $IStackHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHelper$Type = ($IStackHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHelper_ = $IStackHelper$Type;
}}
declare module "packages/mezz/jei/api/registration/$IAdvancedRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeManagerPluginHelper, $IRecipeManagerPluginHelper$Type} from "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPluginHelper"
import {$IRecipeCategoryDecorator, $IRecipeCategoryDecorator$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryDecorator"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IJeiFeatures, $IJeiFeatures$Type} from "packages/mezz/jei/api/runtime/$IJeiFeatures"
import {$ISimpleRecipeManagerPlugin, $ISimpleRecipeManagerPlugin$Type} from "packages/mezz/jei/api/recipe/advanced/$ISimpleRecipeManagerPlugin"
import {$IRecipeManagerPlugin, $IRecipeManagerPlugin$Type} from "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPlugin"

export interface $IAdvancedRegistration {

 "addTypedRecipeManagerPlugin"<T>(arg0: $RecipeType$Type<(T)>, arg1: $ISimpleRecipeManagerPlugin$Type<(T)>): void
 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeManagerPlugin"(arg0: $IRecipeManagerPlugin$Type): void
 "getJeiFeatures"(): $IJeiFeatures
 "addRecipeCategoryDecorator"<T>(arg0: $RecipeType$Type<(T)>, arg1: $IRecipeCategoryDecorator$Type<(T)>): void
 "getRecipeManagerPluginHelper"(): $IRecipeManagerPluginHelper
}

export namespace $IAdvancedRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedRegistration$Type = ($IAdvancedRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedRegistration_ = $IAdvancedRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiBrewingRecipe {

 "getBrewingSteps"(): integer
 "getIngredients"(): $List<($ItemStack)>
 "getPotionOutput"(): $ItemStack
 "getPotionInputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
}

export namespace $IJeiBrewingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiBrewingRecipe$Type = ($IJeiBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiBrewingRecipe_ = $IJeiBrewingRecipe$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ISlottedWidgetFactory, $ISlottedWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $IScrollGridWidgetFactory<R> extends $ISlottedWidgetFactory<(R)> {

 "setPosition"(arg0: integer, arg1: integer): void
 "getArea"(): $ScreenRectangle
/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void
}

export namespace $IScrollGridWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollGridWidgetFactory$Type<R> = ($IScrollGridWidgetFactory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollGridWidgetFactory_<R> = $IScrollGridWidgetFactory$Type<(R)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"

export interface $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {

 "getInventorySlots"(arg0: C, arg1: R): $List<($Slot)>
 "requireCompleteSets"(arg0: C, arg1: R): boolean
 "getRecipeType"(): $RecipeType<(R)>
 "getContainerClass"(): $Class<(any)>
 "getMenuType"(): $Optional<($MenuType<(C)>)>
 "getHandlingError"(arg0: C, arg1: R): $IRecipeTransferError
 "getRecipeSlots"(arg0: C, arg1: R): $List<($Slot)>
 "canHandle"(arg0: C, arg1: R): boolean
}

export namespace $IRecipeTransferInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferInfo$Type<C, R> = ($IRecipeTransferInfo<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferInfo_<C, R> = $IRecipeTransferInfo$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/registration/$IGuiHandlerRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IGlobalGuiHandler, $IGlobalGuiHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGlobalGuiHandler"
import {$IScreenHandler, $IScreenHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IScreenHandler"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiContainerHandler, $IGuiContainerHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiContainerHandler"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IGuiHandlerRegistration {

 "addGenericGuiContainerHandler"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: $IGuiContainerHandler$Type<(any)>): void
 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeClickArea"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer, ...arg5: ($RecipeType$Type<(any)>)[]): void
 "addGlobalGuiHandler"(arg0: $IGlobalGuiHandler$Type): void
 "addGuiContainerHandler"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: $IGuiContainerHandler$Type<(T)>): void
 "addGhostIngredientHandler"<T extends $Screen>(arg0: $Class$Type<(T)>, arg1: $IGhostIngredientHandler$Type<(T)>): void
 "addGuiScreenHandler"<T extends $Screen>(arg0: $Class$Type<(T)>, arg1: $IScreenHandler$Type<(T)>): void
}

export namespace $IGuiHandlerRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHandlerRegistration$Type = ($IGuiHandlerRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHandlerRegistration_ = $IGuiHandlerRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocus" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocus<V> {

 "checkedCast"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getTypedValue"(): $ITypedIngredient<(V)>
 "getRole"(): $RecipeIngredientRole
}

export namespace $IFocus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$Type<V> = ($IFocus<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocus_<V> = $IFocus$Type<(V)>;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeTransferRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeTransferInfo, $IRecipeTransferInfo$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo"
import {$IUniversalRecipeTransferHandler, $IUniversalRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IUniversalRecipeTransferHandler"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferHandlerHelper, $IRecipeTransferHandlerHelper$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandlerHelper"

export interface $IRecipeTransferRegistration {

/**
 * 
 * @deprecated
 */
 "addUniversalRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler$Type<(C), (R)>): void
 "addUniversalRecipeTransferHandler"<C extends $AbstractContainerMenu>(arg0: $IUniversalRecipeTransferHandler$Type<(C)>): void
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo$Type<(C), (R)>): void
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler$Type<(C), (R)>, arg1: $RecipeType$Type<(R)>): void
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $Class$Type<(any)>, arg1: $MenuType$Type<(C)>, arg2: $RecipeType$Type<(R)>, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "getJeiHelpers"(): $IJeiHelpers
 "getTransferHelper"(): $IRecipeTransferHandlerHelper
}

export namespace $IRecipeTransferRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferRegistration$Type = ($IRecipeTransferRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferRegistration_ = $IRecipeTransferRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusGroup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFocusGroup {

 "isEmpty"(): boolean
 "getAllFocuses"(): $List<($IFocus<(any)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $RecipeIngredientRole$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<(any)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<($IFocus<(T)>)>
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$Type = ($IFocusGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusGroup_ = $IFocusGroup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMapping" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiKeyMapping {

 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
 "getTranslatedKeyMessage"(): $Component
 "isUnbound"(): boolean
}

export namespace $IJeiKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMapping$Type = ($IJeiKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMapping_ = $IJeiKeyMapping$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeType<T> {

constructor(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<T>(arg0: string, arg1: string, arg2: $Class$Type<(any)>): $RecipeType<(T)>
public "getRecipeClass"(): $Class<(any)>
public "getUid"(): $ResourceLocation
get "recipeClass"(): $Class<(any)>
get "uid"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$Type<T> = ($RecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeType_<T> = $RecipeType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget" {
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ISlottedRecipeWidget, $ISlottedRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"

export interface $IScrollGridWidget extends $ISlottedRecipeWidget, $IPlaceable<($IScrollGridWidget)> {

 "getScreenRectangle"(): $ScreenRectangle
 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "setPosition"(arg0: integer, arg1: integer): $IScrollGridWidget
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): $IScrollGridWidget
 "getWidth"(): integer
 "getHeight"(): integer
 "tick"(): void
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getPosition"(): $ScreenPosition
}

export namespace $IScrollGridWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollGridWidget$Type = ($IScrollGridWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollGridWidget_ = $IScrollGridWidget$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientVisibility$IListener, $IIngredientVisibility$IListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility {

 "isIngredientVisible"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): boolean
 "isIngredientVisible"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "registerListener"(arg0: $IIngredientVisibility$IListener$Type): void
}

export namespace $IIngredientVisibility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$Type = ($IIngredientVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility_ = $IIngredientVisibility$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IJeiUserInput, $IJeiUserInput$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IScrollBoxWidget extends $IRecipeWidget, $IJeiInputHandler {

 "setContents"(arg0: $List$Type<($FormattedText$Type)>): $IScrollBoxWidget
 "setContents"(arg0: $IDrawable$Type): $IScrollBoxWidget
 "getContentAreaWidth"(): integer
 "getContentAreaHeight"(): integer
 "tick"(): void
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getPosition"(): $ScreenPosition
 "handleInput"(arg0: double, arg1: double, arg2: $IJeiUserInput$Type): boolean
 "handleMouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "handleMouseDragged"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type, arg3: double, arg4: double): boolean
 "handleMouseMoved"(arg0: double, arg1: double): void
 "getArea"(): $ScreenRectangle
}

export namespace $IScrollBoxWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollBoxWidget$Type = ($IScrollBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollBoxWidget_ = $IScrollBoxWidget$Type;
}}
declare module "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeLayoutDrawable<R> {

 "tick"(): void
 "getRecipeSlotsView"(): $IRecipeSlotsView
 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "isMouseOver"(arg0: double, arg1: double): boolean
 "setPosition"(arg0: integer, arg1: integer): void
 "getIngredientUnderMouse"<T>(arg0: integer, arg1: integer, arg2: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getItemStackUnderMouse"(arg0: integer, arg1: integer): $Optional<($ItemStack)>
 "getRecipeCategory"(): $IRecipeCategory<(R)>
 "getRecipeTransferButtonArea"(): $Rect2i
 "getRecipeBookmarkButtonArea"(): $Rect2i
 "getInputHandler"(): $IJeiInputHandler
 "drawOverlays"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getRectWithBorder"(): $Rect2i
/**
 * 
 * @deprecated
 */
 "getRecipeSlotUnderMouse"(arg0: double, arg1: double): $Optional<($IRecipeSlotDrawable)>
 "getRecipe"(): R
 "getRect"(): $Rect2i
 "drawRecipe"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $IRecipeLayoutDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutDrawable$Type<R> = ($IRecipeLayoutDrawable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutDrawable_<R> = $IRecipeLayoutDrawable$Type<(R)>;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$UidContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UidContext extends $Enum<($UidContext)> {
static readonly "Ingredient": $UidContext
static readonly "Recipe": $UidContext


public static "values"(): ($UidContext)[]
public static "valueOf"(arg0: string): $UidContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UidContext$Type = (("ingredient") | ("recipe")) | ($UidContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UidContext_ = $UidContext$Type;
}}
declare module "packages/mezz/jei/api/registration/$ISubtypeRegistration" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientSubtypeInterpreter, $IIngredientSubtypeInterpreter$Type} from "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $ISubtypeRegistration {

 "useNbtForSubtypes"(...arg0: ($Fluid$Type)[]): void
 "useNbtForSubtypes"(...arg0: ($Item$Type)[]): void
 "registerSubtypeInterpreter"(arg0: $Item$Type, arg1: $IIngredientSubtypeInterpreter$Type<($ItemStack$Type)>): void
 "registerSubtypeInterpreter"<B, I>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (I)>, arg1: B, arg2: $IIngredientSubtypeInterpreter$Type<(I)>): void
}

export namespace $ISubtypeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeRegistration$Type = ($ISubtypeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeRegistration_ = $ISubtypeRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/vanilla/crafting/$ICraftingCategoryExtension" {
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeCategoryExtension, $IRecipeCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $ICraftingCategoryExtension extends $IRecipeCategoryExtension {

 "onDisplayedIngredientsUpdate"(arg0: $List$Type<($IRecipeSlotDrawable$Type)>, arg1: $IFocusGroup$Type): void
 "getRegistryName"(): $ResourceLocation
 "createRecipeExtras"(arg0: $IRecipeExtrasBuilder$Type, arg1: $ICraftingGridHelper$Type, arg2: $IFocusGroup$Type): void
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: $ICraftingGridHelper$Type, arg2: $IFocusGroup$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
/**
 * 
 * @deprecated
 */
 "handleInput"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type): boolean
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(arg0: double, arg1: double): $List<($Component)>
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawInfo"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void

(arg0: $List$Type<($IRecipeSlotDrawable$Type)>, arg1: $IFocusGroup$Type): void
}

export namespace $ICraftingCategoryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingCategoryExtension$Type = ($ICraftingCategoryExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingCategoryExtension_ = $ICraftingCategoryExtension$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IDrawableAnimated$StartDirection extends $Enum<($IDrawableAnimated$StartDirection)> {
static readonly "TOP": $IDrawableAnimated$StartDirection
static readonly "BOTTOM": $IDrawableAnimated$StartDirection
static readonly "LEFT": $IDrawableAnimated$StartDirection
static readonly "RIGHT": $IDrawableAnimated$StartDirection


public static "values"(): ($IDrawableAnimated$StartDirection)[]
public static "valueOf"(arg0: string): $IDrawableAnimated$StartDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$StartDirection$Type = (("top") | ("left") | ("bottom") | ("right")) | ($IDrawableAnimated$StartDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated$StartDirection_ = $IDrawableAnimated$StartDirection$Type;
}}
declare module "packages/mezz/jei/api/registration/$IModIngredientRegistration" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$ISubtypeManager, $ISubtypeManager$Type} from "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeManager"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"

export interface $IModIngredientRegistration {

 "register"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>, arg2: $IIngredientHelper$Type<(V)>, arg3: $IIngredientRenderer$Type<(V)>): void
 "getColorHelper"(): $IColorHelper
 "getSubtypeManager"(): $ISubtypeManager
}

export namespace $IModIngredientRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIngredientRegistration$Type = ($IModIngredientRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIngredientRegistration_ = $IModIngredientRegistration$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility$IListener {

 "onIngredientVisibilityChanged"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void

(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void
}

export namespace $IIngredientVisibility$IListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$IListener$Type = ($IIngredientVisibility$IListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility$IListener_ = $IIngredientVisibility$IListener$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IExtendableRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeCategoryExtension, $IRecipeCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IExtendableRecipeCategory<T, W extends $IRecipeCategoryExtension> extends $IRecipeCategory<(T)> {

 "addCategoryExtension"<R extends T>(arg0: $Class$Type<(any)>, arg1: $Function$Type<(R), (any)>): void
 "addCategoryExtension"<R extends T>(arg0: $Class$Type<(any)>, arg1: $Predicate$Type<(R)>, arg2: $Function$Type<(R), (any)>): void
 "onDisplayedIngredientsUpdate"(arg0: T, arg1: $List$Type<($IRecipeSlotDrawable$Type)>, arg2: $IFocusGroup$Type): void
 "getRegistryName"(arg0: T): $ResourceLocation
 "getRecipeType"(): $RecipeType<(T)>
/**
 * 
 * @deprecated
 */
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "createRecipeExtras"(arg0: $IRecipeExtrasBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
 "getTitle"(): $Component
 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $IRecipeSlotsView$Type, arg3: double, arg4: double): void
 "getIcon"(): $IDrawable
 "isHandled"(arg0: T): boolean
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
/**
 * 
 * @deprecated
 */
 "getBackground"(): $IDrawable
}

export namespace $IExtendableRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendableRecipeCategory$Type<T, W> = ($IExtendableRecipeCategory<(T), (W)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendableRecipeCategory_<T, W> = $IExtendableRecipeCategory$Type<(T), (W)>;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ITextWidget" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"

export interface $ITextWidget extends $IPlaceable<($ITextWidget)> {

 "setColor"(arg0: integer): $ITextWidget
 "setLineSpacing"(arg0: integer): $ITextWidget
 "setTextAlignment"(arg0: $HorizontalAlignment$Type): $ITextWidget
 "setTextAlignment"(arg0: $VerticalAlignment$Type): $ITextWidget
 "setFont"(arg0: $Font$Type): $ITextWidget
 "setShadow"(arg0: boolean): $ITextWidget
 "setPosition"(arg0: integer, arg1: integer): $ITextWidget
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): $ITextWidget
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $ITextWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextWidget$Type = ($ITextWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextWidget_ = $ITextWidget$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IEditModeConfig$HideMode extends $Enum<($IEditModeConfig$HideMode)> {
static readonly "SINGLE": $IEditModeConfig$HideMode
static readonly "WILDCARD": $IEditModeConfig$HideMode


public static "values"(): ($IEditModeConfig$HideMode)[]
public static "valueOf"(arg0: string): $IEditModeConfig$HideMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$HideMode$Type = (("single") | ("wildcard")) | ($IEditModeConfig$HideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig$HideMode_ = $IEditModeConfig$HideMode$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/$IRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IRecipeCategory<T> {

 "onDisplayedIngredientsUpdate"(arg0: T, arg1: $List$Type<($IRecipeSlotDrawable$Type)>, arg2: $IFocusGroup$Type): void
 "getRegistryName"(arg0: T): $ResourceLocation
 "getRecipeType"(): $RecipeType<(T)>
/**
 * 
 * @deprecated
 */
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "createRecipeExtras"(arg0: $IRecipeExtrasBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
 "getTitle"(): $Component
 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $IRecipeSlotsView$Type, arg3: double, arg4: double): void
 "getIcon"(): $IDrawable
 "isHandled"(arg0: T): boolean
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
/**
 * 
 * @deprecated
 */
 "getBackground"(): $IDrawable
}

export namespace $IRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategory$Type<T> = ($IRecipeCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategory_<T> = $IRecipeCategory$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotRichTooltipCallback" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotRichTooltipCallback {

 "onRichTooltip"(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void

(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
}

export namespace $IRecipeSlotRichTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotRichTooltipCallback$Type = ($IRecipeSlotRichTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotRichTooltipCallback_ = $IRecipeSlotRichTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export class $RecipeSlotUnderMouse extends $Record {

constructor(arg0: $IRecipeSlotDrawable$Type, arg1: integer, arg2: integer)
constructor(slot: $IRecipeSlotDrawable$Type, offset: $ScreenPosition$Type)

public "slot"(): $IRecipeSlotDrawable
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "offset"(): $ScreenPosition
public "isMouseOver"(arg0: double, arg1: double): boolean
public "addOffset"(arg0: integer, arg1: integer): $RecipeSlotUnderMouse
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSlotUnderMouse$Type = ($RecipeSlotUnderMouse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSlotUnderMouse_ = $RecipeSlotUnderMouse$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeCatalystRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"

export interface $IRecipeCatalystRegistration {

 "addRecipeCatalyst"(arg0: $ItemLike$Type, ...arg1: ($RecipeType$Type<(any)>)[]): void
 "addRecipeCatalyst"(arg0: $ItemStack$Type, ...arg1: ($RecipeType$Type<(any)>)[]): void
 "addRecipeCatalyst"<T>(arg0: $IIngredientType$Type<(T)>, arg1: T, ...arg2: ($RecipeType$Type<(any)>)[]): void
 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeCatalysts"<T>(arg0: $RecipeType$Type<(any)>, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<(T)>): void
 "addRecipeCatalysts"(arg0: $RecipeType$Type<(any)>, ...arg1: ($ItemStack$Type)[]): void
 "addRecipeCatalysts"(arg0: $RecipeType$Type<(any)>, ...arg1: ($ItemLike$Type)[]): void
 "getIngredientManager"(): $IIngredientManager
}

export namespace $IRecipeCatalystRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystRegistration$Type = ($IRecipeCatalystRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystRegistration_ = $IRecipeCatalystRegistration$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IModIdHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IModIdHelper {

 "getModNameForModId"(arg0: string): string
 "getFormattedModNameForModId"(arg0: string): string
/**
 * 
 * @deprecated
 */
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: $ITypedIngredient$Type<(T)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IIngredientHelper$Type<(T)>): $List<($Component)>
 "isDisplayingModNameEnabled"(): boolean
 "getModNameForTooltip"<T>(arg0: $ITypedIngredient$Type<(T)>): $Optional<($Component)>
}

export namespace $IModIdHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIdHelper$Type = ($IModIdHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIdHelper_ = $IModIdHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export interface $IRecipeSlotDrawablesView {

 "getSlots"(): $List<($IRecipeSlotDrawable)>
 "getSlots"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotDrawable)>
 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotDrawable)>

(): $List<($IRecipeSlotDrawable)>
}

export namespace $IRecipeSlotDrawablesView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawablesView$Type = ($IRecipeSlotDrawablesView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawablesView_ = $IRecipeSlotDrawablesView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeIngredientRole" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole


public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: string): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$Type = (("output") | ("input") | ("catalyst") | ("render_only")) | ($RecipeIngredientRole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeIngredientRole_ = $RecipeIngredientRole$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder" {
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$IPlaceable, $IPlaceable$Type} from "packages/mezz/jei/api/gui/placement/$IPlaceable"
import {$IScrollGridWidget, $IScrollGridWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidget"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$ISlottedRecipeWidget, $ISlottedRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget"
import {$ITextWidget, $ITextWidget$Type} from "packages/mezz/jei/api/gui/widgets/$ITextWidget"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$IJeiInputHandler, $IJeiInputHandler$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler"
import {$IScrollBoxWidget, $IScrollBoxWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotDrawablesView, $IRecipeSlotDrawablesView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawablesView"
import {$IJeiGuiEventListener, $IJeiGuiEventListener$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeExtrasBuilder {

 "addText"(arg0: $List$Type<($FormattedText$Type)>, arg1: integer, arg2: integer): $ITextWidget
 "addText"(arg0: $FormattedText$Type, arg1: integer, arg2: integer): $ITextWidget
 "addWidget"(arg0: $IRecipeWidget$Type): void
 "addRecipeArrow"(): $IPlaceable<(any)>
 "addAnimatedRecipeArrow"(arg0: integer): $IPlaceable<(any)>
 "addAnimatedRecipeFlame"(arg0: integer): $IPlaceable<(any)>
 "addScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "addRecipePlusSign"(): $IPlaceable<(any)>
 "getRecipeSlots"(): $IRecipeSlotDrawablesView
 "addDrawable"(arg0: $IDrawable$Type): $IPlaceable<(any)>
 "addDrawable"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): void
 "addScrollGridWidget"(arg0: $List$Type<($IRecipeSlotDrawable$Type)>, arg1: integer, arg2: integer): $IScrollGridWidget
 "addInputHandler"(arg0: $IJeiInputHandler$Type): void
 "addGuiEventListener"(arg0: $IJeiGuiEventListener$Type): void
 "addSlottedWidget"(arg0: $ISlottedRecipeWidget$Type, arg1: $List$Type<($IRecipeSlotDrawable$Type)>): void
}

export namespace $IRecipeExtrasBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeExtrasBuilder$Type = ($IRecipeExtrasBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeExtrasBuilder_ = $IRecipeExtrasBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IScreenHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IScreenHandler<T extends $Screen> extends $Function<(T), ($IGuiProperties)> {

 "apply"(arg0: T): $IGuiProperties
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($IGuiProperties)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<(T), (V)>

(arg0: T): $IGuiProperties
}

export namespace $IScreenHandler {
function identity<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHandler$Type<T> = ($IScreenHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHandler_<T> = $IScreenHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"

export interface $IRecipeCategoriesLookup {

 "get"(): $Stream<($IRecipeCategory<(any)>)>
 "includeHidden"(): $IRecipeCategoriesLookup
 "limitTypes"(arg0: $Collection$Type<($RecipeType$Type<(any)>)>): $IRecipeCategoriesLookup
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeCategoriesLookup
}

export namespace $IRecipeCategoriesLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoriesLookup$Type = ($IRecipeCategoriesLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoriesLookup_ = $IRecipeCategoriesLookup$Type;
}}
declare module "packages/mezz/jei/api/gui/$ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITickTimer {

 "getValue"(): integer
 "getMaxValue"(): integer
}

export namespace $ITickTimer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickTimer$Type = ($ITickTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickTimer_ = $ITickTimer$Type;
}}
declare module "packages/mezz/jei/api/recipe/advanced/$ISimpleRecipeManagerPlugin" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $ISimpleRecipeManagerPlugin<T> {

 "isHandledInput"(arg0: $ITypedIngredient$Type<(any)>): boolean
 "isHandledOutput"(arg0: $ITypedIngredient$Type<(any)>): boolean
 "getRecipesForInput"(arg0: $ITypedIngredient$Type<(any)>): $List<(T)>
 "getRecipesForOutput"(arg0: $ITypedIngredient$Type<(any)>): $List<(T)>
 "getAllRecipes"(): $List<(T)>
}

export namespace $ISimpleRecipeManagerPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimpleRecipeManagerPlugin$Type<T> = ($ISimpleRecipeManagerPlugin<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISimpleRecipeManagerPlugin_<T> = $ISimpleRecipeManagerPlugin$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGlobalGuiHandler" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGlobalGuiHandler {

 "getClickableIngredientUnderMouse"(arg0: double, arg1: double): $Optional<($IClickableIngredient<(any)>)>
 "getGuiExtraAreas"(): $Collection<($Rect2i)>
}

export namespace $IGlobalGuiHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlobalGuiHandler$Type = ($IGlobalGuiHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGlobalGuiHandler_ = $IGlobalGuiHandler$Type;
}}
declare module "packages/mezz/jei/api/registration/$IVanillaCategoryExtensionRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$IExtendableSmithingRecipeCategory, $IExtendableSmithingRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/extensions/vanilla/smithing/$IExtendableSmithingRecipeCategory"
import {$ICraftingCategoryExtension, $ICraftingCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/vanilla/crafting/$ICraftingCategoryExtension"
import {$IExtendableRecipeCategory, $IExtendableRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IExtendableRecipeCategory"

export interface $IVanillaCategoryExtensionRegistration {

 "getCraftingCategory"(): $IExtendableRecipeCategory<($CraftingRecipe), ($ICraftingCategoryExtension)>
 "getJeiHelpers"(): $IJeiHelpers
 "getSmithingCategory"(): $IExtendableSmithingRecipeCategory
}

export namespace $IVanillaCategoryExtensionRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaCategoryExtensionRegistration$Type = ($IVanillaCategoryExtensionRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaCategoryExtensionRegistration_ = $IVanillaCategoryExtensionRegistration$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter" {
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientSubtypeInterpreter<T> {

 "apply"(arg0: T, arg1: $UidContext$Type): string

(arg0: T, arg1: $UidContext$Type): string
}

export namespace $IIngredientSubtypeInterpreter {
const NONE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSubtypeInterpreter$Type<T> = ($IIngredientSubtypeInterpreter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSubtypeInterpreter_<T> = $IIngredientSubtypeInterpreter$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/placement/$HorizontalAlignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "LEFT": $HorizontalAlignment
static readonly "CENTER": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment


public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(arg0: string): $HorizontalAlignment
public "getXPos"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalAlignment$Type = (("left") | ("center") | ("right")) | ($HorizontalAlignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalAlignment_ = $HorizontalAlignment$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiInputHandler" {
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"
import {$IJeiUserInput, $IJeiUserInput$Type} from "packages/mezz/jei/api/gui/inputs/$IJeiUserInput"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiInputHandler {

 "handleInput"(arg0: double, arg1: double, arg2: $IJeiUserInput$Type): boolean
 "handleMouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "handleMouseDragged"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type, arg3: double, arg4: double): boolean
 "handleMouseMoved"(arg0: double, arg1: double): void
 "getArea"(): $ScreenRectangle

(arg0: double, arg1: double, arg2: $IJeiUserInput$Type): boolean
}

export namespace $IJeiInputHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiInputHandler$Type = ($IJeiInputHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiInputHandler_ = $IJeiInputHandler$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ISlottedRecipeWidget" {
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeSlotUnderMouse, $RecipeSlotUnderMouse$Type} from "packages/mezz/jei/api/gui/inputs/$RecipeSlotUnderMouse"
import {$ScreenPosition, $ScreenPosition$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenPosition"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ISlottedRecipeWidget extends $IRecipeWidget {

 "getSlotUnderMouse"(arg0: double, arg1: double): $Optional<($RecipeSlotUnderMouse)>
 "tick"(): void
/**
 * 
 * @deprecated
 */
 "draw"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawWidget"(arg0: $GuiGraphics$Type, arg1: double, arg2: double): void
 "getPosition"(): $ScreenPosition
}

export namespace $ISlottedRecipeWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedRecipeWidget$Type = ($ISlottedRecipeWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlottedRecipeWidget_ = $ISlottedRecipeWidget$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$ITooltipBuilder" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $ITooltipBuilder {

 "add"(arg0: $TooltipComponent$Type): void
 "add"(arg0: $FormattedText$Type): void
 "addAll"(arg0: $Collection$Type<(any)>): void
/**
 * 
 * @deprecated
 */
 "removeAll"(arg0: $List$Type<($Component$Type)>): void
/**
 * 
 * @deprecated
 */
 "toLegacyToComponents"(): $List<($Component)>
 "setIngredient"(arg0: $ITypedIngredient$Type<(any)>): void
}

export namespace $ITooltipBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipBuilder$Type = ($ITooltipBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITooltipBuilder_ = $ITooltipBuilder$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/vanilla/smithing/$ISmithingCategoryExtension" {
import {$SmithingRecipe, $SmithingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

export interface $ISmithingCategoryExtension<R extends $SmithingRecipe> {

 "onDisplayedIngredientsUpdate"(arg0: R, arg1: $IRecipeSlotDrawable$Type, arg2: $IRecipeSlotDrawable$Type, arg3: $IRecipeSlotDrawable$Type, arg4: $IRecipeSlotDrawable$Type, arg5: $IFocusGroup$Type): void
 "setTemplate"<T extends $IIngredientAcceptor<(T)>>(arg0: R, arg1: T): void
 "setAddition"<T extends $IIngredientAcceptor<(T)>>(arg0: R, arg1: T): void
 "setBase"<T extends $IIngredientAcceptor<(T)>>(arg0: R, arg1: T): void
 "setOutput"<T extends $IIngredientAcceptor<(T)>>(arg0: R, arg1: T): void
}

export namespace $ISmithingCategoryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISmithingCategoryExtension$Type<R> = ($ISmithingCategoryExtension<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISmithingCategoryExtension_<R> = $ISmithingCategoryExtension$Type<(R)>;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/vanilla/smithing/$IExtendableSmithingRecipeCategory" {
import {$SmithingRecipe, $SmithingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$SmithingRecipe"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ISmithingCategoryExtension, $ISmithingCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/vanilla/smithing/$ISmithingCategoryExtension"

export interface $IExtendableSmithingRecipeCategory {

 "addExtension"<R extends $SmithingRecipe>(arg0: $Class$Type<(any)>, arg1: $ISmithingCategoryExtension$Type<(R)>): void

(arg0: $Class$Type<(any)>, arg1: $ISmithingCategoryExtension$Type<(R)>): void
}

export namespace $IExtendableSmithingRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendableSmithingRecipeCategory$Type = ($IExtendableSmithingRecipeCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendableSmithingRecipeCategory_ = $IExtendableSmithingRecipeCategory$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IRecipeCategoryExtension {

/**
 * 
 * @deprecated
 */
 "handleInput"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type): boolean
/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(arg0: double, arg1: double): $List<($Component)>
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: double, arg2: double): void
 "drawInfo"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
}

export namespace $IRecipeCategoryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryExtension$Type = ($IRecipeCategoryExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryExtension_ = $IRecipeCategoryExtension$Type;
}}
declare module "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $BatchRenderElement<T> extends $Record {

constructor(ingredient: T, x: integer, y: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "ingredient"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatchRenderElement$Type<T> = ($BatchRenderElement<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatchRenderElement_<T> = $BatchRenderElement$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingGridHelper {

 "createAndSetInputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($List$Type<($ItemStack$Type)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetInputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetOutputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "createAndSetOutputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<(T)>): $IRecipeSlotBuilder
 "setInputs"<T>(arg0: $List$Type<($IRecipeSlotBuilder$Type)>, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): void
}

export namespace $ICraftingGridHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingGridHelper$Type = ($ICraftingGridHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingGridHelper_ = $ICraftingGridHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IScalableDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IScalableDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: $Rect2i$Type): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $IScalableDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalableDrawable$Type = ($IScalableDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScalableDrawable_ = $IScalableDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IGuiHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IRecipeWidget, $IRecipeWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeWidget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IScrollGridWidgetFactory, $IScrollGridWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollGridWidgetFactory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"
import {$IScrollBoxWidget, $IScrollBoxWidget$Type} from "packages/mezz/jei/api/gui/widgets/$IScrollBoxWidget"
import {$IDrawableBuilder, $IDrawableBuilder$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"

export interface $IGuiHelper {

 "getRecipeArrow"(): $IDrawableStatic
 "getRecipeArrowFilled"(): $IDrawableStatic
 "getRecipePlusSign"(): $IDrawableStatic
 "getOutputSlot"(): $IDrawableStatic
 "createDrawableItemStack"(arg0: $ItemStack$Type): $IDrawable
 "createDrawableIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $IDrawable
 "createDrawableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $IDrawable
 "createBlankDrawable"(arg0: integer, arg1: integer): $IDrawableStatic
/**
 * 
 * @deprecated
 */
 "getScrollBoxScrollbarExtraWidth"(): integer
 "drawableBuilder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableBuilder
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: integer, arg2: $IDrawableAnimated$StartDirection$Type, arg3: boolean): $IDrawableAnimated
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: $ITickTimer$Type, arg2: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
 "getSlotDrawable"(): $IDrawableStatic
 "createAnimatedRecipeArrow"(arg0: integer): $IDrawableAnimated
 "getRecipeFlameEmpty"(): $IDrawableStatic
 "getRecipeFlameFilled"(): $IDrawableStatic
 "createAnimatedRecipeFlame"(arg0: integer): $IDrawableAnimated
 "createWidgetFromDrawable"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeWidget
 "createCraftingGridHelper"(): $ICraftingGridHelper
/**
 * 
 * @deprecated
 */
 "createScrollGridFactory"(arg0: integer, arg1: integer): $IScrollGridWidgetFactory<(any)>
/**
 * 
 * @deprecated
 */
 "createScrollBoxWidget"(arg0: $IDrawable$Type, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "createScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
 "createTickTimer"(arg0: integer, arg1: integer, arg2: boolean): $ITickTimer
 "createDrawable"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableStatic
 "createDrawableItemLike"(arg0: $ItemLike$Type): $IDrawable
}

export namespace $IGuiHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelper$Type = ($IGuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelper_ = $IGuiHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/placement/$VerticalAlignment" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "TOP": $VerticalAlignment
static readonly "CENTER": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment


public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(arg0: string): $VerticalAlignment
public "getYPos"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAlignment$Type = (("top") | ("bottom") | ("center")) | ($VerticalAlignment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalAlignment_ = $VerticalAlignment$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientManager$IIngredientListener, $IIngredientManager$IIngredientListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IIngredientManager {

 "getRegisteredIngredientTypes"(): $Collection<($IIngredientType<(any)>)>
 "getIngredientTypeWithSubtypesFromBase"<B, I>(arg0: B): $Optional<($IIngredientTypeWithSubtypes<(B), (I)>)>
 "getIngredientRenderer"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientRenderer<(V)>
 "getIngredientRenderer"<V>(arg0: V): $IIngredientRenderer<(V)>
 "createTypedIngredient"<V>(arg0: V): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $Optional<($ITypedIngredient<(V)>)>
 "getIngredientHelper"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientHelper<(V)>
 "getIngredientHelper"<V>(arg0: V): $IIngredientHelper<(V)>
 "getIngredientTypeChecked"<V>(arg0: $Class$Type<(any)>): $Optional<($IIngredientType<(V)>)>
 "getIngredientTypeChecked"<V>(arg0: V): $Optional<($IIngredientType<(V)>)>
 "removeIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "addIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "getAllIngredients"<V>(arg0: $IIngredientType$Type<(V)>): $Collection<(V)>
 "registerIngredientListener"(arg0: $IIngredientManager$IIngredientListener$Type): void
 "getAllItemStacks"(): $Collection<($ItemStack)>
 "getIngredientTypeForUid"(arg0: string): $Optional<($IIngredientType<(any)>)>
 "normalizeTypedIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $ITypedIngredient<(V)>
 "createClickableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V, arg2: $Rect2i$Type, arg3: boolean): $Optional<($IClickableIngredient<(V)>)>
 "createClickableIngredient"<V>(arg0: V, arg1: $Rect2i$Type, arg2: boolean): $Optional<($IClickableIngredient<(V)>)>
/**
 * 
 * @deprecated
 */
 "getIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<(V)>
 "getTypedIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<($ITypedIngredient<(V)>)>
 "getIngredientAliases"(arg0: $ITypedIngredient$Type<(any)>): $Collection<(string)>
}

export namespace $IIngredientManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$Type = ($IIngredientManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager_ = $IIngredientManager$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$ITypedIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITypedIngredient<T> {

 "getType"(): $IIngredientType<(T)>
 "getItemStack"(): $Optional<($ItemStack)>
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$Type<(V)>): $Optional<(V)>
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedIngredient_<T> = $ITypedIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

/**
 * 
 * @deprecated
 */
export interface $IRecipeSlotTooltipCallback {

/**
 * 
 * @deprecated
 */
 "onRichTooltip"(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "onTooltip"(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void

(arg0: $IRecipeSlotView$Type, arg1: $ITooltipBuilder$Type): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$Type = ($IRecipeSlotTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotTooltipCallback_ = $IRecipeSlotTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$ISlottedWidgetFactory, $ISlottedWidgetFactory$Type} from "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"

export interface $IRecipeLayoutBuilder {

 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
 "addInputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(): $IRecipeSlotBuilder
 "addOutputSlot"(): $IRecipeSlotBuilder
 "addOutputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
/**
 * 
 * @deprecated
 */
 "addSlotToWidget"(arg0: $RecipeIngredientRole$Type, arg1: $ISlottedWidgetFactory$Type<(any)>): $IRecipeSlotBuilder
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$Type): $IIngredientAcceptor<(any)>
 "createFocusLink"(...arg0: ($IIngredientAcceptor$Type<(any)>)[]): void
 "setShapeless"(): void
 "setShapeless"(arg0: integer, arg1: integer): void
 "addSlot"(arg0: $RecipeIngredientRole$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$Type): $IRecipeSlotBuilder
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$Type = ($IRecipeLayoutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutBuilder_ = $IRecipeLayoutBuilder$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {

 "getRecipeType"(): $RecipeType<(R)>
 "getContainerClass"(): $Class<(any)>
 "transferRecipe"(arg0: C, arg1: R, arg2: $IRecipeSlotsView$Type, arg3: $Player$Type, arg4: boolean, arg5: boolean): $IRecipeTransferError
 "getMenuType"(): $Optional<($MenuType<(C)>)>
}

export namespace $IRecipeTransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandler$Type<C, R> = ($IRecipeTransferHandler<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandler_<C, R> = $IRecipeTransferHandler$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigFile" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IJeiConfigFile {

 "getPath"(): $Path
 "getCategories"(): $List<(any)>
}

export namespace $IJeiConfigFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigFile$Type = ($IJeiConfigFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigFile_ = $IJeiConfigFile$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<(I)> {

 "getBase"(arg0: I): B
 "getIngredientClass"(): $Class<(any)>
 "getIngredientBaseClass"(): $Class<(any)>
 "getDefaultIngredient"(arg0: B): I
 "castIngredient"(arg0: any): $Optional<(I)>
 "getUid"(): string
}

export namespace $IIngredientTypeWithSubtypes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTypeWithSubtypes$Type<B, I> = ($IIngredientTypeWithSubtypes<(B), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTypeWithSubtypes_<B, I> = $IIngredientTypeWithSubtypes$Type<(B), (I)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $IRecipeTransferManager {

 "getRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>

(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>
}

export namespace $IRecipeTransferManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferManager$Type = ($IRecipeTransferManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferManager_ = $IRecipeTransferManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiRuntime" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IEditModeConfig, $IEditModeConfig$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig"
import {$IJeiConfigManager, $IJeiConfigManager$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigManager"
import {$IIngredientFilter, $IIngredientFilter$Type} from "packages/mezz/jei/api/runtime/$IIngredientFilter"
import {$IBookmarkOverlay, $IBookmarkOverlay$Type} from "packages/mezz/jei/api/runtime/$IBookmarkOverlay"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$IIngredientListOverlay, $IIngredientListOverlay$Type} from "packages/mezz/jei/api/runtime/$IIngredientListOverlay"
import {$IRecipeManager, $IRecipeManager$Type} from "packages/mezz/jei/api/recipe/$IRecipeManager"
import {$IJeiKeyMappings, $IJeiKeyMappings$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMappings"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IScreenHelper, $IScreenHelper$Type} from "packages/mezz/jei/api/runtime/$IScreenHelper"
import {$IRecipeTransferManager, $IRecipeTransferManager$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IJeiRuntime {

 "getRecipeManager"(): $IRecipeManager
 "getConfigManager"(): $IJeiConfigManager
 "getKeyMappings"(): $IJeiKeyMappings
 "getScreenHelper"(): $IScreenHelper
 "getJeiHelpers"(): $IJeiHelpers
 "getIngredientListOverlay"(): $IIngredientListOverlay
 "getBookmarkOverlay"(): $IBookmarkOverlay
 "getRecipesGui"(): $IRecipesGui
 "getIngredientFilter"(): $IIngredientFilter
 "getIngredientManager"(): $IIngredientManager
 "getRecipeTransferManager"(): $IRecipeTransferManager
/**
 * 
 * @deprecated
 */
 "getIngredientVisibility"(): $IIngredientVisibility
 "getEditModeConfig"(): $IEditModeConfig
}

export namespace $IJeiRuntime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiRuntime$Type = ($IJeiRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiRuntime_ = $IJeiRuntime$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IRecipeSlotsView {

 "getSlotViews"(): $List<($IRecipeSlotView)>
 "getSlotViews"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotView)>
 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotView)>

(): $List<($IRecipeSlotView)>
}

export namespace $IRecipeSlotsView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotsView$Type = ($IRecipeSlotsView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotsView_ = $IRecipeSlotsView$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientHelper<V> {

 "getDisplayName"(arg0: V): string
 "isHiddenFromRecipeViewersByTags"(arg0: V): boolean
 "isValidIngredient"(arg0: V): boolean
 "getUniqueId"(arg0: V, arg1: $UidContext$Type): string
 "copyWithAmount"(arg0: V, arg1: long): V
 "getCheatItemStack"(arg0: V): $ItemStack
 "getWildcardId"(arg0: V): string
 "getDisplayModId"(arg0: V): string
 "copyIngredient"(arg0: V): V
 "normalizeIngredient"(arg0: V): V
 "isIngredientOnServer"(arg0: V): boolean
 "getTagStream"(arg0: V): $Stream<($ResourceLocation)>
 "getErrorInfo"(arg0: V): string
 "getTagKeyEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($TagKey<(any)>)>
/**
 * 
 * @deprecated
 */
 "getTagEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($ResourceLocation)>
 "hasSubtypes"(arg0: V): boolean
 "getIngredientType"(): $IIngredientType<(V)>
 "getResourceLocation"(arg0: V): $ResourceLocation
 "getAmount"(arg0: V): long
 "getColors"(arg0: V): $Iterable<(integer)>
}

export namespace $IIngredientHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientHelper$Type<V> = ($IIngredientHelper<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientHelper_<V> = $IIngredientHelper$Type<(V)>;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusFactory" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"

export interface $IFocusFactory {

 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $IIngredientType$Type<(V)>, arg2: V): $IFocus<(V)>
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $ITypedIngredient$Type<(V)>): $IFocus<(V)>
 "getEmptyFocusGroup"(): $IFocusGroup
 "createFocusGroup"(arg0: $Collection$Type<(any)>): $IFocusGroup
}

export namespace $IFocusFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusFactory$Type = ($IFocusFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusFactory_ = $IFocusFactory$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientListOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientListOverlay {

 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "isListDisplayed"(): boolean
 "hasKeyboardFocus"(): boolean
 "getVisibleIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
}

export namespace $IIngredientListOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientListOverlay$Type = ($IIngredientListOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientListOverlay_ = $IIngredientListOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory" {
import {$IJeiBrewingRecipe, $IJeiBrewingRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IJeiAnvilRecipe, $IJeiAnvilRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IVanillaRecipeFactory {

/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type): $IJeiBrewingRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
}

export namespace $IVanillaRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaRecipeFactory$Type = ($IVanillaRecipeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaRecipeFactory_ = $IVanillaRecipeFactory$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiFeatures" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IJeiFeatures {

 "disableInventoryEffectRendererGuiHandler"(): void

(): void
}

export namespace $IJeiFeatures {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiFeatures$Type = ($IJeiFeatures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiFeatures_ = $IJeiFeatures$Type;
}}
declare module "packages/mezz/jei/api/gui/widgets/$ISlottedWidgetFactory" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$Type} from "packages/mezz/jei/api/gui/widgets/$IRecipeExtrasBuilder"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $ISlottedWidgetFactory<R> {

/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void

(arg0: $IRecipeExtrasBuilder$Type, arg1: R, arg2: $List$Type<($IRecipeSlotDrawable$Type)>): void
}

export namespace $ISlottedWidgetFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedWidgetFactory$Type<R> = ($ISlottedWidgetFactory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlottedWidgetFactory_<R> = $ISlottedWidgetFactory$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IGuiClickableArea {

/**
 * 
 * @deprecated
 */
 "getTooltipStrings"(): $List<($Component)>
 "isTooltipEnabled"(): boolean
 "onClick"(arg0: $IFocusFactory$Type, arg1: $IRecipesGui$Type): void
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
 "getArea"(): $Rect2i
}

export namespace $IGuiClickableArea {
function createBasic(arg0: integer, arg1: integer, arg2: integer, arg3: integer, ...arg4: ($RecipeType$Type<(any)>)[]): $IGuiClickableArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiClickableArea$Type = ($IGuiClickableArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiClickableArea_ = $IGuiClickableArea$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEditModeConfig$HideMode, $IEditModeConfig$HideMode$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IEditModeConfig {

 "hideIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "showIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "isIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "getIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): $Set<($IEditModeConfig$HideMode)>
}

export namespace $IEditModeConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$Type = ($IEditModeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig_ = $IEditModeConfig$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableAnimated extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IDrawableAnimated {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$Type = ($IDrawableAnimated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated_ = $IDrawableAnimated$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiGuiEventListener" {
import {$ScreenRectangle, $ScreenRectangle$Type} from "packages/net/minecraft/client/gui/navigation/$ScreenRectangle"

export interface $IJeiGuiEventListener {

 "mouseScrolled"(arg0: double, arg1: double, arg2: double): boolean
 "getArea"(): $ScreenRectangle
 "keyPressed"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean

(arg0: double, arg1: double, arg2: double): boolean
}

export namespace $IJeiGuiEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiGuiEventListener$Type = ($IJeiGuiEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiGuiEventListener_ = $IJeiGuiEventListener$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$BatchRenderElement, $BatchRenderElement$Type} from "packages/mezz/jei/api/ingredients/rendering/$BatchRenderElement"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IIngredientRenderer<T> {

 "getFontRenderer"(arg0: $Minecraft$Type, arg1: T): $Font
 "renderBatch"(arg0: $GuiGraphics$Type, arg1: $List$Type<($BatchRenderElement$Type<(T)>)>): void
 "render"(arg0: $GuiGraphics$Type, arg1: T): void
 "render"(arg0: $GuiGraphics$Type, arg1: T, arg2: integer, arg3: integer): void
 "getTooltip"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $TooltipFlag$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: T, arg1: $TooltipFlag$Type): $List<($Component)>
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientRenderer_<T> = $IIngredientRenderer$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(THIS)>> extends $IIngredientConsumer {

 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): THIS
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): THIS
 "addFluidStack"(arg0: $Fluid$Type): THIS
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): THIS
 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientAcceptor_<THIS> = $IIngredientAcceptor$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandlerHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$IRecipeTransferInfo, $IRecipeTransferInfo$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"

export interface $IRecipeTransferHandlerHelper {

 "createUserErrorForMissingSlots"(arg0: $Component$Type, arg1: $Collection$Type<($IRecipeSlotView$Type)>): $IRecipeTransferError
 "createBasicRecipeTransferInfo"<C extends $AbstractContainerMenu, R>(arg0: $Class$Type<(any)>, arg1: $MenuType$Type<(C)>, arg2: $RecipeType$Type<(R)>, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $IRecipeTransferInfo<(C), (R)>
 "createUnregisteredRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo$Type<(C), (R)>): $IRecipeTransferHandler<(C), (R)>
 "recipeTransferHasServerSupport"(): boolean
 "createInternalError"(): $IRecipeTransferError
 "createUserErrorWithTooltip"(arg0: $Component$Type): $IRecipeTransferError
 "createRecipeSlotsView"(arg0: $List$Type<($IRecipeSlotView$Type)>): $IRecipeSlotsView
}

export namespace $IRecipeTransferHandlerHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandlerHelper$Type = ($IRecipeTransferHandlerHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandlerHelper_ = $IRecipeTransferHandlerHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientConsumer" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientConsumer {

 "addItemStack"(arg0: $ItemStack$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>): $IIngredientConsumer
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"<I>(arg0: $ITypedIngredient$Type<(I)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$Type<($ITypedIngredient$Type<(any)>)>): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$Type): $IIngredientConsumer
}

export namespace $IIngredientConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConsumer$Type = ($IIngredientConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientConsumer_ = $IIngredientConsumer$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IUniversalRecipeTransferHandler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IUniversalRecipeTransferHandler<C extends $AbstractContainerMenu> {

 "getContainerClass"(): $Class<(any)>
 "transferRecipe"(arg0: C, arg1: any, arg2: $IRecipeSlotsView$Type, arg3: $Player$Type, arg4: boolean, arg5: boolean): $IRecipeTransferError
 "getMenuType"(): $Optional<($MenuType<(C)>)>
}

export namespace $IUniversalRecipeTransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUniversalRecipeTransferHandler$Type<C> = ($IUniversalRecipeTransferHandler<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUniversalRecipeTransferHandler_<C> = $IUniversalRecipeTransferHandler$Type<(C)>;
}}
declare module "packages/mezz/jei/api/runtime/$IBookmarkOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkOverlay {

 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getItemStackUnderMouse"(): $ItemStack
}

export namespace $IBookmarkOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookmarkOverlay$Type = ($IBookmarkOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookmarkOverlay_ = $IBookmarkOverlay$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiContainerHandler" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IGuiContainerHandler<T extends $AbstractContainerScreen<(any)>> {

 "getClickableIngredientUnderMouse"(arg0: T, arg1: double, arg2: double): $Optional<($IClickableIngredient<(any)>)>
 "getGuiExtraAreas"(arg0: T): $List<($Rect2i)>
 "getGuiClickableAreas"(arg0: T, arg1: double, arg2: double): $Collection<($IGuiClickableArea)>
}

export namespace $IGuiContainerHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiContainerHandler$Type<T> = ($IGuiContainerHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiContainerHandler_<T> = $IGuiContainerHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRecipeTransferError$Type extends $Enum<($IRecipeTransferError$Type)> {
static readonly "INTERNAL": $IRecipeTransferError$Type
static readonly "USER_FACING": $IRecipeTransferError$Type
static readonly "COSMETIC": $IRecipeTransferError$Type
readonly "allowsTransfer": boolean


public static "values"(): ($IRecipeTransferError$Type)[]
public static "valueOf"(arg0: string): $IRecipeTransferError$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type$Type = (("internal") | ("user_facing") | ("cosmetic")) | ($IRecipeTransferError$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError$Type_ = $IRecipeTransferError$Type$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMappings" {
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"

export interface $IJeiKeyMappings {

 "getShowRecipe"(): $IJeiKeyMapping
 "getShowUses"(): $IJeiKeyMapping
}

export namespace $IJeiKeyMappings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMappings$Type = ($IJeiKeyMappings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMappings_ = $IJeiKeyMappings$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeCatalystLookup {

 "get"<S>(arg0: $IIngredientType$Type<(S)>): $Stream<(S)>
 "get"(): $Stream<($ITypedIngredient<(any)>)>
 "getItemStack"(): $Stream<($ItemStack)>
 "includeHidden"(): $IRecipeCatalystLookup
}

export namespace $IRecipeCatalystLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystLookup$Type = ($IRecipeCatalystLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystLookup_ = $IRecipeCatalystLookup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientFilter" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientFilter {

 "setFilterText"(arg0: string): void
 "getFilterText"(): string
 "getFilteredItemStacks"(): $List<($ItemStack)>
 "getFilteredIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
}

export namespace $IIngredientFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientFilter$Type = ($IIngredientFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientFilter_ = $IIngredientFilter$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IRecipeLookup<R> {

 "get"(): $Stream<(R)>
 "includeHidden"(): $IRecipeLookup<(R)>
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeLookup<(R)>
}

export namespace $IRecipeLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLookup$Type<R> = ($IRecipeLookup<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLookup_<R> = $IRecipeLookup$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler" {
import {$IGhostIngredientHandler$Target, $IGhostIngredientHandler$Target$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IGhostIngredientHandler<T extends $Screen> {

 "getTargetsTyped"<I>(arg0: T, arg1: $ITypedIngredient$Type<(I)>, arg2: boolean): $List<($IGhostIngredientHandler$Target<(I)>)>
 "shouldHighlightTargets"(): boolean
 "onComplete"(): void
}

export namespace $IGhostIngredientHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Type<T> = ($IGhostIngredientHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler_<T> = $IGhostIngredientHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder" {
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IDrawableBuilder {

 "trim"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "build"(): $IDrawableStatic
 "addPadding"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "setTextureSize"(arg0: integer, arg1: integer): $IDrawableBuilder
 "buildAnimated"(arg0: integer, arg1: $IDrawableAnimated$StartDirection$Type, arg2: boolean): $IDrawableAnimated
 "buildAnimated"(arg0: $ITickTimer$Type, arg1: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
}

export namespace $IDrawableBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableBuilder$Type = ($IDrawableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableBuilder_ = $IDrawableBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable" {
import {$IIngredientConsumer, $IIngredientConsumer$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientConsumer"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {

 "isMouseOver"(arg0: double, arg1: double): boolean
 "setPosition"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
 "getTooltip"(): $List<($Component)>
 "createDisplayOverrides"(): $IIngredientConsumer
 "drawHoverOverlays"(arg0: $GuiGraphics$Type): void
 "clearDisplayOverrides"(): void
 "getAreaIncludingBackground"(): $Rect2i
/**
 * 
 * @deprecated
 */
 "getRect"(): $Rect2i
 "isEmpty"(): boolean
 "getSlotName"(): $Optional<(string)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getRole"(): $RecipeIngredientRole
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$Type = ($IRecipeSlotDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawable_ = $IRecipeSlotDrawable$Type;
}}
declare module "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPlugin" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipeManagerPlugin {

 "getRecipeTypes"<V>(arg0: $IFocus$Type<(V)>): $List<($RecipeType<(any)>)>
 "getRecipes"<T, V>(arg0: $IRecipeCategory$Type<(T)>, arg1: $IFocus$Type<(V)>): $List<(T)>
 "getRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>): $List<(T)>
}

export namespace $IRecipeManagerPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManagerPlugin$Type = ($IRecipeManagerPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManagerPlugin_ = $IRecipeManagerPlugin$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableStatic" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableStatic extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IDrawableStatic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableStatic$Type = ($IDrawableStatic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableStatic_ = $IDrawableStatic$Type;
}}
declare module "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPluginHelper" {
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipeManagerPluginHelper {

 "isRecipeCatalyst"(arg0: $RecipeType$Type<(any)>, arg1: $IFocus$Type<(any)>): boolean

(arg0: $RecipeType$Type<(any)>, arg1: $IFocus$Type<(any)>): boolean
}

export namespace $IRecipeManagerPluginHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManagerPluginHelper$Type = ($IRecipeManagerPluginHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManagerPluginHelper_ = $IRecipeManagerPluginHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/inputs/$IJeiUserInput" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiUserInput {

 "getModifiers"(): integer
 "getKey"(): $InputConstants$Key
 "is"(arg0: $KeyMapping$Type): boolean
 "is"(arg0: $IJeiKeyMapping$Type): boolean
 "isSimulate"(): boolean
}

export namespace $IJeiUserInput {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiUserInput$Type = ($IJeiUserInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiUserInput_ = $IJeiUserInput$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryDecorator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeCategoryDecorator<T> {

/**
 * 
 * @deprecated
 */
 "decorateExistingTooltips"(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IRecipeCategory$Type<(T)>, arg3: $IRecipeSlotsView$Type, arg4: double, arg5: double): $List<($Component)>
 "decorateTooltips"(arg0: $ITooltipBuilder$Type, arg1: T, arg2: $IRecipeCategory$Type<(T)>, arg3: $IRecipeSlotsView$Type, arg4: double, arg5: double): void
 "draw"(arg0: T, arg1: $IRecipeCategory$Type<(T)>, arg2: $IRecipeSlotsView$Type, arg3: $GuiGraphics$Type, arg4: double, arg5: double): void
}

export namespace $IRecipeCategoryDecorator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryDecorator$Type<T> = ($IRecipeCategoryDecorator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryDecorator_<T> = $IRecipeCategoryDecorator$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiProperties" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IGuiProperties {

 "getScreenWidth"(): integer
 "getScreenHeight"(): integer
 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getGuiYSize"(): integer
 "getGuiXSize"(): integer
 "getScreenClass"(): $Class<(any)>
}

export namespace $IGuiProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiProperties$Type = ($IGuiProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiProperties_ = $IGuiProperties$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IJeiConfigFile, $IJeiConfigFile$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigFile"

export interface $IJeiConfigManager {

 "getConfigFiles"(): $Collection<($IJeiConfigFile)>

(): $Collection<($IJeiConfigFile)>
}

export namespace $IJeiConfigManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigManager$Type = ($IJeiConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigManager_ = $IJeiConfigManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener" {
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager$IIngredientListener {

 "onIngredientsAdded"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
 "onIngredientsRemoved"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
}

export namespace $IIngredientManager$IIngredientListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$IIngredientListener$Type = ($IIngredientManager$IIngredientListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager$IIngredientListener_ = $IIngredientManager$IIngredientListener$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiAnvilRecipe {

 "getLeftInputs"(): $List<($ItemStack)>
 "getRightInputs"(): $List<($ItemStack)>
 "getOutputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
}

export namespace $IJeiAnvilRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiAnvilRecipe$Type = ($IJeiAnvilRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiAnvilRecipe_ = $IJeiAnvilRecipe$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeManager" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $ISubtypeManager {

 "getSubtypeInfo"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
 "getSubtypeInfo"<T>(arg0: $IIngredientTypeWithSubtypes$Type<(any), (T)>, arg1: T, arg2: $UidContext$Type): string
 "hasSubtypes"<T, B>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (T)>, arg1: T): boolean
}

export namespace $ISubtypeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeManager$Type = ($ISubtypeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeManager_ = $ISubtypeManager$Type;
}}
declare module "packages/mezz/jei/api/gui/placement/$IPlaceable" {
import {$VerticalAlignment, $VerticalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$VerticalAlignment"
import {$HorizontalAlignment, $HorizontalAlignment$Type} from "packages/mezz/jei/api/gui/placement/$HorizontalAlignment"

export interface $IPlaceable<THIS extends $IPlaceable<(THIS)>> {

 "setPosition"(arg0: integer, arg1: integer): THIS
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$Type, arg5: $VerticalAlignment$Type): THIS
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IPlaceable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlaceable$Type<THIS> = ($IPlaceable<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlaceable_<THIS> = $IPlaceable$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getWidth"(): integer
 "getHeight"(): integer
}

export namespace $IDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$Type = ($IDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawable_ = $IDrawable$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IClickableIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredient<T> {

 "getIngredient"(): T
/**
 * 
 * @deprecated
 */
 "getTypedIngredient"(): $ITypedIngredient<(T)>
 "getIngredientType"(): $IIngredientType<(T)>
 "getArea"(): $Rect2i
}

export namespace $IClickableIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredient$Type<T> = ($IClickableIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredient_<T> = $IClickableIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/helpers/$IPlatformFluidHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IPlatformFluidHelper<T> {

 "create"(arg0: $Fluid$Type, arg1: long): T
 "create"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): T
 "getFluidIngredientType"(): $IIngredientTypeWithSubtypes<($Fluid), (T)>
 "bucketVolume"(): long
}

export namespace $IPlatformFluidHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlatformFluidHelper$Type<T> = ($IPlatformFluidHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlatformFluidHelper_<T> = $IPlatformFluidHelper$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IScreenHelper" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IScreenHelper {

 "getClickableIngredientUnderMouse"(arg0: $Screen$Type, arg1: double, arg2: double): $Stream<($IClickableIngredient<(any)>)>
 "getGuiExclusionAreas"(arg0: $Screen$Type): $Stream<($Rect2i)>
 "getGuiProperties"<T extends $Screen>(arg0: T): $Optional<($IGuiProperties)>
/**
 * 
 * @deprecated
 */
 "getGhostIngredientHandler"<T extends $Screen>(arg0: T): $Optional<($IGhostIngredientHandler<(T)>)>
 "getGhostIngredientHandlers"<T extends $Screen>(arg0: T): $List<($IGhostIngredientHandler<(T)>)>
 "getGuiClickableArea"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: double, arg2: double): $Stream<($IGuiClickableArea)>
}

export namespace $IScreenHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHelper$Type = ($IScreenHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHelper_ = $IScreenHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ITooltipBuilder, $ITooltipBuilder$Type} from "packages/mezz/jei/api/gui/builder/$ITooltipBuilder"
import {$IRecipeTransferError$Type, $IRecipeTransferError$Type$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferError {

 "getType"(): $IRecipeTransferError$Type
 "getTooltip"(arg0: $ITooltipBuilder$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
 "getButtonHighlightColor"(): integer
 "getMissingCountHint"(): integer
 "showError"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void

(): $IRecipeTransferError$Type
}

export namespace $IRecipeTransferError {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type = ($IRecipeTransferError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError_ = $IRecipeTransferError$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientType<T> {

 "getIngredientClass"(): $Class<(any)>
 "castIngredient"(arg0: any): $Optional<(T)>
 "getUid"(): string

(): $Class<(any)>
}

export namespace $IIngredientType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$Type<T> = ($IIngredientType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientType_<T> = $IIngredientType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGhostIngredientHandler$Target<I> extends $Consumer<(I)> {

 "accept"(arg0: I): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(I)>
}

export namespace $IGhostIngredientHandler$Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Target$Type<I> = ($IGhostIngredientHandler$Target<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler$Target_<I> = $IGhostIngredientHandler$Target$Type<(I)>;
}}
