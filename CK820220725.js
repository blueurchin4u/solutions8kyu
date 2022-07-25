/*
Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

1.  If the remainder of year strictly equals 0, then return 0 - if not, return 1 and add that to the return statement. 
*/

const century = year => {

    let calc = (year % 100 === 0) ? 0 : 1;
    let century = Math.floor(year / 100);

    return calc + century;
}
