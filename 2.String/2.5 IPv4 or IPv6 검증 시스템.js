// 1. IPv4
//    - 구분자 = .
//    - 4 덩어리
//    - 각 숫자의 범위는 0~255이며, 10진수로 표기
//    - 0을 제외하고 0으로 시작하는 숫자는 없다.   
// 2. IPv6
//    - 구분자 = :
//    - 8 덩어리
//    - 각 숫자의 범위는 0000 ~ FFFF 까지이며, 16진수로 표기
//    - 16진수 알파벳의 대소문자는 구분하지 않음
//    - 각 숫자는 0으로 시작 가능
//    - 0000의 경우 0으로 표기 가능  
//    - 콜론 사이에 숫자가 존재하지 않으면 유효한 IPv6 주소가 아님  
//    - 각 숫자는 4자리를 넘어설 수 없음  

// test case
// const IP = "255.255.255.255";
const IP = "2001:0db8:85a3:0:0:8A2E:0370:7334";
// const IP = "256.256.256.256";
// const IP = "123.123.123.123";
// const IP = "0.0.0.0";
// const IP = "20AB:Fb8.85a3:0:8A2E:0370:7334";


const isValidAddress = function(IP){

    const IPv4_pattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const IPv6_pattern = /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})$/i;


    if (IPv4_pattern.test(IP)) {
        return "IPv4"
    } else if (IPv6_pattern.test(IP)) {
        return "IPv6"
    } else {
        return "Neither"
    }

};


const start_time = new Date();
const ANSWER = isValidAddress(IP);
console.log(ANSWER);
const end_time = new Date();
console.log("running time : ",end_time - start_time); 
