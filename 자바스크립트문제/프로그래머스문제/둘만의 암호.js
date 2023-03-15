function solution(s, skip, index) {
  var answer = '';
  let skipWord = skip.split('');
  s.split('').forEach((v) => {
    console.log(v);
    if (skipWord.includes(v)) {
      answer += v;
    } else {
      let code = v.charCodeAt(0) + index;
      console.log(code);
      if (code > 122) code = code - 97;
      answer += String.fromCodePoint(code);
    }
  });
  console.log(answer);
  return answer;
}

solution('aukks', 'wbqd', 5);
