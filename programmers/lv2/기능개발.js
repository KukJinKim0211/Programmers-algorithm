function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i]),
  );

  let maxDay = days[0];
  let count = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] > maxDay) {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    answer.push(count);
  }
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
