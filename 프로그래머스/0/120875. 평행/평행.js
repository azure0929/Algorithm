/**
* 두 직선이 평행이 되는 경우가 있으면 1, 없으면 0을 return
* 서로 다른 두개 이상의 점이 겹치는 경우는 없음
* 모든 점 쌍의 기울기를 계산하지 않고, 한 점에서 출발하여 다른 모든 점들과의 기울기를 비교
* 기울기를 계산할 때, 소수점 정밀도 문제를 고려하여 소수점 자릿수를 조절할 수 있음
* filter : 주어진 배열의 일부에 대한 얕은 복사본을 생성, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
* includes : 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 적절히 true 또는 false를 반환
*/

function solution(dots) {
    let answer = 0; // 결과 값을 저장할 변수 초기화
    const total = [0, 1, 2, 3]; // 점의 번호를 나타내는 배열
    const arr = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]; // 각 선분을 나타내는 배열
    
    for (let i of arr) { // arr 배열의 요소들에 대해 반복문 실행
        const rest = total.filter((x) => !i.includes(x)); // 현재 선분에 속하지 않는 점들을 rest 배열에 저장
        const one = (dots[i[0]][1] - dots[i[1]][1]) / (dots[i[0]][0] - dots[i[1]][0]); // 첫 번째 선분의 기울기 계산
        const two = (dots[rest[0]][1] - dots[rest[1]][1]) / (dots[rest[0]][0] - dots[rest[1]][0]); // 두 번째 선분의 기울기 계산
        if (one === two) answer = 1; // 두 선분의 기울기가 같으면 answer를 1로 설정
    }
    
    return answer; // 결과 값 반환
}


