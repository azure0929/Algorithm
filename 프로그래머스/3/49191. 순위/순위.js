// 권투 경기 : 1대 1
// 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수는 없음
// 2차원 배열 results

function solution(n, results) {
    var answer = 0;
    
    // 승리 그래프와 패배 그래프 초기화
    const winGraph = [];
    const loseGraph = [];
    
    // 경기 결과를 기반으로 그래프 구성
    results.forEach(result => {
        // 승리 그래프 구성
        if (winGraph[result[0]]) {
            winGraph[result[0]].push(result[1]);
        } else {
            winGraph[result[0]] = [result[1]];
        }
        
        // 패배 그래프 구성
        if (loseGraph[result[1]]) {
            loseGraph[result[1]].push(result[0]);
        } else {
            loseGraph[result[1]] = [result[0]];
        }
    });
    
    // 모든 선수에 대해 탐색
    for (let i = 1; i <= n; i++) {
        // 승리 그래프와 패배 그래프를 모두 탐색하여 선수 i의 순위 결정 가능한지 확인
        if (bfs(winGraph, i) + bfs(loseGraph, i) === n - 1) {
            answer++; // 순위 결정 가능하면 answer 증가
        }
    }
    
    return answer; // 결과 반환
    
    // BFS를 통해 그래프에서 탐색하는 함수
    function bfs(graph, start) {
        const queue = [start];
        const visited = [];
        
        visited[start] = true;
        let result = 0;
        
        while (queue.length > 0) {
            const node = queue.shift();
            // 현재 노드와 연결된 노드들을 탐색
            for (let nextNode of (graph[node] || [])) {
                // 방문하지 않은 노드라면
                if (visited[nextNode] !== true) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                    result++;
                }
            }
        }
        
        return result; // 탐색 결과 반환
    }
}
