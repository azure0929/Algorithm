// 머쓱이가 쳐야할 박수 횟수를 return
// toString : 해당 object를 표현하는 문자열을 반환.
//// 사용자가 타입 강제 변환을 통해 파생된 객체에서 재정의할 수 있음

function solution(order) {
    // 카운트 변수
    let count = 0;
    // order를 문자열로 변환
    const orderStr = order.toString();
    
    // orderStr의 각 문자에 대해
    for (let i = 0; i < orderStr.length; i++) {
        // 현재 문자가 '3', '6', '9' 중 하나라면 카운터를 증가
        if (orderStr[i] === '3' || orderStr[i] === '6' || orderStr[i] === '9') {
            count++;
        }
    }
    
    // 카운터 반환
    return count;
}