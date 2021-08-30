// 두 수의 합 찾기
// 입력값 : nums=[2,7,10,19]. target = 9
// 출력값 : [0,1]

// function findSumOfTwo(nums, target) {
//   const answer = [];
//   const len = nums.length;
//   for (let i = 0; i < len; i += 1) {
//     for (let j = i + 1; j < len; j += 1) {
//       if (nums[i] + nums[j] === target) {
//         answer.push(i, j);
//         return answer;
//       }
//     }
//   }
// }
const findSumOfTwoWithHashTable = function (nums, target) {
  const ANSWER = [];
  const NUM_LEN = nums.length;
  const hashTable = {};

  for (let i = 0; i < NUM_LEN; i += 1) {
    const check = hashTable.hasOwnProperty(target - nums[i]);
    if (check) {
      ANSWER.push(hashTable[target - nums[i]], i);
      break;
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return ANSWER;
};

console.log(findSumOfTwoWithHashTable([2, 7, 10, 19], 9));
