let ch=[]
let n;
function DFS(v){
    if(v===n+1){
        console.log(ch.map((v,i)=>{
            if(v!==0){
                return i
            }
        }).filter((v)=>v!==undefined).join(" "))
        return
    }
    ch[v]=1
    DFS(v+1)
    ch[v]=0
    DFS(v+1)

    
}
function main(){
    n=4
    ch=Array(n+1).fill(0)
    DFS(1)
}
main()