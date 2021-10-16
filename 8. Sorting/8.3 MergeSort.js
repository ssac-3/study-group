/*
병합정렬(Merge Sort)을 만들어보자!
병합정렬은 기본적으로 문제를 작게 만들어 해결하고 해결된 결과를 다음 하위 문제로 전달 후 전체 문제를 해결하려고 시도하는 것이다.
*/

const merge = (left, right) => {
  const leftLength = left.length;  //3
  const rightLength = right.length; //2
  console.log(`들어온값 left:${left}, right:${right}`);
  let result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (result.length < leftLength + rightLength) {
    // 모든 arr의 합만큼 돌리면 정지

    if (left[leftIdx] <= right[rightIdx]) {
      //왼쪽배열이 오른쪽배열보다 작거나 같으면 result에 넣고 인덱스올리기
      result.push(left[leftIdx]);
      ++leftIdx;
    } else {
      //오른쪽배열이 왼쪽배열보다 작거나 같으면 result에 넣고 인덱스올리기
      result.push(right[rightIdx]);
      ++rightIdx;
    }

    if (rightIdx === rightLength) {
      // 오른쪽인덱스가 마지막 숫자라면
      console.log("right가 먼저끝남");
      result = [...result, ...left.slice(leftIdx)]; // 넣어버리기
      break;
    }

    if (leftIdx === leftLength) {
      // 왼쪽인덱스가 마지막 숫자라면
      console.log("left가 먼저끝남");
      result = [...result, ...right.slice(rightIdx)]; // 넣어버리기
      break;
    }
  }
  console.log(`나가는값 result:${result}`);
  console.log(`======================================`);
  return result;
};

const mergeSort = (arr) => {
  const arrLength = arr.length;

  if (arrLength < 2) return arr;

  const middleIdx = Math.floor(arrLength / 2);
  const left = mergeSort(arr.slice(0, middleIdx));
  const right = mergeSort(arr.slice(middleIdx));

  console.log(left, right);

  return merge(left, right);
};

console.log(mergeSort([8, 2, 6, 4, 5]));
