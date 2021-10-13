const arr = [8, 2, 6, 4, 5];

const merge = function (left, right) {
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  return [...result, ...left, ...right];
};

const mergeSort = (array) => {
  if (array.length === 1) return array;
  const midIndex = Math.trunc(array.length / 2);

  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
};
console.log(mergeSort(arr));
