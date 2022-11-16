const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let num = +input[0];
  let arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a)
    .map((v, i) => (v = v + i + 1));
  console.log(Math.max(...arr) + 1);
}
solution();
