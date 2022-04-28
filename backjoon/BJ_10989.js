// 수 정렬하기 3(카운팅정렬해도 메모리초과..)
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/).map(v => +v);
data.shift();
const array = new Array(10001).fill(0);
for (let i = 0; i < data.length; i++) {
  array[data[i]]++;
}
const answer = [];
for (let i = 1; i < 10001; i++) {
  while (array[i] > 0) {
    answer.push(i);
    array[i]--;
  }
}
console.log(answer.join("\n"));