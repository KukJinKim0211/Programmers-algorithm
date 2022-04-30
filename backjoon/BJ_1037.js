// 약수
const [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const array = data[0].split(/\s/).sort((a, b) => a - b).map(v => +v);
const small = Math.min(...array);
const big = Math.max(...array);
console.log(small * big);