const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const countFibonacci = n => {
    const returnObj = {zeroNum: [1, 0], oneNum: [0,1]    }
   
    if (n < 2) {
      return returnObj  
    }
   
    for (let i = 2; i <= n; i++) {
      returnObj.zeroNum.push(returnObj.zeroNum[i-2]+returnObj.zeroNum[i-1])
      returnObj.oneNum.push(returnObj.oneNum[i-2] + returnObj.oneNum[i-1])
    }
   
    return returnObj
  }

function solution(){
    let num=+input[0]
    let count=1
    while(count<=num){
       let n=+input[count]
       let cache= countFibonacci(n)
       console.log(cache.zeroNum[n],cache.oneNum[n])
       count++
    }
}

solution()