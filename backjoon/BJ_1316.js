// 그룹 단어 체커
const data = require('fs').readFileSync('/dev/stdin').toString().split(/\n/);
const dataCount = Number(data[0]);
let isGroup;
let groupCount = dataCount;
for (let i = 0; i < dataCount; i++) {
  const word = data[i + 1];
  const wordCount = data[i + 1].length;
  let words = [];
  for (let j = 0; j < wordCount; j++) {
    if (words.indexOf(word[j]) == -1)
      words.push(word[j]);
    else {
      if (words.indexOf(word[j]) != words.length - 1) {
        groupCount--;
        break;
      }
    }
  }
}
console.log(groupCount);