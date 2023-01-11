const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let stack = [];
  let num = input[0];
  while (num.length >= 3) {
    stack.push(parseInt(num.slice(num.length - 3), 2).toString(8));
    num = num.slice(0, num.length - 3);
  }
  if (num.length) stack.push(parseInt(num, 2).toString(8));
  console.log(stack.reverse().join(''));
}

solution();
