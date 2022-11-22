const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let num = input[0].split(' ').map(Number)[1];
  let sum = [0];
  count = 1;
  input_number = 2;
  input[1]
    .split(' ')
    .map(Number)
    .forEach((v, i) => {
      if (i === 0) sum.push(v);
      else {
        sum.push(sum[i] + v);
      }
    });
  while (count <= num) {
    let [n, m] = input[input_number].split(' ').map(Number);
    console.log(sum[m] - sum[n - 1]);
    count++;
    input_number++;
  }
}

solution();
