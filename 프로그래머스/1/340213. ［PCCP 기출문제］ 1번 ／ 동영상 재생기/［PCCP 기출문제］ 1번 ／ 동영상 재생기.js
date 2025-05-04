/*
* 동영상 재상기 제작
* 10초 전으로, 10초 후로, 오프닝 건너뛰기 3가지 기능
* prev: 동영상의 재생 위치를 10초 전으로
* 현재 위치가 10초 미만인 경우 영상의 처음 위치로 이동
* 0분 0초
* next: 동영상의 재상 위치를 10초 후로
* 동영상의 남은 위치가 10초 미만일 경우 마지막 위치로 이동
* 영상의 마지막 위치 = 동영상의 길이
* 분, 초가 한 자리일 경우 0을 붙여 두 자리로 나타냄
*/

function solution(video_len, pos, op_start, op_end, commands) {
  // 시간을 초 단위로 변환하는 함수
  const toSeconds = (time) => {
    const [min, sec] = time.split(":").map(Number);
    return min * 60 + sec;
  };

  // 초 단위를 "MM:SS" 형식으로 변환하는 함수
  const toTimeFormat = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  // 오프닝 구간에 있는지 확인하는 함수
  const isInOpening = (time, start, end) => time >= start && time <= end;

  // 입력값을 초 단위로 변환
  const videoLenSec = toSeconds(video_len);
  let currentPos = toSeconds(pos);
  const opStartSec = toSeconds(op_start);
  const opEndSec = toSeconds(op_end);

  // 초기 위치가 오프닝 구간이면 오프닝 종료 시각으로 이동
  if (isInOpening(currentPos, opStartSec, opEndSec)) {
    currentPos = opEndSec;
  }

  // 명령어 처리
  for (const command of commands) {
    if (command === "prev") {
      currentPos = Math.max(currentPos - 10, 0);
    } else if (command === "next") {
      currentPos = Math.min(currentPos + 10, videoLenSec);
    }

    // 이동 후 오프닝 구간에 진입하면 오프닝 종료 시각으로 이동
    if (isInOpening(currentPos, opStartSec, opEndSec)) {
      currentPos = opEndSec;
    }
  }

  // 결과를 "MM:SS" 형식으로 반환
  return toTimeFormat(currentPos);
}