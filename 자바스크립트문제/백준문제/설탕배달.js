const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let kg=+input[0]
    let count=0
    while(kg>0){
        if(kg%5===0){
            kg-=5
        }
        else{
            kg-=3
        }
      count++
    }
    kg===0?console.log(count):console.log(-1)
}

solution()