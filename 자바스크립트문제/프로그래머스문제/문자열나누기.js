function solution(s) {
  var answer = 0;
  let xCount = 1;
  let otherCount = 0;
  let i = 1;
  while (s.length) {
    let currentWord = s[0];

    if (currentWord === s[i]) {
      xCount++;
    } else {
      otherCount++;
    }
    if (xCount === otherCount) {
      answer++;
      s = s.slice(i + 1);
      i = 1;
      xCount = 1;
      otherCount = 0;
    } else {
      i++;
    }
  }
  return answer;
}

solution('aaabbaccccabba');
