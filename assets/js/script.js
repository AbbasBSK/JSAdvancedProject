const a = { x: 1, inner: { y: 2 } };
const b = { ...a };
b.inner.y = 99;
console.log(a.x); // 1   (x جدا شد)
console.log(a.inner.y); // 99  (inner هنوز مرجع مشترک است)
console.log(a.inner); // { y: 99 }  (inner هنوز مرجع مشترک است)