const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let num = +input[0];
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(input[i].split(' ').map(Number));
    console.log(arr);
  }
  console.log(arr.sort((a, b) => a[1] - b[1]));
  console.log(arr);
  let et = 0;
  let cnt = 0;

  arr.forEach((v) => {
    console.log(v);
    if (v[0] >= et) {
      et = v[1];
      cnt++;
    }
  });
}
solution();
