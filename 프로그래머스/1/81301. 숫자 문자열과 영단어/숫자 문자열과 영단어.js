/**
* Object.entries: for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환.
*/

function solution(s) {
    const numbers = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    
    for (let [word, digit] of Object.entries(numbers)) {
        s = s.replaceAll(word, digit);
    }
    
    return Number(s);
}