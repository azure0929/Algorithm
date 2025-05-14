/*
* 자신이 설정한 출근 희망 시각 + 10분
* 출근 희망 시각과 실제로 출근한 기록을 바탕으로 상품을 받을 직원이 몇 명인지 확인
* 1차원 정수 배열 schedules
* 일주일 동안 출근한 시각을 담은 2차원 정수 배열 timelogs
* 이벤트를 시작한 요일을 의미하는 정수 startday
*/


function solution(schedules, timelogs, startday) {
    let result = 0;

    schedules.forEach((wishTime, i) => {
        const hour = Math.floor(wishTime / 100);
        const minute = wishTime  % 100;
        const time_value = (hour * 60) + minute;
        let flag = true;
        for (let j = 0; j < 7; j++) {
            const now_day = (startday + j) % 7;
            const now_value = Math.floor(timelogs[i][j] / 100) * 60 + timelogs[i][j] % 100;
            if (now_day === 0 || now_day === 6) {
                continue;
            }
            if (now_value > time_value + 10) {
                flag = false;
                break;
            }
        }
        if (flag) result++;
    })
    return result;
}