const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let word = input.shift().trim();
  console.log(word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase());
  return word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase();
}
solution();
