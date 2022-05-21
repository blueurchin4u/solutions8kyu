/*
Count by X

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

1. Iterator starts at 1 because : Assume both the given number and the number of times to count will be positive numbers greater than 0.
2. i <= n because array must end at that multiple
3. push x*i to the empty array (z)
*/

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
     z.push(x * i) 
  }
  return z;
}




