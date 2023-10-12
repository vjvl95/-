const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = Number(input[0]);
  console.log(Math.floor(Math.sqrt(N)));
}
solution();
