import { describe, it } from "vitest";
import { isValidNumber } from "./isValidNumber.js";

describe("isValidNumber function", () => {
  it("should return true for numbers", () => {
    expect(isValidNumber(0)).toBe(true);
    expect(isValidNumber(42)).toBe(true);
    expect(isValidNumber(3.14)).toBe(true);
    expect(isValidNumber(-1)).toBe(true);
  });

  it("should return false for non-numbers", () => {
    expect(isValidNumber("42")).toBe(false);
    expect(isValidNumber(true)).toBe(false);
    expect(isValidNumber(null)).toBe(false);
    expect(isValidNumber(undefined)).toBe(false);
    expect(isValidNumber({})).toBe(false);
    expect(isValidNumber([])).toBe(false);
  });

  it("should return false for NaN", () => {
    // type of NaN is number but it is not a valid number
    expect(isValidNumber(NaN)).toBe(false);
  });
});
