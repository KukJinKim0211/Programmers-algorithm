// 팩토리얼
const data = Number(require('fs').readFileSync('/dev/stdin').toString());
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return factorial(n - 1) * n;
}
console.log(factorial(data));