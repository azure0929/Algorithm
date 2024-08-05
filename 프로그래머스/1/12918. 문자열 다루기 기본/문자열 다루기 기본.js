/**
* 숫자로만 구성돼었는지 확인해주는 함수
* 1 이상 8이하
*/

function solution(s) {
    if (s.length === 4 || s.length === 6) {
        for (let char of s) {
            if (char < "0" || char > "9") {
                return false;
            }
        }
        
        return true;
    }
    return false;
}