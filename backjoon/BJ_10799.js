// 쇠막대기
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const stack = [];
let answer = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === '(')
    stack.push(data[i]);
  else {
    if (data[i - 1] === '(') {// 레이저
      stack.pop();
      answer += stack.length;
    } else {// 쇠막대기끝부분
      stack.pop();
      answer++;
    }
  }
}
console.log(answer);