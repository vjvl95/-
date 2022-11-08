const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


function isPrime(n){
    let count=2
    if(n===1) return false
    while(count<n){
        if(n%count===0) return false
        count++
    }
    return true
}

function solution(){
    input=input.map((v)=>+v)
    let result=[]

    for(let i=input[0];i<=input[1];i++){
        if(isPrime(i)) result.push(i)
    }
    if(result.length===0) {
        console.log(-1)}
    else{
            let sum=result.reduce((a,b)=>a+b)
            console.log(sum)
            console.log(result[0])
        }


}

solution()