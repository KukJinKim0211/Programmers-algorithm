const data = require('fs').readFileSync('example.txt').toString().split(' ');
let a = data[0];
let b = data[1];
console.log(a);
console.log(b);