const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution() {
  let [start_index, end_index] = [1, 1];
  let number = +input[0];
  sum = 1;
  count = 1;
  while (end_index !== number) {
    if (sum === number) {
      count++;
      end_index += 1;
      sum += end_index;
    } else if (sum > number) {
      sum -= start_index;
      start_index++;
    } else {
      end_index += 1;
      sum += end_index;
    }
  }
  console.log(count);
}
solution();
