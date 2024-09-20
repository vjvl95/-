function compare(a, b) {
  t1 = a.toString() + b.toString();
  t2 = b.toString() + a.toString();

  return t1 > t2 ? -1 : 1;
}
function solution(numbers) {
  if (numbers.lengh === 1) return numbers.join('');
  return numbers.sort(compare).join('');
}

solution([0]);
