// 함수 표현식식

function funcA () {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function  () { //익명함수
    // console.log("funcB")
};

varB();


// 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));