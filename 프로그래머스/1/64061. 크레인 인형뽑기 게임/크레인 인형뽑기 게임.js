
/**
* 크레인을 좌우로 움직여서 사용
* 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
*/

function solution(board, moves) {
    // 1. 보드를 전치하여 열을 기준으로 스택 배열 생성
    const stacks = board[0].map((_, colIndex) => board.map(row => row[colIndex]).reverse().filter(el => el !== 0));
    
    const basket = []; // 바구니를 관리할 배열
    let score = 0; // 터진 인형 쌍의 개수
    
    // 2. 크레인의 이동 시뮬레이션
    moves.forEach(move => {
        const stack = stacks[move - 1]; // 해당 열의 스택 가져오기
        if (stack.length > 0) {
            const picked = stack.pop(); // 인형 꺼내기
            
            // 바구니 마지막 인형과 비교
            if (basket[basket.length - 1] === picked) {
                basket.pop(); // 동일하면 제거
                score += 2; // 점수 추가
            } else {
                basket.push(picked); // 다르면 바구니에 추가
            }
        } 
    });
    
    return score; // 터진 인형 쌍의 개수 반환
}