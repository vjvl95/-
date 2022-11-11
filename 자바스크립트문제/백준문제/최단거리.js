const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(){
    let arr=[]
    let dy=[]
    console.log(input)
    
    for(let i=1;i<=+input[0];i++){
        arr.push(input[i].split(" ").map((v)=>+v))
        dy.push(Array(+input[0]).fill(0))
    }
    console.log(arr)
    console.log(dy)

    dy[0][0]=arr[0][0]
    for(let i=1;i<+input[0];i++){
        dy[0][i]=dy[0][i-1]+arr[0][i]
        dy[i][0]=dy[i-1][0]+arr[i][0]
    }
    console.log(dy)
    for(let i=1;i<+input[0];i++){
        for(let j=1;j<+input[0];j++){
            dy[i][j]=Math.min(dy[i-1][j],dy[i][j-1])+arr[i][j]
        }
    }
    console.log(dy[+input[0]-1][+input[0]-1])
}

solution()