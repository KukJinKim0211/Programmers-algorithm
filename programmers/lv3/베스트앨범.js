function solution(genres, plays) {
  var answer = [];
  const songs = {};
  const playCount = {};
  const playCountArr = [];

  genres.forEach((genre, i) => {
    if (!songs[genre]) songs[genre] = [];
    if (!playCount[genre]) playCount[genre] = 0;

    const obj = {
      play: plays[i],
      idx: i,
    };
    songs[genre].push(obj);
    playCount[genre] += plays[i];
  });

  for (genre in playCount) {
    playCountArr.push({
      genre: genre,
      count: playCount[genre],
    });
  }
  playCountArr.sort((a, b) => b.count - a.count);

  playCountArr.forEach((e) => {
    const song = songs[e.genre];
    song.sort((a, b) => b.play - a.play);
    song[0] && answer.push(song[0].idx);
    song[1] && answer.push(song[1].idx);
  });
  return answer;
}

solution(
  ["classic", "classic", "pop", "classic", "classic", "pop"],
  [500, 500, 600, 150, 800, 2500],
);
