"use strict";

// const find_permutation = (string) => {
//   if (string.length == 1) return [s];

//   const arr = [];

//   for (let cursor1 of string) {
//     for (let cursor2 of string) {
//     }
//   }

//   return push();
// };

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]); //조합수가 하나밖에 없으면 각각 배열로 반환

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx); //중복애들만제거
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]); //고정값이 있는 배열에 경우의수 추가
    result.push(...combineFixer); // 경우의수 push
  });

  return result;
}

console.log(permutation(["a", "b", "c"], 3));
