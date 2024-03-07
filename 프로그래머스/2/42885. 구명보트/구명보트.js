// 한 번에 최대 2명씩 밖에 탈 수 없음
// 무게 제한
// 사람들의 몸무게 : [70kg, 50kg, 80kg, 50kg]
// 1번째 사람과 3번째 사람의 무게의 합 = 150kg
// 제한 초과하여 같이 탈 수 없음
// 방법 : 가장 무거운 사람과 가장 가벼운 사람이 타는 방법

function solution(people, limit) {
    // 몸무게를 오름차순으로 정렬
    people = people.sort((a, b) => a - b);
    
    let result = 0; // 필요한 보트의 수를 저장할 변수
    let [s, e] = [0, people.length - 1]; // 시작과 끝 인덱스를 가리키는 포인터 초기화

    while (s <= e) {
        // 현재 가리키는 두 사람의 몸무게 합산
        let curr = people[s] + people[e];
        
        // 몸무게 합이 limit 이하인 경우
        if (curr <= limit) {
            s += 1; // 가벼운 사람을 다음으로 이동하여 함께 태움
        }
        
        e -= 1; // 무거운 사람을 다음으로 이동
        result += 1; // 보트의 개수 증가
    }
    
    return result; // 최종적으로 필요한 보트의 수 반환
}

