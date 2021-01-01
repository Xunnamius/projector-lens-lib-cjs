/* eslint-disable @typescript-eslint/no-explicit-any */
import { main } from '../package.json';
import { unitServerPuppeteer } from './setup';

describe('workflow-playground [INTEGRATION-BROWSER]', () => {
  it('should export expected members', async () => {
    expect.hasAssertions();

    await unitServerPuppeteer({
      client: async ({ page, run }) => {
        await run(`${__dirname}/../${main}.js`);
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
        await run(`${__dirname}/../${main}.js`);

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
