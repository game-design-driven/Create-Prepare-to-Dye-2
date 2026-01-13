declare module "packages/org/luaj/vm2/$LuaClosure" {
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$UpValue, $UpValue$Type} from "packages/org/luaj/vm2/$UpValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaClosure extends $LuaFunction {
readonly "p": $Prototype
 "upValues": ($UpValue)[]
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

constructor(arg0: $Prototype$Type, arg1: $LuaValue$Type)

public "invoke"(arg0: $Varargs$Type): $Varargs
public "name"(): string
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
public "checkclosure"(): $LuaClosure
public "initupvalue1"(arg0: $LuaValue$Type): void
public "optclosure"(arg0: $LuaClosure$Type): $LuaClosure
public "tojstring"(): string
public "isclosure"(): boolean
public "onInvoke"(arg0: $Varargs$Type): $Varargs
get "closure"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaClosure$Type = ($LuaClosure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaClosure_ = $LuaClosure$Type;
}}
declare module "packages/org/luaj/vm2/$Globals$Undumper" {
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $Globals$Undumper {

 "undump"(arg0: $InputStream$Type, arg1: string): $Prototype

(arg0: $InputStream$Type, arg1: string): $Prototype
}

export namespace $Globals$Undumper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Globals$Undumper$Type = ($Globals$Undumper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Globals$Undumper_ = $Globals$Undumper$Type;
}}
declare module "packages/org/luaj/vm2/$LocVars" {
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LocVars {
 "varname": $LuaString
 "startpc": integer
 "endpc": integer

constructor(arg0: $LuaString$Type, arg1: integer, arg2: integer)

public "tojstring"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocVars$Type = ($LocVars);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocVars_ = $LocVars$Type;
}}
declare module "packages/org/luaj/vm2/$LuaNumber" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Buffer, $Buffer$Type} from "packages/org/luaj/vm2/$Buffer"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LuaNumber extends $LuaValue {
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

constructor()

public "type"(): integer
public "concat"(arg0: $LuaValue$Type): $LuaValue
public "concat"(arg0: $Buffer$Type): $Buffer
public "typename"(): string
public "checknumber"(arg0: string): $LuaNumber
public "checknumber"(): $LuaNumber
public "getmetatable"(): $LuaValue
public "isnumber"(): boolean
public "isstring"(): boolean
public "optnumber"(arg0: $LuaNumber$Type): $LuaNumber
public "tonumber"(): $LuaValue
public "concatTo"(arg0: $LuaNumber$Type): $LuaValue
public "concatTo"(arg0: $LuaString$Type): $LuaValue
get "metatable"(): $LuaValue
get "number"(): boolean
get "string"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaNumber$Type = ($LuaNumber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaNumber_ = $LuaNumber$Type;
}}
declare module "packages/org/luaj/vm2/$Buffer" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $Buffer {

constructor(arg0: $LuaValue$Type)
constructor(arg0: integer)
constructor()

public "value"(): $LuaValue
public "toString"(): string
public "append"(arg0: byte): $Buffer
public "append"(arg0: $LuaValue$Type): $Buffer
public "append"(arg0: $LuaString$Type): $Buffer
public "append"(arg0: string): $Buffer
public "prepend"(arg0: $LuaString$Type): $Buffer
public "tojstring"(): string
public "tostring"(): $LuaString
public "concatTo"(arg0: $LuaNumber$Type): $Buffer
public "concatTo"(arg0: $LuaValue$Type): $Buffer
public "concatTo"(arg0: $LuaString$Type): $Buffer
public "setvalue"(arg0: $LuaValue$Type): $Buffer
public "makeroom"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Buffer$Type = ($Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Buffer_ = $Buffer$Type;
}}
declare module "packages/org/luaj/vm2/lib/$PackageLib$preload_searcher" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$PackageLib, $PackageLib$Type} from "packages/org/luaj/vm2/lib/$PackageLib"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$VarArgFunction, $VarArgFunction$Type} from "packages/org/luaj/vm2/lib/$VarArgFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $PackageLib$preload_searcher extends $VarArgFunction {
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

constructor(arg0: $PackageLib$Type)

public "invoke"(arg0: $Varargs$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageLib$preload_searcher$Type = ($PackageLib$preload_searcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageLib$preload_searcher_ = $PackageLib$preload_searcher$Type;
}}
declare module "packages/org/luaj/vm2/$UpValue" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"

export class $UpValue {

constructor(arg0: ($LuaValue$Type)[], arg1: integer)

public "toString"(): string
public "getValue"(): $LuaValue
public "close"(): void
public "setValue"(arg0: $LuaValue$Type): void
public "tojstring"(): string
get "value"(): $LuaValue
set "value"(value: $LuaValue$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpValue$Type = ($UpValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpValue_ = $UpValue$Type;
}}
declare module "packages/org/luaj/vm2/$LuaString" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaInteger, $LuaInteger$Type} from "packages/org/luaj/vm2/$LuaInteger"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$Buffer, $Buffer$Type} from "packages/org/luaj/vm2/$Buffer"
import {$DataOutputStream, $DataOutputStream$Type} from "packages/java/io/$DataOutputStream"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"

export class $LuaString extends $LuaValue {
static "s_metatable": $LuaValue
readonly "m_bytes": (byte)[]
readonly "m_offset": integer
readonly "m_length": integer
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


public "add"(arg0: double): $LuaValue
public "add"(arg0: integer): $LuaValue
public "add"(arg0: $LuaValue$Type): $LuaValue
public "type"(): integer
public "equals"(arg0: any): boolean
public static "equals"(arg0: $LuaString$Type, arg1: integer, arg2: $LuaString$Type, arg3: integer, arg4: integer): boolean
public static "equals"(arg0: (byte)[], arg1: integer, arg2: (byte)[], arg3: integer, arg4: integer): boolean
public "length"(): integer
public "hashCode"(): integer
public static "hashCode"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public "pow"(arg0: integer): $LuaValue
public "pow"(arg0: double): $LuaValue
public "pow"(arg0: $LuaValue$Type): $LuaValue
public "indexOf"(arg0: $LuaString$Type, arg1: integer): integer
public "indexOf"(arg0: byte, arg1: integer): integer
public static "valueOf"(arg0: string): $LuaString
public static "valueOf"(arg0: (byte)[], arg1: integer, arg2: integer): $LuaString
public static "valueOf"(arg0: (character)[], arg1: integer, arg2: integer): $LuaString
public static "valueOf"(arg0: (byte)[]): $LuaString
public static "valueOf"(arg0: (character)[]): $LuaString
public "charAt"(arg0: integer): integer
public "lastIndexOf"(arg0: $LuaString$Type): integer
public "substring"(arg0: integer, arg1: integer): $LuaString
public "len"(): $LuaValue
public "concat"(arg0: $LuaValue$Type): $LuaValue
public "concat"(arg0: $Buffer$Type): $Buffer
public "write"(arg0: $DataOutputStream$Type, arg1: integer, arg2: integer): void
public "mod"(arg0: integer): $LuaValue
public "mod"(arg0: $LuaValue$Type): $LuaValue
public "mod"(arg0: double): $LuaValue
public "typename"(): string
public "eq"(arg0: $LuaValue$Type): $LuaValue
public "lt"(arg0: $LuaValue$Type): $LuaValue
public "sub"(arg0: integer): $LuaValue
public "sub"(arg0: $LuaValue$Type): $LuaValue
public "sub"(arg0: double): $LuaValue
public "copyInto"(arg0: integer, arg1: (byte)[], arg2: integer, arg3: integer): void
public "mul"(arg0: $LuaValue$Type): $LuaValue
public "mul"(arg0: integer): $LuaValue
public "mul"(arg0: double): $LuaValue
public "toInputStream"(): $InputStream
public "div"(arg0: $LuaValue$Type): $LuaValue
public "div"(arg0: integer): $LuaValue
public "div"(arg0: double): $LuaValue
public "neg"(): $LuaValue
public static "decodeAsUtf8"(arg0: (byte)[], arg1: integer, arg2: integer): string
public static "lengthAsUtf8"(arg0: (character)[]): integer
public static "encodeToUtf8"(arg0: (character)[], arg1: integer, arg2: (byte)[], arg3: integer): integer
public "printToStream"(arg0: $PrintStream$Type): void
public "checkdouble"(): double
public "checkinteger"(): $LuaInteger
public "checknumber"(): $LuaNumber
public "checknumber"(arg0: string): $LuaNumber
public "checkjstring"(): string
public "checkstring"(): $LuaString
public "getmetatable"(): $LuaValue
public "isValidUtf8"(): boolean
public "indexOfAny"(arg0: $LuaString$Type): integer
public "todouble"(): double
public "isnumber"(): boolean
public "isstring"(): boolean
public "optdouble"(arg0: double): double
public "optint"(arg0: integer): integer
public "optinteger"(arg0: $LuaInteger$Type): $LuaInteger
public "optlong"(arg0: long): long
public "optnumber"(arg0: $LuaNumber$Type): $LuaNumber
public "optjstring"(arg0: string): string
public "optstring"(arg0: $LuaString$Type): $LuaString
public "checkint"(): integer
public "checklong"(): long
public "tobyte"(): byte
public "tochar"(): character
public "tofloat"(): float
public "toint"(): integer
public "tolong"(): long
public "tojstring"(): string
public "toshort"(): short
public "isint"(): boolean
public "islong"(): boolean
public "tonumber"(arg0: integer): $LuaValue
public "tonumber"(): $LuaValue
public "tostring"(): $LuaValue
public "rawlen"(): integer
public "eq_b"(arg0: $LuaValue$Type): boolean
public "raweq"(arg0: $LuaString$Type): boolean
public "raweq"(arg0: $LuaValue$Type): boolean
public "subFrom"(arg0: double): $LuaValue
public "powWith"(arg0: integer): $LuaValue
public "powWith"(arg0: double): $LuaValue
public "divInto"(arg0: double): $LuaValue
public "modFrom"(arg0: double): $LuaValue
public "lt_b"(arg0: double): boolean
public "lt_b"(arg0: $LuaValue$Type): boolean
public "lt_b"(arg0: integer): boolean
public "lteq"(arg0: $LuaValue$Type): $LuaValue
public "lteq_b"(arg0: double): boolean
public "lteq_b"(arg0: $LuaValue$Type): boolean
public "lteq_b"(arg0: integer): boolean
public "gt_b"(arg0: integer): boolean
public "gt_b"(arg0: $LuaValue$Type): boolean
public "gt_b"(arg0: double): boolean
public "gteq"(arg0: $LuaValue$Type): $LuaValue
public "gteq_b"(arg0: $LuaValue$Type): boolean
public "gteq_b"(arg0: double): boolean
public "gteq_b"(arg0: integer): boolean
public "strcmp"(arg0: $LuaString$Type): integer
public "strcmp"(arg0: $LuaValue$Type): integer
public "concatTo"(arg0: $LuaNumber$Type): $LuaValue
public "concatTo"(arg0: $LuaString$Type): $LuaValue
public "strvalue"(): $LuaString
public static "valueUsing"(arg0: (byte)[]): $LuaString
public static "valueUsing"(arg0: (byte)[], arg1: integer, arg2: integer): $LuaString
public "luaByte"(arg0: integer): integer
public "scannumber"(): double
public "scannumber"(arg0: integer): double
public "gt"(arg0: $LuaValue$Type): $LuaValue
get "metatable"(): $LuaValue
get "validUtf8"(): boolean
get "number"(): boolean
get "string"(): boolean
get "int"(): boolean
get "long"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaString$Type = ($LuaString);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaString_ = $LuaString$Type;
}}
declare module "packages/org/luaj/vm2/lib/$PackageLib$lua_searcher" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$PackageLib, $PackageLib$Type} from "packages/org/luaj/vm2/lib/$PackageLib"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$VarArgFunction, $VarArgFunction$Type} from "packages/org/luaj/vm2/lib/$VarArgFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $PackageLib$lua_searcher extends $VarArgFunction {
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

constructor(arg0: $PackageLib$Type)

public "invoke"(arg0: $Varargs$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageLib$lua_searcher$Type = ($PackageLib$lua_searcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageLib$lua_searcher_ = $PackageLib$lua_searcher$Type;
}}
declare module "packages/org/luaj/vm2/$Upvaldesc" {
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $Upvaldesc {
 "name": $LuaString
readonly "instack": boolean
readonly "idx": short

constructor(arg0: $LuaString$Type, arg1: boolean, arg2: integer)

public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Upvaldesc$Type = ($Upvaldesc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Upvaldesc_ = $Upvaldesc$Type;
}}
declare module "packages/org/luaj/vm2/lib/$LibFunction" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LibFunction extends $LuaFunction {
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


public "invoke"(arg0: $Varargs$Type): $Varargs
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type, arg3: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
public "tojstring"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LibFunction$Type = ($LibFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LibFunction_ = $LibFunction$Type;
}}
declare module "packages/org/luaj/vm2/$LuaInteger" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LuaInteger extends $LuaNumber {
readonly "v": integer
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


public "add"(arg0: $LuaValue$Type): $LuaValue
public "add"(arg0: double): $LuaValue
public "add"(arg0: integer): $LuaValue
public "equals"(arg0: any): boolean
public static "hashCode"(arg0: integer): integer
public "hashCode"(): integer
public "pow"(arg0: integer): $LuaValue
public "pow"(arg0: double): $LuaValue
public "pow"(arg0: $LuaValue$Type): $LuaValue
public static "valueOf"(arg0: integer): $LuaInteger
public static "valueOf"(arg0: long): $LuaNumber
public "mod"(arg0: integer): $LuaValue
public "mod"(arg0: double): $LuaValue
public "mod"(arg0: $LuaValue$Type): $LuaValue
public "eq"(arg0: $LuaValue$Type): $LuaValue
public "lt"(arg0: integer): $LuaValue
public "lt"(arg0: double): $LuaValue
public "lt"(arg0: $LuaValue$Type): $LuaValue
public "sub"(arg0: integer): $LuaValue
public "sub"(arg0: double): $LuaValue
public "sub"(arg0: $LuaValue$Type): $LuaValue
public "mul"(arg0: $LuaValue$Type): $LuaValue
public "mul"(arg0: double): $LuaValue
public "mul"(arg0: integer): $LuaValue
public "div"(arg0: integer): $LuaValue
public "div"(arg0: $LuaValue$Type): $LuaValue
public "div"(arg0: double): $LuaValue
public "neg"(): $LuaValue
public "checkdouble"(): double
public "checkinteger"(): $LuaInteger
public "checkjstring"(): string
public "checkstring"(): $LuaString
public "todouble"(): double
public "isstring"(): boolean
public "optdouble"(arg0: double): double
public "optint"(arg0: integer): integer
public "optinteger"(arg0: $LuaInteger$Type): $LuaInteger
public "optlong"(arg0: long): long
public "optjstring"(arg0: string): string
public "optstring"(arg0: $LuaString$Type): $LuaString
public "checkint"(): integer
public "checklong"(): long
public "tobyte"(): byte
public "tochar"(): character
public "tofloat"(): float
public "toint"(): integer
public "tolong"(): long
public "tojstring"(): string
public "toshort"(): short
public "isint"(): boolean
public "isinttype"(): boolean
public "islong"(): boolean
public "tostring"(): $LuaValue
public "eq_b"(arg0: $LuaValue$Type): boolean
public "raweq"(arg0: integer): boolean
public "raweq"(arg0: $LuaValue$Type): boolean
public "raweq"(arg0: double): boolean
public "subFrom"(arg0: double): $LuaValue
public "subFrom"(arg0: integer): $LuaValue
public "powWith"(arg0: double): $LuaValue
public "powWith"(arg0: integer): $LuaValue
public "divInto"(arg0: double): $LuaValue
public "modFrom"(arg0: double): $LuaValue
public "lt_b"(arg0: double): boolean
public "lt_b"(arg0: $LuaValue$Type): boolean
public "lt_b"(arg0: integer): boolean
public "lteq"(arg0: $LuaValue$Type): $LuaValue
public "lteq"(arg0: double): $LuaValue
public "lteq"(arg0: integer): $LuaValue
public "lteq_b"(arg0: double): boolean
public "lteq_b"(arg0: integer): boolean
public "lteq_b"(arg0: $LuaValue$Type): boolean
public "gt_b"(arg0: $LuaValue$Type): boolean
public "gt_b"(arg0: double): boolean
public "gt_b"(arg0: integer): boolean
public "gteq"(arg0: integer): $LuaValue
public "gteq"(arg0: double): $LuaValue
public "gteq"(arg0: $LuaValue$Type): $LuaValue
public "gteq_b"(arg0: double): boolean
public "gteq_b"(arg0: integer): boolean
public "gteq_b"(arg0: $LuaValue$Type): boolean
public "strcmp"(arg0: $LuaString$Type): integer
public "strvalue"(): $LuaString
public "gt"(arg0: $LuaValue$Type): $LuaValue
public "gt"(arg0: double): $LuaValue
public "gt"(arg0: integer): $LuaValue
get "string"(): boolean
get "int"(): boolean
get "inttype"(): boolean
get "long"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaInteger$Type = ($LuaInteger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaInteger_ = $LuaInteger$Type;
}}
declare module "packages/org/luaj/vm2/$Metatable" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaTable$Slot, $LuaTable$Slot$Type} from "packages/org/luaj/vm2/$LuaTable$Slot"

export interface $Metatable {

 "wrap"(arg0: $LuaValue$Type): $LuaValue
 "entry"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaTable$Slot
 "useWeakKeys"(): boolean
 "useWeakValues"(): boolean
 "toLuaValue"(): $LuaValue
 "arrayget"(arg0: ($LuaValue$Type)[], arg1: integer): $LuaValue
}

export namespace $Metatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metatable$Type = ($Metatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metatable_ = $Metatable$Type;
}}
declare module "packages/org/luaj/vm2/lib/$ResourceFinder" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $ResourceFinder {

 "findResource"(arg0: string): $InputStream

(arg0: string): $InputStream
}

export namespace $ResourceFinder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceFinder$Type = ($ResourceFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceFinder_ = $ResourceFinder$Type;
}}
declare module "packages/org/luaj/vm2/lib/$TwoArgFunction" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LibFunction, $LibFunction$Type} from "packages/org/luaj/vm2/lib/$LibFunction"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $TwoArgFunction extends $LibFunction {
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

constructor()

public "invoke"(arg0: $Varargs$Type): $Varargs
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoArgFunction$Type = ($TwoArgFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoArgFunction_ = $TwoArgFunction$Type;
}}
declare module "packages/org/luaj/vm2/$LuaThread" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$Globals, $Globals$Type} from "packages/org/luaj/vm2/$Globals"
import {$LuaThread$State, $LuaThread$State$Type} from "packages/org/luaj/vm2/$LuaThread$State"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaThread extends $LuaValue {
static "s_metatable": $LuaValue
static "coroutine_count": integer
static "thread_orphan_check_interval": long
static readonly "STATUS_INITIAL": integer
static readonly "STATUS_SUSPENDED": integer
static readonly "STATUS_RUNNING": integer
static readonly "STATUS_NORMAL": integer
static readonly "STATUS_DEAD": integer
static readonly "STATUS_NAMES": (string)[]
readonly "state": $LuaThread$State
static readonly "MAX_CALLSTACK": integer
 "callstack": any
readonly "globals": $Globals
 "errorfunc": $LuaValue
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

constructor(arg0: $Globals$Type)
constructor(arg0: $Globals$Type, arg1: $LuaValue$Type)

public "type"(): integer
public "resume"(arg0: $Varargs$Type): $Varargs
public "typename"(): string
public "checkthread"(): $LuaThread
public "getmetatable"(): $LuaValue
public "getStatus"(): string
public "isMainThread"(): boolean
public "isthread"(): boolean
public "optthread"(arg0: $LuaThread$Type): $LuaThread
get "metatable"(): $LuaValue
get "status"(): string
get "mainThread"(): boolean
get "thread"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaThread$Type = ($LuaThread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaThread_ = $LuaThread$Type;
}}
declare module "packages/org/luaj/vm2/lib/$DebugLib$NameWhat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugLib$NameWhat {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugLib$NameWhat$Type = ($DebugLib$NameWhat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugLib$NameWhat_ = $DebugLib$NameWhat$Type;
}}
declare module "packages/org/luaj/vm2/$LuaError" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$RuntimeException, $RuntimeException$Type} from "packages/java/lang/$RuntimeException"

export class $LuaError extends $RuntimeException {

constructor(arg0: string, arg1: integer)
constructor(arg0: $Throwable$Type)
constructor(arg0: $LuaValue$Type)
constructor(arg0: string)

public "getCause"(): $Throwable
public "getMessage"(): string
public "getMessageObject"(): $LuaValue
get "cause"(): $Throwable
get "message"(): string
get "messageObject"(): $LuaValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaError$Type = ($LuaError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaError_ = $LuaError$Type;
}}
declare module "packages/org/luaj/vm2/$LuaValue" {
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LuaClosure, $LuaClosure$Type} from "packages/org/luaj/vm2/$LuaClosure"
import {$Globals, $Globals$Type} from "packages/org/luaj/vm2/$Globals"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LuaThread, $LuaThread$Type} from "packages/org/luaj/vm2/$LuaThread"
import {$LuaUserdata, $LuaUserdata$Type} from "packages/org/luaj/vm2/$LuaUserdata"
import {$LuaInteger, $LuaInteger$Type} from "packages/org/luaj/vm2/$LuaInteger"
import {$Buffer, $Buffer$Type} from "packages/org/luaj/vm2/$Buffer"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaValue extends $Varargs {
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

constructor()

public "invoke"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $Varargs$Type): $Varargs
public "invoke"(arg0: $LuaValue$Type, arg1: $Varargs$Type): $Varargs
public "invoke"(arg0: $Varargs$Type): $Varargs
public "invoke"(): $Varargs
public "invoke"(arg0: ($LuaValue$Type)[]): $Varargs
public "invoke"(arg0: ($LuaValue$Type)[], arg1: $Varargs$Type): $Varargs
public "add"(arg0: integer): $LuaValue
public "add"(arg0: double): $LuaValue
public "add"(arg0: $LuaValue$Type): $LuaValue
public "get"(arg0: string): $LuaValue
public "get"(arg0: integer): $LuaValue
public "get"(arg0: $LuaValue$Type): $LuaValue
public "type"(): integer
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "method"(arg0: string, arg1: $LuaValue$Type): $LuaValue
public "method"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "method"(arg0: string, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "method"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "method"(arg0: string): $LuaValue
public "method"(arg0: $LuaValue$Type): $LuaValue
public "pow"(arg0: double): $LuaValue
public "pow"(arg0: integer): $LuaValue
public "pow"(arg0: $LuaValue$Type): $LuaValue
public "load"(arg0: $LuaValue$Type): $LuaValue
public static "valueOf"(arg0: integer): $LuaInteger
public static "valueOf"(arg0: (byte)[]): $LuaString
public static "valueOf"(arg0: (byte)[], arg1: integer, arg2: integer): $LuaString
public static "valueOf"(arg0: string): $LuaString
public static "valueOf"(arg0: double): $LuaNumber
public static "valueOf"(arg0: boolean): $LuaBoolean
public "next"(arg0: $LuaValue$Type): $Varargs
public "len"(): $LuaValue
public "buffer"(): $Buffer
public "concat"(arg0: $Buffer$Type): $Buffer
public "concat"(arg0: $LuaValue$Type): $LuaValue
public "arg"(arg0: integer): $LuaValue
public "set"(arg0: string, arg1: integer): void
public "set"(arg0: string, arg1: string): void
public "set"(arg0: integer, arg1: $LuaValue$Type): void
public "set"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public "set"(arg0: integer, arg1: string): void
public "set"(arg0: string, arg1: $LuaValue$Type): void
public "set"(arg0: string, arg1: double): void
public "mod"(arg0: double): $LuaValue
public "mod"(arg0: $LuaValue$Type): $LuaValue
public "mod"(arg0: integer): $LuaValue
public "typename"(): string
public "eq"(arg0: $LuaValue$Type): $LuaValue
public "lt"(arg0: integer): $LuaValue
public "lt"(arg0: double): $LuaValue
public "lt"(arg0: $LuaValue$Type): $LuaValue
public static "error"(arg0: string): $LuaValue
public "or"(arg0: $LuaValue$Type): $LuaValue
public "sub"(arg0: integer): $LuaValue
public "sub"(arg0: $LuaValue$Type): $LuaValue
public "sub"(arg0: double): $LuaValue
public "and"(arg0: $LuaValue$Type): $LuaValue
public "not"(): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type): $LuaValue
public "call"(arg0: string): $LuaValue
public "narg"(): integer
public "mul"(arg0: $LuaValue$Type): $LuaValue
public "mul"(arg0: double): $LuaValue
public "mul"(arg0: integer): $LuaValue
public "arg1"(): $LuaValue
public "div"(arg0: integer): $LuaValue
public "div"(arg0: $LuaValue$Type): $LuaValue
public "div"(arg0: double): $LuaValue
public "neg"(): $LuaValue
public "optfunction"(arg0: $LuaFunction$Type): $LuaFunction
public "optuserdata"(arg0: any): any
public "optuserdata"(arg0: $Class$Type<(any)>, arg1: any): any
public "checkboolean"(): boolean
public "checkclosure"(): $LuaClosure
public "checkdouble"(): double
public "checkfunction"(): $LuaFunction
public "checkinteger"(): $LuaInteger
public "checknumber"(): $LuaNumber
public "checknumber"(arg0: string): $LuaNumber
public "checkjstring"(): string
public "checkstring"(): $LuaString
public "checkthread"(): $LuaThread
public "checkuserdata"(arg0: $Class$Type<(any)>): any
public "checkuserdata"(): any
public "checknotnil"(): $LuaValue
public "checkglobals"(): $Globals
public "getmetatable"(): $LuaValue
public "setmetatable"(arg0: $LuaValue$Type): $LuaValue
public "invokemethod"(arg0: $LuaValue$Type, arg1: ($LuaValue$Type)[]): $Varargs
public "invokemethod"(arg0: string): $Varargs
public "invokemethod"(arg0: $LuaValue$Type): $Varargs
public "invokemethod"(arg0: string, arg1: $Varargs$Type): $Varargs
public "invokemethod"(arg0: $LuaValue$Type, arg1: $Varargs$Type): $Varargs
public "invokemethod"(arg0: string, arg1: ($LuaValue$Type)[]): $Varargs
public "strongvalue"(): $LuaValue
public "initupvalue1"(arg0: $LuaValue$Type): void
public static "listOf"(arg0: ($LuaValue$Type)[], arg1: $Varargs$Type): $LuaTable
public static "listOf"(arg0: ($LuaValue$Type)[]): $LuaTable
public "todouble"(): double
public "isnil"(): boolean
public "isfunction"(): boolean
public "isnumber"(): boolean
public "isstring"(): boolean
public "istable"(): boolean
public "isthread"(): boolean
public "isuserdata"(arg0: $Class$Type<(any)>): boolean
public "isuserdata"(): boolean
public "optboolean"(arg0: boolean): boolean
public "optclosure"(arg0: $LuaClosure$Type): $LuaClosure
public "optdouble"(arg0: double): double
public "optint"(arg0: integer): integer
public "optinteger"(arg0: $LuaInteger$Type): $LuaInteger
public "optlong"(arg0: long): long
public "optnumber"(arg0: $LuaNumber$Type): $LuaNumber
public "optjstring"(arg0: string): string
public "optstring"(arg0: $LuaString$Type): $LuaString
public "opttable"(arg0: $LuaTable$Type): $LuaTable
public "optthread"(arg0: $LuaThread$Type): $LuaThread
public "optvalue"(arg0: $LuaValue$Type): $LuaValue
public "checkint"(): integer
public "checklong"(): long
public "checktable"(): $LuaTable
public "toboolean"(): boolean
public "tobyte"(): byte
public "tochar"(): character
public "tofloat"(): float
public "toint"(): integer
public "tolong"(): long
public "tojstring"(): string
public "toshort"(): short
public "touserdata"(): any
public "touserdata"(arg0: $Class$Type<(any)>): any
public "subargs"(arg0: integer): $Varargs
public static "argerror"(arg0: integer, arg1: string): $LuaValue
public "isboolean"(): boolean
public "isclosure"(): boolean
public "isint"(): boolean
public "isinttype"(): boolean
public "islong"(): boolean
public "tonumber"(): $LuaValue
public "tostring"(): $LuaValue
public "isvalidkey"(): boolean
public static "assert_"(arg0: boolean, arg1: string): void
public "rawget"(arg0: string): $LuaValue
public "rawget"(arg0: integer): $LuaValue
public "rawget"(arg0: $LuaValue$Type): $LuaValue
public "rawset"(arg0: integer, arg1: $LuaValue$Type): void
public "rawset"(arg0: string, arg1: double): void
public "rawset"(arg0: integer, arg1: string): void
public "rawset"(arg0: string, arg1: $LuaValue$Type): void
public "rawset"(arg0: string, arg1: integer): void
public "rawset"(arg0: string, arg1: string): void
public "rawset"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public "rawsetlist"(arg0: integer, arg1: $Varargs$Type): void
public "presize"(arg0: integer): void
public "inext"(arg0: $LuaValue$Type): $Varargs
public "rawlen"(): integer
public "eq_b"(arg0: $LuaValue$Type): boolean
public "neq"(arg0: $LuaValue$Type): $LuaValue
public "neq_b"(arg0: $LuaValue$Type): boolean
public "raweq"(arg0: $LuaString$Type): boolean
public "raweq"(arg0: double): boolean
public "raweq"(arg0: integer): boolean
public "raweq"(arg0: $LuaUserdata$Type): boolean
public "raweq"(arg0: $LuaValue$Type): boolean
public static "eqmtcall"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type, arg3: $LuaValue$Type): boolean
public "subFrom"(arg0: integer): $LuaValue
public "subFrom"(arg0: double): $LuaValue
public "powWith"(arg0: double): $LuaValue
public "powWith"(arg0: integer): $LuaValue
public "divInto"(arg0: double): $LuaValue
public "modFrom"(arg0: double): $LuaValue
public "lt_b"(arg0: $LuaValue$Type): boolean
public "lt_b"(arg0: double): boolean
public "lt_b"(arg0: integer): boolean
public "lteq"(arg0: integer): $LuaValue
public "lteq"(arg0: $LuaValue$Type): $LuaValue
public "lteq"(arg0: double): $LuaValue
public "lteq_b"(arg0: $LuaValue$Type): boolean
public "lteq_b"(arg0: integer): boolean
public "lteq_b"(arg0: double): boolean
public "gt_b"(arg0: $LuaValue$Type): boolean
public "gt_b"(arg0: double): boolean
public "gt_b"(arg0: integer): boolean
public "gteq"(arg0: double): $LuaValue
public "gteq"(arg0: $LuaValue$Type): $LuaValue
public "gteq"(arg0: integer): $LuaValue
public "gteq_b"(arg0: double): boolean
public "gteq_b"(arg0: integer): boolean
public "gteq_b"(arg0: $LuaValue$Type): boolean
public "comparemt"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "strcmp"(arg0: $LuaValue$Type): integer
public "strcmp"(arg0: $LuaString$Type): integer
public "concatTo"(arg0: $LuaString$Type): $LuaValue
public "concatTo"(arg0: $LuaNumber$Type): $LuaValue
public "concatTo"(arg0: $LuaValue$Type): $LuaValue
public "concatmt"(arg0: $LuaValue$Type): $LuaValue
public "testfor_b"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): boolean
public "strvalue"(): $LuaString
public static "tableOf"(arg0: ($LuaValue$Type)[]): $LuaTable
public static "tableOf"(arg0: ($LuaValue$Type)[], arg1: ($LuaValue$Type)[]): $LuaTable
public static "tableOf"(arg0: ($LuaValue$Type)[], arg1: ($LuaValue$Type)[], arg2: $Varargs$Type): $LuaTable
public static "tableOf"(): $LuaTable
public static "tableOf"(arg0: $Varargs$Type, arg1: integer): $LuaTable
public static "tableOf"(arg0: integer, arg1: integer): $LuaTable
public static "userdataOf"(arg0: any, arg1: $LuaValue$Type): $LuaUserdata
public static "userdataOf"(arg0: any): $LuaUserdata
public "metatag"(arg0: $LuaValue$Type): $LuaValue
public static "varargsOf"(arg0: ($LuaValue$Type)[], arg1: integer, arg2: integer): $Varargs
public static "varargsOf"(arg0: ($LuaValue$Type)[], arg1: integer, arg2: integer, arg3: $Varargs$Type): $Varargs
public static "varargsOf"(arg0: $LuaValue$Type, arg1: $Varargs$Type): $Varargs
public static "varargsOf"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $Varargs$Type): $Varargs
public static "varargsOf"(arg0: ($LuaValue$Type)[], arg1: $Varargs$Type): $Varargs
public static "varargsOf"(arg0: ($LuaValue$Type)[]): $Varargs
public static "tailcallOf"(arg0: $LuaValue$Type, arg1: $Varargs$Type): $Varargs
public "onInvoke"(arg0: $Varargs$Type): $Varargs
public "gt"(arg0: $LuaValue$Type): $LuaValue
public "gt"(arg0: double): $LuaValue
public "gt"(arg0: integer): $LuaValue
get "metatable"(): $LuaValue
set "metatable"(value: $LuaValue$Type)
get "nil"(): boolean
get "function"(): boolean
get "number"(): boolean
get "string"(): boolean
get "table"(): boolean
get "thread"(): boolean
get "userdata"(): boolean
get "boolean"(): boolean
get "closure"(): boolean
get "int"(): boolean
get "inttype"(): boolean
get "long"(): boolean
get "validkey"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaValue$Type = ($LuaValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaValue_ = $LuaValue$Type;
}}
declare module "packages/org/luaj/vm2/$LuaUserdata" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LuaUserdata extends $LuaValue {
 "m_instance": any
 "m_metatable": $LuaValue
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

constructor(arg0: any)
constructor(arg0: any, arg1: $LuaValue$Type)

public "get"(arg0: $LuaValue$Type): $LuaValue
public "type"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "set"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public "typename"(): string
public "eq"(arg0: $LuaValue$Type): $LuaValue
public "optuserdata"(arg0: $Class$Type<(any)>, arg1: any): any
public "optuserdata"(arg0: any): any
public "checkuserdata"(): any
public "checkuserdata"(arg0: $Class$Type<(any)>): any
public "getmetatable"(): $LuaValue
public "setmetatable"(arg0: $LuaValue$Type): $LuaValue
public "userdata"(): any
public "isuserdata"(arg0: $Class$Type<(any)>): boolean
public "isuserdata"(): boolean
public "tojstring"(): string
public "touserdata"(arg0: $Class$Type<(any)>): any
public "touserdata"(): any
public "eq_b"(arg0: $LuaValue$Type): boolean
public "raweq"(arg0: $LuaUserdata$Type): boolean
public "raweq"(arg0: $LuaValue$Type): boolean
public "eqmt"(arg0: $LuaValue$Type): boolean
get "metatable"(): $LuaValue
set "metatable"(value: $LuaValue$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaUserdata$Type = ($LuaUserdata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaUserdata_ = $LuaUserdata$Type;
}}
declare module "packages/org/luaj/vm2/$Globals$Loader" {
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"

export interface $Globals$Loader {

 "load"(arg0: $Prototype$Type, arg1: string, arg2: $LuaValue$Type): $LuaFunction

(arg0: $Prototype$Type, arg1: string, arg2: $LuaValue$Type): $LuaFunction
}

export namespace $Globals$Loader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Globals$Loader$Type = ($Globals$Loader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Globals$Loader_ = $Globals$Loader$Type;
}}
declare module "packages/org/luaj/vm2/$LuaTable$StrongSlot" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaTable$Slot, $LuaTable$Slot$Type} from "packages/org/luaj/vm2/$LuaTable$Slot"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export interface $LuaTable$StrongSlot extends $LuaTable$Slot {

 "value"(): $LuaValue
 "key"(): $LuaValue
 "toVarargs"(): $Varargs
 "add"(arg0: $LuaTable$Slot$Type): $LuaTable$Slot
 "remove"(arg0: $LuaTable$StrongSlot$Type): $LuaTable$Slot
 "first"(): $LuaTable$StrongSlot
 "find"(arg0: $LuaValue$Type): $LuaTable$StrongSlot
 "set"(arg0: $LuaTable$StrongSlot$Type, arg1: $LuaValue$Type): $LuaTable$Slot
 "rest"(): $LuaTable$Slot
 "relink"(arg0: $LuaTable$Slot$Type): $LuaTable$Slot
 "keyeq"(arg0: $LuaValue$Type): boolean
 "arraykey"(arg0: integer): integer
 "keyindex"(arg0: integer): integer
}

export namespace $LuaTable$StrongSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$StrongSlot$Type = ($LuaTable$StrongSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTable$StrongSlot_ = $LuaTable$StrongSlot$Type;
}}
declare module "packages/org/luaj/vm2/$LuaThread$State" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaThread, $LuaThread$Type} from "packages/org/luaj/vm2/$LuaThread"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $LuaThread$State implements $Runnable {
readonly "function": $LuaValue
 "hookfunc": $LuaValue
 "hookline": boolean
 "hookcall": boolean
 "hookrtrn": boolean
 "hookcount": integer
 "inhook": boolean
 "lastline": integer
 "bytecodes": integer
 "status": integer


public "run"(): void
public "lua_resume"(arg0: $LuaThread$Type, arg1: $Varargs$Type): $Varargs
public "lua_yield"(arg0: $Varargs$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaThread$State$Type = ($LuaThread$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaThread$State_ = $LuaThread$State$Type;
}}
declare module "packages/org/luaj/vm2/lib/$PackageLib" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$PackageLib$preload_searcher, $PackageLib$preload_searcher$Type} from "packages/org/luaj/vm2/lib/$PackageLib$preload_searcher"
import {$PackageLib$lua_searcher, $PackageLib$lua_searcher$Type} from "packages/org/luaj/vm2/lib/$PackageLib$lua_searcher"
import {$PackageLib$java_searcher, $PackageLib$java_searcher$Type} from "packages/org/luaj/vm2/lib/$PackageLib$java_searcher"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$TwoArgFunction, $TwoArgFunction$Type} from "packages/org/luaj/vm2/lib/$TwoArgFunction"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $PackageLib extends $TwoArgFunction {
static readonly "DEFAULT_LUA_PATH": string
 "preload_searcher": $PackageLib$preload_searcher
 "lua_searcher": $PackageLib$lua_searcher
 "java_searcher": $PackageLib$java_searcher
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

constructor()

public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "setIsLoaded"(arg0: string, arg1: $LuaTable$Type): void
public static "toClassname"(arg0: string): string
public "tojstring"(): string
public "setLuaPath"(arg0: string): void
set "luaPath"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageLib$Type = ($PackageLib);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageLib_ = $PackageLib$Type;
}}
declare module "packages/org/luaj/vm2/$Globals$Compiler" {
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $Globals$Compiler {

 "compile"(arg0: $InputStream$Type, arg1: string): $Prototype

(arg0: $InputStream$Type, arg1: string): $Prototype
}

export namespace $Globals$Compiler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Globals$Compiler$Type = ($Globals$Compiler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Globals$Compiler_ = $Globals$Compiler$Type;
}}
declare module "packages/org/luaj/vm2/lib/$VarArgFunction" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LibFunction, $LibFunction$Type} from "packages/org/luaj/vm2/lib/$LibFunction"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $VarArgFunction extends $LibFunction {
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

constructor()

public "invoke"(arg0: $Varargs$Type): $Varargs
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type, arg2: $LuaValue$Type): $LuaValue
public "call"(arg0: $LuaValue$Type): $LuaValue
public "call"(): $LuaValue
public "onInvoke"(arg0: $Varargs$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarArgFunction$Type = ($VarArgFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VarArgFunction_ = $VarArgFunction$Type;
}}
declare module "packages/org/luaj/vm2/lib/$BaseLib" {
import {$ResourceFinder, $ResourceFinder$Type} from "packages/org/luaj/vm2/lib/$ResourceFinder"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$TwoArgFunction, $TwoArgFunction$Type} from "packages/org/luaj/vm2/lib/$TwoArgFunction"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $BaseLib extends $TwoArgFunction implements $ResourceFinder {
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

constructor()

public "findResource"(arg0: string): $InputStream
public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "loadFile"(arg0: string, arg1: string, arg2: $LuaValue$Type): $Varargs
public "loadStream"(arg0: $InputStream$Type, arg1: string, arg2: string, arg3: $LuaValue$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseLib$Type = ($BaseLib);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseLib_ = $BaseLib$Type;
}}
declare module "packages/org/luaj/vm2/$LuaBoolean" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LuaBoolean extends $LuaValue {
static "s_metatable": $LuaValue
readonly "v": boolean
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


public "type"(): integer
public "booleanValue"(): boolean
public "typename"(): string
public "not"(): $LuaValue
public "checkboolean"(): boolean
public "getmetatable"(): $LuaValue
public "optboolean"(arg0: boolean): boolean
public "toboolean"(): boolean
public "tojstring"(): string
public "isboolean"(): boolean
get "metatable"(): $LuaValue
get "boolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaBoolean$Type = ($LuaBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaBoolean_ = $LuaBoolean$Type;
}}
declare module "packages/org/luaj/vm2/$LuaTable" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaTable$Slot, $LuaTable$Slot$Type} from "packages/org/luaj/vm2/$LuaTable$Slot"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"
import {$Metatable, $Metatable$Type} from "packages/org/luaj/vm2/$Metatable"

export class $LuaTable extends $LuaValue implements $Metatable {
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

constructor(arg0: $Varargs$Type, arg1: integer)
constructor(arg0: $Varargs$Type)
constructor(arg0: ($LuaValue$Type)[], arg1: ($LuaValue$Type)[], arg2: $Varargs$Type)
constructor(arg0: integer, arg1: integer)
constructor()

public "remove"(arg0: integer): $LuaValue
public "get"(arg0: integer): $LuaValue
public "get"(arg0: $LuaValue$Type): $LuaValue
public "type"(): integer
public "length"(): integer
public "insert"(arg0: integer, arg1: $LuaValue$Type): void
public "wrap"(arg0: $LuaValue$Type): $LuaValue
public "next"(arg0: $LuaValue$Type): $Varargs
public "len"(): $LuaValue
public "concat"(arg0: $LuaString$Type, arg1: integer, arg2: integer): $LuaValue
public "set"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public "set"(arg0: integer, arg1: $LuaValue$Type): void
public "entry"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaTable$Slot
public "keys"(): ($LuaValue)[]
public "typename"(): string
public "eq"(arg0: $LuaValue$Type): $LuaValue
public "sort"(arg0: $LuaValue$Type): void
public "useWeakKeys"(): boolean
public "useWeakValues"(): boolean
public "getmetatable"(): $LuaValue
public "setmetatable"(arg0: $LuaValue$Type): $LuaValue
public "unpack"(arg0: integer, arg1: integer): $Varargs
public "unpack"(arg0: integer): $Varargs
public "unpack"(): $Varargs
public "keyCount"(): integer
public "istable"(): boolean
public "opttable"(arg0: $LuaTable$Type): $LuaTable
public "checktable"(): $LuaTable
public "rawget"(arg0: $LuaValue$Type): $LuaValue
public "rawget"(arg0: integer): $LuaValue
public "rawset"(arg0: integer, arg1: $LuaValue$Type): void
public "rawset"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public "presize"(arg0: integer): void
public "presize"(arg0: integer, arg1: integer): void
public "inext"(arg0: $LuaValue$Type): $Varargs
public "rawlen"(): integer
public "eq_b"(arg0: $LuaValue$Type): boolean
public "hashset"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): void
public static "hashpow2"(arg0: integer, arg1: integer): integer
public static "hashSlot"(arg0: $LuaValue$Type, arg1: integer): integer
public static "hashmod"(arg0: integer, arg1: integer): integer
public "toLuaValue"(): $LuaValue
public "arrayget"(arg0: ($LuaValue$Type)[], arg1: integer): $LuaValue
get "metatable"(): $LuaValue
set "metatable"(value: $LuaValue$Type)
get "table"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$Type = ($LuaTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTable_ = $LuaTable$Type;
}}
declare module "packages/org/luaj/vm2/$LuaTable$Slot" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaTable$StrongSlot, $LuaTable$StrongSlot$Type} from "packages/org/luaj/vm2/$LuaTable$StrongSlot"

export interface $LuaTable$Slot {

 "add"(arg0: $LuaTable$Slot$Type): $LuaTable$Slot
 "remove"(arg0: $LuaTable$StrongSlot$Type): $LuaTable$Slot
 "first"(): $LuaTable$StrongSlot
 "find"(arg0: $LuaValue$Type): $LuaTable$StrongSlot
 "set"(arg0: $LuaTable$StrongSlot$Type, arg1: $LuaValue$Type): $LuaTable$Slot
 "rest"(): $LuaTable$Slot
 "relink"(arg0: $LuaTable$Slot$Type): $LuaTable$Slot
 "keyeq"(arg0: $LuaValue$Type): boolean
 "arraykey"(arg0: integer): integer
 "keyindex"(arg0: integer): integer
}

export namespace $LuaTable$Slot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$Slot$Type = ($LuaTable$Slot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTable$Slot_ = $LuaTable$Slot$Type;
}}
declare module "packages/org/luaj/vm2/$LuaFunction" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"

export class $LuaFunction extends $LuaValue {
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

constructor()

public "name"(): string
public "type"(): integer
public "typename"(): string
public "classnamestub"(): string
public "optfunction"(arg0: $LuaFunction$Type): $LuaFunction
public "checkfunction"(): $LuaFunction
public "getmetatable"(): $LuaValue
public "isfunction"(): boolean
public "tojstring"(): string
public "strvalue"(): $LuaString
get "metatable"(): $LuaValue
get "function"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaFunction$Type = ($LuaFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaFunction_ = $LuaFunction$Type;
}}
declare module "packages/org/luaj/vm2/lib/$PackageLib$java_searcher" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$PackageLib, $PackageLib$Type} from "packages/org/luaj/vm2/lib/$PackageLib"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$VarArgFunction, $VarArgFunction$Type} from "packages/org/luaj/vm2/lib/$VarArgFunction"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $PackageLib$java_searcher extends $VarArgFunction {
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

constructor(arg0: $PackageLib$Type)

public "invoke"(arg0: $Varargs$Type): $Varargs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackageLib$java_searcher$Type = ($PackageLib$java_searcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackageLib$java_searcher_ = $PackageLib$java_searcher$Type;
}}
declare module "packages/org/luaj/vm2/$Prototype" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Upvaldesc, $Upvaldesc$Type} from "packages/org/luaj/vm2/$Upvaldesc"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LocVars, $LocVars$Type} from "packages/org/luaj/vm2/$LocVars"

export class $Prototype {
 "k": ($LuaValue)[]
 "code": (integer)[]
 "p": ($Prototype)[]
 "lineinfo": (integer)[]
 "locvars": ($LocVars)[]
 "upvalues": ($Upvaldesc)[]
 "source": $LuaString
 "linedefined": integer
 "lastlinedefined": integer
 "numparams": integer
 "is_vararg": integer
 "maxstacksize": integer

constructor()
constructor(arg0: integer)

public "toString"(): string
public "shortsource"(): string
public "getlocalname"(arg0: integer, arg1: integer): $LuaString
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Prototype$Type = ($Prototype);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Prototype_ = $Prototype$Type;
}}
declare module "packages/org/luaj/vm2/lib/$DebugLib$CallFrame" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugLib$CallFrame {

constructor()

public "shortsource"(): string
public "currentline"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugLib$CallFrame$Type = ($DebugLib$CallFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugLib$CallFrame_ = $DebugLib$CallFrame$Type;
}}
declare module "packages/org/luaj/vm2/$Globals" {
import {$ResourceFinder, $ResourceFinder$Type} from "packages/org/luaj/vm2/lib/$ResourceFinder"
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$PackageLib, $PackageLib$Type} from "packages/org/luaj/vm2/lib/$PackageLib"
import {$Globals$Loader, $Globals$Loader$Type} from "packages/org/luaj/vm2/$Globals$Loader"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$BaseLib, $BaseLib$Type} from "packages/org/luaj/vm2/lib/$BaseLib"
import {$Globals$Undumper, $Globals$Undumper$Type} from "packages/org/luaj/vm2/$Globals$Undumper"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LuaThread, $LuaThread$Type} from "packages/org/luaj/vm2/$LuaThread"
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$DebugLib, $DebugLib$Type} from "packages/org/luaj/vm2/lib/$DebugLib"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$Globals$Compiler, $Globals$Compiler$Type} from "packages/org/luaj/vm2/$Globals$Compiler"
import {$PrintStream, $PrintStream$Type} from "packages/java/io/$PrintStream"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"

export class $Globals extends $LuaTable {
 "STDIN": $InputStream
 "STDOUT": $PrintStream
 "STDERR": $PrintStream
 "finder": $ResourceFinder
 "running": $LuaThread
 "baselib": $BaseLib
 "package_": $PackageLib
 "debuglib": $DebugLib
 "loader": $Globals$Loader
 "compiler": $Globals$Compiler
 "undumper": $Globals$Undumper
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

constructor()

public "load"(arg0: string, arg1: string, arg2: $LuaTable$Type): $LuaValue
public "load"(arg0: $Reader$Type, arg1: string): $LuaValue
public "load"(arg0: $Reader$Type, arg1: string, arg2: $LuaTable$Type): $LuaValue
public "load"(arg0: $InputStream$Type, arg1: string, arg2: string, arg3: $LuaValue$Type): $LuaValue
public "load"(arg0: string): $LuaValue
public "load"(arg0: string, arg1: string): $LuaValue
public "yield"(arg0: $Varargs$Type): $Varargs
public "loadPrototype"(arg0: $InputStream$Type, arg1: string, arg2: string): $Prototype
public "compilePrototype"(arg0: $InputStream$Type, arg1: string): $Prototype
public "compilePrototype"(arg0: $Reader$Type, arg1: string): $Prototype
public "checkglobals"(): $Globals
public "loadfile"(arg0: string): $LuaValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Globals$Type = ($Globals);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Globals_ = $Globals$Type;
}}
declare module "packages/org/luaj/vm2/lib/$DebugLib" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$Prototype, $Prototype$Type} from "packages/org/luaj/vm2/$Prototype"
import {$DebugLib$CallFrame, $DebugLib$CallFrame$Type} from "packages/org/luaj/vm2/lib/$DebugLib$CallFrame"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$LuaClosure, $LuaClosure$Type} from "packages/org/luaj/vm2/$LuaClosure"
import {$LuaBoolean, $LuaBoolean$Type} from "packages/org/luaj/vm2/$LuaBoolean"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$TwoArgFunction, $TwoArgFunction$Type} from "packages/org/luaj/vm2/lib/$TwoArgFunction"
import {$Varargs, $Varargs$Type} from "packages/org/luaj/vm2/$Varargs"
import {$DebugLib$NameWhat, $DebugLib$NameWhat$Type} from "packages/org/luaj/vm2/lib/$DebugLib$NameWhat"

export class $DebugLib extends $TwoArgFunction {
static "CALLS": boolean
static "TRACE": boolean
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

constructor()

public "call"(arg0: $LuaValue$Type, arg1: $LuaValue$Type): $LuaValue
public "onInstruction"(arg0: integer, arg1: $Varargs$Type, arg2: integer): void
public "getCallFrame"(arg0: integer): $DebugLib$CallFrame
public "traceback"(arg0: integer): string
public "onCall"(arg0: $LuaFunction$Type): void
public "onCall"(arg0: $LuaClosure$Type, arg1: $Varargs$Type, arg2: ($LuaValue$Type)[]): void
public "onReturn"(): void
public static "getobjname"(arg0: $Prototype$Type, arg1: integer, arg2: integer): $DebugLib$NameWhat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugLib$Type = ($DebugLib);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugLib_ = $DebugLib$Type;
}}
declare module "packages/org/luaj/vm2/$Varargs" {
import {$LuaValue, $LuaValue$Type} from "packages/org/luaj/vm2/$LuaValue"
import {$LuaInteger, $LuaInteger$Type} from "packages/org/luaj/vm2/$LuaInteger"
import {$LuaFunction, $LuaFunction$Type} from "packages/org/luaj/vm2/$LuaFunction"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LuaClosure, $LuaClosure$Type} from "packages/org/luaj/vm2/$LuaClosure"
import {$LuaNumber, $LuaNumber$Type} from "packages/org/luaj/vm2/$LuaNumber"
import {$LuaString, $LuaString$Type} from "packages/org/luaj/vm2/$LuaString"
import {$LuaThread, $LuaThread$Type} from "packages/org/luaj/vm2/$LuaThread"
import {$LuaTable, $LuaTable$Type} from "packages/org/luaj/vm2/$LuaTable"

export class $Varargs {

constructor()

public "type"(arg0: integer): integer
public "toString"(): string
public "arg"(arg0: integer): $LuaValue
public "narg"(): integer
public "arg1"(): $LuaValue
public "optfunction"(arg0: integer, arg1: $LuaFunction$Type): $LuaFunction
public "optuserdata"(arg0: integer, arg1: $Class$Type<(any)>, arg2: any): any
public "optuserdata"(arg0: integer, arg1: any): any
public "checkboolean"(arg0: integer): boolean
public "checkclosure"(arg0: integer): $LuaClosure
public "checkdouble"(arg0: integer): double
public "checkfunction"(arg0: integer): $LuaFunction
public "checkinteger"(arg0: integer): $LuaInteger
public "checknumber"(arg0: integer): $LuaNumber
public "checkjstring"(arg0: integer): string
public "checkstring"(arg0: integer): $LuaString
public "checkthread"(arg0: integer): $LuaThread
public "checkuserdata"(arg0: integer, arg1: $Class$Type<(any)>): any
public "checkuserdata"(arg0: integer): any
public "checknotnil"(arg0: integer): $LuaValue
public "isnoneornil"(arg0: integer): boolean
public "eval"(): $Varargs
public "todouble"(arg0: integer): double
public "isTailcall"(): boolean
public "isnil"(arg0: integer): boolean
public "isfunction"(arg0: integer): boolean
public "isnumber"(arg0: integer): boolean
public "isstring"(arg0: integer): boolean
public "istable"(arg0: integer): boolean
public "isthread"(arg0: integer): boolean
public "isuserdata"(arg0: integer): boolean
public "isvalue"(arg0: integer): boolean
public "optboolean"(arg0: integer, arg1: boolean): boolean
public "optclosure"(arg0: integer, arg1: $LuaClosure$Type): $LuaClosure
public "optdouble"(arg0: integer, arg1: double): double
public "optint"(arg0: integer, arg1: integer): integer
public "optinteger"(arg0: integer, arg1: $LuaInteger$Type): $LuaInteger
public "optlong"(arg0: integer, arg1: long): long
public "optnumber"(arg0: integer, arg1: $LuaNumber$Type): $LuaNumber
public "optjstring"(arg0: integer, arg1: string): string
public "optstring"(arg0: integer, arg1: $LuaString$Type): $LuaString
public "opttable"(arg0: integer, arg1: $LuaTable$Type): $LuaTable
public "optthread"(arg0: integer, arg1: $LuaThread$Type): $LuaThread
public "optvalue"(arg0: integer, arg1: $LuaValue$Type): $LuaValue
public "checkint"(arg0: integer): integer
public "checklong"(arg0: integer): long
public "checktable"(arg0: integer): $LuaTable
public "checkvalue"(arg0: integer): $LuaValue
public "argcheck"(arg0: boolean, arg1: integer, arg2: string): void
public "toboolean"(arg0: integer): boolean
public "tobyte"(arg0: integer): byte
public "tochar"(arg0: integer): character
public "tofloat"(arg0: integer): float
public "toint"(arg0: integer): integer
public "tolong"(arg0: integer): long
public "tojstring"(): string
public "tojstring"(arg0: integer): string
public "toshort"(arg0: integer): short
public "touserdata"(arg0: integer): any
public "touserdata"(arg0: integer, arg1: $Class$Type<(any)>): any
public "subargs"(arg0: integer): $Varargs
public "dealias"(): $Varargs
get "tailcall"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Varargs$Type = ($Varargs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Varargs_ = $Varargs$Type;
}}
