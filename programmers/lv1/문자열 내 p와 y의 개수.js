function solution(s) {
  const word = s + "";

  let p = 0;
  let y = 0;

  for (let i = 0; i < word.length; i++) {
    const word1 = word[i];
    if (word1 === "P" || word1 === "p") p++;
    else if (word1 === "Y" || word1 === "y") y++;
  }

  return p === y ? true : false;
}
