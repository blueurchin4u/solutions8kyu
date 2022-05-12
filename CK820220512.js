/*
Grasshopper - Combine strings

Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

The concat() method concatenates the string arguments to the calling string and returns a new string.
*/

const combineNames = (first, last) => first.concat(' ', last)