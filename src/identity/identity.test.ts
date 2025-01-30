import { describe, it, expect } from "vitest";
import { identity } from "./identity.js";

describe("identity function", () => {
  it.each([
    [42, 42], // Numbers
    [-5, -5],
    [0, 0],
    ["hello", "hello"], // Strings
    ["", ""],
    [true, true], // Booleans
    [false, false],
    [null, null], // Null & Undefined
    [undefined, undefined],
  ])("should return the same primitive value for %p", (input, expected) => {
    expect(identity(input)).toBe(expected);
  });

  it.each([
    [{ key: "value" }, { key: "value" }], // Objects
    [
      [1, 2, 3],
      [1, 2, 3],
    ], // Arrays
  ])("should return the same value for %p", (input, expected) => {
    expect(identity(input)).toStrictEqual(expected);
  });

  it("should work in filter to remove falsy values", () => {
    const values = [1, 2, null, 3, undefined, "", false, 4, NaN, 0];
    const filtered = values.filter(identity);

    expect(filtered).toEqual([1, 2, 3, 4]);
  });
});
