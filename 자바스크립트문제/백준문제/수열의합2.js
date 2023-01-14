const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, M] = input.shift().split(' ').map(Number);
  let numberArr = input.shift().split(' ').map(Number);

  let start = 0;
  let end = 0;
  let count = 0;
  let sum = numberArr[start];
  while (end < N && start < N) {
    if (sum === M) {
      count++;
      sum += numberArr[++end];
    } else if (sum < M) {
      sum += numberArr[++end];
    } else if (sum > M) {
      sum -= numberArr[start++];
    }
  }
  console.log(count);
}

solution();
