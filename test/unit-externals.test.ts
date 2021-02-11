import { name as pkgName } from '../package.json';

import type { Invoker } from '../external-scripts/external';

const TEST_IDENTIFIER = 'unit-externals';
let outputReset: () => void = () => undefined;

const isolatedImport = (path?: string) => {
  const finalPath = path || '../external-scripts/external';
  let pkg;

  // ? Cache-busting
  jest.isolateModules(() => {
    // ? While I'd prefer dynamic import(), it doesn't support cache busting!
    pkg = require(finalPath).invoker;
  });

  if (typeof pkg == 'undefined')
    throw new Error(`isolated import of ${finalPath} failed`);

  return pkg as Invoker;
};

const captureOutput = () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  const exitSpy = jest
    .spyOn(process, 'exit')
    .mockImplementation(() => undefined as never);

  outputReset = () => {
    logSpy.mockRestore();
    errorSpy.mockRestore();
    exitSpy.mockRestore();
    outputReset = () => undefined;
  };

  return {
    logSpy,
    errorSpy,
    exitSpy
  };
};

afterEach(() => {
  outputReset();
  jest.clearAllMocks();
});

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  describe('/test', () => {
    it('does not call invoker if BABEL_ENV=test', async () => {
      expect.hasAssertions();

      const oldEnv = process.env.BABEL_ENV;
      process.env.BABEL_ENV = 'test';

      const { logSpy } = captureOutput();
      isolatedImport();
      expect(logSpy).not.toBeCalled();

      process.env.BABEL_ENV = oldEnv;
    });

    it('calls invoker if BABEL_ENV!=test', async () => {
      expect.hasAssertions();

      const oldEnv = process.env.BABEL_ENV;
      process.env.BABEL_ENV = 'development';

      const { logSpy } = captureOutput();
      isolatedImport();
      expect(logSpy).toBeCalledWith('hello, world!');

      process.env.BABEL_ENV = oldEnv;
    });

    it('not silent if silent=false and by default', async () => {
      expect.hasAssertions();

      const { logSpy } = captureOutput();

      await expect(isolatedImport()(false)).toResolve();
      await expect(isolatedImport()()).toResolve();

      expect(logSpy).toBeCalledWith('hello, world!');
      expect(logSpy).toBeCalledTimes(2);
    });

    it('silent if silent=true', async () => {
      expect.hasAssertions();

      const { logSpy, exitSpy } = captureOutput();

      await expect(isolatedImport()(true)).toResolve();
      expect(logSpy).not.toBeCalled();
      expect(exitSpy).not.toBeCalled();
    });

    it('silent during errors if silent=true', async () => {
      expect.hasAssertions();

      const { logSpy, exitSpy } = captureOutput();
      logSpy.mockImplementation(() => {
        throw new Error('problems!');
      });

      await expect(isolatedImport()(true)).toResolve();
      expect(logSpy).not.toBeCalled();
      expect(exitSpy).not.toBeCalled();
    });

    it('not silent during errors if silent=false', async () => {
      expect.hasAssertions();

      const { logSpy, errorSpy, exitSpy } = captureOutput();
      logSpy.mockImplementation(() => {
        throw new Error('problems!');
      });

      await expect(isolatedImport()()).toResolve();
      expect(errorSpy).toBeCalledWith(expect.stringContaining('problems!'));
      expect(exitSpy).toBeCalled();
    });

    it('handles both string errors and error objects', async () => {
      expect.hasAssertions();

      const { logSpy, errorSpy } = captureOutput();

      logSpy.mockImplementation(() => {
        throw new Error('problems1');
      });
      await expect(isolatedImport()(false)).toResolve();
      expect(errorSpy).toBeCalledWith(expect.stringContaining('problems1'));

      logSpy.mockImplementation(() => {
        throw 'problems2';
      });
      await expect(isolatedImport()(false)).toResolve();
      expect(errorSpy).toBeCalledWith(expect.stringContaining('problems2'));
    });
  });
});
