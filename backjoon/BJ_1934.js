// 최소공배수
const [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const numData = data.map(v => v.split(/\s/).map(v1 => +v1).sort((a, b) => b - a));
let answer = '';
numData.forEach(v => {
  let a = v[0];
  let b = v[1];
  let c = 0;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
  answer += `${(v[0] * v[1]) / a}\n`;
});
console.log(answer);