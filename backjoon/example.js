const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const N = Number(input.shift());
  const array = [];
  const visited = [];
  const select = [];
  let minCount = Infinity;


  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].split(' ').map(num => Number(num)));
  }


  dfs(0);
  console.log(minCount);


  function dfs(count) {
    if (count === N) {
      let num = 0;
      for (let i = 0; i < N - 1; i++) {
        num += array[select[i]][select[i + 1]];
      }
      if (array[select[select.length - 1]][select[0]] === 0)
        num = Infinity;
      else {
        num += array[select[select.length - 1]][select[0]];
      }
      minCount = Math.min(minCount, num);
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (visited[i]) continue;
      if (select.length > 0 && array[select[select.length - 1]][i] === 0) continue;
      visited[i] = true;
      select.push(i);   // 결과 배열에 값 push
      dfs(count + 1);
      select.pop();     // 결과 배열에 값 pop
      visited[i] = false;
    }
  }

  process.exit();
});