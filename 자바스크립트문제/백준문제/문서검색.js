const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let word=input[0].trim()
    let keyword=input[1].trim()
    let pos=word.indexOf(keyword)
    count=0
    while(1){
        if(word.indexOf(keyword,pos)!==-1){
            count++
            if(word.indexOf(keyword,pos+keyword.length)===-1) break
            pos=word.indexOf(keyword,pos+keyword.length)
        }
        else{
            break
        }
    }
    console.log(count)
}

solution()