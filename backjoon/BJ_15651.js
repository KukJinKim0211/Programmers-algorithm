// N과 M(3)
const [N, M] = require('fs').readFileSync('example.txt').toString().trim().split(/\s/).map(v => +v);
let answer = '';
function permu(idx, array) {
  if (idx === M) {
    answer += `${array.join(' ')}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    array.push(i);
    permu(idx + 1, array);
    array.pop();
  }
}
permu(0, []);
console.log(answer);