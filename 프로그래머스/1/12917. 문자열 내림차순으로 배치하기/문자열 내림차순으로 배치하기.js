/**
* split : String 객체를 지정한 구분자를 이용하여 여러 개의 문재열로 나눔
* sort() : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
*/

function solution(s) {
    return s.split('').sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        
        return 0;
    }).join('');
}