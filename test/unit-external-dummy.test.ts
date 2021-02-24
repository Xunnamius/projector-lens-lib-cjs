import { asMockedFunction, protectedImportFactory } from './setup';
import debugFactory from 'debug';

import type { Debugger } from 'debug';

// TODO: replace EXTERNAL_BIN_PATH below with its actual value
const EXTERNAL_PATH = '../external-scripts/dummy';

jest.mock('debug');

const protectedImport = protectedImportFactory(EXTERNAL_PATH);
const mockedDebug = asMockedFunction<Debugger>();
mockedDebug.extend = asMockedFunction<Debugger['extend']>().mockReturnValue(mockedDebug);
asMockedFunction(debugFactory).mockReturnValue(mockedDebug);

afterEach(() => {
  jest.clearAllMocks();
});

it('calls invoker when imported', async () => {
  expect.hasAssertions();
  await protectedImport();
  expect(mockedDebug).toHaveBeenNthCalledWith(3, 'implement me!');
});

it('handles thrown error objects', async () => {
  expect.hasAssertions();

  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => {
    throw new Error('problems!');
  });

  await protectedImport({ expectedExitCode: 2 });

  expect(mockedDebug).toHaveBeenNthCalledWith(4, 'problems!');
});

it('handles thrown string errors', async () => {
  expect.hasAssertions();

  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => undefined);
  mockedDebug.mockImplementationOnce(() => {
    throw 'problems!';
  });

  await protectedImport({ expectedExitCode: 2 });

  expect(mockedDebug).toHaveBeenNthCalledWith(4, 'problems!');
});
