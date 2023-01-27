const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let range = 1;
  let i = 1;
  let target = +input.shift();
  while (i < target) {
    i += range * 6;
    range++;
  }
  console.log(range);
}
solution();
