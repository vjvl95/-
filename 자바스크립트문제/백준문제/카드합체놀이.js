const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, count] = input.shift().split(' ').map(Number);
  let numArr = input.shift().split(' ').map(BigInt);

  numArr.sort((a, b) => {
    if (b > a) {
      return 1;
    } else if (b < a) {
      return -1;
    } else {
      return 0;
    }
  });
  let i = 0;

  while (i < count) {
    let tempNum1 = numArr.pop();
    let tempNum2 = numArr.pop();
    let tempSum = tempNum1 + tempNum2;
    numArr.push(tempSum);
    numArr.push(tempSum);
    numArr.sort((a, b) => {
      if (b > a) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    });
    i++;
  }
  let sum = 0n;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  console.log(String(sum));
}
solution();
