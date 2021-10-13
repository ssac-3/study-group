/*
버블정렬을 구련해보자
버블정렬을 알고리즘 동작이 각 순회의 가장 큰 요소가 맨 뒤로 이동하는 방식이다.
*/

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  console.log(arr);
};

bubbleSort([8, 2, 6, 4, 5, 10, 53, 62, 11, 29, 16]);
