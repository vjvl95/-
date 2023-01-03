const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  console.log(
    input[0]
      .split('')
      .map((v) => {
        if (v.charCodeAt() >= 65 && v.charCodeAt() <= 90) return v.toLowerCase();
        return v.toUpperCase();
      })
      .join('')
  );
}
solution();
