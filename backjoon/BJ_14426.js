// 접두사 찾기
const data = require('fs').readFileSync('example.txt').toString().split(/\n/);
const [N, M] = data.shift().split(/\s/).map(v => +v);
const string = [];
for (let i = 0; i < N; i++) {
  string.push(data.shift());
}
let answer = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (string[j].indexOf(data[i]) === 0) {
      answer++;
      break;
    }
  }
}
console.log(answer);