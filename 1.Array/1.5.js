/*
문제: 정렬된 배열과 목푯값(target)이 주어진다. 목표값을 찾는다면 배열의 해당 인덱스를 반환하고,
찾지 못한다면 정렬된 배열이 되도록 목표값이 배열에 들어가야 하는 인덱스를 구해라.
입력값: nums=[1,2,3,4,5], target=3
출력값: 2
*/

const nums=[1,4,5,6]
const target=3

const result = (n,t)=>{
    
    let top = n.length-1;
    let bottom = 0;

    while(bottom <= top){

        let middle = Math.floor((top+bottom)/2);
        console.log("----",middle);
        if (t === n[middle]){
            return middle;
        }else if(t > n[middle]){
            bottom = middle + 1
        }else{
            top = middle - 1;
        }
    }
    return bottom
}

console.log(result(nums,target));

