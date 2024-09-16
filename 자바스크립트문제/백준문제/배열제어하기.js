const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const array = input[0].split(' ').map(Number);
  const result = [...new Set(array)].sort((a, b) => b - a);
  console.log(result);
}

solution();
