function solution(s) {
  var answer = "";
  const array = s.split(" ").map((v) => +v);
  return `${Math.min(...array)} ${Math.max(...array)}`;
}

solution("1 2 3 4");
