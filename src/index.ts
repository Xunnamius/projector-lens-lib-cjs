/**
 * Returns the sum of `a` and `b`
 */
export function sum(a: number, b: number) {
  return a + b;
}

/**
 * Returns the difference of `a` and `b`
 */
export function diff(a: number, b: number) {
  return a - b;
}

/**
 * Returns the product of `a` and `b`
 */
export function mult(a: number, b: number) {
  return a * b;
}

/**
 * Returns the quotient of `dividend` and `divisor`
 */
export function div({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
