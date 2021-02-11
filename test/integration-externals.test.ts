import { resolve } from 'path';
import sjx from 'shelljs';
import debugFactory from 'debug';
import uniqueFilename from 'unique-filename';
import del from 'del';

import {
  name as pkgName,
  version as pkgVersion
  //peerDependencies
} from '../package.json';

const TEST_IDENTIFIER = 'integration-externals';
const debug = debugFactory(`${pkgName}:${TEST_IDENTIFIER}`);

sjx.config.silent = !process.env.DEBUG;

if (!sjx.test('-d', `${__dirname}/../external-scripts/bin`)) {
  debug(`unable to find external bin dir: ${__dirname}/../external-scripts/bin`);
  throw new Error(
    'must build externals before running this test suite (try `npm run build-externals`)'
  );
}
debug(`pkgName: "${pkgName}"`);
debug(`pkgVersion: "${pkgVersion}"`);

afterAll(() => deleteRoot());
let deleteRoot: () => Promise<void>;

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  describe('/external', () => {
    it('runs as expected', async () => {
      expect.hasAssertions();

      const root = uniqueFilename(sjx.tempdir(), TEST_IDENTIFIER);
      const pkgJson = `${root}/package.json`;

      deleteRoot = async () => {
        sjx.cd('..');
        debug(`forcibly removing dir ${root}`);
        await del(root);
      };

      sjx.mkdir('-p', root);
      sjx.mkdir('-p', `${root}/node_modules`);
      const cd = sjx.cd(root);

      if (cd.code != 0) {
        await deleteRoot();
        throw new Error(`failed to mkdir/cd into ${root}: ${cd.stderr} ${cd.stdout}`);
      } else debug(`created temp root dir: ${root}`);

      new sjx.ShellString('{"name":"dummy-pkg"}').to(pkgJson);

      debug(`package.json contents: ${sjx.cat('package.json').stdout}`);
      debug(`directory at this point: ${sjx.exec('tree -a').stdout}`);

      const result = sjx.exec(
        `node "${resolve(__dirname, '../external-scripts/bin/external.js')}"`
      );

      debug(`cmd "${result}": (${result.code})\n${result.stderr}\n${result.stdout}`);
      expect(result.code).toBe(0);
      expect(result.stdout).toStrictEqual(expect.stringContaining('hello, world'));
    });
  });
});
