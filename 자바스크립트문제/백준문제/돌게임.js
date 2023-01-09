const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  +input[0] % 2 === 0 ? console.log('CY') : console.log('SK');
}
solution();
