// مبحث Cloning and Merging Objects 
// // Clone: یعنی یک کپی از آبجکت بگیریم.
// می‌تونه شالو باشه → فقط سطح اول جدا میشه، مقادیر داخلی همچنان مرجع مشترک دارن.
// یا دیپ باشه → کل لایه‌های داخلی هم جدا میشن و کاملاً یک نسخه مستقل ساخته میشه.

// const a = { x: 1, inner: { y: 2 } };
// const b = { ...a , z : 5 };
// a.x = 9;
// a.inner.y = 99; // تغییر در inner.y
// console.log(b); //
// console.log(a); // { x: 9, inner: { y: 99 } }
// b.inner.y = 100
// console.log(a.inner.y); // 100 (inner هنوز مرجع مشترک است)

// const original = { a: 1, d: { b: 2 } };

// // 1) JSON way (not suitable for functions, Date, undefined, circular)
// const jsonClone = JSON.parse(JSON.stringify(original));
// // 2) structuredClone (modern browsers / Web API)
// const structured = structuredClone(original);

// original.a = 9;
// original.d.b = 99;
// console.log(jsonClone);
// console.log(structured);


// const original = {
//   num: 42,
//   date: new Date(),
//   undef: undefined,
//   // func: () => "hello",
//   nested: { x: 1 },
// };
// // 1) JSON way (not suitable for functions, Date, undefined, circular)
// const jsonClone = JSON.parse(JSON.stringify(original));
// console.log(jsonClone);


// // 2) structuredClone (modern browsers / Web API)
// const structured = structuredClone(original);
// console.log(structured);



// Object Destructuring
// تغییر نام (Renaming)
// const user = { id: 1, name: 'Ali' };
// const { name: username } = user;
// console.log(username); // 'Ali'

// // مقادیر پیش‌فرض (Default values)
// const opts = { verbose: undefined };
// const { verbose = false, timeout = 3000 } = opts;
// console.log(verbose); // false
// console.log(timeout); // 3000






































// مبحث Object Iteration
// روش اصلی 
// 1) for...in loop → پیمایش روی کلیدها
// const user = { name: "Ali", age: 25 };

// for (let key in user) {
//   console.log(key, ":", user[key]);
// }

// // 2) Object.keys().forEach() → پیمایش روی کلیدهای خود آبجکت
// const user2 = { name: "Ali", age: 25 };

// Object.keys(user2).forEach(key => {
//   console.log(key, ":", user2[key]);
// });


// // 3) Object.entries().forEach() → پیمایش روی کلید + مقدار همزمان// 

// const user3 = { name: "Ali", age: 25 };

// Object.entries(user3).forEach(([key, value]) => {
//   console.log(key, ":", value);
// });



// // سازنده کاراکتر
// function Character(name, power) {
//   this.name = name;
//   this.power = power;
// }

// // تعریف متد روی پروتوتایپ
// Character.prototype.attack = function () {
//   console.log(this.name + " attacks with power " + this.power + "!");
// };

// // ایجاد چند کاراکتر
// const hero = new Character("Hero", 50);
// console.log(hero);
// const villain = new Character("Villain", 40);
// console.log(villain);

// // استفاده از متد attack روی هر نمونه
// hero.attack();     // Hero attacks with power 50!
// villain.attack();  // Villain attacks with power 40!

// // اضافه کردن یک متد جدید روی پروتوتایپ بعد از ساخته شدن آبجکت‌ها
// Character.prototype.heal = function () {
//   console.log(this.name + " heals and regains energy!");
// };
// // حالا همه نمونه‌ها به heal هم دسترسی دارن
// hero.heal();      // Hero heals and regains energy!
// villain.heal();   // Villain heals and regains energy!














// const magicBox = { spell: "Fireball", energy: 100 };

// // destructuring با مقدار پیش‌فرض برای duration
// const { spell, energy, duration = 60 } = magicBox;

// console.log(`Casting ${spell} with ${energy} energy for ${duration} seconds!`);
















// const scores = { Ali: 10, Sara: 15, Reza: 12 };

// console.log(Object.entries(scores));


// // چاپ همه با Object.entries
// Object.entries(scores).forEach(([name, score]) => {
//   console.log(`${name}: ${score}`);
// });

// // پیدا کردن بیشترین
// let topName = null;
// let topScore = 0;
// Object.entries(scores).forEach(([name, score]) => {
//   if (score > topScore) {
//     topScore = score;
//     topName = name;
//   }
// });

// console.log(`${topName} has the highest score: ${topScore}!`);




















const settings = { sound: true, difficulty: "hard", controls: { jump: "space" } };

// استفاده از structuredClone (مرورگرهای مدرن / Node جدید)
const clone = structuredClone(settings);
clone.controls.jump = "shift";

console.log("Original:", settings.controls.jump);
console.log("Clone:", clone.controls.jump);





