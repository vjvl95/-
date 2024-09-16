const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function isFinish(BingoBoard) {
  let count = 0;
  for (let x = 0; x < 5; x++) {
    if (BingoBoard[x].join('') === 'OOOOO') {
      count++;
    }
  }
  for (let y = 0; y < 5; y++) {
    if (
      BingoBoard[0][y] +
        BingoBoard[1][y] +
        BingoBoard[2][y] +
        BingoBoard[3][y] +
        BingoBoard[4][y] ===
      'OOOOO'
    ) {
      count++;
    }
  }
  if (
    BingoBoard[0][0] + BingoBoard[1][1] + BingoBoard[2][2] + BingoBoard[3][3] + BingoBoard[4][4] ===
    'OOOOO'
  ) {
    count++;
  }
  if (
    BingoBoard[0][4] + BingoBoard[1][3] + BingoBoard[2][2] + BingoBoard[3][1] + BingoBoard[4][0] ===
    'OOOOO'
  ) {
    count++;
  }

  return count;
}

function solution() {
  let Bingo = [];
  let xyObject = {};
  let CorrectBingo = Array.from(Array(5), (_) => Array(5).fill('X'));
  let personSpeak = [];
  let tryCount = 0;
  for (let i = 0; i < 5; i++) {
    Bingo.push(input[i].split(' ').map(Number));
    personSpeak.push(input[i + 5].split(' ').map(Number));

    for (let j = 0; j < 5; j++) {
      xyObject[Bingo[i][j]] = `${i} ${j}`;
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      tryCount++;

      const [x, y] = xyObject[personSpeak[i][j]].split(' ');
      CorrectBingo[x][y] = 'O';
      if (tryCount >= 12) {
        const bingo = isFinish(CorrectBingo);
        if (bingo >= 3) {
          console.log(tryCount);
          return;
        }
      }
    }
  }
}

solution();
