/**
* 주어진 문자열 순회 : 문자열을 한 글자씩 확인하여 숨겨진 숫자를 찾음
* isNaN : 현재 문자가 숫자인지 확인하기 위해 사용되는 함수
* -> 주어진 값이 숫자인지를 판별하고, 숫자일 경우 false를 반환
* currentNum 변수 : 현재 추출 중인 숫자를 저장하기 위한 변수
* parseInt 함수 : 문자열을 정수로 변환하는 함수
*/

function solution(my_string) {
    // 숨겨진 숫자들의 합을 저장할 변수 초기화
    let sum = 0;
    
    // 현재 추출 중인 숫자를 저장할 변수 초기화
    let currentNum = '';
    
    // 문자열을 한 글자씩 순회
    for (let i = 0; i < my_string.length; i++) {
        // 현재 문자가 숫자인지 확인
        if (!isNaN(my_string[i])) {
            // 현재 문자가 숫자인 경우 현재 숫자에 추가
            currentNum += my_string[i];
        } else {
            // 현재 문자가 숫자가 아닌 경우
            if (currentNum !== '') {
                // 현재 숫자가 비어 있지 않으면, 숫자로 변환하여 합에 추가하고 초기화
                sum += parseInt(currentNum);
                currentNum = '';
            }
        }
    }
    
    // 문자열을 모두 확인한 후 마지막으로 currentNum이 남아있는지 확인하여 추가
    if (currentNum !== '') {
        sum += parseInt(currentNum);
    }
    
    // 최종적으로 숨겨진 숫자들의 합 반환
    return sum;
}