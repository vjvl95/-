function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, _, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [N, M] = input.shift().split(' ').map(Number);
  let num = [];
  for (let i = 1; i <= N; i++) {
    num.push(i);
  }
  let res = permutation(num, M);
  res.forEach((v) => {
    console.log(v.join(' '));
  });
}
solution();
