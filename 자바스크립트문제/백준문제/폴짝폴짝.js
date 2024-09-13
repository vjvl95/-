const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function processInput() {
  const N = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);
  const [a, b] = input[2].split(' ').map(Number);

  console.log(bfs(N, arr, a - 1, b - 1));
}

function bfs(N, arr, start, goal) {
  // Initialize visited array with -1 (unvisited)
  const visited = new Array(N).fill(-1);

  // Initialize queue
  const queue = [];
  queue.push(start);
  visited[start] = 0;

  while (queue.length > 0) {
    const now = queue.shift();

    // Check right direction
    const rightStep = arr[now];
    for (let i = now; i < N; i += rightStep) {
      if (visited[i] === -1) {
        queue.push(i);
        visited[i] = visited[now] + 1;
        if (i === goal) {
          return visited[i];
        }
      }
    }

    // Check left direction
    const leftStep = arr[now];
    for (let i = now; i >= 0; i -= leftStep) {
      if (visited[i] === -1) {
        queue.push(i);
        visited[i] = visited[now] + 1;
        if (i === goal) {
          return visited[i];
        }
      }
    }
  }

  return -1;
}

// Call the function to process input and start BFS
processInput();
