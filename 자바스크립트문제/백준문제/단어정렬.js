const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let wordArray = [];

  for (let i = 0; i < N; i++) {
    wordArray.push(input[i]);
  }
  wordArray = [...new Set(wordArray)];

  wordArray.sort((a, b) => {
    if (a.length === b.length) {
      if (a > b) return 1;
      return -1;
    }
    return a.length - b.length;
  });

  for (let i = 0; i < wordArray.length; i++) {
    console.log(wordArray[i]);
  }
}

solution();
