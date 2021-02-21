import debugFactory from 'debug';
import { name as pkgName, version as pkgVersion, main as pkgMain } from '../package.json';
import {
  run,
  mockFixtureFactory,
  dummyNpmPackageFixture,
  npmLinkSelfFixture,
  nodeImportTestFixture
} from './setup';

import type { FixtureOptions } from './setup';

const TEST_IDENTIFIER = 'integration-node';

const pkgMainPath = `${__dirname}/../${pkgMain}`;
const debug = debugFactory(`${pkgName}:${TEST_IDENTIFIER}`);
const nodeVersion = process.env.MATRIX_NODE_VERSION || process.version;

debug(`nodeVersion: "${nodeVersion}"`);

// TODO: configure automatically generated test fixtures
const fixtureOptions = {
  initialFileContents: {
    'package.json': `{"name":"dummy-pkg","dependencies":{"${pkgName}":"${pkgVersion}"}}`
  } as FixtureOptions['initialFileContents'],
  use: [dummyNpmPackageFixture(), npmLinkSelfFixture(), nodeImportTestFixture()]
};

const withMockedFixture = mockFixtureFactory(TEST_IDENTIFIER, fixtureOptions);

const runTest = async ({ esm }: { esm: boolean }) => {
  const indexPath = `src/index.${esm ? 'm' : ''}js`;

  // TODO: update file below to output "working" only with success condition
  fixtureOptions.initialFileContents[indexPath] =
    (esm
      ? `import { sum, diff, mult, div } from '${pkgName}';`
      : `const { sum, diff, mult, div } = require('${pkgName}');`) +
    `
      const working = sum(2, 2) == 4 && diff(2, 2) == 0 && mult(2, 3) == 6 && div({ dividend: 4, divisor: 2 }) == 2;
      console.log(working ? 'working' : 'not working');`;

  await withMockedFixture(async (ctx) => {
    if (!ctx.testResult) throw new Error('must use node-import-test fixture');

    if (esm) {
      debug('(expecting stdout to be "working" or "")');
      debug('(expecting stderr to be "" or an error in a 3rd party dependency)');

      expect(ctx.testResult.stdout).toBeOneOf(['working', '']);
      ctx.testResult.stdout == '' &&
        expect(ctx.testResult.stderr).toMatch(/ \/.+\/node_modules\/.+$/m);
    } else {
      debug('(expecting exit code to be 0)');
      debug('(expecting stdout to be "working")');

      expect(ctx.testResult.code).toBe(0);
      expect(ctx.testResult.stdout).toBe('working');
    }
  });

  delete fixtureOptions.initialFileContents[indexPath];
};

beforeAll(async () => {
  if ((await run('test', ['-e', pkgMainPath])).code != 0) {
    debug(`unable to find main distributable: ${pkgMainPath}`);
    throw new Error('must build distributables first (try `npm run build-dist`)');
  }
});

it('works as an ESM import', async () => {
  expect.hasAssertions();
  await runTest({ esm: true });
});

it('works as a CJS require(...)', async () => {
  expect.hasAssertions();
  await runTest({ esm: false });
});
