const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let a = input[0].trim().split('');
  let b = input[1].trim().split('');
  let res = 1;

  while (1) {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          res = 0;
          break;
        }
      }
      break;
    }
    if (b[b.length - 1] === 'A') b.pop();
    else {
      b.pop();
      b.reverse();
    }
  }
  console.log(res);
}
solution();
