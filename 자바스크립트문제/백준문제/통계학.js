const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let num = [];
  let numAppear = {};
  let hitMaxNumArr = [];
  for (let i = 1; i <= N; i++) {
    num.push(+input[i]);
  }
  num
    .sort((a, b) => a - b)
    .forEach((v) => {
      numAppear[v] ? (numAppear[v] += 1) : (numAppear[v] = 1);
    });

  let hitMaxnum = Math.max.apply(null, Object.values(numAppear));
  for (let numKey in numAppear) {
    if (numAppear[numKey] === hitMaxnum) {
      hitMaxNumArr.push(+numKey);
    }
  }

  console.log(
    Math.round(num.reduce((a, b) => a + b) / N) === -0
      ? 0
      : Math.round(num.reduce((a, b) => a + b) / N)
  );

  console.log(
    num
      .sort((a, b) => a - b)
      .filter((v, i) => {
        return Math.trunc(num.length / 2) === i ? 1 : '';
      })[0]
  );
  console.log(
    hitMaxNumArr.length > 1
      ? hitMaxNumArr.sort((a, b) => a - b)[1]
      : hitMaxNumArr.sort((a, b) => a - b)[0]
  );
  console.log(Math.max(...num) - Math.min(...num));
}
solution();
