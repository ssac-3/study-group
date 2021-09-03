# 1. 배열(Array)

## 목차

[1. 배열의 이해](#1)

[2. 파이썬에서 배열 사용법](#2)

[3. 두 수의 합 찾기](#3)

[4. 정렬된 배열에서 중복 제거](#4)

[5. 배열에서 삽입 위치 찾기](#5)

[6. 정렬된 배열의 병합1](#6)

[7. 정렬된 배열의 병합2](#7)

[8. 파스칼의 삼각형](#8)

[9. 배열에서 다수의 요소 찾기](#9)

[10. 배열의 회전](#10)

[11. 빠진 숫자 찾기](#11)

[12. 더 나아가기위한 준비](#12)

[13. 부분 집합](#13)

[14. 단어 찾기](#14)

---

## 1. 배열의 이해<a id="1"></a>

```
배열이란 연속적인 메모리 공간에 저장된 아이템의 집합을 표현하는 자료구조
```

---

## 2. 파이썬에서 배열 사용법<a id="2"></a>

```
리스트 초기화

// 비어 있는 리스트 선언
const js_list_empty = [];
console.log(js_list_empty);

// 1, 2, 3, 4, 5의 요소를 가지는 리스트 선언
let js_list = [1, 2, 3, 4, 5];
console.log(js_list);

// 0을 10개 가지는 리스트 초기화
const js_list_zeros_1 = [];
for (let i = 0; i < 10; i += 1) {
  js_list_zeros_1.push(0);
}
console.log(js_list_zeros_1);

// 리스트 요소 추가 및 삭제
// js_list를 1, 2, 3, 4, 5로 초기화하고 6 요소를 추가
js_list = [1, 2, 3, 4, 5];
js_list.push(6);
console.log(js_list);

// js_list_1에 js_list_2의 [4,5,6]을 추가한다.
let js_list_1 = [1, 2, 3];
let js_list_2 = [4, 5, 6];
js_list_1.push(js_list_2);
console.log(js_list_1);

//js_list_1에 js_list_2의 [4,5,6]을 확장한다.
js_list_1 = [1, 2, 3];
js_list_2 = [4, 5, 6];

// js_list_1 = [...js_list_1, ...js_list_2];
js_list_1.push(...js_list_2);
console.log(js_list_1);

// js_list의 3번째 위치에 4 요소를 추가한다.
js_list = [1, 2, 3];
js_list.splice(3, 0, 4);
console.log(js_list);

//js_list에 2의 요소를 삭제한다.
// list에는 중복된 값이 있을 수 있고, 여러 값들 중에 가장 앞선 인덱스의 요소가 삭제된다.
js_list = [1, 2, 3, 2, 4];
let idx = js_list.indexOf(2);
js_list.splice(idx, 1);
console.log(js_list);

// js_list의 모든 요소를 삭제한다.
js_list = [1, 2, 3];
js_list.length = 0;
console.log(js_list);

// js_list의 2번째 있는 요소를 삭제한다.
js_list = [1, 2, 3];
js_list.splice(2, 1);
console.log(js_list);

리스트의 요소 접근

// js_list를 초기화
js_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// js_list의 인덱스 3에서 8까지 자르기
console.log(js_list.slice(3, 8));

// js_list의 인덱스 5에서 시작해서 끝까지 자르기
console.log(js_list.slice(5));

// js_list의 처음 요소부터 -6(4) 인덱스까지 자르기
console.log(js_list.slice(0, -6));

// js_list를 역순으로 가져오기
console.log(js_list.reverse());

```

---

## 3. 두 수의 합 찾기<a id="3"></a>

```
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

console.log(findSumOfTwo([2, 7, 10, 19], 17)); // [1,2]

```

---

## 4. 정렬된 배열에서 중복 제거<a id="4"></a>

```
let a = [0, 0, 0, 1, 2, 2, 2, 3];
function deduplication(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let cnt = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) cnt += 1;
  }
  return cnt;
}
console.log(deduplication(a));

// a = new Set(a);
// a = [...a];

```

---

## 5. 배열에서 삽입 위치 찾기<a id="5"></a>

```
'use strict';

const js_list = [1, 2, 5, 6, 7];
const target = 4;
if (js_list.includes(target)) {
  console.log(js_list.indexOf(target));
} else {
  const len = js_list.length;
  for (let i = 0; i < len; i += 1) {
    if (js_list[i] > target) {
      //i번쨰 인덱스에 target 값 삽입
      // js_list.splice(i, 0, target);
      console.log(i);
      break;
    }
  }
}

```

---

## 6. 정렬된 배열의 병합1<a id="6"></a>

```
'use strict';

const a = [1, 4, 5];
const b = [2, 3, 7];

const c = [...a, ...b].sort();
console.log(c);

```

---

## 7. 정렬된 배열의 병합2<a id="7"></a>

```
'use strict';
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

```

---

## 8. 파스칼의 삼각형<a id="8"></a>

```
안보고 구현하고자 일단 남겨둡니다.
```

---

## 9. 배열에서 다수의 요소 찾기<a id="9"></a>

---

## 10. 배열의 회전<a id="10"></a>

---

## 11. 빠진 숫자 찾기<a id="11"></a>

---

## 12. 더 나아가기위한 준비<a id="12"></a>

---

## 13. 부분 집합<a id="13"></a>

---

## 14. 단어 찾기<a id="14"></a>
