const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let res = [];
  let wordLength = Math.max(...input.map((v) => v.trim().length));

  for (let i = 0; i < wordLength; i++) {
    for (let j = 0; j < input.length; j++) {
      res.push(input[j][i]);
    }
  }
  console.log(res.join(''));
}
solution();
