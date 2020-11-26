/* eslint-disable @typescript-eslint/no-explicit-any */
import { main } from '../package.json'

describe('workflow-playground [INTEGRATION-NODE]', () => {
    it('should export expected members', async () => {
        expect.hasAssertions();

        const {
            sum,
            diff,
            ...rest
        } = await import(`${__dirname}/../${main}.js`);

        expect(sum).toBeDefined();
        expect(diff).toBeDefined();
        expect(rest).toBeEmpty();
    });

    it('should sum properly', async () => {
        expect.hasAssertions();

        const { sum, diff } = await import(`${__dirname}/../${main}.js`);

        expect(sum(1, 2)).toBe(3);
        expect(diff(1, 2)).toBe(-1);
    });
});
