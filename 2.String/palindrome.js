'use strict';

let str = 'Abzbc, c, bb, a';
let str2 = 'eaye';

const checkPalindrome = function (str) {
  str = str.toLowerCase();
  const arr = [];

  for (let s of str) {
    const regExp = /[a-z0-9]/g;
    if (regExp.test(s)) {
      arr.push(s);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome(str));
