const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
function solution() {
  let N = +input[1];
  let arr = input[2].split(' ').map(Number).sort();
  let [leftPoint, rightPoint] = [0, arr.length - 1];
  count = 0;
  while (leftPoint < rightPoint) {
    if (arr[leftPoint] + arr[rightPoint] < N) {
      leftPoint++;
    } else if (arr[leftPoint] + arr[rightPoint] > N) {
      rightPoint--;
    } else {
      leftPoint++;
      rightPoint--;
      count++;
    }
  }
  console.log(count);
}

solution();
