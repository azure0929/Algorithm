/**
* 추월한 선수의 이름을 부름
* 1등부터 등수 순서대로 배열에 담아 return
* indexOf : 배열에서 주어진 요소를 찾을 수 있는 첫 번째 index를 반환, 찾을 수 없는 경우 -1을 반환
* splice : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
*/

function solution(players, callings) {
    const playerSet = new Set(players); // 중복을 방지하기 위해 Set을 생성
    const playerMap = new Map(); // 선수와 해당 인덱스를 매핑하는 Map을 생성

    // 플레이어와 인덱스를 매핑하여 Map에 저장
    players.forEach((player, index) => {
        playerMap.set(player, index);
    });

    for (let i = 0; i < callings.length; i++) {
        const currentPlayer = callings[i];
        if (playerSet.has(currentPlayer)) { // 호출된 선수가 배열에 존재하는지 확인
            const idx = playerMap.get(currentPlayer); // 호출된 선수의 인덱스를 가져옴
            if (idx !== 0) { // 첫 번째 선수가 아닌 경우에만 실행
                const temp = players[idx - 1]; // 이전 선수 저장

                // 해당 인덱스와 이전 인덱스의 원소를 교환
                players[idx - 1] = currentPlayer;
                players[idx] = temp;

                // Map의 인덱스 업데이트
                playerMap.set(currentPlayer, idx - 1);
                playerMap.set(temp, idx);
            }
        }
    }

    return players;
}
