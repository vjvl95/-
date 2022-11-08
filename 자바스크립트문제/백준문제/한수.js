const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    input=+input[0]
    count=0
    for(i=1;i<=input;i++){
        if(i<100){
            count++
            continue
        }
        let temp=String(i).split("")
        diff1=+temp[2] - +temp[1]
        diff2=+temp[1] - +temp[0]
        if(diff1===diff2) count++
    }
    console.log(count)
}

solution()