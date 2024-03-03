// hp : 체력
// dungeons : 던전 목록
// 최대 몇 개의 던전을 클리어할 수 있는지 계산하는 함수 사용

// 탐험을 시작하기 위해 '최소 필요 필요도'와 던전 탐험을 마쳤을 때 소모되는 '소모 피로도'

function solution(k, dungeons) {
    // 최종적으로 반환할 정답 변수
    let answer = 0;
    
    // 방문 여부를 저장하는 배열, 초기값은 false로 모두 초기화
    const visited = new Array(dungeons.length).fill(false);
    
    // 깊이 우선 탐색(DFS) 함수 정의
    function DFS(hp, L) {
        // 모든 던전에 대해 for로 반복
        for (let i = 0; i < dungeons.length; i++) {
            // 해당 던전을 아직 방문하지 않았고, 현재 체력으로 클리어 가능한 경우
            if (!visited[i] && dungeons[i][0] <= hp) {
                // 해당 던전을 방문했다고 표시
                visited[i] = true;
                // 다음 단계의 DFS 호출 (체력 감소 및 던전 개수 증가)
                DFS(hp - dungeons[i][1], L + 1);
                // 해당 던전 방문 여부 초기화 (백트래킹)
                visited[i] = false;
            }
        }
        
        // 모든 던전을 검사한 후, 현재 클리어한 던전 수의 최댓값을 업데이트
        answer = Math.max(answer, L);
    }
    
    // 초기 체력(k)과 던전 개수(0)로 DFS 시작
    DFS(k, 0);
    
    // 최종적으로 클리어할 수 있는 던전의 최대 개수를 반환
    return answer;
}