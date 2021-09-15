// // const nums1 = [1, 3, 5, 7];
// // const nums2 = [2, 4, 6];

// // // nums1 = [1,2,3,4], nums2=[5,6,7]

// // const sortTwoArray = function (nums1, nums2) {
// //   const nums1Len = nums1.length;

// //   const tempArray = [...nums1, ...nums2].sort(); //1,2,3,4    ,5,6,7

// //   nums1.length = 0;
// //   nums2.length = 0;

// //   let count = 0;
// //   for (let arr of tempArray) {
// //     if (count++ < nums1Len) nums1.push(arr);
// //     else nums2.push(arr);
// //   }
// //   console.log(nums1, nums2);
// // };

// // sortTwoArray(nums1, nums2);

// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 6];

// const solution = function (arr1, arr2) {
//   const start_time = new Date();

//   for (i in arr1) {
//     if (arr1[i] > arr2[0]) {
//       arr1.splice(i, 0, arr2[0]); // 삽입
//       arr2.splice(0, 1); // 삭제
//     }
//   }

//   if (arr2.length) {
//     arr1.push(...arr2);
//   }

//   const end_time = new Date();
//   console.log('running time : ', end_time - start_time);

//   console.log(arr1);
//   return arr1;
// };

// solution(arr1, arr2);

let num1 = 4;
let num2 = 5;
[num1, num2] = [num2, num1];
console.log(num1, num2);
