// const user1 = {
//   name: "Abbas",
//   age: 30
// };

// const user2 = {
//   name: "Ali",
//   age: 25
// };

// console.log(user1);
// console.log(user2);

// // Constructor Pattern
// function User (name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user3 = new User("Abbas", 30);
// const user4 = new User("Ali", 25);

// console.log(user3);
// console.log(user4);


// // روش سنتی بدون پترن:
// function Dog(name) {
//   this.name = name;
//   this.bark = function() {
//     console.log("Woof!");
//   };
// }
// // اینجا هر سگ یه کپی از تابع bark داره → یعنی حافظه هدر می‌ره.

// // روش با Prototype Pattern:

// function Dog1(name) {
//   this.name = name;
// }
// // اضافه کردن متد bark به prototype
// Dog1.prototype.bark = function() {
//   console.log("Woof!");
// };

// // ساخت نمونه از Dog
// const myDog = new Dog("Buddy");

// // اجرای متد bark
// myDog.bark(); // ← خروجی در کنسول: Woof!
































// import { createProductCard } from '/assets/js/moduls/product.js';
// import { products , images1 , images2 } from '/assets/js/moduls/data.js';
// import { createAutoSlider } from '/assets/js/moduls/slider.js';
// import { toggleTheme } from './moduls/them.js';

// // ایجاد کارت‌ها
// const productsContainer = document.getElementById('products');
// products.forEach(product => {
//   const card = createProductCard(product);
//   productsContainer.appendChild(card);
// });


// createAutoSlider('slider1', images1 , 500);
// createAutoSlider('slider2', images2 , 4000);

// // رویداد کلیک دکمه برای تغییر تم
// document.getElementById('themeToggle').onclick = toggleTheme;

