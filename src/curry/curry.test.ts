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

    // ❌ Invalid calls (arity errors)
    try {
      // @ts-expect-error
      curriedAdd(1)("a")(3);
      // @ts-expect-error
      curriedAdd(1, "a")(3);

      // ❌ Invalid calls (arity errors)
      // @ts-expect-error
      curriedAdd();
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
  });

  it("should handle functions with single parameter", () => {
    const square = (x: number) => x * x;
    const curriedSquare = curry(square);

    expect(curriedSquare(4)).toBe(16);

    // ❌ Invalid calls
    // @ts-expect-error
    curriedSquare();
    // @ts-expect-error
    curriedSquare(4, 5);
    // @ts-expect-error
    curriedSquare("4");
  });
});
