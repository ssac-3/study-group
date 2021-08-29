// 정렬된 배열의 요소들을 중복 없이 단 1번씩만 가질 수 있도록 주어진 배열을 그대로(in-place) 수정하고, 수정된 배열의 새로운 길일를 반환하는 프로그램 작성

const arr = [0, 0, 0, 1, 2, 2, 2];
const answer = [];


const solution = function(arr) {
    
    const start_time = new Date();

    // answer을 let이 아닌 const로 명명해야지 아래 실수가 애초에 시행조차 안됨
    // answer = arr[0]; 명명하면 answer이 arr[0]값인 0이 되면서 number로 타입변환 됨
    answer[0] = arr[0]; 

    for (i=1; i < arr.length; i++) {
        if (arr[i-1] != arr[i]){
            answer.push(arr[i]);
            console.log(answer);}
    };
    
    const answerLen = answer.length
    console.log(answerLen);

    const end_time = new Date();
    console.log("running time : ",end_time - start_time); // 5

    return answerLen
};

solution(arr)