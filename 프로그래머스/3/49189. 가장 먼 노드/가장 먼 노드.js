// 1부터 n까지 번호가 적혀있음
// 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 함

function solution (n, edge) {
  // 노드 간 연결을 나타내는 배열 생성
  const connects = new Array(n).fill().map(_ => []);

  // 주어진 간선에 따라 연결 배열 채우기
  for(const e of edge) {
    connects[e[0]-1].push(e[1]-1);
    connects[e[1]-1].push(e[0]-1);
  }
  
  // 방문한 노드 배열 초기화 (노드 1부터 시작)
  const visited = [1];

  // 큐 초기화 (노드 0부터 시작)
  const queue = [0];

  // 5. BFS를 사용하여 노드 1에서 다른 모든 노드까지의 거리 계산
  while(queue.length) {
    const cur = queue.shift();
    
    // 현재 노드의 이웃 노드들 탐색
    for(const next of connects[cur]) {
      if(!visited[next]) {
        // 방문하지 않은 이웃 노드의 거리 표시하고 큐에 추가
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }
  
  // 노드 1에서 다른 모든 노드까지의 최대 거리
  const max = Math.max(...visited);
  
  // 최대 거리에 있는 노드의 수
  return visited.filter(el => el === max).length;
}
