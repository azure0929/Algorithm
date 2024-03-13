// 두 팀으로 나누어서 진행
// 최대한 빨리 도착하는 것이 유리

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    // 방문 여부와 최단 거리를 저장할 배열
    const visited = Array(rows).fill(0).map(() => Array(cols).fill(0));

    // 상하좌우 이동을 위한 배열
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];

    // 시작점을 큐에 추가하고 방문 표시
    const q = [];
    q.push([0, 0]);
    visited[0][0] = 1;

    // 목적지가 벽으로 막혀있는 경우 예외 처리
    if (maps[rows - 1][cols - 2] === 0 && maps[rows - 2][cols - 1] === 0) return -1;

    while (q.length) {
        const [y, x] = q.shift();

        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            // 범위를 벗어나거나 벽이면 무시
            if (ny < 0 || nx < 0 || ny >= rows || nx >= cols || maps[ny][nx] === 0) continue;

            // 이미 방문한 경우 무시
            if (visited[ny][nx]) continue;

            // 큐에 새로운 좌표 추가 및 최단 거리 갱신
            q.push([ny, nx]);
            visited[ny][nx] = visited[y][x] + 1;
        }
    }

    const result = visited[rows - 1][cols - 1];

    // 도달할 수 없는 경우 -1 반환
    if (!result) return -1;

    return result;
}
