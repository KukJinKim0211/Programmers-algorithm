// 숫자 카드 [미완]
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const N = Number(data.shift());
const nArray = data.shift().split(/\s/).map(v => +v).sort((a, b) => a - b);
const M = Number(data.shift());
const mArray = data.shift().split(/\s/).map(v => +v).sort((a, b) => a - b);
console.log(nArray);
console.log(mArray);
const answer = new Array(M).fill(0);