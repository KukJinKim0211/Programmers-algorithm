// 택배
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
// N: 마을의 수, C: 트럭의 용량
const [N, C] = data.shift().split(/\s/).map(v => +v);
// M : 박스의 갯수
const M = Number(data.shift());
const weight = Array(N + 1).fill(C);
const send = data
  .map(v => v.split(/\s/)    // space 단위로 자르기
    .map(v => +v))               // number 형변환
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let answer = 0;
for (let v of send) {
  let wei = 10000;
  const [stt, end, vWeight] = v;
  // 옮길 수 있는 가장 최대값을 구하기
  for (let i = stt; i < end; i++) {
    wei = Math.min(wei, weight[i]);
  }

  wei = wei > vWeight ? vWeight : wei;
  for (let i = stt; i < end; i++) {
    weight[i] -= wei;
  }
  answer += wei;
}
console.log(answer);