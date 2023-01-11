const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let dp = Array.from({ length: 16 }, () => Array(16).fill(0));
  let num = [];
  for (let i = 1; i <= +input[0] * 2; i++) {
    num.push(+input[i]);
  }
  for (let k = 0; k < +input[0]; k++) {
    for (let i = 0; i <= 15; i++) {
      dp[1][i] = i;
      dp[i][1] = 1;
    }

    for (let i = 2; i <= 15; i++) {
      for (let j = 2; j <= 15; j++) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
    console.log(dp[num[k * 2] + 1][num[k * 2 + 1]]);
  }
}
solution();
