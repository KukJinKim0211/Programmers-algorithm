// 두 배 더하기
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
const dataCount = Number(data.shift());
const array = data[0].split(/\s/).map(v => +v);
const result = new Array(dataCount);
const answer = function () {
  let maxMul = 0;
  let plus = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let plusOneCount = 0;
    let mulTwoCount = 0;
    while (num > 0) {
      if (num % 2 === 0) {
        num /= 2;
        mulTwoCount++;
      }
      else {
        num--;
        plusOneCount++;
      }
    }
    maxMul = Math.max(maxMul, mulTwoCount);
    plus += plusOneCount;
  }
  //return result;
  return plus + maxMul;
}
console.log(answer());