/**
 * Bundled library components for in-browser usage.
 * @module assemblyscript/library
 */

/** AssemblyScript version. */
export const version: string = "0.2.0";

/** Library sources for in-browser usage. */
export const files: { [key: string]: string } = {
  "assembly.d.ts": "/**\n * TypeScript definition file for AssemblyScript compilation.\n * see: https://github.com/dcodeIO/AssemblyScript for details\n *\n * @module assembly\n */\n\n// Core types\n\n/** An 8-bit signed integer. */\ndeclare type sbyte = number;\n/** An 8-bit unsigned integer. */\ndeclare type byte = number;\n/** A 16-bit signed integer. */\ndeclare type short = number;\n/** A 16-bit unsigned integer. */\ndeclare type ushort = number;\n/** A 32-bit signed integer. */\ndeclare type int = number;\n/** A 32-bit unsigned integer. */\ndeclare type uint = number;\n/** A 64-bit signed integer. */\ndeclare type long = number;\n/** A 64-bit unsigned integer. */\ndeclare type ulong = number;\n/** A 1-bit unsigned integer. */\ndeclare type bool = any; // as required for logical '&&' / '||'\n/** A 32-bit float. */\ndeclare type float = number;\n/** A 64-bit float. */\ndeclare type double = number;\n/** A 32-bit unsigned integer when targeting WASM32 respectively a 64-bit unsigned integer when targeting WASM64. */\ndeclare type uintptr = number;\n\n// Core type aliases\n\n/** An 8-bit signed integer. */\ndeclare type int8 = sbyte;\n/** An 8-bit unsigned integer. */\ndeclare type uint8 = byte;\n/** A 16-bit signed integer. */\ndeclare type int16 = short;\n/** A 16-bit unsigned integer. */\ndeclare type uint16 = ushort;\n/** A 32-bit signed integer. */\ndeclare type int32 = int;\n/** A 32-bit signed integer. */\ndeclare type uint32 = uint;\n/** A 64-bit signed integer. */\ndeclare type int64 = long;\n/** A 64-bit unsigned integer. */\ndeclare type uint64 = ulong;\n/** A 32-bit float. */\ndeclare type float32 = float;\n/** A 64-bit float. */\ndeclare type float64 = double;\n\n// Globals\n\n/** NaN (not a number) as a 64-bit float. */\ndeclare const NaN: double;\n/** NaN (not a number) as a 32-bit float. */\ndeclare const NaNf: float;\n/** Positive infinity as a 64-bit float. */\ndeclare const Infinity: double;\n/** Positive infinity as a 32-bit float. */\ndeclare const Infinityf: float;\n\ndeclare abstract class Disposable implements IDisposable {\n  dispose(): void;\n}\n\n// Arrays\n\n/** A fixed-size array. */\ndeclare class Array<T> extends Disposable {\n  /** Maximum number of elements this array can hold without resizing. */\n  readonly capacity: int;\n  /** Number of elements this array currently holds. */\n  length: int;\n\n  /** Constructs a new array with the specified number of elements. */\n  constructor(arrayLength: int);\n\n  /** Returns the first index at which a given element can be found in the array, or `-1` if it is not present. The array is searched forward, starting at `fromIndex`. */\n  indexOf(searchElement: T, fromIndex?: int): int;\n  /** Returns the last index at which a given element can be found in the array, or `-1` if it is not present. The array is searched backwards, starting at `fromIndex`. */\n  lastIndexOf(searchElement: T, fromIndex?: int): int;\n  /** Creates a shallow copy of a portion of the array as a new array object selected from `begin` to `end` (`end` not included). The original array will not be modified. */\n  slice(begin?: int, end?: int): this;\n  /** Reverses the array's elements in place. The first array element becomes the last, and the last array element becomes the first. */\n  reverse(): this;\n  /** Grows the array to the specified new capacity, frees the current reference (unsafe) and returns the new reference. Traps if `newCapacity` is less than or equal the current capacity. */\n  // unsafeGrow(newCapacity: int): this;\n}\n\n/** A fixed-size 8-bit signed integer array. */\ndeclare class Int8Array extends Array<sbyte> {}\n/** A fixed-size 8-bit unsigned integer array. */\ndeclare class Uint8Array extends Array<byte> {}\n/** A fixed-size 16-bit signed integer array. */\ndeclare class Int16Array extends Array<short> {}\n/** A fixed-size 16-bit unsigned integer array. */\ndeclare class Uint16Array extends Array<ushort> {}\n/** A fixed-size 32-bit signed integer array. */\ndeclare class Int32Array extends Array<int> {}\n/** A fixed-size 32-bit unsigned integer array. */\ndeclare class Uint32Array extends Array<uint> {}\n/** A fixed-size 64-bit signed integer array. */\ndeclare class Int64Array extends Array<long> {}\n/** A fixed-size 64-bit unsigned integer array. */\ndeclare class Uint64Array extends Array<ulong> {}\n/** A fixed-size 32-bit float array. */\ndeclare class Float32Array extends Array<float> {}\n/** A fixed-size 64-bit float array. */\ndeclare class Float64Array extends Array<double> {}\n\n// Strings\n\n/** A fixed-size UTF-16LE encoded string. */\ndeclare class String extends Array<ushort> {\n  /** Constructs a new string with the specified number of characters. */\n  constructor(size: int);\n\n  /** Returns the index within the string of the first occurrence of the specified value or `-1` if the value is not found. */\n  indexOfString(value: string): int;\n  /** Determines whether the string begins with the specified value. */\n  startsWith(value: string): bool;\n  /** Determines whether the string ends with the specified value. */\n  endsWith(value: string): bool;\n}\n\n// Console\n\n/** Console bindings. */\ndeclare class console {\n  /** Logs a message to console. */\n  static log(message: string): void;\n  /** Logs an informative message to console. */\n  static info(message: string): void;\n  /** Logs a warning message to console. */\n  static warn(message: string): void;\n  /** Logs an error message to console. */\n  static error(message: string): void;\n}\n\n// Builtins\n\n/** Performs the sign-agnostic rotate left operation on a 32-bit integer. */\ndeclare function rotl(value: int, shift: int): int;\n/** Performs the sign-agnostic rotate left operation on a 64-bit integer. */\ndeclare function rotll(value: long, shift: long): long;\n/** Performs the sign-agnostic rotate right operation on a 32-bit integer. */\ndeclare function rotr(value: int, shift: int): int;\n/** Performs the sign-agnostic rotate right operation on a 64-bit integer. */\ndeclare function rotrl(value: long, shift: long): long;\n/** Performs the sign-agnostic count leading zero bits operation on a 32-bit integer. All zero bits are considered leading if the value is zero. */\ndeclare function clz(value: int): int;\n/** Performs the sign-agnostic count leading zero bits operation on a 64-bit integer. All zero bits are considered leading if the value is zero. */\ndeclare function clzl(value: long): long;\n/** Performs the sign-agnostic count trailing zero bits operation on a 32-bit integer. All zero bits are considered trailing if the value is zero. */\ndeclare function ctz(value: int): int;\n/** Performs the sign-agnostic count trailing zero bits operation on a 64-bit integer. All zero bits are considered trailing if the value is zero. */\ndeclare function ctzl(value: long): long;\n/** Performs the sign-agnostic count number of one bits operation on a 32-bit integer. */\ndeclare function popcnt(value: int): int;\n/** Performs the sign-agnostic count number of one bits operation on a 64-bit integer. */\ndeclare function popcntl(value: long): long;\n/** Computes the absolute value of a 64-bit float. */\ndeclare function abs(value: double): double;\n/** Computes the absolute value of a 32-bit float. */\ndeclare function absf(value: float): float;\n/** Performs the ceiling operatoion on a 64-bit float. */\ndeclare function ceil(value: double): double;\n/** Performs the ceiling operation on a 32-bit float. */\ndeclare function ceilf(value: float): float;\n/** Performs the floor operation on a 64-bit float. */\ndeclare function floor(value: double): double;\n/** Performs the floor operation on a 32-bit float. */\ndeclare function floorf(value: float): float;\n/** Calculates the square root of a 64-bit float. */\ndeclare function sqrt(value: double): double;\n/** Calculates the square root of a 32-bit float. */\ndeclare function sqrtf(value: float): float;\n/** Rounds to nearest integer towards zero of a 64-bit float. */\ndeclare function trunc(value: double): double;\n/** Rounds to nearest integer towards zero of a 32-bit float. */\ndeclare function truncf(value: float): float;\n/** Rounds to nearest integer tied to even of a 64-bit float. */\ndeclare function nearest(value: double): double;\n/** Rounds to nearest integer tied to even of a 32-bit float. */\ndeclare function nearestf(value: float): float;\n/** Determines the minimum of two 64-bit floats. If either operand is NaN, returns NaN. */\ndeclare function min(left: double, right: double): double;\n/** Determines the minimum of two 32-bit floats. If either operand is NaN, returns NaN. */\ndeclare function minf(left: float, right: float): float;\n/** Determines the maximum of two 64-bit floats. If either operand is NaN, returns NaN. */\ndeclare function max(left: double, right: double): double;\n/** Determines the maximum of two 32-bit floats. If either operand is NaN, returns NaN. */\ndeclare function maxf(left: float, right: float): float;\n/** Composes a 64-bit float from the magnitude of `x` and the sign of `y`. */\ndeclare function copysign(x: double, y: double): double;\n/** Composes a 32-bit float from the magnitude of `x` and the sign of `y`. */\ndeclare function copysignf(x: float, y: float): float;\n/** Reinterprets the bits of a 32-bit float as a 32-bit integer. */\ndeclare function reinterpreti(value: float): int;\n/** Reinterprets the bits of a 64-bit float as a 64-bit integer. */\ndeclare function reinterpretl(value: double): long;\n/** Reinterprets the bits of a 32-bit integer as a 32-bit float. */\ndeclare function reinterpretf(value: int): float;\n/** Reinterprets the bits of a 64-bit integer as a 64-bit double. */\ndeclare function reinterpretd(value: long): double;\n/** Returns the current memory size in units of pages. One page is 64kb. */\ndeclare function current_memory(): int;\n/** Grows linear memory by a given unsigned delta of pages. One page is 64kb. Returns the previous memory size in units of pages or `-1` on failure. */\ndeclare function grow_memory(value: uint): int;\n/** Emits an unreachable operation that results in a runtime error when executed. */\ndeclare function unreachable(): void;\n\n/** Determines the byte size of the specified core or class type. Compiles to a constant. */\ndeclare function sizeof<T>(): uintptr;\n/** Casts a value of type `T1` to a value of type `T2`. Useful for casting classes to pointers and vice-versa. Does not perform any checks. */\ndeclare function unsafe_cast<T1,T2>(value: T1): T2;\n/** Tests if a 64-bit float is a NaN. */\ndeclare function isNaN(value: double): bool;\n/** Tests if a 32-bit float is a NaN. */\ndeclare function isNaNf(value: float): bool;\n/** Tests if a 64-bit float is finite. */\ndeclare function isFinite(value: double): bool;\n/** Tests if a 32-bit float is finite. */\ndeclare function isFinitef(value: float): bool;\n\n// Optional malloc implementation\n\n/** Sets a chunk of memory to the provided value `c`. Usually used to reset it to all `0`s. */\ndeclare function memset(dest: uintptr, c: int, size: uintptr): uintptr;\n/** Copies data from one chunk of memory to another. */\ndeclare function memcpy(dest: uintptr, src: uintptr, size: uintptr): uintptr;\n/** Compares a chunk of memory to another. Returns `0` if both are equal, otherwise the difference `vl[i] - vr[i]` of the first differing byte values. */\ndeclare function memcmp(left: uintptr, right: uintptr, size: uintptr): int;\n/** Allocates a chunk of memory of the specified size and returns a pointer to it. */\ndeclare function malloc(size: uintptr): uintptr;\n/** Frees a previously allocated chunk of memory by its pointer. */\ndeclare function free(ptr: uintptr): void;\n/** Called to initialize malloc if imported. */\ndeclare function malloc_init(offset: uintptr): void;\n\n// Temporary fillers\n\n/** @private */ declare interface Boolean {}\n/** @private */ declare interface Function {}\n/** @private */ declare interface IArguments {}\n/** @private */ declare interface Number {}\n/** @private */ declare interface Object {}\n/** @private */ declare interface RegExp {}\n/** @private */ declare interface Symbol {}\n\n// Interfaces\n\n/** Marks a class as being disposable (can be free'd from memory manually). */\ndeclare interface IDisposable {\n  /** Releases this instance's memory by calling `free`. The instance or a reference to it must not be used anymore afterwards. */\n  dispose(): void;\n}\n\n// Internal decorators\ndeclare function no_implicit_malloc();\n",
  "std/disposable.ts": "export abstract class Disposable implements IDisposable {\n\n  dispose(): void {\n    free(unsafe_cast<this,uintptr>(this));\n  }\n\n}\n",
  "std/array.ts": "@no_implicit_malloc()\nexport class Array<T> extends Disposable {\n  readonly capacity: int;\n  length: int; // can be any user-provided value\n\n  constructor(capacity: int) {\n    super();\n\n    // if the argument is any other number, a RangeError exception is thrown\n    if (capacity < 0)\n      unreachable();\n\n    const elementsByteSize: uintptr = (capacity as uintptr) * sizeof<T>();\n    const ptr: uintptr = malloc(sizeof<ArrayStruct>() + elementsByteSize);\n    const struct: ArrayStruct = unsafe_cast<uintptr,ArrayStruct>(ptr);\n\n    struct.capacity = capacity;\n    struct.length = capacity;\n\n    memset(ptr + sizeof<ArrayStruct>(), 0, elementsByteSize);\n\n    return unsafe_cast<uintptr,this>(ptr);\n  }\n\n  indexOf(searchElement: T, fromIndex: int = 0): int {\n    let length: int = this.length;\n    if (length > this.capacity)\n      length = this.capacity;\n\n    // if negative, it is taken as the offset from the end of the array\n    if (fromIndex < 0) {\n      fromIndex = length + fromIndex;\n\n      // if the calculated index is less than 0, then the whole array will be searched\n      if (fromIndex < 0)\n        fromIndex = 0;\n    }\n\n    // implicit: if greater than or equal to the array's length, -1 is returned\n    while (fromIndex < length) {\n      if (this[fromIndex] == searchElement)\n        return fromIndex;\n      ++fromIndex;\n    }\n\n    return -1;\n  }\n\n  lastIndexOf(searchElement: T, fromIndex: int = 0x7fffffff): int {\n    let length: int = this.length;\n    if (length > this.capacity)\n      length = this.capacity;\n\n     // if negative, it is taken as the offset from the end of the array\n    if (fromIndex < 0)\n      fromIndex = length + fromIndex;\n\n    // if greater than or equal to the length of the array, the whole array will be searched\n    else if (fromIndex >= length)\n      fromIndex = length - 1;\n\n    // implicit: if the calculated index is less than 0, -1 is returned\n    while (fromIndex >= 0) {\n      if (this[fromIndex] == searchElement)\n        return fromIndex;\n      --fromIndex;\n    }\n    return -1;\n  }\n\n  slice(begin: int = 0, end: int = 0x7fffffff): this {\n    let length: int = this.length;\n    if (length > this.capacity)\n      length = this.capacity;\n\n    if (begin < 0) {\n      begin = length + begin;\n      if (begin < 0)\n        begin = 0;\n    } else if (begin > length)\n      begin = length;\n\n    if (end < 0)\n      end = length + end;\n    else if (end > length)\n      end = length;\n\n    if (end < begin)\n      end = begin;\n\n    const capacity: int = end - begin;\n    const elementsByteSize: uintptr = (capacity as uintptr) * sizeof<T>();\n    const ptr: uintptr = malloc(sizeof<ArrayStruct>() + elementsByteSize);\n\n    unsafe_cast<uintptr,ArrayStruct>(ptr).length = capacity;\n    memcpy(ptr + sizeof<ArrayStruct>(), unsafe_cast<this,uintptr>(this) + sizeof<ArrayStruct>() + begin * sizeof<T>(), elementsByteSize);\n\n    return unsafe_cast<uintptr,this>(ptr);\n  }\n\n  reverse(): this {\n    let length: int = this.length;\n    if (length > this.capacity)\n      length = this.capacity;\n\n    // transposes the elements of the calling array object in place, mutating the array\n    for (let i: int = 0, j: int = length - 1, t: int; i < j; ++i, --j) {\n      t = this[i];\n      this[i] = this[j];\n      this[j] = t;\n    }\n\n    // and returning a reference to the array\n    return this;\n  }\n\n  /* unsafeGrow(newCapacity: int): this {\n    const oldCapacity: int = this.capacity;\n    const length: int = this.length;\n\n    if (newCapacity <= oldCapacity)\n      unreachable();\n\n    const oldElementsByteSize: uintptr = (oldCapacity as uintptr) * sizeof<T>();\n    const newElementsByteSize: uintptr = (newCapacity as uintptr) * sizeof<T>();\n    const ptr: uintptr = malloc(sizeof<ArrayStruct>() + newElementsByteSize);\n    const struct: ArrayStruct = unsafe_cast<uintptr,ArrayStruct>(ptr);\n\n    struct.capacity = newCapacity;\n    struct.length = length;\n\n    memcpy(ptr + sizeof<ArrayStruct>(), unsafe_cast<this,uintptr>(this) + sizeof<ArrayStruct>(), oldElementsByteSize);\n    memset(ptr + sizeof<ArrayStruct>() + oldElementsByteSize, 0, newElementsByteSize - oldElementsByteSize);\n    free(unsafe_cast<this,uintptr>(this));\n\n    return unsafe_cast<uintptr,this>(ptr);\n  } */\n}\n\n// transient helper struct used to set the otherwise readonly length property\nclass ArrayStruct {\n  capacity: int;\n  length: int;\n}\n",
  "std/string.ts": "export class String extends Array<ushort> {\n\n  indexOfString(value: string): int { // FIXME: any way to overload this?\n    if (value.length > this.length)\n      return -1;\n    const thisPtr: uintptr = unsafe_cast<String,uintptr>(this) + sizeof<Array<ushort>>();\n    const valuePtr: uintptr = unsafe_cast<string,uintptr>(value) + sizeof<Array<ushort>>();\n    const limitPtr: uintptr = this.length - value.length;\n    for (let offsetPtr: uintptr = 0; offsetPtr < limitPtr; offsetPtr += sizeof<ushort>())\n      if (memcmp(thisPtr + offsetPtr, valuePtr, value.length) == 0)\n        return offsetPtr as int;\n    return -1;\n  }\n\n  startsWith(value: string): bool {\n    if (value.length > this.length)\n      return false;\n    const thisPtr: uintptr = unsafe_cast<String,uintptr>(this) + sizeof<Array<ushort>>();\n    const valuePtr: uintptr = unsafe_cast<string,uintptr>(value) + sizeof<Array<ushort>>();\n    return memcmp(thisPtr, valuePtr, value.length << 1) == 0;\n  }\n\n  endsWith(value: string): bool {\n    if (value.length > this.length)\n      return false;\n    const thisPtr: uintptr = unsafe_cast<String,uintptr>(this) + sizeof<Array<ushort>>();\n    const valuePtr: uintptr = unsafe_cast<string,uintptr>(value) + sizeof<Array<ushort>>();\n    return memcmp(thisPtr + (this.length - value.length) << 1, valuePtr, value.length) == 0;\n  }\n}\n",
  "std/console.ts": "enum LogType {\n  Log = 0,\n  Info = 1,\n  Warn = 2,\n  Error = 3\n}\n\ndeclare function log(type: int, message: string): void;\n\nexport class console {\n\n  static log(message: string): void {\n    log(LogType.Log, message);\n  }\n\n  static info(message: string): void {\n    log(LogType.Info, message);\n  }\n\n  static warn(message: string): void {\n    log(LogType.Warn, message);\n  }\n\n  static error(message: string): void {\n    log(LogType.Error, message);\n  }\n}"
};

/** Precompiled memory management runtime as a base64-encoded string. */
export const runtime: string = "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AS0ADjoADiACIAEtAAA6AAAgAiABLQAPOgAPIAJBEGohAiABQRBqIQELIARBCHEEQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAiABLQAEOgAEIAIgAS0ABToABSACIAEtAAY6AAYgAiABLQAHOgAHIAJBCGohAiABQQhqIQELIARBBHEEQCACIAEtAAA6AAAgAiABLQABOgABIAIgAS0AAjoAAiACIAEtAAM6AAMgAkEEaiECIAFBBGohAQsgBEECcQRAIAIgAS0AADoAACACIAEtAAE6AAEgAkECaiECIAFBAmohAQsgBEEBcUUNACACIAEtAAA6AAAgAA8LIAALC/+CgIAAAgJ/AX4CfwJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhAgAyABNgIMIAMgATYCFCADIAE2AhggAkFoaiABNgIAIAJBZGogATYCACACQWxqIAE2AgAgAkFwaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDACABQQhqIAU3AwAgAUEQaiAFNwMAIAFBGGogBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACwvBsICAAAEKfwJ/QQQoAgBBEGshBwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUH0AU0EQCAAKAIAIgRBECABQQtqQXhxIAFBC0kbIgZBA3YiAnYiAUEDcUUNASAAIAFBf3NBAXEgAmoiAkEDdGoiBkEwaigCACIBQQhqIQUgASgCCCIDIAZBKGoiBkYNAiADIAY2AgwgBkEIaiADNgIADAMLQX8hBiABQb9/Sw0PIAFBC2oiAkF4cSEG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";
