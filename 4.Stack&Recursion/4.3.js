'use strict';

const STRING = '[(){}]';
const STRING2 = '[({';

const STACK = [];

const CHECKOBJ = { '[': ']', '(': ')', '{': '}' };

const checkValidation = (STRING) => {
  for (let str of STRING) {
    if (str === '[' || str === '{' || str === '(') {
      STACK.push(str);
    } else if (str === ']' || str === '}' || str === ')') {
      if (CHECKOBJ[STACK[STACK.length - 1]] === str) {
        STACK.pop();
      } else {
        return false;
      }
    }
  }
  if (STACK.length === 0) return true;
  else return false;
};

console.log(checkValidation(STRING2));
