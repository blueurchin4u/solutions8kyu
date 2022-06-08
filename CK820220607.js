/*
Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

const find_average = array => { 
    const average = array.reduce((previous, current) => previous + current, 0)/array.length
    return array.length === 0 ? 0 : average 
    }
  
  