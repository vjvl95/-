let limit=259
let n;
let total;
list=[81,58,42,33,61]
function DFS(L,sum){
    if (sum>limit) return
    if(L===n){
        if(sum>total){
            total=sum
        }
    }
    else{
        DFS(L+1,sum+list[L])
        DFS(L+1,sum)
    }
}
function main(){
total=-1
DFS(0,0)
console.log(total)
}
main()