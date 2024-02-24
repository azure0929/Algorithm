// 해시 - 베스트앨범

function solution(genres, plays) {
  const answer = [];

  // 노래를 구분하기 위한 배열을 만들어 준다.
  let songs = genres.map((genre, idx) => {
    return {
      no: idx,
      genre: genre,
      play: plays[idx],
    };
  });

  // 장르별 재생횟수를 위한 새로운 배열을 만들어 준다.
  let genrePlayCnt = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find((a) => a.genre === song.genre);
    if (thisGenre) {
      thisGenre.play += song.play;
    } else {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    }
  });

  // 재생횟수가 많은 순으로 노래를 정렬한다.
  songs.sort((a, b) => b.play - a.play);
  // 재생횟수가 많은 순으로 장르를 정렬한다.
  genrePlayCnt.sort((a, b) => b.play - a.play);

  // 장르를 기준으로 배열을 돌면서 노래를 두 개 씩 넣는다.
  genrePlayCnt.forEach((a) => {
    let len = 0;
    songs.forEach((song) => {
      if (a.genre === song.genre && len < 2) {
        len++;
        answer.push(song.no);
      }
    });
  });
  return answer;
}
