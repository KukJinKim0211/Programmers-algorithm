function solution(n) {
  var answer = 0;
  let memo = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }
  return memo[n] % 1234567;
}

console.log(solution(45));
