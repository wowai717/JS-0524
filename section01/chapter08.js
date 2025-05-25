// null 병합 연산자
// ->  존재하는 값을 추려내는 긴으
// -> null, undefined 가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;


let var4 = var1 ?? var2;
let var5 = var1 ?? var2;
let var6 = var3 ?? var2;

let userName;
let userNickName = "Winterlood";
let displayName = userName ?? userNickName;

// typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능

let var7 = 1;
var7 = "hello"
var7 = true;

let t1 = typeof var7;


//삼항 연산자
// -> 항을 3개 사용하는 연산자 
// -> 조건식을 이용해서 참, 거짓일때의 값을 다르게 반환

// 요구사항 : 변수 res에 var8 의 값이 짝수 -> "짝" 홀수 -> "홀"
let res = var8 & 2 === 0 ? "짝수" : "홀수";
