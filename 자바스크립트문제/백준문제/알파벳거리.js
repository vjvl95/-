const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let res = [];
  for (let i = 1; i <= N; i++) {
    let temp = input[i].split(' ');
    for (let j = 0; j < temp[0].length; j++) {
      temp[0][j].charCodeAt() <= temp[1][j].charCodeAt()
        ? res.push(temp[1][j].charCodeAt() - temp[0][j].charCodeAt())
        : res.push(temp[1][j].charCodeAt() + 26 - temp[0][j].charCodeAt());
    }
    console.log('Distances:', res.join(' '));
    res = [];
  }
}
solution();
