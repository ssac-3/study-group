/*
문제: 문자열이 주어지면 해당 문자열이 회문인지 아닌지 확인하자.
문자열에서 회문으로 확인해야 하는 문자는 알파벳과 숫자이며, 알파벳은 대/소문자를 구분하지 않는다.
ex. 입력으로 'Abbc.bb.a'문자열이 주어진다면 true를 반환해야 한다.
알파벳과 숫자만 남기면 'Abbccbba'가 되며 대소문자를 구분하지 않기 때문에 'abbccbba'가 된다.
* 회문은 앞으로 읽나 거꾸로읽나 똑같이 읽히는 문장을 의미한다.
*/


const QUESTION_STR = 'Abbc.bb.a';


const result = (str) =>{
    
    str = str.toLowerCase();
    
    const filtedStr = str.split("")
        .filter(substr =>  
                    (substr >= "a" && substr <= "z" )|| 
                    (substr >= 0 && substr <= 9) 
            );

    return filtedStr.join("") === filtedStr.reverse().join("");
}


console.log(result(QUESTION_STR));