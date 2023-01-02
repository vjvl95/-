const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let start = 0;
  let end = 10;
  if (input[0].length < 10) console.log(input[0].split('').slice(0, input[0].length).join(''));
  else {
    while (end <= input[0].length) {
      console.log(input[0].split('').slice(start, end).join(''));
      if (end + 10 > input[0].length) {
        console.log(input[0].split('').slice(end, input[0].length).join(''));
        break;
      }
      start += 10;
      end += 10;
    }
  }
}

solution();
