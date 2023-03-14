function solution(s) {
  var answer = [];
  let word = {};
  s = s.split('');

  s.forEach((v, index) => {
    if (word[v]) {
      let tempWord = word[v];
      word[v] = [index - tempWord[1], index];
      answer.push(word[v][0]);
    } else {
      word[v] = [-1, index];
      answer.push(-1);
    }
  });
  for (let word2 of Object.values(word)) {
    console.log(word2);
  }
  console.log(answer);
  return answer;
}

solution('banana');
