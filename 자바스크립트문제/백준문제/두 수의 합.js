const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let number = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let targetNumber = Number(input.shift());

  let start = 0;
  let end = number.length - 1;
  let count = 0;
  while (start < end) {
    sum = number[start] + number[end];

    if (targetNumber === sum) {
      count++;
      start++;
    } else if (targetNumber > sum) {
      start++;
    } else if (targetNumber < sum) {
      end--;
    }
  }
  console.log(count);
}
solution();
