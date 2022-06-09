/*
Multiplication table for number

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/

function multiTable(number) {
  let table = '' // add variable as a place to store values

  for (let i = 1; i < 11; i++){ //create a for loop that loops to 10
    let ans = number * i        //create variable that multiplies parameter times loop counter
    table += `${i} * ${number} = ${ans}\n`  //write table into 'table' variable and add \n RIGHT AFTER TO CREATE  NEW LINE IMMEDIATELY
  }  

  return res.trim('\n')  //use trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
}