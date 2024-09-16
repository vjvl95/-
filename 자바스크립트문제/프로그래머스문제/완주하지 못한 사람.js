function solution(participant, completion) {
  let hashTable = {};
  for (person of participant) {
    hashTable[person] ? (hashTable[person] += 1) : (hashTable[person] = 1);
  }
  for (person of completion) {
    hashTable[person] -= 1;
  }

  for (const key in hashTable) {
    if (hashTable[key] > 0) {
      console.log(key);
      return key;
    }
  }
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
