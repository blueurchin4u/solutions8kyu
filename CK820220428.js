/*
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    let binary = ''
    x.split('').forEach(letter => Number(letter) < 5 ? binary += 0: binary += 1)
    return binary
  }

  function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }