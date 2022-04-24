// 영화감독 숍
let data = Number(require('fs').readFileSync('/dev/stdin').toString());
let num = 665;
while (data > 0) {
  num++;
  const stringNum = num.toString();
  for (let i = 0; i < stringNum.length - 2; i++) {
    if (stringNum.charAt(i) === '6' && stringNum.charAt(i + 1) === '6' && stringNum.charAt(i + 2) === '6') {
      data--;
      break;
    }
  }
}
console.log(num);