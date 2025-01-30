export const spreadArgs =
  <T extends (...args: any[]) => any>(fn: T) =>
  (argsArr: Parameters<T>): ReturnType<T> | undefined =>
    argsArr.length === 0 ? undefined : fn(...argsArr);
