const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=+input[0]
    let result=[]
    for(let i=1;i<=num;i++){
        result.push(+input[i])
    }
    result.sort((a,b)=>a-b)
   
    console.log(result.join("\n"))
}

solution()