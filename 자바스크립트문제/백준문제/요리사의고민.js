const number = [
  [30, 55, 10, 8, 100],
  [60, 10, 10, 2, 70],
  [10, 80, 50, 0, 50],
  [40, 30, 30, 8, 60],
  [60, 10, 70, 2, 120],
  [20, 70, 50, 4, 4],
];

let answer = 99999999999999;

function recur(a, b, c, d, e, i) {
  if (i === 5) {
    if (100 <= a && 70 <= b && 90 <= c && 10 <= d) {
      answer = Math.min(e, answer);
      return;
    }
    return;
  }
  recur(
    a + number[i][0],
    b + number[i][1],
    c + number[i][2],
    d + number[i][3],
    e + number[i][4],
    i + 1
  );
  recur(a, b, c, d, e, i + 1);
}

function soluction() {
  recur(0, 0, 0, 0, 0, 0);
  console.log(answer);
}

soluction();
