// 추가 배열 할당 없이 정합하기

const arr1 = [1, 3, 5, 7];
const arr2 = [0, 0, 8];


const solution = function(arr1, arr2) {
    const start_time = new Date();

    for (i in arr1){
        if (arr1[i] > arr2[0]) {
            arr1.splice(i, 0, arr2[0]) // 삽입
            arr2.splice(0, 1) // 삭제
        }
    }

    if (arr2.length) {
        arr1.push(arr2[0])
    }

    const end_time = new Date();
    console.log("running time : ",end_time - start_time); 

    console.log(arr1)
    return arr1
};

solution(arr1, arr2)