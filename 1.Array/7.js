const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 6];

const sortTwoArray = function (nums1, nums2) {
  const nums1Len = nums1.length;
  const tempArray = [...nums1, ...nums2].sort();

  nums1.length = 0;
  nums2.length = 0;
  let gCount = 0;
  for (let arr of tempArray) {
    if (gCount++ < nums1Len) nums1.push(arr);
    else nums2.push(arr);
  }
  console.log(nums1, nums2);
};
sortTwoArray(nums1, nums2);
