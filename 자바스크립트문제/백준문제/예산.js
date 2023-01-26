const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let money = input.shift().split(' ').map(Number);
  let sum = 0;
  let M = +input.shift();
  money.sort((a, b) => a - b);
  let tempMinus = Math.max(...money);
  for (let i = 0; i < N; i++) {
    sum += money[i];
  }
  if (sum <= M) console.log(tempMinus);
  else {
    while (1) {
      let tempSum = 0;
      for (let i = 0; i < N; i++) {
        tempSum += Math.min(tempMinus, money[i]);
      }
      if (tempSum <= M) break;
      tempMinus--;
    }
    console.log(tempMinus);
  }
}
solution();
