const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  for (let i = 1; i <= N; i++) {
    let temp = input[i].trim().split('');
    console.log(temp[0] + temp[temp.length - 1]);
  }
}
solution();
