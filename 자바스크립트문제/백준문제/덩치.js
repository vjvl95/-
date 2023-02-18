const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let people = [];
  for (let i = 0; i < N; i++) {
    people.push(input[i].split(' ').map(Number));
  }
  console.log(...people.sort((a, b) => b[1] - a[1]));
}
solution();
