const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let N = 0;
  let res = [];

  while (1) {
    let number = input[N];
    if (number === '0') break;
    let tempArr = number.trim().split('').map(Number);
    for (let i = 0; i <= Math.trunc(tempArr.length / 2); i++) {
      if (tempArr[i] !== tempArr[tempArr.length - i - 1]) {
        res.push('no');
        break;
      }
    }
    if (res[N] === undefined) res.push('yes');
    N++;
  }
  console.log(res.join('\n'));
}
solution();
