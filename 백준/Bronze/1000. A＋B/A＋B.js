const fs = require('fs'); // file system 불러오기, fs: node.js가 제공하는 file system 모듈
// fs.readFileSync('/dev/stdin').toString(): 파일 읽어오기
// .split(' '): 데이터 파싱하기
// .map(Number): 문자열을 숫자배열로 바꿔주기
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(a + b);