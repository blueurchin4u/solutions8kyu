/*
Training JS #18: Methods of String object--concat() split() and its good friend join()

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
*/
function splitAndMerge(string,separator){
    let words = string;
    return words.split(" ").map(index => index.split("").join(separator)).join(" ");
   }
      
  console.log(splitAndMerge('My name is John', ','))