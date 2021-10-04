const nums1 = [1, 2, 2, 3, 3, 3, 5, 7, 7, 9, 9, 9, 13]; // 3번째로 큰 수는 7
const nums2 = [1, 2];

const checkValue = (nums) => {
  let count = 0;
  nums
    .sort(function (a, b) {
      return a > b;
    })
    .reverse();

  for (let i = 0; i < nums.length - 1; i++) {
    if (count === 3) {
      return nums[i - 1];
    } else {
      if (nums[i] !== nums[i + 1]) {
        count++;
      }
    }
  }
  return nums[0];
};

console.log(checkValue(nums2));
