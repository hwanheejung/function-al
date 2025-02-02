import { AnyFunc } from "../_internal/types.js";

/**
 *
 * Transforms a function so that it accepts only a single argument.
 *
 * @param {Fn} fn - The function to be transformed to accept only one argument.
 * @returns A new function that calls the original function with only its first argument.
 */
export function unary<Fn extends AnyFunc>(fn: Fn) {
  return (arg: Parameters<Fn>[0]) => fn(arg);
}
