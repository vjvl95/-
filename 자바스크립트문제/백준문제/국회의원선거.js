const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let target = +input.shift();
  let other = [];
  let count = 0;
  for (let i = 0; i < N - 1; i++) {
    other.push(+input[i]);
  }
  while (1) {
    if (target > Math.max(...other)) break;
    else {
      target += 1;
      let maxNumber = Math.max(...other);
      other[other.indexOf(maxNumber)] -= 1;
      count++;
    }
  }
  console.log(count);
}
solution();
