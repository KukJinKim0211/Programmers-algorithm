function solution(lottos, win_nums) {
  var answer = [];
  let zeroCount = 0;    // 0이 몇개인지 저장
  let winCount = 0;     // 숫자를 맞춘 개수가 몇개인지 저장

  for (let i = 0; i < 6; i++) {
    if (lottos[i] === 0) {    // 번호가 0인 경우
      zeroCount++;
      continue;
    }

    for (let j = 0; j < 6; j++) {     // 선택한 번호와 당첨 번호를 맞는지 체크
      if (lottos[i] === win_nums[j])
        winCount++;
    }
  }
  answer[0] = (winCount + zeroCount) >= 2 ? 7 - (winCount + zeroCount) : 6;
  answer[1] = winCount >= 2 ? 7 - winCount : 6;
  return answer;
}