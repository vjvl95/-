const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  const [N] = input[0].split(' ').map(Number);
  const inputArray = input[1].split(' ').map(Number);
  const prefixArray = Array(N).fill(-Infinity);

  for (let i = 0; i < N; i++) {
    prefixArray[i + 1] =
      inputArray[i] > prefixArray[i] + inputArray[i]
        ? inputArray[i]
        : prefixArray[i] + inputArray[i];
  }
  //   const answerArray = [];
  //   for (let k = M; k <= N; k++) {
  //     answerArray[k - M] = prefixArray[k] - prefixArray[k - M];
  //   }
  console.log(Math.max(...prefixArray));
}

solution();
