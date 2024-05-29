/**
* 밀어야 하는 최소 횟수를 return
* B가 될 수 없으면 -1을 return
* Math.ceil : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
* indexOf : 배열에서 주어진 요소를 찾을 수 있는 첫 번째 Index를 반환, 찾을 수 없는 경우 -1을 반환
* slice : 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않음
*/

function solution(A, B) {
    // A와 B가 같으면 0 반환
    if (A === B) return 0;
    
    for (let i = 1; i <= A.length; i++) {
        A = A.slice(-1) + A.slice(0, -1); // 문자열의 마지막 문자를 앞으로 옮겨서 문자열 밀기
        // 문자열을 밀었을 때 B와 같으면 i 반환
        if (A === B) return i;
    }
    
    // 문자열을 밀어도 B와 같아지지 않으면 -1 반환
    return -1;
}