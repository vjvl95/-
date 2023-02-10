const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let numberArr = [];
  for (let i = 0; i < N; i++) {
    input.shift();
    numberArr.push(
      input[i]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b)
    );
  }
  for (let i = 0; i < numberArr.length; i++) {
    let max = 0;
    for (let j = 0; j < numberArr[i].length - 2; j++) {
      max = Math.max(max, numberArr[i][j + 2] - numberArr[i][j]);
    }
    console.log(max);
  }
}
solution();
