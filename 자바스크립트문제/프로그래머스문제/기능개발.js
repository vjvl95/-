function solution(progresses, speeds) {
  var answer = [];

  let count = 0;
  let day = 0;
  while (count !== progresses.length) {
    if (progresses[count] >= 100) {
      count += 1;
      answer.push(day);
      day = 0;
    } else {
      progresses[count] += speeds[count];
      day += 1;
    }
  }
  let maxDay = answer[0];
  const returnDay = [];
  let returnDayCount = 0;
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] <= maxDay) {
      returnDayCount += 1;
    } else {
      returnDay.push(returnDayCount);
      maxDay = answer[i];
      returnDayCount = 1;
    }
  }
  returnDay.push(returnDayCount);
  return returnDay;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
