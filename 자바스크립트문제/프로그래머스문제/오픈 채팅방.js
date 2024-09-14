function solution(recode) {
  let userTable = {};
  let result = [];
  for (const user of recode) {
    const [action, uid, userName] = user.split(' ');
    switch (action) {
      case 'Enter':
        userTable[uid] = userName;
        break;

      case 'Change':
        userTable[uid] = userName;
        break;
    }
  }
  for (const user of recode) {
    const [action, uid, userName] = user.split(' ');
    switch (action) {
      case 'Enter':
        result.push(`${userTable[uid]}님이 들어왔습니다.`);
        break;
      case 'Leave':
        result.push(`${userTable[uid]}님이 나갔습니다.`);
        break;
    }
  }
  return result;
}

solution([
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
]);
