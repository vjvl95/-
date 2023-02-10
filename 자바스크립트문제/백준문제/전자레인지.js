const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let [a, b, c] = [0, 0, 0];
  if (N >= 300) {
    a = Math.trunc(N / 300);
    N = N % 300;
  }
  if (N >= 60) {
    b = Math.trunc(N / 60);
    N = N % 60;
  }
  if (N >= 10) {
    c = Math.trunc(N / 10);
    N = N % 10;
  }

  if (N !== 0) console.log(-1);
  else console.log(a, b, c);
}
solution();
