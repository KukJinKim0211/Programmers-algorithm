// (중략)
const data = require('fs').readFileSync('dev/stdin').toString().trim().split(/\n/);
const length = Number(data.shift());
if (length <= 25) {
  console.log(data[0]);
}
else {
  const string = data[0].slice(11, data[0].length - 11);
  if (string.indexOf('.') === string.length - 1 || string.indexOf('.') === -1) {
    console.log(`${data[0].slice(0, 11)}...${data[0].slice(data[0].length - 11, data[0].length)}`);
  } else {
    console.log(`${data[0].slice(0, 9)}......${data[0].slice(data[0].length - 10, data[0].length)}`);
  }
}