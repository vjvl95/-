const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let num = input.shift().split('').map(Number);
  console.log(num);
  console.log(
    num.reduce((a, b) => {
      if (a <= 1 || b <= 1) return a + b;
      else return a * b;
    })
  );
}
solution();
