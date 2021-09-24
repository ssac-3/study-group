// 입력된 문자열을 조합하여 만들 수 있는 모든 경우의 수를 담은 배열 반환

// test case
const INPUT = "abc"


const makePermutation = function(input) {


    if (input.length == 1) return input.split("")
    
    let ans = [];
    let curr = input[0]
    input = input.substring(1, input.length)

    words = makePermutation(input)
    console.log(words)

    for (sub of words) {
        // console.log(sub.length)

        for (let i=0; i<=sub.length; i++) {
            console.log(i)

        }

    }



return ans

}





const ANSWER = makePermutation(INPUT);
// console.log(ANSWER);


