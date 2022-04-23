// 숫자의 합
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
let sum = 0;
const caseCount = Number(data[0]);
for (let i = 0; i < caseCount; i++) {
  sum += parseInt(data[1].charAt(i));
}
console.log(sum);