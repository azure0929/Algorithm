// 해시 - 폰켓몬

function solution(nums) {
  var answer = 0;

  let cnt = nums.length / 2;

  // 중복 제거
  let arr = nums.filter((element, index) => {
    return nums.indexOf(element) === index;
  });
  if (arr.length > cnt) {
    answer = cnt;
  } else {
    answer = arr.length;
  }

  return answer;
}
