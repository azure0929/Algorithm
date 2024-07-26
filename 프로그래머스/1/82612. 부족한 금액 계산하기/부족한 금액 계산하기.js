/**
* 원래 이용료의 N배
* 놀이기구를 count번
* 얼마나 모자라는지를 return
*/

function solution(price, money, count) {
    // 등차수열의 합 공식을 사용하여 총 가격 계산
    const totalPrice = price * count * (count + 1) / 2;
    
    // 부족한 금액 계산
    return money >= totalPrice ? 0 : totalPrice - money;
}