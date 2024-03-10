// 서로 다른 연산 순서의 계산 결과 중 최댓값을 return
// 구해야 할 값 : 마지막으로 계산된 값 중에서 최댓값
// 덧셈과 뺄셈의 계산은 항상 2개의 피연산자와 하나의 연산자의 구성으로 이루어진다
// 각각의 피연산자는 단독으로 존재할 때는 덧셈과 뺄셈이 불가능
// 즉, 자신의 고유한 값으로 존재할 수 밖에 없음
// 연산이 일어나는 순서대로 묶는 것은 너무 많은 경우의 수가 발생

// 초기 최댓값을 상정하면, 이를 이용해 범위를 하나씩 늘려가면서 최댓값을 갱신 가능
// DP 알고리즘 : 하나의 큰 문제를 여러 개의 작은 문제를 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용
// DP를 쓰는 이유 : 일반적인 재귀를 단순히 사용 시 동일한 작은 문제들이 여러 번 반복되어 비효율적인 계산이 될 수 있음

// 주어진 숫자와 연산자로 이루어진 식의 최댓값을 찾는 함수
function solution(arr) {
    const operandsCount = Math.ceil(arr.length / 2);

    // 최댓값과 최솟값을 저장하는 DP 테이블 초기화
    const max_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(-Infinity));
    const min_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(Infinity));

    // 피연산자 값 초기화
    for (let i = 0; i < operandsCount; i++) {
        max_dp[i][i] = +arr[i * 2];
        min_dp[i][i] = +arr[i * 2];
    }

    // 연산자에 따라 DP 테이블 갱신
    for (let cnt = 1; cnt < operandsCount; cnt++) {
        for (let i = 0; i < operandsCount - cnt; i++) {
            const j = i + cnt;
            for (let k = i; k < j; k++) {
                const operator = arr[k * 2 + 1];

                // 연산자에 따라 최댓값과 최솟값 갱신
                if (operator === '+') {
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] + max_dp[k + 1][j]);
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] + min_dp[k + 1][j]);
                } else {
                    max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] - min_dp[k + 1][j]);
                    min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] - max_dp[k + 1][j]);
                }
            }
        }
    }

    // 최종 결과인 전체 식의 최댓값 반환
    return max_dp[0][operandsCount - 1];
}