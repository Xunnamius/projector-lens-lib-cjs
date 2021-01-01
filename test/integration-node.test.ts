/* eslint-disable @typescript-eslint/no-explicit-any */
import { main } from '../package.json';

describe('workflow-playground [INTEGRATION-NODE]', () => {
  it('should export expected members', async () => {
    expect.hasAssertions();

    const { sum, diff, mult, div, ...rest } = await import(`${__dirname}/../${main}.js`);

    expect(sum).toBeDefined();
    expect(diff).toBeDefined();
    expect(mult).toBeDefined();
    expect(div).toBeDefined();
    expect(rest).toBeEmpty();
  });

  it('should sum properly', async () => {
    expect.hasAssertions();

    const { sum } = await import(`${__dirname}/../${main}.js`);

    expect(sum(1, 2)).toBe(3);
  });

  it('should subtract properly', async () => {
    expect.hasAssertions();

    const { diff } = await import(`${__dirname}/../${main}.js`);

    expect(diff(1, 2)).toBe(-1);
  });

  it('should multiply properly', async () => {
    expect.hasAssertions();

    const { mult } = await import(`${__dirname}/../${main}.js`);

    expect(mult(1, 2)).toBe(2);
  });

  it('should divide properly', async () => {
    expect.hasAssertions();

    const { div } = await import(`${__dirname}/../${main}.js`);

    expect(div({ dividend: 4, divisor: 2 })).toBe(2);
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('fails if this test should fail', async () => {
    expect(true).toBe(true);
  });
});
