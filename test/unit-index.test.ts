import {
    sum
} from '../src/index'

describe('workflow-playground [UNIT]', () => {
    describe('::sum', () => {
        it('sums as expected', async () => {
            expect.hasAssertions();
            expect(sum(2, 2)).toBe(4);
        });
    });
});
