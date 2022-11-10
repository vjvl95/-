const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    input.shift()
    let dy=[]
    dy[1]=1
    dy[2]=2
    dy[3]=4
    let numList=input.map((v)=>+v)
    numList.pop()
    for(let i=4;i<=numList[numList.length-1];i++){
        dy[i]=dy[i-3]+dy[i-2]+dy[i-1]
    }
    numList.forEach((v)=>console.log(dy[v]))
}
solution()