// t시간 후 세균의 수를 return

function solution(n, t) {
    // 반복 횟수를 나타내는 변수 i를 초기화
    let i = 1;
    
    while (i < t + 1) { // i가 t보다 작을 때까지 반복
        n *= 2; // n을 2배로 증가
        i++; // 반복 횟수를 증가
    }
    
    return n; // 최종 결과값을 반환
}