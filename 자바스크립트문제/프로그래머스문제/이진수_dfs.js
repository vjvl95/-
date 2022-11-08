function DFS(n){
    if(n===0||n===1) return console.log(n)
    DFS(Math.trunc(n/2))
    console.log(n%2)

}

function main(){
    var n=65
    DFS(n)
}
main()