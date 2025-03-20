import { describe, it, expect } from "vitest";
import { noop } from "./noop.js";

describe("noop function", () => {
  it("does nothing and returns undefined", () => {
    const result = noop();
    expect(result).toBeUndefined();
  });

  it("does not throw an error when called", () => {
    expect(() => noop()).not.toThrow();
  });
});
