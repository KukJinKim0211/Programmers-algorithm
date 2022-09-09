function solution(num) {
  var answer = 0;
  let n = num;
  while (n !== 1) {
    answer++;
    if (n % 2 === 0) n /= 2;
    else n = n * 3 + 1;

    if (answer > 500) {
      answer = -1;
      break;
    }
  }
  return answer;
}

solution(626331);
