/*
Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

1. To make case insensitive, use .toLowerCase()
2. Then compare using split, reverse, join methods
*/

const isPalindrome = x => x.toLowerCase() == x.toLowerCase().split('').reverse().join('')
   