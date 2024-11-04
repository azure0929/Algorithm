/**
* 빵-야채-고기-빵
* 포장하는 햄버거의 개수 return
* 각 요소를 순차적으로 스택에 추가. 1231이 만들어지면 해당 패턴 제거 후 카운트를 증가시킴.
*/

function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // 스택의 마지막 4개 요소가 1, 2, 3, 1인지 확인
        if (stack.length >= 4 &&
            stack[stack.length - 4] === 1 &&
            stack[stack.length - 3] === 2 &&
            stack[stack.length - 2] === 3 &&
            stack[stack.length - 1] === 1) {
            
            // 패턴이 발견되면 제거
            stack.splice(stack.length - 4, 4);
            answer += 1; // 패턴 등장 횟수 증가
        }
    }
    
    return answer;
}