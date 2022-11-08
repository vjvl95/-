let number=[[1,2,3,5],[5,6,7,8],[4,3,2,1]]
function DFS(index,level,sum){
    if(level == 3) {
         let sum;
         if(sum == 0) {
            count++
         }
         return;
      }
    else{
        for(let i=0;i<=2;i++){
            console.log(number[i])
            if(index!==i) DFS(index+1,level+1,sum+number[i])
        }
    }

}
function solution() {

   DFS(0, 0,0);
}

solution()