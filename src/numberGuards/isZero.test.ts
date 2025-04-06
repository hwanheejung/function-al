import { describe, it, expect } from "vitest";
import { isZero } from "./isZero.js";

describe("isZero function", () => {
  it("should return true for 0", () => {
    expect(isZero(0)).toBe(true);
  });

  it("should return true for -0 (as -0 equals 0 in JS)", () => {
    expect(isZero(-0)).toBe(true);
  });

  it("should return false for any non-zero numbers", () => {
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
    expect(isZero(3.14)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isZero("0")).toBe(false);
    expect(isZero(null)).toBe(false);
  });
});
