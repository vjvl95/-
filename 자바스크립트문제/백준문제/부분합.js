const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, M] = input.shift().split(' ').map(Number);
  let numberArr = input.shift().split(' ').map(Number);

  let start = 0;
  let end = 0;
  let sum = numberArr[start];
  let minLength = Infinity;

  while (start < N && end < N) {
    if (sum >= M) {
      if (end - start < minLength) minLength = end - start;
      sum -= numberArr[start++];
    } else if (sum < M) {
      sum += numberArr[++end];
    } else if (sum > M) {
      sum -= numberArr[start++];
    }
  }
  minLength === Infinity ? console.log(0) : console.log(minLength + 1);
}
solution();
