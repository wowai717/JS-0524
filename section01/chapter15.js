// 객체 생성
let obj1 = new Object() //객체 생성자
let obj2 = {} ;   //객체 리터럴 (대부분 사용)


//객체 프로퍼티 (객체 속성)   key : value   key값은 문자나 숫자열만 
let person = {
    name : "남우준",
    age : 23,
    hobby : "애니",
    job : "FE Developer",
    extra : {},
    10: 20,
    "like cat": true,
};


// 객체 프로퍼티를 다루는 방법
// 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법 )
let name = person.name;


let age = person["age"]  //"" 해야함 안하면 변수로 인식해서 오류 / 동적사용


let property = "hobby";
let hobby =person[property];


// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "엄준식";

// 3.2 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜릿"

// 3.4 프로퍼티를 삭제하는 방버
delete person.job;
person["favoriteFood"];


// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
