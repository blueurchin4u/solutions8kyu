/*
Find Maximum and Minimum Values of a List

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.

The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
*/

const min = list => Math.min(...list);
const max = list => Math.max(...list);

/* 
 The above as not an arrow function
var min = function(list){
    return Math.min(...list);
}
var max = function(list){ 
    return Math.max(...list);
}
*/

