// 단어의 개수
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\s/);
const dataCount = data.length;
let answer = 0;
for (let i = 0; i < dataCount; i++) {
  if (data[i] != '')
    answer++;
}
console.log(answer);