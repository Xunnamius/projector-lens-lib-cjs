import { name as pkgName } from '../package.json';
import debugFactory from 'debug';

// * Pass SILENT=true as an environment variable to silence the external script

const debug = debugFactory(`${pkgName}:cli`);

const invoked = async (silent?: boolean) => {
  // TODO: IMPLEMENTATION HERE
  debug('hello');
  // eslint-disable-next-line no-console
  !silent && console.log('hello, world!');
};

export default async function invoker(silent?: boolean) {
  return invoked(silent).catch((e: Error | string) => {
    !silent &&
      // eslint-disable-next-line no-console
      console.error(`fatal: ${typeof e == 'string' ? e : e.message}`);
    debug(`error handler: ${e}`);
    process.exit(1);
  });
}

export { invoker };
export type Invoker = typeof invoker;

void (process.env.BABEL_ENV != 'test' && invoker(!!process.env.SILENT));
