// A + B - 7
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
for (let i = 1; i <= data[0]; i++) {
  const num = data[i].split(/\s/);
  console.log(`Case #${i}: ${parseInt(num[0]) + parseInt(num[1])}`);
}