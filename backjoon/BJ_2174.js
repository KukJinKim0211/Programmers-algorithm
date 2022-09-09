const { exit } = require("process");

// 로봇 시뮬레이션
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const [A, B] = data.shift().split(/\s/).map(v => +v);
const [N, M] = data.shift().split(/\s/).map(v => +v);
const array = new Array(B).fill(0).map(() => new Array(A).fill(0));
// 방향 저장. 0:N  1:E  2:S   3:W
const del = [];
// 델타탐색용
const delx = [-1, 0, 1, 0];
const dely = [0, 1, 0, -1];
// 2차원 배열 생성, 로봇 위치 저장, 방향 저장
for (let i = 0; i < N; i++) {
  const [x, y, bang] = data.shift().split(/\s/);
  array[B - Number(y)][Number(x) - 1] = i + 1;
  if (bang === 'N')
    del.push(0);
  else if (bang === 'E')
    del.push(1);
  else if (bang === 'S')
    del.push(2);
  else if (bang === 'W')
    del.push(3);
}
// 로봇의 명령 수행
for (let i = 0; i < M; i++) {
  const [robot, order, ordercnt] = data.shift().split(/\s/);
  for (let i = 0; i < Number(ordercnt); i++) {
    const [x, y] = findPosition(Number(robot));
    if (order === 'L' || order === 'R') {   //  방향 회전 명령
      rotateDirection(Number(robot), order);
    } else {                      // 방향으로 한칸 앞으로 이동
      const dx = x + delx[del[Number(robot) - 1]];
      const dy = y + dely[del[Number(robot) - 1]];
      if (dx < 0 || dy < 0 || dx >= B || dy >= A) {
        console.log(`Robot ${robot} crashes into the wall`);
        exit();
      } else if (array[dx][dy] != 0) {
        console.log(`Robot ${robot} crashes into robot ${array[dx][dy]}`);
        exit();
      }
      array[dx][dy] = array[x][y];
      array[x][y] = 0;
    }
  }
}
console.log('OK');
// 입력된 로봇 번호의 x, y포지션 return
function findPosition(robotNum) {
  for (let i = 0; i < B; i++) {
    for (let j = 0; j < A; j++) {
      if (array[i][j] === robotNum)
        return [i, j];
    }
  }
}

// 방향 회전 동작부
function rotateDirection(robot, order) {
  if (order === 'L') {  // 왼쪽으로 90도 회전
    del[robot - 1] = del[robot - 1] === 0 ? 3 : del[robot - 1] - 1;
  } else {                  // 오른쪽으로 90도 회전
    del[robot - 1] = del[robot - 1] === 3 ? 0 : del[robot - 1] + 1;
  }
}