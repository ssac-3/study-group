// 파스칼의 삼각형

let arr = new Array(5);
for (let i = 0; i < 5; i++) {
    arr[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
    arr[i][j] = j
    }
}
console.log(arr)


// let value="";
// for (let i = 0; i < 5; i++) {
//     for(let j = 0; j <= i; j++){
//         value += 1;
//     }
//     value+="\n";
// }
// console.log(value)
