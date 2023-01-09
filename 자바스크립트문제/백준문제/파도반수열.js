const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let dp = Array(100).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < 100; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  let N = +input[0];
  for (let i = 1; i <= N; i++) {
    console.log(dp[+input[i] - 1]);
  }
}
solution();
