/**
* 그리움 점수를 모두 합산한 값 = 해당 사진의 추억 점수
* Set: 데이터를 순서없이 저장
*/

function solution(name, yearning, photo) {
    // 이름과 점수를 매핑하기 위해 객체를 생성
    const memory = {};
    
    // 객체에 이름과 해당 yearning 점수를 추가
    for (let i = 0; i < name.length; i++) {
        memory[name[i]] = yearning[i];
    }
    
    // photo 배열을 순회하며 각 사진의 총 yearning 점수를 계산
    return photo.map((arr) => {
        // Set을 사용하여 고유한 이름을 수집
        const uniqueNames = new Set(arr);
        
        // Set에 있는 이름들의 점수를 합산
        let totalScore = 0;
        uniqueNames.forEach((name) => {
            totalScore += (memory[name] || 0);
        });
        
        return totalScore;
    })
}