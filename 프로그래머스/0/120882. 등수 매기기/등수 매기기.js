/**
* 등수를 담은 배열을 return
* map : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
* sort : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
* fill : 배열의 index 범위 내에 있는 모든 요소를 정적 값으로 변경
* forEach : 각 배열 요소에 대해 제공된 함수를 한 번씩 실행
*/

function solution(score) {
    // 각 성적의 평균을 계산하여 배열에 저장
    let avg = score.map(v => (v[0] + v[1]) / 2);
    
    // 평균과 index를 매칭하는 객체를 생성
    let rankMap = avg.map((value, index) => ({ value, index }));
    
    // 평균을 기준으로 내림차순으로 정렬
    rankMap.sort((a, b) => b.value - a.value);
    
    // 각 성적의 등수를 계산하여 배열에 저장
    let ranks = Array(score.length).fill(0);
    let currentRank = 1;
    let currentScore = rankMap[0].value;
    
    rankMap.forEach((data, index) => {
        if (data.value !== currentScore) {
            currentRank = index + 1;
            currentScore = data.value;
        }
        ranks[data.index] = currentRank;
    });
    
    // 각 성적에 해당하는 등수를 반환
    return ranks;
}