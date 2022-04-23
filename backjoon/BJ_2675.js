// 문자열 반복
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
const dataCount = parseInt(data[0]);
let answer = '';
for (let i = 1; i <= dataCount; i++) {
  const repeatCount = data[i].split(' ')[0];
  const repeatData = data[i].split(' ')[1];
  const repeatDataCount = repeatData.length;
  for (let j = 0; j < repeatDataCount; j++) {
    for (let k = 0; k < repeatCount; k++) {
      answer += repeatData[j];
    }
  }
  answer += '\n';
}
console.log(answer);