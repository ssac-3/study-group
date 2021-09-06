const readline = require('readline');
/*
[파스칼의 삼각형]
파스칼의 삼각형은 수학의 이항계수를 삼각형의 형태로 숫자를 배열한 구성을 의미한다.
파스칼의 삼각형은 처음 두 줄을 제외하고 새로 만들어지는 줄의 숫자는 윗줄의 왼쪽수와 더해서 만들어진다.
       1
     1   1
   1   2   1
 1   3   3   1

문제: 입력으로 몇 줄을 만들것인지 받아서 파스칼의 삼각형을 이차원 배열의 형태로 구성하라.
ex. target=3 output = [[1],[1,1],[1,3,1]]
*/

const term = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const result = (row)=>{
    const arr=[[1],[1,1]];

    console.log("input row");

    term.on('line',line =>{

        if(line>=3){

            for(let i = 0 ; i < line ; i++){
                let newArr = [];
                for(let j = 0 ; j < line ; j++){

                    if(arr[i-1][j-1] && arr[i-1][j]){
                        newArr.push(arr[i-1][j-1]+arr[i-1][j]);
                        arr.push(newArr);
                    }
                }

            }
        }else{
            if(line == 1){
                arr.pop();
            }
        }
        console.log(arr);
    });

}

result();