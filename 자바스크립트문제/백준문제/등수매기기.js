const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let arr = [];
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    arr.push(+input[i]);
  }
  arr.sort((a, b) => a - b);
  for (let i = 1; i < N + 1; i++) {
    cnt += Math.abs(i - arr[i - 1]);
  }
  console.log(cnt);
}
solution();
