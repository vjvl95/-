const { Console } = require('console');
const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let myCard = input
    .shift()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let M = +input.shift();
  let res = Array(M).fill(0);
  let cardArray = input.shift().split(' ').map(Number);
  let low = 0;
  let high = N;
  let mid = Math.trunc((low + high) / 2);

  cardArray.forEach((v, i) => {
    while (low <= high) {
      if (v === myCard[mid]) {
        res[i] = 1;
        break;
      } else if (v < myCard[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
      mid = Math.trunc((low + high) / 2);
    }
    low = 0;
    high = N;
    mid = Math.trunc((low + high) / 2);
  });

  console.log(res.join(' '));
}
solution();
