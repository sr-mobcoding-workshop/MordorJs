const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/**
 * build a new date object out of dateObjects year and dateObjects month and day 1
 * @param {*} dateObject 
 * @returns 
 */
export function firstDayOfMonth(dateObject) {
    return new Date(dateObject.getFullYear(), dateObject.getMonth(), 1)
}

/**
 * Get the day of the given date as string
 * @param {*} dateObject 
 * @returns 
 */
export const getNameOfDay = (dateObject) => weekdays[dateObject.getDay()]





// [[0,2],[5,6]]

export function createMultiDimensionalArray(dimensions, size) {
    const a = new Array(size);
    if( dimensions ) {
        for( let i = 0; i < size; i++ ) {
            a[i] = createMultiDimensionalArray(dimensions-1, size);
        }
    }
    return a;
}


export function capitalize(someString) {
    return someString[0].toUpperCase() + someString.substring(1);;
}

export function camelizeSnailCase(someString) {
    var a = someString.split('_');
    var r = a[0];
    for(var i=1; i<a.length; i++) {
        r += capitalize(a[i]);
    }
    return r;
}

// someString[0].toUpperCase() + someString.slice(1);








const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }