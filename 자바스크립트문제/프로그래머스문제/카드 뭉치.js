function solution(cards1, cards2, goal) {
  var answer = [];
  let cards1Index = 0;
  let cards2Index = 0;

  goal.forEach((v) => {
    if (v === cards1[cards1Index]) {
      cards1Index++;
      answer.push(1);
    } else if (v === cards2[cards2Index]) {
      cards2Index++;
      answer.push(1);
    } else {
      answer.push(-1);
    }
  });
  console.log(answer);
  return answer.includes(-1) ? 'NO' : 'YES';
}

solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']);
