const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let word = input.shift();
  let obj = {};
  let evenCount = 0;
  console.log(word);
  word.split('').forEach((v) => {
    obj[v] ? (obj[v] += 1) : (obj[v] = 1);
  });
  console.log(obj);
  for (let value of Object.values(obj)) {
    if (value % 2 !== 0) evenCount += 1;

    if (evenCount >= 2) {
      console.log("I'm Sorry Hansoo");
      break;
    }
  }
}
solution();
