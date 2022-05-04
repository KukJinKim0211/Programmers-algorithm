// 행렬 덧셈
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const [N, M] = data.shift().split(/\s/).map(v => +v);

const array1 = [];
const array2 = [];
for (let i = 0; i < N; i++) {
  const array = data.shift().split(/\s/).map(v => +v);
  array1.push(array);
}
for (let i = 0; i < N; i++) {
  const array = data.shift().split(/\s/).map(v => +v);
  array2.push(array);
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    array2[i][j] += array1[i][j];
  }
}
for (let i = 0; i < N; i++) {
  console.log(array2[i].join(' '));
}