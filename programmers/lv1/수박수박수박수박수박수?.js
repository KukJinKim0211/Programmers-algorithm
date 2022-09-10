function solution(n) {
  const newWord = "수박".repeat(n / 2);
  return newWord + (n % 2 === 1 ? "수" : "");
}
