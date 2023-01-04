const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let res = input[0]
    .split(' ')
    .map((v) => Number(v.trim().split('').reverse().join('')))
    .reduce((a, b) => a + b);
  console.log(Number(String(res).split('').reverse().join('')));
}
solution();
