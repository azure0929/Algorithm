/**
* flatMap: 주어진 Array콜백 함수를 배열의 각 요소에 적용한 다음 결과를 한 단계씩 평평하게 하여 형성된 새 배열을 반환
*/

function solution(park, routes) {
  const N = park.length;
  const M = park[0].length;

  // 시작 좌표 설정
  let start = [0, 0]; // 기본값
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        break; // S를 찾으면 반복문 종료
      }
    }
  }

  // 방향 객체
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 주어진 이동정보 배열에 담기
  for (const route of routes) {
    const [dir, distanceStr] = route.split(" ");
    const distance = parseInt(distanceStr);
    let [nx, ny] = start; // 현재 위치

    // 주어진 걸음 수 만큼 이동
    let step;
    for (step = 0; step < distance; step++) {
      nx += directions[dir][0];
      ny += directions[dir][1];

      // 범위 체크 및 장애물 확인
      if (nx < 0 || nx >= N || ny < 0 || ny >= M || park[nx][ny] === "X") {
        break; // 이동할 수 없는 경우 루프 종료
      }
    }

    // 이동이 성공적으로 완료된 경우 위치 업데이트
    if (step === distance) {
      start = [nx, ny];
    }
  }

  return start; // 최종 위치 반환
}
