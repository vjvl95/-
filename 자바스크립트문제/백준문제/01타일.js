const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let dy = Array(+input[0] + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  dy[3] = 3;

  for (let i = 4; i <= +input[0]; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % 15746;
  }
  console.log(dy[+input[0]]);
}
solution();
