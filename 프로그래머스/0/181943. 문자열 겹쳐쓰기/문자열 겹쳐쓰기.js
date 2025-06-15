/**
* 인덱스 s부터 overwrite_string의 길이만큼을 문자열로 바꾼 문자열을 return
*/

function solution(my_string, overwrite_string, s) {
    return my_string.slice(0, s)
        + overwrite_string
        + my_string.slice(s + overwrite_string.length);
}