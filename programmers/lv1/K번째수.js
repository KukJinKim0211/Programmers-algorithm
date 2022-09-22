function solution(array, commands) {
  var answer = [];
  for (let a = 0; a < commands.length; a++) {
    const [i, j, k] = commands[a];
    const newArray = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(newArray[k - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ],
);
