const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let word = input.shift().split(' ');
  let [x, y] = [1, 1];
  dx = [0, 0, -1, 1];
  dy = [-1, 1, 0, 0];
  moveTypes = ['L', 'R', 'U', 'D'];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < moveTypes.length; j++) {
      if (word[i] === moveTypes[j]) {
        nx = x + dx[j];
        ny = y + dy[j];
      }
    }
    if (nx < 1 || ny < 1 || nx > N || ny > N) continue;

    [x, y] = [nx, ny];
  }
  console.log(x, y);
}
solution();
