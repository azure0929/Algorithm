/**
* 안전한 지역의 칸 수를 return
* BFS : 너비 우선 탐색
* DFS : 깊이 우선 탐색
* -> 루트 노드에서 시작해서 인접한 노드를 먼저 탐색하는 방법
* -> 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법
* from : 순회 가능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 인스턴스를 생성
* fill : 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 수정된 배열을 반환
*/

function solution(board) {
    let answer = board.length * board.length; // 보드 전체 칸 수를 안전 지대로 초기화
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    // 각 칸을 확인하여 폭탄이 있는 경우 주변을 확인하여 안전 지대의 개수 감소
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == 1) { // 폭탄이 있는 경우
                answer--; // 안전 지대에서 1 감소
                // 폭탄 주변 8방향 확인
                for (let direction = 0; direction < 8; direction++) {
                    const nx = i + dx[direction];
                    const ny = j + dy[direction];
                    // 보드 범위를 벗어나지 않고, 주변 칸이 안전 지대인 경우
                    if (nx >= 0 && ny >= 0 && nx < board.length && ny < board.length && board[nx][ny] == 0) {
                        answer--; // 안전 지대에서 1 감소
                        board[nx][ny] = "*"; // 안전하지 않은 곳을 표시
                    }
                }
            }
        }
    }

    return answer; // 안전 지대의 총 개수 반환
}
