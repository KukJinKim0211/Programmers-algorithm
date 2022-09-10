function solution(a, b) {
  var answer = 0;
  a.forEach((e, i) => (answer += a[i] * b[i]));
  return answer;
}
