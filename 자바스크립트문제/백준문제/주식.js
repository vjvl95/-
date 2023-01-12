const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = input.shift();
  let res = 0;
  let max = 0;
  for (let i = 0; i < N; i++) {
    let numLength = +input.shift();
    let num = input.shift().split(' ').map(Number);
    while (num.length) {
      let tempNum = num.pop();
      if (tempNum > max) {
        max = tempNum;
      } else {
        res += max - tempNum;
      }
    }
    console.log(res);
    res = 0;
    max = 0;
  }
}

solution();
