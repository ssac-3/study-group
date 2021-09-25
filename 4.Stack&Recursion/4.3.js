'use strict'


/*
문제: 주어진 문자열은 3쌍의 괄호로 이루어져있다.
 모든괄호가 올바르게 닫혔는지 확인하는 함수를 스택을 이용해서 구현해라.
*/

const solution = (strings)=>{

    const stack = [];
    const map = {
        '}':'{',
        ']':'[',
        ')':'('
    }

    for(let string of strings){
        if(string === '(' || string === '[' || string === '{'){
            stack.push(string);
        }
        else{
            if(map[string] === stack[stack.length-1])
                stack.pop();
            else
                return false;
        }
    } // end of for loop

    return stack.length? false : true ;
}


console.log(solution('))]'));