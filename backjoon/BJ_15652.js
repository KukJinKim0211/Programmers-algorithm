// N과 M(4)
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(v => +v);
let answer = '';
function backTracking(idx, count, array) {
  if (count === M) {
    answer += `${array.join(' ')}\n`;
    return;
  }

  for (let i = idx; i <= N; i++) {
    array.push(i);
    backTracking(i, count + 1, array);
    array.pop();
  }
}
backTracking(1, 0, []);
console.log(answer);