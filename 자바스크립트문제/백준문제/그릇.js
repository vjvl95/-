const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let score = 0;
  let res = [];
  let sentence = input[0].trim().split('').reverse();
  while (sentence.length !== 0) {
    if (
      res.length === 0 ||
      (res[res.length - 1] === '(' && sentence[sentence.length - 1] === ')') ||
      (res[res.length - 1] === ')' && sentence[sentence.length - 1] === '(')
    ) {
      res.push(sentence.pop());
      score += 10;
    } else {
      res.push(sentence.pop());
      score += 5;
    }
  }
  console.log(score);
}
solution();
