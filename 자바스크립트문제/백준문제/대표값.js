const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(+input.shift());
  }
  array.sort((a, b) => a - b);
  console.log(array.reduce((a, b) => a + b) / 5);
  console.log(array[2]);
}
solution();
