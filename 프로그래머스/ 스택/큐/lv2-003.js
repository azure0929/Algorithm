// 스택/큐 - 올바른 괄호

function solution(s) {
  //     const stack = [];

  //     for (let i = 0; i < s.length; i++) {
  //         if (stack[stack.length - 1] === '(' && s[i] === ')') {
  //             stack.pop();
  //         } else {
  //             stack.push(s[i]);
  //         }
  //     }

  //     return !stack.length;

  let result = 0;

  // 문자열 's'의 첫 번째 문자가 닫는 괄호 ')'인 경우, 즉시 'false'를 반환
  if (s[0] === ")") return false;

  // 반복문을 사용하여 문자열 's'순회
  for (let i = 0; i < s.length; i++) {
    // 만약 'result'가 음수인 경우, 현재까지의 여는 괄호보다 닫는 괄호가 많은 경우, 유효한 괄호 문자열이 아니므로 즉시 'false'를 반환
    if (result < 0) return false;

    if (s[i] === "(") result++;
    if (s[i] === ")") result--;
  }

  return !result;
}
