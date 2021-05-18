import { firstDayOfMonth, getNameOfDay, createMultiDimensionalArray, camelizeSnailCase } from './nDoors';

test( 'firstDayOfMonth', () => {
    expect(firstDayOfMonth(new Date('1970-01-20')).getDate() ).toBe(1);
    expect(() => {firstDayOfMonth('1970-01-20')}).toThrow();
} )

test( 'if the day of my birthday was a Tuesday', () => {
    expect(getNameOfDay(new Date('1979-04-24'))).toBe('Tuesday');
} )

test('Test if if function creates array with X dimensions and Y Size', () => {
    expect(createMultiDimensionalArray(2,2)[0].length).toBe(2);
    expect(createMultiDimensionalArray(3,6)[0][0].length).toBe(6);
})

test('convert to camel case', () => {
    expect(camelizeSnailCase('one_two')).toBe('oneTwo')
})