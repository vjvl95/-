const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


function solution(){
    dict={}
    result=-100
    input=input[0].split("").map((v)=>+v)
    input.forEach((v)=>{
           v===9?(dict[6]?dict[6]+=1:dict[6]=1):(dict[v]?dict[v]+=1:dict[v]=1)
    })
    for(let i=0;i<=8;i++){
        if(i===6){ dict[i]=Math.ceil(dict[i]/2)}
        if(dict[i]>result){ result=dict[i] }
    }   
    console.log(result)
}

solution()