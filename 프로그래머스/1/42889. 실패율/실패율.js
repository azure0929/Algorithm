/**
* 실패율 = 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
* 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
*/

function solution(N, stages) {
    // 각 스테이지에 도달한 사람 수 저장 배열(1 - index)
    const stageCounts = Array(N + 2).fill(0);
    
    // 각 스테이지에 도달한 사람 수를 기록
    stages.forEach(stage => {
        stageCounts[stage]++;
    });
    
    const result = [];
    let playerRemaining = stages.length; // 아직 게임을 진행 중인 전체 인원 수
    
    for (let i = 1; i <= N; i++) {
        const curr = stageCounts[i];
        
        // 실패율 계산: 도달자 수가 0인 경우 실패율은 0으로 처리
        const failureRate = playerRemaining > 0 ? curr / playerRemaining : 0;
        
        result.push([i, failureRate]);
        playerRemaining -= curr; // 남은 인원 수에서 현재 스테이지의 인원 수를 뺌
    }
    
    // 실패율을 기준으로 내림차순 정렬. 실패율이 같으면 스테이지 번호로 오름차순 정렬
    result.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    // 정렬된 스테이지 번호만 추출
    return result.map(stage => stage[0]);
}