function visitedNode(computer, visited, node) {
  visited[node] = true;

  for (let idx = 0; idx < computer[node].length; idx++) {
    if (computer[node][idx] && !visited[idx]) {
      visitedNode(computer, visited, idx);
    }
  }
}

function solution(computer) {
  const N = computer.length;
  const visited = Array(N).fill(false);
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visitedNode(computer, visited, i);
      answer++;
    }
  }
  console.log(answer);
}

solution([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
