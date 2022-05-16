// 로또
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const testcase = data.length;
let array = []
for (let test = 0; test < testcase - 1; test++) {
  array = data.shift().split(/\s/).map(v => +v);
  array.shift();
  permu(0, []);
  console.log();
}

function permu(idx, arr) {
  if (arr.length === 6) {
    console.log(arr.join(' '));
    return;
  }

  for (let i = idx; i < array.length; i++) {
    arr.push(array[i]);
    permu(i + 1, arr);
    arr.pop();
  }
}