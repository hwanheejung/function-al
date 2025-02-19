import { pipe } from "./pipe.js";

describe("pipe function", () => {
  test("should return the same function if only one function is passed", () => {
    const identity = (x: number) => x;
    const piped = pipe(identity);
    expect(piped(5)).toBe(5);
  });

  test("should apply two functions in sequence", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;

    const piped = pipe(numberToString, stringToBoolean);

    expect(piped(123456)).toBe(true);
  });

  test("should apply multiple functions in sequence", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;
    const booleanToString = (b: boolean) => (b ? "YES" : "NO");

    const piped = pipe(numberToString, stringToBoolean, booleanToString);

    expect(piped(100000)).toBe("YES"); // "100000".length > 5 → true → "YES"
  });

  test("should reject invalid function chains (TypeScript)", () => {
    const numberToString = (x: number) => `${x}`;
    const booleanToString = (b: boolean) => (b ? "YES" : "NO");

    // ❌ number → string, boolean → string (중간 타입 불일치)
    // @ts-expect-error
    const invalidPipe = pipe(numberToString, booleanToString);
  });

  test("should correctly infer types", () => {
    const numberToString = (x: number) => `${x}`;
    const stringToBoolean = (s: string) => s.length > 5;
    const booleanToNumber = (b: boolean) => (b ? 1 : 0);

    const piped = pipe(numberToString, stringToBoolean, booleanToNumber);

    // ✅ 최종 반환값의 타입은 number이어야 함
    const result: number = piped(100000);
    expect(result).toBe(1);

    // ❌ number 타입이 아닌 값을 기대하면 타입 에러 발생
    // @ts-expect-error
    const wrongResult: string = piped(10000);
  });

  test("should correctly handle function returning an array", () => {
    const split = (s: string) => s.split("");
    const reverse = (arr: string[]) => arr.reverse();
    const join = (arr: string[]) => arr.join("");

    const piped = pipe(split, reverse, join);

    expect(piped("hello")).toBe("olleh");
  });

  test("should reject multiple arguments in first function", () => {
    const add = (a: number, b: number) => a + b;
    const square = (x: number) => x * x;

    // @ts-expect-error
    const piped = pipe(add, square);
  });
});
