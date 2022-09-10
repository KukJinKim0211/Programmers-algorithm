function solution(price, money, count) {
  var answer = money;
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return answer - total < 0 ? total - answer : 0;
}
