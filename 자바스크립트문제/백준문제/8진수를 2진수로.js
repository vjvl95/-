const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let N = +input.shift();
  console.log(String(BigInt(parseInt(N, 8).toString(2))));
}
solution();
