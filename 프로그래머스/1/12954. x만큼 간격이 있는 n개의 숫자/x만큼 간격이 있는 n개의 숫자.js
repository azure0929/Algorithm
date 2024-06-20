/**
* x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 return
* Array.from : 배열을 생성하는 메서드. 유사 배열 객체나 반복 가능한 객체를 받아서 배열로 변환
*/

function solution(x, n) {
    // Array.from을 사용하여 길이 n인 배열을 생성하고, 각 요소에 대해 map을 수행
    return Array.from({ length: n }, (_, index) => x * (index + 1));
}