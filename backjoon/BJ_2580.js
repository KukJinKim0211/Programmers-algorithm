// 스토쿠
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const sdoqu = [];
data.forEach(v => sdoqu.push(v.split(/\s/).map(v => +v)));
let queue = [];
let complete = false;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (sdoqu[i][j] === 0)
      queue.push([i, j]);
  }
}
backTracking(0);
function backTracking(idx) {
  if (complete) return;
  if (idx === queue.length) {
    sdoqu.forEach(v => console.log(v.join(' ')));
    complete = true;
    return;
  }

  for (let i = 1; i <= 9; i++) {
    const x = queue[idx][0];
    const y = queue[idx][1];
    if (!check(x, y, i)) continue;
    sdoqu[x][y] = i;
    backTracking(idx + 1);
    sdoqu[x][y] = 0;
  }
}

function check(x, y, num) {
  // 가로 체크
  for (let i = 0; i < 9; i++) {
    if (sdoqu[x][i] === num)
      return false;
  }
  // 세로 체크
  for (let i = 0; i < 9; i++) {
    if (sdoqu[i][y] === num)
      return false;
  }
  // 사각형 체크
  const xx = parseInt(x / 3);
  const yy = parseInt(y / 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sdoqu[(xx * 3) + i][(yy * 3) + j] === num)
        return false;
    }
  }

  return true;
}