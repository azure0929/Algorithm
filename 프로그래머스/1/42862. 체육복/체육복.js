// 학생들의 번호는 체격 순
// 최대한 많은 학생이 체육 수업을 들어야 함

function solution(n, lost, reserve) {
    // 최종적으로 체육복을 입을 수 있는 학생 수를 구하는 함수

    let answer = 0; // 결과값 초기화

    // 체육복을 도난당하고 여벌이 없는 학생(여벌 받아야하는 학생) 필터링
    const noReserveLost = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));

    // 여벌이 있고 체육복을 도난당하지 않은 학생(빌려줄 수 있는 학생) 필터링
    let hasReserve = reserve.sort((a, b) => a - b).filter((reverse) => !lost.includes(reverse));

    // 최종적으로 체육복을 입을 수 있는 학생들의 목록
    const finalLost = noReserveLost.filter((lost) => {
        // 첫번째로 체육복을 빌려줄 수 있는 사람 찾기
        const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) == 1);

        // 체육복 빌려줄 사람이 없으면 그대로 lost 유지
        if (!lend) return lost;

        // 빌려준 사람 제외하기
        hasReserve = hasReserve.filter((reverse) => reverse !== lend);
    });

    // 답 = 전체 학생 수 - 체육복이 없는 학생 수
    answer = n - finalLost.length;

    return answer; // 최종 결과값 반환
}