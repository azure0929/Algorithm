/**
* 벽을 1미터 길이의 구역 n개로 나눔
* 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙임
* 롤러의 길이 = m미터
* 구역의 일부x
*/

function solution(n, m, sections) {
    let answer = 0;
    let painted = 0; // 마지막으로 덧칠한 구간의 끝 위치 저장
    
    for (let section of sections) {
        // 현재 section이 덧칠된 범위를 벗어나면 새로운 덧칠이 필요
        if (painted < section) {
            answer++; // 덧칠 횟수 증가
            painted = section + m - 1; // 새로운 덧칠된 구간 끝 위치 설정
        }
    }
    
    return answer;
}