// DFS를 활용
// DFS : 깊이 우선 탐색, 루트 노드에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법
// 컴퓨터의 개수 n
// 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어짐

function solution(n, computers) {
    let answer = 0;

    // 네트워크 연결 여부를 기록하는 배열
    const visited = Array.from({ length: n }, () => false);

    // 깊이 우선 탐색(DFS) 함수 정의
    function dfs(index) {
        // 현재 노드 방문 표시
        visited[index] = true;

        // 현재 노드와 연결된 다른 노드들을 확인
        for (let i = 0; i < n; i++) {
            // 연결되어 있고 아직 방문하지 않은 경우, 재귀적으로 DFS 호출
            if (computers[index][i] && !visited[i]) {
                dfs(i);
            }
        }
    }

    // 모든 노드에 대해 DFS 수행
    for (let i = 0; i < n; i++) {
        // 아직 방문하지 않은 노드인 경우, DFS 호출 및 네트워크 개수 증가
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    // 최종 네트워크 개수 반환
    return answer;
}