/*
Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!


1. Split as array <[...str]> or <str.split('')>
2. Use map to creat new array and use repeat method to double every element within (parantheses in map are optional?)
3. Join array as one string and return
*/


const doubleChar = str => [...str].map((v) => v.repeat(2)).join('')

const doubleChar2 = str => str.split('').map(twiceChar => twiceChar.repeat(2)).join('')


