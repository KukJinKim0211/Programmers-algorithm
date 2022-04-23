// 최소, 최대
const data = require('fs').readFileSync('example.txt').toString().split(/\n/);
const array = data[1].split(/\s/).map(Number);
const min = Math.min(...array);
const max = Math.max(...array);
console.log(`${min} ${max}`);