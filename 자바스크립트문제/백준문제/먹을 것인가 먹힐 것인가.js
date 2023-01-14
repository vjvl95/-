const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = Number(input.shift());
  let X = 0;
  let Y = 1;
  let Z = 2;
  let aPoint = 0;
  let bPoint = 0;
  let count = 0;
  for (let i = 0; i < N; i++) {
    count = 0;
    let [N, M] = input[X].split(' ').map(Number);
    let Aarray = input[Y].split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    let Barray = input[Z].split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    while (aPoint < N) {
      if (Aarray[aPoint] > Barray[bPoint]) {
        count++;
        bPoint++;
        if (bPoint === M) {
          aPoint++;
          bPoint = 0;
        }
      } else {
        aPoint++;
        bPoint = 0;
      }
    }
    console.log(count);

    X = X + 3;
    Y = Y + 3;
    Z = Z + 3;
    aPoint = 0;
    bPoint = 0;
  }
}
solution();
