const form = document.getElementById("myForm");
console.log(form.elements);
console.log([...form]);


const formData = new FormData(form);
console.log(formData); 
console.log([...formData]); // تبدیل به آرایه





















// شیء form درواقع یک HTMLFormElement هست که خودش قابل پیمایش (iterable) می‌باشد.
// یعنی می‌تونی روی اون با دستوراتی مثل for...of یا ... (spread) پیمایش کنی.
// form.elements → یه مجموعه (HTMLFormControlsCollection) هست، ولی iterable نیست
// Array, Map, Set, String, NodeList, Form → iterable هستن.
// const a = {a:1 , b:2}
// console.log({...a});

// for (let element of form) {
//   console.log(element); // هر بار یک input یا select برمی‌گردونه
// }
