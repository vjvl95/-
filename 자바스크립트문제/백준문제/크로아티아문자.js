const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    console.log(input[0].replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);
}

solution()