/*
Sum without highest and lowest number

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

1. Check if the array is null (!array) or(||) empty(array.length == 0). If true, return 0.  Otherwise, sort the array using sort() function (array.sort((a, b) => a - b).
2. Slice the array's first and last index using slice() function (slice(1, array.length - 1))
3. Sum up the new array using reduce() function and return the result.

After Execution of slice() if the array length become 0 then reduce() does not execute the function for array elements and return the initial value.

*/

const sumArray = array => 
   !array || array.length == 0 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((res, n) => res + n,0);

