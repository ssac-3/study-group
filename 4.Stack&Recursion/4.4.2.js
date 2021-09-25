'use strict';
const STRING = 'abc';
function getArrayMutations(arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0));

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1);

    len % 2
      ? ([arr[0], arr[len - 1]] = [arr[len - 1], arr[0]])
      : ([arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]);
  }

  return perms;
}

console.log(getArrayMutations(STRING.split('')));
