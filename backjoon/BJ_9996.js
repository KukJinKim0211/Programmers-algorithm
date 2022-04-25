// 한국이 그리울땐 서버에 접속하지
const data = require('fs').readFileSync('example.txt').toString().split(/\n/);
const dataCount = data.shift();
const [a, b] = data.shift().split('*');
for (let i = 0; i < dataCount; i++) {
  if (data[i].length < a.length + b.length) {
    console.log("NE");
    continue;
  }
  if (a !== data[i].slice(0, a.length)) {
    console.log("NE");
    continue;
  }
  if (b !== data[i].slice(data[i].length - b.length, data[i].length)) {
    console.log("NE");
    continue;
  }
  console.log("DA");
}
