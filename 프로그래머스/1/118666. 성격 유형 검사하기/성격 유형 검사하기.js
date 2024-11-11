/**
* 4개의 지표
* 검사지에 총 n개의 질문이 있음
* 각 질문에는 7개의 선택지가 있음
* 각 질문은 1가지 지표로 성격 유형 점수를 판단
* reduce: 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
* abs: 입려된 값의 절대값을 반환, 이 값의 타입은 입력값과 동일
* 결론: 검사지의 성격 유형 검사 결과를 지표 번호 순서대로 return
*/

function solution(survey, choices) {
    // 성격 유형별 점수를 저장할 객체 생성
    const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    // survey 배열을 순회하면서 각 질문의 점수 계산
    survey.forEach((pair, i) => {
        const [left, right] = pair.split(""); // 왼쪽, 오른쪽 성격 유형 분리
        const score = Math.abs(choices[i] - 4); // 4와의 차이로 점수 계산 (절대값 사용)
        
        // 선택지가 4보다 작을 때 (비동의) -> 왼쪽 성격 유형에 점수 추가
        if (choices[i] < 4) types[left] += score;
        // 선택지가 4보다 클 때 (동의) -> 오른쪽 성격 유형에 점수 추가
        else if (choices[i] > 4) types[right] += score
        // 선택지가 4일 경우는 점수 변동 없음 (else 필요 없음)
    });
    
    // 성격 유형 쌍 배열에서 높은 점수의 성격 유형을 선택하여 문자열로 합침
    return ['RT', 'CF', 'JM', 'AN'].map(pair =>
        // 왼쪽 유형의 점수가 같거나 크면 왼쪽 유형 선택, 작으면 오른쪽 유형 선택
        types[pair[0]] >= types[pair[1]] ? pair[0] : pair[1]
    ).join(''); // 최종 결과 문자열로 반환
}