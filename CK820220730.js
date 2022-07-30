/*
Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

1.  undefined means no name is given
2.  name.length means there are no characters in the string
3.  toUpperCase changes the first letter to upperCase, 
4.  substring() method returns the part of the string between the start and end indexes, or to the end of the string.

        substring(indexStart)
        substring(indexStart, indexEnd)
*/

const hello = name => typeof name === "undefined" || name.length === 0 ? `Hello, World!`:
  `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`