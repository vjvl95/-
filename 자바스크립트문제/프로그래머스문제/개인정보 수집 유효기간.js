function solution(today, terms, privacies) {
  var answer = [];
  let vaildMonth = {};
  today = today.split('.');
  terms.forEach((v) => {
    v = v.split(' ');
    vaildMonth[v[0]] = +v[1];
  });
  console.log(vaildMonth);

  privacies.forEach((v, index) => {
    let day = v.split(' ')[0].split('.').map(Number);
    let validNumber = v.split(' ')[1];
    let plusMonth = vaildMonth[validNumber];

    day[1] += plusMonth;
    if (day[1] > 12) {
      day[0] += day[1] % 12 === 0 ? Math.trunc(day[1] / 12) - 1 : Math.trunc(day[1] / 12);
      day[1] = day[1] % 12 === 0 ? 12 : day[1] % 12;
    }

    day[2] -= 1;

    if (day[2] === 0) {
      day[1] -= 1;
      day[2] = 28;
    }

    if (day[1] < 10) {
      day[1] = '0' + day[1];
    }
    if (day[2] < 10) {
      day[2] = '0' + day[2];
    }
    console.log(today.join(''), day.join(''));
    if (+today.join('') > +day.join('')) {
      answer.push(index + 1);
    }
  });
  console.log(answer);
  return answer;
}

solution('2021.12.08', ['A 18'], ['2020.06.08 A']);
