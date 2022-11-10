const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=+input[0]
    let tempArr=[]
    let count=0
    for(let i=1;i<=num;i++){
        let tempInput=input[i].trim().split("")
        tempInput.forEach((v)=>{
           
            if(v==="A" && tempArr[tempArr.length-1]==="A") tempArr.pop()
            else if(v==="B" && tempArr[tempArr.length-1]==="B") tempArr.pop()
            else if(v==="A" || v==="B") tempArr.push(v)
        })
        if(tempArr.length===0) count++
        tempArr=[]
    }
    console.log(count)    
}

solution()