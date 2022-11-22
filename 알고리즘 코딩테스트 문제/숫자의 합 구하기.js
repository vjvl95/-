const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let number = input[1]
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);
  console.log(number);
}

solution();
