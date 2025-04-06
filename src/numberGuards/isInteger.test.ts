import { describe, it } from "vitest";
import { isInteger } from "./isInteger.js";

describe("isInteger function", () => {
  it("should return true for integers", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(42)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(isInteger(3.14)).toBe(false);
    expect(isInteger(-0.5)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isInteger("42")).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger([])).toBe(false);
  });
});
