const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = input.shift();
  count = 0;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= 59; j++) {
      for (let k = 0; k <= 59; k++) {
        if ([i, j, k].join('').includes('3')) count += 1;
      }
    }
  }
  console.log(count);
}
solution();
