/*
문제: 주어진 정렬된 두 배열(nums1, nums2)을 정렬을 유지하면서 병합해보자
- nums1과 nums2의 각각의 크기는 m과 n개의 요소로 초기화 되어 있다.
- nums1은 nums1과 nums2를 병합하기에 충분한 크기로 할당되어 있다. (m+n 개)
*/

const nums1 = [1,4,6,11,16,17,29];
const nums2 = [2,3,7,9,10,28];

const result = (arr1, arr2)=>{


    for(let i = 0 ; i < arr1.length; i++ ){

        for(let j = 0 ; j < arr2.length; j++){
            
            if(arr2[j] > arr1[arr1.length-1]){
                arr1.push(arr2[j]);
            }
            
            else if(arr2[j] > arr1[i] && arr2[j]< arr1[i+1]){

                let tempArr = arr1.splice(i+1);
                
                arr1.push(arr2[j])
                arr1=[...arr1, ...tempArr];
            }
        }
    }
    
    return arr1;
}

console.log(result(nums1,nums2));