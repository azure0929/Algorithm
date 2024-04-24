/**
* 같은 원소의 개수를 return
* s1과 s2는 각각 중복된 원소를 갖지 않음
* for...of : 반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프 생성
*/

function solution(s1, s2) {
    let answer = 0;
    for (let i of s1) {
        for (let j of s2) {
            if (i === j) {
                answer ++;
            }
        }
    }
    
    return answer;
}