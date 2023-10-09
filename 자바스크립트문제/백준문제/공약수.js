const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function gcdFunction(a, b) {
  let tmp;

  while (a % b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return b;
}
function solution() {
  const [a, b] = input[0].split(' ').map(Number);
  const gcd = gcdFunction(a, b);
  const lcm = (a * b) / gcd;
  console.log(gcd, lcm);
}
solution();
