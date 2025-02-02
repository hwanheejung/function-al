import { AnyFunc } from "../_internal/types.js";

// ================= Utility Types =================

type AtLeastOneParam<Fn extends AnyFunc> = Parameters<Fn> extends [
  infer Head,
  ...infer Tail
]
  ? [Head, ...Partial<Tail>] // fixed-length tuple case
  : Parameters<Fn> extends (infer U)[]
  ? [U, ...Partial<U[]>] // variadic case
  : never;

// Calculates remaining parameters after applying some arguments
type RemainingParameters<
  AppliedArgs extends any[],
  ExpectedArgs extends any[]
> = AppliedArgs extends [any, ...infer RestApplied]
  ? ExpectedArgs extends [any, ...infer RestExpected]
    ? // 현재 인자를 소모하고, 나머지 인자들로 재귀 호출
      RemainingParameters<RestApplied, RestExpected>
    : [] // 예상 인자가 더 이상 없으면 빈 배열 반환
  : ExpectedArgs; // 모든 적용된 인자를 소모한 후 남은 예상 인자 반환

// ================= Argument Handling Types =================
type IsVariadic<F extends AnyFunc> = Parameters<F> extends any[]
  ? number extends Parameters<F>["length"]
    ? true // Variadic. like number[]
    : false // Fixed-length tuple
  : false;

// Converts parameter list into a tuple with optional elements
type PartialTuple<
  Params extends any[],
  Accumulated extends any[] = []
> = Params extends [infer CurrentParam, ...infer RemainingParams]
  ? PartialTuple<RemainingParams, [...Accumulated, CurrentParam?]>
  : [...Accumulated, ...Params];

type ArgsType<Fn extends AnyFunc> = IsVariadic<Fn> extends true
  ? Parameters<Fn> // For variadic functions with specified arity
  : PartialTuple<Parameters<Fn>>; // For fixed arity (default behavior)

// ================= Curried Function Type =================
type CurriedFunction<Fn extends AnyFunc> = <
  AppliedParams extends AtLeastOneParam<Fn>
>(
  ...newArgs: AppliedParams
) => IsVariadic<Fn> extends true
  ? any
  : RemainingParameters<AppliedParams, Parameters<Fn>> extends [any, ...any[]] // 남은 인자가 1개 이상이면
  ? // true: 다음 커링 호출
    CurriedFunction<
      (
        ...args: RemainingParameters<AppliedParams, Parameters<Fn>>
      ) => ReturnType<Fn>
    >
  : ReturnType<Fn>; // false: 모든 인자가 채워졌으므로 결과 반환

// ================= Curry Function Implementation =================
//
/**
 *
 * Curries a given function, allowing partial application of arguments.
 *
 * @param {function} fn - The function to be curried.
 * @param {number} arity - The number of arguments required (defaults to fn.length).
 * @returns {function} - A curried version of the input function.
 */
export function curry<Fn extends AnyFunc>(
  fn: Fn,
  arity: number = fn.length
): CurriedFunction<Fn> {
  const curried = (...args: ArgsType<Fn>) => {
    if (args.length > arity) {
      throw new Error("Too many arguments provided");
    }

    const isComplete = args.length >= arity;

    return isComplete
      ? fn(...(args as Parameters<Fn>))
      : (...nextArgs: PartialTuple<Parameters<Fn>>) => {
          const combinedArgs = [
            ...args,
            ...nextArgs,
          ] as unknown as ArgsType<Fn>;
          return curried(...combinedArgs);
        };
  };

  return curried as CurriedFunction<Fn>;
}
