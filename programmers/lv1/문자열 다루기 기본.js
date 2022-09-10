function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    answer = s.split("").every((e) => !isNaN(e));
  } else {
    answer = false;
  }
  return answer;
}

solution("1as234");
