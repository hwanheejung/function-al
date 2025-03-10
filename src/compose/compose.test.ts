import { compose } from "./compose.js";

describe("compose function", () => {
  test("should return the same functino if only one function is passed", () => {
    const identity = (x: number) => x;
    const composed = compose(identity);
    expect(composed(5)).toBe(5);
  });

  test("should apply two functions in sequence", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;

    const composed = compose(stringToBoolean, numberToString);
    expect(composed(123456)).toBe(true);
  });

  test("should apply multiple functions in sequence", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;
    const booleanToString = (b: boolean) => (b ? "YES" : "NO");

    const composed = compose(booleanToString, stringToBoolean, numberToString);
    expect(composed(100000)).toBe("YES");
  });

  test("should reject invalid function chains (TypeScript)", () => {
    const numberToString = (x: number) => `${x}`;
    const booleanToString = (b: boolean) => (b ? "YES" : "NO");

    // ❌ string → boolean, boolean → string (중간 타입 불일치)
    // @ts-expect-error
    const invalidCompose = compose(booleanToString, numberToString);
  });

  test("should correctly infer types", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;
    const booleanToNumber = (b: boolean) => (b ? 1 : 0);

    const composed = compose(booleanToNumber, stringToBoolean, numberToString);

    // ✅ 최종 반환값의 타입은 number이어야 함
    const result: number = composed(100000);
    expect(result).toBe(1);

    // ❌ number 타입이 아닌 값을 기대하면 타입 에러 발생
    // @ts-expect-error
    const wrongResult: string = composed(10000);
  });

  test("should correctly handle function returning an array", () => {
    const split = (s: string) => s.split("");
    const reverse = (arr: string[]) => arr.reverse();
    const join = (arr: string[]) => arr.join("");

    const composed = compose(join, reverse, split);
    expect(composed("hello")).toBe("olleh");
  });

  test("should reject multiple arguments in first function", () => {
    const add = (a: number, b: number) => a + b;
    const double = (n: number) => n * 2;

    // ❌ add 함수는 두 개의 인수를 받아야 함
    // @ts-expect-error
    const invalidCompose = compose(double, add);
  });
});
