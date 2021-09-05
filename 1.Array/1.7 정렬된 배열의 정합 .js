// 추가 배열 할당 없이 정합하기

const arr1 = [1, 3, 5, 7];
const arr2 = [0, 0, 8];


const solution = function(arr1, arr2) {
    const start_time = new Date();

    for (i in arr1){
        if (arr1[i] > arr2[0]) {
            arr1.splice(i, 0, arr2[0]) // 삽입
            arr2.splice(0, 1) // 삭제
            // console.log("arr1 = ", arr1)
            // console.log("arr1=2 = ", arr2)
        }
    }

    if (arr2.length) {
        arr1.push(arr2[0]) //TODO : 남은 원소개수가 2개 이상일 때 경우의 수 추가
    }

    const end_time = new Date();
    console.log("running time : ",end_time - start_time); 

    console.log(arr1)
    return arr1
};

solution(arr1, arr2)