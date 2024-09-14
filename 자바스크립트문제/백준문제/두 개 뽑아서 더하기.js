const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const numberList = input[0].split(' ').map(Number);
  const sumArray = [];
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      sumArray.push(numberList[i] + numberList[j]);
    }
  }
  console.log([...new Set(sumArray)].sort((a, b) => a - b));
}

solution();
