'use strict';

const strs = ['eat', 'repaid', 'paired', 'tea', 'bat'];

const checkAnagram = (strs) => {
  let hashTable = {};
  for (let str of strs) {
    const tempStr = str.split('').sort();

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
