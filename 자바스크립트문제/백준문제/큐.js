const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result=[]
function solution(){
    let num=+input[0]
    for(let i=1;i<=num;i++){
        input[i].split(" ").length===1?console.log(length_1(input[i])):console.log(length_2(input[i]))
}
function length_1(input){
    if(input==="size") return result.length
    if(input==="empty") return result.length===0?1:0
    if(input==="front") return result.length===0?-1:result[0]
    if(input==="back")  return result.length===0?-1:result[result.length-1]
    if(input==="pop")   return result.length===0?-1:result.pop()
}
function length_2(input){
    input=input.split(" ")
    if(input[0]==="push"){
        result.push(+input[1])
        return +input[1]
    }
}
}

solution()