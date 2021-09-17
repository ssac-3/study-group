/*
문제 : 정렬된 배열 nums1과 nums2가 주어지고, 각각의 크기는 m과 n이다.
정렬을 유지하면서 nums1배열부터 채워나가 nums2까지 확장해보자

- 병합된 m+n크기만큼의 공간은 있지 않다.
- nums1 배열에서 nums1과 nums2의 모든 요소를 작은 수부터 채워나가고 nums2에는 나머지 정렬을
유지하며 넣도록 하자.
- 추가 배열 할당 없이 문제를 해결해야 한다.
*/
const nums1 = [1,3,5,7];
const nums2 = [2,4,8];

const result = (arr1,arr2)=>{
    let temp;

    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j++){

            if(arr2[j] < arr1[i]){
                
                [arr1[i],arr2[j]] = [arr2[j], arr1[i]];
            }
        }
    }

    console.log(`${arr1}  ${arr2.sort()}`);
}

result(nums1, nums2);
