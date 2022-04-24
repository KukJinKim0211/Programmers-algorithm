// 체스판 다시 칠하기
let data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
const [N, M] = data[0].split(/\s/); // 체스판의 가로, 세로
data.shift();   // 체스판관련 데이터만 뽑기
// 체스판 색칠 
const whiteBlackFirst = function (x, y, color1, color2) {
  let changeCount = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        changeCount = data[i][j] === color1 ? changeCount + 1 : changeCount;
      } else {
        changeCount = data[i][j] === color2 ? changeCount + 1 : changeCount;
      }
    }
  }
  return changeCount;
}
let answer = 0;
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    if (i == 0 && j == 0) answer = Math.min(whiteBlackFirst(i, j, 'W', 'B'), whiteBlackFirst(i, j, 'B', 'W'));
    else {
      answer = Math.min(answer, Math.min(whiteBlackFirst(i, j, 'W', 'B'), whiteBlackFirst(i, j, 'B', 'W')));
    }
  }
}
console.log(answer);