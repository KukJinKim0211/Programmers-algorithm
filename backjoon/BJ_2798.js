// 블랙잭
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
const dataCount = Number(data[0].split(/\s/)[0]); // 숫자의 갯수
const dstPoint = Number(data[0].split(/\s/)[1]);  // 목표 점수
const array = data[1].split(/\s/).map(v => +v);   // 각 점수들 정수형으로 형변환 후, 배열에 저장
let maxNum = 0;
for (let i = 0; i < dataCount - 2; i++) {
  for (let j = i + 1; j < dataCount - 1; j++) {
    for (let k = j + 1; k < dataCount; k++) {
      const num = array[i] + array[j] + array[k];
      if (num <= dstPoint)
        maxNum = Math.max(maxNum, array[i] + array[j] + array[k]);
    }
  }
}
console.log(maxNum);