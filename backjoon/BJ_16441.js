// 아기돼지와 늑대 [미완]
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const [N, M] = data.shift().split(/\s/).map(v => +v);
const array = [];   // 고리분지 배열
const queue = [];   // bfs 사용할 큐
const visit = Array.from(Array(N), () => Array(M).fill(false));   // 방문처리용 N x M 배열 생성
// 사방탐색용 배열
const delx = [-1, 0, 1, 0];
const dely = [0, 1, 0, -1];
data.forEach((el, index) => {
  // 늑대가 있는 위치를 queue에 저장
  if (el.indexOf('W') !== -1)
    queue.push(new Array(index, el.indexOf('W')))
  // 입력받은 데이터를 2차원 배열로 포맷변경
  array.push(el.split(''))
});
// 늑대가 처음 있는 위치를 방문처리
queue.forEach(el => visit[el[0]][el[1]] = true);
function bfs() {
  // 늑대의 지나간 
  const copyArray = array.map(v => [...v]);
  while (queue.length != 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let dx = x + delx[i];
      let dy = y + dely[i];
      if (visit[dx][dy]) continue;  // 방문한곳일시
      if (array[dx][dy] === '+') {  // 빙판길
        if (dstCheck(dx, dy, i)) continue;
        while (array[dx][dy] === '+') {   // 빙판길이 아닌 길이 나올 때 까지 미끄러짐
          //visit[dx][dy] = true;   // 방문처리
          // 다음 위치로 이동
          dx += delx[i];
          dy += dely[i];
        }
        if (array[dx][dy] === '#') {    // 빙판에서 미끄러진 후에 산에 위치가 잡힐 경우, 한단계 전 좌표로 이동
          dx -= delx[i];
          dy -= dely[i];
        } else {  // 초원에 안착했을 경우, 그 위치도 방문처리
          visit[dx][dy] = true;
        }
        queue.push(new Array(dx, dy));
      } else if (array[dx][dy] === '.') { // 초원
        visit[dx][dy] = true;
        queue.push(new Array(dx, dy));
      }
    }
  }
}
bfs();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visit[i][j] && (array[i][j] === '.'))
      array[i][j] = 'P';
  }
}
// 빙판길의 끝점의 방문 체크
function dstCheck(x, y, delIndex) {
  while (array[x][y] === '+') {
    x += delx[delIndex];
    y += dely[delIndex];
  }
  return visit[x][y];
}
array.map(v => console.log(v.join('')));