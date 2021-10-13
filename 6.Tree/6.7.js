const nums1 = [1, 2, 4, 3, 6, 3, 5, 7, 7, 9, 9, 9, 13]; // 3번째로 큰 수는 7
const nums2 = [1, 2];
const nums3 = [1, 4, 5];

const checkValue = (nums) => {
  let count = 1;
  nums.sort(function (a, b) {
    return b - a;
  });

  console.log(nums);

  if (nums.length < 3) {
    return nums[0];
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (count === 3) {
        return nums[i];
      } else {
        if (nums[i] !== nums[i + 1]) {
          count++;
        }
      }
      if (count === 3) {
        return nums[i + 1];
      }
    }
  }
};

console.log(checkValue(nums1));
