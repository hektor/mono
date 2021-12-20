/**
 * Double number (by addition).
 *
 * ```js
 * import { double } from ''
 * double(4) // => 8
 * ```
 *
 * @param n - Arbitrary number
 *
 * @returns Number `n` doubled.
 */
export const double = (n: number) => n + n;

/**
 * Raise value of the first to the power of the second parameter.
 *
 * ```js
 * import { exp } from ''
 * exp(2,8) // => 256
 * ```
 *
 * @param base - base to exponentiate
 * @param exp  - the power to which to raise the base
 *
 * @returns number value of `base` raised to the exponent `exp`
 */
export const exp = (base: number, exp: number) => base ** exp;

/**
 * Clamp number between lower and upper bound.
 *
 * ```js
 * import { clamp } from ''
 * clamp(11,0,10) // => 10
 * ```
 *
 * @param n - Number
 * @param a - Lower bound
 * @param b - Lower bound
 *
 * @returns number `n` clamped between specified bounds
 */

export const clamp = (n: number, a: number, b: number): number =>
  n <= a ? a : n >= b ? b : n;

/**
 * Check if specified value is a number.
 *
 * ```js
 * import { isNumber } from ''
 * isNumber(Math.PI) // => true
 * isNumber([])      // => false
 * ```
 *
 * @param x - Value
 *
 * @returns boolean `x` is a number
 */

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const isNumber = (x: any): boolean => typeof x === 'number';

/**
 * Check if number is contained within closed interval.
 *
 * ```js
 * import { inClosedInterval } from ''
 * inClosedInterval(0,[0,5]) // => true
 * ```
 *
 * @param n                  - Number
 * @param {[number, number]} - Lower & upper bound
 *
 * @returns boolean `n` is contained in `[a,b]`
 */

export const inClosedInterval = (
  n: number,
  [a, b]: readonly [number, number]
): boolean => n >= a && n <= b;

/**
 * Check if value is contained within open interval.
 *
 * ```js
 * import { inOpenInterval } from ''
 * inOpenInterval(0,[0,5]) // => false
 * ```
 *
 * @param n                  - Number
 * @param {[number, number]} - Lower & upper bound
 *
 * @returns boolean `n` is contained in `]a,b[`
 */

export const inOpenInterval = (
  n: number,
  [a, b]: readonly [number, number]
): boolean => n > a && n < b;
