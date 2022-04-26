// 두 수의 합
const readLine = require('readliine');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

const data = require('fs').readFileSync('example.txt').toString().split(/\n/);
const n = Number(data.shift());
const x = Number(data.pop());
const array = data[0].split(/\s/).map(v => +v).sort((a, b) => a - b);
let startPoint = 0;
let endPoint = n - 1;
let answer = 0;
while (startPoint != endPoint) {
  const num = array[startPoint] + array[endPoint];
  if (num === x) {
    answer++;
    startPoint++;
  }
  else if (num < x)
    startPoint++;
  else
    endPoint--;
}
console.log(answer);
