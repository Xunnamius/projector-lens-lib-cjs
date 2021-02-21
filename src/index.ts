import { name as pkgName } from '../package.json';
import debugFactory from 'debug';

const debug = debugFactory(`${pkgName}:index`);

/**
 * Returns the sum of `a` and `b`
 */
export function sum(a: number, b: number) {
  debug(`summed ${a} and ${b}`);
  return a + b;
}

/**
 * Returns the difference of `a` and `b`
 */
export function diff(a: number, b: number) {
  debug(`subtracted ${b} from ${a}`);
  return a - b;
}

/**
 * Returns the product of `a` and `b`
 */
export function mult(a: number, b: number) {
  debug(`multiplies ${a} and ${b}`);
  return a * b;
}

/**
 * Returns the quotient of `dividend` and `divisor`
 */
export function div({ dividend, divisor }: { dividend: number; divisor: number }) {
  debug(`divides ${dividend} with ${divisor}`);
  return dividend / divisor;
}
