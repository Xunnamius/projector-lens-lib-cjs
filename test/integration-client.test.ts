/* eslint-disable @typescript-eslint/no-explicit-any */
import { name as pkgName, main as pkgMain } from '../package.json';
import { unitServerPuppeteer } from './setup';
import debugFactory from 'debug';
import sjx from 'shelljs';

const TEST_IDENTIFIER = 'integration-client';
const debug = debugFactory(`${pkgName}:${TEST_IDENTIFIER}`);

debug(`pkgName: "${pkgName}"`);

sjx.config.silent = !process.env.DEBUG;

if (!sjx.test('-e', `${__dirname}/../${pkgMain}`))
  throw new Error(
    'must build distributables before running this test suite (try `npm run build-dist`)'
  );

describe(`${pkgName} [${TEST_IDENTIFIER}]`, () => {
  it('should export expected members', async () => {
    expect.hasAssertions();

    await unitServerPuppeteer({
      client: async ({ page, run }) => {
        await run(`${__dirname}/../${pkgMain}`);
        expect(await page.evaluate(() => Object.keys(window))).toIncludeAllMembers([
          'sum',
          'diff',
          'mult',
          'div'
        ]);
      }
    });
  });

  it('should sum properly', async () => {
    expect.hasAssertions();

    await unitServerPuppeteer({
      client: async ({ page, run }) => {
        await run(`${__dirname}/../${pkgMain}`);

        expect(await page.evaluate(() => (window as any).sum(1, 2))).toBe(3);
        expect(await page.evaluate(() => (window as any).diff(1, 2))).toBe(-1);
        expect(await page.evaluate(() => (window as any).mult(1, 2))).toBe(2);
        expect(
          await page.evaluate(() => (window as any).div({ dividend: 4, divisor: 2 }))
        ).toBe(2);
      }
    });
  });
});
