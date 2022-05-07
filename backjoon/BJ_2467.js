// 용액
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const N = Number(data.shift()); // 용액의 갯수
const array = data[0].split(/\s/).map(v => +v);
let sttPoint = 0;
let endPoint = N - 1;
let minSum = array[sttPoint] + array[endPoint];
let answer = [];
let minNum = array[sttPoint];
let maxNum = array[endPoint];
while (true) {
  if (sttPoint >= endPoint)
    break;

  let sum = array[sttPoint] + array[endPoint];
  if (sum === 0) {  // 0일시 바로출력
    minNum = array[sttPoint];
    maxNum = array[endPoint];
    break;
  } else {
    if (Math.abs(minSum) > Math.abs(sum)) {   // 현재까지 기록하고 있던 합보다 지금 계산한 합이 0에 가까울 시
      minSum = sum;
      minNum = array[sttPoint];
      maxNum = array[endPoint];
    }

    if (sum > 0) {  // 합이 0보다 클 시, 산성 용액의 인덱스를 낮춰줌
      endPoint--;
    } else {  // 합이 0보다 작을 시, 염기성 용액의 인덱스를 높여줌
      sttPoint++;
    }
  }
}
console.log(minNum, maxNum);