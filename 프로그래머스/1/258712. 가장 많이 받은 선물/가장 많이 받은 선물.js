/**
* 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받음
* 선물 지수: 이번 달까지 자신이 친구들에게 준 선물의 수에서 받은 선물의 수를 뺀 값
*/

function solution(friends, gifts) {
    const len = friends.length; // 친구 수를 저장
    const nameMap = new Map(); // 친구 이름과 인덱스를 매핑하기 위한 Map
    const giftTable = Array.from({ length: len }, () => Array(len).fill(0)); // 선물 내역을 저장할 2차원 배열 초기화
    const rankInfo = Array(len).fill(0); // 선물 지수를 저장할 배열 초기화
    const nextMonth = Array(len).fill(0); // 다음 달 예상 선물 개수를 저장할 배열 초기화

    // 친구 이름과 인덱스를 Map에 저장
    friends.forEach((name, idx) => nameMap.set(name, idx));

    // 선물 내역을 2차원 배열에 기록
    gifts.forEach(info => {
        const [from, to] = info.split(" "); // 선물을 준 사람과 받은 사람 분리
        const fromIdx = nameMap.get(from); // 준 사람의 인덱스 가져오기
        const toIdx = nameMap.get(to); // 받은 사람의 인덱스 가져오기
        giftTable[fromIdx][toIdx]++; // 선물 내역 기록
    });

    // 선물 지수(rankInfo) 계산
    for (let i = 0; i < len; i++) {
        let sent = 0, received = 0; // 보낸 선물과 받은 선물 개수 초기화
        for (let j = 0; j < len; j++) {
            sent += giftTable[i][j]; // i번 친구가 보낸 선물 개수 합산
            received += giftTable[j][i]; // i번 친구가 받은 선물 개수 합산
        }
        rankInfo[i] = sent - received; // 선물 지수 = 보낸 선물 - 받은 선물
    }

    // 다음 달 받을 선물(nextMonth) 계산
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) { // i번 친구와 j번 친구 비교
            if (giftTable[i][j] > giftTable[j][i]) { // i가 j에게 더 많이 선물했으면
                nextMonth[i]++; // i가 더 많은 선물을 받음
            } else if (giftTable[i][j] < giftTable[j][i]) { // j가 i에게 더 많이 선물했으면
                nextMonth[j]++; // j가 더 많은 선물을 받음
            } else { // i와 j가 서로 같은 횟수로 선물했을 때
                if (rankInfo[i] > rankInfo[j]) { // 선물 지수로 비교하여
                    nextMonth[i]++; // i가 더 많이 받음
                } else if (rankInfo[i] < rankInfo[j]) {
                    nextMonth[j]++; // j가 더 많이 받음
                }
            }
        }
    }

    // 다음 달 받을 선물 개수 중 최대값 반환
    return Math.max(...nextMonth);
}
