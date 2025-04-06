import { describe, it, expect } from "vitest";
import { isNegative } from "./isNegative.js";

describe("isNegative function", () => {
  it("should return true for negative numbers", () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-3.14)).toBe(true);
  });

  it("should return false for zero or positive numbers", () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(1)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isNegative("1")).toBe(false);
    expect(isNegative(null)).toBe(false);
  });
});
