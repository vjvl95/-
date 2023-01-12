const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let num1 = input[0].trim().split('').map(Number).join('');
  let num2 = input[1].trim().split('').reverse().map(Number);
  let res = [];
  num2.forEach((v, i) => {
    let temp = num1 * v;
    for (let j = 0; j < i; j++) temp += '0';
    console.log();

    res.push(+temp);
  });
  console.log(res.reduce((a, b) => a + b));
}

solution();
