declare module "packages/org/json/$JSONPointer$Builder" {
import {$JSONPointer, $JSONPointer$Type} from "packages/org/json/$JSONPointer"

export class $JSONPointer$Builder {

constructor()

public "append"(arg0: integer): $JSONPointer$Builder
public "append"(arg0: string): $JSONPointer$Builder
public "build"(): $JSONPointer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONPointer$Builder$Type = ($JSONPointer$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONPointer$Builder_ = $JSONPointer$Builder$Type;
}}
declare module "packages/org/json/$JSONArray" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$JSONTokener, $JSONTokener$Type} from "packages/org/json/$JSONTokener"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JSONPointer, $JSONPointer$Type} from "packages/org/json/$JSONPointer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$JSONObject, $JSONObject$Type} from "packages/org/json/$JSONObject"

export class $JSONArray implements $Iterable<(any)> {

constructor(arg0: $Iterable$Type<(any)>)
constructor(arg0: $JSONArray$Type)
constructor(arg0: any)
constructor(arg0: integer)
constructor()
constructor(arg0: $JSONTokener$Type)
constructor(arg0: string)
constructor(arg0: $Collection$Type<(any)>)

public "remove"(arg0: integer): any
public "get"(arg0: integer): any
public "put"(arg0: float): $JSONArray
public "put"(arg0: integer): $JSONArray
public "put"(arg0: long): $JSONArray
public "put"(arg0: $Map$Type<(any), (any)>): $JSONArray
public "put"(arg0: integer, arg1: any): $JSONArray
public "put"(arg0: boolean): $JSONArray
public "put"(arg0: $Collection$Type<(any)>): $JSONArray
public "put"(arg0: double): $JSONArray
public "put"(arg0: integer, arg1: float): $JSONArray
public "put"(arg0: integer, arg1: integer): $JSONArray
public "put"(arg0: integer, arg1: long): $JSONArray
public "put"(arg0: integer, arg1: $Map$Type<(any), (any)>): $JSONArray
public "put"(arg0: any): $JSONArray
public "put"(arg0: integer, arg1: boolean): $JSONArray
public "put"(arg0: integer, arg1: $Collection$Type<(any)>): $JSONArray
public "put"(arg0: integer, arg1: double): $JSONArray
public "length"(): integer
public "toString"(arg0: integer): string
public "toString"(): string
public "getBoolean"(arg0: integer): boolean
public "getInt"(arg0: integer): integer
public "getLong"(arg0: integer): long
public "getFloat"(arg0: integer): float
public "getDouble"(arg0: integer): double
public "clear"(): void
public "isEmpty"(): boolean
public "join"(arg0: string): string
public "iterator"(): $Iterator<(any)>
public "toList"(): $List<(any)>
public "putAll"(arg0: $JSONArray$Type): $JSONArray
public "putAll"(arg0: $Iterable$Type<(any)>): $JSONArray
public "putAll"(arg0: $Collection$Type<(any)>): $JSONArray
public "putAll"(arg0: any): $JSONArray
public "write"(arg0: $Writer$Type): $Writer
public "write"(arg0: $Writer$Type, arg1: integer, arg2: integer): $Writer
public "query"(arg0: string): any
public "query"(arg0: $JSONPointer$Type): any
public "isNull"(arg0: integer): boolean
public "getNumber"(arg0: integer): number
public "opt"(arg0: integer): any
public "getString"(arg0: integer): string
public "getBigDecimal"(arg0: integer): $BigDecimal
public "getEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: integer): E
public "getJSONObject"(arg0: integer): $JSONObject
public "getJSONArray"(arg0: integer): $JSONArray
public "optBigDecimal"(arg0: integer, arg1: $BigDecimal$Type): $BigDecimal
public "optBigInteger"(arg0: integer, arg1: $BigInteger$Type): $BigInteger
public "optJSONArray"(arg0: integer): $JSONArray
public "optJSONObject"(arg0: integer): $JSONObject
public "toJSONObject"(arg0: $JSONArray$Type): $JSONObject
public "optEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: integer, arg2: E): E
public "optEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: integer): E
public "optBoolean"(arg0: integer): boolean
public "optBoolean"(arg0: integer, arg1: boolean): boolean
public "optDouble"(arg0: integer, arg1: double): double
public "optDouble"(arg0: integer): double
public "optFloat"(arg0: integer): float
public "optFloat"(arg0: integer, arg1: float): float
public "optInt"(arg0: integer): integer
public "optInt"(arg0: integer, arg1: integer): integer
public "optLong"(arg0: integer): long
public "optLong"(arg0: integer, arg1: long): long
public "optNumber"(arg0: integer, arg1: number): number
public "optNumber"(arg0: integer): number
public "optQuery"(arg0: string): any
public "optQuery"(arg0: $JSONPointer$Type): any
public "similar"(arg0: any): boolean
public "optString"(arg0: integer, arg1: string): string
public "optString"(arg0: integer): string
public "getBigInteger"(arg0: integer): $BigInteger
public "spliterator"(): $Spliterator<(any)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<any>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONArray$Type = ($JSONArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONArray_ = $JSONArray$Type;
}}
declare module "packages/org/json/$JSONTokener" {
import {$JSONException, $JSONException$Type} from "packages/org/json/$JSONException"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $JSONTokener {

constructor(arg0: string)
constructor(arg0: $InputStream$Type)
constructor(arg0: $Reader$Type)

public "toString"(): string
public "next"(): character
public "next"(arg0: integer): string
public "next"(arg0: character): character
public "end"(): boolean
public "back"(): void
public "more"(): boolean
public "nextString"(arg0: character): string
public "skipTo"(arg0: character): character
public "syntaxError"(arg0: string, arg1: $Throwable$Type): $JSONException
public "syntaxError"(arg0: string): $JSONException
public "nextClean"(): character
public static "dehexchar"(arg0: character): integer
public "nextTo"(arg0: string): string
public "nextTo"(arg0: character): string
public "nextValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONTokener$Type = ($JSONTokener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONTokener_ = $JSONTokener$Type;
}}
declare module "packages/org/json/$JSONPointer" {
import {$JSONPointer$Builder, $JSONPointer$Builder$Type} from "packages/org/json/$JSONPointer$Builder"
import {$List, $List$Type} from "packages/java/util/$List"

export class $JSONPointer {

constructor(arg0: $List$Type<(string)>)
constructor(arg0: string)

public "toString"(): string
public static "builder"(): $JSONPointer$Builder
public "queryFrom"(arg0: any): any
public "toURIFragment"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONPointer$Type = ($JSONPointer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONPointer_ = $JSONPointer$Type;
}}
declare module "packages/org/json/$JSONObject" {
import {$JSONArray, $JSONArray$Type} from "packages/org/json/$JSONArray"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"
import {$JSONTokener, $JSONTokener$Type} from "packages/org/json/$JSONTokener"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$JSONPointer, $JSONPointer$Type} from "packages/org/json/$JSONPointer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JSONObject {
static readonly "NULL": any

constructor(arg0: any)
constructor(arg0: any, ...arg1: (string)[])
constructor(arg0: string)
constructor(arg0: string, arg1: $Locale$Type)
constructor()
constructor(arg0: $JSONObject$Type, ...arg1: (string)[])
constructor(arg0: $JSONTokener$Type)
constructor(arg0: $Map$Type<(any), (any)>)

public "remove"(arg0: string): any
public "get"(arg0: string): any
public "put"(arg0: string, arg1: float): $JSONObject
public "put"(arg0: string, arg1: double): $JSONObject
public "put"(arg0: string, arg1: $Collection$Type<(any)>): $JSONObject
public "put"(arg0: string, arg1: boolean): $JSONObject
public "put"(arg0: string, arg1: any): $JSONObject
public "put"(arg0: string, arg1: $Map$Type<(any), (any)>): $JSONObject
public "put"(arg0: string, arg1: long): $JSONObject
public "put"(arg0: string, arg1: integer): $JSONObject
public "length"(): integer
public "toString"(): string
public "toString"(arg0: integer): string
public "append"(arg0: string, arg1: any): $JSONObject
public "getBoolean"(arg0: string): boolean
public "getInt"(arg0: string): integer
public "getLong"(arg0: string): long
public "getFloat"(arg0: string): float
public "getDouble"(arg0: string): double
public "clear"(): void
public static "wrap"(arg0: any): any
public "isEmpty"(): boolean
public "toMap"(): $Map<(string), (any)>
public "increment"(arg0: string): $JSONObject
public "write"(arg0: $Writer$Type): $Writer
public "write"(arg0: $Writer$Type, arg1: integer, arg2: integer): $Writer
public "keys"(): $Iterator<(string)>
public "keySet"(): $Set<(string)>
public "names"(): $JSONArray
public "query"(arg0: string): any
public "query"(arg0: $JSONPointer$Type): any
public "isNull"(arg0: string): boolean
public "getNumber"(arg0: string): number
public static "quote"(arg0: string): string
public static "quote"(arg0: string, arg1: $Writer$Type): $Writer
public "opt"(arg0: string): any
public "has"(arg0: string): boolean
public "getString"(arg0: string): string
public "getBigDecimal"(arg0: string): $BigDecimal
public "getEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: string): E
public static "getNames"(arg0: any): (string)[]
public static "getNames"(arg0: $JSONObject$Type): (string)[]
public static "valueToString"(arg0: any): string
public "getJSONObject"(arg0: string): $JSONObject
public static "doubleToString"(arg0: double): string
public "getJSONArray"(arg0: string): $JSONArray
public static "numberToString"(arg0: number): string
public "optBigDecimal"(arg0: string, arg1: $BigDecimal$Type): $BigDecimal
public "optBigInteger"(arg0: string, arg1: $BigInteger$Type): $BigInteger
public "optJSONArray"(arg0: string): $JSONArray
public "optJSONObject"(arg0: string): $JSONObject
public static "stringToValue"(arg0: string): any
public static "testValidity"(arg0: any): void
public "toJSONArray"(arg0: $JSONArray$Type): $JSONArray
public "accumulate"(arg0: string, arg1: any): $JSONObject
public "optEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: string): E
public "optEnum"<E extends $Enum<(E)>>(arg0: $Class$Type<(E)>, arg1: string, arg2: E): E
public "optBoolean"(arg0: string): boolean
public "optBoolean"(arg0: string, arg1: boolean): boolean
public "optDouble"(arg0: string, arg1: double): double
public "optDouble"(arg0: string): double
public "optFloat"(arg0: string, arg1: float): float
public "optFloat"(arg0: string): float
public "optInt"(arg0: string): integer
public "optInt"(arg0: string, arg1: integer): integer
public "optLong"(arg0: string, arg1: long): long
public "optLong"(arg0: string): long
public "optNumber"(arg0: string): number
public "optNumber"(arg0: string, arg1: number): number
public "putOnce"(arg0: string, arg1: any): $JSONObject
public "putOpt"(arg0: string, arg1: any): $JSONObject
public "optQuery"(arg0: string): any
public "optQuery"(arg0: $JSONPointer$Type): any
public "similar"(arg0: any): boolean
public "optString"(arg0: string, arg1: string): string
public "optString"(arg0: string): string
public "getBigInteger"(arg0: string): $BigInteger
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONObject$Type = ($JSONObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONObject_ = $JSONObject$Type;
}}
declare module "packages/org/json/$JSONException" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"

export class $JSONException extends $RuntimeException {

constructor(arg0: string)
constructor(arg0: string, arg1: $Throwable$Type)
constructor(arg0: $Throwable$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JSONException$Type = ($JSONException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JSONException_ = $JSONException$Type;
}}
