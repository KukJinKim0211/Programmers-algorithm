function solution(numbers) {
  var answer = 45;
  numbers.forEach((v) => (answer -= v));
  return answer;
}
