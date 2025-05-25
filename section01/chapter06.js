//1.  묵시적 형 변환
// -> js 엔진이 알아서 형 변환 함

let num = 10;
let str = "20"

const result =num + str;


// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let st1 = "10";
let strToNum1 = Number(st1);
console.log(10 + strToNum1)

let str2 = "10개";
let srtToNum2 = parseInt(str2);
console.log(srtToNum2)

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
