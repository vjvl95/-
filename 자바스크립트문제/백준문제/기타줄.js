const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let [count, N] = input.shift().split(' ').map(Number);
  let packageMoney = [];
  let oneMoney = [];

  let totalMoney = 0;
  for (let i = 0; i < N; i++) {
    let [package, one] = input[i].split(' ').map(Number);
    packageMoney.push(package);
    oneMoney.push(one);
  }
  packageMoney.sort((a, b) => a - b);
  oneMoney.sort((a, b) => a - b);

  while (count !== 0) {
    if (count >= 6) {
      totalMoney += Math.min(packageMoney[0], oneMoney[0] * 6);
      count -= 6;
    } else {
      totalMoney += Math.min(packageMoney[0], count * oneMoney[0]);
      count = 0;
    }
  }
  console.log(totalMoney);
}

solution();
