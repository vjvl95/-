const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let wordCount = Array(26).fill(0);
  let res = Array(N).fill(0);
  for (let i = 1; i <= N; i++) {
    input[i]
      .trim()
      .split('')
      .forEach((v) => {
        wordCount[v.charCodeAt() - 65]++;
      });
    wordCount.forEach((v, j) => {
      if (v === 0) res[i - 1] += j + 65;
    });
    wordCount = Array(26).fill(0);
  }
  console.log(res.join('\n'));
}
solution();
