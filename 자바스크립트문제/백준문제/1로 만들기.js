const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let num = +input[0];
  const dp = Array(num + 1).fill(0);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  console.log(dp[num]);
}
solution();
