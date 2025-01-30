// 배열에서 첫 N개를 제외한 나머지 요소들을 반환하는 타입
type Tail<T extends any[], U extends any[]> = T extends [...U, ...infer R]
  ? R
  : never;

export const partial =
  <T extends (...args: any[]) => any, P extends any[]>(
    fn: T,
    ...presetArgs: P
  ) =>
  (...laterArgs: Tail<Parameters<T>, P>) => {
    const allArgs = [...presetArgs, ...laterArgs] as Parameters<T>;
    return fn(...allArgs);
  };
