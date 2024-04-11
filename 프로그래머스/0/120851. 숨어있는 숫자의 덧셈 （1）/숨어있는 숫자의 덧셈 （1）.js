// 모든 자연수들의 합을 return

function solution(my_string) {
    return my_string
        .match(/\d/g) // 숫자 문자만 매치
        .reduce((sum, num) => sum + Number(num), 0); // 모든 숫자 문자를 합산
}