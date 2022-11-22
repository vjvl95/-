const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [n, m] = input[0].split(' ').map(Number);
  let A = input[1].split(' ').map(Number);
  let S = Array(n).fill(0);
  let C = Array(m).fill(0);
  S[0] = A[0];
  answer = 0;

  for (let i = 1; i < n; i++) {
    S[i] = S[i - 1] + A[i];
  }
  for (let i = 0; i < n; i++) {
    remainder = S[i] % m;
    if (remainder === 0) answer += 1;
    C[remainder] += 1;
  }
  for (let i = 0; i < m; i++) {
    if (C[i] > 1) answer += Math.trunc((C[i] * (C[i] - 1)) / 2);
  }
  console.log(answer);
}
solution();
