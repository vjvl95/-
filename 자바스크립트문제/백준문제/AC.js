const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let word = '';
  let num = [];
  let tempStack = [];
  for (let i = 0; i < N; i++) {
    word = input.shift().trim().split('');
    len = +input.shift();
    num = JSON.parse(input.shift().trim());
    let start = 0;
    let end = num.length;
    let reverseCount = 0;
    word.forEach((v) => {
      if (v === 'R') {
        reverseCount++;
      } else {
        if (reverseCount % 2 === 0) start++;
        else end--;
      }
    });

    if (start <= end)
      reverseCount % 2 === 0
        ? console.log('[' + num.slice(start, end).join(',') + ']')
        : console.log('[' + num.slice(start, end).reverse().join(',') + ']');
    else console.log('error');
  }
}
solution();
