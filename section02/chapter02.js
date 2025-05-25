// function returnFalse() {
//     console.log("false함수")
//     return undefined;
// }

// function returnTrue() {
//     console.log("true함수")
//     return 10;
// }

// console.log(returnFalse() && returnTrue());


//단락 평가 활용 사례

// function printName(person){
//     if(!person){
//         console.log("person의 값이 없음")
//         return;
//     }
//     console.log(person.name)

// }

function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");

}

printName();
printName({name: "남우준"});