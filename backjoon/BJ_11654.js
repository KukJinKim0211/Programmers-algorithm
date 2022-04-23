// 아스키코드
const data = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(data.charCodeAt());