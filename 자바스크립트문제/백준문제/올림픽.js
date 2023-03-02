const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, K] = input.shift().split(' ');
  let array = [];
  let res = 0;

  for (let i = 0; i < N; i++) {
    array.push(input[i].split(' ').map(Number));
  }
  array.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < array.length; i++) {
    if (array[i][1] > array[K - 1][1]) {
      res++;
    } else if (array[i][1] === array[K - 1][1]) {
      if (array[i][2] > array[K - 1][2]) {
        res++;
      } else if (array[i][2] === array[K - 1][2]) {
        if (array[i][3] > array[K - 1][3]) {
          res++;
        }
      }
    }
  }
  console.log(res + 1);
}
solution();
