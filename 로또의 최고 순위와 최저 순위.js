function solution(lottos, win_nums) {
  var answer = [];
  let zeroCount = 0;
  let winCount = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) {
      zeroCount++;
      continue;
    }

    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j])
        winCount++;
    }
  }
  answer[0] = (winCount + zeroCount) >= 2 ? 7 - (winCount + zeroCount) : 6;
  answer[1] = winCount >= 2 ? 7 - winCount : 6;
  return answer;
}