const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let hashWord = {};
  let word = input[0];
  let res = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = i; j < word.length; j++) {
      hashWord[word.slice(i, j + 1)] ? '' : (hashWord[word.slice(i, j + 1)] = 1);
    }
  }
  for (let count of Object.values(hashWord)) {
    res += count;
  }
  console.log(res);
}

solution();
