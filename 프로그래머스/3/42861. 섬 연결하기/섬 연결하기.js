// 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return
// 도달할 수만 있으면 통행 가능
// 섬의 개수 n = 1이상 100이하

// 부모 노드를 찾는 함수
const getParent = (parent, x) => {
    // 현재 노드의 부모가 자기 자신이면 현재 노드를 반환
    if (parent[x] === x) return x;
    // 경로 압축(Path Compression)을 통해 부모를 찾고 반환
    return parent[x] = getParent(parent, parent[x]);
}

// 두 노드의 부모를 합치는 함수
const unionParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    // 부모의 크기 비교하여 작은 쪽을 부모로 설정
    if (n1 < n2) return parent[n2] = n1;
    else return parent[n1] = n2;
}

// 두 노드의 부모가 같은지 확인하는 함수
const findParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    // 두 노드의 부모가 같으면 true, 다르면 false 반환
    if (n1 === n2) return true;
    else return false;
}

function solution(n, costs) {
    var answer = 0;
    const parent = [];
    
    // 초기에 각 노드의 부모를 자기 자신으로 설정
    for (let i = 0; i < n; i++)
        parent.push(i);
    
    // 비용을 기준으로 간선을 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    // 간선을 순회하며 최소 신장 트리 구성
    for (const cost of costs) {
        // 두 노드의 부모가 같지 않으면 사이클이 발생하지 않으므로 연결
        if (!findParent(parent, cost[0], cost[1])) {
            answer += cost[2]; // 비용 더하기
            unionParent(parent, cost[0], cost[1]); // 두 노드의 부모 합치기
        }
    }
    
    return answer; // 최소 비용 반환
}
