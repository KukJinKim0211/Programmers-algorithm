// N과 M(1)
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(v => +v);
const visited = new Array(N + 1);
const array = [];
function permu(count) {
  if (count === M) {
    console.log(array.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i] === true) continue;
    array.push(i);
    visited[i] = true;
    permu(count + 1);
    array.pop();
    visited[i] = false;
  }
}

permu(0);