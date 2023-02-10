const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let count = 0;
  let i = 666;
  while (count < N) {
    if (String(i).includes('666')) {
      count++;
    }
    i++;
  }
  console.log(i - 1);
}
solution();
