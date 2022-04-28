// 통계학 (미완))
const [N, ...data] = require('fs').readFileSync('example.txt').toString().trim().split(/\n/).map(v => +v);
// 특정 계산을 하기 위해 정렬된 배열도 미리 생성
const copyData = data.slice();
copyData.sort((a, b) => a - b);
console.log(firstCal(data));
console.log(secondCal(copyData));
console.log(thirdCal(copyData));
console.log(fourthCal(copyData));

// 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
function firstCal(array) {
  let num = 0;
  array.forEach(v => num += v);
  return parseInt(Math.round(num / N));
}

// 중앙값을 출력한다.
function secondCal(array) {
  return array[parseInt(N / 2)];
}

// 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
function thirdCal(array) {
  let maxCnt = 0;     // 가장 높은 빈도 수
  let curCnt = 1;     // 현재 값의 빈도 수
  let num = array[0];    // 가장 출현 빈도가 높은 수. 첫번째 인자로 값을 초기화를 해줌
  let bSame = false;  // 같은수의 중복 여부
  let temp = array[0];  // 이전 값 저장용
  const array2 = array.slice();
  array2.shift();  // 두번째 인자부터 forEach를 실행하기 위해 한자리 시프트
  array2.push(array[0]);
  array2.forEach(v => {
    if (v === temp)
      curCnt++;
    else {
      if (curCnt > maxCnt) {    // 최대 빈도 수 갱신 시
        num = v;
        bSame = false;
        maxCnt = curCnt;
      }
      else if (curCnt === maxCnt) {   // 최대 빈도 수가 같을 시
        if (!bSame) {
          bSame = true;
        }
      }
      curCnt = 1;
    }
    temp = v;
  })
  return num;
}

// N개의 수들 중 최댓값과 최솟값의 차이
function fourthCal(array) {
  return Math.abs(array[0] - array[N - 1]);
}