// anagram :  단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이
// 소문자 형태의 문자열이 담긴 리스트를 받아, 애너그램이 형성되는 단어끼리 이중 배열로 묶어 반환하는 로직 구성

// test case
const INPUT = ['eat', 'repaid', 'paired', 'tea', 'bat'];
// const INPUT = ['ab', 'cd', 'ef'];
// const INPUT = ['abc', 'bca', 'cba'];

let answer = [];



const makeDictionary = function(input) {

    let inputToDictionary = [];
    let sortedLetterList = [];

    for (let word of input) {

        let sortedLetter = sortLetter(word)

        inputToDictionary[word] = sortedLetter;
        sortedLetterList.push(sortedLetter)

    };

    const valuesFromDictionaryToSet = new Set(sortedLetterList)

    return findKeysWithSameValue(inputToDictionary, valuesFromDictionaryToSet);
};



const sortLetter = function(word) {

    let letter = [];
    for (let w of word) {letter.push(w);};
    let sortedLetter = letter.sort().join("")
    
    return sortedLetter;
};



const findKeysWithSameValue = function(inputToDictionary, valuesFromDictionaryToSet){

    for (let value of valuesFromDictionaryToSet) { 

        let keysWithSameValue = []

        for (let key of Object.keys(inputToDictionary)) {if (value === inputToDictionary[key]) {keysWithSameValue.push(key);}};

        answer.push(keysWithSameValue)

    };

    return answer;
};





const start_time = new Date();
const ANSWER = makeDictionary(INPUT);
console.log(ANSWER);
const end_time = new Date();
console.log("running time : ",end_time - start_time); 