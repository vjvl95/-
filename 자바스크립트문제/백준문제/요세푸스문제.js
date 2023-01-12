const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, K] = input[0].split(' ').map(Number);
  let numbers = Array(N)
    .fill(0)
    .map((v, i) => (v = i + 1));
  let res = [];
  count = 0;
  while (numbers.length !== 1) {
    if (count === K - 1) {
      res.push(numbers.shift());
      count = 0;
    } else {
      numbers.push(numbers.shift());
      count++;
    }
  }
  console.log('<' + [...res, ...numbers].join(', ') + '>');
}

solution();
