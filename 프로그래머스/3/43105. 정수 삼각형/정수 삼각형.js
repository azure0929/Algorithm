// 거쳐간 숫자의 최댓값을 return
// 삼각형의 높이 : 1 이상 500 이하

// 주어진 정수 삼각형에서 가장 큰 합을 찾는 함수
function solution(triangle) {
    // 삼각형의 각 단계를 순회
    for (let i = 1; i < triangle.length; i++) {
        // 각 단계의 숫자를 확인
        for (let j = 0; j < triangle[i].length; j++) {
            // 이전 단계에서 선택한 수의 왼쪽과 오른쪽 값을 가져옴
            const firstCase = triangle[i - 1][j - 1] ?? 0; // 왼쪽 값이 없으면 0으로 처리
            const secondCase = triangle[i - 1][j] ?? 0;     // 오른쪽 값이 없으면 0으로 처리
            
            // 두 경우 중 큰 값을 선택하여 현재 위치의 수에 더함
            if (secondCase >= firstCase) {
                triangle[i][j] += secondCase;
                continue;
            }
            triangle[i][j] += firstCase;
        }
    }
    
    // 마지막 단계에서 가장 큰 합 반환
    return Math.max(...triangle.at(-1));
}