/**
* 엄지: 상하좌우 4가지 방향 / 키패드 이동 한 칸: 거리로 1
* 1, 4, 7: 왼손 엄지 사용
* 3, 6, 9: 오른손 엄지 사용
* 2, 5, 8, 0: 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락 사용
* 순서대로 누를 번호가 담긴 배열 numbers
* 왼손잡이인지 오른손잡이인지를 나타내는 문자열 hand
* 각 번호를 누른 엄지손가락이 왼손인지 오른손인지를 나타내는 연속된 문자열 형대로 return
* Manhattan Distance
* -> 2차원 평면 공간에서 두 점 p와 q 사이의 거리를 측정하는 방법 중 하나
* -> 손의 위치와 목표 위치 간의 거리를 계산하면 됨
* 1) 해시 맵을 사용하여 각 키의 좌표를 미리 저장
* 2) 현재 손 위치를 저장할 변수(left, right)와 결과 문자열(answer)을 사용
* 3) Manhattan 거리를 이용해 손의 위치와 목표 위치 간의 거리 계산
*/

function solution(numbers, hand) {
    // 키패드 좌표를 저장한 해시 맵
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };

    // 초기 손 위치
    let left = '*';
    let right = '#';
    let answer = '';

    // 거리 계산 함수 (Manhattan 거리)
    function getDistance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }

    // 숫자를 하나씩 순회
    for (let num of numbers) {
        // 왼손으로 누르는 숫자
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            left = num;
        } 
        // 오른손으로 누르는 숫자
        else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            right = num;
        } 
        // 중앙 숫자 (2, 5, 8, 0)
        else {
            const leftDistance = getDistance(keypad[left], keypad[num]);
            const rightDistance = getDistance(keypad[right], keypad[num]);

            // 거리가 같을 때 손잡이에 따라 결정
            if (leftDistance === rightDistance) {
                if (hand === 'right') {
                    answer += 'R';
                    right = num;
                } else {
                    answer += 'L';
                    left = num;
                }
            } 
            // 오른손의 거리가 더 멀 때
            else if (leftDistance < rightDistance) {
                answer += 'L';
                left = num;
            } 
            // 왼손의 거리가 더 멀 때
            else {
                answer += 'R';
                right = num;
            }
        }
    }

    return answer;
}
