const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, M] = input.shift().split(' ').map(Number);
  let numArr = [];
  let start = 0;
  let end = 0;
  let minDiff = Infinity;
  for (let i = 0; i < N; i++) {
    numArr.push(+input[i]);
  }
  numArr.sort((a, b) => a - b);

  while (start <= end && end < N) {
    const curDiff = Math.abs(numArr[start] - numArr[end]);
    if (curDiff < M) {
      end++;
    } else {
      minDiff = Math.min(minDiff, curDiff);
      start++;
    }
    if (curDiff === M) {
      break;
    }
  }

  console.log(minDiff);
}
solution();
