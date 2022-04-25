/*
Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbreviateName(name) {
   return (
     name
       // split the name into two words
       .split(" ")
 
       // take first char of both parts and capitalize them
       .map((part) => part[0].toUpperCase())
 
       // join both characters with a dot
       .join(".")
   );
 }

function abbrevName(name){
    const array = name.split(" ")
    return (array[0][0] + "." + array[1][0]).toUpperCase()
 }
 
 function abbrevName(name){
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
 } 