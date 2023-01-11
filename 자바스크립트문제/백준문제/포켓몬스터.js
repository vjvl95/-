const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  let [N, M] = input[0].split(' ').map(Number);
  let Name_Number = {};
  let Number_Name = {};
  for (let i = 1; i <= N; i++) {
    Number_Name[i] = input[i].trim();
    Name_Number[input[i].trim()] = i;
  }
  for (let i = N + 1; i <= N + M; i++) {
    if (!Number.isNaN(+input[i].trim())) console.log(Number_Name[+input[i].trim()]);
    else console.log(Name_Number[input[i].trim()]);
  }
}
solution();
