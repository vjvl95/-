const { getInput } = require('./input');

function solution() {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
  let input = fs.readFileSync(filePath).toString().trim().split('\n');

  const str = input[1];

  console.log(
    str.split('').reduce((a, b, i) => {
      return a + (b.charCodeAt() - 96) * Math.pow(31, i);
    }, 0)
  );
}
solution();
