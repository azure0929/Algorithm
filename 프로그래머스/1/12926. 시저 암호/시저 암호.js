/**
* for...of: 반복 가능한 객체에서 요소를 쉽게 순회하는 데 사용되는 문법
*/

function solution(s, n) {
    let answer = '';

    for (let char of s) {
        if (char === ' ') {
            answer += ' ';
            continue;
        }

        let base = char.charCodeAt(0) < 97 ? 65 : 97; // 대문자면 65(A), 소문자면 97(a)
        let newChar = String.fromCharCode((char.charCodeAt(0) - base + n) % 26 + base);
        answer += newChar;
    }

    return answer;
}