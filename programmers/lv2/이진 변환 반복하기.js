function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s.length !== 1) {
    const num = s;
    s = s
      .split("")
      .filter((v) => v === "1")
      .join("");
    zeroCount += num.length - s.length;
    s = s.length.toString(2);
    count++;
  }
  return [count, zeroCount];
}
