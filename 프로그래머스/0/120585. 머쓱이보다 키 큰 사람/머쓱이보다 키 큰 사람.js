// 머쓱이보다 키 큰 사람 수 return

function solution(array, height) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) answer++;
    } 
    return answer;
}