// 사이에 바위들
// 이분탐색 : 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있는 알고리즘
// 주어진 거리를 이진 탐색을 통해 최적의 값으로 조정
// 제거해야 하는 돌의 수가 주어진 제거 횟수보다 많으면 거리를 줄임
// 그렇지 않으면 거리를 늘려서 답을 갱신

function solution(distance, rocks, n) {
    let answer = 0; // 결과값 초기화
    rocks = [0, ...rocks.sort((a, b) => a - b), distance]; // 시작점과 돌들의 위치를 오름차순으로 정렬한 후, 마지막에 도착지의 위치를 추가
    
    // 이진 탐색 함수
    const BinarySearch = () => {
        let start = 0; // 시작 위치 초기화
        let end = rocks[rocks.length - 1]; // 끝 위치 초기화
        
        // 이진 탐색 수행
        while (start <= end) {
            let mid = Math.floor((start + end) / 2); // 중간 위치 계산
            let count = 0, now = 0; // 제거된 돌의 개수와 현재 위치 초기화
            
            // 돌을 탐색하며 제거할 돌의 수 계산
            for (let i = 1; i < rocks.length; i++) {
                if (rocks[i] - now < mid) { // 현재 돌과 이전 돌 사이의 거리가 중간값보다 작으면
                    count++; // 돌을 제거
                } else {
                    now = rocks[i]; // 그렇지 않으면 현재 돌로 이동
                }
            }
            
            // 제거된 돌의 수가 허용된 제거 횟수보다 많으면 최대 거리를 줄임
            if (count > n) {
                end = mid - 1;
            } else {
                start = mid + 1; // 그렇지 않으면 최소 거리를 늘려서 결과값 갱신
                answer = mid; // 결과값 갱신
            }
        }
    }
    
    BinarySearch(); // 이진 탐색 함수 호출
    return answer; // 결과값 반환
}
