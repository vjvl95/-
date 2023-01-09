const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, M] = input[0].trim().split(' ').map(Number);
  let numArr = input[1].trim().split(' ').map(Number);
  let res = -100;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let tempSum = numArr[i] + numArr[j] + numArr[k];
        if (tempSum > res && tempSum <= M) res = tempSum;
      }
    }
  }
  console.log(res);
}
solution();
