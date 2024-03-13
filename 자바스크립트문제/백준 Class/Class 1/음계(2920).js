const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const inputNumber = input[0].split(' ').map(Number);

  let count;
  for (let i = 1; i < inputNumber.length; i++) {
    if (inputNumber[i] - inputNumber[i - 1] > 0) {
      if (count === 'descending') {
        count = 'mixed';
        break;
      }
      count = 'ascending';
    } else {
      if (count === 'ascending') {
        count = 'mixed';
        break;
      }
      count = 'descending';
    }
  }

  console.log(count);
}
solution();
