const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[0];
  let leftStack = [];
  let rightStack = [];
  for (let i = 1; i <= N; i++) {
    let word = input[i].trim().split('');

    for (let j = 0; j < word.length; j++) {
      let userInput = word[j];

      if (userInput === '<') {
        if (rightStack.length === 0) continue;
        leftStack.push(rightStack.pop());
      } else if (userInput === '>') {
        if (leftStack.length === 0) continue;
        rightStack.push(leftStack.pop());
      } else if (userInput === '-') {
        if (rightStack.length === 0) continue;
        rightStack.pop();
      } else {
        rightStack.push(userInput);
      }
    }
    console.log([...leftStack, ...rightStack.reverse()].reverse().join(''));
    leftStack = [];
    rightStack = [];
  }
}
solution();
