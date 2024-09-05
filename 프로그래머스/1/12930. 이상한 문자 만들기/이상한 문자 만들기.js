/**
* 짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로 바꾼 문자열을 return
*/

function solution(s) {
    let result = [];
    
    s.split(' ').forEach(word => {
        let transformedWord = word.split('').map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('');
        
        result.push(transformedWord);
    });
    
    return result.join(' ');
}