import { describe, it } from "vitest";
import { partial } from "./partial.js";

describe("partial function", () => {
  it("should return a function that takes the rest of the arguments", () => {
    // Given
    const add = (a: number, b: number) => a + b;
    const addOne = partial(add, 1);

    // When
    const result = addOne(2);

    // Then
    expect(result).toBe(3);
  });

  it("should work with multiple preset arguments", () => {
    // Given
    const add = (a: number, b: number, c: number) => a + b + c;
    const addOneAndTwo = partial(add, 1, 2);

    // When
    const result = addOneAndTwo(3);

    // Then
    expect(result).toBe(6);
  });

  it("should work with no preset arguments", () => {
    // Given
    const add = (a: number, b: number) => a + b;
    const addOne = partial(add);

    // When
    const result = addOne(1, 2);

    // Then
    expect(result).toBe(3);
  });

  it("should work with a single-argument function", () => {
    // Given
    const greet = (name: string) => `Hello, ${name}!`;
    const greetAlice = partial(greet, "Alice");

    // When
    const result = greetAlice();

    // Then
    expect(result).toBe("Hello, Alice!");
  });

  it("should execute immediately if all arguments are preset", () => {
    // Given
    const add = (a: number, b: number) => a + b;
    const result = partial(add, 1, 2);

    // Then
    expect(result()).toBe(3);
  });

  it("should allow multiple partial applications", () => {
    // Given
    const add = (a: number, b: number, c: number) => a + b + c;
    const addOne = partial(add, 1); // fix the first argument
    const addOneAndTwo = partial(addOne, 2); // fix the second argument

    // When
    const result = addOneAndTwo(3);

    // Then
    expect(result).toBe(6);
  });

  it("should maintain the correct `this` binding", () => {
    // Given
    const obj = {
      x: 10,
      add(this: { x: number }, y: number) {
        return this.x + y;
      },
    };

    const addFive = partial(obj.add.bind(obj), 5);

    // When
    const result = addFive();

    // Then
    expect(result).toBe(15);
  });
});
