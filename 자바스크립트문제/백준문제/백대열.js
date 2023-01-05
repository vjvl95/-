const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [num1, num2] = input[0].split(':');
  let i = 2;
  let minNum = Math.min(num1, num2);
  while (minNum >= i) {
    if (num1 % i === 0 && num2 % i === 0) {
      num1 /= i;
      num2 /= i;
      i = 2;
    } else {
      i++;
    }
  }
  console.log(num1 + ':' + num2);
}
solution();
