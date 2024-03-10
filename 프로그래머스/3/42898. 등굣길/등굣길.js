// 폭우로 일부 지역이 물에 잠김
// 잠기지 않은 지역을 통해 학교를 가려고 함
// m x n 크기의 격자모양으로 나타낼 수 있음

// 등굣길을 찾는 함수
function solution(m, n, puddles) {
  // m이 가로의 길이, n이 세로의 길이를 나타내는 행렬 생성
  const matrix = Array.from({ length: n }).map((v) =>
    Array.from({ length: m }).fill(1)
  );

  // 웅덩이의 위치를 행렬에 반영
  puddles.forEach(([puddleM, puddleN]) => {
    matrix[puddleN - 1][puddleM - 1] = 0;
  });

  // 등굣길 경우의 수 계산을 위한 행렬 반복
  const result = matrix.reduce((prev, row, i) => {
    return row.reduce((a, v, j) => {
      // 현재 위치의 값이 0인 경우(웅덩이)는 그대로 0으로 유지하고,
      // 그 외의 경우 등굣길 경우의 수를 계산하여 현재 위치에 저장
      a[j] =
        (v === 0
          ? v
          : i === 0
          ? a[j - 1] ?? 1
          : (prev[j] + (a[j - 1] ?? 0)) % 1000000007);
      return a;
    }, []);
  }, []);

  // 최종 도착지의 등굣길 경우의 수 반환
  return result[m - 1];
}