const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let numberArr = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let targetIndex = 0;
  if (N % 2 === 0) {
    targetIndex = N / 2 - 1;
  } else {
    targetIndex = Math.trunc(N / 2);
  }
  let sum1 = 0;
  numberArr.forEach((v) => {
    sum1 += Math.abs(numberArr[targetIndex] - v);
  });
  console.log(numberArr[targetIndex]);
}
solution();
