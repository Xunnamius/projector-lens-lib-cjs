/* eslint-disable @typescript-eslint/no-explicit-any */
import { main as pkgMain } from '../package.json';
import sjx from 'shelljs';

sjx.config.silent = true;

if (!sjx.test('-e', `${__dirname}/../${pkgMain}`))
  throw new Error(
    'must build distributables before running this test suite (try `npm run build-dist`)'
  );

describe('workflow-playground [INTEGRATION-NODE]', () => {
  it('should export expected members', async () => {
    expect.hasAssertions();

    const { sum, diff, mult, div, ...rest } = await import(`${__dirname}/../${pkgMain}`);

    expect(sum).toBeDefined();
    expect(diff).toBeDefined();
    expect(mult).toBeDefined();
    expect(div).toBeDefined();
    expect(rest).toBeEmpty();
  });

  it('should sum properly', async () => {
    expect.hasAssertions();

    const { sum } = await import(`${__dirname}/../${pkgMain}`);

    expect(sum(1, 2)).toBe(3);
  });

  it('should subtract properly', async () => {
    expect.hasAssertions();

    const { diff } = await import(`${__dirname}/../${pkgMain}`);

    expect(diff(1, 2)).toBe(-1);
  });

  it('should multiply properly', async () => {
    expect.hasAssertions();

    const { mult } = await import(`${__dirname}/../${pkgMain}`);

    expect(mult(1, 2)).toBe(2);
  });

  it('should divide properly', async () => {
    expect.hasAssertions();

    const { div } = await import(`${__dirname}/../${pkgMain}`);

    expect(div({ dividend: 4, divisor: 2 })).toBe(2);
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('fails if this test should fail', async () => {
    expect(true).toBe(true);
  });
});
