// 알파벳 찾기
const data = require('fs').readFileSync('/dev/stdin').toString().split('');
let array = [];    // 알파벳 관리 배열
for (let i = 97; i <= 122; i++) {
  array.push(data.indexOf(String.fromCharCode(i)));
}
// 배열의 요소에 공백을 추가하면서 문자열로 합치기
console.log(array.join(' '));