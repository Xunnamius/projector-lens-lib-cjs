import {
    sum,
    diff,
} from '../src/index'

describe('workflow-playground [UNIT]', () => {
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
    });
});
