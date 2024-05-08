// [0,0]에서 up을 누르면 캐릭터의 좌표 : [0,1]
// 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x,y]를 return
// Math.max : 이 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환, 매개변수가 없을 경우, Infinity를 반환
// Math.min : 주어진 숫자들 중 가장 작은 값을 반환
// Math.floor : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환

function solution(keyinput, board) {
    // 1. 초기 x,y 좌표를 선언
    let x = 0;
    let y = 0;
    
    // 2. 보드의 너비와 높이의 절반을 구하여 범위를 설정
    let range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
    
    // 3. keyinput 배열의 각 요소를 반복하며 좌표를 변경
    for (let k of keyinput) {
        switch (k) {
            case "left": x--; break; // 왼쪽으로 이동
            case "right": x++; break; // 오른쪽으로 이동
            case "down": y--; break; // 아래로 이동
            case "up": y++; break; // 위로 이동
        }
        
        // 4. x와 y 좌표가 설정 병뮈를 넘어간 경우, 최댓값 또는 최솟값으로 조정
        x = Math.max(-range[0], Math.min(x, range[0]));
        y = Math.max(-range[1], Math.min(y, range[1]));
    }
    
    return [x, y];
}