const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let temp={}
    let result=[]
    let numbers1=input[1].split(" ").map((v)=>+v)
    let numbers2=input[3].split(" ").map((v)=>+v)
    numbers1.forEach((v)=>{
        temp[v]=1
    })
    numbers2.forEach((v)=>{
       temp[v]?result.push(1):result.push(0)
    })
    console.log(result.join("\n"))
}

solution()