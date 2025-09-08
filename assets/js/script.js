const form = document.getElementById("myForm");

const formData = new FormData(form);
console.log([...formData]); // تبدیل به آرایه


const obj = Object.fromEntries([...formData])
console.log(obj);




























// const params = new URLSearchParams(formData);
// console.log(params.toString());
// params.append("country", "iran");
// params.set("age", "31");
// params.delete("city");

// console.log(params.toString());
































// const iterator =  formData.entries()
// console.log(iterator);


// console.log(iterator.next()); // اولین عنصر
// console.log(iterator.next()); // دومین عنصر
// console.log(iterator.next()); // تمام شد









