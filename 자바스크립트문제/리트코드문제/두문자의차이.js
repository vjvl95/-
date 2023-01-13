const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let s = input.shift().trim().split('');
  let t = input.shift().split('');
  let sScore = 0;
  let tScore = 0;
  s.forEach((v) => {
    sScore += v.charCodeAt();
  });
  t.forEach((v) => {
    tScore += v.charCodeAt();
  });
  return String.fromCharCode(tScore - sScore);
}

solution();
