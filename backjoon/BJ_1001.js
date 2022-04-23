// A - B
const data = require('fs');
const [a, b] = data.readFileSync('/dev/stdin').toString().split(/\s/);
console.log(parseInt(a) - parseInt(b));