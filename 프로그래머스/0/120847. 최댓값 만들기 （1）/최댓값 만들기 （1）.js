// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return
// Array.sort() : 배열 Array의 요소를 제자리에 정렬 하고 이제 정렬된 동일한 배열에 대한 참조를 반환

function solution(numbers) {
    numbers.sort((a,b) => b - a); // numbers 배열을 내림차순으로 정렬
    return numbers[0]*numbers[1]; // 정렬된 배열에서 두 개의 최댓값을 곱하여 반환
}