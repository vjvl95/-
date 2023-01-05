const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let N = +input[0];

  let res = [];
  let isSame = Array(input[1].trim().length).fill(true);
  input[1]
    .trim()
    .split('')
    .forEach((v, i) => {
      for (let j = 2; j <= N; j++) {
        if (v !== input[j][i]) isSame[i] = false;
      }
    });
  input[1]
    .trim()
    .split('')
    .forEach((v, i) => {
      if (isSame[i]) res.push(v);
      else res.push('?');
    });

  console.log(res.join(''));
}

solution();
