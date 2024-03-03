// 길이 5 이하의 모든 단어가 수록됨
// 첫 번째 단어 : A
// 그 다음 : AA
// 마지막 단어 : UUUUU
// 알파벳 모음 : A, E, I, O, U

// 길이 : 1 이상 5 이하

function solution(word) {
    // 사용 가능한 모음을 나타내는 배열
    let dic = ["A", "E", "I", "O", "U"];

    // 단어를 변경하는 스위치 변수
    let ChangeSwitcher = true;

    // 정답을 저장할 변수, 초기값은 -1로 설정
    let answer = -1;

    // 깊이 우선 탐색(DFS) 함수 정의
    function DFS(W) {
        // 스위치가 켜져 있을 때
        if (ChangeSwitcher) {
            // 단어 변경 횟수 증가
            answer++;

            // 주어진 단어가 만들어진 경우, 스위치를 끄고 종료
            if (W === word) {
                ChangeSwitcher = false;
                return;
            } 
            // 주어진 단어가 아직 만들어지지 않았고, 단어 길이가 5 미만일 때
            else if (W !== word && W.length < 5) {
                // 각 모음을 추가하여 다음 단계의 DFS 호출
                for (let i = 0; i < dic.length; i++) {
                    DFS(W + dic[i]);
                }
            } 
            // 단어 길이가 5 이상이면 종료
            else {
                return;
            }
        }
    }

    // DFS 시작, 초기 단어는 빈 문자열
    DFS("");

    // 최종적으로 만들어진 단어까지의 변경 횟수 반환
    return answer;
}