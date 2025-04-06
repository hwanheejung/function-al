import { describe, it, expect } from "vitest";
import { isPositive } from "./isPositive.js";

describe("isPositive function", () => {
  it("should return true for positive numbers", () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(3.14)).toBe(true);
  });

  it("should return false for zero or negative numbers", () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isPositive("1")).toBe(false);
    expect(isPositive(null)).toBe(false);
  });
});
