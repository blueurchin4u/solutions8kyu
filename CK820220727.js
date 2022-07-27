/*
Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset(index) of the string.

const areYouPlayingBanjo = name => 
  name.charAt(0) === "R" || name.charAt(0) === "r" ?`${name} plays banjo` :
 `${name} does not play banjo`;
