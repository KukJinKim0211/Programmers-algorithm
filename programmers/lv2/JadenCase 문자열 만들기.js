function solution(s) {
  const newArray = [];
  s.split(" ")
    .map((v) => v.toLowerCase())
    .forEach((e) => {
      const word = e.charAt(0).toUpperCase();
      newArray.push(word + e.slice(1));
    });
  return newArray.join(" ");
}

solution("3people unFollowed me");
