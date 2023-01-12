const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [x, y, w, h] = input[0].trim().split(' ').map(Number);
  let directMin = Math.min(w - x, h - y, x, y);
  console.log(directMin);
}
solution();
