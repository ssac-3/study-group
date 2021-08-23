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

// 리스트의 요소 접근

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
