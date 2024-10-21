/**
* getDay: 주어진 날짜의 현지 시간 기준 요일을 반환.
* 0 = 일요일
* Date 생성자: 시간의 특정 지정을 나타내는 Date객체를 플랫폼에 종속되지 않는 형태로 생성.
*/

function solution(a, b) {
    const weekToDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    // 2016년의 날짜 객체 생성 (월은 0부터 시작하므로 a-1)
    const date = new Date(2016, a - 1, b);
    
    // getDay() 메서드로 요일 계산 (0: SUN, 1: MON, ...)
    return weekToDay[date.getDay()];
}