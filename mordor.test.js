import { displayNumber } from './mordor'

test('outputs digit one', () => {
    expect(displayNumber(1)).toBe('   \n  |\n  |\n');
});