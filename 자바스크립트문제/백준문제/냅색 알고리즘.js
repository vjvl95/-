const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let [num,maxarr]=input[0].split(" ").map((v)=>+v)
    input.shift()
    dy=Array(maxarr+1).fill(0)
    for(let i=0;i<num;i++)
    {
        let [w,v]=input[i].split(" ").map((v)=>+v)
        for(let j=w;j<=maxarr;j++){
            dy[j]=Math.max(dy[j],dy[j-w]+v)
        }
    }
    console.log(dy[maxarr])
}

solution()