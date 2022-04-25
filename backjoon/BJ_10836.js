// 여왕벌 (미완)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [];

rl.on('line', (line) => {
  data.push(line);
}).on('close', () => {
  const M = Number(data[0].split(/\s/)[0]);
  const N = Number(data[0].split(/\s/)[1]);
  const array = [];
  const sum = new Array(M);
  for (let i = 0; i < M; i++) {
    sum[i] = new Array(M);
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
      sum[i][j] = 1;
    }
  }
  for (let i = 1; i < data.length; i++) {
    todaySum(data[i].split(/\s/).map(v => +v));
  }
  console.log(sum);
  lastSum();
  for (let i = 0; i < M; i++) {
    console.log(sum[i].join(' '));
  }

  function todaySum(today) {
    let zeroCount = today[0];
    let oneCount = today[1];
    let twoCount = today[2];
    for (let i = M - 1; i >= 0; i--) {
      if (twoCount !== 0) {
        sum[0][i] += 2;
        twoCount--;
      }
      else if (oneCount !== 0) {
        sum[0][i] += 1;
        oneCount--;
      } else
        return;
    }
    for (let i = 1; i < M; i++) {
      if (twoCount !== 0) {
        sum[i][0] += 2;
        twoCount--;
      }
      else if (oneCount !== 0) {
        sum[i][0] += 1;
        oneCount--;
      } else
        return;
    }
  }

  function lastSum() {
    for (let i = 1; i < M; i++) {
      sum[1][i] = sum[0][i];
    }
    for (let i = 2; i < M; i++) {
      for (let j = 1; j < M; j++) {
        sum[i][j] = sum[i - 1][j];
      }
    }
  }
});