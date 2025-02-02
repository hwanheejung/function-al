import { describe, it, expect } from "vitest";
import { unary } from "./unary.js";

describe("unary function", () => {
  // ✅ 기본 동작 테스트
  it("should correctly modify a function to accept only one argument", () => {
    const add = (a: number, b: number) => a + b;
    const unaryAdd = unary(add);

    expect(unaryAdd(5)).toBe(NaN); // b가 undefined이므로 NaN
  });

  it("should return the same result for single-argument functions", () => {
    const square = (x: number) => x * x;
    const unarySquare = unary(square);

    expect(unarySquare(4)).toBe(16);
  });

  it("should handle functions with no parameters", () => {
    const noParams = () => 42;
    const unaryNoParams = unary(noParams);

    expect(unaryNoParams(undefined)).toBe(42);
  });

  it("should handle undefined or null arguments correctly", () => {
    const isDefined = (value: any) => value !== undefined && value !== null;
    const unaryIsDefined = unary(isDefined);

    expect(unaryIsDefined(undefined)).toBe(false);
    expect(unaryIsDefined(null)).toBe(false);
    expect(unaryIsDefined(0)).toBe(true);
    expect(unaryIsDefined("")).toBe(true);
  });

  // ✅ this 테스트
  it("should preserve the original function context when using 'this'", () => {
    const obj = {
      factor: 10,
      multiply(a: number, b: number) {
        return a * b * this.factor;
      },
    };

    const unaryMultiply = unary(obj.multiply.bind(obj));

    expect(unaryMultiply(2)).toBe(NaN); // b가 undefined이므로 NaN
  });

  // ✅ 고차 함수(HOF) 활용 테스트
  it("should work correctly with map to prevent unexpected behavior", () => {
    const numbers = ["1", "2", "3", "4"];

    const resultWithoutUnary = numbers.map(parseInt); // 예상치 못한 결과 [1, NaN, NaN, NaN]
    const resultWithUnary = numbers.map(unary(parseInt)); // 첫 번째 인자만 처리

    expect(resultWithoutUnary).toEqual([1, NaN, NaN, NaN]);
    expect(resultWithUnary).toEqual([1, 2, 3, 4]); // 의도한 대로 동작
  });

  it("should work with functions passed as arguments", () => {
    const applyFunction = (
      fn: (a: number, b: number) => number,
      a: number,
      b: number
    ) => fn(a, b);
    const sum = (x: number, y: number) => x + y;

    const unarySum = unary(sum);

    expect(applyFunction(unarySum, 5, 10)).toBe(NaN); // 두 번째 인자 무시되므로 NaN
  });

  it("should work with curried functions", () => {
    const curriedAdd = (a: number) => (b: number) => a + b;
    const unaryCurriedAdd = unary(curriedAdd);

    const addFive = unaryCurriedAdd(5); // curriedAdd(5)가 호출되어 함수 반환
    expect(addFive(10)).toBe(15); // 반환된 함수는 정상 동작
  });

  it("should ignore extra arguments in composed functions", () => {
    const compose = (
      f: (x: number) => number,
      g: (x: number, y: number) => number
    ) => {
      return (x: number) => f(g(x, x + 1));
    };

    const double = (n: number) => n * 2;
    const add = (a: number, b: number) => a + b;

    const unaryAdd = unary(add);
    const composed = compose(double, unaryAdd);

    expect(composed(5)).toBe(NaN); // b가 undefined로 NaN 결과
  });

  it("should work with reduce", () => {
    const sum = (a: number, b: number) => a + b;
    const unarySum = unary(sum);

    const numbers = [1, 2, 3, 4];
    const result = numbers.reduce((acc, num) => unarySum(acc + num), 0);

    expect(result).toBe(NaN); // 두 번째 인자가 undefined이므로 NaN
  });
});
