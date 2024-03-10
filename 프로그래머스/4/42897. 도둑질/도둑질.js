// 인접한 두 집을 털면 경보가 울림
// 도둑이 훔칠 수 있는 돈의 최댓값을 return

function solution(money) {
    const len = money.length;

    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);

    // 첫 번째 집을 털었을 때와 안 털었을 때 초기화
    dp1[0] = money[0];
    dp1[1] = Math.max(money[0], money[1]);

    dp2[1] = money[1];

    // 동적 계획법 계산
    for (let i = 2; i < len; i++) {
        dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1]);
        dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1]);
    }

    // 두 경우 중에서 최댓값 반환
    return Math.max(dp1[len - 2], dp2[len - 1]);
}