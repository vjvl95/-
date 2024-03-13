const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const number = Number(input[0]);
  for (let i = number - 1; i >= 0; i--) {
    console.log('*'.repeat(number - i).padStart(number));
  }
}

solution();
