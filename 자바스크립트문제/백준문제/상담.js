const number = [
  [4, 10],
  [1, 20],
  [3, 30],
  [1, 40],
  [2, 35],
  [3, 150],
  [2, 10],
];

let result = -1;

function repectFunction(a, b) {
  if (a === 6) {
    result = Math.max(b, result);
    return;
  }
  if (a > 5) return;

  repectFunction(a + number[a][0], b + number[a][1]);
  repectFunction(a + 1, b);
}
function soluction() {
  repectFunction(0, 0);
  console.log(result);
}

soluction();
