function solution(arr) {
  var answer = [];
  let min = arr[0];
  arr.forEach((e) => (min = Math.min(min, e)));
  answer = arr.filter((e) => e != min);
  if (answer.length === 0) answer.push(-1);
  return answer;
}

solution([4, 3, 2, 1]);
