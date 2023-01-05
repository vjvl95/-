const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let N = +input[0];
  let temp = [];
  let temp2 = [];
  for (let i = 1; i <= N; i++) {
    input[i]
      .trim()
      .split(' ')
      .forEach((v) => {
        temp2 = [];
        for (let j = v.length - 1; j >= 0; j--) {
          temp2.push(v.split('')[j]);
        }
        temp.push(temp2.join(''));
      });
    temp.join('');
    console.log(temp.join(' '));
    temp = [];
  }
}

solution();
