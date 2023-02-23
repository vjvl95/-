const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let word = input.shift().split('.');
  let isFalse = false;
  word = word.map((v) => {
    let tempArr = '';
    v = v.split('');

    if (v.length === 0) return String(v);
    else {
      if (v.length % 2 !== 0) return -1;
      else {
        while (v.length) {
          if (v.length >= 4) {
            tempArr += 'AAAA';
            for (let i = 0; i < 4; i++) {
              v.pop();
            }
          } else {
            tempArr += 'BB';
            for (let i = 0; i < 2; i++) {
              v.pop();
            }
          }
        }
      }
    }
    return tempArr;
  });
  for (let i = 0; i < word.length; i++) {
    if (word[i] === -1) {
      console.log(-1);
      isFalse = true;
      break;
    }
  }
  if (!isFalse) console.log(word.join('.'));
}
solution();
