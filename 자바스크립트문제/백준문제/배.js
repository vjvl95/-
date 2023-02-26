const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let cranin = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let M = +input.shift();
  let boxes = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let cnt = 0;
  let i = 1;

  console.log(cranin, boxes);
  while (boxes.length) {
    while (cranin[cranin.length - i] >= boxes[boxes.length - 1]) {
      i++;
      boxes.pop();
    }
    cnt++;
    i = 1;
  }

  console.log(cnt);
}
solution();
