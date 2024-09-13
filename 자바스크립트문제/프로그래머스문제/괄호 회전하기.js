function isVaildStack(stack) {
  let tempStack = [];
  let isCorrectStack = true;
  stack.reverse();
  while (stack.length) {
    const currentItem = stack.pop();
    if (currentItem === '[' || currentItem === '{' || currentItem === '(') {
      tempStack.push(currentItem);
    } else {
      if (currentItem === ']' && tempStack[tempStack.length - 1] === '[') {
        tempStack.pop();
        continue;
      }
      if (currentItem === '}' && tempStack[tempStack.length - 1] === '{') {
        tempStack.pop();
        continue;
      }
      if (currentItem === ')' && tempStack[tempStack.length - 1] === '(') {
        tempStack.pop();
        continue;
      }
      isCorrectStack = false;
    }

    if (!isCorrectStack) break;
  }
  if (tempStack.length !== 0) return false;
  return isCorrectStack;
}

function solution(s) {
  const stack = [];
  let count = 0;
  for (let splitS of s) {
    stack.push(splitS);
  }

  for (let i = 0; i < stack.length; i++) {
    let result;
    if (i === 0) {
      result = isVaildStack(stack.slice());
    } else {
      const popItem = stack.shift();
      stack.push(popItem);
      result = isVaildStack(stack.slice());
    }

    if (result) count += 1;
  }
  return count;
}

solution('}]()[{');
