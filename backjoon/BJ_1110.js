// 더하기 사이클
const data = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let num = data;
let count = 0;
while (true) {
  num = ((num % 10) * 10) + ((parseInt(num / 10) + (num % 10)) % 10);
  count++;
  if (num === data)
    break;
}
console.log(count);