// n씩 잘라서 저장한 배열을 return
// slice: 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않음

function solution(my_str, n) {
    // 결과를 저장할 배열 선언
    let arr = [];
    // index 변수 초기화
    let i = 0;
    
    while (i < my_str.length) { // 문자열의 끝까지 반복
        // 문자열을 n글자씩 자른 후 배열에 추가
        arr.push(my_str.slice(i, i + n));
        // 다음 자르는 위치로 이동
        i += n;
    }
    
    // 결과 배열 반환
    return arr;
}