const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input[1];
  let leftStack = input[0].trim().split('');
  let rightStack = [];
  for (let i = 2; i <= N + 1; i++) {
    let userInput = input[i];
    if (userInput[0] === 'L') {
      if (leftStack.length === 0) continue;
      rightStack.push(leftStack.pop());
    } else if (userInput[0] === 'D') {
      if (rightStack.length === 0) continue;
      leftStack.push(rightStack.pop());
    } else if (userInput[0] === 'B') {
      if (leftStack.length === 0) continue;
      leftStack.pop();
    } else {
      let tempWord = userInput.split(' ')[1];
      leftStack.push(tempWord);
    }
  }
  console.log([...leftStack, ...rightStack.reverse()].join(''));
}
solution();
