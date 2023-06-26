/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().split("").filter(char => /[a-zA-Z0-9]/.test(char));
  let newStr = [];
  for (let i = str.length - 1; i >= 0; i--){
    newStr.push(str[i]);
  }
  str = str.join("");
  newStr = newStr.join("");
  if(str === newStr){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isPalindrome;
