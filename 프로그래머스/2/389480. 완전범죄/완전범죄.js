/**
* 흔적을 최소화
* A도둑: info[i][0]
* B도둑: info[i][1]
* 각 도둑이 남기는 흔적의 개수: 1 이상 3 이하
*/

function solution(info, n, m) {
    const applicants = info.length;
    const dp = Array.from({ length: applicants + 1 }, () =>
        Array(m).fill(Infinity)
    );
    dp[0][0] = 0; // 지원자 0명, B의 비용 0일 때 A의 비용은 0
    
    for (let i = 1; i <= applicants; i++) {
        const [aScore, bScore] = info[i - 1];
        
        for (let bCost = 0; bCost < m; bCost++) {
            // 선택하지 않은 경우: A는 부담하고, B는 그대로
            dp[i][bCost] = Math.min(dp[i][bCost], dp[i - 1][bCost] + aScore);
            
            // 선택한 경우: B는 bScore를 더하고, A는 기존값 유지
            const nextBCost = bCost + bScore;
            if (nextBCost < m) {
                dp[i][nextBCost] = Math.min(dp[i][nextBCost], dp[i - 1][bCost]);
            }
        }
    }
    
    // m 이상인 B의 부담 비용 중 A의 비용이 n보다 작은 최소값 탐색
    let minACost = Infinity;
    for (let bCost = 0; bCost < m; bCost++) {
        if (dp[applicants][bCost] < n) {
            minACost = Math.min(minACost, dp[applicants][bCost]);
        }
    }

    return minACost === Infinity ? -1 : minACost;
}