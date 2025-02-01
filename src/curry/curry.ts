// ================= type definition ================
type AnyFunc = (...args: any[]) => any;

type AtLeastOneParam<Fn extends AnyFunc> = Parameters<Fn> extends [
  infer Head,
  ...infer Tail
]
  ? [Head, ...Partial<Tail>]
  : never;

type PartialTuple<
  Params extends any[],
  Accumulated extends any[] = []
> = Params extends [infer CurrentParam, ...infer RemainingParams]
  ? PartialTuple<RemainingParams, [...Accumulated, CurrentParam?]>
  : [...Accumulated, ...Params];

type RemainingParameters<
  AppliedArgs extends any[],
  ExpectedArgs extends any[]
> = AppliedArgs extends [any, ...infer RestApplied]
  ? ExpectedArgs extends [any, ...infer RestExpected]
    ? // 현재 인자를 소모하고, 나머지 인자들로 재귀 호출
      RemainingParameters<RestApplied, RestExpected>
    : [] // 예상 인자가 더 이상 없으면 빈 배열 반환
  : ExpectedArgs; // 모든 적용된 인자를 소모한 후 남은 예상 인자 반환

type CurriedFunction<Fn extends AnyFunc> = <
  AppliedParams extends AtLeastOneParam<Fn>
>(
  ...newArgs: AppliedParams
) => RemainingParameters<AppliedParams, Parameters<Fn>> extends [any, ...any[]] // 남은 인자가 1개 이상이면
  ? // true: 다음 커링 호출
    CurriedFunction<
      (
        ...args: RemainingParameters<AppliedParams, Parameters<Fn>>
      ) => ReturnType<Fn>
    >
  : ReturnType<Fn>; // false: 모든 인자가 채워졌으므로 결과 반환

// ================= curry function =================
/**
 *
 * @function curry
 *
 * @description
 * get a function and return a curried version of it
 *
 * @param {function} fn - function to curry
 *
 * @returns {function(*): *} the fn passed as a curriable method
 */
export function curry<Fn extends AnyFunc>(fn: Fn): CurriedFunction<Fn> {
  const curried = (...args: PartialTuple<Parameters<Fn>>) => {
    const isComplete = args.length >= fn.length;

    return isComplete
      ? fn(...(args as Parameters<Fn>))
      : (...nextArgs: PartialTuple<Parameters<Fn>>) => {
          const combinedArgs = [...args, ...nextArgs] as PartialTuple<
            Parameters<Fn>
          >;
          return curried(...combinedArgs);
        };
  };

  return curried as CurriedFunction<Fn>;
}
