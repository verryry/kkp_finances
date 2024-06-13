
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Jabatan
 * 
 */
export type Jabatan = $Result.DefaultSelection<Prisma.$JabatanPayload>
/**
 * Model Lembur
 * 
 */
export type Lembur = $Result.DefaultSelection<Prisma.$LemburPayload>
/**
 * Model Karyawan
 * 
 */
export type Karyawan = $Result.DefaultSelection<Prisma.$KaryawanPayload>
/**
 * Model Potongan
 * 
 */
export type Potongan = $Result.DefaultSelection<Prisma.$PotonganPayload>
/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>
/**
 * Model Gaji
 * 
 */
export type Gaji = $Result.DefaultSelection<Prisma.$GajiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.jabatan`: Exposes CRUD operations for the **Jabatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jabatans
    * const jabatans = await prisma.jabatan.findMany()
    * ```
    */
  get jabatan(): Prisma.JabatanDelegate<ExtArgs>;

  /**
   * `prisma.lembur`: Exposes CRUD operations for the **Lembur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lemburs
    * const lemburs = await prisma.lembur.findMany()
    * ```
    */
  get lembur(): Prisma.LemburDelegate<ExtArgs>;

  /**
   * `prisma.karyawan`: Exposes CRUD operations for the **Karyawan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karyawans
    * const karyawans = await prisma.karyawan.findMany()
    * ```
    */
  get karyawan(): Prisma.KaryawanDelegate<ExtArgs>;

  /**
   * `prisma.potongan`: Exposes CRUD operations for the **Potongan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Potongans
    * const potongans = await prisma.potongan.findMany()
    * ```
    */
  get potongan(): Prisma.PotonganDelegate<ExtArgs>;

  /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs>;

  /**
   * `prisma.gaji`: Exposes CRUD operations for the **Gaji** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gajis
    * const gajis = await prisma.gaji.findMany()
    * ```
    */
  get gaji(): Prisma.GajiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Jabatan: 'Jabatan',
    Lembur: 'Lembur',
    Karyawan: 'Karyawan',
    Potongan: 'Potongan',
    Absensi: 'Absensi',
    Gaji: 'Gaji'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'jabatan' | 'lembur' | 'karyawan' | 'potongan' | 'absensi' | 'gaji'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Jabatan: {
        payload: Prisma.$JabatanPayload<ExtArgs>
        fields: Prisma.JabatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JabatanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JabatanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findFirst: {
            args: Prisma.JabatanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JabatanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          findMany: {
            args: Prisma.JabatanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>[]
          }
          create: {
            args: Prisma.JabatanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          createMany: {
            args: Prisma.JabatanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JabatanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          update: {
            args: Prisma.JabatanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          deleteMany: {
            args: Prisma.JabatanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JabatanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JabatanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JabatanPayload>
          }
          aggregate: {
            args: Prisma.JabatanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJabatan>
          }
          groupBy: {
            args: Prisma.JabatanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JabatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JabatanCountArgs<ExtArgs>,
            result: $Utils.Optional<JabatanCountAggregateOutputType> | number
          }
        }
      }
      Lembur: {
        payload: Prisma.$LemburPayload<ExtArgs>
        fields: Prisma.LemburFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LemburFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LemburFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          findFirst: {
            args: Prisma.LemburFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LemburFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          findMany: {
            args: Prisma.LemburFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>[]
          }
          create: {
            args: Prisma.LemburCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          createMany: {
            args: Prisma.LemburCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LemburDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          update: {
            args: Prisma.LemburUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          deleteMany: {
            args: Prisma.LemburDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LemburUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LemburUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LemburPayload>
          }
          aggregate: {
            args: Prisma.LemburAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLembur>
          }
          groupBy: {
            args: Prisma.LemburGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LemburGroupByOutputType>[]
          }
          count: {
            args: Prisma.LemburCountArgs<ExtArgs>,
            result: $Utils.Optional<LemburCountAggregateOutputType> | number
          }
        }
      }
      Karyawan: {
        payload: Prisma.$KaryawanPayload<ExtArgs>
        fields: Prisma.KaryawanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KaryawanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KaryawanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findFirst: {
            args: Prisma.KaryawanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KaryawanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          findMany: {
            args: Prisma.KaryawanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>[]
          }
          create: {
            args: Prisma.KaryawanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          createMany: {
            args: Prisma.KaryawanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KaryawanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          update: {
            args: Prisma.KaryawanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          deleteMany: {
            args: Prisma.KaryawanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KaryawanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KaryawanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KaryawanPayload>
          }
          aggregate: {
            args: Prisma.KaryawanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKaryawan>
          }
          groupBy: {
            args: Prisma.KaryawanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KaryawanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KaryawanCountArgs<ExtArgs>,
            result: $Utils.Optional<KaryawanCountAggregateOutputType> | number
          }
        }
      }
      Potongan: {
        payload: Prisma.$PotonganPayload<ExtArgs>
        fields: Prisma.PotonganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PotonganFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PotonganFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          findFirst: {
            args: Prisma.PotonganFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PotonganFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          findMany: {
            args: Prisma.PotonganFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>[]
          }
          create: {
            args: Prisma.PotonganCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          createMany: {
            args: Prisma.PotonganCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PotonganDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          update: {
            args: Prisma.PotonganUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          deleteMany: {
            args: Prisma.PotonganDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PotonganUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PotonganUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PotonganPayload>
          }
          aggregate: {
            args: Prisma.PotonganAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePotongan>
          }
          groupBy: {
            args: Prisma.PotonganGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PotonganGroupByOutputType>[]
          }
          count: {
            args: Prisma.PotonganCountArgs<ExtArgs>,
            result: $Utils.Optional<PotonganCountAggregateOutputType> | number
          }
        }
      }
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>,
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
      Gaji: {
        payload: Prisma.$GajiPayload<ExtArgs>
        fields: Prisma.GajiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GajiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GajiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          findFirst: {
            args: Prisma.GajiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GajiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          findMany: {
            args: Prisma.GajiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>[]
          }
          create: {
            args: Prisma.GajiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          createMany: {
            args: Prisma.GajiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GajiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          update: {
            args: Prisma.GajiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          deleteMany: {
            args: Prisma.GajiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GajiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GajiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GajiPayload>
          }
          aggregate: {
            args: Prisma.GajiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGaji>
          }
          groupBy: {
            args: Prisma.GajiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GajiGroupByOutputType>[]
          }
          count: {
            args: Prisma.GajiCountArgs<ExtArgs>,
            result: $Utils.Optional<GajiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JabatanCountOutputType
   */

  export type JabatanCountOutputType = {
    Gaji: number
    Karyawan: number
  }

  export type JabatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Gaji?: boolean | JabatanCountOutputTypeCountGajiArgs
    Karyawan?: boolean | JabatanCountOutputTypeCountKaryawanArgs
  }

  // Custom InputTypes
  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JabatanCountOutputType
     */
    select?: JabatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountGajiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GajiWhereInput
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountKaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
  }


  /**
   * Count Type KaryawanCountOutputType
   */

  export type KaryawanCountOutputType = {
    Potongan: number
    Absensi: number
    Gaji: number
    Lembur: number
  }

  export type KaryawanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Potongan?: boolean | KaryawanCountOutputTypeCountPotonganArgs
    Absensi?: boolean | KaryawanCountOutputTypeCountAbsensiArgs
    Gaji?: boolean | KaryawanCountOutputTypeCountGajiArgs
    Lembur?: boolean | KaryawanCountOutputTypeCountLemburArgs
  }

  // Custom InputTypes
  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KaryawanCountOutputType
     */
    select?: KaryawanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountPotonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PotonganWhereInput
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountGajiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GajiWhereInput
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountLemburArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LemburWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Jabatan
   */

  export type AggregateJabatan = {
    _count: JabatanCountAggregateOutputType | null
    _avg: JabatanAvgAggregateOutputType | null
    _sum: JabatanSumAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  export type JabatanAvgAggregateOutputType = {
    id: number | null
    tunjangan_jabatan: number | null
  }

  export type JabatanSumAggregateOutputType = {
    id: number | null
    tunjangan_jabatan: number | null
  }

  export type JabatanMinAggregateOutputType = {
    id: number | null
    nama_jabatan: string | null
    tunjangan_jabatan: number | null
    division: string | null
    status: boolean | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JabatanMaxAggregateOutputType = {
    id: number | null
    nama_jabatan: string | null
    tunjangan_jabatan: number | null
    division: string | null
    status: boolean | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JabatanCountAggregateOutputType = {
    id: number
    nama_jabatan: number
    tunjangan_jabatan: number
    division: number
    status: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JabatanAvgAggregateInputType = {
    id?: true
    tunjangan_jabatan?: true
  }

  export type JabatanSumAggregateInputType = {
    id?: true
    tunjangan_jabatan?: true
  }

  export type JabatanMinAggregateInputType = {
    id?: true
    nama_jabatan?: true
    tunjangan_jabatan?: true
    division?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JabatanMaxAggregateInputType = {
    id?: true
    nama_jabatan?: true
    tunjangan_jabatan?: true
    division?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JabatanCountAggregateInputType = {
    id?: true
    nama_jabatan?: true
    tunjangan_jabatan?: true
    division?: true
    status?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JabatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatan to aggregate.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jabatans
    **/
    _count?: true | JabatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JabatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JabatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JabatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JabatanMaxAggregateInputType
  }

  export type GetJabatanAggregateType<T extends JabatanAggregateArgs> = {
        [P in keyof T & keyof AggregateJabatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJabatan[P]>
      : GetScalarType<T[P], AggregateJabatan[P]>
  }




  export type JabatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JabatanWhereInput
    orderBy?: JabatanOrderByWithAggregationInput | JabatanOrderByWithAggregationInput[]
    by: JabatanScalarFieldEnum[] | JabatanScalarFieldEnum
    having?: JabatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JabatanCountAggregateInputType | true
    _avg?: JabatanAvgAggregateInputType
    _sum?: JabatanSumAggregateInputType
    _min?: JabatanMinAggregateInputType
    _max?: JabatanMaxAggregateInputType
  }

  export type JabatanGroupByOutputType = {
    id: number
    nama_jabatan: string
    tunjangan_jabatan: number
    division: string | null
    status: boolean
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: JabatanCountAggregateOutputType | null
    _avg: JabatanAvgAggregateOutputType | null
    _sum: JabatanSumAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  type GetJabatanGroupByPayload<T extends JabatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JabatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JabatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JabatanGroupByOutputType[P]>
            : GetScalarType<T[P], JabatanGroupByOutputType[P]>
        }
      >
    >


  export type JabatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_jabatan?: boolean
    tunjangan_jabatan?: boolean
    division?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Gaji?: boolean | Jabatan$GajiArgs<ExtArgs>
    Karyawan?: boolean | Jabatan$KaryawanArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jabatan"]>


  export type JabatanSelectScalar = {
    id?: boolean
    nama_jabatan?: boolean
    tunjangan_jabatan?: boolean
    division?: boolean
    status?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JabatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Gaji?: boolean | Jabatan$GajiArgs<ExtArgs>
    Karyawan?: boolean | Jabatan$KaryawanArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JabatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jabatan"
    objects: {
      Gaji: Prisma.$GajiPayload<ExtArgs>[]
      Karyawan: Prisma.$KaryawanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_jabatan: string
      tunjangan_jabatan: number
      division: string | null
      status: boolean
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jabatan"]>
    composites: {}
  }

  type JabatanGetPayload<S extends boolean | null | undefined | JabatanDefaultArgs> = $Result.GetResult<Prisma.$JabatanPayload, S>

  type JabatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JabatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JabatanCountAggregateInputType | true
    }

  export interface JabatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jabatan'], meta: { name: 'Jabatan' } }
    /**
     * Find zero or one Jabatan that matches the filter.
     * @param {JabatanFindUniqueArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JabatanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanFindUniqueArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jabatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JabatanFindUniqueOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JabatanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JabatanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanFindFirstArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindFirstOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JabatanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jabatans
     * const jabatans = await prisma.jabatan.findMany()
     * 
     * // Get first 10 Jabatans
     * const jabatans = await prisma.jabatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jabatanWithIdOnly = await prisma.jabatan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JabatanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jabatan.
     * @param {JabatanCreateArgs} args - Arguments to create a Jabatan.
     * @example
     * // Create one Jabatan
     * const Jabatan = await prisma.jabatan.create({
     *   data: {
     *     // ... data to create a Jabatan
     *   }
     * })
     * 
    **/
    create<T extends JabatanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanCreateArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jabatans.
     * @param {JabatanCreateManyArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends JabatanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jabatan.
     * @param {JabatanDeleteArgs} args - Arguments to delete one Jabatan.
     * @example
     * // Delete one Jabatan
     * const Jabatan = await prisma.jabatan.delete({
     *   where: {
     *     // ... filter to delete one Jabatan
     *   }
     * })
     * 
    **/
    delete<T extends JabatanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanDeleteArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jabatan.
     * @param {JabatanUpdateArgs} args - Arguments to update one Jabatan.
     * @example
     * // Update one Jabatan
     * const jabatan = await prisma.jabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JabatanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanUpdateArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jabatans.
     * @param {JabatanDeleteManyArgs} args - Arguments to filter Jabatans to delete.
     * @example
     * // Delete a few Jabatans
     * const { count } = await prisma.jabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JabatanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JabatanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JabatanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jabatan.
     * @param {JabatanUpsertArgs} args - Arguments to update or create a Jabatan.
     * @example
     * // Update or create a Jabatan
     * const jabatan = await prisma.jabatan.upsert({
     *   create: {
     *     // ... data to create a Jabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jabatan we want to update
     *   }
     * })
    **/
    upsert<T extends JabatanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JabatanUpsertArgs<ExtArgs>>
    ): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanCountArgs} args - Arguments to filter Jabatans to count.
     * @example
     * // Count the number of Jabatans
     * const count = await prisma.jabatan.count({
     *   where: {
     *     // ... the filter for the Jabatans we want to count
     *   }
     * })
    **/
    count<T extends JabatanCountArgs>(
      args?: Subset<T, JabatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JabatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JabatanAggregateArgs>(args: Subset<T, JabatanAggregateArgs>): Prisma.PrismaPromise<GetJabatanAggregateType<T>>

    /**
     * Group by Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JabatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JabatanGroupByArgs['orderBy'] }
        : { orderBy?: JabatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jabatan model
   */
  readonly fields: JabatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jabatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JabatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Gaji<T extends Jabatan$GajiArgs<ExtArgs> = {}>(args?: Subset<T, Jabatan$GajiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findMany'> | Null>;

    Karyawan<T extends Jabatan$KaryawanArgs<ExtArgs> = {}>(args?: Subset<T, Jabatan$KaryawanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Jabatan model
   */ 
  interface JabatanFieldRefs {
    readonly id: FieldRef<"Jabatan", 'Int'>
    readonly nama_jabatan: FieldRef<"Jabatan", 'String'>
    readonly tunjangan_jabatan: FieldRef<"Jabatan", 'Int'>
    readonly division: FieldRef<"Jabatan", 'String'>
    readonly status: FieldRef<"Jabatan", 'Boolean'>
    readonly date: FieldRef<"Jabatan", 'DateTime'>
    readonly createdAt: FieldRef<"Jabatan", 'DateTime'>
    readonly updatedAt: FieldRef<"Jabatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jabatan findUnique
   */
  export type JabatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findUniqueOrThrow
   */
  export type JabatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan findFirst
   */
  export type JabatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findFirstOrThrow
   */
  export type JabatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatan to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan findMany
   */
  export type JabatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter, which Jabatans to fetch.
     */
    where?: JabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jabatans to fetch.
     */
    orderBy?: JabatanOrderByWithRelationInput | JabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jabatans.
     */
    cursor?: JabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jabatans.
     */
    skip?: number
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * Jabatan create
   */
  export type JabatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Jabatan.
     */
    data: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
  }

  /**
   * Jabatan createMany
   */
  export type JabatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jabatans.
     */
    data: JabatanCreateManyInput | JabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jabatan update
   */
  export type JabatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Jabatan.
     */
    data: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
    /**
     * Choose, which Jabatan to update.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan updateMany
   */
  export type JabatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jabatans.
     */
    data: XOR<JabatanUpdateManyMutationInput, JabatanUncheckedUpdateManyInput>
    /**
     * Filter which Jabatans to update
     */
    where?: JabatanWhereInput
  }

  /**
   * Jabatan upsert
   */
  export type JabatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Jabatan to update in case it exists.
     */
    where: JabatanWhereUniqueInput
    /**
     * In case the Jabatan found by the `where` argument doesn't exist, create a new Jabatan with this data.
     */
    create: XOR<JabatanCreateInput, JabatanUncheckedCreateInput>
    /**
     * In case the Jabatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JabatanUpdateInput, JabatanUncheckedUpdateInput>
  }

  /**
   * Jabatan delete
   */
  export type JabatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
    /**
     * Filter which Jabatan to delete.
     */
    where: JabatanWhereUniqueInput
  }

  /**
   * Jabatan deleteMany
   */
  export type JabatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jabatans to delete
     */
    where?: JabatanWhereInput
  }

  /**
   * Jabatan.Gaji
   */
  export type Jabatan$GajiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    where?: GajiWhereInput
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    cursor?: GajiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GajiScalarFieldEnum | GajiScalarFieldEnum[]
  }

  /**
   * Jabatan.Karyawan
   */
  export type Jabatan$KaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    cursor?: KaryawanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Jabatan without action
   */
  export type JabatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jabatan
     */
    select?: JabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JabatanInclude<ExtArgs> | null
  }


  /**
   * Model Lembur
   */

  export type AggregateLembur = {
    _count: LemburCountAggregateOutputType | null
    _avg: LemburAvgAggregateOutputType | null
    _sum: LemburSumAggregateOutputType | null
    _min: LemburMinAggregateOutputType | null
    _max: LemburMaxAggregateOutputType | null
  }

  export type LemburAvgAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    hari: number | null
    jumlah_jam: number | null
  }

  export type LemburSumAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    hari: number | null
    jumlah_jam: number | null
  }

  export type LemburMinAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    bulan: string | null
    tahun: string | null
    hari: number | null
    jumlah_jam: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LemburMaxAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    bulan: string | null
    tahun: string | null
    hari: number | null
    jumlah_jam: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LemburCountAggregateOutputType = {
    id: number
    id_karyawan: number
    bulan: number
    tahun: number
    hari: number
    jumlah_jam: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LemburAvgAggregateInputType = {
    id?: true
    id_karyawan?: true
    hari?: true
    jumlah_jam?: true
  }

  export type LemburSumAggregateInputType = {
    id?: true
    id_karyawan?: true
    hari?: true
    jumlah_jam?: true
  }

  export type LemburMinAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    hari?: true
    jumlah_jam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LemburMaxAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    hari?: true
    jumlah_jam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LemburCountAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    hari?: true
    jumlah_jam?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LemburAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lembur to aggregate.
     */
    where?: LemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lemburs to fetch.
     */
    orderBy?: LemburOrderByWithRelationInput | LemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lemburs
    **/
    _count?: true | LemburCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LemburAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LemburSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LemburMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LemburMaxAggregateInputType
  }

  export type GetLemburAggregateType<T extends LemburAggregateArgs> = {
        [P in keyof T & keyof AggregateLembur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLembur[P]>
      : GetScalarType<T[P], AggregateLembur[P]>
  }




  export type LemburGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LemburWhereInput
    orderBy?: LemburOrderByWithAggregationInput | LemburOrderByWithAggregationInput[]
    by: LemburScalarFieldEnum[] | LemburScalarFieldEnum
    having?: LemburScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LemburCountAggregateInputType | true
    _avg?: LemburAvgAggregateInputType
    _sum?: LemburSumAggregateInputType
    _min?: LemburMinAggregateInputType
    _max?: LemburMaxAggregateInputType
  }

  export type LemburGroupByOutputType = {
    id: number
    id_karyawan: number
    bulan: string | null
    tahun: string | null
    hari: number
    jumlah_jam: number
    createdAt: Date
    updatedAt: Date
    _count: LemburCountAggregateOutputType | null
    _avg: LemburAvgAggregateOutputType | null
    _sum: LemburSumAggregateOutputType | null
    _min: LemburMinAggregateOutputType | null
    _max: LemburMaxAggregateOutputType | null
  }

  type GetLemburGroupByPayload<T extends LemburGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LemburGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LemburGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LemburGroupByOutputType[P]>
            : GetScalarType<T[P], LemburGroupByOutputType[P]>
        }
      >
    >


  export type LemburSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_karyawan?: boolean
    bulan?: boolean
    tahun?: boolean
    hari?: boolean
    jumlah_jam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lembur"]>


  export type LemburSelectScalar = {
    id?: boolean
    id_karyawan?: boolean
    bulan?: boolean
    tahun?: boolean
    hari?: boolean
    jumlah_jam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LemburInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }

  export type $LemburPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lembur"
    objects: {
      karyawan: Prisma.$KaryawanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_karyawan: number
      bulan: string | null
      tahun: string | null
      hari: number
      jumlah_jam: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lembur"]>
    composites: {}
  }

  type LemburGetPayload<S extends boolean | null | undefined | LemburDefaultArgs> = $Result.GetResult<Prisma.$LemburPayload, S>

  type LemburCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LemburFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LemburCountAggregateInputType | true
    }

  export interface LemburDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lembur'], meta: { name: 'Lembur' } }
    /**
     * Find zero or one Lembur that matches the filter.
     * @param {LemburFindUniqueArgs} args - Arguments to find a Lembur
     * @example
     * // Get one Lembur
     * const lembur = await prisma.lembur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LemburFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LemburFindUniqueArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lembur that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LemburFindUniqueOrThrowArgs} args - Arguments to find a Lembur
     * @example
     * // Get one Lembur
     * const lembur = await prisma.lembur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LemburFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lembur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburFindFirstArgs} args - Arguments to find a Lembur
     * @example
     * // Get one Lembur
     * const lembur = await prisma.lembur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LemburFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburFindFirstArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lembur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburFindFirstOrThrowArgs} args - Arguments to find a Lembur
     * @example
     * // Get one Lembur
     * const lembur = await prisma.lembur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LemburFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lemburs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lemburs
     * const lemburs = await prisma.lembur.findMany()
     * 
     * // Get first 10 Lemburs
     * const lemburs = await prisma.lembur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lemburWithIdOnly = await prisma.lembur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LemburFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lembur.
     * @param {LemburCreateArgs} args - Arguments to create a Lembur.
     * @example
     * // Create one Lembur
     * const Lembur = await prisma.lembur.create({
     *   data: {
     *     // ... data to create a Lembur
     *   }
     * })
     * 
    **/
    create<T extends LemburCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LemburCreateArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lemburs.
     * @param {LemburCreateManyArgs} args - Arguments to create many Lemburs.
     * @example
     * // Create many Lemburs
     * const lembur = await prisma.lembur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LemburCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lembur.
     * @param {LemburDeleteArgs} args - Arguments to delete one Lembur.
     * @example
     * // Delete one Lembur
     * const Lembur = await prisma.lembur.delete({
     *   where: {
     *     // ... filter to delete one Lembur
     *   }
     * })
     * 
    **/
    delete<T extends LemburDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LemburDeleteArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lembur.
     * @param {LemburUpdateArgs} args - Arguments to update one Lembur.
     * @example
     * // Update one Lembur
     * const lembur = await prisma.lembur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LemburUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LemburUpdateArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lemburs.
     * @param {LemburDeleteManyArgs} args - Arguments to filter Lemburs to delete.
     * @example
     * // Delete a few Lemburs
     * const { count } = await prisma.lembur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LemburDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LemburDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lemburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lemburs
     * const lembur = await prisma.lembur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LemburUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LemburUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lembur.
     * @param {LemburUpsertArgs} args - Arguments to update or create a Lembur.
     * @example
     * // Update or create a Lembur
     * const lembur = await prisma.lembur.upsert({
     *   create: {
     *     // ... data to create a Lembur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lembur we want to update
     *   }
     * })
    **/
    upsert<T extends LemburUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LemburUpsertArgs<ExtArgs>>
    ): Prisma__LemburClient<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lemburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburCountArgs} args - Arguments to filter Lemburs to count.
     * @example
     * // Count the number of Lemburs
     * const count = await prisma.lembur.count({
     *   where: {
     *     // ... the filter for the Lemburs we want to count
     *   }
     * })
    **/
    count<T extends LemburCountArgs>(
      args?: Subset<T, LemburCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LemburCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lembur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LemburAggregateArgs>(args: Subset<T, LemburAggregateArgs>): Prisma.PrismaPromise<GetLemburAggregateType<T>>

    /**
     * Group by Lembur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LemburGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LemburGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LemburGroupByArgs['orderBy'] }
        : { orderBy?: LemburGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LemburGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLemburGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lembur model
   */
  readonly fields: LemburFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lembur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LemburClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    karyawan<T extends KaryawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KaryawanDefaultArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lembur model
   */ 
  interface LemburFieldRefs {
    readonly id: FieldRef<"Lembur", 'Int'>
    readonly id_karyawan: FieldRef<"Lembur", 'Int'>
    readonly bulan: FieldRef<"Lembur", 'String'>
    readonly tahun: FieldRef<"Lembur", 'String'>
    readonly hari: FieldRef<"Lembur", 'Int'>
    readonly jumlah_jam: FieldRef<"Lembur", 'Int'>
    readonly createdAt: FieldRef<"Lembur", 'DateTime'>
    readonly updatedAt: FieldRef<"Lembur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lembur findUnique
   */
  export type LemburFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter, which Lembur to fetch.
     */
    where: LemburWhereUniqueInput
  }

  /**
   * Lembur findUniqueOrThrow
   */
  export type LemburFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter, which Lembur to fetch.
     */
    where: LemburWhereUniqueInput
  }

  /**
   * Lembur findFirst
   */
  export type LemburFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter, which Lembur to fetch.
     */
    where?: LemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lemburs to fetch.
     */
    orderBy?: LemburOrderByWithRelationInput | LemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lemburs.
     */
    cursor?: LemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lemburs.
     */
    distinct?: LemburScalarFieldEnum | LemburScalarFieldEnum[]
  }

  /**
   * Lembur findFirstOrThrow
   */
  export type LemburFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter, which Lembur to fetch.
     */
    where?: LemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lemburs to fetch.
     */
    orderBy?: LemburOrderByWithRelationInput | LemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lemburs.
     */
    cursor?: LemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lemburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lemburs.
     */
    distinct?: LemburScalarFieldEnum | LemburScalarFieldEnum[]
  }

  /**
   * Lembur findMany
   */
  export type LemburFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter, which Lemburs to fetch.
     */
    where?: LemburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lemburs to fetch.
     */
    orderBy?: LemburOrderByWithRelationInput | LemburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lemburs.
     */
    cursor?: LemburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lemburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lemburs.
     */
    skip?: number
    distinct?: LemburScalarFieldEnum | LemburScalarFieldEnum[]
  }

  /**
   * Lembur create
   */
  export type LemburCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * The data needed to create a Lembur.
     */
    data: XOR<LemburCreateInput, LemburUncheckedCreateInput>
  }

  /**
   * Lembur createMany
   */
  export type LemburCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lemburs.
     */
    data: LemburCreateManyInput | LemburCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lembur update
   */
  export type LemburUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * The data needed to update a Lembur.
     */
    data: XOR<LemburUpdateInput, LemburUncheckedUpdateInput>
    /**
     * Choose, which Lembur to update.
     */
    where: LemburWhereUniqueInput
  }

  /**
   * Lembur updateMany
   */
  export type LemburUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lemburs.
     */
    data: XOR<LemburUpdateManyMutationInput, LemburUncheckedUpdateManyInput>
    /**
     * Filter which Lemburs to update
     */
    where?: LemburWhereInput
  }

  /**
   * Lembur upsert
   */
  export type LemburUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * The filter to search for the Lembur to update in case it exists.
     */
    where: LemburWhereUniqueInput
    /**
     * In case the Lembur found by the `where` argument doesn't exist, create a new Lembur with this data.
     */
    create: XOR<LemburCreateInput, LemburUncheckedCreateInput>
    /**
     * In case the Lembur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LemburUpdateInput, LemburUncheckedUpdateInput>
  }

  /**
   * Lembur delete
   */
  export type LemburDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    /**
     * Filter which Lembur to delete.
     */
    where: LemburWhereUniqueInput
  }

  /**
   * Lembur deleteMany
   */
  export type LemburDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lemburs to delete
     */
    where?: LemburWhereInput
  }

  /**
   * Lembur without action
   */
  export type LemburDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
  }


  /**
   * Model Karyawan
   */

  export type AggregateKaryawan = {
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  export type KaryawanAvgAggregateOutputType = {
    id: number | null
    id_jabatan: number | null
    no_telp: number | null
    gaji_pokok: number | null
  }

  export type KaryawanSumAggregateOutputType = {
    id: number | null
    id_jabatan: number | null
    no_telp: number | null
    gaji_pokok: number | null
  }

  export type KaryawanMinAggregateOutputType = {
    id: number | null
    id_jabatan: number | null
    nama_karyawan: string | null
    jenis_kelamin: string | null
    tgl_lahir: Date | null
    alamat: string | null
    agama: string | null
    no_telp: number | null
    email: string | null
    department: string | null
    gaji_pokok: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaryawanMaxAggregateOutputType = {
    id: number | null
    id_jabatan: number | null
    nama_karyawan: string | null
    jenis_kelamin: string | null
    tgl_lahir: Date | null
    alamat: string | null
    agama: string | null
    no_telp: number | null
    email: string | null
    department: string | null
    gaji_pokok: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KaryawanCountAggregateOutputType = {
    id: number
    id_jabatan: number
    nama_karyawan: number
    jenis_kelamin: number
    tgl_lahir: number
    alamat: number
    agama: number
    no_telp: number
    email: number
    department: number
    gaji_pokok: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KaryawanAvgAggregateInputType = {
    id?: true
    id_jabatan?: true
    no_telp?: true
    gaji_pokok?: true
  }

  export type KaryawanSumAggregateInputType = {
    id?: true
    id_jabatan?: true
    no_telp?: true
    gaji_pokok?: true
  }

  export type KaryawanMinAggregateInputType = {
    id?: true
    id_jabatan?: true
    nama_karyawan?: true
    jenis_kelamin?: true
    tgl_lahir?: true
    alamat?: true
    agama?: true
    no_telp?: true
    email?: true
    department?: true
    gaji_pokok?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaryawanMaxAggregateInputType = {
    id?: true
    id_jabatan?: true
    nama_karyawan?: true
    jenis_kelamin?: true
    tgl_lahir?: true
    alamat?: true
    agama?: true
    no_telp?: true
    email?: true
    department?: true
    gaji_pokok?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KaryawanCountAggregateInputType = {
    id?: true
    id_jabatan?: true
    nama_karyawan?: true
    jenis_kelamin?: true
    tgl_lahir?: true
    alamat?: true
    agama?: true
    no_telp?: true
    email?: true
    department?: true
    gaji_pokok?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KaryawanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawan to aggregate.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Karyawans
    **/
    _count?: true | KaryawanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaryawanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaryawanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaryawanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaryawanMaxAggregateInputType
  }

  export type GetKaryawanAggregateType<T extends KaryawanAggregateArgs> = {
        [P in keyof T & keyof AggregateKaryawan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKaryawan[P]>
      : GetScalarType<T[P], AggregateKaryawan[P]>
  }




  export type KaryawanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KaryawanWhereInput
    orderBy?: KaryawanOrderByWithAggregationInput | KaryawanOrderByWithAggregationInput[]
    by: KaryawanScalarFieldEnum[] | KaryawanScalarFieldEnum
    having?: KaryawanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaryawanCountAggregateInputType | true
    _avg?: KaryawanAvgAggregateInputType
    _sum?: KaryawanSumAggregateInputType
    _min?: KaryawanMinAggregateInputType
    _max?: KaryawanMaxAggregateInputType
  }

  export type KaryawanGroupByOutputType = {
    id: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt: Date
    updatedAt: Date
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  type GetKaryawanGroupByPayload<T extends KaryawanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaryawanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaryawanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
            : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
        }
      >
    >


  export type KaryawanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_jabatan?: boolean
    nama_karyawan?: boolean
    jenis_kelamin?: boolean
    tgl_lahir?: boolean
    alamat?: boolean
    agama?: boolean
    no_telp?: boolean
    email?: boolean
    department?: boolean
    gaji_pokok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    Potongan?: boolean | Karyawan$PotonganArgs<ExtArgs>
    Absensi?: boolean | Karyawan$AbsensiArgs<ExtArgs>
    Gaji?: boolean | Karyawan$GajiArgs<ExtArgs>
    Lembur?: boolean | Karyawan$LemburArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["karyawan"]>


  export type KaryawanSelectScalar = {
    id?: boolean
    id_jabatan?: boolean
    nama_karyawan?: boolean
    jenis_kelamin?: boolean
    tgl_lahir?: boolean
    alamat?: boolean
    agama?: boolean
    no_telp?: boolean
    email?: boolean
    department?: boolean
    gaji_pokok?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KaryawanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
    Potongan?: boolean | Karyawan$PotonganArgs<ExtArgs>
    Absensi?: boolean | Karyawan$AbsensiArgs<ExtArgs>
    Gaji?: boolean | Karyawan$GajiArgs<ExtArgs>
    Lembur?: boolean | Karyawan$LemburArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KaryawanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Karyawan"
    objects: {
      jabatan: Prisma.$JabatanPayload<ExtArgs>
      Potongan: Prisma.$PotonganPayload<ExtArgs>[]
      Absensi: Prisma.$AbsensiPayload<ExtArgs>[]
      Gaji: Prisma.$GajiPayload<ExtArgs>[]
      Lembur: Prisma.$LemburPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_jabatan: number
      nama_karyawan: string
      jenis_kelamin: string
      tgl_lahir: Date
      alamat: string
      agama: string
      no_telp: number
      email: string
      department: string
      gaji_pokok: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["karyawan"]>
    composites: {}
  }

  type KaryawanGetPayload<S extends boolean | null | undefined | KaryawanDefaultArgs> = $Result.GetResult<Prisma.$KaryawanPayload, S>

  type KaryawanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KaryawanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KaryawanCountAggregateInputType | true
    }

  export interface KaryawanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Karyawan'], meta: { name: 'Karyawan' } }
    /**
     * Find zero or one Karyawan that matches the filter.
     * @param {KaryawanFindUniqueArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KaryawanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanFindUniqueArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Karyawan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KaryawanFindUniqueOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KaryawanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Karyawan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KaryawanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanFindFirstArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Karyawan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindFirstOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KaryawanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Karyawans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karyawans
     * const karyawans = await prisma.karyawan.findMany()
     * 
     * // Get first 10 Karyawans
     * const karyawans = await prisma.karyawan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const karyawanWithIdOnly = await prisma.karyawan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KaryawanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Karyawan.
     * @param {KaryawanCreateArgs} args - Arguments to create a Karyawan.
     * @example
     * // Create one Karyawan
     * const Karyawan = await prisma.karyawan.create({
     *   data: {
     *     // ... data to create a Karyawan
     *   }
     * })
     * 
    **/
    create<T extends KaryawanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanCreateArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Karyawans.
     * @param {KaryawanCreateManyArgs} args - Arguments to create many Karyawans.
     * @example
     * // Create many Karyawans
     * const karyawan = await prisma.karyawan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends KaryawanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Karyawan.
     * @param {KaryawanDeleteArgs} args - Arguments to delete one Karyawan.
     * @example
     * // Delete one Karyawan
     * const Karyawan = await prisma.karyawan.delete({
     *   where: {
     *     // ... filter to delete one Karyawan
     *   }
     * })
     * 
    **/
    delete<T extends KaryawanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanDeleteArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Karyawan.
     * @param {KaryawanUpdateArgs} args - Arguments to update one Karyawan.
     * @example
     * // Update one Karyawan
     * const karyawan = await prisma.karyawan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KaryawanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanUpdateArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Karyawans.
     * @param {KaryawanDeleteManyArgs} args - Arguments to filter Karyawans to delete.
     * @example
     * // Delete a few Karyawans
     * const { count } = await prisma.karyawan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KaryawanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KaryawanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KaryawanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Karyawan.
     * @param {KaryawanUpsertArgs} args - Arguments to update or create a Karyawan.
     * @example
     * // Update or create a Karyawan
     * const karyawan = await prisma.karyawan.upsert({
     *   create: {
     *     // ... data to create a Karyawan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Karyawan we want to update
     *   }
     * })
    **/
    upsert<T extends KaryawanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KaryawanUpsertArgs<ExtArgs>>
    ): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanCountArgs} args - Arguments to filter Karyawans to count.
     * @example
     * // Count the number of Karyawans
     * const count = await prisma.karyawan.count({
     *   where: {
     *     // ... the filter for the Karyawans we want to count
     *   }
     * })
    **/
    count<T extends KaryawanCountArgs>(
      args?: Subset<T, KaryawanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaryawanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KaryawanAggregateArgs>(args: Subset<T, KaryawanAggregateArgs>): Prisma.PrismaPromise<GetKaryawanAggregateType<T>>

    /**
     * Group by Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KaryawanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KaryawanGroupByArgs['orderBy'] }
        : { orderBy?: KaryawanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KaryawanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaryawanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Karyawan model
   */
  readonly fields: KaryawanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Karyawan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KaryawanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jabatan<T extends JabatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JabatanDefaultArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Potongan<T extends Karyawan$PotonganArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$PotonganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findMany'> | Null>;

    Absensi<T extends Karyawan$AbsensiArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$AbsensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findMany'> | Null>;

    Gaji<T extends Karyawan$GajiArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$GajiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findMany'> | Null>;

    Lembur<T extends Karyawan$LemburArgs<ExtArgs> = {}>(args?: Subset<T, Karyawan$LemburArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LemburPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Karyawan model
   */ 
  interface KaryawanFieldRefs {
    readonly id: FieldRef<"Karyawan", 'Int'>
    readonly id_jabatan: FieldRef<"Karyawan", 'Int'>
    readonly nama_karyawan: FieldRef<"Karyawan", 'String'>
    readonly jenis_kelamin: FieldRef<"Karyawan", 'String'>
    readonly tgl_lahir: FieldRef<"Karyawan", 'DateTime'>
    readonly alamat: FieldRef<"Karyawan", 'String'>
    readonly agama: FieldRef<"Karyawan", 'String'>
    readonly no_telp: FieldRef<"Karyawan", 'Int'>
    readonly email: FieldRef<"Karyawan", 'String'>
    readonly department: FieldRef<"Karyawan", 'String'>
    readonly gaji_pokok: FieldRef<"Karyawan", 'Int'>
    readonly createdAt: FieldRef<"Karyawan", 'DateTime'>
    readonly updatedAt: FieldRef<"Karyawan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Karyawan findUnique
   */
  export type KaryawanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findUniqueOrThrow
   */
  export type KaryawanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan findFirst
   */
  export type KaryawanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findFirstOrThrow
   */
  export type KaryawanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawan to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan findMany
   */
  export type KaryawanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter, which Karyawans to fetch.
     */
    where?: KaryawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Karyawans to fetch.
     */
    orderBy?: KaryawanOrderByWithRelationInput | KaryawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Karyawans.
     */
    cursor?: KaryawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Karyawans.
     */
    skip?: number
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * Karyawan create
   */
  export type KaryawanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to create a Karyawan.
     */
    data: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
  }

  /**
   * Karyawan createMany
   */
  export type KaryawanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Karyawans.
     */
    data: KaryawanCreateManyInput | KaryawanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Karyawan update
   */
  export type KaryawanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The data needed to update a Karyawan.
     */
    data: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
    /**
     * Choose, which Karyawan to update.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan updateMany
   */
  export type KaryawanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Karyawans.
     */
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyInput>
    /**
     * Filter which Karyawans to update
     */
    where?: KaryawanWhereInput
  }

  /**
   * Karyawan upsert
   */
  export type KaryawanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * The filter to search for the Karyawan to update in case it exists.
     */
    where: KaryawanWhereUniqueInput
    /**
     * In case the Karyawan found by the `where` argument doesn't exist, create a new Karyawan with this data.
     */
    create: XOR<KaryawanCreateInput, KaryawanUncheckedCreateInput>
    /**
     * In case the Karyawan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KaryawanUpdateInput, KaryawanUncheckedUpdateInput>
  }

  /**
   * Karyawan delete
   */
  export type KaryawanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
    /**
     * Filter which Karyawan to delete.
     */
    where: KaryawanWhereUniqueInput
  }

  /**
   * Karyawan deleteMany
   */
  export type KaryawanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Karyawans to delete
     */
    where?: KaryawanWhereInput
  }

  /**
   * Karyawan.Potongan
   */
  export type Karyawan$PotonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    where?: PotonganWhereInput
    orderBy?: PotonganOrderByWithRelationInput | PotonganOrderByWithRelationInput[]
    cursor?: PotonganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PotonganScalarFieldEnum | PotonganScalarFieldEnum[]
  }

  /**
   * Karyawan.Absensi
   */
  export type Karyawan$AbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Karyawan.Gaji
   */
  export type Karyawan$GajiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    where?: GajiWhereInput
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    cursor?: GajiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GajiScalarFieldEnum | GajiScalarFieldEnum[]
  }

  /**
   * Karyawan.Lembur
   */
  export type Karyawan$LemburArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lembur
     */
    select?: LemburSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LemburInclude<ExtArgs> | null
    where?: LemburWhereInput
    orderBy?: LemburOrderByWithRelationInput | LemburOrderByWithRelationInput[]
    cursor?: LemburWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LemburScalarFieldEnum | LemburScalarFieldEnum[]
  }

  /**
   * Karyawan without action
   */
  export type KaryawanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Karyawan
     */
    select?: KaryawanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KaryawanInclude<ExtArgs> | null
  }


  /**
   * Model Potongan
   */

  export type AggregatePotongan = {
    _count: PotonganCountAggregateOutputType | null
    _avg: PotonganAvgAggregateOutputType | null
    _sum: PotonganSumAggregateOutputType | null
    _min: PotonganMinAggregateOutputType | null
    _max: PotonganMaxAggregateOutputType | null
  }

  export type PotonganAvgAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    nominal: number | null
  }

  export type PotonganSumAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    nominal: number | null
  }

  export type PotonganMinAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    bulan: string | null
    tahun: string | null
    nominal: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PotonganMaxAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    bulan: string | null
    tahun: string | null
    nominal: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PotonganCountAggregateOutputType = {
    id: number
    id_karyawan: number
    bulan: number
    tahun: number
    nominal: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PotonganAvgAggregateInputType = {
    id?: true
    id_karyawan?: true
    nominal?: true
  }

  export type PotonganSumAggregateInputType = {
    id?: true
    id_karyawan?: true
    nominal?: true
  }

  export type PotonganMinAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    nominal?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PotonganMaxAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    nominal?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PotonganCountAggregateInputType = {
    id?: true
    id_karyawan?: true
    bulan?: true
    tahun?: true
    nominal?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PotonganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Potongan to aggregate.
     */
    where?: PotonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Potongans to fetch.
     */
    orderBy?: PotonganOrderByWithRelationInput | PotonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PotonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Potongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Potongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Potongans
    **/
    _count?: true | PotonganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PotonganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PotonganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PotonganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PotonganMaxAggregateInputType
  }

  export type GetPotonganAggregateType<T extends PotonganAggregateArgs> = {
        [P in keyof T & keyof AggregatePotongan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePotongan[P]>
      : GetScalarType<T[P], AggregatePotongan[P]>
  }




  export type PotonganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PotonganWhereInput
    orderBy?: PotonganOrderByWithAggregationInput | PotonganOrderByWithAggregationInput[]
    by: PotonganScalarFieldEnum[] | PotonganScalarFieldEnum
    having?: PotonganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PotonganCountAggregateInputType | true
    _avg?: PotonganAvgAggregateInputType
    _sum?: PotonganSumAggregateInputType
    _min?: PotonganMinAggregateInputType
    _max?: PotonganMaxAggregateInputType
  }

  export type PotonganGroupByOutputType = {
    id: number
    id_karyawan: number
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt: Date
    updatedAt: Date
    _count: PotonganCountAggregateOutputType | null
    _avg: PotonganAvgAggregateOutputType | null
    _sum: PotonganSumAggregateOutputType | null
    _min: PotonganMinAggregateOutputType | null
    _max: PotonganMaxAggregateOutputType | null
  }

  type GetPotonganGroupByPayload<T extends PotonganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PotonganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PotonganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PotonganGroupByOutputType[P]>
            : GetScalarType<T[P], PotonganGroupByOutputType[P]>
        }
      >
    >


  export type PotonganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_karyawan?: boolean
    bulan?: boolean
    tahun?: boolean
    nominal?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["potongan"]>


  export type PotonganSelectScalar = {
    id?: boolean
    id_karyawan?: boolean
    bulan?: boolean
    tahun?: boolean
    nominal?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PotonganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }

  export type $PotonganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Potongan"
    objects: {
      karyawan: Prisma.$KaryawanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_karyawan: number
      bulan: string
      tahun: string
      nominal: number
      keterangan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["potongan"]>
    composites: {}
  }

  type PotonganGetPayload<S extends boolean | null | undefined | PotonganDefaultArgs> = $Result.GetResult<Prisma.$PotonganPayload, S>

  type PotonganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PotonganFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PotonganCountAggregateInputType | true
    }

  export interface PotonganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Potongan'], meta: { name: 'Potongan' } }
    /**
     * Find zero or one Potongan that matches the filter.
     * @param {PotonganFindUniqueArgs} args - Arguments to find a Potongan
     * @example
     * // Get one Potongan
     * const potongan = await prisma.potongan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PotonganFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganFindUniqueArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Potongan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PotonganFindUniqueOrThrowArgs} args - Arguments to find a Potongan
     * @example
     * // Get one Potongan
     * const potongan = await prisma.potongan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PotonganFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Potongan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganFindFirstArgs} args - Arguments to find a Potongan
     * @example
     * // Get one Potongan
     * const potongan = await prisma.potongan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PotonganFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganFindFirstArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Potongan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganFindFirstOrThrowArgs} args - Arguments to find a Potongan
     * @example
     * // Get one Potongan
     * const potongan = await prisma.potongan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PotonganFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Potongans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Potongans
     * const potongans = await prisma.potongan.findMany()
     * 
     * // Get first 10 Potongans
     * const potongans = await prisma.potongan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const potonganWithIdOnly = await prisma.potongan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PotonganFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Potongan.
     * @param {PotonganCreateArgs} args - Arguments to create a Potongan.
     * @example
     * // Create one Potongan
     * const Potongan = await prisma.potongan.create({
     *   data: {
     *     // ... data to create a Potongan
     *   }
     * })
     * 
    **/
    create<T extends PotonganCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganCreateArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Potongans.
     * @param {PotonganCreateManyArgs} args - Arguments to create many Potongans.
     * @example
     * // Create many Potongans
     * const potongan = await prisma.potongan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PotonganCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Potongan.
     * @param {PotonganDeleteArgs} args - Arguments to delete one Potongan.
     * @example
     * // Delete one Potongan
     * const Potongan = await prisma.potongan.delete({
     *   where: {
     *     // ... filter to delete one Potongan
     *   }
     * })
     * 
    **/
    delete<T extends PotonganDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganDeleteArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Potongan.
     * @param {PotonganUpdateArgs} args - Arguments to update one Potongan.
     * @example
     * // Update one Potongan
     * const potongan = await prisma.potongan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PotonganUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganUpdateArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Potongans.
     * @param {PotonganDeleteManyArgs} args - Arguments to filter Potongans to delete.
     * @example
     * // Delete a few Potongans
     * const { count } = await prisma.potongan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PotonganDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PotonganDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Potongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Potongans
     * const potongan = await prisma.potongan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PotonganUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Potongan.
     * @param {PotonganUpsertArgs} args - Arguments to update or create a Potongan.
     * @example
     * // Update or create a Potongan
     * const potongan = await prisma.potongan.upsert({
     *   create: {
     *     // ... data to create a Potongan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Potongan we want to update
     *   }
     * })
    **/
    upsert<T extends PotonganUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PotonganUpsertArgs<ExtArgs>>
    ): Prisma__PotonganClient<$Result.GetResult<Prisma.$PotonganPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Potongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganCountArgs} args - Arguments to filter Potongans to count.
     * @example
     * // Count the number of Potongans
     * const count = await prisma.potongan.count({
     *   where: {
     *     // ... the filter for the Potongans we want to count
     *   }
     * })
    **/
    count<T extends PotonganCountArgs>(
      args?: Subset<T, PotonganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PotonganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Potongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PotonganAggregateArgs>(args: Subset<T, PotonganAggregateArgs>): Prisma.PrismaPromise<GetPotonganAggregateType<T>>

    /**
     * Group by Potongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PotonganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PotonganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PotonganGroupByArgs['orderBy'] }
        : { orderBy?: PotonganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PotonganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPotonganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Potongan model
   */
  readonly fields: PotonganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Potongan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PotonganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    karyawan<T extends KaryawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KaryawanDefaultArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Potongan model
   */ 
  interface PotonganFieldRefs {
    readonly id: FieldRef<"Potongan", 'Int'>
    readonly id_karyawan: FieldRef<"Potongan", 'Int'>
    readonly bulan: FieldRef<"Potongan", 'String'>
    readonly tahun: FieldRef<"Potongan", 'String'>
    readonly nominal: FieldRef<"Potongan", 'Int'>
    readonly keterangan: FieldRef<"Potongan", 'String'>
    readonly createdAt: FieldRef<"Potongan", 'DateTime'>
    readonly updatedAt: FieldRef<"Potongan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Potongan findUnique
   */
  export type PotonganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter, which Potongan to fetch.
     */
    where: PotonganWhereUniqueInput
  }

  /**
   * Potongan findUniqueOrThrow
   */
  export type PotonganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter, which Potongan to fetch.
     */
    where: PotonganWhereUniqueInput
  }

  /**
   * Potongan findFirst
   */
  export type PotonganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter, which Potongan to fetch.
     */
    where?: PotonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Potongans to fetch.
     */
    orderBy?: PotonganOrderByWithRelationInput | PotonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Potongans.
     */
    cursor?: PotonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Potongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Potongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Potongans.
     */
    distinct?: PotonganScalarFieldEnum | PotonganScalarFieldEnum[]
  }

  /**
   * Potongan findFirstOrThrow
   */
  export type PotonganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter, which Potongan to fetch.
     */
    where?: PotonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Potongans to fetch.
     */
    orderBy?: PotonganOrderByWithRelationInput | PotonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Potongans.
     */
    cursor?: PotonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Potongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Potongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Potongans.
     */
    distinct?: PotonganScalarFieldEnum | PotonganScalarFieldEnum[]
  }

  /**
   * Potongan findMany
   */
  export type PotonganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter, which Potongans to fetch.
     */
    where?: PotonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Potongans to fetch.
     */
    orderBy?: PotonganOrderByWithRelationInput | PotonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Potongans.
     */
    cursor?: PotonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Potongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Potongans.
     */
    skip?: number
    distinct?: PotonganScalarFieldEnum | PotonganScalarFieldEnum[]
  }

  /**
   * Potongan create
   */
  export type PotonganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * The data needed to create a Potongan.
     */
    data: XOR<PotonganCreateInput, PotonganUncheckedCreateInput>
  }

  /**
   * Potongan createMany
   */
  export type PotonganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Potongans.
     */
    data: PotonganCreateManyInput | PotonganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Potongan update
   */
  export type PotonganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * The data needed to update a Potongan.
     */
    data: XOR<PotonganUpdateInput, PotonganUncheckedUpdateInput>
    /**
     * Choose, which Potongan to update.
     */
    where: PotonganWhereUniqueInput
  }

  /**
   * Potongan updateMany
   */
  export type PotonganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Potongans.
     */
    data: XOR<PotonganUpdateManyMutationInput, PotonganUncheckedUpdateManyInput>
    /**
     * Filter which Potongans to update
     */
    where?: PotonganWhereInput
  }

  /**
   * Potongan upsert
   */
  export type PotonganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * The filter to search for the Potongan to update in case it exists.
     */
    where: PotonganWhereUniqueInput
    /**
     * In case the Potongan found by the `where` argument doesn't exist, create a new Potongan with this data.
     */
    create: XOR<PotonganCreateInput, PotonganUncheckedCreateInput>
    /**
     * In case the Potongan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PotonganUpdateInput, PotonganUncheckedUpdateInput>
  }

  /**
   * Potongan delete
   */
  export type PotonganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
    /**
     * Filter which Potongan to delete.
     */
    where: PotonganWhereUniqueInput
  }

  /**
   * Potongan deleteMany
   */
  export type PotonganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Potongans to delete
     */
    where?: PotonganWhereInput
  }

  /**
   * Potongan without action
   */
  export type PotonganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Potongan
     */
    select?: PotonganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PotonganInclude<ExtArgs> | null
  }


  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiAvgAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
  }

  export type AbsensiSumAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    tgl: Date | null
    bulan: string | null
    tahun: string | null
    masuk: Date | null
    alfa: string | null
    sakit: string | null
    cuti: string | null
    shif: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    tgl: Date | null
    bulan: string | null
    tahun: string | null
    masuk: Date | null
    alfa: string | null
    sakit: string | null
    cuti: string | null
    shif: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    id_karyawan: number
    tgl: number
    bulan: number
    tahun: number
    masuk: number
    alfa: number
    sakit: number
    cuti: number
    shif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AbsensiAvgAggregateInputType = {
    id?: true
    id_karyawan?: true
  }

  export type AbsensiSumAggregateInputType = {
    id?: true
    id_karyawan?: true
  }

  export type AbsensiMinAggregateInputType = {
    id?: true
    id_karyawan?: true
    tgl?: true
    bulan?: true
    tahun?: true
    masuk?: true
    alfa?: true
    sakit?: true
    cuti?: true
    shif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    id_karyawan?: true
    tgl?: true
    bulan?: true
    tahun?: true
    masuk?: true
    alfa?: true
    sakit?: true
    cuti?: true
    shif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    id_karyawan?: true
    tgl?: true
    bulan?: true
    tahun?: true
    masuk?: true
    alfa?: true
    sakit?: true
    cuti?: true
    shif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _avg?: AbsensiAvgAggregateInputType
    _sum?: AbsensiSumAggregateInputType
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: number
    id_karyawan: number
    tgl: Date | null
    bulan: string | null
    tahun: string | null
    masuk: Date | null
    alfa: string | null
    sakit: string | null
    cuti: string | null
    shif: string | null
    createdAt: Date
    updatedAt: Date
    _count: AbsensiCountAggregateOutputType | null
    _avg: AbsensiAvgAggregateOutputType | null
    _sum: AbsensiSumAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_karyawan?: boolean
    tgl?: boolean
    bulan?: boolean
    tahun?: boolean
    masuk?: boolean
    alfa?: boolean
    sakit?: boolean
    cuti?: boolean
    shif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>


  export type AbsensiSelectScalar = {
    id?: boolean
    id_karyawan?: boolean
    tgl?: boolean
    bulan?: boolean
    tahun?: boolean
    masuk?: boolean
    alfa?: boolean
    sakit?: boolean
    cuti?: boolean
    shif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      karyawan: Prisma.$KaryawanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_karyawan: number
      tgl: Date | null
      bulan: string | null
      tahun: string | null
      masuk: Date | null
      alfa: string | null
      sakit: string | null
      cuti: string | null
      shif: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AbsensiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AbsensiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AbsensiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
    **/
    create<T extends AbsensiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AbsensiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
    **/
    delete<T extends AbsensiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AbsensiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AbsensiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AbsensiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
    **/
    upsert<T extends AbsensiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>
    ): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    karyawan<T extends KaryawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KaryawanDefaultArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Absensi model
   */ 
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'Int'>
    readonly id_karyawan: FieldRef<"Absensi", 'Int'>
    readonly tgl: FieldRef<"Absensi", 'DateTime'>
    readonly bulan: FieldRef<"Absensi", 'String'>
    readonly tahun: FieldRef<"Absensi", 'String'>
    readonly masuk: FieldRef<"Absensi", 'DateTime'>
    readonly alfa: FieldRef<"Absensi", 'String'>
    readonly sakit: FieldRef<"Absensi", 'String'>
    readonly cuti: FieldRef<"Absensi", 'String'>
    readonly shif: FieldRef<"Absensi", 'String'>
    readonly createdAt: FieldRef<"Absensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Absensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Model Gaji
   */

  export type AggregateGaji = {
    _count: GajiCountAggregateOutputType | null
    _avg: GajiAvgAggregateOutputType | null
    _sum: GajiSumAggregateOutputType | null
    _min: GajiMinAggregateOutputType | null
    _max: GajiMaxAggregateOutputType | null
  }

  export type GajiAvgAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    id_jabatan: number | null
    gaji: number | null
    gaji_kotor: number | null
    gaji_bersih: number | null
    uang_lembur: number | null
    uang_shift: number | null
    bonus: number | null
    tunjangan: number | null
    tunjangan_ramadhan: number | null
    potongan_bpjs: number | null
    potongan_pph21: number | null
    potongan_no_working: number | null
    potongan_lain: number | null
  }

  export type GajiSumAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    id_jabatan: number | null
    gaji: number | null
    gaji_kotor: number | null
    gaji_bersih: number | null
    uang_lembur: number | null
    uang_shift: number | null
    bonus: number | null
    tunjangan: number | null
    tunjangan_ramadhan: number | null
    potongan_bpjs: number | null
    potongan_pph21: number | null
    potongan_no_working: number | null
    potongan_lain: number | null
  }

  export type GajiMinAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    id_jabatan: number | null
    department: string | null
    bulan: string | null
    tahun: string | null
    gaji: number | null
    gaji_kotor: number | null
    gaji_bersih: number | null
    uang_lembur: number | null
    uang_shift: number | null
    bonus: number | null
    tunjangan: number | null
    tunjangan_ramadhan: number | null
    potongan_bpjs: number | null
    potongan_pph21: number | null
    potongan_no_working: number | null
    potongan_lain: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GajiMaxAggregateOutputType = {
    id: number | null
    id_karyawan: number | null
    id_jabatan: number | null
    department: string | null
    bulan: string | null
    tahun: string | null
    gaji: number | null
    gaji_kotor: number | null
    gaji_bersih: number | null
    uang_lembur: number | null
    uang_shift: number | null
    bonus: number | null
    tunjangan: number | null
    tunjangan_ramadhan: number | null
    potongan_bpjs: number | null
    potongan_pph21: number | null
    potongan_no_working: number | null
    potongan_lain: number | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GajiCountAggregateOutputType = {
    id: number
    id_karyawan: number
    id_jabatan: number
    department: number
    bulan: number
    tahun: number
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GajiAvgAggregateInputType = {
    id?: true
    id_karyawan?: true
    id_jabatan?: true
    gaji?: true
    gaji_kotor?: true
    gaji_bersih?: true
    uang_lembur?: true
    uang_shift?: true
    bonus?: true
    tunjangan?: true
    tunjangan_ramadhan?: true
    potongan_bpjs?: true
    potongan_pph21?: true
    potongan_no_working?: true
    potongan_lain?: true
  }

  export type GajiSumAggregateInputType = {
    id?: true
    id_karyawan?: true
    id_jabatan?: true
    gaji?: true
    gaji_kotor?: true
    gaji_bersih?: true
    uang_lembur?: true
    uang_shift?: true
    bonus?: true
    tunjangan?: true
    tunjangan_ramadhan?: true
    potongan_bpjs?: true
    potongan_pph21?: true
    potongan_no_working?: true
    potongan_lain?: true
  }

  export type GajiMinAggregateInputType = {
    id?: true
    id_karyawan?: true
    id_jabatan?: true
    department?: true
    bulan?: true
    tahun?: true
    gaji?: true
    gaji_kotor?: true
    gaji_bersih?: true
    uang_lembur?: true
    uang_shift?: true
    bonus?: true
    tunjangan?: true
    tunjangan_ramadhan?: true
    potongan_bpjs?: true
    potongan_pph21?: true
    potongan_no_working?: true
    potongan_lain?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GajiMaxAggregateInputType = {
    id?: true
    id_karyawan?: true
    id_jabatan?: true
    department?: true
    bulan?: true
    tahun?: true
    gaji?: true
    gaji_kotor?: true
    gaji_bersih?: true
    uang_lembur?: true
    uang_shift?: true
    bonus?: true
    tunjangan?: true
    tunjangan_ramadhan?: true
    potongan_bpjs?: true
    potongan_pph21?: true
    potongan_no_working?: true
    potongan_lain?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GajiCountAggregateInputType = {
    id?: true
    id_karyawan?: true
    id_jabatan?: true
    department?: true
    bulan?: true
    tahun?: true
    gaji?: true
    gaji_kotor?: true
    gaji_bersih?: true
    uang_lembur?: true
    uang_shift?: true
    bonus?: true
    tunjangan?: true
    tunjangan_ramadhan?: true
    potongan_bpjs?: true
    potongan_pph21?: true
    potongan_no_working?: true
    potongan_lain?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GajiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gaji to aggregate.
     */
    where?: GajiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gajis to fetch.
     */
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GajiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gajis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gajis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gajis
    **/
    _count?: true | GajiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GajiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GajiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GajiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GajiMaxAggregateInputType
  }

  export type GetGajiAggregateType<T extends GajiAggregateArgs> = {
        [P in keyof T & keyof AggregateGaji]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGaji[P]>
      : GetScalarType<T[P], AggregateGaji[P]>
  }




  export type GajiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GajiWhereInput
    orderBy?: GajiOrderByWithAggregationInput | GajiOrderByWithAggregationInput[]
    by: GajiScalarFieldEnum[] | GajiScalarFieldEnum
    having?: GajiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GajiCountAggregateInputType | true
    _avg?: GajiAvgAggregateInputType
    _sum?: GajiSumAggregateInputType
    _min?: GajiMinAggregateInputType
    _max?: GajiMaxAggregateInputType
  }

  export type GajiGroupByOutputType = {
    id: number
    id_karyawan: number
    id_jabatan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt: Date
    updatedAt: Date
    _count: GajiCountAggregateOutputType | null
    _avg: GajiAvgAggregateOutputType | null
    _sum: GajiSumAggregateOutputType | null
    _min: GajiMinAggregateOutputType | null
    _max: GajiMaxAggregateOutputType | null
  }

  type GetGajiGroupByPayload<T extends GajiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GajiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GajiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GajiGroupByOutputType[P]>
            : GetScalarType<T[P], GajiGroupByOutputType[P]>
        }
      >
    >


  export type GajiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_karyawan?: boolean
    id_jabatan?: boolean
    department?: boolean
    bulan?: boolean
    tahun?: boolean
    gaji?: boolean
    gaji_kotor?: boolean
    gaji_bersih?: boolean
    uang_lembur?: boolean
    uang_shift?: boolean
    bonus?: boolean
    tunjangan?: boolean
    tunjangan_ramadhan?: boolean
    potongan_bpjs?: boolean
    potongan_pph21?: boolean
    potongan_no_working?: boolean
    potongan_lain?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gaji"]>


  export type GajiSelectScalar = {
    id?: boolean
    id_karyawan?: boolean
    id_jabatan?: boolean
    department?: boolean
    bulan?: boolean
    tahun?: boolean
    gaji?: boolean
    gaji_kotor?: boolean
    gaji_bersih?: boolean
    uang_lembur?: boolean
    uang_shift?: boolean
    bonus?: boolean
    tunjangan?: boolean
    tunjangan_ramadhan?: boolean
    potongan_bpjs?: boolean
    potongan_pph21?: boolean
    potongan_no_working?: boolean
    potongan_lain?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GajiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    karyawan?: boolean | KaryawanDefaultArgs<ExtArgs>
    jabatan?: boolean | JabatanDefaultArgs<ExtArgs>
  }

  export type $GajiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gaji"
    objects: {
      karyawan: Prisma.$KaryawanPayload<ExtArgs>
      jabatan: Prisma.$JabatanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_karyawan: number
      id_jabatan: number
      department: string
      bulan: string
      tahun: string
      gaji: number
      gaji_kotor: number
      gaji_bersih: number
      uang_lembur: number
      uang_shift: number
      bonus: number
      tunjangan: number
      tunjangan_ramadhan: number
      potongan_bpjs: number
      potongan_pph21: number
      potongan_no_working: number
      potongan_lain: number
      keterangan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gaji"]>
    composites: {}
  }

  type GajiGetPayload<S extends boolean | null | undefined | GajiDefaultArgs> = $Result.GetResult<Prisma.$GajiPayload, S>

  type GajiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GajiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GajiCountAggregateInputType | true
    }

  export interface GajiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gaji'], meta: { name: 'Gaji' } }
    /**
     * Find zero or one Gaji that matches the filter.
     * @param {GajiFindUniqueArgs} args - Arguments to find a Gaji
     * @example
     * // Get one Gaji
     * const gaji = await prisma.gaji.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GajiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GajiFindUniqueArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gaji that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GajiFindUniqueOrThrowArgs} args - Arguments to find a Gaji
     * @example
     * // Get one Gaji
     * const gaji = await prisma.gaji.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GajiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gaji that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiFindFirstArgs} args - Arguments to find a Gaji
     * @example
     * // Get one Gaji
     * const gaji = await prisma.gaji.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GajiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiFindFirstArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gaji that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiFindFirstOrThrowArgs} args - Arguments to find a Gaji
     * @example
     * // Get one Gaji
     * const gaji = await prisma.gaji.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GajiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gajis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gajis
     * const gajis = await prisma.gaji.findMany()
     * 
     * // Get first 10 Gajis
     * const gajis = await prisma.gaji.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gajiWithIdOnly = await prisma.gaji.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GajiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gaji.
     * @param {GajiCreateArgs} args - Arguments to create a Gaji.
     * @example
     * // Create one Gaji
     * const Gaji = await prisma.gaji.create({
     *   data: {
     *     // ... data to create a Gaji
     *   }
     * })
     * 
    **/
    create<T extends GajiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GajiCreateArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Gajis.
     * @param {GajiCreateManyArgs} args - Arguments to create many Gajis.
     * @example
     * // Create many Gajis
     * const gaji = await prisma.gaji.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends GajiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gaji.
     * @param {GajiDeleteArgs} args - Arguments to delete one Gaji.
     * @example
     * // Delete one Gaji
     * const Gaji = await prisma.gaji.delete({
     *   where: {
     *     // ... filter to delete one Gaji
     *   }
     * })
     * 
    **/
    delete<T extends GajiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GajiDeleteArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gaji.
     * @param {GajiUpdateArgs} args - Arguments to update one Gaji.
     * @example
     * // Update one Gaji
     * const gaji = await prisma.gaji.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GajiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GajiUpdateArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gajis.
     * @param {GajiDeleteManyArgs} args - Arguments to filter Gajis to delete.
     * @example
     * // Delete a few Gajis
     * const { count } = await prisma.gaji.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GajiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GajiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gajis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gajis
     * const gaji = await prisma.gaji.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GajiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GajiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gaji.
     * @param {GajiUpsertArgs} args - Arguments to update or create a Gaji.
     * @example
     * // Update or create a Gaji
     * const gaji = await prisma.gaji.upsert({
     *   create: {
     *     // ... data to create a Gaji
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gaji we want to update
     *   }
     * })
    **/
    upsert<T extends GajiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GajiUpsertArgs<ExtArgs>>
    ): Prisma__GajiClient<$Result.GetResult<Prisma.$GajiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gajis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiCountArgs} args - Arguments to filter Gajis to count.
     * @example
     * // Count the number of Gajis
     * const count = await prisma.gaji.count({
     *   where: {
     *     // ... the filter for the Gajis we want to count
     *   }
     * })
    **/
    count<T extends GajiCountArgs>(
      args?: Subset<T, GajiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GajiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gaji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GajiAggregateArgs>(args: Subset<T, GajiAggregateArgs>): Prisma.PrismaPromise<GetGajiAggregateType<T>>

    /**
     * Group by Gaji.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GajiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GajiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GajiGroupByArgs['orderBy'] }
        : { orderBy?: GajiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GajiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGajiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gaji model
   */
  readonly fields: GajiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gaji.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GajiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    karyawan<T extends KaryawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KaryawanDefaultArgs<ExtArgs>>): Prisma__KaryawanClient<$Result.GetResult<Prisma.$KaryawanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jabatan<T extends JabatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JabatanDefaultArgs<ExtArgs>>): Prisma__JabatanClient<$Result.GetResult<Prisma.$JabatanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gaji model
   */ 
  interface GajiFieldRefs {
    readonly id: FieldRef<"Gaji", 'Int'>
    readonly id_karyawan: FieldRef<"Gaji", 'Int'>
    readonly id_jabatan: FieldRef<"Gaji", 'Int'>
    readonly department: FieldRef<"Gaji", 'String'>
    readonly bulan: FieldRef<"Gaji", 'String'>
    readonly tahun: FieldRef<"Gaji", 'String'>
    readonly gaji: FieldRef<"Gaji", 'Int'>
    readonly gaji_kotor: FieldRef<"Gaji", 'Int'>
    readonly gaji_bersih: FieldRef<"Gaji", 'Int'>
    readonly uang_lembur: FieldRef<"Gaji", 'Int'>
    readonly uang_shift: FieldRef<"Gaji", 'Int'>
    readonly bonus: FieldRef<"Gaji", 'Int'>
    readonly tunjangan: FieldRef<"Gaji", 'Int'>
    readonly tunjangan_ramadhan: FieldRef<"Gaji", 'Int'>
    readonly potongan_bpjs: FieldRef<"Gaji", 'Int'>
    readonly potongan_pph21: FieldRef<"Gaji", 'Int'>
    readonly potongan_no_working: FieldRef<"Gaji", 'Int'>
    readonly potongan_lain: FieldRef<"Gaji", 'Int'>
    readonly keterangan: FieldRef<"Gaji", 'String'>
    readonly createdAt: FieldRef<"Gaji", 'DateTime'>
    readonly updatedAt: FieldRef<"Gaji", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gaji findUnique
   */
  export type GajiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter, which Gaji to fetch.
     */
    where: GajiWhereUniqueInput
  }

  /**
   * Gaji findUniqueOrThrow
   */
  export type GajiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter, which Gaji to fetch.
     */
    where: GajiWhereUniqueInput
  }

  /**
   * Gaji findFirst
   */
  export type GajiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter, which Gaji to fetch.
     */
    where?: GajiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gajis to fetch.
     */
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gajis.
     */
    cursor?: GajiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gajis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gajis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gajis.
     */
    distinct?: GajiScalarFieldEnum | GajiScalarFieldEnum[]
  }

  /**
   * Gaji findFirstOrThrow
   */
  export type GajiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter, which Gaji to fetch.
     */
    where?: GajiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gajis to fetch.
     */
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gajis.
     */
    cursor?: GajiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gajis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gajis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gajis.
     */
    distinct?: GajiScalarFieldEnum | GajiScalarFieldEnum[]
  }

  /**
   * Gaji findMany
   */
  export type GajiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter, which Gajis to fetch.
     */
    where?: GajiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gajis to fetch.
     */
    orderBy?: GajiOrderByWithRelationInput | GajiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gajis.
     */
    cursor?: GajiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gajis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gajis.
     */
    skip?: number
    distinct?: GajiScalarFieldEnum | GajiScalarFieldEnum[]
  }

  /**
   * Gaji create
   */
  export type GajiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * The data needed to create a Gaji.
     */
    data: XOR<GajiCreateInput, GajiUncheckedCreateInput>
  }

  /**
   * Gaji createMany
   */
  export type GajiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gajis.
     */
    data: GajiCreateManyInput | GajiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gaji update
   */
  export type GajiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * The data needed to update a Gaji.
     */
    data: XOR<GajiUpdateInput, GajiUncheckedUpdateInput>
    /**
     * Choose, which Gaji to update.
     */
    where: GajiWhereUniqueInput
  }

  /**
   * Gaji updateMany
   */
  export type GajiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gajis.
     */
    data: XOR<GajiUpdateManyMutationInput, GajiUncheckedUpdateManyInput>
    /**
     * Filter which Gajis to update
     */
    where?: GajiWhereInput
  }

  /**
   * Gaji upsert
   */
  export type GajiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * The filter to search for the Gaji to update in case it exists.
     */
    where: GajiWhereUniqueInput
    /**
     * In case the Gaji found by the `where` argument doesn't exist, create a new Gaji with this data.
     */
    create: XOR<GajiCreateInput, GajiUncheckedCreateInput>
    /**
     * In case the Gaji was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GajiUpdateInput, GajiUncheckedUpdateInput>
  }

  /**
   * Gaji delete
   */
  export type GajiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
    /**
     * Filter which Gaji to delete.
     */
    where: GajiWhereUniqueInput
  }

  /**
   * Gaji deleteMany
   */
  export type GajiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gajis to delete
     */
    where?: GajiWhereInput
  }

  /**
   * Gaji without action
   */
  export type GajiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gaji
     */
    select?: GajiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GajiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JabatanScalarFieldEnum: {
    id: 'id',
    nama_jabatan: 'nama_jabatan',
    tunjangan_jabatan: 'tunjangan_jabatan',
    division: 'division',
    status: 'status',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JabatanScalarFieldEnum = (typeof JabatanScalarFieldEnum)[keyof typeof JabatanScalarFieldEnum]


  export const LemburScalarFieldEnum: {
    id: 'id',
    id_karyawan: 'id_karyawan',
    bulan: 'bulan',
    tahun: 'tahun',
    hari: 'hari',
    jumlah_jam: 'jumlah_jam',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LemburScalarFieldEnum = (typeof LemburScalarFieldEnum)[keyof typeof LemburScalarFieldEnum]


  export const KaryawanScalarFieldEnum: {
    id: 'id',
    id_jabatan: 'id_jabatan',
    nama_karyawan: 'nama_karyawan',
    jenis_kelamin: 'jenis_kelamin',
    tgl_lahir: 'tgl_lahir',
    alamat: 'alamat',
    agama: 'agama',
    no_telp: 'no_telp',
    email: 'email',
    department: 'department',
    gaji_pokok: 'gaji_pokok',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KaryawanScalarFieldEnum = (typeof KaryawanScalarFieldEnum)[keyof typeof KaryawanScalarFieldEnum]


  export const PotonganScalarFieldEnum: {
    id: 'id',
    id_karyawan: 'id_karyawan',
    bulan: 'bulan',
    tahun: 'tahun',
    nominal: 'nominal',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PotonganScalarFieldEnum = (typeof PotonganScalarFieldEnum)[keyof typeof PotonganScalarFieldEnum]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    id_karyawan: 'id_karyawan',
    tgl: 'tgl',
    bulan: 'bulan',
    tahun: 'tahun',
    masuk: 'masuk',
    alfa: 'alfa',
    sakit: 'sakit',
    cuti: 'cuti',
    shif: 'shif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const GajiScalarFieldEnum: {
    id: 'id',
    id_karyawan: 'id_karyawan',
    id_jabatan: 'id_jabatan',
    department: 'department',
    bulan: 'bulan',
    tahun: 'tahun',
    gaji: 'gaji',
    gaji_kotor: 'gaji_kotor',
    gaji_bersih: 'gaji_bersih',
    uang_lembur: 'uang_lembur',
    uang_shift: 'uang_shift',
    bonus: 'bonus',
    tunjangan: 'tunjangan',
    tunjangan_ramadhan: 'tunjangan_ramadhan',
    potongan_bpjs: 'potongan_bpjs',
    potongan_pph21: 'potongan_pph21',
    potongan_no_working: 'potongan_no_working',
    potongan_lain: 'potongan_lain',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GajiScalarFieldEnum = (typeof GajiScalarFieldEnum)[keyof typeof GajiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JabatanWhereInput = {
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    id?: IntFilter<"Jabatan"> | number
    nama_jabatan?: StringFilter<"Jabatan"> | string
    tunjangan_jabatan?: IntFilter<"Jabatan"> | number
    division?: StringNullableFilter<"Jabatan"> | string | null
    status?: BoolFilter<"Jabatan"> | boolean
    date?: DateTimeFilter<"Jabatan"> | Date | string
    createdAt?: DateTimeFilter<"Jabatan"> | Date | string
    updatedAt?: DateTimeFilter<"Jabatan"> | Date | string
    Gaji?: GajiListRelationFilter
    Karyawan?: KaryawanListRelationFilter
  }

  export type JabatanOrderByWithRelationInput = {
    id?: SortOrder
    nama_jabatan?: SortOrder
    tunjangan_jabatan?: SortOrder
    division?: SortOrderInput | SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Gaji?: GajiOrderByRelationAggregateInput
    Karyawan?: KaryawanOrderByRelationAggregateInput
  }

  export type JabatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JabatanWhereInput | JabatanWhereInput[]
    OR?: JabatanWhereInput[]
    NOT?: JabatanWhereInput | JabatanWhereInput[]
    nama_jabatan?: StringFilter<"Jabatan"> | string
    tunjangan_jabatan?: IntFilter<"Jabatan"> | number
    division?: StringNullableFilter<"Jabatan"> | string | null
    status?: BoolFilter<"Jabatan"> | boolean
    date?: DateTimeFilter<"Jabatan"> | Date | string
    createdAt?: DateTimeFilter<"Jabatan"> | Date | string
    updatedAt?: DateTimeFilter<"Jabatan"> | Date | string
    Gaji?: GajiListRelationFilter
    Karyawan?: KaryawanListRelationFilter
  }, "id">

  export type JabatanOrderByWithAggregationInput = {
    id?: SortOrder
    nama_jabatan?: SortOrder
    tunjangan_jabatan?: SortOrder
    division?: SortOrderInput | SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JabatanCountOrderByAggregateInput
    _avg?: JabatanAvgOrderByAggregateInput
    _max?: JabatanMaxOrderByAggregateInput
    _min?: JabatanMinOrderByAggregateInput
    _sum?: JabatanSumOrderByAggregateInput
  }

  export type JabatanScalarWhereWithAggregatesInput = {
    AND?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    OR?: JabatanScalarWhereWithAggregatesInput[]
    NOT?: JabatanScalarWhereWithAggregatesInput | JabatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jabatan"> | number
    nama_jabatan?: StringWithAggregatesFilter<"Jabatan"> | string
    tunjangan_jabatan?: IntWithAggregatesFilter<"Jabatan"> | number
    division?: StringNullableWithAggregatesFilter<"Jabatan"> | string | null
    status?: BoolWithAggregatesFilter<"Jabatan"> | boolean
    date?: DateTimeWithAggregatesFilter<"Jabatan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Jabatan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jabatan"> | Date | string
  }

  export type LemburWhereInput = {
    AND?: LemburWhereInput | LemburWhereInput[]
    OR?: LemburWhereInput[]
    NOT?: LemburWhereInput | LemburWhereInput[]
    id?: IntFilter<"Lembur"> | number
    id_karyawan?: IntFilter<"Lembur"> | number
    bulan?: StringNullableFilter<"Lembur"> | string | null
    tahun?: StringNullableFilter<"Lembur"> | string | null
    hari?: IntFilter<"Lembur"> | number
    jumlah_jam?: IntFilter<"Lembur"> | number
    createdAt?: DateTimeFilter<"Lembur"> | Date | string
    updatedAt?: DateTimeFilter<"Lembur"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }

  export type LemburOrderByWithRelationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    karyawan?: KaryawanOrderByWithRelationInput
  }

  export type LemburWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LemburWhereInput | LemburWhereInput[]
    OR?: LemburWhereInput[]
    NOT?: LemburWhereInput | LemburWhereInput[]
    id_karyawan?: IntFilter<"Lembur"> | number
    bulan?: StringNullableFilter<"Lembur"> | string | null
    tahun?: StringNullableFilter<"Lembur"> | string | null
    hari?: IntFilter<"Lembur"> | number
    jumlah_jam?: IntFilter<"Lembur"> | number
    createdAt?: DateTimeFilter<"Lembur"> | Date | string
    updatedAt?: DateTimeFilter<"Lembur"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }, "id">

  export type LemburOrderByWithAggregationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LemburCountOrderByAggregateInput
    _avg?: LemburAvgOrderByAggregateInput
    _max?: LemburMaxOrderByAggregateInput
    _min?: LemburMinOrderByAggregateInput
    _sum?: LemburSumOrderByAggregateInput
  }

  export type LemburScalarWhereWithAggregatesInput = {
    AND?: LemburScalarWhereWithAggregatesInput | LemburScalarWhereWithAggregatesInput[]
    OR?: LemburScalarWhereWithAggregatesInput[]
    NOT?: LemburScalarWhereWithAggregatesInput | LemburScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lembur"> | number
    id_karyawan?: IntWithAggregatesFilter<"Lembur"> | number
    bulan?: StringNullableWithAggregatesFilter<"Lembur"> | string | null
    tahun?: StringNullableWithAggregatesFilter<"Lembur"> | string | null
    hari?: IntWithAggregatesFilter<"Lembur"> | number
    jumlah_jam?: IntWithAggregatesFilter<"Lembur"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lembur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lembur"> | Date | string
  }

  export type KaryawanWhereInput = {
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    id?: IntFilter<"Karyawan"> | number
    id_jabatan?: IntFilter<"Karyawan"> | number
    nama_karyawan?: StringFilter<"Karyawan"> | string
    jenis_kelamin?: StringFilter<"Karyawan"> | string
    tgl_lahir?: DateTimeFilter<"Karyawan"> | Date | string
    alamat?: StringFilter<"Karyawan"> | string
    agama?: StringFilter<"Karyawan"> | string
    no_telp?: IntFilter<"Karyawan"> | number
    email?: StringFilter<"Karyawan"> | string
    department?: StringFilter<"Karyawan"> | string
    gaji_pokok?: IntFilter<"Karyawan"> | number
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
    Potongan?: PotonganListRelationFilter
    Absensi?: AbsensiListRelationFilter
    Gaji?: GajiListRelationFilter
    Lembur?: LemburListRelationFilter
  }

  export type KaryawanOrderByWithRelationInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    nama_karyawan?: SortOrder
    jenis_kelamin?: SortOrder
    tgl_lahir?: SortOrder
    alamat?: SortOrder
    agama?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    department?: SortOrder
    gaji_pokok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jabatan?: JabatanOrderByWithRelationInput
    Potongan?: PotonganOrderByRelationAggregateInput
    Absensi?: AbsensiOrderByRelationAggregateInput
    Gaji?: GajiOrderByRelationAggregateInput
    Lembur?: LemburOrderByRelationAggregateInput
  }

  export type KaryawanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KaryawanWhereInput | KaryawanWhereInput[]
    OR?: KaryawanWhereInput[]
    NOT?: KaryawanWhereInput | KaryawanWhereInput[]
    id_jabatan?: IntFilter<"Karyawan"> | number
    nama_karyawan?: StringFilter<"Karyawan"> | string
    jenis_kelamin?: StringFilter<"Karyawan"> | string
    tgl_lahir?: DateTimeFilter<"Karyawan"> | Date | string
    alamat?: StringFilter<"Karyawan"> | string
    agama?: StringFilter<"Karyawan"> | string
    no_telp?: IntFilter<"Karyawan"> | number
    email?: StringFilter<"Karyawan"> | string
    department?: StringFilter<"Karyawan"> | string
    gaji_pokok?: IntFilter<"Karyawan"> | number
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
    Potongan?: PotonganListRelationFilter
    Absensi?: AbsensiListRelationFilter
    Gaji?: GajiListRelationFilter
    Lembur?: LemburListRelationFilter
  }, "id">

  export type KaryawanOrderByWithAggregationInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    nama_karyawan?: SortOrder
    jenis_kelamin?: SortOrder
    tgl_lahir?: SortOrder
    alamat?: SortOrder
    agama?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    department?: SortOrder
    gaji_pokok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KaryawanCountOrderByAggregateInput
    _avg?: KaryawanAvgOrderByAggregateInput
    _max?: KaryawanMaxOrderByAggregateInput
    _min?: KaryawanMinOrderByAggregateInput
    _sum?: KaryawanSumOrderByAggregateInput
  }

  export type KaryawanScalarWhereWithAggregatesInput = {
    AND?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    OR?: KaryawanScalarWhereWithAggregatesInput[]
    NOT?: KaryawanScalarWhereWithAggregatesInput | KaryawanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Karyawan"> | number
    id_jabatan?: IntWithAggregatesFilter<"Karyawan"> | number
    nama_karyawan?: StringWithAggregatesFilter<"Karyawan"> | string
    jenis_kelamin?: StringWithAggregatesFilter<"Karyawan"> | string
    tgl_lahir?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
    alamat?: StringWithAggregatesFilter<"Karyawan"> | string
    agama?: StringWithAggregatesFilter<"Karyawan"> | string
    no_telp?: IntWithAggregatesFilter<"Karyawan"> | number
    email?: StringWithAggregatesFilter<"Karyawan"> | string
    department?: StringWithAggregatesFilter<"Karyawan"> | string
    gaji_pokok?: IntWithAggregatesFilter<"Karyawan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Karyawan"> | Date | string
  }

  export type PotonganWhereInput = {
    AND?: PotonganWhereInput | PotonganWhereInput[]
    OR?: PotonganWhereInput[]
    NOT?: PotonganWhereInput | PotonganWhereInput[]
    id?: IntFilter<"Potongan"> | number
    id_karyawan?: IntFilter<"Potongan"> | number
    bulan?: StringFilter<"Potongan"> | string
    tahun?: StringFilter<"Potongan"> | string
    nominal?: IntFilter<"Potongan"> | number
    keterangan?: StringFilter<"Potongan"> | string
    createdAt?: DateTimeFilter<"Potongan"> | Date | string
    updatedAt?: DateTimeFilter<"Potongan"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }

  export type PotonganOrderByWithRelationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    nominal?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    karyawan?: KaryawanOrderByWithRelationInput
  }

  export type PotonganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PotonganWhereInput | PotonganWhereInput[]
    OR?: PotonganWhereInput[]
    NOT?: PotonganWhereInput | PotonganWhereInput[]
    id_karyawan?: IntFilter<"Potongan"> | number
    bulan?: StringFilter<"Potongan"> | string
    tahun?: StringFilter<"Potongan"> | string
    nominal?: IntFilter<"Potongan"> | number
    keterangan?: StringFilter<"Potongan"> | string
    createdAt?: DateTimeFilter<"Potongan"> | Date | string
    updatedAt?: DateTimeFilter<"Potongan"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }, "id">

  export type PotonganOrderByWithAggregationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    nominal?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PotonganCountOrderByAggregateInput
    _avg?: PotonganAvgOrderByAggregateInput
    _max?: PotonganMaxOrderByAggregateInput
    _min?: PotonganMinOrderByAggregateInput
    _sum?: PotonganSumOrderByAggregateInput
  }

  export type PotonganScalarWhereWithAggregatesInput = {
    AND?: PotonganScalarWhereWithAggregatesInput | PotonganScalarWhereWithAggregatesInput[]
    OR?: PotonganScalarWhereWithAggregatesInput[]
    NOT?: PotonganScalarWhereWithAggregatesInput | PotonganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Potongan"> | number
    id_karyawan?: IntWithAggregatesFilter<"Potongan"> | number
    bulan?: StringWithAggregatesFilter<"Potongan"> | string
    tahun?: StringWithAggregatesFilter<"Potongan"> | string
    nominal?: IntWithAggregatesFilter<"Potongan"> | number
    keterangan?: StringWithAggregatesFilter<"Potongan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Potongan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Potongan"> | Date | string
  }

  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: IntFilter<"Absensi"> | number
    id_karyawan?: IntFilter<"Absensi"> | number
    tgl?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    bulan?: StringNullableFilter<"Absensi"> | string | null
    tahun?: StringNullableFilter<"Absensi"> | string | null
    masuk?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    alfa?: StringNullableFilter<"Absensi"> | string | null
    sakit?: StringNullableFilter<"Absensi"> | string | null
    cuti?: StringNullableFilter<"Absensi"> | string | null
    shif?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    tgl?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    masuk?: SortOrderInput | SortOrder
    alfa?: SortOrderInput | SortOrder
    sakit?: SortOrderInput | SortOrder
    cuti?: SortOrderInput | SortOrder
    shif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    karyawan?: KaryawanOrderByWithRelationInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id_karyawan?: IntFilter<"Absensi"> | number
    tgl?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    bulan?: StringNullableFilter<"Absensi"> | string | null
    tahun?: StringNullableFilter<"Absensi"> | string | null
    masuk?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    alfa?: StringNullableFilter<"Absensi"> | string | null
    sakit?: StringNullableFilter<"Absensi"> | string | null
    cuti?: StringNullableFilter<"Absensi"> | string | null
    shif?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
  }, "id">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    tgl?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    masuk?: SortOrderInput | SortOrder
    alfa?: SortOrderInput | SortOrder
    sakit?: SortOrderInput | SortOrder
    cuti?: SortOrderInput | SortOrder
    shif?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _avg?: AbsensiAvgOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
    _sum?: AbsensiSumOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Absensi"> | number
    id_karyawan?: IntWithAggregatesFilter<"Absensi"> | number
    tgl?: DateTimeNullableWithAggregatesFilter<"Absensi"> | Date | string | null
    bulan?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    tahun?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    masuk?: DateTimeNullableWithAggregatesFilter<"Absensi"> | Date | string | null
    alfa?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    sakit?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    cuti?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    shif?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
  }

  export type GajiWhereInput = {
    AND?: GajiWhereInput | GajiWhereInput[]
    OR?: GajiWhereInput[]
    NOT?: GajiWhereInput | GajiWhereInput[]
    id?: IntFilter<"Gaji"> | number
    id_karyawan?: IntFilter<"Gaji"> | number
    id_jabatan?: IntFilter<"Gaji"> | number
    department?: StringFilter<"Gaji"> | string
    bulan?: StringFilter<"Gaji"> | string
    tahun?: StringFilter<"Gaji"> | string
    gaji?: IntFilter<"Gaji"> | number
    gaji_kotor?: IntFilter<"Gaji"> | number
    gaji_bersih?: IntFilter<"Gaji"> | number
    uang_lembur?: IntFilter<"Gaji"> | number
    uang_shift?: IntFilter<"Gaji"> | number
    bonus?: IntFilter<"Gaji"> | number
    tunjangan?: IntFilter<"Gaji"> | number
    tunjangan_ramadhan?: IntFilter<"Gaji"> | number
    potongan_bpjs?: IntFilter<"Gaji"> | number
    potongan_pph21?: IntFilter<"Gaji"> | number
    potongan_no_working?: IntFilter<"Gaji"> | number
    potongan_lain?: IntFilter<"Gaji"> | number
    keterangan?: StringFilter<"Gaji"> | string
    createdAt?: DateTimeFilter<"Gaji"> | Date | string
    updatedAt?: DateTimeFilter<"Gaji"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
  }

  export type GajiOrderByWithRelationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    department?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    karyawan?: KaryawanOrderByWithRelationInput
    jabatan?: JabatanOrderByWithRelationInput
  }

  export type GajiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GajiWhereInput | GajiWhereInput[]
    OR?: GajiWhereInput[]
    NOT?: GajiWhereInput | GajiWhereInput[]
    id_karyawan?: IntFilter<"Gaji"> | number
    id_jabatan?: IntFilter<"Gaji"> | number
    department?: StringFilter<"Gaji"> | string
    bulan?: StringFilter<"Gaji"> | string
    tahun?: StringFilter<"Gaji"> | string
    gaji?: IntFilter<"Gaji"> | number
    gaji_kotor?: IntFilter<"Gaji"> | number
    gaji_bersih?: IntFilter<"Gaji"> | number
    uang_lembur?: IntFilter<"Gaji"> | number
    uang_shift?: IntFilter<"Gaji"> | number
    bonus?: IntFilter<"Gaji"> | number
    tunjangan?: IntFilter<"Gaji"> | number
    tunjangan_ramadhan?: IntFilter<"Gaji"> | number
    potongan_bpjs?: IntFilter<"Gaji"> | number
    potongan_pph21?: IntFilter<"Gaji"> | number
    potongan_no_working?: IntFilter<"Gaji"> | number
    potongan_lain?: IntFilter<"Gaji"> | number
    keterangan?: StringFilter<"Gaji"> | string
    createdAt?: DateTimeFilter<"Gaji"> | Date | string
    updatedAt?: DateTimeFilter<"Gaji"> | Date | string
    karyawan?: XOR<KaryawanRelationFilter, KaryawanWhereInput>
    jabatan?: XOR<JabatanRelationFilter, JabatanWhereInput>
  }, "id">

  export type GajiOrderByWithAggregationInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    department?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GajiCountOrderByAggregateInput
    _avg?: GajiAvgOrderByAggregateInput
    _max?: GajiMaxOrderByAggregateInput
    _min?: GajiMinOrderByAggregateInput
    _sum?: GajiSumOrderByAggregateInput
  }

  export type GajiScalarWhereWithAggregatesInput = {
    AND?: GajiScalarWhereWithAggregatesInput | GajiScalarWhereWithAggregatesInput[]
    OR?: GajiScalarWhereWithAggregatesInput[]
    NOT?: GajiScalarWhereWithAggregatesInput | GajiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gaji"> | number
    id_karyawan?: IntWithAggregatesFilter<"Gaji"> | number
    id_jabatan?: IntWithAggregatesFilter<"Gaji"> | number
    department?: StringWithAggregatesFilter<"Gaji"> | string
    bulan?: StringWithAggregatesFilter<"Gaji"> | string
    tahun?: StringWithAggregatesFilter<"Gaji"> | string
    gaji?: IntWithAggregatesFilter<"Gaji"> | number
    gaji_kotor?: IntWithAggregatesFilter<"Gaji"> | number
    gaji_bersih?: IntWithAggregatesFilter<"Gaji"> | number
    uang_lembur?: IntWithAggregatesFilter<"Gaji"> | number
    uang_shift?: IntWithAggregatesFilter<"Gaji"> | number
    bonus?: IntWithAggregatesFilter<"Gaji"> | number
    tunjangan?: IntWithAggregatesFilter<"Gaji"> | number
    tunjangan_ramadhan?: IntWithAggregatesFilter<"Gaji"> | number
    potongan_bpjs?: IntWithAggregatesFilter<"Gaji"> | number
    potongan_pph21?: IntWithAggregatesFilter<"Gaji"> | number
    potongan_no_working?: IntWithAggregatesFilter<"Gaji"> | number
    potongan_lain?: IntWithAggregatesFilter<"Gaji"> | number
    keterangan?: StringWithAggregatesFilter<"Gaji"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gaji"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gaji"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JabatanCreateInput = {
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Gaji?: GajiCreateNestedManyWithoutJabatanInput
    Karyawan?: KaryawanCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateInput = {
    id?: number
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Gaji?: GajiUncheckedCreateNestedManyWithoutJabatanInput
    Karyawan?: KaryawanUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUpdateInput = {
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gaji?: GajiUpdateManyWithoutJabatanNestedInput
    Karyawan?: KaryawanUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gaji?: GajiUncheckedUpdateManyWithoutJabatanNestedInput
    Karyawan?: KaryawanUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanCreateManyInput = {
    id?: number
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JabatanUpdateManyMutationInput = {
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JabatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburCreateInput = {
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan: KaryawanCreateNestedOneWithoutLemburInput
  }

  export type LemburUncheckedCreateInput = {
    id?: number
    id_karyawan: number
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LemburUpdateInput = {
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneRequiredWithoutLemburNestedInput
  }

  export type LemburUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburCreateManyInput = {
    id?: number
    id_karyawan: number
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LemburUpdateManyMutationInput = {
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanCreateInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutKaryawanInput
    Potongan?: PotonganCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganUncheckedCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiUncheckedCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiUncheckedCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUpdateInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutKaryawanNestedInput
    Potongan?: PotonganUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUncheckedUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUncheckedUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanCreateManyInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanUpdateManyMutationInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganCreateInput = {
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan: KaryawanCreateNestedOneWithoutPotonganInput
  }

  export type PotonganUncheckedCreateInput = {
    id?: number
    id_karyawan: number
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PotonganUpdateInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneRequiredWithoutPotonganNestedInput
  }

  export type PotonganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganCreateManyInput = {
    id?: number
    id_karyawan: number
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PotonganUpdateManyMutationInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateInput = {
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan: KaryawanCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: number
    id_karyawan: number
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateInput = {
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyInput = {
    id?: number
    id_karyawan: number
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateManyMutationInput = {
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiCreateInput = {
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan: KaryawanCreateNestedOneWithoutGajiInput
    jabatan: JabatanCreateNestedOneWithoutGajiInput
  }

  export type GajiUncheckedCreateInput = {
    id?: number
    id_karyawan: number
    id_jabatan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiUpdateInput = {
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneRequiredWithoutGajiNestedInput
    jabatan?: JabatanUpdateOneRequiredWithoutGajiNestedInput
  }

  export type GajiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiCreateManyInput = {
    id?: number
    id_karyawan: number
    id_jabatan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiUpdateManyMutationInput = {
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type GajiListRelationFilter = {
    every?: GajiWhereInput
    some?: GajiWhereInput
    none?: GajiWhereInput
  }

  export type KaryawanListRelationFilter = {
    every?: KaryawanWhereInput
    some?: KaryawanWhereInput
    none?: KaryawanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GajiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KaryawanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JabatanCountOrderByAggregateInput = {
    id?: SortOrder
    nama_jabatan?: SortOrder
    tunjangan_jabatan?: SortOrder
    division?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JabatanAvgOrderByAggregateInput = {
    id?: SortOrder
    tunjangan_jabatan?: SortOrder
  }

  export type JabatanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_jabatan?: SortOrder
    tunjangan_jabatan?: SortOrder
    division?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JabatanMinOrderByAggregateInput = {
    id?: SortOrder
    nama_jabatan?: SortOrder
    tunjangan_jabatan?: SortOrder
    division?: SortOrder
    status?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JabatanSumOrderByAggregateInput = {
    id?: SortOrder
    tunjangan_jabatan?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type KaryawanRelationFilter = {
    is?: KaryawanWhereInput
    isNot?: KaryawanWhereInput
  }

  export type LemburCountOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LemburAvgOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
  }

  export type LemburMaxOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LemburMinOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LemburSumOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    hari?: SortOrder
    jumlah_jam?: SortOrder
  }

  export type JabatanRelationFilter = {
    is?: JabatanWhereInput
    isNot?: JabatanWhereInput
  }

  export type PotonganListRelationFilter = {
    every?: PotonganWhereInput
    some?: PotonganWhereInput
    none?: PotonganWhereInput
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type LemburListRelationFilter = {
    every?: LemburWhereInput
    some?: LemburWhereInput
    none?: LemburWhereInput
  }

  export type PotonganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LemburOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KaryawanCountOrderByAggregateInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    nama_karyawan?: SortOrder
    jenis_kelamin?: SortOrder
    tgl_lahir?: SortOrder
    alamat?: SortOrder
    agama?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    department?: SortOrder
    gaji_pokok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanAvgOrderByAggregateInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    no_telp?: SortOrder
    gaji_pokok?: SortOrder
  }

  export type KaryawanMaxOrderByAggregateInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    nama_karyawan?: SortOrder
    jenis_kelamin?: SortOrder
    tgl_lahir?: SortOrder
    alamat?: SortOrder
    agama?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    department?: SortOrder
    gaji_pokok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanMinOrderByAggregateInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    nama_karyawan?: SortOrder
    jenis_kelamin?: SortOrder
    tgl_lahir?: SortOrder
    alamat?: SortOrder
    agama?: SortOrder
    no_telp?: SortOrder
    email?: SortOrder
    department?: SortOrder
    gaji_pokok?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KaryawanSumOrderByAggregateInput = {
    id?: SortOrder
    id_jabatan?: SortOrder
    no_telp?: SortOrder
    gaji_pokok?: SortOrder
  }

  export type PotonganCountOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    nominal?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PotonganAvgOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    nominal?: SortOrder
  }

  export type PotonganMaxOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    nominal?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PotonganMinOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    nominal?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PotonganSumOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    nominal?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    tgl?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    masuk?: SortOrder
    alfa?: SortOrder
    sakit?: SortOrder
    cuti?: SortOrder
    shif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    tgl?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    masuk?: SortOrder
    alfa?: SortOrder
    sakit?: SortOrder
    cuti?: SortOrder
    shif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    tgl?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    masuk?: SortOrder
    alfa?: SortOrder
    sakit?: SortOrder
    cuti?: SortOrder
    shif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiSumOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GajiCountOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    department?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
  }

  export type GajiMaxOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    department?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiMinOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    department?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GajiSumOrderByAggregateInput = {
    id?: SortOrder
    id_karyawan?: SortOrder
    id_jabatan?: SortOrder
    gaji?: SortOrder
    gaji_kotor?: SortOrder
    gaji_bersih?: SortOrder
    uang_lembur?: SortOrder
    uang_shift?: SortOrder
    bonus?: SortOrder
    tunjangan?: SortOrder
    tunjangan_ramadhan?: SortOrder
    potongan_bpjs?: SortOrder
    potongan_pph21?: SortOrder
    potongan_no_working?: SortOrder
    potongan_lain?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GajiCreateNestedManyWithoutJabatanInput = {
    create?: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput> | GajiCreateWithoutJabatanInput[] | GajiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutJabatanInput | GajiCreateOrConnectWithoutJabatanInput[]
    createMany?: GajiCreateManyJabatanInputEnvelope
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
  }

  export type KaryawanCreateNestedManyWithoutJabatanInput = {
    create?: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput> | KaryawanCreateWithoutJabatanInput[] | KaryawanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutJabatanInput | KaryawanCreateOrConnectWithoutJabatanInput[]
    createMany?: KaryawanCreateManyJabatanInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type GajiUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput> | GajiCreateWithoutJabatanInput[] | GajiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutJabatanInput | GajiCreateOrConnectWithoutJabatanInput[]
    createMany?: GajiCreateManyJabatanInputEnvelope
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
  }

  export type KaryawanUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput> | KaryawanCreateWithoutJabatanInput[] | KaryawanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutJabatanInput | KaryawanCreateOrConnectWithoutJabatanInput[]
    createMany?: KaryawanCreateManyJabatanInputEnvelope
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GajiUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput> | GajiCreateWithoutJabatanInput[] | GajiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutJabatanInput | GajiCreateOrConnectWithoutJabatanInput[]
    upsert?: GajiUpsertWithWhereUniqueWithoutJabatanInput | GajiUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: GajiCreateManyJabatanInputEnvelope
    set?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    disconnect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    delete?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    update?: GajiUpdateWithWhereUniqueWithoutJabatanInput | GajiUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: GajiUpdateManyWithWhereWithoutJabatanInput | GajiUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: GajiScalarWhereInput | GajiScalarWhereInput[]
  }

  export type KaryawanUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput> | KaryawanCreateWithoutJabatanInput[] | KaryawanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutJabatanInput | KaryawanCreateOrConnectWithoutJabatanInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutJabatanInput | KaryawanUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: KaryawanCreateManyJabatanInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutJabatanInput | KaryawanUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutJabatanInput | KaryawanUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type GajiUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput> | GajiCreateWithoutJabatanInput[] | GajiUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutJabatanInput | GajiCreateOrConnectWithoutJabatanInput[]
    upsert?: GajiUpsertWithWhereUniqueWithoutJabatanInput | GajiUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: GajiCreateManyJabatanInputEnvelope
    set?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    disconnect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    delete?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    update?: GajiUpdateWithWhereUniqueWithoutJabatanInput | GajiUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: GajiUpdateManyWithWhereWithoutJabatanInput | GajiUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: GajiScalarWhereInput | GajiScalarWhereInput[]
  }

  export type KaryawanUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput> | KaryawanCreateWithoutJabatanInput[] | KaryawanUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: KaryawanCreateOrConnectWithoutJabatanInput | KaryawanCreateOrConnectWithoutJabatanInput[]
    upsert?: KaryawanUpsertWithWhereUniqueWithoutJabatanInput | KaryawanUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: KaryawanCreateManyJabatanInputEnvelope
    set?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    disconnect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    delete?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    connect?: KaryawanWhereUniqueInput | KaryawanWhereUniqueInput[]
    update?: KaryawanUpdateWithWhereUniqueWithoutJabatanInput | KaryawanUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: KaryawanUpdateManyWithWhereWithoutJabatanInput | KaryawanUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
  }

  export type KaryawanCreateNestedOneWithoutLemburInput = {
    create?: XOR<KaryawanCreateWithoutLemburInput, KaryawanUncheckedCreateWithoutLemburInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutLemburInput
    connect?: KaryawanWhereUniqueInput
  }

  export type KaryawanUpdateOneRequiredWithoutLemburNestedInput = {
    create?: XOR<KaryawanCreateWithoutLemburInput, KaryawanUncheckedCreateWithoutLemburInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutLemburInput
    upsert?: KaryawanUpsertWithoutLemburInput
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutLemburInput, KaryawanUpdateWithoutLemburInput>, KaryawanUncheckedUpdateWithoutLemburInput>
  }

  export type JabatanCreateNestedOneWithoutKaryawanInput = {
    create?: XOR<JabatanCreateWithoutKaryawanInput, JabatanUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutKaryawanInput
    connect?: JabatanWhereUniqueInput
  }

  export type PotonganCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput> | PotonganCreateWithoutKaryawanInput[] | PotonganUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: PotonganCreateOrConnectWithoutKaryawanInput | PotonganCreateOrConnectWithoutKaryawanInput[]
    createMany?: PotonganCreateManyKaryawanInputEnvelope
    connect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
  }

  export type AbsensiCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput> | AbsensiCreateWithoutKaryawanInput[] | AbsensiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKaryawanInput | AbsensiCreateOrConnectWithoutKaryawanInput[]
    createMany?: AbsensiCreateManyKaryawanInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type GajiCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput> | GajiCreateWithoutKaryawanInput[] | GajiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutKaryawanInput | GajiCreateOrConnectWithoutKaryawanInput[]
    createMany?: GajiCreateManyKaryawanInputEnvelope
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
  }

  export type LemburCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput> | LemburCreateWithoutKaryawanInput[] | LemburUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: LemburCreateOrConnectWithoutKaryawanInput | LemburCreateOrConnectWithoutKaryawanInput[]
    createMany?: LemburCreateManyKaryawanInputEnvelope
    connect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
  }

  export type PotonganUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput> | PotonganCreateWithoutKaryawanInput[] | PotonganUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: PotonganCreateOrConnectWithoutKaryawanInput | PotonganCreateOrConnectWithoutKaryawanInput[]
    createMany?: PotonganCreateManyKaryawanInputEnvelope
    connect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput> | AbsensiCreateWithoutKaryawanInput[] | AbsensiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKaryawanInput | AbsensiCreateOrConnectWithoutKaryawanInput[]
    createMany?: AbsensiCreateManyKaryawanInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type GajiUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput> | GajiCreateWithoutKaryawanInput[] | GajiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutKaryawanInput | GajiCreateOrConnectWithoutKaryawanInput[]
    createMany?: GajiCreateManyKaryawanInputEnvelope
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
  }

  export type LemburUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput> | LemburCreateWithoutKaryawanInput[] | LemburUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: LemburCreateOrConnectWithoutKaryawanInput | LemburCreateOrConnectWithoutKaryawanInput[]
    createMany?: LemburCreateManyKaryawanInputEnvelope
    connect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
  }

  export type JabatanUpdateOneRequiredWithoutKaryawanNestedInput = {
    create?: XOR<JabatanCreateWithoutKaryawanInput, JabatanUncheckedCreateWithoutKaryawanInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutKaryawanInput
    upsert?: JabatanUpsertWithoutKaryawanInput
    connect?: JabatanWhereUniqueInput
    update?: XOR<XOR<JabatanUpdateToOneWithWhereWithoutKaryawanInput, JabatanUpdateWithoutKaryawanInput>, JabatanUncheckedUpdateWithoutKaryawanInput>
  }

  export type PotonganUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput> | PotonganCreateWithoutKaryawanInput[] | PotonganUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: PotonganCreateOrConnectWithoutKaryawanInput | PotonganCreateOrConnectWithoutKaryawanInput[]
    upsert?: PotonganUpsertWithWhereUniqueWithoutKaryawanInput | PotonganUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: PotonganCreateManyKaryawanInputEnvelope
    set?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    disconnect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    delete?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    connect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    update?: PotonganUpdateWithWhereUniqueWithoutKaryawanInput | PotonganUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: PotonganUpdateManyWithWhereWithoutKaryawanInput | PotonganUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: PotonganScalarWhereInput | PotonganScalarWhereInput[]
  }

  export type AbsensiUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput> | AbsensiCreateWithoutKaryawanInput[] | AbsensiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKaryawanInput | AbsensiCreateOrConnectWithoutKaryawanInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutKaryawanInput | AbsensiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: AbsensiCreateManyKaryawanInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutKaryawanInput | AbsensiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutKaryawanInput | AbsensiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type GajiUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput> | GajiCreateWithoutKaryawanInput[] | GajiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutKaryawanInput | GajiCreateOrConnectWithoutKaryawanInput[]
    upsert?: GajiUpsertWithWhereUniqueWithoutKaryawanInput | GajiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: GajiCreateManyKaryawanInputEnvelope
    set?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    disconnect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    delete?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    update?: GajiUpdateWithWhereUniqueWithoutKaryawanInput | GajiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: GajiUpdateManyWithWhereWithoutKaryawanInput | GajiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: GajiScalarWhereInput | GajiScalarWhereInput[]
  }

  export type LemburUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput> | LemburCreateWithoutKaryawanInput[] | LemburUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: LemburCreateOrConnectWithoutKaryawanInput | LemburCreateOrConnectWithoutKaryawanInput[]
    upsert?: LemburUpsertWithWhereUniqueWithoutKaryawanInput | LemburUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: LemburCreateManyKaryawanInputEnvelope
    set?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    disconnect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    delete?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    connect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    update?: LemburUpdateWithWhereUniqueWithoutKaryawanInput | LemburUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: LemburUpdateManyWithWhereWithoutKaryawanInput | LemburUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: LemburScalarWhereInput | LemburScalarWhereInput[]
  }

  export type PotonganUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput> | PotonganCreateWithoutKaryawanInput[] | PotonganUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: PotonganCreateOrConnectWithoutKaryawanInput | PotonganCreateOrConnectWithoutKaryawanInput[]
    upsert?: PotonganUpsertWithWhereUniqueWithoutKaryawanInput | PotonganUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: PotonganCreateManyKaryawanInputEnvelope
    set?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    disconnect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    delete?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    connect?: PotonganWhereUniqueInput | PotonganWhereUniqueInput[]
    update?: PotonganUpdateWithWhereUniqueWithoutKaryawanInput | PotonganUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: PotonganUpdateManyWithWhereWithoutKaryawanInput | PotonganUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: PotonganScalarWhereInput | PotonganScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput> | AbsensiCreateWithoutKaryawanInput[] | AbsensiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutKaryawanInput | AbsensiCreateOrConnectWithoutKaryawanInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutKaryawanInput | AbsensiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: AbsensiCreateManyKaryawanInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutKaryawanInput | AbsensiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutKaryawanInput | AbsensiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type GajiUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput> | GajiCreateWithoutKaryawanInput[] | GajiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: GajiCreateOrConnectWithoutKaryawanInput | GajiCreateOrConnectWithoutKaryawanInput[]
    upsert?: GajiUpsertWithWhereUniqueWithoutKaryawanInput | GajiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: GajiCreateManyKaryawanInputEnvelope
    set?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    disconnect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    delete?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    connect?: GajiWhereUniqueInput | GajiWhereUniqueInput[]
    update?: GajiUpdateWithWhereUniqueWithoutKaryawanInput | GajiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: GajiUpdateManyWithWhereWithoutKaryawanInput | GajiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: GajiScalarWhereInput | GajiScalarWhereInput[]
  }

  export type LemburUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput> | LemburCreateWithoutKaryawanInput[] | LemburUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: LemburCreateOrConnectWithoutKaryawanInput | LemburCreateOrConnectWithoutKaryawanInput[]
    upsert?: LemburUpsertWithWhereUniqueWithoutKaryawanInput | LemburUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: LemburCreateManyKaryawanInputEnvelope
    set?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    disconnect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    delete?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    connect?: LemburWhereUniqueInput | LemburWhereUniqueInput[]
    update?: LemburUpdateWithWhereUniqueWithoutKaryawanInput | LemburUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: LemburUpdateManyWithWhereWithoutKaryawanInput | LemburUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: LemburScalarWhereInput | LemburScalarWhereInput[]
  }

  export type KaryawanCreateNestedOneWithoutPotonganInput = {
    create?: XOR<KaryawanCreateWithoutPotonganInput, KaryawanUncheckedCreateWithoutPotonganInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutPotonganInput
    connect?: KaryawanWhereUniqueInput
  }

  export type KaryawanUpdateOneRequiredWithoutPotonganNestedInput = {
    create?: XOR<KaryawanCreateWithoutPotonganInput, KaryawanUncheckedCreateWithoutPotonganInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutPotonganInput
    upsert?: KaryawanUpsertWithoutPotonganInput
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutPotonganInput, KaryawanUpdateWithoutPotonganInput>, KaryawanUncheckedUpdateWithoutPotonganInput>
  }

  export type KaryawanCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<KaryawanCreateWithoutAbsensiInput, KaryawanUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutAbsensiInput
    connect?: KaryawanWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type KaryawanUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<KaryawanCreateWithoutAbsensiInput, KaryawanUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutAbsensiInput
    upsert?: KaryawanUpsertWithoutAbsensiInput
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutAbsensiInput, KaryawanUpdateWithoutAbsensiInput>, KaryawanUncheckedUpdateWithoutAbsensiInput>
  }

  export type KaryawanCreateNestedOneWithoutGajiInput = {
    create?: XOR<KaryawanCreateWithoutGajiInput, KaryawanUncheckedCreateWithoutGajiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutGajiInput
    connect?: KaryawanWhereUniqueInput
  }

  export type JabatanCreateNestedOneWithoutGajiInput = {
    create?: XOR<JabatanCreateWithoutGajiInput, JabatanUncheckedCreateWithoutGajiInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutGajiInput
    connect?: JabatanWhereUniqueInput
  }

  export type KaryawanUpdateOneRequiredWithoutGajiNestedInput = {
    create?: XOR<KaryawanCreateWithoutGajiInput, KaryawanUncheckedCreateWithoutGajiInput>
    connectOrCreate?: KaryawanCreateOrConnectWithoutGajiInput
    upsert?: KaryawanUpsertWithoutGajiInput
    connect?: KaryawanWhereUniqueInput
    update?: XOR<XOR<KaryawanUpdateToOneWithWhereWithoutGajiInput, KaryawanUpdateWithoutGajiInput>, KaryawanUncheckedUpdateWithoutGajiInput>
  }

  export type JabatanUpdateOneRequiredWithoutGajiNestedInput = {
    create?: XOR<JabatanCreateWithoutGajiInput, JabatanUncheckedCreateWithoutGajiInput>
    connectOrCreate?: JabatanCreateOrConnectWithoutGajiInput
    upsert?: JabatanUpsertWithoutGajiInput
    connect?: JabatanWhereUniqueInput
    update?: XOR<XOR<JabatanUpdateToOneWithWhereWithoutGajiInput, JabatanUpdateWithoutGajiInput>, JabatanUncheckedUpdateWithoutGajiInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GajiCreateWithoutJabatanInput = {
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    karyawan: KaryawanCreateNestedOneWithoutGajiInput
  }

  export type GajiUncheckedCreateWithoutJabatanInput = {
    id?: number
    id_karyawan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiCreateOrConnectWithoutJabatanInput = {
    where: GajiWhereUniqueInput
    create: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput>
  }

  export type GajiCreateManyJabatanInputEnvelope = {
    data: GajiCreateManyJabatanInput | GajiCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type KaryawanCreateWithoutJabatanInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutJabatanInput = {
    id?: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganUncheckedCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiUncheckedCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiUncheckedCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutJabatanInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput>
  }

  export type KaryawanCreateManyJabatanInputEnvelope = {
    data: KaryawanCreateManyJabatanInput | KaryawanCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type GajiUpsertWithWhereUniqueWithoutJabatanInput = {
    where: GajiWhereUniqueInput
    update: XOR<GajiUpdateWithoutJabatanInput, GajiUncheckedUpdateWithoutJabatanInput>
    create: XOR<GajiCreateWithoutJabatanInput, GajiUncheckedCreateWithoutJabatanInput>
  }

  export type GajiUpdateWithWhereUniqueWithoutJabatanInput = {
    where: GajiWhereUniqueInput
    data: XOR<GajiUpdateWithoutJabatanInput, GajiUncheckedUpdateWithoutJabatanInput>
  }

  export type GajiUpdateManyWithWhereWithoutJabatanInput = {
    where: GajiScalarWhereInput
    data: XOR<GajiUpdateManyMutationInput, GajiUncheckedUpdateManyWithoutJabatanInput>
  }

  export type GajiScalarWhereInput = {
    AND?: GajiScalarWhereInput | GajiScalarWhereInput[]
    OR?: GajiScalarWhereInput[]
    NOT?: GajiScalarWhereInput | GajiScalarWhereInput[]
    id?: IntFilter<"Gaji"> | number
    id_karyawan?: IntFilter<"Gaji"> | number
    id_jabatan?: IntFilter<"Gaji"> | number
    department?: StringFilter<"Gaji"> | string
    bulan?: StringFilter<"Gaji"> | string
    tahun?: StringFilter<"Gaji"> | string
    gaji?: IntFilter<"Gaji"> | number
    gaji_kotor?: IntFilter<"Gaji"> | number
    gaji_bersih?: IntFilter<"Gaji"> | number
    uang_lembur?: IntFilter<"Gaji"> | number
    uang_shift?: IntFilter<"Gaji"> | number
    bonus?: IntFilter<"Gaji"> | number
    tunjangan?: IntFilter<"Gaji"> | number
    tunjangan_ramadhan?: IntFilter<"Gaji"> | number
    potongan_bpjs?: IntFilter<"Gaji"> | number
    potongan_pph21?: IntFilter<"Gaji"> | number
    potongan_no_working?: IntFilter<"Gaji"> | number
    potongan_lain?: IntFilter<"Gaji"> | number
    keterangan?: StringFilter<"Gaji"> | string
    createdAt?: DateTimeFilter<"Gaji"> | Date | string
    updatedAt?: DateTimeFilter<"Gaji"> | Date | string
  }

  export type KaryawanUpsertWithWhereUniqueWithoutJabatanInput = {
    where: KaryawanWhereUniqueInput
    update: XOR<KaryawanUpdateWithoutJabatanInput, KaryawanUncheckedUpdateWithoutJabatanInput>
    create: XOR<KaryawanCreateWithoutJabatanInput, KaryawanUncheckedCreateWithoutJabatanInput>
  }

  export type KaryawanUpdateWithWhereUniqueWithoutJabatanInput = {
    where: KaryawanWhereUniqueInput
    data: XOR<KaryawanUpdateWithoutJabatanInput, KaryawanUncheckedUpdateWithoutJabatanInput>
  }

  export type KaryawanUpdateManyWithWhereWithoutJabatanInput = {
    where: KaryawanScalarWhereInput
    data: XOR<KaryawanUpdateManyMutationInput, KaryawanUncheckedUpdateManyWithoutJabatanInput>
  }

  export type KaryawanScalarWhereInput = {
    AND?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
    OR?: KaryawanScalarWhereInput[]
    NOT?: KaryawanScalarWhereInput | KaryawanScalarWhereInput[]
    id?: IntFilter<"Karyawan"> | number
    id_jabatan?: IntFilter<"Karyawan"> | number
    nama_karyawan?: StringFilter<"Karyawan"> | string
    jenis_kelamin?: StringFilter<"Karyawan"> | string
    tgl_lahir?: DateTimeFilter<"Karyawan"> | Date | string
    alamat?: StringFilter<"Karyawan"> | string
    agama?: StringFilter<"Karyawan"> | string
    no_telp?: IntFilter<"Karyawan"> | number
    email?: StringFilter<"Karyawan"> | string
    department?: StringFilter<"Karyawan"> | string
    gaji_pokok?: IntFilter<"Karyawan"> | number
    createdAt?: DateTimeFilter<"Karyawan"> | Date | string
    updatedAt?: DateTimeFilter<"Karyawan"> | Date | string
  }

  export type KaryawanCreateWithoutLemburInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutKaryawanInput
    Potongan?: PotonganCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutLemburInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganUncheckedCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiUncheckedCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutLemburInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutLemburInput, KaryawanUncheckedCreateWithoutLemburInput>
  }

  export type KaryawanUpsertWithoutLemburInput = {
    update: XOR<KaryawanUpdateWithoutLemburInput, KaryawanUncheckedUpdateWithoutLemburInput>
    create: XOR<KaryawanCreateWithoutLemburInput, KaryawanUncheckedCreateWithoutLemburInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutLemburInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutLemburInput, KaryawanUncheckedUpdateWithoutLemburInput>
  }

  export type KaryawanUpdateWithoutLemburInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutKaryawanNestedInput
    Potongan?: PotonganUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutLemburInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUncheckedUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type JabatanCreateWithoutKaryawanInput = {
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Gaji?: GajiCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateWithoutKaryawanInput = {
    id?: number
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Gaji?: GajiUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanCreateOrConnectWithoutKaryawanInput = {
    where: JabatanWhereUniqueInput
    create: XOR<JabatanCreateWithoutKaryawanInput, JabatanUncheckedCreateWithoutKaryawanInput>
  }

  export type PotonganCreateWithoutKaryawanInput = {
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PotonganUncheckedCreateWithoutKaryawanInput = {
    id?: number
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PotonganCreateOrConnectWithoutKaryawanInput = {
    where: PotonganWhereUniqueInput
    create: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput>
  }

  export type PotonganCreateManyKaryawanInputEnvelope = {
    data: PotonganCreateManyKaryawanInput | PotonganCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type AbsensiCreateWithoutKaryawanInput = {
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUncheckedCreateWithoutKaryawanInput = {
    id?: number
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiCreateOrConnectWithoutKaryawanInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput>
  }

  export type AbsensiCreateManyKaryawanInputEnvelope = {
    data: AbsensiCreateManyKaryawanInput | AbsensiCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type GajiCreateWithoutKaryawanInput = {
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutGajiInput
  }

  export type GajiUncheckedCreateWithoutKaryawanInput = {
    id?: number
    id_jabatan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiCreateOrConnectWithoutKaryawanInput = {
    where: GajiWhereUniqueInput
    create: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput>
  }

  export type GajiCreateManyKaryawanInputEnvelope = {
    data: GajiCreateManyKaryawanInput | GajiCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type LemburCreateWithoutKaryawanInput = {
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LemburUncheckedCreateWithoutKaryawanInput = {
    id?: number
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LemburCreateOrConnectWithoutKaryawanInput = {
    where: LemburWhereUniqueInput
    create: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput>
  }

  export type LemburCreateManyKaryawanInputEnvelope = {
    data: LemburCreateManyKaryawanInput | LemburCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type JabatanUpsertWithoutKaryawanInput = {
    update: XOR<JabatanUpdateWithoutKaryawanInput, JabatanUncheckedUpdateWithoutKaryawanInput>
    create: XOR<JabatanCreateWithoutKaryawanInput, JabatanUncheckedCreateWithoutKaryawanInput>
    where?: JabatanWhereInput
  }

  export type JabatanUpdateToOneWithWhereWithoutKaryawanInput = {
    where?: JabatanWhereInput
    data: XOR<JabatanUpdateWithoutKaryawanInput, JabatanUncheckedUpdateWithoutKaryawanInput>
  }

  export type JabatanUpdateWithoutKaryawanInput = {
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gaji?: GajiUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Gaji?: GajiUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type PotonganUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: PotonganWhereUniqueInput
    update: XOR<PotonganUpdateWithoutKaryawanInput, PotonganUncheckedUpdateWithoutKaryawanInput>
    create: XOR<PotonganCreateWithoutKaryawanInput, PotonganUncheckedCreateWithoutKaryawanInput>
  }

  export type PotonganUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: PotonganWhereUniqueInput
    data: XOR<PotonganUpdateWithoutKaryawanInput, PotonganUncheckedUpdateWithoutKaryawanInput>
  }

  export type PotonganUpdateManyWithWhereWithoutKaryawanInput = {
    where: PotonganScalarWhereInput
    data: XOR<PotonganUpdateManyMutationInput, PotonganUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type PotonganScalarWhereInput = {
    AND?: PotonganScalarWhereInput | PotonganScalarWhereInput[]
    OR?: PotonganScalarWhereInput[]
    NOT?: PotonganScalarWhereInput | PotonganScalarWhereInput[]
    id?: IntFilter<"Potongan"> | number
    id_karyawan?: IntFilter<"Potongan"> | number
    bulan?: StringFilter<"Potongan"> | string
    tahun?: StringFilter<"Potongan"> | string
    nominal?: IntFilter<"Potongan"> | number
    keterangan?: StringFilter<"Potongan"> | string
    createdAt?: DateTimeFilter<"Potongan"> | Date | string
    updatedAt?: DateTimeFilter<"Potongan"> | Date | string
  }

  export type AbsensiUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutKaryawanInput, AbsensiUncheckedUpdateWithoutKaryawanInput>
    create: XOR<AbsensiCreateWithoutKaryawanInput, AbsensiUncheckedCreateWithoutKaryawanInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutKaryawanInput, AbsensiUncheckedUpdateWithoutKaryawanInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutKaryawanInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: IntFilter<"Absensi"> | number
    id_karyawan?: IntFilter<"Absensi"> | number
    tgl?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    bulan?: StringNullableFilter<"Absensi"> | string | null
    tahun?: StringNullableFilter<"Absensi"> | string | null
    masuk?: DateTimeNullableFilter<"Absensi"> | Date | string | null
    alfa?: StringNullableFilter<"Absensi"> | string | null
    sakit?: StringNullableFilter<"Absensi"> | string | null
    cuti?: StringNullableFilter<"Absensi"> | string | null
    shif?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
  }

  export type GajiUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: GajiWhereUniqueInput
    update: XOR<GajiUpdateWithoutKaryawanInput, GajiUncheckedUpdateWithoutKaryawanInput>
    create: XOR<GajiCreateWithoutKaryawanInput, GajiUncheckedCreateWithoutKaryawanInput>
  }

  export type GajiUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: GajiWhereUniqueInput
    data: XOR<GajiUpdateWithoutKaryawanInput, GajiUncheckedUpdateWithoutKaryawanInput>
  }

  export type GajiUpdateManyWithWhereWithoutKaryawanInput = {
    where: GajiScalarWhereInput
    data: XOR<GajiUpdateManyMutationInput, GajiUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type LemburUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: LemburWhereUniqueInput
    update: XOR<LemburUpdateWithoutKaryawanInput, LemburUncheckedUpdateWithoutKaryawanInput>
    create: XOR<LemburCreateWithoutKaryawanInput, LemburUncheckedCreateWithoutKaryawanInput>
  }

  export type LemburUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: LemburWhereUniqueInput
    data: XOR<LemburUpdateWithoutKaryawanInput, LemburUncheckedUpdateWithoutKaryawanInput>
  }

  export type LemburUpdateManyWithWhereWithoutKaryawanInput = {
    where: LemburScalarWhereInput
    data: XOR<LemburUpdateManyMutationInput, LemburUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type LemburScalarWhereInput = {
    AND?: LemburScalarWhereInput | LemburScalarWhereInput[]
    OR?: LemburScalarWhereInput[]
    NOT?: LemburScalarWhereInput | LemburScalarWhereInput[]
    id?: IntFilter<"Lembur"> | number
    id_karyawan?: IntFilter<"Lembur"> | number
    bulan?: StringNullableFilter<"Lembur"> | string | null
    tahun?: StringNullableFilter<"Lembur"> | string | null
    hari?: IntFilter<"Lembur"> | number
    jumlah_jam?: IntFilter<"Lembur"> | number
    createdAt?: DateTimeFilter<"Lembur"> | Date | string
    updatedAt?: DateTimeFilter<"Lembur"> | Date | string
  }

  export type KaryawanCreateWithoutPotonganInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutKaryawanInput
    Absensi?: AbsensiCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutPotonganInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Absensi?: AbsensiUncheckedCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiUncheckedCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutPotonganInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutPotonganInput, KaryawanUncheckedCreateWithoutPotonganInput>
  }

  export type KaryawanUpsertWithoutPotonganInput = {
    update: XOR<KaryawanUpdateWithoutPotonganInput, KaryawanUncheckedUpdateWithoutPotonganInput>
    create: XOR<KaryawanCreateWithoutPotonganInput, KaryawanUncheckedCreateWithoutPotonganInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutPotonganInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutPotonganInput, KaryawanUncheckedUpdateWithoutPotonganInput>
  }

  export type KaryawanUpdateWithoutPotonganInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutKaryawanNestedInput
    Absensi?: AbsensiUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutPotonganInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Absensi?: AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUncheckedUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanCreateWithoutAbsensiInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutKaryawanInput
    Potongan?: PotonganCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutAbsensiInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganUncheckedCreateNestedManyWithoutKaryawanInput
    Gaji?: GajiUncheckedCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutAbsensiInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutAbsensiInput, KaryawanUncheckedCreateWithoutAbsensiInput>
  }

  export type KaryawanUpsertWithoutAbsensiInput = {
    update: XOR<KaryawanUpdateWithoutAbsensiInput, KaryawanUncheckedUpdateWithoutAbsensiInput>
    create: XOR<KaryawanCreateWithoutAbsensiInput, KaryawanUncheckedCreateWithoutAbsensiInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutAbsensiInput, KaryawanUncheckedUpdateWithoutAbsensiInput>
  }

  export type KaryawanUpdateWithoutAbsensiInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutKaryawanNestedInput
    Potongan?: PotonganUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutAbsensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUncheckedUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUncheckedUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanCreateWithoutGajiInput = {
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jabatan: JabatanCreateNestedOneWithoutKaryawanInput
    Potongan?: PotonganCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanUncheckedCreateWithoutGajiInput = {
    id?: number
    id_jabatan: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Potongan?: PotonganUncheckedCreateNestedManyWithoutKaryawanInput
    Absensi?: AbsensiUncheckedCreateNestedManyWithoutKaryawanInput
    Lembur?: LemburUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type KaryawanCreateOrConnectWithoutGajiInput = {
    where: KaryawanWhereUniqueInput
    create: XOR<KaryawanCreateWithoutGajiInput, KaryawanUncheckedCreateWithoutGajiInput>
  }

  export type JabatanCreateWithoutGajiInput = {
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanCreateNestedManyWithoutJabatanInput
  }

  export type JabatanUncheckedCreateWithoutGajiInput = {
    id?: number
    nama_jabatan: string
    tunjangan_jabatan: number
    division?: string | null
    status?: boolean
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Karyawan?: KaryawanUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type JabatanCreateOrConnectWithoutGajiInput = {
    where: JabatanWhereUniqueInput
    create: XOR<JabatanCreateWithoutGajiInput, JabatanUncheckedCreateWithoutGajiInput>
  }

  export type KaryawanUpsertWithoutGajiInput = {
    update: XOR<KaryawanUpdateWithoutGajiInput, KaryawanUncheckedUpdateWithoutGajiInput>
    create: XOR<KaryawanCreateWithoutGajiInput, KaryawanUncheckedCreateWithoutGajiInput>
    where?: KaryawanWhereInput
  }

  export type KaryawanUpdateToOneWithWhereWithoutGajiInput = {
    where?: KaryawanWhereInput
    data: XOR<KaryawanUpdateWithoutGajiInput, KaryawanUncheckedUpdateWithoutGajiInput>
  }

  export type KaryawanUpdateWithoutGajiInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutKaryawanNestedInput
    Potongan?: PotonganUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutGajiInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUncheckedUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type JabatanUpsertWithoutGajiInput = {
    update: XOR<JabatanUpdateWithoutGajiInput, JabatanUncheckedUpdateWithoutGajiInput>
    create: XOR<JabatanCreateWithoutGajiInput, JabatanUncheckedCreateWithoutGajiInput>
    where?: JabatanWhereInput
  }

  export type JabatanUpdateToOneWithWhereWithoutGajiInput = {
    where?: JabatanWhereInput
    data: XOR<JabatanUpdateWithoutGajiInput, JabatanUncheckedUpdateWithoutGajiInput>
  }

  export type JabatanUpdateWithoutGajiInput = {
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUpdateManyWithoutJabatanNestedInput
  }

  export type JabatanUncheckedUpdateWithoutGajiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_jabatan?: StringFieldUpdateOperationsInput | string
    tunjangan_jabatan?: IntFieldUpdateOperationsInput | number
    division?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Karyawan?: KaryawanUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type GajiCreateManyJabatanInput = {
    id?: number
    id_karyawan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KaryawanCreateManyJabatanInput = {
    id?: number
    nama_karyawan: string
    jenis_kelamin: string
    tgl_lahir: Date | string
    alamat: string
    agama: string
    no_telp: number
    email: string
    department: string
    gaji_pokok: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiUpdateWithoutJabatanInput = {
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    karyawan?: KaryawanUpdateOneRequiredWithoutGajiNestedInput
  }

  export type GajiUncheckedUpdateWithoutJabatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiUncheckedUpdateManyWithoutJabatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KaryawanUpdateWithoutJabatanInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateWithoutJabatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Potongan?: PotonganUncheckedUpdateManyWithoutKaryawanNestedInput
    Absensi?: AbsensiUncheckedUpdateManyWithoutKaryawanNestedInput
    Gaji?: GajiUncheckedUpdateManyWithoutKaryawanNestedInput
    Lembur?: LemburUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type KaryawanUncheckedUpdateManyWithoutJabatanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    agama?: StringFieldUpdateOperationsInput | string
    no_telp?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    gaji_pokok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganCreateManyKaryawanInput = {
    id?: number
    bulan: string
    tahun: string
    nominal: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiCreateManyKaryawanInput = {
    id?: number
    tgl?: Date | string | null
    bulan?: string | null
    tahun?: string | null
    masuk?: Date | string | null
    alfa?: string | null
    sakit?: string | null
    cuti?: string | null
    shif?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GajiCreateManyKaryawanInput = {
    id?: number
    id_jabatan: number
    department: string
    bulan: string
    tahun: string
    gaji: number
    gaji_kotor: number
    gaji_bersih: number
    uang_lembur: number
    uang_shift: number
    bonus: number
    tunjangan: number
    tunjangan_ramadhan: number
    potongan_bpjs: number
    potongan_pph21: number
    potongan_no_working: number
    potongan_lain: number
    keterangan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LemburCreateManyKaryawanInput = {
    id?: number
    bulan?: string | null
    tahun?: string | null
    hari: number
    jumlah_jam: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PotonganUpdateWithoutKaryawanInput = {
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PotonganUncheckedUpdateManyWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    nominal?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUpdateWithoutKaryawanInput = {
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    masuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alfa?: NullableStringFieldUpdateOperationsInput | string | null
    sakit?: NullableStringFieldUpdateOperationsInput | string | null
    cuti?: NullableStringFieldUpdateOperationsInput | string | null
    shif?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiUpdateWithoutKaryawanInput = {
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: JabatanUpdateOneRequiredWithoutGajiNestedInput
  }

  export type GajiUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GajiUncheckedUpdateManyWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_jabatan?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    gaji?: IntFieldUpdateOperationsInput | number
    gaji_kotor?: IntFieldUpdateOperationsInput | number
    gaji_bersih?: IntFieldUpdateOperationsInput | number
    uang_lembur?: IntFieldUpdateOperationsInput | number
    uang_shift?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    tunjangan?: IntFieldUpdateOperationsInput | number
    tunjangan_ramadhan?: IntFieldUpdateOperationsInput | number
    potongan_bpjs?: IntFieldUpdateOperationsInput | number
    potongan_pph21?: IntFieldUpdateOperationsInput | number
    potongan_no_working?: IntFieldUpdateOperationsInput | number
    potongan_lain?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburUpdateWithoutKaryawanInput = {
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburUncheckedUpdateWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LemburUncheckedUpdateManyWithoutKaryawanInput = {
    id?: IntFieldUpdateOperationsInput | number
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: IntFieldUpdateOperationsInput | number
    jumlah_jam?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use JabatanCountOutputTypeDefaultArgs instead
     */
    export type JabatanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JabatanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KaryawanCountOutputTypeDefaultArgs instead
     */
    export type KaryawanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KaryawanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JabatanDefaultArgs instead
     */
    export type JabatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JabatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LemburDefaultArgs instead
     */
    export type LemburArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LemburDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KaryawanDefaultArgs instead
     */
    export type KaryawanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KaryawanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PotonganDefaultArgs instead
     */
    export type PotonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PotonganDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AbsensiDefaultArgs instead
     */
    export type AbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AbsensiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GajiDefaultArgs instead
     */
    export type GajiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GajiDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}