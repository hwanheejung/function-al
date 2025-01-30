import { describe, it, expect } from "vitest";
import { spreadArgs } from "./spreadArgs.js";

describe("spreadArgs function", () => {
  it("should spread array elements as individual arguments", () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const spreadSum = spreadArgs(sum);

    expect(spreadSum([1, 2, 3])).toBe(6);
  });

  it("should work with string parameters", () => {
    const concat = (a: string, b: string) => a + b;
    const spreadConcat = spreadArgs(concat);

    expect(spreadConcat(["Hello, ", "World!"])).toBe("Hello, World!");
  });

  it("should return undefined for empty array", () => {
    const identity = (x?: any) => x;
    const spreadIdentity = spreadArgs(identity);

    expect(spreadIdentity([])).toBeUndefined();
  });

  it("should work with rest parameters", () => {
    const sumAll = (...numbers: number[]) =>
      numbers.reduce((acc, num) => acc + num, 0);
    const spreadSumAll = spreadArgs(sumAll);

    expect(spreadSumAll([1, 2, 3, 4, 5])).toBe(15); // sumAll(1,2,3,4,5) → 15
  });
});
