const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function dayToNumber(day) {
  return +(
    day[2].trimEnd() +
    (day[1] < 10 ? '0' + day[1] : day[1]) +
    (day[0] < 10 ? '0' + day[0] : day[0])
  );
}
function solution() {
  const N = +input[0];
  let minPerson = -1;
  let maxPerson = -1;
  for (let i = 1; i <= N; i++) {
    const [name, ...day] = input[i].split(' ');
    const numberDay = dayToNumber(day);
    let currentPerson = [name, numberDay];
    if (minPerson === -1) {
      minPerson = currentPerson;
    }
    if (maxPerson === -1) {
      maxPerson = currentPerson;
    }

    if (minPerson[1] < currentPerson[1]) {
      minPerson = currentPerson;
    }

    if (maxPerson[1] > currentPerson[1]) {
      maxPerson = currentPerson;
    }
  }
  console.log(minPerson[0]);
  console.log(maxPerson[0]);
}

solution();
