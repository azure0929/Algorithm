// numbers를 정수로 바꿔 return
// numbers는 소문자로만 구성되어 있음
// zero는 numbers의 맨 앞에 올 수 없음
// forEach : 각 Array 배열 요소에 대해 제공된 함수를 한 번씩 실행

// replaceAll : ES2021 버전에 새로 추가된 편리한 문법
//// String 객체에 추가된 새로운 메소드. 역할은 문자열에서 특정 문자를 지정한 문자열로 변경하는 역할
//// 문자열을 직접 지정해서 바꿀 수 있음

function solution(numbers) {
    // 숫자와 대응되는 영어 단어 배열 선언
    let numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // `numStr` 배열을 순회하면서 `numbers` 문자열에서 영어 단어를 숫자로 대체
    for (let idx = 0; idx < numStr.length; idx++) {
        let str = numStr[idx]; // 현재 순서의 영어 단어
        numbers = numbers.replaceAll(str, idx); // `numbers` 문자열에서 영어 단어를 숫자로 변경
    }
    
    // 최종적으로 변경된 `numbers` 문자열을 숫자로 변환하여 반환
    return Number(numbers);
}