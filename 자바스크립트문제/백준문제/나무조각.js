const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const num = input[0].split(' ').map(Number);
  let isFinsh = false;
  let i = 0;
  let j = 1;
  while (!isFinsh) {
    if (i === 4) {
      i = 0;
      j = 1;
      continue;
    }
    if (num[i] > num[j]) {
      let temp = num[i];
      num[i] = num[j];
      num[j] = temp;
      console.log(num.join(' '));
    }
    i++;
    j++;
    if (num.join('') === '12345') {
      isFinsh = true;
    }
  }
}

solution();
