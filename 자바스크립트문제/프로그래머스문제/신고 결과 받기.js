function solution(id_list, report, k) {
  let reportObject = {};
  let count = {};
  for (reportPerson of report) {
    let [reporter, reported] = reportPerson.split(' ');
    if (reportObject[reported] === undefined) {
      reportObject[reported] = new Set();
    }
    reportObject[reported].add(reporter);
  }

  for (let reportedId of Object.keys(reportObject)) {
    if (reportObject[reportedId].size >= k) {
      for (const uid of reportObject[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }
  return answer;
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi', 'apeach muzi'],
  2
);
