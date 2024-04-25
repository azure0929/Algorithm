/**
* k가 있으면 num의 그 숫자가 있는 자리 수를 return
* 없으면 -1을 return
* 
* 입력된 숫자를 문자열로 변환한 후 -> 각 자릿수를 반복하여 숫자 k와 비교
* 발견된 경우 해당 자릿수의 인덱스를 반환하고, 찾지 못할 경우 -1을 반환
*/


function solution(num, k) { // 함수 선언
    // 입력된 숫자를 문자열로 변환하여 digits 변수에 할당 
    let search = String(num); 
    
    // 문자열의 각 자릿수를 반복
    for (let i = 0; i < search.length; i++) { 
        // 현재 자릿수가 k와 같은지 확인
        if (Number(search[i]) === k) { 
            // k를 찾았을 때 현재 자릿수의 인덱스를 반환하고 반복문 종료
            return i + 1; 
        }
    }
    
    // k를 찾지 못했을 때 -1을 반환
    return -1; 
}