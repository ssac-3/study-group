// (){}[] >> 세 가지 종류의 괄호가 열고 닫히는 쌍이 서로 맞는지 확인하는 로직 구성

// test case
// const PARENTHESES = '({[]})';
// const PARENTHESES = '(';
// const PARENTHESES = '([)';
const PARENTHESES = '((){})';



const isValidParentheses = function(PARENTHESES) {

    const parenthesesLen = PARENTHESES.length;
    const parenthesesMap = {'(': ')',
                            '{': '}',
                            '[': ']'};
    
    // check 1. 검증하는 값의 길이가 짝수로 이루어져 있는가?
    if (parenthesesLen%2 === 1) return false;
        
    const open = PARENTHESES.substring(0,parenthesesLen/2).split("");
    
    const close = [];
    for (let position = parenthesesLen; position > parenthesesLen/2; position--) {
        close.push(PARENTHESES.charAt(position-1))
    }
    
    // check 2. 순서에 따라 여닫히는 쌍이 서로 맞는가?
    for (let i = 0; i < parenthesesLen/2; i++) { 

        if (parenthesesMap[open.pop()] != close.pop()) {return false;}}

    return true;
        
}



const ANSWER = isValidParentheses(PARENTHESES);
console.log(ANSWER);