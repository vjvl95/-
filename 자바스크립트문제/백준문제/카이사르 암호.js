const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  console.log(
    input[0]
      .trim()
      .split('')
      .map((v) => {
        return v.charCodeAt() - 3 < 65
          ? String.fromCharCode(((v.charCodeAt() - 3) % 65) + 26)
          : String.fromCharCode(((v.charCodeAt() - 3) % 65) + 65);
      })
      .join('')
  );
}
solution();
