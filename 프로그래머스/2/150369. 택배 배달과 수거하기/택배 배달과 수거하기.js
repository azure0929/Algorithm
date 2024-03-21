// 모두 크기가 같은 재활용 택배 상자에 담아 배달
// 물류창고에 보관되어 있음
// 원하는 개수만큼 택배를 배달 및 수거할 수 있음

function solution(cap, n, deliveries, pickups) {
    var answer = -1; // 초기 답은 -1

    // 배열의 마지막부터 0이 아닌 요소를 찾는 함수
    function lastFun(arr){
        var len  = arr.length;
        for(var i = len-1; i >= 0; i--){
            if(arr[i] !== 0){
                return i;
            }
            else{
                arr.pop(); // 0인 요소들을 제거
            }
        }
        return -1; // 모든 요소가 0인 경우 -1 반환
    }

    // 배달을 수행하는 함수
    function delFun(arr, cap){
        var index = lastFun(arr); // 마지막 요소의 인덱스 가져오기
        var checkIndex = index;
        while(index !== -1 && cap > 0){
            index = lastFun(arr); // 업데이트된 인덱스 가져오기
            if(cap <= arr[index]){ // 용량이 요소보다 크거나 같으면
                arr[index] -= cap; // 요소만큼 용량 빼기
                cap = 0; // 용량 소진
                break; // 종료
            }
            else if(cap > arr[index]){ // 용량이 요소보다 작으면
                cap -= arr[index]; // 용량에서 요소만큼 빼기
                arr[index] = 0; // 요소 값 0으로 초기화
                index--; // 인덱스 하나 감소
            }
        }
        return checkIndex; // 마지막 요소의 인덱스 반환
    }

    // 픽업을 수행하는 함수
    function pickFun(arr, cap){
        var index = lastFun(arr); // 마지막 요소의 인덱스 가져오기
        var checkIndex = index;
        while(index !== -1 && cap > 0){
            index = lastFun(arr); // 업데이트된 인덱스 가져오기
            if(cap <= arr[index]){ // 용량이 요소보다 크거나 같으면
                arr[index] -= cap; // 요소만큼 용량 빼기
                cap = 0; // 용량 소진
                break; // 종료
            }
            else if(cap > arr[index]){ // 용량이 요소보다 작으면
                cap -= arr[index]; // 용량에서 요소만큼 빼기
                arr[index] = 0; // 요소 값 0으로 초기화
                index--; // 인덱스 하나 감소
            }
        }
        return checkIndex; // 마지막 요소의 인덱스 반환
    }

    // 무한 반복
    while(true){
        var delLen = delFun(deliveries, cap) + 1; // 배달 수행 후 마지막 요소 인덱스 가져오기
        var pickLen = pickFun(pickups, cap) + 1; // 픽업 수행 후 마지막 요소 인덱스 가져오기
        if(delLen === 0 && pickLen === 0){ // 배달과 픽업 모두 완료되면
            return answer + 1; // 답 반환
        }
        else if(delLen > pickLen){ // 배달이 더 많은 경우
            answer += delLen * 2; // 배달 거리만큼 더하기
        }
        else{ // 픽업이 더 많은 경우
            answer += pickLen * 2; // 픽업 거리만큼 더하기
        }
    }
}
