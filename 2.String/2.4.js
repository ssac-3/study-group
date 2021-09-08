/*
문제: 문자열 리스트가 주어지는데 리스트에 있는 문자열을 검사해 서로 같은 애너그램을 가지는
문자열 그룹으로 묶어보자. 예를 들어 문자열 리스트가 아래와 같이 주어졌다고 가정해보자.
strs = ['eat', 'repaid', 'paired' ,  'tea', 'bat']로 주어졌다면 다음과 같은 에너그램을 모아 2차원 리스트로 반환해야 한다.
res = [
    ['eat,'tea'],
    ['repaid','paired'],
    ['bat'];
]
*/

const gStrs = ['eat', 'repaid', 'paired' ,'tea', 'bat'];

result = (strs) =>{
    let res = [];
    strs.sort();

    for(let i = 0 ; i < strs.length ; i++){
        res.push([strs[i]]);

        for(let j = 0 ; j < strs.length ; j++){
           
            if(i !== j){
                if(strs[i].split("").sort().join("")===strs[j].split("").sort().join("")){
                    res[res.length-1].push(strs[j]);
                    strs.splice(j,1);
                    
                };
            }
        }
        strs.splice(i,1);
        i--;

    }

    //
    // for(let i = 0 ; i < strs.length ; i++){

    //     if(tempObj[strs[i].length]){
    //         tempObj[strs[i].length].push(strs[i])
    //     }else{
    //         tempObj[strs[i].length]= [strs[i]];
    //     }
    // }
    

    // console.log(tempObj);

    return res;
}

console.log(result(gStrs));
