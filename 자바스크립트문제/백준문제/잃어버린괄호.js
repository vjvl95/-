const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let number = input[0];
  let prev = [];
  let after = [];
  for (let i = 0; i < number.length; i++) {
    if (input[0][i] !== '-') prev.push(input[0][i]);
    else {
      after.push(input[0].slice(input[0].indexOf('-') + 1));
      break;
    }
  }
  console.log(
    prev
      .join('')
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b) -
      after
        .join('')
        .split('-')
        .join(' ')
        .split('+')
        .join(' ')
        .split(' ')
        .map(Number)
        .reduce((a, b) => a + b)
  );
}

solution();
