// n명이 입국심사를 위해 줄을 서서 기다림
// 심사하는데 걸리는 시간은 다름
// 모든 사람이 심사를 받는데 걸리는 시간을 최소로

function solution(n, times) {
    // 오름차순으로 시간이 걸리는 목록을 정렬
    times.sort((a, b) => a - b); 
    
    let left = 1;
    let right = n * times[times.length - 1];
    let answer = right; // 최대값
    
    // 이진 탐색을 수행
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        
        // 각 시간 별로 심사할 수 있는 사람의 수를 누적
        times.forEach(value => {
            count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
            
            if (count >= n) {
                answer = Math.min(mid, answer); // 최솟값을 업데이트
                return; // 조기 종료
            }
        });
        
        // 심사할 수 있는 인원이 부족한 경우, 시간 범위를 줄임
        if (count >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return answer;
}
