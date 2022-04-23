// 피보나치 수 5
const data = Number(require('fs').readFileSync('/dev/stdin').toString());
function pibo(n) {
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;
  return pibo(n - 2) + pibo(n - 1);
}
console.log(pibo(data));