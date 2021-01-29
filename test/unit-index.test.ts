import { sum, diff, mult, div } from '../src/index';

describe('workflow-playground [UNIT-INDEX]', () => {
  describe('::sum', () => {
    it('sums as expected', async () => {
      expect.hasAssertions();
      expect(sum(2, 2)).toBe(4);
    });
  });

  describe('::diff', () => {
    it('takes the difference as expected', async () => {
      expect.hasAssertions();
      expect(diff(2, 2)).toBe(0);
    });
    // eslint-disable-next-line jest/prefer-expect-assertions
    it('fails if this test should fail', async () => {
      expect(true).toBe(true);
    });
  });

  describe('::mult', () => {
    it('multiplies as expected', async () => {
      expect.hasAssertions();
      expect(mult(2, 3)).toBe(6);
    });
    // eslint-disable-next-line jest/prefer-expect-assertions
    it('fails if this test should fail', async () => {
      expect(true).toBe(true);
    });
  });

  describe('::div', () => {
    it('divides as expected', async () => {
      expect.hasAssertions();
      expect(div({ dividend: 4, divisor: 2 })).toBe(2);
    });
    // eslint-disable-next-line jest/prefer-expect-assertions
    it('fails if this test should fail', async () => {
      expect(true).toBe(true);
    });
  });
});
