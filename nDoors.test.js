import { createDoors, nDoors } from './nDoors'

test('that all doors are closed at the beginning', () => {
    console.log(createDoors(100).every(Boolean))
    expect(createDoors(100).every(Boolean)).toBe(false)
})

test('should return the same number of doors passed in the beginning', () => {
    expect(nDoors(50).length).toBe(50)
    expect(nDoors(66).length).toBe(66)
})
