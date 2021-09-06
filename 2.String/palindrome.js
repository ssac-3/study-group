'use strict';

let str = 'Azcbbc, c, bb, cza';

const checkPalindrome = function (str) {
  str = str.toLowerCase();
  const arr = [];

  for (let s of str) {
    const regExp = /[a-z]/g;
    if (regExp.test(s)) {
      if (arr[arr.length - 1] !== s) {
        arr.push(s);
      } else {
        arr.pop();
      }
    }
  }

  if (arr.length) {
    return false;
  } else {
    return true;
  }
};

console.log(checkPalindrome(str));

// s = s.split(',').join('');
// s = s.replace(/(\s*)/g, '');
// console.log(s);
