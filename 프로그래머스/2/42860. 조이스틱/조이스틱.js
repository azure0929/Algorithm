function solution(name) {
    var answer = 0; // 최종 조이스틱 조작 횟수를 저장할 변수
    let min = name.length - 1; // 초기 최소 이동 횟수를 name의 길이 - 1로 설정

    for (let i = 0; i < name.length; i++) {
        let currentAlphabet = name.charCodeAt(i); // 현재 문자의 아스키 코드 값 구하기

        // 상하 이동 횟수 계산
        if (currentAlphabet < 78) {
            answer += currentAlphabet % 65;
        } else {
            answer += 91 - currentAlphabet;
        }

        let nextIndex = i + 1;

        // 연속된 'A'의 경우 다음으로 이동할 위치 찾기
        while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
            nextIndex += 1;
        }

        // 최소 이동 횟수 업데이트
        min = Math.min(
            min,
            i * 2 + name.length - nextIndex, // 현재 위치에서 다시 되돌아가고, 남은 문자까지 이동하는 경우
            i + (name.length - nextIndex) * 2 // 현재 위치부터 남은 문자까지 이동하고, 다시 되돌아오는 경우
        );
    }

    answer += min; // 상하 이동 횟수와 좌우 이동 횟수 중 작은 값을 최종 결과에 더하기
    return answer; // 최종 결과값 반환
}