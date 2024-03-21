// 이모티콘 할인 행사
// 서비스 가입자를 최대한 늘리는 것
// m개를 할인하여 판매
// 일정 비율 이상 할인하는 이모티콘 모두 구매

function solution(users, emoticons) {
    // 할인율 퍼센테이지
    const salePercent = [10, 20, 30, 40];
    // 가능한 경우의 모든 할인율
    const cases = [];
    // 임시 사용 배열
    const arr = [];
    // emoticons의 길이
    const emoLen = emoticons.length;
    // 정답 이모티콘 플러스 사용자 수와 총 소득 배열
    const result = [0, 0];

    // 모든 가능한 할인율 경우를 구하는 재귀 함수
    function saleDFS(depth = 0) {
        if(depth === emoLen) { // 재귀 깊이가 이모티콘 개수와 같아지면
            cases.push([...arr]); // 배열 복사하여 cases에 추가
            return;
        }
        for(let i = 0; i < salePercent.length; i++) {
            arr[depth] = salePercent[i];
            saleDFS(depth + 1); // 재귀 호출
        }
    }
    saleDFS(); // 할인율 경우 구하기

    // 모든 경우를 순회하며 처리
    cases.forEach((curCase) => {
        let emoticonPlus = 0; // 해당 할인율의 이모티콘 플러스 가입자 수
        let sumPrice = 0; // 해당 할인율의 총 소득

        // 사용자를 순회하며 할인율에 따라 구매 여부 결정
        users.forEach(([buyPercent, buyPlus]) => {
            let price = 0;
            let etPlusFlag = false;

            emoticons.every((et, etIdx) => {
                if(curCase[etIdx] >= buyPercent) { // 해당 할인율로 구매 가능한 경우
                    price += et * (100 - curCase[etIdx]) / 100; // 가격 계산
                }
                if(price >= buyPlus) { // 플러스 이모티콘 구매 가능한 경우
                    etPlusFlag = true;
                    return false; // 순회 중단
                }
                return true;
            });

            if(etPlusFlag) emoticonPlus++; // 플러스 이모티콘 구매자인 경우
            else sumPrice += price; // 일반 구매자인 경우
        });

        // 이번 할인율이 기존 최대 이모티콘 플러스 사용자 수를 능가하거나 같지만 총 소득이 더 높은 경우 갱신
        if(emoticonPlus > result[0] || (emoticonPlus === result[0] && sumPrice > result[1])) {
            result[0] = emoticonPlus;
            result[1] = sumPrice;
        }
    });

    return result; // 최종 결과 반환
}
