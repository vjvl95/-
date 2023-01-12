const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [L, C] = input[0].split(' ').map(Number);
let word = input[1].split(' ').sort();
let vowel = ['a', 'e', 'i', 'o', 'u'];
let answer = [];

function backtracking(str, startIndex) {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) cnt++;
    }

    if (cnt > 0 && L - cnt > 1) {
      answer.push(str);
    }
  } else {
    for (let i = startIndex; i < C; i++) {
      backtracking(str + word[i], i + 1);
    }
  }
}

function solution() {
  backtracking('', 0);
  console.log(answer.join('\n'));
}
solution();
