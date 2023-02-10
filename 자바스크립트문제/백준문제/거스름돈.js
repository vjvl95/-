const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let money = +input.shift();
  let cnt = 0;
  if (money === 1 || money === 3) console.log(-1);
  else {
    while (money > 0) {
      if (money % 2 == 1 || money % 5 == 0) {
        cnt += 1;
        money -= 5;
      } else if (money % 2 === 0) {
        cnt += 1;
        money -= 2;
      }
    }
    console.log(cnt);
  }
}
solution();
