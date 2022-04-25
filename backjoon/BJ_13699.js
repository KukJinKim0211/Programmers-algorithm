// 점화식
const data = Number(require('fs').readFileSync('/dev/stdin').toString());
const array = new Array(36);
array.fill(BigInt(0));
array[0] = 1n;
array[1] = 1n;
dp();
console.log(array[data].toString());

function dp() {
  for (let i = 2; i < 36; i++) {
    for (let j = 0; j < i; j++) {
      array[i] += BigInt(array[j]) * BigInt(array[i - 1 - j]);
    }
  }
}