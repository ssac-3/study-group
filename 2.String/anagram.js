'use strict';

const strs = ['eat', 'repaid', 'paired', 'tea', 'bat'];

console.log(strs.sort());
const checkAnagram = (strs) => {
  let hashTable = {};
  for (let str of strs) {
    const tempStr = str.split('').sort();
    // aet

    if (!hashTable[tempStr.join('')]) {
      hashTable[tempStr.join('')] = new Array(str);
    } else {
      hashTable[tempStr.join('')].push(str);
    }
  }
  return Object.values(hashTable);
};

const res = checkAnagram(strs);
console.log(res);
