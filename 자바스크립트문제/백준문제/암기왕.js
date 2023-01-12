const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let testcount=+input[0]
    let list1=input[2].split(" ").map((v)=>+v)
    let list2=input[4].split(" ").map((v)=>+v)
    let result=[]
    
    dict1={}
    list1.forEach((v)=>{
        dict1[v]=1
    })
    list2.forEach((v)=>{
        dict1[v]?result.push(1):result.push(0)
    })
    console.log(result.join("\n"))
    
}

solution()