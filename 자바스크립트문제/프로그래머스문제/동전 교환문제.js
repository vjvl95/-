const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let total=+input[0]
let n=+input[1]
let coinList=[]
let coinCount=[]
let count=0

function DFS(L,sum){
    if(sum>total) return
    if(L===n){
        if(sum===total) {
            count++
        }
    }
    else{
        for(let i=0;i<=coinCount[L];i++){
            DFS(L+1,sum+(coinList[L]*i))
        }
    }
}
function main(){
    for(let i=2;i<(+n)+2;i++)
    {
        temp=input[i].split(" ")
        coinList.push(+temp[0])
        coinCount.push(+temp[1])
    }
    DFS(0,0)
    console.log(count)
}
main()
