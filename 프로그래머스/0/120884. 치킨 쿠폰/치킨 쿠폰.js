/**
* 받을 수 있는 최대 서비스 치킨의 수를 return
* Math.floor : 주어진 숫자를 내림하여 가장 가까운 정수를 반환
*/

function solution(chicken) {
    if (chicken < 10) {
        return 0; // 쿠폰이 10장 미만이면 무료 치킨이 없음
    }
    
    return Math.floor(chicken / 10) + solution(Math.floor(chicken / 10) + (chicken % 10));
}