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



// روش سنتی بدون پترن:
// const configA = { appName: "MyApp" };
// const configB = { appName: "MyApp" };
// دو تا آبجکت جدا هستن و اگر یکی تغییر کنه، اون یکی خبردار نمی‌شه.


// class Config {
//   static instance;

//   constructor(appName) {
//     // اگر قبلاً نمونه ساخته شده، همونو برگردون
//     if (Config.instance) {
//       console.log(`نمونه قبلی برگردونده شد: ${Config.instance.appName}`);
//       return Config.instance;
//     }

//     // در غیر این صورت مقدار جدید بساز
//     this.appName = appName;
//     Config.instance = this;//یه کپی از اولین نمونه ساخته‌شده در خود کلاس نگه می‌داره.
//     console.log(`نمونه جدید ساخته شد با نام: ${this.appName}`);
//   }
// }

// const config1 = new Config("MyApp");
// console.log(config1);

// const config2 = new Config("NewApp");
// console.log(config2.appName);     // "MyApp"








// const user1 = { role : "admin", canEdit: true, canDelete: true };
// const user2 = { role : "guest", canEdit: false, canDelete: false };


// function userFactory(role) {
//   if (role === "admin") {
//     return { role, canEdit: true, canDelete: true };
//   }
//   if (role === "user") {
//     return { role, canEdit: false, canDelete: false };
//   }
// }

// const admin = userFactory("admin");
// const guest = userFactory("user");

// console.log(admin); // { role: 'admin', canEdit: true, canDelete: true }
// console.log(guest); // { role: 'user', canEdit: false, canDelete: false }






function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(type) {
  switch (type) {
    case "car": return { type: "car", wheels: 4 };
    case "bike": return { type: "bike", wheels: 2 };
  }
};

const factory = new VehicleFactory();
const car = factory.createVehicle("bike");

console.log(car); // 








































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

