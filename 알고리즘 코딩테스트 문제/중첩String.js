function solution(str, word) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word[0]) {
      for (let j = 0; j < word.length; j++) {
        let k = i + j;
        if (str[k] !== word[j]) {
          break;
        }
        if (j === word.length - 1) count++;
      }
    }
  }
  console.log(count);
}

solution('gdastadfadgafdsagdagdsfdatadsgdfasdgdgd', 'pop');
