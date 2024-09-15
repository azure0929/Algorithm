/**
* 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때
* 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0
* 삼총사를 만들 수 있는 방법의 수를 return
* Set객체: 원시값이나 객체 참조 값 등 모든 유형의 고유 값을 저장할 때 사용할 수 있음
*/

function solution(number) {
    let result = 0; // 합이 0이 되는 조합의 개수를 저장할 변수 초기화
    const len = number.length; // 배열의 길이를 저장
    
    // 세 원소 조합을 직접 생성하는 반복문
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    result++;
                }
            }
        }
    }
    
    return result;
}
