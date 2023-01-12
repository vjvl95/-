const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let dp = Array(+input[0] + 2).fill(0);
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i < dp.length; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1] * 2) % 9901;
  }
  console.log(dp[+input[0] + 1]);
}
solution();
