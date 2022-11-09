const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=+input[0]
    let tempArr=Array(num).fill(0).map((v,i)=>v=num-i)
    while(tempArr.length!==1){
        tempArr.pop()
        let tempNum=tempArr.pop()
        tempArr=[tempNum,...tempArr]
    }
    console.log(tempArr[0])
}

solution()