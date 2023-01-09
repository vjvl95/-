const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let sentence = input[0];
  let Stack = [];
  let res = [];
  let temp = [];
  let i = 0;
  while (i < sentence.length) {
    if (sentence[i] === '<') {
      if (temp.length) {
        res.push(temp.reverse().join(''));
        temp = [];
      }
      let tempStack = [];
      while (sentence[i] !== '>') {
        tempStack.push(sentence[i]);
        i++;
      }
      tempStack.push(sentence[i]);
      res.push(tempStack.join(''));
      i++;
    } else if (sentence[i] === ' ') {
      res.push(temp.reverse().join(''));
      res.push(' ');
      temp = [];
      i++;
    } else {
      temp.push(sentence[i]);
      i++;
    }
  }
  if (temp.length) {
    res.push(temp.reverse().join(''));
    temp = [];
  }
  console.log(res.join(''));
}
solution();
