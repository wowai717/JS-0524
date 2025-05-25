// 콜백함수
function main (value) {
    value();
}

main( ()=> {
    // console.log("i am sub");
});

// 콜백함수 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx ++){
        callback(idx);
    }
}

repeat(5, (idx) =>{
    console.log(idx);
});

repeat(5, (idx) =>{
    console.log(idx * 2);
})

repeat(5, (idx) => {
    console.log(idx *3);
})