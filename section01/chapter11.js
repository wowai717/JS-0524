// 함수 
// function greeting (){
//     console.log("안녕하세요");
// }
// console.log("호출전");
// greeting();
// console.log("호출 후");


// function getArea(width, height) {
//     let area = width * height;

//     console.log(area);
// }

// function getArea(width, height) {
//     function another() {     //중첩 함수
//         console.log("another");
//     }
//     another();
//     let area = width * height;

//     return area;
// }


let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200)

//호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {     
    function another() {     //중첩 함수
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}