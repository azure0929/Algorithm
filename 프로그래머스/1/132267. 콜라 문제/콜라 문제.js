/**
* 빈 병이 2개 미만이면, 콜라를 받을 수 있음
* 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 수 없음
*/

function solution(a, b, n) {
    // 재귀를 통해 교환할 수 있는 콜라를 계산
    function exchange(current) {
        if (current < a) return 0; // 교환할 수 없을 때
        const newCola = Math.floor(current / a) * b; // 새로 얻는 콜라
        const remainingCola = current % a; // 남은 콜라
        return newCola + exchange(newCola + remainingCola); // 재귀 호출
    }
    
    return exchange(n);
}