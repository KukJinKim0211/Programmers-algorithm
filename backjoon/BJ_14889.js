// 스타트와 링크
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const N = Number(data.shift());
const defaultArray = [];
for (let i = 1; i <= N; i++) {
  defaultArray.push(i);
}
let answer = Number.MAX_SAFE_INTEGER;
const map = [];
for (let i = 0; i < N; i++) {
  map.push(data[i].split(/\s/).map(v => +v));
}

permu(1, 0, []);
console.log(answer);

function permu(idx, count, array) {
  if (count === parseInt(N / 2)) {
    let i1 = cal(array);
    const array2 = defaultArray.filter(v => !array.includes(v));
    let i2 = cal(array2);
    answer = Math.min(answer, Math.abs(i1 - i2));
    return;
  }

  for (let i = idx; i <= N; i++) {
    array.push(i);
    permu(i + 1, count + 1, array);
    array.pop();
  }
}

function cal(array) {
  const arr = array.map(v => v - 1);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += map[arr[i]][arr[j]] + map[arr[j]][arr[i]];
    }
  }
  return sum;
}