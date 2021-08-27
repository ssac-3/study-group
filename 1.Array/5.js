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
