const arr = [8, 2, 6, 4, 5, 34, 21, 55, 35, 1, 65, 44, 17];

const bubbleSort = (array) => {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
