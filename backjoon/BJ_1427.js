// 소트 인사이드
const data = require('fs').readFileSync('/dev/stdin').toString().trim().split("");
console.log(data.sort((a, b) => b - a).join(""));