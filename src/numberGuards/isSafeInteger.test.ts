import { describe, it, expect } from "vitest";
import { isSafeInteger } from "./isSafeInteger.js";

describe("isSafeInteger function", () => {
  it("should return true for safe integers", () => {
    expect(isSafeInteger(0)).toBe(true);
    expect(isSafeInteger(42)).toBe(true);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return false for non-safe integers", () => {
    expect(isSafeInteger(3.14)).toBe(false);
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isSafeInteger("42")).toBe(false);
    expect(isSafeInteger(true)).toBe(false);
  });
});
