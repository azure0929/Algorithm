// 문제의 정답 : 1,2,3,4,5 중에 하나
// 최대 1000문제로 구성
// pattern 활용 필요

function solution(answers) {
    
    // pattern 이라는 2차원 배열에 수포자들의 정답 패턴을 정의
    const pattern = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5],
    ];
    
    // scores 라는 배열을 초기화하여 각 수포자들의 점수 기록
    const scores = [0,0,0];
    
    // answer 배열을 순회하면서 각 수포자의 패턴과 비교하여 정답 여부 체크,
    // 각 수포자의 점수를 업데이트
    answers.forEach((answer, i) => {
        for (let a = 0; a < pattern.length; a++) {
            const patternLength = pattern[a].length;
            if (answer === pattern[a][i % patternLength]) scores[a]++;
        }
    });
    
    const answer = [];
    const maxScore = Math.max(...scores);
    scores.forEach((score, i) => {
        if (score === maxScore) answer.push(i +1);
    })
    
    return answer;
}