// 입력값을 거꾸로 읽었을 때, 동일한지 여부에 따라 true, false 반환
// 알파벳, 숫자를 제외한 모든 문자와 공백은 제거
// 알파벳은 대소문작 구분 X

// test case
// const INPUT = "   Abbc, c, bb, a    ";
// const INPUT = ["ab", "cd", "ef"];
// const INPUT = ["abc", "bca", "cba"];
const INPUT = ["11/22", "aBb-A", "--,","22_11"]


const solution = function(input) {

    //  string이 아닌 type은 string으로 형 변환
    if (typeof(input) != "string") {input = input.toString()};
    
    // 알파벳과 숫자를 제외한 모든 문자 제거 후, 소문자 변환
    const filteredString = input.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    console.log("필터링 된 문자 : ", filteredString)
    console.log(filteredString.length-1)
    
    //정제된 문자 reverse 
    let filteredStringReverse = ""
    for (let i = filteredString.length-1; i>=0; i--) {
        filteredStringReverse += filteredString.charAt(i);
    }
    console.log("뒤집은 문자 : ", filteredStringReverse)

    // 회문인지 확인하여 반환
    return filteredString === filteredStringReverse

};



const start_time = new Date();
const ANSWER = solution(INPUT);
console.log(ANSWER)
const end_time = new Date();
console.log("running time : ",end_time - start_time); 