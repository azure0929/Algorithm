/**
* 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return
* filter : 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
* 표준 내장 객체 RegExp.prototype.test() : 주어진 문자열이 정규 표현식을 만족하는지 판별,
* -> 그 여부를 true 또는 false로 반환
*/ 

function solution(babbling) {
    // 정규식 패턴 : 가능한 단어들로만 이루어진 문자열을 찾음
    let regex = /^(aya|ye|woo|ma)+$/;
    
    // 주어진 배열에서 가능한 단어들로만 이루어진 단어를 필터링하여 배열을 만들고,
    // 그 배열의 길이를 반환
    return babbling.filter(word => regex.test(word)).length;
}