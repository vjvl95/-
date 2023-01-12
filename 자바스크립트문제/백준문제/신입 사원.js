const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let N = +input.shift();
  let peopleScore = [];
  let cnt = 1;
  let K = 0;
  for (let i = 0; i < N; i++) {
    let M = +input[K + i];
    for (let j = K + i + 1; j <= M + K + i; j++) {
      peopleScore.push(input[j].split(' ').map(Number));
    }
    peopleScore.sort((a, b) => a[0] - b[0]);

    let temp = peopleScore[0][1];
    for (let i = 1; i < peopleScore.length; i++) {
      if (temp > peopleScore[i][1]) {
        temp = peopleScore[i][1];
        cnt += 1;
      }
    }
    console.log(cnt);
    cnt = 1;
    peopleScore = [];
    K += M;
  }
}

solution();
