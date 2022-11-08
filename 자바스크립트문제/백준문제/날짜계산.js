const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let count=1
    input=input[0].split(" ")
    console.log(input)
    while(1){
        if((count-+input[0])%15===0 && (count-+input[1])%28===0 && (count-+input[2])%19===0){
            console.log(count)
            break
        } 
        count++
    }
}

solution()