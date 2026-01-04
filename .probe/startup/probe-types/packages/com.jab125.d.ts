declare module "packages/com/jab125/mpuc/extension/$LevelSummaryExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelSummaryExtension {

 "mpuc$modpackUnavailable"(): boolean

(): boolean
}

export namespace $LevelSummaryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelSummaryExtension$Type = ($LevelSummaryExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelSummaryExtension_ = $LevelSummaryExtension$Type;
}}
declare module "packages/com/jab125/mpuc/api/$ModpackInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModpackInfo {

 "getModpackName"(): string
 "getModpackReleaseType"(): string
 "getModpackVersion"(): string
}

export namespace $ModpackInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModpackInfo$Type = ($ModpackInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModpackInfo_ = $ModpackInfo$Type;
}}
declare module "packages/com/jab125/mpuc/extension/$SimpleBrandingVersionExtension" {
import {$ModpackInfo, $ModpackInfo$Type} from "packages/com/jab125/mpuc/api/$ModpackInfo"

export interface $SimpleBrandingVersionExtension extends $ModpackInfo {

 "getModpackName"(): string
 "getModpackReleaseType"(): string
 "getModpackVersion"(): string
 "getModpackInfo"(): $ModpackInfo
 "setModpackInfo"(arg0: $ModpackInfo$Type): void
}

export namespace $SimpleBrandingVersionExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleBrandingVersionExtension$Type = ($SimpleBrandingVersionExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleBrandingVersionExtension_ = $SimpleBrandingVersionExtension$Type;
}}
