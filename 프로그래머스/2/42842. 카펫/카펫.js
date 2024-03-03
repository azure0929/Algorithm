function solution(brown, yellow) {
    // 결과값을 저장할 배열
    var answer = [];
    
    // 노란색과 갈색 타일의 전체 개수를 합산하여 전체 타일의 한 변의 길이를 구함
    for (var i = 3; i <= (brown + yellow) / i; i++) {
        // 전체 타일의 한 변의 길이를 기반으로 x값 계산
        var x = Math.floor((brown + yellow) / i);
        
        // 주어진 조건에 맞는 노란색 타일의 개수 계산
        if ((x - 2) * (i - 2) === yellow) {
            // 조건을 만족하는 경우 반복문 종료
            break;
        }
    }
    
    // 결과 배열에 x와 i 추가하여 반환
    return [x, i];
}