const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let result = '';
  for (let i = 1; i < +input[0] + 1; i++) {
    const [a, b] = input[i].split(' ');
    result += +a + +b + '\n';
  }
  console.log(result);
}
solution();
