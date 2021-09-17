
import {LinkedList}from "./3.4 연결 리스트 뒤집기.js";



// 링크드리스트 값을 string으로 반환
const llToStr = function(ll){

    let str = "";
    let currNode = ll.head;
    while(!(currNode == null)){
        str += currNode.element;
        currNode = currNode.next;
    }

    return str;    
}



// 두 개의 링크드리스트 합산 값 반환
const returnSumValue = function(ll_1, ll_2){

    const value_1 = parseInt(llToStr(ll_1));
    const value_2 = parseInt(llToStr(ll_2));

    return String(value_1 + value_2);
}



// 합산 값 링크드리스트로 변환
const toLinkedList = function(value){

    if (typeof(value) == "number") {
        value = String(value);
    }

    const ll = new LinkedList();

    for(let i of value){
        ll.insert(i);
    }

    return ll

}



// 1. 2개의 linkedList 만들기
// 7 > 2 > 5 > 4
// const ll_1 = toLinkedList(7254);
const ll_1 = toLinkedList(782);
console.log(ll_1)
// 2 > 8 > 3 > 3
// const ll_2 = toLinkedList(2833);
const ll_2 = toLinkedList(21);
console.log(ll_2)

// 2. 2개의 링크드리스트 합산 값 도출
const sumValue = returnSumValue(ll_1, ll_2);

// 3. 합산 값 링크드리스트로 반환
const answer = toLinkedList(sumValue);
console.log(answer);
answer.display();  