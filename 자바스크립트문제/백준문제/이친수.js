const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = +input[0];

function solution() {
  const d = new Array(N + 1).fill(BigInt(0));
  d[1] = BigInt(1);
  for (let i = 2; i <= N; i++) d[i] = d[i - 1] + d[i - 2];
  console.log(d[N].toString());
}

solution();
