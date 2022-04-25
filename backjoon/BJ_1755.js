// 숫자놀이
const [M, N] = require('fs').readFileSync('example.txt').toString().split(/\s/).map(v => +v);
const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const result = [];
for (let i = M; i <= N; i++) {
  if (i >= 10) {    // 두자리수
    let string = `${num[parseInt(i / 10)]} ${num[i % 10]}`;
    result.push(string);
  } else {  // 한자리수
    result.push(num[i]);
  }
}
result.sort();
const answer = result.map(v => {
  if (v.indexOf(' ') === -1)
    return num.indexOf(v);
  else {
    return num.indexOf(v.split(' ')[0]) * 10 + num.indexOf(v.split(' ')[1]);
  }
})
const leng = parseInt(answer.length / 10);
for (let i = 0; i <= leng; i++) {
  if (i === leng)
    console.log(answer.splice(0, answer.length).join(' '));
  else
    console.log(answer.splice(0, 10).join(' '));
}