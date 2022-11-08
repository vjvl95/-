let res =Array(3).fill(0);
let numArr;
let N;
let count=0;

function DFS(index,level){
    if(level == 3) {
         let sum;
         sum=res.reduce((a,b)=>a+b)
         if(sum == 0) {
            count++
         }
         return;
      }
      
      for(let i=index; i<N; i++) {
         res[level] = numArr[i];
         DFS(i+1, level + 1);
      }
}
function solution(number) {
   N = number.length;
   numArr = number;
   DFS(0, 0);
   return count;
}