const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const N = Number(input[0]);
  const resultArrLeft = [];
  const resultArrRight = [];
  for (let i = 2; i < Math.floor(Math.sqrt(N)) + 1; i++) {
    if (N % i === 0) {
      resultArrLeft.push(i);
      resultArrRight.push(N / i);
    }
  }
  const result = [...new Set([...resultArrLeft, ...resultArrRight.reverse()])];
  if (result.length === 0) {
    console.log(1);
    console.log(N);
  } else {
    console.log(result.length);
    console.log(result.join(' '));
  }
}

solution();
