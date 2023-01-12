const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let word = input.shift().split('');
  let num = 0;
  let str = [];
  while (word.length) {
    let temp = word.pop();
    if (Number.isInteger(+temp)) num += +temp;
    else str.push(temp);
  }
  console.log([str.sort().join(''), num].join(''));
}
solution();
