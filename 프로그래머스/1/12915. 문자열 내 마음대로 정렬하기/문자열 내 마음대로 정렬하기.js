/**
* 각 문자열의 인덱스 n번째 글자를 기준
* strings의 길이: 1 이상, 50이하닌 배열
* 원소의 길이 > n
* localeCompare: 이 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환 
*/

function solution(strings, n) {
    // 각 문자열과 n번째 문자를 쌍으로 만들어 배열로 변환
    return strings.map(str => [str, str[n]])
                  // n번째 문자를 기준으로 정렬, 같을 경우 문자열을 사전 순으로 정렬
                  .sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : a[1].localeCompare(b[1]))
                  // 정렬된 쌍에서 문자열만 추출하여 반환
                  .map(pair => pair[0]);
}