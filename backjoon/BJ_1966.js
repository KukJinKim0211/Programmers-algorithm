// 프린터 큐
const input = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const testcase = Number(input.shift());
for (let test = 1; test <= testcase; test++) {
  const [N, M] = input.shift().split(/\s/).map(v => +v);
  const array = input.shift().split(/\s/).map(v => +v);
  let current = M;
  let popCount = 1;
  while (true) {
    const first = array.shift();
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (flag) break;

      if (array[i] > first)
        flag = true;
    }

    if (flag) {   // 첫 원소보다 큰 수가 있을 시, 큐에 다시 저장
      array.push(first);
      if (current === 0)
        current = array.length - 1;
      else
        current--;
    } else {      // 첫 원소가 제일 큰 수일시,  pop count 증가
      if (current === 0) {  // 목적하는 수일시
        console.log(popCount);
        break;
      }
      popCount++;
      current--;
    }

  }
}