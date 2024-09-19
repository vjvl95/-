const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
function solution() {
  const Case = +input.shift();

  for (let i = 0; i < Case; i++) {
    const [west, east] = input.shift().split(' ').map(Number);
    if (west === east) {
      console.log(1);
      continue;
    }
    console.log(Math.round(factorial(east) / (factorial(east - west) * factorial(west))));
  }
}

solution();
