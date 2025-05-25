// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value)=>{
//     console.log(value)
// });

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
