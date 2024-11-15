/**
* s를 변환한 결과를 return
* s의 길이: 5 이상 50 이하
* skip의 길이: 1 이상 10 이하
*/

function solution(s, skip, index) {
    // Set을 사용하여 skip 문자열 확인을 O(1)로 줄임
    const skipSet = new Set(skip);
    const alphabet = [];

    // 알파벳에서 skipSet에 없는 문자만 필터링
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97 + i); // 'a'는 97
        if (!skipSet.has(char)) {
          alphabet.push(char);
        }
    }

    // s 문자열을 map을 통해 변환
    return s
        .split("")
        .map((a) => {
          const currentIndex = alphabet.indexOf(a);
          const newIndex = (currentIndex + index) % alphabet.length;
          return alphabet[newIndex];
        })
        .join("");
}