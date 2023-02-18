const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let coinCount = [0, 0, 0, 0];
  let coinArray = [25, 10, 5, 1];
  for (let i = 0; i < N; i++) {
    let tempMoney = +input[i];
    for (let j = 0; j < 4; j++) {
      if (tempMoney === 0) break;
      if (tempMoney >= coinArray[j]) {
        coinCount[j] = Math.trunc(tempMoney / coinArray[j]);
        tempMoney = tempMoney % coinArray[j];
      }
    }
    console.log(...coinCount);
    coinCount = [0, 0, 0, 0];
  }
}
solution();
