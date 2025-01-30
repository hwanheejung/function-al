import { describe, it, expect } from "vitest";
import { gatherArgs } from "./gatherArgs.js";

describe("gatherArgs function", () => {
  it("should gather multiple arguments into an array", () => {
    const sum = (arr: number[]) => arr.reduce((acc, num) => acc + num, 0);
    const gatheredSum = gatherArgs(sum);

    expect(gatheredSum(1, 2, 3)).toBe(6);
  });

  it("should work with string type", () => {
    const concat = (arr: string[]) => arr.join(" ");
    const gatheredConcat = gatherArgs(concat);

    expect(gatheredConcat("Hello", "World")).toBe("Hello World");
  });

  it("should work with mixed types", () => {
    const concat = (arr: (string | number)[]) => arr.join(" ");
    const gatheredConcat = gatherArgs(concat);

    expect(gatheredConcat("Hello", 1, "World")).toBe("Hello 1 World");
  });

  it("should return an empty array when called with no arguments", () => {
    const toArray = (arr: any[]) => arr;
    const gatheredToArray = gatherArgs(toArray);

    expect(gatheredToArray()).toEqual([]);
  });
});
