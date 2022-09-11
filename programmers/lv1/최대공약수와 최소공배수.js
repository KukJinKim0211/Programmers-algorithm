function solution(n, m) {
  let max = 0;
  let min = 0;
  for (let i = Math.min(n, m); i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      max = i;
      break;
    }
  }
  for (let i = Math.max(n, m); i <= 1000000; i++) {
    if (i % n === 0 && i % m === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

solution(3, 12);
