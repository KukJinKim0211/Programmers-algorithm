// 리모컨
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
// 목적하는 채널
const channel = Number(data.shift());
// 고장난 버튼의 갯수
const xCount = Number(data.shift());
const impossible = xCount > 0 ? data.shift().split(/\s/).map(v => +v) : [];

function check(number) {
  const length = number.toString().length;
  for (let i = 0; i < length; i++) {
    const div = number % 10;
    number = parseInt(number / 10);
    if (impossible.includes(div))
      return false;
  }
  return true;
}
// +- 이동
const minValue1 = Math.abs(channel - 100);

// 채널 버튼으로 이동 후 +- 이동
let minValue2 = Number.MAX_SAFE_INTEGER;
for (let i = 0; i <= 999999; i++) {
  if (check(i)) {
    let count = i.toString().length + Math.abs(channel - i);
    if (minValue2 > count) {
      minValue2 = count;
    }
  }
}
console.log(Math.min(minValue1, minValue2));