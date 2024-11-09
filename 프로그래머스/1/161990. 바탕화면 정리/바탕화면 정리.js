/**
* 빈칸: .
* 파일이 있는 칸: #
* 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일 선택해서 한 번에 지우려고 함
*/

function solution(wallpaper) {
    // 초기 최소/최대 좌표값 설정
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    // 이중 for문을 통해 '#'의 위치를 찾고, 최소/최대 값을 갱신
    for (let i = 0; i < wallpaper.length; i++) {
      for (let j = 0; j < wallpaper[i].length; j++) {
        if (wallpaper[i][j] === "#") {
          // 최솟값 갱신
          minY = Math.min(minY, i);
          minX = Math.min(minX, j);
          // 최댓값 갱신
          maxY = Math.max(maxY, i);
          maxX = Math.max(maxX, j);
        }
      }
    }

    // 결과 반환 (최상단 y, 최좌측 x, 최하단 y + 1, 최우측 x + 1)
    return [minY, minX, maxY + 1, maxX + 1];
}