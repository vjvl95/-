const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
    let [_,passwordCount]=input[0].split(" ").map((v)=>+v)
    dict1={}

    input.forEach((v,i)=>{
        if(i!==0){
            let[address,password]=v.split(" ")
            if(password!==undefined) dict1[address]=password
        }
    })
    input.splice(input.length-passwordCount,passwordCount).forEach((v)=>console.log(dict1[v.trim()]))
 

}

solution()