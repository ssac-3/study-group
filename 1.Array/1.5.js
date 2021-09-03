/*
문제: 정렬된 배열과 목푯값(target)이 주어진다. 목표값을 찾는다면 배열의 해당 인덱스를 반환하고,
찾지 못한다면 정렬된 배열이 되도록 목표값이 배열에 들어가야 하는 인덱스를 구해라.
입력값: nums=[1,2,3,4,5], target=3
출력값: 2
*/

const NUMS=[1,2,3,4,5]
const TARGET=3;

const result = (numArr,targetNum)=>{
    const idx = numArr.indexOf(targetNum);
    let bottom = 0;
    let top = numArr.length-1
    let middle = Math.floor(top/2);

    if(idx !== -1) return idx;    
    
    while(top !== middle){

        if (top === middle || bottom === middle) return middle+1;
            
        else if(targetNum > numArr[middle]) bottom = middle;
            
        else if(targetNum < numArr[middle]) top = middle;
            
        middle = Math.floor((top+bottom)/2);

    }

    return middle+1;

}

console.log(result(NUMS,TARGET));

