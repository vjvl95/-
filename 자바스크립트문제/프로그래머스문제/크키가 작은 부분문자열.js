function solution(t, p) {
  var answer = 0;
  t = t.split('').reverse();
  let tempArray = [];
  while (t.length) {
    if (tempArray.length === p.length) {
      if (+tempArray.join('') <= +p) {
        answer += 1;
      }
      tempArray.shift();
    } else {
      tempArray.push(t.pop());
    }
  }

  if (tempArray.length === p.length) {
    if (+tempArray.join('') <= +p) {
      answer += 1;
    }
  }
  return answer;
}

solution('10203', '15');
