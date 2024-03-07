// k개의 수를 제거했을 때 얻을 수 있는 가장 큰 수를 구함

function solution(number, k) {
    // 스택을 사용하여 큰 수를 만들기 위한 배열 선언
    const stack = [];
    
    // 주어진 숫자 배열을 순회하면서 큰 수를 만들어나감
    for (const num of number) {
        // 스택이 비어있지 않고, 스택의 마지막 요소가 현재 숫자보다 작으면 반복
        while (k > 0 && stack[stack.length - 1] < num) {
            // 스택의 마지막 요소를 제거하고 k 감소
            stack.pop();
            k--;
        }
        // 현재 숫자를 스택에 추가
        stack.push(num);
    }
    
    // 만약 k가 남아있다면, 남은 k만큼 스택의 뒤에서 제거
    stack.splice(stack.length - k, k);
    
    // 최종적으로 스택의 요소들을 문자열로 결합하여 반환
    return stack.join("");
}