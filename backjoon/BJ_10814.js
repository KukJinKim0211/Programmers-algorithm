// 나이 순 정렬
const [N, ...data] = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const data2 = [];
data.forEach(v => {
  data2.push(v.split(/\s/));
})
let answer = '';
data2.sort((a, b) => {
  if (parseInt(a[0]) === parseInt(b[0]))
    return 0;
  else
    return parseInt(a[0]) - parseInt(b[0]);
}).forEach(v => answer += `${v[0]} ${v[1]}\n`);
console.log(answer);