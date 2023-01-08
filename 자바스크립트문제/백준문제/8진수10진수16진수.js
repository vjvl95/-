const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let num = input[0];
  if (num[0] !== '0') {
    console.log(num);
  } else {
    if (num[1] === 'x') {
      console.log(parseInt(num.slice(2), 16));
    } else {
      console.log(parseInt(num.slice(1), 8));
    }
  }
}
solution();
