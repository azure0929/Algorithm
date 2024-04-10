// array에 n이 몇 개 있는 지를 return
// Array.filter() : 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출
// callbackdl true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열 생성

function solution(array, n) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            newArr.push(array[i]);
        }
    }
    
    return newArr.length;
}