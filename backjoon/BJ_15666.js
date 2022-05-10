// N과 M(12)
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const [N, M] = data.shift().split(/\s/).map(v => +v);
const array = data.shift().split(/\s/).map(v => +v);
array.sort((a, b) => a - b);
let before = [];
let answer = [];
function combi(count, permu) {
  if (count === M) {
    answer.push(permu.join(' '));
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (permu[permu.length - 1] <= array[i]) {
      permu.push(array[i]);
      combi(count + 1, permu);
      permu.pop();
    }
  }
}
for (let i = 0; i < N; i++) {
  combi(1, [array[i]]);
}
const a = new Set(answer);
answer = [...a];
answer.forEach(v => console.log(v));