const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let stack = [];
  let count = 1;
  for (let i = 1; i <= N; i++) {
    stack.push(+input[i]);
  }
  let num = stack.pop();
  stack = stack.reverse();
  stack.forEach((v) => {
    if (num < v) {
      count += 1;
      num = v;
    }
  });
  console.log(count);
}

solution();
