// 순서대로 담은 배열을 return
// 정규 표현식 : /(\d+)\s+([+-])\s+(\d+)\s+=\s+(\d+)/
// slice : 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않음
// match : 문자열이 정규식과 매치되는 부분을 검색
// eval : 문자로 표현된 자바스크립트 코드를 실행하는 함수
// parseInt : 문자열 인자를 파싱하여 특정 진수의 정수를 반환

function solution(quiz) {
    return quiz.map(t => {
        // 퀴즈 문자열을 공백을 기준으로 나눔
        const parts = t.split(' ');

        // 퀴즈 형식이 잘못된 경우 'X'를 반환
        if (parts.length !== 5 || parts[1] !== '+' && parts[1] !== '-') return 'X';

        // 숫자와 연산자를 추출합니다.
        const a = parseInt(parts[0]);
        const operator = parts[1];
        const b = parseInt(parts[2]);
        const result = parseInt(parts[4]);

        // 연산자에 따라 계산을 수행
        const calculatedResult = operator === '+' ? a + b : a - b;

        // 계산 결과를 확인하여 'O' 또는 'X'를 반환
        return calculatedResult === result ? 'O' : 'X';
    });
}
