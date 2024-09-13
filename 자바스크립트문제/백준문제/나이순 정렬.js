const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let personList = [];
  for (let i = 1; i <= +input[0]; i++) {
    const [age, name] = input[i].split(' ');
    personList.push([+age, name.trim()]);
  }
  personList.sort((a, b) => a[0] - b[0]);
  personList.forEach((v) => {
    console.log(v.join(' '));
  });
}

solution();
