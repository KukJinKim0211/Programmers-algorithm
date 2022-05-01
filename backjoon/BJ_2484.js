// 주사위 네 개
const [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
let maxMoney = 0;  // 최대상금
data.forEach(v => {
  const dice = v.split(/\s/).map(v => +v);
  const diceArr = new Array(7).fill(0);
  dice.forEach(v1 => {
    diceArr[v1]++;
  });
  let money = check(diceArr);
  maxMoney = Math.max(money, maxMoney);
});

console.log(maxMoney);

function check(array) {
  // 같은 눈이 4개가 나오면 50,000원+(같은 눈)×5,000원의 상금을 받게 된다. 
  if (array.indexOf(4) !== -1)
    return 50000 + array.indexOf(4) * 5000;
  // 같은 눈이 3개만 나오면 10,000원+(3개가 나온 눈)×1,000원의 상금을 받게 된다. 
  else if (array.indexOf(3) !== -1)
    return 10000 + array.indexOf(3) * 1000;
  // 같은 눈 두개를 가진 경우
  else if (array.indexOf(2) !== -1) {
    // 같은 눈이 2개씩 두 쌍이 나오는 경우에는 2,000원+(2개가 나온 눈)×500원+(또 다른 2개가 나온 눈)×500원의 상금을 받게 된다.
    if (array.indexOf(1) === -1) {
      let money = 2000;
      for (let i = 1; i <= 6; i++) {
        if (array[i] == 2)
          money += i * 500;
      }
      return money;
    }
    // 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
    else {
      return 1000 + array.indexOf(2) * 100;
    }
  }
  // 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
  else {
    for (let i = 6; i > 0; i--) {
      if (array[i] == 1) {
        return i * 100;
      }
    }
  }
}