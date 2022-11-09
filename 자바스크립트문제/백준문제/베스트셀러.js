const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let num=+input[0]
    input=input.splice(1)
    let max=-1;
    let maxProduct;
    if(num===1){
        maxProduct=input[0]
    }
    else{
        dict1={}
        input.sort().forEach((v)=>{
            dict1[v]?dict1[v]+=1:dict1[v]=1
        })
    
        for(let i=1;i<num;i++){
            if(dict1[input[i]]>max){
                max=dict1[input[i]]
                maxProduct=input[i]
            }
        }
    }
    console.log(maxProduct)
    


}
solution()