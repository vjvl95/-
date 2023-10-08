const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  input = input.map(BigInt);
  let count = BigInt(2);
  for (let i = 1; i <= input[0]; i++) {
    while (1) {
      if (input[i] % count == 0) {
        console.log('NO');
        count = BigInt(2);
        break;
      }
      if (count == BigInt(1000000)) {
        console.log('YES');
        count = BigInt(2);
        break;
      }

      count = count + BigInt(1);
    }
  }
}
solution();
