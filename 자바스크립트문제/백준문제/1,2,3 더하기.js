const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  for (let i = 1; i <= N; i++) {
    let dy = Array(+input[i] + 1).fill(0);
    dy[1] = 1;
    dy[2] = 2;
    dy[3] = 4;
    for (let j = 4; j <= dy.length - 1; j++) {
      dy[j] = dy[j - 3] + dy[j - 2] + dy[j - 1];
    }
    console.log(dy[+input[i]]);
  }
}
solution();
