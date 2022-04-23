// 단어 공부
const data = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();
let array = new Array(26).fill(0);    // 알파벳의 갯수를 카운트할 배열
const dataCount = data.length;
for (let i = 0; i < dataCount; i++) { // 아스키코드를 이용해 각 자리의 카운트를 계산
  array[data.charCodeAt(i) - 97]++;
}
const maxCount = Math.max(...array);        // 배열의 최대값을 찾음
const maxIndex = array.indexOf(maxCount);   // 배열의 최대값을 가지고 있는 인덱스를 찾음
let answer = String.fromCharCode(maxIndex + 65);
for (let i = 0; i < 26; i++) {    // 최대값이 중복되었는지 확인
  if (maxCount === array[i] && maxIndex != i)
    answer = '?';
}
console.log(answer);
