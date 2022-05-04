const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/).map(v => +v);
let answer = 0;
data.forEach(v => answer += v < 40 ? 40 : v);
console.log(answer / 5);