const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let max = -Infinity;
  let currentPeople = -Infinity;
  for (let i = 0; i < 4; i++) {
    let [miuns, plus] = input[i].split(' ').map(Number);
    if (i === 0) {
      max = plus;
      currentPeople = plus;
    } else if (plus - miuns > 0) currentPeople += plus - miuns;
    else if (plus - miuns < 0) currentPeople += plus - miuns;

    if (currentPeople > max) max = currentPeople;
  }
  console.log(max);
}
solution();
