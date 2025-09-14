const obj = {};
console.log(obj);

Object.defineProperty(obj, "x", {
  value: 10,
  writable: false,   // نمی‌توان تغییر داد
  enumerable: true,  // در Object.keys دیده می‌شود
  configurable: true // می‌توان بعداً حذف یا دوباره تعریف کرد
});

obj.x = 12

console.log(obj);






























// const arr = [123456.78, new Date('2020-01-01T00:00:00Z')];
// console.log(arr.toLocaleString('fa-IR')); //'en-US' - 'ar-EG'




// const a = [typeof(1, 2, 3)];
// console.log(a.toString()); // "1,2,3"

// const b = ["1", ["2","3"], "4"];
// console.log(b[0].toString()); // "1,2,3,4"  — آرایهٔ داخلی هم toString می‌شود

// const c = [typeof(1, undefined, null, 4)];
// console.log(c.toString());