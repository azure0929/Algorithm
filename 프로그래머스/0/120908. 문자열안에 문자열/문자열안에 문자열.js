// 1이 없다면 2를 return
// indexOf : 배열에서 주어진 요소를 찾을 수 있는 첫 번째 index를 반환, 찾을 수 없는 경우 -1을 반환
// includes : 문자열에 특정 문자열이 포함되어 있는지 확인

function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}