const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let nums=input[1].split(" ")
    let result=0
    nums.forEach((v) => {
        v=+v
        let i=2
        let check=0
        while(1){
                if(v===1 || v===2) break
                if(v%i===0) break
                if(v%i!==0) check++
                i++
            }
            if(check===v-2) result++
    })
    console.log(result)
}
solution()