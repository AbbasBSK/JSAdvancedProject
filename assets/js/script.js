// // تابع خالص
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5 (همیشه یکسان)

// let c = 10;
// const addWithC = (a, b) => a + b + c;
// console.log(addWithC(2, 3)); // 15
// c = 20;
// console.log(addWithC(2, 3)); // 25 (خروجی تغییر کرد!)

// const numbers = [1, 2, 3];
// // تغییرناپذیر
// const newNumbers = [...numbers, 4];
// console.log(newNumbers); // [1, 2, 3, 4]
// console.log(numbers);    // [1, 2, 3] (تغییر نکرده)

const numbers = [1, 2, 3];

// map یک تابع مرتبه بالاست
const doubled = numbers.map(x => x * 2);

console.log(doubled); // [2, 4, 6]