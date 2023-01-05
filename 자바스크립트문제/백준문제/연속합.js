const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let num = input[1].split(' ').map(Number);

  for (let i = 1; i < N; i++) {
    if (num[i - 1] > 0 && num[i] + num[i - 1] > 0) {
      num[i] += num[i - 1];
    }
  }

  console.log(Math.max(...num));
}
solution();
