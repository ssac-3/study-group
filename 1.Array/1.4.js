/*
문제: 정렬된 배열의 요소들을 중복 없이 1번만 가질수 있도록 주어진 배열을 그대로 수정하고,
수정된 배열의 새로운 길이를 반환하라.
* 추가적인 배열의 할당은 하지 않고, 중복된 요소를 하나만 남기고 걸러내는 함수를 만드는 것이다.
반환된 길이 이후에 있는 데이터는 무시해도 된다.
입력값: nums = [0,0,0,1,2,2,2]
*/

const nums = [0,0,0,1,2,2,2];

const result = (numsArr)=>{

        for(let i = 1 ; i < numsArr.length ; i++){
            
            for(let j = 0 ; j <= i-1 ; j++){

                if(numsArr[j] === numsArr[i]){
                    numsArr.splice(i,1);
                    i--;
                }

            }

        }

    return numsArr.length;
}

console.log(result(nums));


