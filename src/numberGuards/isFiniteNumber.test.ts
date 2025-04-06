import { describe, it, expect } from "vitest";
import { isFiniteNumber } from "./isFiniteNumber.js";

describe("isFiniteNumber function", () => {
  it("should return true for finite numbers", () => {
    expect(isFiniteNumber(0)).toBe(true);
    expect(isFiniteNumber(42)).toBe(true);
    expect(isFiniteNumber(3.14)).toBe(true);
  });

  it("should return false for non-finite numbers", () => {
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(-Infinity)).toBe(false);
    expect(isFiniteNumber(NaN)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isFiniteNumber("42")).toBe(false);
    expect(isFiniteNumber(null)).toBe(false);
  });
});
