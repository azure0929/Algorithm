// fill() 메서드 : 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 그리고, 수정된 배열을 반환

function solution(numbers) {
    // 결과값을 저장할 배열
    let answer = [];
    // 입력된 숫자를 각 자릿수로 분리하여 배열에 저장
    let numArr = numbers.split("");
    
    // fixedNum : 순열을 통해 모든 조합을 생성할 때 고정할 숫자값
    function getPermutationArr(numArr, fixedNum) {
        // 종료 조건: 배열의 길이가 0이면 함수 종료
        if (numArr.length === 0) return;
        
        // 배열의 각 요소에 대해 순회
        for (let i = 0; i < numArr.length; i++) {
            // 새로운 숫자 조합 생성
            const newNum = fixedNum + numArr[i];
            // 현재 숫자를 제외한 배열 복사
            const copyArr = [...numArr];
            
            // 현재 숫자를 배열에서 제거
            copyArr.splice(i, 1);
            
            // 생성된 숫자가 결과 배열에 없고, 소수인 경우 결과 배열에 추가
            if (!answer.includes(+newNum) && isPrime(+newNum)) {
                answer.push(+newNum);
            }
            
            // 재귀 호출로 순열 조합 계속 생성
            getPermutationArr(copyArr, newNum);
        }
    }
    
    // 소수 판별 함수
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 초기 순열 생성 함수 호출
    getPermutationArr(numArr, "");
    
    // 결과 배열의 길이 반환
    return answer.length;
}