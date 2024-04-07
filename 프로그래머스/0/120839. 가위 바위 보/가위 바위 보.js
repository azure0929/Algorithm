// 내는 순더대로 나타낸 문자열 rsp
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열 return

function solution(rsp) {
    
    let result = '';
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            result += '0';
        } else if (rsp[i] === '0') {
            result += '5';
        } else if (rsp[i] === '5') {
            result += '2';
        }
    } 
    
    return result;
}