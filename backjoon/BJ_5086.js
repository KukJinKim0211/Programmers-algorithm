// 배수와 약수
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
data.pop();
const data2 = [];
data.forEach(v => {
  data2.push(v.split(/\s/).map(v1 => +v1));
})
let answer = '';
for (let i = 0; i < data2.length; i++) {
  const [a1, a2] = data2[i];
  if (a2 % a1 === 0)
    answer += 'factor\n';
  else if (a1 % a2 === 0)
    answer += 'multiple\n';
  else
    answer += 'neither\n';
}
console.log(answer);