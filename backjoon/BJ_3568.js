// iSharp
const data = require('fs').readFileSync('example.txt').toString().trim().split(/\n/);
const vari = ['[', ']', '&', '*'];
let answer = '';
for (let i = 0; i < data.length; i++) {
  const array = data[i].split(/\s/);
  const common = array.shift();
  for (let j = 0; j < array.length; j++) {
    let str = common;
    const variable = array[j].split('');
    variable.pop();
    while (true) {
      let dat = variable.pop();
      if (vari.includes(dat)) {
        if (dat === ']') {
          str += variable.pop() + dat;
          continue;
        }
        str += dat;
      }
      else {
        str += ' ' + variable.join('') + dat;
        break;
      }
    }
    answer += str + ';\n';
  }
}
console.log(answer);