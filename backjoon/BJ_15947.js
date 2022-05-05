// 아기석환 뚜루루뚜루
const sing = `baby sukhwan tururu turu
very cute tururu turu
in bed tururu turu
baby sukhwan`.split(/\s/);
const data = Number(require('fs').readFileSync('example.txt').toString().trim());
const length = sing.length;
const tururuArray = [3, 4, 7, 8, 11, 12]; // 홀수는 tururu 짝수는 turu
let answer = '';
if (tururuArray.includes(data % length)) {    // tururu일시
  let num = parseInt(data / length);
  if ((data % length) % 2 === 1) { // 홀수일 경우. tururu case
    if (num >= 3) { // ru가 5개 이상일 시
      answer = 'tu+ru*' + (num + 2);
    } else {
      answer = 'tururu';
      for (let i = 0; i < num; i++) {
        answer += 'ru';
      }
    }
  }
  else { // 짝수일 경우. turu case
    if (num >= 4) { // ru가 5개 이상일 시
      answer = 'tu+ru*' + (num + 1);
    } else {
      answer = 'turu';
      for (let i = 0; i < num; i++) {
        answer += 'ru';
      }
    }
  }
} else {
  answer = sing[(data - 1) % length];
}
console.log(answer);
