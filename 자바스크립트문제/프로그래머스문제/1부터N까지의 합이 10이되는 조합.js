function solution(N) {
  const result = [];

  function backtrack(sum, selectedNum, start) {
    console.log(selectedNum);
    if (sum === 10) {
      result.push(selectedNum);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNum.concat(i), i + 1);
      }
    }
  }

  backtrack(0, [], 1);
}

solution(10);
