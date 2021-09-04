// 정렬된 배열과 target값이 주어짐
// target 값이 주어진 배열안에 있으면 해당 index를 반환
// target 값이 배열안에 없으면 정렬된 배열 속 target 값이 들어갈 인덱스 반환

// test 1
// const arr = [1, 2, 3, 4, 5];
// const target = 3;

// test 2
const arr = [1, 3, 5, 7, 9];
const target = 6;

let answer = 0;


const solution = function(arr, target) {

    const start_time = new Date();

    if (arr.includes(target)){
        answer = arr.indexOf(target)
    } else if (target < arr[0]) {
        answer = 0;
    } else if (target > arr[arr.length-1]) {
        answer = arr.length;
    } else {
        for (let i = 0; i < arr.length; i++){
            if (target < arr[i]){      
                answer = i;
                break;}}
    } 
    
    const end_time = new Date();
    console.log("running time : ",end_time - start_time); 

    console.log("answer는 ",answer);
    return answer;

};


solution(arr, target);