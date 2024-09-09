const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let total = 0;
  let num = [];
  let isEnd = false;
  for (let i = 0; i < 9; i++) {
    num.push(+input[i]);
    total += +input[i];
  }
  num.sort((a, b) => a - b);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (total - (num[i] + num[j]) === 100) {
        num.forEach((v) => {
          if (v !== num[i] && v !== num[j]) {
            console.log(v);
          }
        });
        isEnd = true;
      }
      if (isEnd) break;
    }
    if (isEnd) break;
  }
}
solution();
