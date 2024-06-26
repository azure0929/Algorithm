/**
* 0부터 9까지의 숫자를 모두 찾아 더한 수를 return
* Set : 중복된 값을 허용하지 않으며, 원소의 검색 시간 복잡도가 0이므로 매우 효율적
* has : Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환
*/

function solution(numbers) {
    let answer = 0;
    const numberSet = new Set(numbers); // 입력 배열을 Set으로 반환
    
    // 0부터 9까지 반복하면서 Set에 포함되지 않은 숫자들을 answer에 더함
    for (let i = 0; i < 10; i++) {
        if (!numberSet.has(i)) {
            answer += i;
        }
    }
    
    
    return answer;
}