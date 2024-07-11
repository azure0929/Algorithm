/**
* 패턴을 유지하는 문자열을 return
* Array.from : 순회 기능 또는 유사 배열 객체에서 얕게 복사된 새로운 Array 인스턴스를 생성
*/

function solution(n) {
    // 배열 생성, 각 요소에 대해 '수' 또는 '박'을 할당
    const arr = Array.from({ length: n }, (_, index) => index % 2 === 0 ? '수' : '박');
    
    // 배열을 문자열로 변환하여 반환
    return arr.join('');
}