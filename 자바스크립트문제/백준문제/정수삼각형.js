const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let arr = [];
  let N = +input.shift();
  let sum = +input.shift();
  let index;
  for (let i = 0; i < N - 1; i++) {
    arr.push(input[i].trim().split(' ').map(Number));
  }
  arr.forEach((v, i) => {
    let max = i === 0 ? Math.max(v[0], v[1]) : Math.max(v[index], v[index + 1]);
    if (i === 0) {
      sum += max;
    } else {
      sum += max;
    }
    index = v.indexOf(max);
  });
  console.log(sum);
}

solution();
