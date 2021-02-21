import { asMockedFunction, isolatedImportFactory, withMockedExit } from './setup';
import debugFactory from 'debug';

import type { Debugger } from 'debug';

const EXTERNAL_PATH = '../external-scripts/dummy';

jest.mock('debug');

const isolatedImport = isolatedImportFactory(EXTERNAL_PATH);
const mockedDebug = asMockedFunction<Debugger>();
mockedDebug.extend = asMockedFunction<Debugger['extend']>().mockReturnValue(mockedDebug);
asMockedFunction(debugFactory).mockReturnValue(mockedDebug);

afterEach(() => {
  jest.clearAllMocks();
});

it('calls invoker when imported', async () => {
  expect.hasAssertions();

  await withMockedExit(async () => {
    await isolatedImport();
  });

  expect(mockedDebug).toBeCalledWith('implement me!');
});

it('handles thrown error objects', async () => {
  expect.hasAssertions();

  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => {
    throw new Error('problems!');
  });

  await withMockedExit(async ({ exitSpy }) => {
    await isolatedImport();
    expect(exitSpy).toBeCalledWith(1);
  });

  expect(mockedDebug).toBeCalledTimes(4);
});

it('handles thrown string errors', async () => {
  expect.hasAssertions();

  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => {
    throw 'problems!';
  });

  await withMockedExit(async ({ exitSpy }) => {
    await isolatedImport();
    expect(exitSpy).toBeCalledWith(1);
  });

  expect(mockedDebug).toBeCalledTimes(4);
});
