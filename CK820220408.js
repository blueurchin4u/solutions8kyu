/*Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
       arr[i] > 0 ? sum += arr[i] : sum
    }
    return sum
  }

  function positiveSum(arr) {
    const reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0)
    return arr.reduce(reducer, 0)
  }
// From MDN: const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

  const positiveSum = arr => arr.reduce((accumulator, current) => current > 0 ? accumulator + current : accumulator, 0);