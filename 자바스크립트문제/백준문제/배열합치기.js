const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let str = '';
  arr1 = input[1].split(' ').map(Number);
  arr2 = input[2].split(' ').map(Number);

  [...arr1, ...arr2]
    .sort((a, b) => a - b)
    .forEach((v, i) => {
      if (i === 0) {
      }
      str += v + ' ';
    });
  console.log(str);
}

solution();
