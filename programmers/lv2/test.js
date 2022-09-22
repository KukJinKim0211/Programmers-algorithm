const array = [];

// 배열 기본값 설정
function arrayInit(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  for (let i = 0; i < n; i++) {
    array.push([...arr]);
  }
  array[0][0] = -1;
}

// 좌석 우선순위 설정
function arrayPrioritySet(n) {
  const useSeat = [];
  // 이미 앉은 좌석을 찾아서 배열에 저장
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] === -1) {
        useSeat.push([i, j]);
      }
    }
  }

  // 좌석의 우선순위 설정
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] !== -1) {
        let distance = 100;
        for ([di, dj] of useSeat) {
          distance = Math.min(distance, Math.abs(i - di) + Math.abs(j - dj));
        }
        array[i][j] = distance;
      }
    }
  }
}

function solution(n, k) {
  // 배정한 좌석 카운트
  let count = 1;
  let seat = [];
  // 배열 기본값 설정
  arrayInit(n);

  while (count < k) {
    // 좌석의 우선순위 설정
    arrayPrioritySet(n);

    // 현재 좌석에서의 가장 높은 우선순위 찾기
    const maxPriority = Math.max(...array.flat());
    // 열을 우선으로
    outer: for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        if (array[i][j] === maxPriority) {
          array[i][j] = -1;
          count++;
          seat = [i + 1, j + 1];
          break outer;
        }
      }
    }
  }
  return k === 1 ? [1, 1] : seat;
}

console.log(solution(6, 13));
