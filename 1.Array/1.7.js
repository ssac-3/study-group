/*
문제: 정렬된 배열 nums1과 nums2가 주어지고, 각각의 크기는 m과 n이다.
정렬을 유지하면서 nums1배열부터 채워나가 nums2까지 확장해보자.
추가설명:
- 배열은 m+n의 크기만큼 있지 않다.
- nums1배열에 nums1과 nums2의 모든 요소를 작은수부터 채워나가고 나머지 정렬을 유지하며 넣도록 하자
- 추가 배열 할당 없이 문제를 해결해야 한다.
*/

const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 8];

const result = (arr1, arr2)=>{
    let temp;

    for(let i = 0 ; i < nums1.length ; i++ ){
        let temp = 0;
        
        for(let j = 0 ; j < nums2.length ; j++){
            if(arr2[j] > arr1[i] && arr2[j] < arr1[i]){
                temp = arr1[i+1];
            }        
        }
    }

    
    return {arr1,arr2};
}

console.log(result(nums1,nums2));