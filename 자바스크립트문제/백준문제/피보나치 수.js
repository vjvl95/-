const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const array = Array(91).fill(0);
  array[1] = 1;
  array[0] = 0;
  for (let i = 2; i <= 91; i++) {
    array[i] = BigInt(array[i - 1]) + BigInt(array[i - 2]);
  }
  console.log(String(array[input]));
}

solution();
