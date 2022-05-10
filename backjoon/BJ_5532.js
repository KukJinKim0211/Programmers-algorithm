// 방학 숙제
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const L = Number(data.shift());
const A = Number(data.shift());
const B = Number(data.shift());
const C = Number(data.shift());
const D = Number(data.shift());
let kor = A % C === 0 ? A / C : parseInt(A / C) + 1;
let math = B % D === 0 ? B / D : parseInt(B / D) + 1;
console.log((L - Math.max(kor, math)));