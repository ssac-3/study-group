/*
문제: 입력받은 문자열이 유효한 IPv4인지, IPv6인지 확인하는 함수를 작성해보자.
우선 IPv4는 어떤 형태로 구성되는지 알아보자.
IPv4주소는 점으로 분리된 4개의 10진수로 구분되며 각 숫자들은 0에서 255까지의 범위를 갖는다.
예를들면 172.2.10.1 같은 식이다. IPv4 주소에 점으로 구분된 숫자는 0으로 시작할 수 없다
즉 172.2.10.01은 유효하지 않은 주소가 된다.
IPv6 주소는IPv4보다 더 복잡하다.
IPv4에는 점으로 구분되어있는 숫자가 IPv6는 콜론으로 구분되며, 숫자가 10진수가 아니라 16진수로 구성된다.
또한 구분된 16진수 숫자는 4자리이며, 4자리의 숫자 8개 그룹으로 표현된다.
16진수에서 영문 a~f까지는 소문자/ 대문자 혼용이 가능하다(대소문자를 가리지는 않는다). 
IPv4와 다르게 4자리를 채우기 위해 0으로 시작하는 숫자가 있을 수 있으며, 0000일때는 나머지 3개는 생략이 가능하다.
콜론사이에는 숫자가 없어서는 안된다.
*/

const gIPv4 = "255.0.13.20";
const gIPv6 = "2020:0:2311:0gc3:853e:0777:1234:1123";



const result = (target)=>{
    
    const separator = target.includes(".") ? "." : ":";
    const splitedTargetArr = target.split(separator);
    const targetArrLength = splitedTargetArr.length;

    if(separator === "." && targetArrLength === 4){
        console.log(".으로 구분된 if문으로 들어옴")
        
        for(targetNum of splitedTargetArr){
            if(
                (targetNum > 255 || targetNum < 0) ||
                (targetNum[0] === "0" && targetNum.length >1 )
            ) 
            return "Neither";
        }// end of for loop

        return "IPv4"; 
            
    }else if(separator === ":" && targetArrLength === 8){
        console.log(":으로 구분된 if문으로 들어옴")
        
        for(targetNum of splitedTargetArr){
            const lowerNum=targetNum;

            if(
                !parseInt(lowerNum,16) || 
                !(lowerNum.length>0 && lowerNum.length<5)
            ){
                if(lowerNum === "0" || lowerNum === "0000") continue;
                
                console.log(lowerNum);
                return "Neither";
            }

        }// end of for loop

        return "IPv6";
    }

}

console.log(result(gIPv6));