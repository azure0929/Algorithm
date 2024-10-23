/**
* k점: 최상품의 사과
* 1점: 최하품의 사과
* 한 상자에 사과를 m개씩 담아 포장
* 그리디: 각 단계에서 미래를 생각하지 않고, 그 순간 가장 최선의 선택을 하는 기법
*/

function solution(k, m, score) {
    // 점수를 내림차순으로 정렬하여 큰 값부터 처리
    score.sort((a, b) => b - a);
    
    let total = 0;
    
    // 상자를 만들 수 있는 만큼 반복(한 상자에 m개의 과일)
    for (let i = 0; i < score.length; i += m) {
        // 남은 과일이 m개 이상일 때만 상자를 만듬
        if (i + m <= score.length) {
            // 현재 상자의 가장 낮은 점수는 i+m-1번째 과일
            total += score[i + m - 1] * m;
        }
    }
    
    return total;
}