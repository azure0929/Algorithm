// 해시 - 전화번호 목록

// 한 번호가 다른 번호의 접두사인 경우가 없음 = 답은 true
// 첫 번째 전화번호, "12"가 두 번째 전화번호 "123"의 접두사 = 답은 false

function solution(phone_book) {
  // var answer = true;

  phone_book.sort(); // 전화번호 리스트 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호와 다음 번호의 시작 부분이 같으면 접두어이므로 false를 반환
    if (
      phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)
    ) {
      return false;
    }
  }

  return true;
}
