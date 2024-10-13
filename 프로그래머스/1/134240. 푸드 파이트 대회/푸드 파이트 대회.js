/**
* 매 대결마다 음식의 종류와 양이 바뀜
* 물을 먼저 먹는 선수가 승리
* 순서는 같도록
* 칼로리가 적은 순서대로 나타내는 정수 배열 food
* toString: 해당 object를 표현하는 문자열을 반환
*/

function solution(food) {
    let left = ''; // 왼쪽 부분을 구성할 문자열 생성
    for (let i = 1; i < food.length; i++) {
        // i번째 음식의 개수를 2로 나눈 몫만큼 해당 index를 반복하여 추가
        left += i.toString().repeat(Math.floor(food[i] / 2));
    }
    // 최종적으로 left + 0(중앙) + left를 뒤집은 값을 반환
    return left + '0' + [...left].reverse().join('');
}