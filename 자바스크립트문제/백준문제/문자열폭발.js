const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function removeWord(temp, word) {}

function solution() {
  let sentence = input[0].trim();
  let word = input[1];
  let temp = [];
  sentence.split('').forEach((v) => {
    if (temp.length === 0) temp.push(v);
    else if (temp.slice(temp.length - word.length, temp.length).join('') === word) {
      for (let i = 0; i < word.length; i++) {
        temp.pop();
      }
      temp.push(v);
    } else temp.push(v);
  });
  if (temp.slice(temp.length - word.length, temp.length).join('') === word) {
    for (let i = 0; i < word.length; i++) {
      temp.pop();
    }
  }

  console.log(temp.join('') !== '' ? temp.join('') : 'FRULA');
}
solution();
