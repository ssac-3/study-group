/*
문제: 주어진 정수형 배열에서 2개의 숫자를 선택해 더한 값이 특정 목푯값(Target)을 만들 때,
그 선택한 2개의 정수가 있는 배열의 인덱스를 반환하는 프로그램을 작성하라.
입력값으로 주어지는 배열에는 정확히 하나의 정답이 존재하며, 같은 요소의 값을 중복해서 사용할 수 없다.

입력값: nums = [2,7,10,19] , targer = 9
출력값: [0,1]
*/

const nums  = [2,7,10,19] 
const target = 9;

function calculate(numArr,targetNum){
    for(let i = 0 ; i < numArr.length-1 ; i++){ //처음부터 마지막 전자리인덱스까지 탐색

        for(let j = i+1 ; j < nums.length ; j++){ //현재 인덱스와 현재+1부터 마지막 인덱스까지 탐색(그 전 인덱스의 탐색은 이미 이전 loop에서 끝)
            if(numArr[i]+numArr[j]===targetNum) return [i,j];
        }
    }
}


function twoSum(arr,tg){ // hash table 생성
    hash_table={};

    for(let i = 0 ; i < arr.length ; i++){
        value = tg-arr[i];

        //테이블이 계산된 키 값을 가지고 있고, 그게 지금이 아니면 반환
        if ( Object.keys(hash_table).includes(""+value) && hash_table[value] !== i){ 
            
            return [i,hash_table[value]].sort();
        }
        
        hash_table[arr[i]]=i;
        console.log(hash_table);
    }
    return [-1,-1]
}

console.log(twoSum(nums,target));
// console.log(calculate(nums ,target));