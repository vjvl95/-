const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = Number(input.shift());
  let numArr = input.shift().split(' ').map(Number);
  let start = 0;
  let end = numArr.length - 1;
  let min = Infinity;
  let res = [];
  while (start < end) {
    tempSum = numArr[start] + numArr[end];
    if (Math.abs(tempSum) <= Math.abs(min)) {
      min = tempSum;
      res.push([numArr[start], numArr[end]]);
    }
    if (tempSum > 0) {
      end--;
    } else if (tempSum <= 0) {
      start++;
    }
  }
  console.log(res[res.length - 1][0], res[res.length - 1][1]);
}
solution();
