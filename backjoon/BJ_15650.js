// N과 M(2)
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(v => +v);
const array = [];
combi(1, 0, M);
function combi(index, count, max) {
  if (count === max) {
    console.log(array.join(' '));
    return;
  }

  for (let i = index; i <= N; i++) {
    array.push(i);
    combi(i + 1, count + 1, max);
    array.pop();
  }
}