/*
You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

1.  use index of less than one because an array begins at 0, meanin start point would be at -1
2. The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
*/

const check = (a, x) => a.indexOf(x) > -1 ? true : false

const check2 = (a, x) => a.includes(x) ? true : false
