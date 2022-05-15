// N-Queen
const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const array = Array.from(Array(N), () => new Array(N).fill(0));

const isAble = (row) => {
  for (let i = 1; i < row; i++) {
    if (
      array[i] === array[row] ||
      Math.abs(array[row] - array[i]) === row - i
    ) {
      return false;
    }
  }
  return true;
};

let count = 0;
const queen = (numOfQueen) => {
  if (isAble(numOfQueen)) {
    if (numOfQueen === N) {
      count++;
    } else {
      for (let i = 1; i <= N; i++) {
        array[numOfQueen + 1] = i;
        queen(numOfQueen + 1);
      }
    }
  }
};
queen(0);
console.log(count);