/**
* 한 번에 한 명의 유저를 신고 할 수 있음
* 동일한 유저에 대한 신고 횟수는 1회로 처리됨
* k번 이상 신고된 유저는 게시판 이용이 정지됨
* 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
* 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
*/

function solution(id_list, report, k) {
    // 신고 기록을 저장할 Map 생성 (중복 신고 방지)
    const reportMap = new Map();
    const reportCount = new Map();

    // 초기화: 신고자별 신고 목록과 신고당한 횟수를 기록
    id_list.forEach(id => {
        reportMap.set(id, new Set());  // 신고 중복 방지를 위해 Set 사용
        reportCount.set(id, 0);       // 신고당한 횟수 초기화
    });

    // 각 신고 기록을 분리하여 Map에 기록
    report.forEach(entry => {
        const [user_id, report_id] = entry.split(" ");
        if (!reportMap.get(user_id).has(report_id)) { // 중복 신고 방지
            reportMap.get(user_id).add(report_id);
            reportCount.set(report_id, reportCount.get(report_id) + 1);
        }
    });

    // 신고 처리 결과를 메일로 받을 횟수 계산
    const result = id_list.map(user_id => {
        let mailCount = 0;
        for (const reportedUser of reportMap.get(user_id)) {
            if (reportCount.get(reportedUser) >= k) {
                mailCount++;
            }
        }
        return mailCount;
    });

    return result;
}