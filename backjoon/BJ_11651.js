// 좌표 정렬하기
const [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const data2 = [];
data.forEach(v => {
  data2.push(v.split(/\s/).map(v1 => +v1));
});
let answer = '';
data2.sort((a, b) => {
  if (a[1] === b[1])
    return a[0] - b[0];
  else
    return a[1] - b[1];
}).forEach(v => answer += `${v[0]} ${v[1]}\n`);
console.log(answer);