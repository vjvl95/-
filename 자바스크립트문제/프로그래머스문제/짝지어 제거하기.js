function solution(s) {
  let stack = [];
  for (let word of s) {
    if (stack.length > 0 && stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

solution('baabaa');
