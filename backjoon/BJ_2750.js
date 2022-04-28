// 수 정렬하기(2750), 수 정렬하기2(2751), 수 정렬하기3(10989)
const [N, ...data] = require('fs').readFileSync('example.txt').toString().trim().split(/\n/).map(v => +v);
console.log(data.sort((a, b) => a - b).join('\n'));