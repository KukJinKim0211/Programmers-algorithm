function solution(arr) {
  let num = arr[0];
  const newArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (num !== arr[i]) {
      newArray.push(arr[i]);
      num = arr[i];
    }
  }
  return newArray;
}
