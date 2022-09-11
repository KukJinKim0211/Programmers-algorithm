function solution(clothes) {
  var answer = 1;
  const map = new Map();

  for (cloth of clothes) {
    map.set(cloth[1], (map.get(cloth[1]) || 1) + 1);
  }
  for (element of map) {
    answer *= element[1];
  }
  return answer - 1;
}
