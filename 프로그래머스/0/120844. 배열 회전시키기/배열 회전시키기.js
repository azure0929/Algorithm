// numbers의 원소를 direction 방향으로 한 칸씩 회전시킨 배열을 return
// 배열의 매서드 : push, pop, shift, unshift

function solution(numbers, direction) {
    if (direction === 'right') {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    
    return numbers;
}