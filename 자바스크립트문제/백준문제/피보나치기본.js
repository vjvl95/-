const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let target = +input.shift();
  let dy = Array(target + 1).fill(0);

  if (target === 0) console.log(0);
  else if (target === 1 || target === 1) console.log(1);
  else {
    dy[0] = 0;
    dy[1] = 1;
    dy[2] = 1;

    for (let i = 3; i < dy.length; i++) {
      dy[i] = dy[i - 2] + dy[i - 1];
    }
    console.log(dy[dy.length - 1]);
  }
}
solution();
