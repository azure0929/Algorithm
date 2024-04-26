// n의 배수가 아닌 수들을 제거한 배열을 return
// numlist 안에 있는 요소들을 n으로 나누었을 때 나머지가 없다면 n의 배수, filter를 사용
// ex. numlist에서 3의 배수만을 남긴 6,9,12를 return

function solution(n, numlist) {
    return numlist.filter((item) => item % n === 0);
}