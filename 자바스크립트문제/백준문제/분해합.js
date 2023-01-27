const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let target = +input.shift();
  let tempTarget = 1;
  let sum = 0;
  while (tempTarget <= target) {
    sum += tempTarget;
    sum += tempTarget
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => +a + +b);
    if (sum === target) {
      console.log(tempTarget);
      break;
    }
    tempTarget++;
    sum = 0;
  }
  if (sum !== target) console.log(0);
}
solution();
