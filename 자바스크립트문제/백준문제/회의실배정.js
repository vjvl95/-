const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let num = +input[0];
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(input[i].split(' ').map(Number));
  }
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let endTime = arr[0][1];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= endTime) {
      endTime = arr[i][1];
      cnt++;
    }
  }
  console.log(cnt);
}
solution();
