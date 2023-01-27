const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let result = [];
  let num = +input[0];
  let answer = [];

  for (let i = 1; i <= num; i++) {
    input[i].split(' ').length === 1 ? answer.push(length_1(input[i])) : length_2(input[i]);
  }

  function length_1(input) {
    if (input === 'size') return result.length;
    if (input === 'empty') return result.length === 0 ? 1 : 0;
    if (input === 'front') return result.length === 0 ? -1 : result[0];
    if (input === 'back') return result.length === 0 ? -1 : result[result.length - 1];
    if (input === 'pop') return result.length === 0 ? -1 : result.shift();
  }

  function length_2(input) {
    input = input.split(' ');
    result.push(+input[1]);
  }
  console.log(answer.join('\n'));
}

solution();
