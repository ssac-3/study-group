// 주어진 정렬된 두 배열 정렬을 유지하면서 병합하기

const arr1 = [1, 2, 3];
const arr2 = [2, 5, 6];

let answer = [];

const solution = function(arr1, arr2) {
    const start_time = new Date();

    answer = arr1.concat(arr2).sort()
    console.log(answer)
    return answer

    const end_time = new Date();
    console.log("running time : ",end_time - start_time); 
};

solution(arr1, arr2)