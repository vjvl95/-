const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let wordLength = +input.shift();
  let word = input.shift();
  let answer = 0;
  let io = 'I';

  for (let i = 0; i < N; i++) {
    io += 'OI';
  }

  let start = 0;
  let end = io.length;
  let tempWord = '';
  word = word.split('').reverse();
  
  while (1) {
    while (word.length) {
      tempWord += word.pop();
      if (tempWord.length === io.length) break;
    }

    if (tempWord === io) answer++;
    if (word.length === 0) break;
    start++;
    end++;
    tempWord.shift();
  }

  console.log(answer);

}
solution();
