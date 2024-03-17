function solution() {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
  let input = fs.readFileSync(filePath).toString().trim().split('\n');
  input.shift();
  let qeuq = [];
  let answer = [];
  while (input.length !== 0) {
    const commend = input.shift().trim();
    if (commend === 'size') {
      answer.push(qeuq.length);
      continue;
    }
    if (commend === 'empty') {
      qeuq.length === 0 ? answer.push(1) : answer.push(0);
      continue;
    }
    if (commend === 'front') {
      if (qeuq.length === 0) {
        answer.push(-1);
      } else answer.push(qeuq[0]);
      continue;
    }
    if (commend === 'back') {
      if (qeuq.length === 0) answer.push(-1);
      else answer.push(qeuq[qeuq.length - 1]);
      continue;
    }
    if (commend.includes('push')) {
      const [splitCommend, number] = commend.split(' ');

      if (splitCommend.includes('back')) {
        qeuq.push(number);
      } else {
        qeuq.unshift(number);
      }
      continue;
    }

    if (commend.includes('pop')) {
      if (commend.includes('front')) {
        if (qeuq.length === 0) answer.push(-1);
        else answer.push(qeuq.shift());
      } else {
        if (qeuq.length === 0) answer.push(-1);
        else answer.push(qeuq.pop());
      }
      continue;
    }
  }
  console.log(answer.join('\n'));
}
solution();
