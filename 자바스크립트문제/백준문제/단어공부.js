const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const answer = Array(26).fill(0);
  input = input[0].toUpperCase();

  input.split('').forEach((v) => {
    let ascii = v.charCodeAt(0);
    answer[ascii - 65]++;
  });
  let max = Math.max(...answer);
  answer.filter((v) => v === max).length !== 1
    ? console.log('?')
    : console.log(String.fromCharCode(answer.indexOf(max) + 65));
}

solution();
