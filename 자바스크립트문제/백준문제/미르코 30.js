const fs = require("fs");
const { exit } = require("process");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=String(input[0]).split("").map((v)=>+v)
    if(num.indexOf(0)===-1 || num.reduce((a,b)=>a+b)%3!==0) console.log(-1)
    else{
        console.log(num.sort((a,b)=>b-a).join(""))
    }
    
}

solution()