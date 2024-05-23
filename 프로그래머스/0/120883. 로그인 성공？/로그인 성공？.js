/**
* 일치 : login return
* 일치x : fail / 일치&비번x : wrong pw return
* for...of : 반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성
*/

function solution(id_pw, db) {
    // 주어진 id와 pw를 데이터베이스와 비교하여 로그인 상태를 결정하는 함수
    
    // 데이터베이스 배열을 반복하여 검사
    for (let item of db) {
        // 현재 항목의 id와 주어진 id가 일치하는지 확인
        if (id_pw[0] === item[0]) {
            // id가 일치하는 경우
            // 비밀번호가 일치하는지 확인
            if (id_pw[1] === item[1]) {
                // 비밀번호도 일치하는 경우 로그인 성공
                return 'login';
            } else {
                // 비밀번호가 일치하지 않는 경우
                return 'wrong pw';
            }
        }
    }
    
    // 데이터베이스에 주어진 id가 있는 경우
    return 'fail';
}