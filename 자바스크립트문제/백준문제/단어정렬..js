const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let res = [];

  for (let i = 0; i < N; i++) {
    res.push(input[i]);
  }
  let tempSet = new Set(res);

  res = Array(...tempSet);
  res.sort((a, b) => a.length - b.length || b.localeCompare(a));
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}

solution();
