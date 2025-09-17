const o = { a: 1 };
console.log('a' in o); // true
console.log('toString' in o); // true  (از prototype می‌آید)
console.log('b' in o); // false



const parent = { p: 1 };
const z = Object.create(parent);
z.a = 10;
console.log(z.hasOwnProperty('a')); // true
console.log(z.hasOwnProperty('p')); // false
console.log(z.hasOwnProperty('toString')); // false































// const parent = { z: 9 };   // این شیء مثل والد یا پروتوتایپ عمل می‌کنه
// const obj = Object.create(parent); // ساختن obj با لینک به parent
// obj.a = 1; // پراپرتی مخصوص خود obj
// console.log(obj);
// console.log(obj.z);
// console.log(Object.keys(obj).toString()); 


// // بسط دادن: اضافه کردن متد دلخواه به Object.prototype
// // اضافه کردن یک متد جدید به Object.prototype
// Object.prototype.sayHello = function () {
//   return "سلام! من یک آبجکت هستم 🙋‍♂️";
// };

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// console.log(obj1.sayHello()); // "سلام! من یک آبجکت هستم 🙋‍♂️"
// console.log(obj2.sayHello()); // "سلام! من یک آبجکت هستم 
// // 🙋‍♂️"




// // روش جایگزین تعریف پراپرتی در prototype
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function() {
//   return `سلام ${this.name}`;
// };

// const user = new Person("Ali");
// console.log(user.sayHello()); // "سلام Ali"