function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((e) => e % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
