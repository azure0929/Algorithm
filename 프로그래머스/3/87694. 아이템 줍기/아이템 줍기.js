// 평행한 직사각형이 겹쳐진 형태로 표현

function solution(rectangle, characterX, characterY, itemX, itemY) {
  // 2차원 배열을 생성하고 0으로 초기화
  let map = Array.from(Array(103).fill(0), () => Array(103).fill(0));

  // 주어진 사각형의 좌표를 두 배로 확장
  let doubleRectangle = rectangle.map((current) =>
    current.map((point) => point * 2)
  );

  // 사각형의 모서리와 내부를 탐색하여 맵을 채움
  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          if (map[j][i] === 1) {
            continue; // 이미 테두리에 해당하는 값이 있으면 건너뜀
          } else {
            map[j][i] += 1; // 테두리인 경우 값을 1로 설정
          }
        } else {
          map[j][i] += 2; // 테두리가 아닌 경우 값을 2로 설정
        }
      }
    }
  });

  // 캐릭터와 아이템의 좌표를 두 배로 확장
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  // 상하좌우 방향 배열
  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, 1, -1];

  // BFS를 위한 큐 생성
  const queue = [[characterX, characterY, 0]];
  map[characterX][characterY] += 100; // 캐릭터의 위치에 100을 더해 방문 표시

  // BFS 탐색
  while (queue.length) {
    const [currentX, currentY, count] = queue.shift(); // 큐에서 현재 위치와 이동 횟수를 가져옴

    // 아이템에 도착한 경우 이동 횟수를 반환
    if (currentX === itemX && currentY === itemY) {
      return count / 2;
    }

    // 상하좌우로 이동하면서 탐색
    for (let i = 0; i < 4; i++) {
      const [nX, nY] = [currentX + directionX[i], currentY + directionY[i]];

      // 맵 내부에 있는지 확인
      if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101)
        if (map[nX][nY] === 1) {
          map[nX][nY] += 100; // 테두리를 지나간 경우 100을 더해 다시 탐색하지 않도록 함
          queue.push([nX, nY, count + 1]); // 큐에 새로운 위치를 추가하고 이동 횟수를 증가시킴
        }
    }
  }
}
