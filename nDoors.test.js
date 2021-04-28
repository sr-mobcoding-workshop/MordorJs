import { createDoors, nDoors, toggleDoors } from './nDoors'

test('that all doors are closed at the beginning', () => {
    console.log(createDoors(100).every(Boolean))
    expect(createDoors(100).every(Boolean)).toBe(false)
})

test('should return the same number of doors passed in the beginning', () => {
    expect(nDoors(50).length).toBe(50)
    expect(nDoors(66).length).toBe(66)
})

test('that all doors are open after first round', () => {
    let testDoors = createDoors(50)
    expect(toggleDoors(1, testDoors).every(Boolean)).toBe(true)
})

test('that every second door is closed after second round', () => {
    let testDoors = createDoors(10)
    expect(toggleDoors(2, testDoors).every(elem => elem % 2 == 0)).toBe(false)
})
