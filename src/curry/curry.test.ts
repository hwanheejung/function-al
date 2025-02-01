import { describe, it } from "vitest";
import { curry } from "./curry.js";

describe("curry function", () => {
  it("should curry a function", () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);

    // ❌ Invalid calls: Intentionally incorrect to test TypeScript errors
    // @ts-expect-error
    curriedAdd(1)("a")(3);
    // @ts-expect-error
    curriedAdd(1, "a")(3);
    // @ts-expect-error
    curriedAdd();

    // ❌ Invalid calls (arity errors)
    try {
      // @ts-expect-error
      curriedAdd(1)(2)(3)(4);
      // @ts-expect-error
      curriedAdd(1, 2)(3)(4);
      // @ts-expect-error
      curriedAdd(1)(2, 3)(4);
      // @ts-expect-error
      curriedAdd(1, 2, 3)(4);
      // @ts-expect-error
      curriedAdd(1, 2, 3, 4);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should curry a function with mixed parameter types", () => {
    const example = (a: number, b: string, c: boolean) => `${a}, ${b}, ${c}`;
    const curried = curry(example);

    expect(curried(1)("hello")(true)).toBe("1, hello, true");
    expect(curried(1, "hello")(true)).toBe("1, hello, true");
    expect(curried(1)("hello", true)).toBe("1, hello, true");
    expect(curried(1, "hello", true)).toBe("1, hello, true");

    // ❌ Invalid calls (type errors)
    // @ts-expect-error
    curried(true);
    // @ts-expect-error
    curried("hello");
    // @ts-expect-error
    curried(1, true);

    try {
      const fixedArityCurried = curry(example, 2);
      fixedArityCurried(1)("hello")(true);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle functions with single parameter", () => {
    const square = (x: number) => x * x;
    const curriedSquare = curry(square);

    expect(curriedSquare(4)).toBe(16);

    // ❌ Invalid calls
    // @ts-expect-error
    curriedSquare();
    // @ts-expect-error
    curriedSquare("4");

    try {
      // @ts-expect-error
      curriedSquare(4, 5);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle variadic functions", () => {
    const sum = (...numbers: number[]) =>
      numbers.reduce((acc, num) => acc + num, 0);
    const curriedSum = curry(sum, 3); // Fixed arity of 3

    expect(curriedSum(1)(2)(3)).toBe(6);
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum(1)(2, 3)).toBe(6);
    expect(curriedSum(1, 2, 3)).toBe(6);

    // less than 3 arguments
    const functionWithLessArgs = curriedSum(1)(2);
    expect(typeof functionWithLessArgs).toBe("function");

    // ❌ Invalid calls

    try {
      curriedSum(1)(2)(3)(4);
      curriedSum(1, 2)(3)(4);
      curriedSum(1)(2, 3)(4);
      curriedSum(1)(2)(3, 4);
      curriedSum(1, 2, 3)(4);
      curriedSum(1)(2, 3, 4);
      curriedSum(1, 2, 3, 4);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should handle variadic functions but no arity specified", () => {
    const sum = (...numbers: number[]) =>
      numbers.reduce((acc, num) => acc + num, 0);
    const noFixedArityCurriedSum = curry(sum);

    try {
      // if arity is not specified, arity is set to 0 for variadic functions
      // so it will throw an error
      noFixedArityCurriedSum(1)(2)(3);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
