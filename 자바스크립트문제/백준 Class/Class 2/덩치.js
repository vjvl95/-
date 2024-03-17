function solution() {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
  let input = fs.readFileSync(filePath).toString().trim().split('\n');
  input = input.map((v) => v.split(' ').map(Number));
  const Length = input.shift();

  const lank = [];
  for (let i = 0; i < Length; i++) {
    count = 1;
    for (let j = 0; j < Length; j++) {
      if (i === j) continue;
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        count += 1;
      }
    }
    lank.push(count);
    count = 1;
  }

  console.log(lank.join(' '));
}
solution();
