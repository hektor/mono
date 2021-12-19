/**
 * Doubles a number (by addition)
 *
 * ### E.g.
 * ```js
 * import { double } from 'typescript-starter'
 * double(4) // => 8
 * ```
 *
 * @param n - Arbitrary number
 * @returns Number `n` doubled.
 */
export const double = (n: number) => n + n;

/**
 * Raise the value of the first to the power of the second parameter
 *
 * ### E.g.
 * ```js
 * import { exp } from 'typescript-starter'
 * exp(2,8) // => 256
 * ```
 *
 * @param base - base to exponentiate
 * @param exp  - the power to which to raise the base
 * @returns Number value of `base` raised to the exponent `exp`
 */
export const exp = (base: number, exp: number) => base ** exp;

/**
 * TODO: clamp
 * TODO: isNumber
 * TODO: inClosed
 * TODO: inOpen
 */

export const clamp = () => {};
export const isNumber = () => {};
export const inClosedInterval = () => {};
export const inOpenInterval = () => {};
