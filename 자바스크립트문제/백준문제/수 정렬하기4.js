const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let array = [];
  for (let i = 0; i < N; i++) {
    array.push(+input[i]);
  }
  console.log(array.sort((a, b) => b - a).join('\n'));
}
solution();
