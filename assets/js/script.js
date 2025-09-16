// // Object.keys() , Object.values()
// const obj = { z: 9 };
// obj.a = 1;
// obj['b'] = 'hi';
// Object.defineProperties(obj, { c: { value:2, enumerable:false }, d: { value:3, enumerable:true } });
// // console.log(obj); // {z: 9, a: 1, c: 3}   
// // console.log(Object.keys(obj)); // ["a", "b", "d"]
// // console.log(Object.values(obj)); // [9, 1, "hi", 3]

// const sym1 = Symbol('id');
// const sym2 = Symbol('id');
// console.log(sym1 === sym2); // false
// // Object.getOwnPropertyNames()
// obj[sym1] = 'hidden';
// console.log(Object.keys(obj)); // ["a"]
// console.log(Object.getOwnPropertyNames(obj)); // ["hidden"]
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(id)]

// // // delete object.property
// console.log(delete obj.a); // true
// console.log(obj.a); // undefined
// Object.defineProperty(obj, 'b', { configurable:false });
// console.log(delete obj.b); // false

// // Object.assign()
const target = {a:1};
const src = {b:2, c: {d:3}};
Object.assign(target, src);
console.log(target); // { a:1, b:2, c: { d:3 } }

// // Object.freeze()
const o = {a:1, b:{c:2}};
Object.freeze(o);
o.a = 99;            // شکست می‌خورد (silently یا TypeError در strict mode)
delete o.a;          // false
o.b.c = 3;           // موفق — چون nested object فریز نشده
console.log(o); // {a:1, b:{c:3}}

// // Object.seal()
const w = {a:1};
Object.seal(w);
w.a = 2;      // مجاز (اگر writable باشد)
delete w.a;   // false
w.b = 3;      // اضافه نمی‌شود
console.log(w);







































