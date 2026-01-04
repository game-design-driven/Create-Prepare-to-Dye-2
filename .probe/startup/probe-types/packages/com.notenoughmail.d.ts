declare module "packages/com/notenoughmail/configjs/$Bindings" {
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Bindings {

constructor()

/**
 * Retrieves the enum value with the given name from the class of a given enum config
 */
public static "getOtherValueFromEnumConfig"<T extends $Enum<(T)>>(configValue: $ForgeConfigSpec$EnumValue$Type<(T)>, name: string): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bindings$Type = ($Bindings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bindings_ = $Bindings$Type;
}}
declare module "packages/com/notenoughmail/configjs/$ConfigEventJS" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$LongValue, $ForgeConfigSpec$LongValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue"
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export class $ConfigEventJS extends $EventJS {

constructor(builder: $ForgeConfigSpec$Builder$Type, type: string)

/**
 * Adds and returns a BooleanValue config
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value
 */
public "booleanValue"(name: string, defaultValue: boolean): $ForgeConfigSpec$BooleanValue
/**
 * Adds and returns an IntValue config
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value
 * @param min - The minimum allowable value
 * @param max - The maximum allowable value
 */
public "intValue"(name: string, defaultValue: integer, min: integer, max: integer): $ForgeConfigSpec$IntValue
/**
 * Adds and returns a LongValue config
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value
 * @param min - The minimum allowable value
 * @param max - The maximum allowable value
 */
public "longValue"(name: string, defaultValue: long, min: long, max: long): $ForgeConfigSpec$LongValue
/**
 * Adds and returns a DoubleValue config
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value
 * @param min - The minimum allowable value
 * @param max - The maximum allowable value
 */
public "doubleValue"(name: string, defaultValue: double, min: double, max: double): $ForgeConfigSpec$DoubleValue
/**
 * Sets the name of the config file
 * 
 * @param name - The name of the file, excluding .toml
 */
public "setName"(name: string): $ConfigEventJS
/**
 * Adds a comment to the config, can use multiple strings for multiple lines
 * 
 * @param comments - 
 */
public "comment"(...comments: (string)[]): $ConfigEventJS
/**
 * Swaps the current path with the path specified, paths can be joined with . to shift multiple times
 * 
 * @param path - The path to swap to
 */
public "swap"(path: string): $ConfigEventJS
/**
 * Moves the config right by a tab under the specified path, paths can be joined with . to shift multiple times
 * 
 * @param path - The path to move the config under
 */
public "push"(path: string): $ConfigEventJS
/**
 * Moves the config left by a tab
 */
public "pop"(): $ConfigEventJS
/**
 * Moves the config left by the specified amount of tabs
 * 
 * @param amount - The number of tabs to move the config by
 */
public "pop"(amount: integer): $ConfigEventJS
/**
 * Adds and returns a string config value
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value of the config option
 */
public "stringValue"(name: string, defaultValue: string): $ForgeConfigSpec$ConfigValue<(string)>
/**
 * Adds and returns a string config value option
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value of the config option
 * @param allowedValues - An array of strings, the values that are valid for this config option, should include the default value
 */
public "stringValue"(name: string, defaultValue: string, allowedValues: (string)[]): $ForgeConfigSpec$ConfigValue<(string)>
/**
 * Adds a returns a string config option with a validator for the configured value
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value of the config option
 * @param validator - The validator for the config value
 */
public "stringValueWithPredicate"(name: string, defaultValue: string, validator: $Predicate$Type<(string)>): $ForgeConfigSpec$ConfigValue<(string)>
/**
 * Adds and returns a string list config value option
 * 
 * @param name - The name of the config option
 * @param defaultValues - The default values of the config option
 * @param validator - The validator for the elements of the config's elements
 */
public "stringListValue"(name: string, defaultValues: (string)[], validator: $Predicate$Type<(string)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
/**
 * Adds and returns an EnumValue config
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value, must be included in enumValues
 * @param enumValues - A list of all allowed values
 */
public "enumValue"<T extends $Enum<(T)>>(name: string, defaultValue: string, enumValues: (string)[]): $ForgeConfigSpec$EnumValue<(any)>
/**
 * Adds and returns an EnumValue config, with the enum class being pulled from the provided default enum value
 * 
 * @param name - The name of the config option
 * @param defaultValue - The default value, must be an enum object
 */
public "enumValue"<T extends $Enum<(any)>>(name: string, defaultValue: T): $ForgeConfigSpec$EnumValue<(any)>
set "name"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigEventJS$Type = ($ConfigEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigEventJS_ = $ConfigEventJS$Type;
}}
