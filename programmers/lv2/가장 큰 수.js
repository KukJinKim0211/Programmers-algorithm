function solution(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => a + b - (b + a))
    .reverse()
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 9]));
