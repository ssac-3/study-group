/*
퀵정렬을 구현해보자!
퀵정렬은 병합정렬과 비슷한 분할정복방식을 이용한 방식이다.
다른점은 입력 리스트를 두 리스트로 나눌 때 한쪽은 특정 값보다 작은값만 모으고 다른쪽에는 큰 값만 모은다.
이를 재귀적으로 완전정렬이 될 때까지 진행한다.
특정 값을 퀵정렬에서 '피벗'이라고 부르고, 피벗을 결정하는 방식에 따라 성능차이가 발생한다.
*/
//1. 피벗설정
//2. 피벗을 기준으로 좌우배치
//3. 좌우배치한개 한개면 반환(arr의 length가 2이하일때 반환)
//4. 순서대로 병합

const quickSort = (originalArr) => {
  const arr = [...originalArr];

  if (arr.length < 2) return arr;

  const pivotIdx = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIdx];

  const low = [];
  const same = [];
  const high = [];

  for (let num of arr) {
    if (num < pivot) low.push(num);
    else if (num === pivot) same.push(num);
    else if (num > pivot) high.push(num);
  }

  return [...quickSort(low), ...same, ...quickSort(high)];
};

console.log(quickSort([8, 2, 6, 4, 5]));
