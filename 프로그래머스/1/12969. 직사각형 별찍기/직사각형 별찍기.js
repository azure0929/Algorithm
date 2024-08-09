/**
* 정사각형 형태 출력
* process.stdin.setEncoding("utf8") : 표준 입력 스트림의 인코딩을 UTF-8로 설정
* process.stdin.on("data", data => { ... }) : 표준 입력에서 데이터가 들어올 때마다 실행될 콜백 함수를 설정
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a, b] = data.split(" ").map(Number); // 배열을 숫자로 변환
    const row = "*".repeat(a); // 한 줄에 출력할 별의 문자열을 생성
    for (let i = 0; i < b; i++) {
        console.log(row); // 문자열을 출력
    }
});