// 두 수의 합 찾기
// 입력값 : nums=[2,7,10,19]. target = 9
// 출력값 : [0,1]

function findSumOfTwo(nums, target) {
  const answer = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] + nums[j] === target) {
        answer.push(i, j);
        return answer;
      }
    }
  }
}

console.log(findSumOfTwo([2, 7, 10, 19], 17));
