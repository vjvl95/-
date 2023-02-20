const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, K] = input.shift().split(' ').map(Number);
  let res = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    if (K === i + 1) {
      console.log(res[i]);
      break;
    }
  }
}
solution();
