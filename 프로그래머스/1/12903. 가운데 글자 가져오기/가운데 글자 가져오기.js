/**
* 단어의 길이가 짝수라면 가운데 두글자를 return
* slice : 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환
* slice(middleIndex - 1, middleIndex + 1) : 중간 인덱스의 바로 앞과 중간 인덱스를 포함하여 문자열을 자름
* Math.floor : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
*/

function solution(s) {
    let middleIndex = Math.floor(s.length / 2); // 중간 Index 계산
    
    if (s.length % 2 === 0) { // 짝수일 경우
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else { // 홀수일 경우
        return s[middleIndex];
    }
}