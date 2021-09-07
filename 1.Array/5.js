// 'use strict';

// // 정렬된 배열과 목표값
// const js_list = [3, 6, 7, 9, 10];
// const target = 7;

// const idx = js_list.indexOf(target);

// if (idx !== -1) {
//   console.log(idx);
// } else {
//   for (let i = 0; i < js_list.length; i++) {
//     if (js_list[i] > target) {
//       // js_list[0] = 3 , target = 2
//       console.log(i);
//       break;
//     }
//   }
// }
// const [a, b] = [2, 1];
// console.log(a, b);

// //
// //i번쨰 인덱스에 target 값 삽입
// // js_list.splice(i, 0, target);

const NUMS = [1, 3, 5, 7];
const TARGET = 8;

const result = (numArr, targetNum) => {
  const idx = numArr.indexOf(targetNum);
  let bottom = 0;
  let top = numArr.length - 1;
  let middle = Math.floor(top / 2);

  if (idx !== -1) return idx;

  while (top !== middle) {
    if (top === middle || bottom === middle) return middle + 1;
    else if (targetNum > numArr[middle]) bottom = middle;
    else if (targetNum < numArr[middle]) top = middle;

    middle = Math.floor((top + bottom) / 2);
  }

  return middle + 1;
};

console.log(result(NUMS, TARGET));

s;
