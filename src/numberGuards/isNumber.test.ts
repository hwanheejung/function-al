import { describe, it } from "vitest";
import { isNumber } from "./isNumber.js";

describe("isNumber function", () => {
  it("should return true for numbers", () => {
    expect(isNumber(42)).toBe(true);
    expect(isNumber(3.14)).toBe(true);
    expect(isNumber(-1)).toBe(true);
  });

  it("should return false for non-numbers", () => {
    expect(isNumber("42")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
  });

  it("should return true for NaN", () => {
    // type of NaN is number in JavaScript
    // use `isValidNumber` to check if it is a valid number
    expect(isNumber(NaN)).toBe(true);
  });
});
