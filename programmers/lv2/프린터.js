function solution(priorities, location) {
  var answer = 0;
  let max = Math.max(...priorities);
  const priorityArray = [];
  priorities.forEach((priority, i) =>
    priorityArray.push({ value: priority, idx: i }),
  );
  while (priorityArray[0]) {
    const data = priorityArray.shift();
    if (data.value === max) {
      answer++;
      if (data.idx === location) return answer;
      max = Math.max(...priorityArray.map((v) => v.value));
    } else {
      priorityArray.push(data);
    }
  }

  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
