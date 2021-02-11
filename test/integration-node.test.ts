import { name as pkgName, version as pkgVersion, main as pkgMain } from '../package.json';
import { resolve } from 'path';
import sjx from 'shelljs';
import debugFactory from 'debug';
import uniqueFilename from 'unique-filename';
import del from 'del';

const TEST_IDENTIFIER = 'integration-node';
const debug = debugFactory(`${pkgName}:${TEST_IDENTIFIER}`);

sjx.config.silent = !process.env.DEBUG;

if (!sjx.test('-e', `${__dirname}/../${pkgMain}`)) {
  debug(`unable to find main distributable: ${__dirname}/../${pkgMain}`);
  throw new Error(
    'must build distributables before running this test suite (try `npm run build-dist`)'
  );
}

debug(`pkgName: "${pkgName}"`);
debug(`pkgVersion: "${pkgVersion}"`);

const nodeVersion = process.env.MATRIX_NODE_VERSION || process.version;
debug(`nodeVersion: "${nodeVersion}"`);

if (!nodeVersion) throw new Error('bad MATRIX_NODE_VERSION encountered');

const createIndexAndRunTest = (root: string) => ({ esm }: { esm: boolean }) => {
  const ext = `${esm ? 'm' : ''}js`;

  const cmd = new sjx.ShellString(
    (esm
      ? `import { sum, diff, mult, div } from '${pkgName}';`
      : `const { sum, diff, mult, div } = require('${pkgName}');`) +
      `
      const working = sum(2, 2) == 4 && diff(2, 2) == 0 && mult(2, 3) == 6 && div({ dividend: 4, divisor: 2 }) == 2;
      console.log(working ? 'working' : 'not working');`.trim()
  );

  debug(`echoing string \`${cmd}\` to ${root}/index.${ext}`);
  cmd.to(`${root}/index.${ext}`);

  debug(`package.json contents: ${sjx.cat('package.json').stdout}`);

  const exec = sjx.exec(`node --experimental-json-modules index.${ext}`);
  const stdout = exec.stdout.trim();
  const stderr = exec.stderr.trim();

  if (esm) {
    debug(`result: \`${stdout}\` (expected "working" or "")`);
    debug(`result: \`${stderr}\` (expected "" or an error in a 3rd party dependency)`);
    expect(stdout == 'working' || / \/.+\/node_modules\/.+$/m.test(stderr)).toBeTrue();
  } else {
    debug(`result: "${stdout}" (expected "working")`);
    expect(stdout).toBe('working');
  }
};

let deleteRoot: () => Promise<void>;
let runTest: ReturnType<typeof createIndexAndRunTest>;

beforeEach(async () => {
  const root = uniqueFilename(sjx.tempdir(), TEST_IDENTIFIER);
  const pkgJson = `${root}/package.json`;

  deleteRoot = async () => {
    sjx.cd('..');
    debug(`forcibly removing dir ${root}`);
    await del(root);
  };

  sjx.mkdir('-p', root);
  sjx.mkdir('-p', `${root}/node_modules`);
  pkgName.includes('/') &&
    sjx.mkdir('-p', `${root}/node_modules/${pkgName.split('/')[0]}`);
  const cd = sjx.cd(root);

  if (cd.code != 0) {
    throw new Error(`failed to mkdir/cd into ${root}: ${cd.stderr} ${cd.stdout}`);
  } else debug(`created temp root dir: ${root}`);

  new sjx.ShellString(
    `{"name":"dummy-pkg","dependencies":{"${pkgName}":"${pkgVersion}"}}`
  ).to(pkgJson);

  debug(`creating symbolic link`);
  const makeLink = sjx.ln('-s', resolve(`${__dirname}/..`), `node_modules/${pkgName}`);

  if (makeLink.code !== 0) {
    throw new Error(
      `unable to create symbolic link: ${makeLink}\n\t${makeLink.stderr} ${makeLink.stdout}`
    );
  }

  debug(`directory at this point: ${sjx.exec('tree -a', { silent: true }).stdout}`);
  runTest = createIndexAndRunTest(root);
});

afterEach(() => deleteRoot());

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  it('works as an ESM import', async () => {
    expect.hasAssertions();
    runTest({ esm: true });
  });

  it('works as a CJS require(...)', async () => {
    expect.hasAssertions();
    runTest({ esm: false });
  });
});
