const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=input.length
    let tempArr=[]
    let result=[]
    for(let i=0;i<num-2;i++){
        let tempInput=input[i].split("")
        tempInput.forEach((v)=>{
            if(v==="(" || v==="[") tempArr.push(v)
            else if(v===")" && tempArr[tempArr.length-1]==="(") tempArr.pop()
            else if(v==="]" && tempArr[tempArr.length-1]==="[") tempArr.pop()
            else if(v===")" || v==="]") tempArr.push(v)
        })
        tempArr.length===0?result.push("yes"):result.push("no")
        tempArr=[]
    }
    console.log(result.join("\n"))
}

solution()