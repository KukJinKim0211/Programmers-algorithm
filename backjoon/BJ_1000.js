
// A + B
// file System Module을 불러온다
const data = require('fs');
const [a, b] = data.readFileSync('/dev/stdin').toString().split(/\s/).map(v => +v);
console.log(a + b);