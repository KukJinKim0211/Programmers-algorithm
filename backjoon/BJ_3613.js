// Java vs C++
const data = require('fs').readFileSync('example.txt').toString().trim();
let answer = '';
if ((data.indexOf('_') === -1 && !javaCheck(data)) || (data.indexOf('_') != -1 && javaCheck(data))) {  // java도 c++도 아닐 때
  answer = "Error!";
}
else if (data.indexOf('_') === -1) { // java => C++. A = 65. a = 97
  for (let i = 0; i < data.length; i++) {
    if (data.charCodeAt(i) < 97) {  // 대문자일 때
      answer += `_${data[i].toLowerCase()}`;
    }
    else {
      answer += `${data[i]}`;
    }
  }
} else {  // C++ => java    
  answer = data;
  while (true) {
    const index = answer.indexOf('_');
    if (index === -1)
      break;
    answer = `${answer.slice(0, index)}${answer[index + 1].toUpperCase()}${answer.slice(index + 2, answer.length)}`;
  }
}

function javaCheck(data) {
  const ascii = 'a'.charCodeAt(0);
  for (let i = 0; i < data.length; i++) {
    if (data.charCodeAt(i) < ascii)
      return true;
  }
  return false;
}
console.log(answer);