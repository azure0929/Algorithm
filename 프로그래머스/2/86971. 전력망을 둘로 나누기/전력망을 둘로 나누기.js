// 송전탑 관련
// 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하는 목적
// 송전탑의 개수 : n, 전선 정보 : wires
// 두 전력망이 가지고 있는 송전탑의 개수의 차이(절대값)를 return하도록

// 각 노드별로 간선으로 연결된 노드를 초기화
// bfs 알고리즘을 통해 간선을 끊고, 분리된 그룹에 속한 노드의 수를 카운트
// bfs : 너비 우선 탐색, 루트 노드(훅은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법
// -> 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 장점을 나중에 방문하는 순회 방법
// -> 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 bfs 알고리즘 선택이 필요
// -> 재귀적으로 동작하지는 않음
// -> 방문한 노드들을 차례로 저장한 후 꺼낼 수 있는 자료 구조인 큐(Queue)를 사용

function solution(n, wires) {
    // 결과를 저장할 변수를 무한대 값으로 초기화
    var answer = Infinity;

    // 노드 간 연결 정보를 저장할 그래프를 배열로 생성
    const tree = Array.from({ length: n + 1 }, () => []);

    // 주어진 전선 정보를 그래프에 추가
    for (const [v1, v2] of wires) {
        tree[v1].push(v2);
        tree[v2].push(v1);
    }

    // 주어진 간선 하나씩 끊었을 때, 두 네트워크의 노드 수 차이의 최소값을 찾음
    for (const [v1, v2] of wires) {
        answer = Math.min(answer, Math.abs(bfs(v1, v2, tree) - bfs(v2, v1, tree)));
    }

    // BFS 알고리즘을 이용하여 노드 수를 계산하는 함수
    function bfs(root, exceptNode, tree) {
        let count = 0;
        const queue = [root];
        const visited = new Array(tree.length).fill(false);

        do {
            const current = queue.shift();
            visited[current] = true;
            
            // 현재 노드에 연결된 노드들 중 예외 노드를 제외하고 방문하지 않은 노드를 큐에 추가
            for (const node of tree[current]) {
                if (node !== exceptNode && visited[node] === false) {
                    queue.push(node);
                }
            }
            
            count += 1;
        } while (queue.length > 0);

        return count;
    }

    // 최종적으로 두 네트워크의 노드 수 차이의 최소값을 반환
    return answer;
}
