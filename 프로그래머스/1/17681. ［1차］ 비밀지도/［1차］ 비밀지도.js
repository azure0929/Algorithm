/**
* 각 칸: 공백"" 또는 벽"#"
* 두 장의 지도를 겹쳐서 얻을 수 있음
* 각각 정수 배열로 암호화됨
* padStart: 이 메서드는 String값의 메서드, 결과 문자열이 주어진 길이에 도달할 때까지 이 문자열의 시작 부분에 다른 문자열을 채움
* -> 패딩은 이 문자열의 시작 부분부터 적용됨
* toString: 해당 object를 표현하는 '문자열을 반환'
*/

function solution(n, arr1, arr2) {
    let answer = []; // 결과를 저장할 배열
    
    // 0부터 n까지 반복 (각 행을 처리)
    for (let i = 0; i < n; i++) {
        // arr1[i]과 arr2[i]를 비트 OR 연산하여 지도를 합침
        // -> 각 요소를 OR 연산해 이진수로 변환 후, n자리수로 맞춤
        let mapLine = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        // 반환된 이진수 문자열을 '#'과 ' '로 바꿔서 저장할 문자열
        let transformedLine = '';
        
        // 이진수 문자열을 순회하면서 1은 '#'으로, 0은 ' '로 변환
        for (let char of mapLine) {
            if (char === '1') {
                transformedLine += '#'; // 1은 벽(#)으로 표시
            } else {
                transformedLine += ' '; // 0은 빈 공간( )으로 표시
            }
        }
        
        // 변환된 한 줄을 결과 배열에 추가
        answer.push(transformedLine);
    }
    
    // 완성된 지도 배열을 반환
    return answer;
}