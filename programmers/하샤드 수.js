function solution(x) {
  var answer = true;

  let array = x
    .toString()
    .split("")
    .map((v) => +v);
  const sum = array.reduce((a, b) => a + b);

  return x % sum === 0 ? true : false;
}

solution(2032);
