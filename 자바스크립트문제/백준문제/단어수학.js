const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let wordArray = [];
  let sumArr = [];
  let obj = {};
  let res = 0;
  for (let i = 0; i < N; i++) {
    wordArray.push(input[i].trim());
  }

  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < wordArray[i].length; j++) {
      obj[wordArray[i][j]]
        ? (obj[wordArray[i][j]] += 10 ** (wordArray[i].length - 1 - j))
        : (obj[wordArray[i][j]] = 10 ** (wordArray[i].length - 1 - j));
    }
  }

  for (let val of Object.entries(obj)) {
    sumArr.push(val);
  }
  sumArr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < 10; i++) {
    if (sumArr[i]) {
      res += sumArr[i][1] * (9 - i);
    } else break;
  }
  console.log(res);
}
solution();
