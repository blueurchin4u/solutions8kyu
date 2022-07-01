/*
If you can't sleep, just count sheep!!

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

1.  create sheep variable
2.  loop through array starting at 1(i)
3.  add  that to sheep variable plus added murmur
*/

var countSheep = function (num) {
    let sheep = ''

    for (i = 1; i <= num; i++) {
        sheep += i + ' sheep...' 
    } 
    return sheep 
}