const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=+input[0]
    let numbers=input[1].split(" ").map((v)=>+v)
    let result=[]
    for(i=0;i<num;i++){
        if(result.indexOf(numbers[i])===-1){
            result.push(numbers[i])
        }
    }
    result.sort((a,b)=>a-b)
    console.log(result.join(" "))
}

solution()