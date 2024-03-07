// 한 번은 만나도록 카메라 설치
// 차량의 경로 = routes
// 모든 차량이 한 번은 단속용 카메라를 만나도록 함
// 최소 몇 대의 카메라를 설치해야 하는지 return

// 조건을 가지고 한 방향으로만 순차적으로 진행되어야 함
// 차량이 나가는 순서대로 정렬되어야 함
// 나가는 지점에 카메라가 설치 되기에 나가는 순서대로 정렬 필요

function solution(routes) {
    let answer = 0;        
    let preCamera = -30000; // 카메라의 초기 위치를 매우 작은 값으로 설정

    // 차량이 나가는 지점을 기준으로 오름차순으로 정렬
    routes.sort(function(a, b) {
        return a[1] - b[1];
    });

    // 정렬된 routes 배열을 순회하며 카메라를 설치
    routes.map((e) => {
        if (e[0] > preCamera) {
            answer++; // 현재 차량을 담을 새로운 카메라를 설치
            preCamera = e[1]; // 새로운 카메라의 위치를 업데이트
        }
    });

    return answer; // 최소한의 카메라 수 반환
}
