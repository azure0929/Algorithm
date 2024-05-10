/**
* 동류항끼리 게산해 정리
* 동류할끼리 더한 결과값을 문자열로 return
* x만 존재
* 문자와 숫자 사이의 곲하기는 생략
* match : 문자열이 정규식과 매치되는 부분을 검색
* sort : 배열의 요소를 적절ㅈ한 위치에 정렬한 후 그 배열을 반환
* parseInt : 문자열 인자를 파싱하여 특정 진수의 정수를 반환
* slice : 어떤 배열의 begin부터 end까지에 대한 얕은 복사본을 새로운 배열 객체로 반환. 원본 배열은 바뀌지 않음
* forEach : 각 배열 요소에 대해 제공된 함수를 한 번씩 실행
* isNaN : 어떤 값이 NaN인지 판별
* replace : pattern의 단일, 일부 혹은 모든 일치 항목이 replacement로 대치된 새로운 문자열을 반환
* include : 한 스타일시트의 content를 다른 스타일시트에 합침
*/

function solution(polynomial) {
  // 모든 식은 더하기이기 때문에 " + "를 기준으로 문자열을 배열로
  const arr = polynomial.split(" + ");

  let xNum = 0;
  let num = 0;

  // 분리해둔 arr을 forEach() 메서드를 이용해 하나씩 확인
  arr.forEach((n) => {
    // x가 포함되어 있는지 확인
    if (n.includes("x")) {
      // x가 포함되어있다면 x를 제거
      // 만약 x를 제거하였는데 공백일 경우 "1"을
      const strVal = n.replace("x", "") || "1";

      // 구한 값을 정수로 바꾸어 더함
      xNum += parseInt(strVal, 10);
    } else {
      // x가 포함되지 않았다면 숫자이므로 정수형으로 바꾸어 더함
      num += parseInt(n);
    }
  });

  let answer = [];
  // 구해둔 xNum이 1을 경우 공백으로 아니면 그대로 입력하고 뒤에 x를 붙임
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  // 배열을 활용하여 +를 넣어 문자열로 만들고 반환
  return answer.join(" + ");
}
