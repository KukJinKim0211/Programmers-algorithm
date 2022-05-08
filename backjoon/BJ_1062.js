// 가르침 [시간초과 미완]
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const [N, K] = data.shift().split(/\s/).map(v => +v);
// 디폴트 5글자 제외하고 가르칠 수 있는 문자 갯수
const M = K - 5;
// 배울 수 있는 글자
const defaultLetters = ['a', 'c', 'n', 't', 'i'];
const possible = ['b', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];
const alpabet = [];
const array = [];
let maxValue = 0;
if (M < 0)
  console.log('0');
else {
  data.forEach(v => array.push(v.split('').splice(4, v.length - 8)));
  combi(0, 0, M);
  console.log(maxValue);
}

function combi(index, count, max) {
  if (count === max) {
    let cnt = 0;
    const letters = [...defaultLetters, ...alpabet];
    for (let i = 0; i < array.length; i++) {
      let exist = true;
      for (let j = 0; j < array[i].length; j++) {
        if (!letters.includes(array[i][j])) {
          exist = false;
          break;
        }
      }
      if (exist)
        cnt++;
    }
    maxValue = Math.max(maxValue, cnt);
    return;
  }
  // 조합을 이용해서 문자열을 다 찾아냄
  for (let i = index; i < possible.length; i++) {
    alpabet.push(possible[i]);
    combi(index + 1, count + 1, max);
    alpabet.pop();
  }
}