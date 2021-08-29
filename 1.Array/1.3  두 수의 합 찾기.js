//  주어진 정수형 배열에서 배열에서 2개의 수자를 선택하여 더한 값이 target 값을 만들 때, 그 선택한 2개의 정수가 있는 배열의 인덱스를 반환하는 프로그램 작성
//  단, target 값을 만들 수 있는 조합은 1개만 존재
//  같은 요소를 중복해서 사용할 수는 없음

const arr = [2, 7, 10, 19];
const target = 9;
let answer = [];


const solution = function(arr, target) {

    const start_time = new Date();

    for (i of arr) {
        findNum = target - i;
        if (arr.includes(findNum)){
            answer = [arr.indexOf(i), arr.indexOf(findNum)];
            console.log(answer);
            return answer;
        };
    };

    const end_time = new Date();
    console.log("running time : ",end_time - start_time); // 0.177 seconds

};


solution(arr, target)
// solution([8, 11, 2, 7], 9)

