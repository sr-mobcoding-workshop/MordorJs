export function sum(a, b) {
    return a + b
}

/**
 * 
 * @param {*} numberOfDoors 
 * @returns array of doors
 */
export function nDoors (numberOfDoors) {
    // all doors are closed
    const doors = createDoors(numberOfDoors)
    
    for (let pass = 1; pass <= numberOfDoors; pass++) {
        toggleDoors(pass, doors)
    }

    return doors
}

/**
 * toggle the doors
 * @param {*} pass 
 * @param {*} doors 
 * @returns 
 */
export function toggleDoors (pass, doors) {
    for (let doorIdx = 0; doorIdx < doors.length; doorIdx++) {
        // bump doorIdx to match the pass index
        if ((doorIdx + 1) % pass === 0) {
            const toggleDoor = doors[doorIdx]
            doors[doorIdx] = !toggleDoor
        }
    }
    return doors
}

/**
 * Create array of doors with given number, initially closed
 * @param {*} numberOfDoors 
 * @returns 
 */
export const createDoors = (numberOfDoors) => new Array(numberOfDoors).fill(false)

/**
 * Print the doors to the console. @ means open, # means closed
 * @param {*} doors 
 */
export function printDoors (doors) {
    const doorsWithSymbols = new Array()

    doors.forEach((doorOpen) => doorsWithSymbols.push(doorOpen ? '@' : '#'))
    console.log(doorsWithSymbols.join(''));
}

let hundredDoors = nDoors(100)
printDoors(hundredDoors)